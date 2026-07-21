# Grupos Caceres

Premium corporate website for **Grupos Caceres** — a strategic consulting and market-entry advisory firm helping international companies expand into Venezuela.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (light / dark mode)

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (commonly `http://localhost:3000` or `http://127.0.0.1:3001`).

## Contact

- Email: info@caceres-group.com
- Phone: +1 (954) 740-0389

## Notes

- Contact form is front-end only; connect to an API or CRM when ready.
- Hero imagery: El Ávila overlooking Caracas (`public/images/hero-avila.jpg`).
- Representative engagements are anonymous illustrations — update with real confidential summaries as appropriate.

## SEO / Google Search Console

A brand-new Vercel URL is **not** instantly findable on Google — indexing often takes days to weeks. Searching “Caceres Group” also won’t match well until Google associates that phrase with **Grupos Caceres** and this site.

Live site: https://caceres-group.vercel.app  
Sitemap: https://caceres-group.vercel.app/sitemap.xml  
Robots: https://caceres-group.vercel.app/robots.txt

To speed discovery:

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://caceres-group.vercel.app`
3. Verify ownership (HTML tag or DNS if you later add a custom domain)
4. Sitemaps → submit `https://caceres-group.vercel.app/sitemap.xml`
5. Optionally use URL Inspection → Request indexing on the homepage

A custom domain with history (e.g. `gruposcaceres.com`) typically ranks more reliably than a new `*.vercel.app` hostname.
