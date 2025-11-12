# Repository Guidelines

## Project Structure & Module Organization
- `web/` holds the marketing site built with Next.js 12/React 17. Authoring lives in `pages/`, long-lived UI pieces in `components/`, shared logic in `lib/`, and global styling in `styles/`. Static assets ship from `public/`, while build artefacts land in `out/`.
- `studio/` contains the Sanity v2 content studio. Schemas live under `schemas/`, custom desk structure or plugins under `plugins/`, and Sanity configuration in `sanity.json` plus `config/`.
- `.bmad/` and `.agents/` store build-metadata and generated docs—leave them untouched unless you are running BMAD workflows.

## Build, Test, and Development Commands
- `cd web && npm install` (or `yarn`) – install client dependencies.
- `cd web && npm run dev` – hot-reload Next.js site at `localhost:3000`.
- `cd web && npm run lint` – project-wide ESLint using `eslint-config-next`; required before every PR.
- `cd web && npm run build` / `npm run start` – production build and serve.
- `cd web && npm run storybook` / `npm run build-storybook` – develop or export component stories; pair with `npm run chromatic` for hosted visual checks.
- `cd studio && npm install && npm run start` – run Sanity Studio locally at `localhost:3333`; `npm run build` prepares a deployable bundle.

## Coding Style & Naming Conventions
- Use 2-space indentation, double quotes in JS modules, and single quotes inside JSX attributes to match existing files.
- Prefer functional React components plus PropTypes. Keep component folders PascalCase (for example `components/MenuBar`).
- Co-locate component-specific styles via CSS modules; reserve `styles/globals.css` for layout tokens only.
- Sanity schema files are camelCase (e.g., `schemas/report.js`) and must export a single schema definition.
- Run ESLint and fix warnings before committing; Studio linting piggybacks on `@sanity/eslint-config-studio`.

## Testing Guidelines
- There is no Jest or Cypress suite yet; coverage relies on `npm run lint`, Storybook review, and Chromatic snapshots. Before opening a PR, update or add a Storybook story whenever a component changes and capture screenshots/gifs of the rendered pages (`yarn dev`) and Studio form edits (`sanity start`).
- When touching Sanity schemas, create sample documents in Studio to verify GROQ queries and include exported JSON fixtures under `studio/static/` if relevant.

## Commit & Pull Request Guidelines
- Follow the repository’s concise, sentence-style commits (see `git log` examples such as `Makes updates for tags in sanity.`). Start with a verb, keep to ±60 characters, and group related changes.
- Reference the impacted area in the subject (e.g., `web:` or `studio:` prefix) when it clarifies scope.
- Every PR should include: purpose summary, testing notes (`lint`, `storybook`, Studio smoke test), screenshots for UI changes, and links to relevant issues or Sanity documents.
- Tag reviewers responsible for the affected surface (`web` UI, `studio` schemas) and call out required environment variables (`SANITY_PROJECT_ID`, `SANITY_DATASET_NAME`) if configuration changes.

## Security & Configuration Tips
- Keep secrets out of source control. Frontend expects `SANITY_PROJECT_ID` and `SANITY_DATASET_NAME` in `web/.env.local`; Studio picks the same values via `sanity.json`.
- Do not edit `.agents/project-scan-report.json` or `.bmad` files manually; regenerate them via the appropriate agent command.
