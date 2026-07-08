# Alin Zohari Portfolio

Modernized portfolio built with Next.js and deployed to GitHub Pages.

## Stack

- Next.js (App Router)
- TypeScript
- Static export (`output: "export"`)
- GitHub Actions deployment to GitHub Pages

## Local development

1. Install Node.js 20+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Build for production

```bash
npm run build
```

The static output is generated in the `out` directory.

## Deployment (GitHub Pages)

1. In GitHub repo settings, open **Pages**.
2. Set source to **GitHub Actions**.
3. Push to `main`.
4. Workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Content updates

- Profile/contact/skills: `src/data/portfolio.ts`
- Project cards: `src/data/portfolio.ts`
- Layout/components: `src/app/page.tsx`, `src/components/*`
- Styling: `src/app/globals.css`
- Static files (images, PDF CV): `public/img`, `public/doc`

## Domain

Custom domain is preserved using `CNAME` (`www.alinzohari.com`).
