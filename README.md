## hket89.github.io – Portfolio

This is the source for my GitHub Pages portfolio, built with **Vite**, **React**, **TypeScript**, and **pnpm**.

It showcases my experience across full‑stack, AWS serverless, and AI/LLM systems, using structured content derived from my latest resume.

### Development

- **Install dependencies**

  ```bash
  pnpm install
  ```

- **Start dev server**

  ```bash
  pnpm dev
  ```

  Then open `http://localhost:5173` in your browser.

### Build

Create a production build into the `dist` folder:

```bash
pnpm build
```

### Deployment

GitHub Actions is configured in `.github/workflows/deploy.yml` to:

- Install dependencies with `pnpm`
- Build the Vite app
- Publish the contents of `dist` to the `gh-pages` branch using `peaceiris/actions-gh-pages`

On pushes to `master`, the workflow will run and deploy the updated site to GitHub Pages, served under `/hket89.github.io/`.
