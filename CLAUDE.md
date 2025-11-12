# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sanity-powered content management system for a website, consisting of two main parts:
- **Studio** (`studio/` directory): A Sanity Content Studio for managing content
- **Web** (`web/` directory): A Next.js frontend application that displays the content

## Architecture and Structure

### Studio (Content Management)
- Built with Sanity.io CMS
- Uses Sanity's schema system to define content types
- Content types include: reports, pages, footnotes, figures, embeds, etc.
- Configuration in `studio/sanity.json` and `studio/schemas/`

### Web Frontend (Next.js)
- Next.js 12 application using React 17
- Fetches content from Sanity backend via API in `web/lib/api.js`
- Main pages include: home page (`index.js`), about page, ethics page
- Components organized under `web/components/`
- Uses Sanity image URL builder for content images

## Development Commands

### Studio (Sanity)
```bash
cd studio
yarn start  # Start the Sanity Content Studio
```

### Web Frontend (Next.js)
```bash
cd web
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run linter
yarn storybook # Start Storybook
```

## Key Files and Directories

### Studio:
- `studio/sanity.json` - Sanity project configuration
- `studio/schemas/` - Content schema definitions
- `studio/plugins/` - Custom Sanity plugins

### Web:
- `web/pages/index.js` - Main home page
- `web/lib/api.js` - Sanity client and data fetching functions
- `web/components/` - React components
- `web/styles/` - Global styles

## Content Types

The project manages several content types through the Sanity studio:
- Reports (`report.js`) - Main content pieces with title, date, content, etc.
- Pages (`page.js`) - Static pages
- Footnotes (`footnote.js`)
- Figures (`figure.js`)
- Embeds (`embedHTML.js`)
- Block content (`blockContent.js`, `simpleBlockContent.js`)

## Important Notes

- The frontend fetches data from a Sanity backend using the project ID "mabo5ysy"
- The project uses a custom layout with grid-based design for reports
- Image URLs are processed through Sanity's image URL builder