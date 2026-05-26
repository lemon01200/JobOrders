const WEBHOOK_URL = import.meta.env.VITE_SIGNUP_WEBHOOK_URL as string | undefined;

interface NotifyPayload {
  email?: string;
  linkedInUrl?: string;
}

export async function notifyWebhook({ email, linkedInUrl }: NotifyPayload): Promise<void> {
  if (!WEBHOOK_URL) {
    if (import.meta.env.DEV) {
      console.warn('[webhook] VITE_SIGNUP_WEBHOOK_URL is not set; skipping notification.');
    }
    return;
  }

  const now = new Date();
  const time = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
    .format(now)
    .replace(/\//g, '-');
  const product = 'JobOrders';

  const lines = [
    `Product: ${product}`,
    email ? `Email: ${email}` : null,
    linkedInUrl ? `LinkedIn URL: ${linkedInUrl}` : null,
    `Time: ${time} (UTC+8)`,
  ].filter(Boolean);

  const text = lines.join('\n');

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        msg_type: 'text',
        content: { text },
      }),
    });
  } catch {
    // Swallow errors so UX is unaffected by webhook failures.
  }
}
