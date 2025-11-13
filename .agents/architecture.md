# Architecture

## Executive Summary

Mayday is a professional research publication platform built as a brownfield-to-transformation project, migrating from Sanity+Next.js to Strapi+Astro architecture. The platform enables civil society collectives to publish rigorous investigations into surveillance capitalism with institutional credibility for EU policy impact. This architecture prioritizes content management workflow, rich footnote system (highest priority), professional presentation, and decentralized deployment resilience.

## Project Initialization

First implementation story should execute:
```bash
npm create astro@latest -- --template VirtusLab-Open-Source/astro-strapi-starter
```

This establishes the base architecture with these decisions:
- Astro 5.15.5 (static site generator)
- Strapi 5.31.0 (headless CMS)
- PostgreSQL database (production-ready)
- TypeScript support throughout
- Modern build tooling

## Decision Summary

| Category | Decision | Version | Affects Epics | Rationale |
| -------- | -------- | ------- | ------------- | --------- |
| Starter Template | VirtusLab Astro-Strapi Starter | 5.15.5 (Astro) / 5.31.0 (Strapi) | All | Provides proven integration pattern, reduces setup complexity |
| Monorepo Strategy | Hybrid Approach (keep studio/ and web/) | All | Preserves existing work, enables incremental migration |
| Schema Migration | Automated Script via YAML/DSL | All | Repeatable migration, handles complex relationships |
| UI Integration | React Islands with ShadCN/Radix | Frontend, UI Components | Complete design system, supports interactive components |
| Animation Library | GSAP | 3.13.0 | Professional polish, excellent for subtle institutional effects |
| Database | PostgreSQL | Latest | Production-ready, supports complex content relationships |
| Authentication | No Authentication (MVP) | All | Simplifies MVP, focus on core publishing features |
| Deployment | Fleek/IPFS | Latest | Censorship resistance, archival permanence |

## Project Structure

```
1x0dam/
├── studio/                     # Strapi CMS (migrated from Sanity)
│   ├── api/                 # Strapi API routes
│   ├── config/               # Database, plugins, environments
│   ├── data/                 # Database migrations and seeds
│   ├── src/                  # Strapi source (content types, services)
│   └── package.json           # Strapi dependencies
├── web/                       # Astro frontend (migrated from Next.js)
│   ├── src/
│   │   ├── components/         # Astro + React components
│   │   ├── layouts/           # Page layouts
│   │   ├── pages/             # Astro pages
│   │   └── styles/            # Global styles, ShadCN/Radix
│   ├── public/                 # Static assets
│   ├── astro.config.mjs        # Astro configuration
│   └── package.json           # Astro dependencies
├── shared/                     # Shared code (future)
│   ├── types/                 # TypeScript definitions
│   ├── utils/                 # Shared utilities
│   └── constants/             # Project constants
├── docs/                       # Architecture, PRD, etc.
├── deployment/                  # Fleek/IPFS configs
│   ├── fleek.json            # Fleek deployment config
│   └── ipfs-scripts/         # IPFS seeding scripts
└── README.md                   # Project overview
```

## Epic to Architecture Mapping

| Epic | Lives In | Description |
| ----- | --------- | ----------- |
| Content Management (FR-1) | studio/ | Strapi CMS, editorial workflow, 8 content types |
| Rich Footnote System (FR-2) | web/src/components/footnotes/ | React Islands, right-column display, bidirectional linking |
| Content Publishing (FR-3) | web/src/pages/ | Astro static generation, template system |
| PDF Generation (FR-4) | shared/utils/pdf/ | PDF generation pipeline, professional formatting |
| Media & Asset Management (FR-5) | studio/plugins/media/ | Strapi media library, file handling |
| Deployment & Distribution (FR-6) | deployment/ | Fleek/IPFS integration, decentralized hosting |
| Schema Migration (FR-7) | studio/data/migrations/ | Sanity → Strapi migration scripts |
| Animation & Visual Polish (FR-8) | web/src/components/ | GSAP integration, subtle professional effects |

