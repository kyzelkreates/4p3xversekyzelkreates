# Assembly Instructions

## Goal

Create one master gateway for the five live 4P3X Verse™ portfolio experiences. Visitors can take an onboarding quiz or ask the embedded AI guide, then open the best matching portfolio.

## Five live portfolio URLs already wired in

- Investor: https://4p3xaiinvestorportfolio.vercel.app
- Partner: https://4p3xpartnerportfolio.vercel.app
- Contract/Hire: https://4p3xcontractportfolio.vercel.app
- Grant: https://4p3x-grantportfolio.vercel.app
- Technical: https://4p3xtechportfolio.vercel.app

## Files

```txt
index.html
package.json
public/manifest.webmanifest
public/sw.js
public/logos/README.txt
src/config.js
src/main.jsx
src/styles.css
docs/ASSEMBLY_INSTRUCTIONS.md
docs/BASE44_FINISH_PROMPT.txt
```

## Base44/Vercel setup

1. Upload or import the project.
2. Add the landscape logo as `public/logos/landscape-logo.png`.
3. Add the square/box logo as `public/logos/box-logo.png`.
4. Run `npm install`.
5. Run `npm run build`.
6. Deploy the generated Vite app.
7. Test all five live portfolio buttons.
8. Test quiz routes on mobile and desktop.
9. Test embedded AI responses.
10. Confirm it does not create or display a sixth portfolio route.

## PWA setup

The manifest and service worker are already included. After deployment, check:

- Install prompt appears where browser supports it.
- Theme color is black/futuristic.
- Box logo is used as icon source.
- Offline fallback loads the app shell after first visit.

## Validation checklist

- Home loads correctly.
- Quiz answers generate correct route.
- AI guide answers about investor, partner, hire/contract, grant, and technical.
- All five live portfolio URLs open in a new tab.
- Supporting live product links are clearly labelled as evidence, not portfolio routes.
- Mobile layout does not overflow.
- Text remains readable at 320px, 375px, 768px, 1024px, 1440px.
- No secrets, API keys, backend-only tokens, or fake completion claims.

Directive 1: Adapt the skill set to the task. Include full folder structure, program code, logic code, transition code, UI logic, UI code, and HTML/JSX where required. Preserve SSOT, prevent feature creep, and protect working systems.
