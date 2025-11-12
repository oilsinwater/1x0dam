# Technology Stack

## web (Next.js marketing site)
| Category | Technology | Version | Notes |
| --- | --- | --- | --- |
| Framework | Next.js | latest (package.json) | Paired with React 17; SSR + static export. |
| Language | React 17 / JavaScript | 17.0.2 | Functional components with PropTypes. |
| Styling | CSS Modules + global CSS | N/A | `styles/` and component-local modules. |
| Testing/Review | Storybook 6.5 + Chromatic | 6.5.x | Visual regression safety net. |
| Tooling | ESLint 8.18 + eslint-config-next 12.2 | 8.18 / 12.2 | Required before PR merge. |
| Content API | Sanity client & GROQ | ^3.3.2 | Pulls CMS data at build time. |

## studio (Sanity CMS)
| Category | Technology | Version | Notes |
| --- | --- | --- | --- |
| Framework | Sanity Studio v2 | ^2.36.x | Headless CMS for editorial workflows. |
| Language | React 17 / JavaScript | 17.0.2 | Shared runtime with frontend. |
| Styling | styled-components | ^5.3.11 | Custom theming inside Studio. |
| Tooling | Sanity CLI | ^2.36 | `sanity start`/`sanity build` scripts. |
| Auth | Sanity managed login | N/A | Studio uses Sanity auth providers. |
