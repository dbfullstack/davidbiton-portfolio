import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { notifyTemplate, autoReplyTemplate } from "./templates";

export const runtime = "nodejs";

const GMAIL_USER = "davidbitonfullstack@gmail.com";
const TO_EMAIL = GMAIL_USER;
const FROM = `DB Studio <${GMAIL_USER}>`;

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

function getTransport() {
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) return null;
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass },
  });
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

  const transport = getTransport();
  if (!transport) {
    console.error(
      "[contact] GMAIL_APP_PASSWORD is not set — add it to .env.local for local dev " +
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

  const { name, from, message } = payload;

  try {
    await transport.sendMail({
      from: FROM,
      to: TO_EMAIL,
      replyTo: from,
      subject: `New inquiry from ${name}`,
      html: notifyTemplate({ name, from, message }),
    });
  } catch (error) {
    console.error("[contact] Failed to send lead notification:", error);
    return NextResponse.json(
      {
        error: "Couldn't send your message right now — please email davidbitonfullstack@gmail.com directly.",
      },
      { status: 502 },
    );
  }

  // Best-effort auto-reply — Gmail SMTP can relay to any recipient (unlike
  // Resend's sandbox sender), so this isn't restricted to verified addresses.
  // Still non-fatal if it fails: the lead notification above already
  // succeeded, which is what actually matters.
  if (from) {
    try {
      await transport.sendMail({
        from: FROM,
        to: from,
        subject: "Got your message — DB Studio",
        html: autoReplyTemplate({ name }),
      });
    } catch (error) {
      console.warn("[contact] Lead notified, but the visitor auto-reply failed:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
