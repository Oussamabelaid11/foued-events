import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { name, email, phone, date, service, message } = data ?? {};
  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  const sheetsWebhookUrl = process.env.SHEETS_WEBHOOK_URL;

  const deliveries = await Promise.allSettled([
    formspreeEndpoint
      ? fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, phone, date, service, message }),
        })
      : Promise.reject(new Error('FORMSPREE_ENDPOINT not configured')),
    sheetsWebhookUrl
      ? fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, date, service, message }),
        })
      : Promise.reject(new Error('SHEETS_WEBHOOK_URL not configured')),
  ]);

  const [formspreeResult, sheetsResult] = deliveries;
  const anySucceeded = deliveries.some((d) => d.status === 'fulfilled');

  if (!anySucceeded) {
    return NextResponse.json(
      {
        error: 'Both destinations failed',
        formspree: formspreeResult.status === 'rejected' ? String(formspreeResult.reason) : 'ok',
        sheets: sheetsResult.status === 'rejected' ? String(sheetsResult.reason) : 'ok',
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ status: 'ok' });
}
