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

## Scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
```

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

```bash
docker compose build     # build the container
docker compose up -d     # run the container
docker compose down      # stop the container
```

## Acknowledgments

Design inspired by [Bartosz Jarocki](https://github.com/BartoszJarocki/cv)'s [minimalist cv](https://github.com/BartoszJarocki/cv) template.

## License

This project is based on [minimalist cv](https://github.com/BartoszJarocki/cv), which is licensed under the [MIT License](LICENSE). Copyright (c) 2023 Bartosz Jarocki.
