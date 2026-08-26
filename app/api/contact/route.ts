import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { getResendClient } from "@/lib/resend";

// Simple in-memory rate limiting per server instance. Good enough for a
// portfolio contact form; swap for Upstash/Redis if traffic grows.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent recently. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    // Honeypot tripped — silently succeed so bots don't learn anything.
    if (parsed.data.company) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, subject, message } = parsed.data;

    if (process.env.RESEND_API_KEY) {
      const resend = getResendClient();
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL ?? "cyrilsofdev@gmail.com",
        replyTo: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    } else {
      // No RESEND_API_KEY configured yet — don't fail the request in dev,
      // but make it obvious in the server logs.
      console.warn("[contact] RESEND_API_KEY not set — email not sent. Message:", {
        name,
        email,
        subject,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to process submission", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
