# Identora — Harshika Jain (Next.js)

A Next.js 14 (App Router + TypeScript + Tailwind CSS) rebuild of
[identoraharshika.com](https://identoraharshika.com/).

## What's included

- **Home page** (`app/page.tsx`): Hero, About, Services overview, Portfolio,
  Testimonials, Contact — matching the original site's content.
- **Service pages** (`app/services/[slug]/page.tsx`): each of the 6 services
  ("Learn More" popups on the original site) is now its own real, linkable,
  SEO-friendly page — e.g. `/services/social-media-management`.
- **Contact form**: posts to `app/api/contact/route.ts`. Right now that route
  just validates and logs the submission (see comments in that file for how
  to wire it up to a real email provider like Resend, so form submissions
  actually reach your inbox).
- All content (services, testimonials, portfolio images, skills) lives in
  `data/services.ts` and `data/content.ts` — edit the text there instead of
  hunting through components.

## Images & video

The site currently points at the images and videos already hosted on your
Hostinger site (`https://identoraharshika.com/assest/...`), configured in
`next.config.js`. This means it works immediately without re-uploading
anything.

**Recommended next step:** download those files and put them in `/public`,
then update the `src` paths in `data/content.ts`, `components/Hero.tsx` and
`components/About.tsx` to local paths (e.g. `/img/girl.png`). That way your
site doesn't depend on the old Hostinger hosting staying online.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team):
push this folder to a GitHub repo and import it on Vercel — it builds and
deploys automatically. You can also deploy to any Node host, or export a
static build if you remove the API route and use `next export`-compatible
patterns.

## Structure

```
app/
  layout.tsx           Root layout, fonts, header/footer
  page.tsx              Home page
  globals.css
  services/[slug]/page.tsx   Individual service pages
  api/contact/route.ts  Contact form endpoint (stub)
components/
  Header.tsx, Footer.tsx, Hero.tsx, About.tsx, Services.tsx,
  Portfolio.tsx, Testimonials.tsx, Contact.tsx
data/
  services.ts            Content for all 6 services
  content.ts              Testimonials, portfolio, skills, nav links
```
