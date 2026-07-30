import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { notifyTemplate, autoReplyTemplate } from "./templates";

export const runtime = "nodejs";

const TO_EMAIL = "davidbitonfullstack@gmail.com";
// Swap for a verified custom-domain sender (e.g. "DB Studio <hello@davidbiton.dev>")
// once a domain is verified in Resend. Until then, Resend's shared sender can
// only deliver to the account's own verified address — see the best-effort
// auto-reply handling below.
const FROM = "DB Studio <onboarding@resend.dev>";

type Payload = { name: string; from?: string; message: string; company?: string };

function parsePayload(body: unknown): Payload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const from = typeof b.from === "string" ? b.from.trim() : "";
  const company = typeof b.company === "string" ? b.company.trim() : "";

  if (!name || name.length > 200) return null;
  if (message.length < 10 || message.length > 5000) return null;
  if (from && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) return null;

  return { name, message, from: from || undefined, company };
}

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(raw);
  if (!payload) {
    return NextResponse.json(
      { error: "Add your name and a message (10+ characters), then try again." },
      { status: 400 },
    );
  }

  // Honeypot — real visitors never fill this hidden field.
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not set — add it to .env.local for local dev " +
        "and to the Vercel project's Environment Variables for production.",
    );
    return NextResponse.json(
      {
        error:
          "Email is temporarily unavailable — please reach out at davidbitonfullstack@gmail.com directly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, from, message } = payload;

  const notify = await resend.emails.send({
    from: FROM,
    to: TO_EMAIL,
    replyTo: from,
    subject: `New inquiry from ${name}`,
    html: notifyTemplate({ name, from, message }),
  });

  if (notify.error) {
    console.error("[contact] Failed to send lead notification:", notify.error);
    return NextResponse.json(
      {
        error: "Couldn't send your message right now — please email davidbitonfullstack@gmail.com directly.",
      },
      { status: 502 },
    );
  }

  // Best-effort auto-reply. Not fatal if it fails — e.g. before a sending
  // domain is verified in Resend, the shared sender can only deliver to the
  // account's own address, so replies to third-party visitor emails 403.
  // The lead notification above already succeeded either way.
  if (from) {
    const reply = await resend.emails
      .send({
        from: FROM,
        to: from,
        subject: "Got your message — DB Studio",
        html: autoReplyTemplate({ name }),
      })
      .catch((error: unknown) => ({ error }));

    if (reply && "error" in reply && reply.error) {
      console.warn(
        "[contact] Lead notified, but the visitor auto-reply failed " +
          "(likely an unverified Resend sending domain):",
        reply.error,
      );
    }
  }

  return NextResponse.json({ ok: true });
}
