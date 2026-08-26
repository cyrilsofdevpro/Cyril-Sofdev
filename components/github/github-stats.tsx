"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, GitFork, Users, BookMarked, ExternalLink, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";

interface GithubData {
  profile: {
    login: string;
    name: string | null;
    avatarUrl: string;
    bio: string | null;
    followers: number;
    following: number;
    publicRepos: number;
    htmlUrl: string;
  };
  pinned: {
    name: string;
    description: string | null;
    url: string;
    stars: number;
    forks: number;
    language: string | null;
    updatedAt: string;
  }[];
  languages: Record<string, number>;
  contributions: {
    totalContributions: number;
    weeks: { contributionDays: { date: string; contributionCount: number }[] }[];
  } | null;
}

export function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Failed to load GitHub data");
        setData(json);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glass h-28 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="glass flex items-center gap-3 rounded-2xl p-6 text-sm text-muted-foreground">
        <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-400" />
        <p>
          Couldn't load live GitHub data right now ({error ?? "unknown error"}). No fake numbers are
          shown as a fallback — check the connection or the{" "}
          <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs">GITHUB_USERNAME</code>{" "}
          env var.
        </p>
      </div>
    );
  }

  const { profile, pinned, languages, contributions } = data;
  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  return (
    <div className="space-y-10">
      <Reveal className="flex flex-wrap items-center gap-6">
        <Image
          src={profile.avatarUrl}
          alt={profile.login}
          width={72}
          height={72}
          className="rounded-2xl border border-border"
        />
        <div>
          <h2 className="font-display text-xl font-semibold">{profile.name ?? profile.login}</h2>
          {profile.bio && <p className="text-sm text-muted-foreground">{profile.bio}</p>}
          <a
            href={profile.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-xs text-brand-cyan hover:underline"
          >
            @{profile.login} <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={BookMarked} label="Public Repos" value={profile.publicRepos} />
        <StatCard icon={Users} label="Followers" value={profile.followers} />
        <StatCard icon={Users} label="Following" value={profile.following} />
        <StatCard
          icon={Star}
          label="Total Stars (pinned)"
          value={pinned.reduce((sum, r) => sum + r.stars, 0)}
        />
      </Reveal>

      {contributions ? (
        <Reveal delay={0.1}>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {contributions.totalContributions.toLocaleString()} contributions in the last year
          </p>
          <div className="glass overflow-x-auto rounded-2xl p-5">
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {contributions.weeks.flatMap((week) =>
                week.contributionDays.map((day) => {
                  const intensity =
                    day.contributionCount === 0
                      ? "bg-surface-2"
                      : day.contributionCount < 3
                        ? "bg-brand-blue/30"
                        : day.contributionCount < 6
                          ? "bg-brand-blue/60"
                          : "bg-gradient-to-br from-brand-blue to-brand-cyan";
                  return (
                    <div
                      key={day.date}
                      title={`${day.contributionCount} contributions on ${day.date}`}
                      className={`h-[10px] w-[10px] rounded-[2px] ${intensity}`}
                    />
                  );
                })
              )}
            </div>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={0.1} className="glass rounded-2xl p-5 text-sm text-muted-foreground">
          Contribution graph requires a <code className="font-mono text-xs">GITHUB_TOKEN</code> with
          read access configured in the environment — add one to enable it live.
        </Reveal>
      )}

      {topLanguages.length > 0 && (
        <Reveal delay={0.12} className="flex flex-wrap gap-2">
          {topLanguages.map(([lang, count]) => (
            <Badge key={lang}>
              {lang} · {count}
            </Badge>
          ))}
        </Reveal>
      )}

      <div>
        <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-brand-cyan">
          Top Repositories
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pinned.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.04}>
              <Card className="h-full transition-colors hover:border-brand-cyan/40">
                <CardContent className="p-5">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-display text-sm font-semibold hover:text-brand-cyan"
                  >
                    {repo.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  {repo.description && (
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{repo.description}</p>
                  )}
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" /> {repo.forks}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
          {pinned.length === 0 && (
            <p className="text-sm text-muted-foreground">No public repositories found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Star;
  label: string;
  value: number;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <Icon className="h-4 w-4 text-brand-cyan" />
      <p className="mt-3 font-display text-2xl font-bold">{value.toLocaleString()}</p>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
