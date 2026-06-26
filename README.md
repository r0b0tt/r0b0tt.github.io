# Antonio Maina — CV

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Personal resume site for [Antonio Maina](https://antoniomaina.com) — a minimalist, print-friendly CV built with Next.js.

Live at [antoniomaina.com](https://antoniomaina.com).

## Getting started

```bash
git clone https://github.com/r0b0tt/r0b0tt.github.io.git
cd r0b0tt.github.io
pnpm install
pnpm dev
# open http://localhost:3000
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` if you want Cloudflare Web Analytics in production.

## Scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production (Next.js)
pnpm start        # start production server
pnpm preview      # build and preview on Cloudflare Workers locally
pnpm deploy       # build and deploy to Cloudflare Workers
pnpm cf-typegen   # generate Cloudflare Worker types
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
```

## Deploy to Cloudflare

This site uses the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare) (`@opennextjs/cloudflare`).

### Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) authenticated (`npx wrangler login`)

### First deploy

1. Set environment variables in the Cloudflare dashboard (Workers & Pages → your worker → Settings → Variables):
   - `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` — from Cloudflare Dashboard → Web Analytics → Add a site
2. Build and deploy:

```bash
pnpm deploy
```

3. Bind your custom domain in Cloudflare Dashboard → Workers & Pages → your worker → Custom Domains → add `antoniomaina.com` (and `www` if needed).

### Local preview (Workers runtime)

```bash
pnpm preview
```

This builds with OpenNext and serves the app locally via Wrangler.

### Optional: R2 caching

For better performance, enable R2 incremental caching — see the [OpenNext caching guide](https://opennext.js.org/cloudflare/caching). Uncomment the R2 sections in `wrangler.jsonc` and `open-next.config.ts`, then create the bucket with `npx wrangler r2 bucket create web-cv-opennext-cache`.

## Project structure

```
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/               # resume data configuration
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## Customization

All resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

Styling uses Tailwind CSS — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## Docker

Docker remains available for local or self-hosted deployments:

```bash
docker compose build     # build the container
docker compose up -d     # run the container
docker compose down      # stop the container
```

Note: the Docker setup uses `output: 'standalone'`, which was removed in favor of the Cloudflare OpenNext build. To use Docker, you may need to restore standalone output in `next.config.js` for that workflow.

## Acknowledgments

Design inspired by [Bartosz Jarocki](https://github.com/BartoszJarocki/cv)'s [minimalist cv](https://github.com/BartoszJarocki/cv) template.

## License

This project is based on [minimalist cv](https://github.com/BartoszJarocki/cv), which is licensed under the [MIT License](LICENSE). Copyright (c) 2023 Bartosz Jarocki.
