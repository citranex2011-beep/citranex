# AGENTS.md — citranex

Single-page marketing site for Citranex (tecnologia, design e estratégia). Next.js 16 App Router, Tailwind v4, dark-only pt-BR.

## Stack
- **Framework**: Next.js `16.3.0` (App Router, RSC)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`; tokens defined in `app/globals.css` under `@theme inline` (brand + semantic CSS variables — use them, no arbitrary hex)
- **UI primitives**: `@base-ui/react` (Button), `class-variance-authority`, `lucide-react` v1.17
- **Language**: TypeScript strict; path alias `@/*` → repo root
- **Fonts**: `Raleway` (sans) + `JetBrains Mono` (mono), loaded via `next/font/google` in `app/layout.tsx`
- **Analytics**: `@vercel/analytics/next` — rendered only in production
- **Package manager**: pnpm (`pnpm-lock.yaml`); no `engines`/`packageManager` field pinned

## Architecture (single-page site)
- `app/page.tsx` — composes the page from section components in order: `Header → Hero → Services → About → Portfolio → Process → CTA → Footer`
- `app/layout.tsx` — metadata (PT-BR, OG, canonical to `https://citranex.com.br`), viewport (dark theme `#0D0D14`), Analytics gate
- `app/globals.css` — Tailwind v4 entry + brand palette + `Reveal`/motion keyframes + `prefers-reduced-motion` overrides
- `app/sitemap.ts`, `app/robots.ts` — read URL from `data/site.ts` `siteMeta.url`
- `components/sections/*` — page sections (each maps to a `#id` consumed by the header nav)
- `components/ui/*` — reusable bits (`Button`, `WhatsAppButton`, `Reveal`, `Logo`/`CitranexMark`, `SocialLinks`, `ServiceCard`, `PortfolioCard`, `SectionLabel`)
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- `public/portfolio/projeto-0[1-6].png` — portfolio card images referenced by `data/site.ts`
- `public/logo-c.png` — símbolo "C" oficial (515×448). Usado em `components/ui/logo.tsx` (header, footer, hero-visual) e como favicon em `app/layout.tsx`.
- `public/logo-wordmark.png` — wordmark "CITRANEX" oficial (1250×204). Usado em `components/ui/logo.tsx` ao lado do "C".
- `public/apple-icon.png` — ícone Apple touch 180×180, gerado a partir de `logo-c.png` sobre fundo `#0D0D14`.
- `public/og.png` — Open Graph 1200×630 para compartilhamento (WhatsApp/LinkedIn/etc). Compõe `logo-c.png` + `logo-wordmark.png` + tagline.

## Content rule (important)
**All site copy lives in `data/site.ts` — edit nothing inside components.**
The file's own header comment says it explicitly:
> "Altere textos, serviços, projetos, estatísticas, redes e contato APENAS aqui. Nenhum conteúdo deve ser escrito diretamente dentro dos componentes."

This includes: `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `contact`, `socialLinks`, `navLinks`, `services`, `stats`, `processSteps`, `projects`, `footerServices`, `siteMeta`.

## Commands
- `pnpm dev` — dev server on `http://localhost:3000`
- `pnpm build` — production build
- `pnpm start` — serve built app
- `pnpm lint` — runs `eslint .` (see gotchas below)
- No `test` script, no `typecheck` script. Type-check manually with `pnpm exec tsc --noEmit` if needed.

## Branches / deployment
- `main` is the deployed branch. Every merge auto-deploys (per README).
- `origin/v0/citranex-2c835a27` is the v0.app-managed branch. The repo is linked to a v0 project (see README); v0 pushes commits directly to this repo. Don't rebase or force-push it.
- Currently both branches are at the same commit (`b934001`).
- Remote: `https://github.com/citranex2011-beep/citranex.git`
- No CI workflows, no pre-commit hooks.

## Known gotchas
1. **`components/sections/footer.tsx` line 2 used to read `import { Logo } from <citranex-logo></citranex-logo>`** (invalid JSX-as-import, blocked the build). Fixed in commit `7d53813`; the import now correctly points to `@/components/ui/logo`. If you see that string again in the file, something reverted the fix.
2. **`next.config.mjs` sets `typescript.ignoreBuildErrors: true`.** Don't rely on `pnpm build` to catch type errors. Run `pnpm exec tsc --noEmit` explicitly.
3. **`pnpm lint` will currently fail.** `eslint .` is wired up but ESLint is not in `devDependencies` and there is no `eslint.config.*` or `.eslintrc*`. Either install `eslint` + `eslint-config-next` and add a flat config, or replace the script with `next lint` (and re-add `eslint-config-next`).
4. **`.gitignore` has v0 sandbox entries** (`__v0_runtime_loader.js`, `__v0_devtools.tsx`, `__v0_jsx-dev-runtime.ts`, `.snowflake/`, `.v0-trash/`, `.vercel/`) — leave them; they're v0 runtime, not project files.
5. **No real tests.** Verification = dev server + visual check on each section. Sections are wired by `id` (`inicio`, `sobre`, `servicos`, `portfolio`, `processo`, `contato`) — keep these IDs in sync with `navLinks` and `Reveal` anchors.
6. **Dark theme only.** `color-scheme: dark` is set globally and `<html className="dark">` in `app/layout.tsx`. Don't introduce light-mode styles.
7. **WhatsApp link builder** is `whatsappLink(number, message)` in `data/site.ts` — use it everywhere; don't hand-write `wa.me/` URLs.
8. **Brand color tokens** (`--brand-purple`, `--brand-blue`, `--brand-cyan`, `--brand-lilac`, `--brand-ink`) and semantic tokens (`--primary`, `--accent`, etc.) are defined in `app/globals.css` `:root`. Tailwind utilities (`bg-brand-purple`, `text-gradient-brand`, etc.) are wired in `@theme inline` — prefer these over raw hex.

## Style conventions in use
- Section components wrap content in `<Reveal>` with staggered `delay={n * 70..90}` for entrance animations. Respect `prefers-reduced-motion` (handled globally).
- Icons: prefer `lucide-react`. The few brand glyphs missing from lucide (Instagram/LinkedIn/Behance) are hand-rolled SVGs in `components/ui/social-links.tsx`.
- `components.json` declares shadcn style `base-nova`, but the project doesn't actually use shadcn's Radix-based components — it uses `@base-ui/react` directly. If you add a new primitive, follow `@base-ui/react` patterns (see `components/ui/button.tsx`).
- No `any`, no implicit returns; all components are typed. Components that use hooks/state are marked `"use client"` at the top.

## Where to look first when something changes
- Copy/numbers/links → `data/site.ts`
- New section → `components/sections/`, register in `app/page.tsx`, add nav entry to `data/site.ts` `navLinks` with matching `id`
- Brand colors/motion → `app/globals.css`
- Site metadata/SEO → `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- Logo → `components/ui/logo.tsx` consome os PNGs em `public/logo-c.png` e `public/logo-wordmark.png`. Para trocar a logo, substitua esses dois arquivos (mesmo nome/caminho) — não precisa mexer em código.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
