# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives under `app/` with entry `layout.tsx` and `page.tsx`. Server routes under `app/api/auth/[...nextauth]/route.ts` drive NextAuth handlers. Database helpers and Drizzle schemas sit in `lib/` (`lib/db.ts` for the pooled client, `lib/schema/pg.ts` for table definitions). Shared auth configuration is centralized in `auth.ts`. Static assets belong in `public/`, while build and runtime configuration is in root files such as `drizzle.config.ts`, `open-next.config.ts`, and `wrangler.jsonc`.

## Build, Test, and Development Commands
Run `pnpm dev` for a fast local server (Turbopack). `pnpm build` performs a production Next.js build, and `pnpm start` serves the compiled output. Use `pnpm lint` to run ESLint with the Next.js defaults. Cloudflare deployment flows are scripted with `pnpm preview` (staging Worker) and `pnpm deploy` (production Worker). Refresh Wrangler bindings with `pnpm cf-typegen` after editing `cloudflare-env.d.ts` or `wrangler.jsonc`.

## Coding Style & Naming Conventions
Stick to TypeScript with 2-space indentation and single quotes disabled (see existing files). Prefer named exports for modules and `camelCase` for functions/variables; keep Drizzle table constants plural (`users`, `accounts`). Align with Next.js ESLint rules—run `pnpm lint --fix` before committing, and avoid default exports unless the module naturally exposes a single element.

## Testing Guidelines
Automated tests are not yet configured; until a suite is introduced, gate changes by running `pnpm lint` and manually exercising key flows (`signIn`, session persistence) via `pnpm dev`. When adding tests, prefer Vitest with file names ending in `.test.ts` alongside the code under test, and document any coverage goals in your PR description.

## Commit & Pull Request Guidelines
Follow the existing history: short (≤72 char) imperative commit subjects such as “Add session cleanup hook,” with optional body explaining context. Each PR should describe the change, link relevant issues, list the commands executed (lint/dev/build), and include screenshots or curl examples for API/UI work. Ensure reviewers can reproduce environment changes by noting new secrets or migrations.

## Environment & Deployment
Cloudflare Workers supply runtime configuration. Bind `PG_URL`, `AUTH_SECRET`, and `NEXTJS_ENV` via `wrangler secret put` and keep types current with `pnpm cf-typegen`. The OpenNext build emits to `.open-next/`; confirm assets upload by checking `wrangler.jsonc` bindings. Before merging, run `pnpm preview` against a staging project to validate Worker behavior and Drizzle connectivity.
