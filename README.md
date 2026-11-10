# BuildGenie Labs website

A fresh Next.js App Router website for BuildGenie Labs.

## Stack
- Next.js + React + TypeScript
- Tailwind CSS v4 (with custom CSS for the visual system)
- Lucide icons
- Manrope + Inter via `next/font`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Cloudflare Workers

The Cloudflare Worker and its self-reference are named `buildgenie-labs`. The
configuration uses the `buildgenie-labs-opennext-cache` R2 bucket; ensure it
exists in the target Cloudflare account.

To preview the Worker locally, run `npm run preview`. To build and deploy it
from an authenticated machine, run `npm run deploy`.

For Cloudflare Workers Builds, connect the repository to the
`buildgenie-labs` Worker and set the build command to
`npx opennextjs-cloudflare build` and the deploy command to
`npx opennextjs-cloudflare deploy`. Commit the configuration and lockfile
before deploying. Node.js 22.12 or later is required by Wrangler.

## Notes
- The homepage is a responsive first implementation.
- Contact currently uses `mailto:hello@buildgenielabs.com`.
- Navigation links are section anchors; dedicated pages and a mobile navigation drawer can be added next.
- Replace the CSS-built venture artwork with approved brand/product assets when available.
