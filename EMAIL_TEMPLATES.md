# Email Templates - JobOrders Waitlist Mode

## Welcome Email (Confirmation)

**Subject**: `You're in. Seat #{N} of 50.`

**From**: `{founder_name} <founder@joborders.com>`

**Body** (Plain text):

```
Welcome to the Founding 50 waitlist, {{first_name}}.

You're seat #{N}. {{50 - N}} left for the rest of the
recruiting world.

What happens next:

1. We're heads-down building. Target launch: Q3 2026.
2. The day we ship, you get an email with a magic link
   to activate your account.
3. Your price is locked from that day forward:
   $99/month, for life, even when public pricing hits $199.
4. Until launch, expect 1 update email per month —
   progress, not noise.

You don't pay anything until you activate. Reply to this
email anytime — it comes to me directly.

— {{founder_name}}, Founder, JobOrders
```

**Body** (HTML version):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #0B0F19;
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .badge {
      display: inline-block;
      background: #FBBF24;
      color: #0B0F19;
      padding: 8px 16px;
      border-radius: 8px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 16px 0;
    }
    .seat-number {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 18px;
      color: #16A34A;
      font-weight: 600;
    }
    .steps {
      background: #F6F5F0;
      padding: 24px;
      border-radius: 12px;
      margin: 24px 0;
    }
    .steps ol {
      margin: 0;
      padding-left: 20px;
    }
    .steps li {
      margin-bottom: 12px;
    }
    .highlight {
      background: #FBBF24;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .footer {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #E6E3DA;
      font-size: 14px;
      color: #6B7280;
    }
  </style>
</head>
<body>
  <div class="badge">🎟️ FOUNDING 50 WAITLIST</div>
  
  <h1>Welcome to the Founding 50 waitlist, {{first_name}}.</h1>
  
  <p>You're <span class="seat-number">seat #{N}</span>. <strong>{{50 - N}} left</strong> for the rest of the recruiting world.</p>
  
  <div class="steps">
    <p><strong>What happens next:</strong></p>
    <ol>
      <li>We're heads-down building. <strong>Target launch: Q3 2026.</strong></li>
      <li>The day we ship, you get an email with a magic link to activate your account.</li>
      <li>Your price is locked from that day forward: <span class="highlight">$99/month, for life</span>, even when public pricing hits $199.</li>
      <li>Until launch, expect 1 update email per month — progress, not noise.</li>
    </ol>
  </div>
  
  <p>You don't pay anything until you activate. Reply to this email anytime — it comes to me directly.</p>
  
  <div class="footer">
    <p>— {{founder_name}}<br>Founder, JobOrders</p>
  </div>
</body>
</html>
```

## Resend Confirmation Email

**Subject**: `Here's your confirmation — Seat #{N} of 50`

**Body**:

```
Hey {{first_name}},

You're already on the list! Here's your confirmation:

Seat number: #{N} of 50
Reserved on: {{reservation_date}}
Locked price: $99/mo for life

Target launch: Q3 2026. We'll send a magic link to activate
when we ship.

Reply to this email if you have any questions — it comes
straight to me.

— {{founder_name}}, Founder, JobOrders
```

## Charter Members Waitlist (Seats 51+)

**Subject**: `You're on the Charter Members list`

**Body**:

```
Hey {{first_name}},

The Founding 50 filled up fast — but you're on the next tier:
Charter Members waitlist.

Your position: #{N}
Charter price: $129/mo for life (vs. $199 public pricing)

We'll email you the moment Charter seats open. Same drill:
no payment until launch, locked price for life.

— {{founder_name}}, Founder, JobOrders
```

## Monthly Update Email (Template)

**Subject**: `Update #{month} — What we shipped this month`

**Body structure**:

```
Hey {{first_name}},

Quick update on what we built in {{month}}:

[2-3 bullet points of progress]
• Feature X shipped
• Data source Y integrated
• Performance improvement Z

On track for Q3 2026 launch. Next month: [preview].

Your seat is still reserved at $99/mo for life.

Questions? Just reply.

— {{founder_name}}
```

## Launch Day Email (Magic Link)

**Subject**: `🚀 JobOrders is live — Activate your account`

**Body**:

```
{{first_name}},

It's here.

Your first digest is ready. Click below to activate:

[Activate my account →]

What happens now:
1. You'll set up your profile (5 minutes)
2. Tomorrow at 7:30 AM ET, your first digest lands
3. Billing starts today at $99/mo — locked for life

Your seat: #{N} of 50
Your price: $99/mo (never increases)

Let's go.

— {{founder_name}}
```

---

## Email Design System

### Colors
- Background: `#FFFFFF` or `#F6F5F0` (soft surface)
- Text: `#0B0F19` (ink)
- Secondary text: `#6B7280`
- Accent: `#FBBF24` (founding yellow)
- Links: `#1E5EFF` (brand primary)
- Success: `#16A34A` (win green)

### Typography
- Body: Inter, 16px, line-height 1.6
- Headings: Inter, 24px, font-weight 600
- Mono (seat numbers, prices): IBM Plex Mono, 16-18px
- Small text: 14px

### Components
- Badge: Yellow background, mono font, 8px padding
- Buttons: Full-width on mobile, 56px height, 14px radius
- Dividers: 1px `#E6E3DA`

### Mobile Responsive
All emails must be mobile-responsive with:
- Max-width: 600px
- Font-size: ≥ 16px for body text
- Touch-friendly buttons: ≥ 44px height
- Single column layout on mobile

---

## Backend Integration Points

### When to send each email:

1. **Welcome Email** - Immediately after successful waitlist signup
2. **Resend Confirmation** - When user clicks "Resend my confirmation" in modal
3. **Charter Members Email** - When user signs up and Founding 50 is full
4. **Monthly Update** - First Monday of each month, to all waitlist subscribers
5. **Launch Day Email** - On launch day, to all waitlist subscribers in seat order

### Required data fields:

```typescript
interface WaitlistEntry {
  email: string;
  first_name?: string;
  seat_number: number;
  tier: 'founding' | 'charter' | 'standard';
  reserved_at: Date;
  linkedin_url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}
```

### Email service integration:

Recommended: Resend, Postmark, or SendGrid

Example API call:
```typescript
await sendEmail({
  to: email,
  from: 'founder@joborders.com',
  subject: `You're in. Seat #${seatNumber} of 50.`,
  html: renderWelcomeEmail({ firstName, seatNumber }),
  reply_to: 'founder@joborders.com',
  tags: ['waitlist', 'founding-50'],
});
```
