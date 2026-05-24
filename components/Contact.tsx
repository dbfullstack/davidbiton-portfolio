"use client";

import { useState } from "react";

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

function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry${name ? ` from ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name || ""}${from ? ` (${from})` : ""}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Your email (optional)"
          className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What are you building? What kind of help do you need?"
        required
        rows={5}
        className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
      />
      <button
        type="submit"
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-2 hover:from-accent-hover hover:to-accent-2 text-bg font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
      >
        Send via email
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </button>
      <p className="text-xs text-text-muted">
        Opens your email client with everything filled in.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-border overflow-hidden"
    >
      <div
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
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-accent mb-3 tracking-wider">
            04 / CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Have something{" "}
            <span className="gradient-text">load-bearing</span> to build?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            I take on a small number of engagements at a time. AI strategy,
            engineering leadership, backend architecture, mobile direction — if
            it's senior, let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <div className="lg:col-span-3 card p-6 md:p-8">
            <h3 className="font-mono text-sm text-text-primary tracking-wide mb-5">
              Send a message
            </h3>
            <ContactForm />
          </div>
          <div className="lg:col-span-2 space-y-3">
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
                className="block card px-5 py-4 group"
              >
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-text-muted mb-1">
                  {c.label}
                </div>
                <div className="text-sm text-text-primary group-hover:text-accent transition-colors flex items-center justify-between gap-2 break-all">
                  {c.value}
                  <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
