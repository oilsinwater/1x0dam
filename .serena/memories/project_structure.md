# Project Structure

## Main Directories
- `studio/` - Sanity Content Studio for managing content
- `web/` - Next.js frontend application that displays the content

## Studio Structure
- `studio/sanity.json` - Sanity project configuration
- `studio/schemas/` - Content schema definitions including:
  - `report.js` - Main content pieces with title, date, content, etc.
  - `page.js` - Static pages
  - `footnote.js`
  - `figure.js`
  - `embedHTML.js`
  - `blockContent.js`, `simpleBlockContent.js`
- `studio/plugins/` - Custom Sanity plugins

## Web Structure
- `web/pages/index.js` - Main home page
- `web/lib/api.js` - Sanity client and data fetching functions
- `web/components/` - React components
- `web/styles/` - Global styles
- `web/public/` - Static assets

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