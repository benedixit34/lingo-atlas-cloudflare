# Lingo Atlas (Next.js)

Straight conversion of the static `coming/` site to Next.js (App Router, TypeScript, Tailwind CSS v4).

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export -> ./out
npm run preview   # build + run locally on Cloudflare's runtime (wrangler dev)
npm run deploy    # build + deploy to Cloudflare (wrangler deploy)
```

## Cloudflare

The site is a fully static export (`output: "export"`), served by Cloudflare
Workers Static Assets (`wrangler.jsonc` points at `./out`).

**Git-connected deploy (Workers Builds / Pages):** build command `npm run build`,
output directory `out`. For Workers Builds the deploy command is `npx wrangler deploy`.

**Manual:** `npx wrangler login`, then `npm run deploy`.

## Routes

| Original               | Now                                  |
| ---------------------- | ------------------------------------ |
| `/index.html`          | `/`                                  |
| `/careers.html`        | `/careers`                           |
| `/careers/<role>.html` | `/careers/<role>`                    |

The old `.html` URLs redirect to the new ones automatically via Cloudflare's built-in pretty-URL handling.

## Layout

- `app/(home)` – coming-soon page + newsletter (Web3Forms)
- `app/(careers)/careers` – careers listing
- `app/(jobs)/careers/[slug]` – the three role pages, driven by `lib/jobs.ts`
- `components/` – header/mobile menu, footer, newsletter form, application modal (Cloudinary upload + EmailJS)
- `public/assets/` – images and favicon

Each route group has its own root layout and `globals.css`, because the three
original page types each had their own stylesheet (with clashing class names such
as `.hero` and `.apply-button`). This keeps them isolated exactly as they were.

To add a role, add an entry to `lib/jobs.ts` (and a card in `app/(careers)/careers/page.tsx`).
