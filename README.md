# AirPick

Minimal Next.js landing page for AirPick.ai with a simple hosted waitlist form using Formspree.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Formspree setup

1. Create a free form in Formspree.
2. Copy your form endpoint, which looks like:
   `https://formspree.io/f/your_form_id`
3. Put it in `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

## Deploy
Recommended: Vercel

Add the same environment variable in Vercel project settings.
