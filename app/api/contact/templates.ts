type NotifyArgs = { name: string; from?: string; message: string };
type AutoReplyArgs = { name: string };

const wrap = (title: string, body: string) => `
<div style="background:#07070a;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:520px;margin:0 auto;background:#111118;border:1px solid #1f1f2a;border-radius:14px;overflow:hidden;">
    <div style="padding:20px 28px;border-bottom:1px solid #1f1f2a;">
      <span style="display:inline-block;font-family:monospace;font-size:12px;font-weight:700;color:#07070a;background:linear-gradient(135deg,#22d3ee,#a78bfa);padding:3px 8px;border-radius:6px;">db</span>
      <span style="color:#f5f5f7;font-size:13px;margin-left:6px;">Studio</span>
    </div>
    <div style="padding:28px;color:#f5f5f7;">
      <h1 style="font-size:18px;margin:0 0 16px;color:#f5f5f7;">${title}</h1>
      ${body}
    </div>
  </div>
</div>`;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function notifyTemplate({ name, from, message }: NotifyArgs): string {
  const body = `
    <p style="color:#a1a1aa;font-size:14px;line-height:1.6;margin:0 0 6px;"><strong style="color:#f5f5f7;">From:</strong> ${escapeHtml(name)}${from ? ` (${escapeHtml(from)})` : " (no reply email given)"}</p>
    <div style="margin-top:16px;padding:16px;background:#0d0d12;border:1px solid #1f1f2a;border-radius:10px;color:#f5f5f7;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
  `;
  return wrap("New inquiry via davidbiton.dev", body);
}

export function autoReplyTemplate({ name }: AutoReplyArgs): string {
  const body = `
    <p style="color:#a1a1aa;font-size:15px;line-height:1.7;margin:0 0 16px;">Hi ${escapeHtml(name)},</p>
    <p style="color:#a1a1aa;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Thanks for reaching out — this landed with David Biton personally, not a bot. I read every message myself and reply within <strong style="color:#f5f5f7;">1–2 business days</strong>.
    </p>
    <p style="color:#a1a1aa;font-size:15px;line-height:1.7;margin:0 0 16px;">
      A quick reminder of what DB Studio takes on: AI strategy and adoption, fractional engineering management, backend architecture, and mobile SDK direction — senior, load-bearing engagements.
    </p>
    <p style="color:#a1a1aa;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Need to reach me sooner or add more detail? Reply directly to this email, or find me on
      <a href="https://www.linkedin.com/in/david-biton-93b818a0/" style="color:#22d3ee;">LinkedIn</a> or
      <a href="https://github.com/dbfullstack" style="color:#22d3ee;">GitHub</a>.
    </p>
    <p style="color:#f5f5f7;font-size:15px;line-height:1.7;margin:24px 0 0;">— David Biton, DB Studio</p>
  `;
  return wrap("Got your message.", body);
}
