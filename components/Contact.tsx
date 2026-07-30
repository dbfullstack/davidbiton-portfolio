"use client";

import { useId, useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "davidbitonfullstack@gmail.com";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/david-biton-93b818a0",
    href: "https://www.linkedin.com/in/david-biton-93b818a0/",
  },
  {
    label: "GitHub",
    value: "github.com/dbfullstack",
    href: "https://github.com/dbfullstack",
  },
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus:border-accent";

function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const statusId = useId();

  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot — hidden from real visitors
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, from, message, company }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="py-8 text-center">
        <p className="mb-2 font-medium text-text-primary">Message sent.</p>
        <p className="text-sm text-text-secondary">
          Check your inbox for a confirmation{from ? ` at ${from}` : ""} — I read
          every message myself and reply within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      {/* Honeypot: visually hidden (not display:none, which some bots skip), never seen by real visitors. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${nameId}-company`}>Company</label>
        <input
          id={`${nameId}-company`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="sr-only">
            Your name
          </label>
          <input
            id={nameId}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={emailId} className="sr-only">
            Your email (optional)
          </label>
          <input
            id={emailId}
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Your email (optional)"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor={messageId} className="sr-only">
          What are you building?
        </label>
        <textarea
          id={messageId}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you building? What kind of help do you need?"
          required
          rows={5}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? statusId : undefined}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-bg shadow-lg shadow-accent/20 transition-all hover:from-accent-hover hover:to-accent-2 hover:shadow-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </button>

      <p id={statusId} role="status" aria-live="polite" className="text-xs text-red-400 empty:hidden">
        {status === "error" ? errorMsg : ""}
      </p>

      <p className="text-xs text-text-muted">
        You&apos;ll get an email confirmation, and I&apos;ll personally reply
        within 1–2 business days. Prefer email directly?{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="underline hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {EMAIL}
        </a>
      </p>
    </form>
  );
}

export default function Contact() {
  const headingId = useId();

  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className="relative border-t border-border overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="glow-blob"
        style={{
          width: 500,
          height: 500,
          background: "var(--color-accent-2)",
          bottom: -180,
          right: -100,
          opacity: 0.25,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="text-center mb-14">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            08 / CONTACT
          </div>
          <h2 id={headingId} className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Have something{" "}
            <span className="gradient-text">load-bearing</span> to build?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            DB Studio takes on a small number of engagements at a time. AI
            strategy, engineering leadership, backend architecture, mobile
            direction — if it&apos;s senior, let&apos;s talk.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <Reveal className="lg:col-span-3 card p-6 md:p-8">
            <h3 className="font-mono text-sm text-text-primary tracking-wide mb-5">
              Send a message
            </h3>
            <ContactForm />
          </Reveal>
          <Reveal delayMs={100} className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-sm text-text-primary tracking-wide mb-5">
              Or reach me directly
            </h3>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="block card px-5 py-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-text-muted mb-1">
                  {c.label}
                </div>
                <div className="text-sm text-text-primary group-hover:text-accent transition-colors flex items-center justify-between gap-2 break-all">
                  {c.value}
                  <span aria-hidden="true" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0">
                    →
                  </span>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
