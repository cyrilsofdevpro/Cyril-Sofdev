import { NextResponse } from "next/server";
import { githubUsername } from "@/data/socials";

// Cache GitHub responses for 1 hour at the edge/CDN layer to stay well
// within GitHub's unauthenticated (60/hr) or authenticated (5000/hr) limits.
export const revalidate = 3600;

const GITHUB_API = "https://api.github.com";

type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

type GitHubRepo = {
  fork: boolean;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

type GitHubGraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              date: string;
              contributionCount: number;
            }>;
          }>;
        };
      };
    };
  };
};

function authHeaders() {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

async function fetchContributions(username: string) {
  // GitHub's REST API doesn't expose the contribution graph directly —
  // it's only available via the GraphQL API. We query it if a token with
  // `read:user` scope is present; otherwise we skip the graph gracefully
  // rather than showing fabricated numbers.
  if (!process.env.GITHUB_TOKEN) return null;

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: username } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  const json = (await res.json()) as GitHubGraphQLResponse;
  return json?.data?.user?.contributionsCollection?.contributionCalendar ?? null;
}

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME ?? githubUsername;

    const [profileRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${username}`, {
        headers: authHeaders(),
        next: { revalidate },
      }),
      fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`, {
        headers: authHeaders(),
        next: { revalidate },
      }),
    ]);

    if (!profileRes.ok) {
      return NextResponse.json(
        { error: `GitHub profile not found for "${username}"` },
        { status: profileRes.status }
      );
    }

    const profile = (await profileRes.json()) as GitHubProfile;
    const repos = reposRes.ok ? ((await reposRes.json()) as GitHubRepo[]) : [];

    const pinned = [...repos]
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updatedAt: repo.updated_at,
      }));

    const languageCounts: Record<string, number> = {};
    repos.forEach((repo) => {
      if (repo.language) languageCounts[repo.language] = (languageCounts[repo.language] ?? 0) + 1;
    });

    const contributions = await fetchContributions(username);

    return NextResponse.json({
      profile: {
        login: profile.login,
        name: profile.name,
        avatarUrl: profile.avatar_url,
        bio: profile.bio,
        followers: profile.followers,
        following: profile.following,
        publicRepos: profile.public_repos,
        htmlUrl: profile.html_url,
      },
      pinned,
      languages: languageCounts,
      contributions,
    });
  } catch (err) {
    console.error("[github] Failed to fetch GitHub data", err);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
