# Tsz Kin Kong — Portfolio

React portfolio updated from the September 9, 2026 resume. Includes production work highlights, all four roles, education, contact links, and the supplied DOCX resume download.

## Local development

Use Node.js 20 and run `npm ci`, then `npm start`.

## Validation

Run `npm test -- --watchAll=false --runInBand` and `npm run build`.

The mobile menu, current resume/contact links, and career history have automated coverage. Desktop and mobile layouts were checked in the browser.

## Deployment

For Vercel or Netlify, use build command `npm run build` and output directory `build`. The `portfolio-build.zip` artifact can also be extracted and uploaded to a static host.

For GitHub Pages at `/portfolio_react/`, build with `PUBLIC_URL=/portfolio_react` so scripts, images, and the resume download use the correct prefix. Enable Pages for a branch containing the generated build files, or use an appropriate GitHub Actions deployment workflow.

Animations include a floating code panel, drawn underline, scrolling section reveals, pointer-following card highlights, and hover transitions. Reduced-motion preferences disable motion. Keyboard focus, skip navigation, semantic sections, and accessible mobile navigation are included.

The project illustrations are stylized UI artwork, not screenshots of proprietary production systems. Project results come from the provided resume. Google Fonts are optional; local sans-serif fallbacks are configured.