## Technology Stack Details

### Core Technologies

**Frontend Stack**
- **Astro 5.15.5**: Static site generator, ultra-fast builds, React Islands support
- **React 18**: For interactive components (footnotes, media players)
- **ShadCN/Radix UI**: Complete design system, accessibility-first components
- **TypeScript**: Type safety across frontend and backend
- **GSAP 3.13.0**: Professional animation library for subtle effects

**Backend Stack**
- **Strapi 5.31.0**: Headless CMS, editorial workflow, role-based permissions
- **PostgreSQL**: Production database, complex relationships, full-text search
- **Node.js**: Runtime environment (LTS version)

**Development Tools**
- **ESLint**: Consistent code quality
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Storybook**: Component development (evolved from existing setup)

### Integration Points

**CMS to Frontend**
- Strapi REST API → Astro content fetching
- @sensinum/astro-strapi-loader for optimized queries
- Real-time content updates during development

**Component Architecture**
- Static content: Pure Astro components (optimal performance)
- Interactive features: React Islands with ShadCN/Radix
- Hydration strategy: Selective React loading for interactive elements

**PDF Generation Pipeline**
- Puppeteer or Playwright for server-side PDF generation
- Integration with Strapi content API
- Template-based formatting for professional output

**Deployment Architecture**
- Astro builds → Static files → Fleek deployment → IPFS pinning
- Strapi API → Separate deployment (Railway/Vercel)
- CDN integration for global performance

## Novel Pattern Designs

### Rich Footnote System (Highest Priority)

**Pattern Name**: Persistent Bidirectional Footnotes
**Purpose**: Academic-style referencing with right-column persistent display and bidirectional navigation

**Components**:
- **FootnoteProvider**: Global state management for footnote context
- **FootnoteLink**: Interactive reference triggers in main content
- **FootnotePanel**: Right-column display with synchronized highlighting
- **FootnoteTypes**: Type-specific rendering (citation, explanation, media, methodology)

**Data Flow**:
1. User clicks footnote reference in main text
2. FootnotePanel highlights corresponding footnote
3. Bidirectional navigation between text and footnotes
4. Persistent visibility on desktop/tablet, collapsible on mobile

**Implementation Guide**:
- Use React Islands for interactive footnote components
- Store footnote state in React Context
- Implement smooth scroll synchronization
- Support rich content in footnotes (images, nested references)
- Affects Epics: Rich Footnote System (FR-2), Content Publishing (FR-3)

**Validation**:
- Essays & Reports: ✓ Complex footnote patterns supported
- Cables: ✓ Simple footnote patterns (lightweight display)
- All Types: ✓ Bidirectional navigation working
- Responsive: ✓ Right-column desktop, bottom mobile display

## Implementation Patterns

These patterns ensure consistent implementation across all AI agents:

### Naming Conventions

**Database**: snake_case (footnote_types, investigations, authors)
**API Endpoints**: kebab-case (/api/investigations, /api/footnotes)
**Components**: PascalCase (FootnotePanel, InvestigationCard)
**Files**: kebab-case (footnote-panel.astro, investigation-card.astro)

### Code Organization

**Feature-based**: Group by functionality (content-types, footnotes, pdf-gen)
**Shared utilities**: `shared/utils/` for reusable logic
**Type definitions**: Centralized in `shared/types/`

### Format Patterns

**API Responses**: Consistent JSON structure with data/error/meta
```typescript
interface ApiResponse<T> {
  data: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    pagination?: {
      page: number;
      total: number;
    };
  };
}
```

**Date Fields**: ISO 8601 strings for all APIs and storage

### Error Handling

**API Errors**: Structured JSON responses with error codes and user-friendly messages
**Content Loading**: Graceful fallbacks for missing content with proper error boundaries
**Build Errors**: Clear error messages in build logs with actionable fixes

### Logging Strategy

**Strapi**: Structured JSON logging for editorial actions and API requests
**Astro Builds**: Clear build warnings and errors with performance metrics
**Runtime**: Minimal client-side logging (static site advantage)

