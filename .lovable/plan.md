
## Why the site is blank on GitHub Pages

GitHub Pages serves your site from a subpath like `https://<user>.github.io/<repo>/`, but the project is currently configured for a root path (`/`). Two things break:

1. **Asset paths 404.** Vite builds `index.html` with `<script src="/assets/…">`. On GitHub Pages that resolves to `https://<user>.github.io/assets/…` (wrong repo), so nothing loads and you get a blank page. This is the main cause.
2. **React Router 404 on refresh / deep links.** `BrowserRouter` with no basename doesn't know about the `/<repo>/` prefix, and GitHub Pages has no SPA fallback, so `/about`, `/team`, `/locations` will 404 once assets are fixed.

Lovable's own hosting handles both automatically — this only matters because you're using GitHub Pages.

## Plan

### 1. Set Vite base path
In `vite.config.ts`, add `base: '/<repo-name>/'` (e.g. `/delightsome-lagos-fabrics/`) so built asset URLs include the repo prefix. Ideally driven off an env var so local dev still works at `/`.

### 2. Add basename to React Router
In `src/App.tsx`, pass `basename={import.meta.env.BASE_URL}` to `<BrowserRouter>` so client-side routes match under the repo prefix.

### 3. Fix SPA deep-link 404s
Add `public/404.html` that redirects to `index.html` preserving the path (standard GitHub Pages SPA trick), and a small script in `index.html` to restore the original URL. This makes `/about`, `/team`, `/locations` work on refresh.

### 4. (Optional) GitHub Actions workflow
Add `.github/workflows/deploy.yml` to build and deploy to the `gh-pages` branch automatically on push to `main`.

## Technical details

- `vite.config.ts`: `base: mode === 'production' ? '/<repo>/' : '/'`
- `BrowserRouter basename={import.meta.env.BASE_URL}` — Vite injects the base here.
- `404.html` uses the well-known [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect pattern.
- After merging, in the GitHub repo: Settings → Pages → Source = `gh-pages` branch (or GitHub Actions).

## What I need from you

**What is your GitHub repository name?** I'll hardcode the correct base path (e.g. `/delightsome-lagos-fabrics/`). Also confirm you'd like the GitHub Actions deploy workflow added, or if you're deploying manually.

## Alternative recommendation

GitHub Pages is a rough fit for a React SPA — no SPA routing, no environment variables for Stripe/Supabase secrets on the client side, and you'll hit the same class of issues again when you add payments. **Lovable's built-in publish** (or Vercel/Netlify/Cloudflare Pages) handles all of this for free with zero config. Happy to help you switch instead if you'd like.
