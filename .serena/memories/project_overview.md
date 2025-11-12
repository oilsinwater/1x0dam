# Project Overview

This is a Sanity-powered content management system for a website, consisting of two main parts:

## Studio (Content Management)
- Built with Sanity.io CMS
- Uses Sanity's schema system to define content types
- Content types include: reports, pages, footnotes, figures, embeds, etc.
- Configuration in `studio/sanity.json` and `studio/schemas/`

## Web Frontend (Next.js)
- Next.js 12 application using React 17
- Fetches content from Sanity backend via API in `web/lib/api.js`
- Main pages include: home page (`index.js`), about page, ethics page
- Components organized under `web/components/`
- Uses Sanity image URL builder for content images

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