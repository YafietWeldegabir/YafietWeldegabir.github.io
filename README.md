# Yafiet Araya — Portfolio

A React + Vite personal site with a light/dark theme toggle, deployable to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Editing content

All resume content lives in `src/data.js` — edit that file to update your
summary, experience, skills, education, or certifications without touching
any component code.

To swap the CV, replace `public/cv.pdf` with your own file (keep the same
filename, or update the `href="cv.pdf"` in `src/components/Hero.jsx`).

## Deploying to GitHub Pages

**1. Set the base path.** In `vite.config.js`, `base` must match your repo name:

```js
base: '/your-repo-name/'
```

If you're deploying to a user/org page (`https://<username>.github.io/`) or a
custom domain instead of a project page, set `base: '/'`.

**2. Push this project to a GitHub repo**, then choose one of:

### Option A — GitHub Actions (recommended, auto-deploys on every push)
This repo already includes `.github/workflows/deploy.yml`. After pushing to
`main`:
1. Go to your repo → **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Push to `main` — the workflow builds and deploys automatically

### Option B — Manual deploy with `gh-pages`
```bash
npm run build
npm run deploy
```
This pushes the `dist/` folder to a `gh-pages` branch. Then in **Settings →
Pages**, set the source to the `gh-pages` branch.

Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Adding visitor analytics

Not wired up yet — see the conversation for options (Google Analytics,
GoatCounter, or a simple counter badge). Once you pick one, the tracking
snippet goes in `index.html` (for a script tag) or as a small component
mounted in `src/App.jsx`.