## Consistency Rules

### Naming Conventions

### Code Organization

**Feature-based**: Group by functionality (content-types, footnotes, pdf-gen)
**Shared utilities**: `shared/utils/` for reusable logic
**Type definitions**: Centralized in `shared/types/`

### Error Handling

**API Errors**: Structured JSON responses with error codes and user-friendly messages
**Content Loading**: Graceful fallbacks for missing content with proper error boundaries
**Build Errors**: Clear error messages in build logs with actionable fixes

### Logging Strategy

**Strapi**: Structured JSON logging for editorial actions and API requests
**Astro Builds**: Clear build warnings and errors with performance metrics
**Runtime**: Minimal client-side logging (static site advantage)

## Data Architecture

**Content Types**: 8 primary types (Essays, Reports, Research Notes, Cables, Streams, Policy, Glossary, Methodology)
**Relationships**: Author-to-content, content-to-footnotes, content-to-media
**Schema Design**: Strapi content types with rich text fields, metadata, and file attachments
**Migration**: Sanity → Strapi via automated script with manual schema optimization

## API Contracts

**REST API**: Strapi's standard REST endpoints with JWT authentication
**Content API**: @sensinum/astro-strapi-loader for optimized queries
**Response Format**: Consistent JSON with data/error/meta structure
**Pagination**: Cursor-based for large content collections

## Security Architecture

**Authentication**: JWT tokens for editorial team (no public auth in MVP)
**Authorization**: Role-based permissions (Researcher, Editor, Publisher)
**Data Protection**: HTTPS for all APIs, secure file handling
**CORS**: Configured for Astro frontend domain

## Performance Considerations

**Static Site**: Astro's build-time optimization for fast page loads
**Database**: PostgreSQL indexing for content search and relationships
**CDN**: Fleek's global edge distribution for static assets
**Images**: Optimized loading with lazy loading and modern formats

## Deployment Architecture

**Frontend**: Astro builds → Fleek deployment → IPFS pinning
**Backend**: Strapi → Railway/Vercel (separate service)
**Database**: PostgreSQL with connection pooling and read replicas
**CI/CD**: GitHub Actions for automated testing and deployment

## Development Environment

### Prerequisites

- **Node.js**: LTS version (18, 20, or 22)
- **PostgreSQL**: Version 14+ for development
- **Git**: For version control
- **VS Code**: Recommended with extensions (Astro, Strapi, TypeScript)

### Setup Commands

```bash
# Initialize project
npm create astro@latest -- --template VirtusLab-Open-Source/astro-strapi-starter

# Setup Strapi
cd studio && npm install
npm run dev

# Setup Astro frontend
cd web && npm install
npm run dev

# Database setup
createdb mayday
psql -d mayday < studio/data/schema.sql

# Development servers (concurrent)
npm run dev:studio  # Strapi on port 1337
npm run dev:web      # Astro on port 4321
```

## Architecture Decision Records (ADRs)

**ADR-001: Hybrid Monorepo Migration**
- **Decision**: Keep existing studio/ and web/ directories, migrate technologies in place
- **Alternatives**: Clean slate, separate repositories
- **Consequences**: Preserves git history, enables incremental migration
- **Status**: Approved

**ADR-002: React Islands for UI Components**
- **Decision**: Use ShadCN/Radix via React Islands rather than Astro native components
- **Alternatives**: Pure Astro components, custom component system
- **Consequences**: Maintains complete design system, supports interactive features
- **Status**: Approved

**ADR-003: GSAP for Professional Polish**
- **Decision**: Select GSAP over Motion.dev or anime.js for animations
- **Alternatives**: Motion.dev (React-focused), anime.js (vanilla JS)
- **Consequences**: Professional-grade effects, excellent timeline control
- **Status**: Approved

---

_Generated by BMAD Decision Architecture Workflow v1.0_
_Date: 2025-11-12_
_For: doc_oct_
