# AirPick

Minimal Next.js landing page for AirPick.ai with a simple waitlist form.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy
Recommended: Vercel

## Notes
The waitlist endpoint in this version writes emails to a local text file:
`waitlist-emails.txt`

That works for local testing, but is not durable on serverless hosting. It is intended as the simplest MVP baseline.
