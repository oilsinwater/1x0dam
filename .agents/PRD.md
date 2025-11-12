# 1x0dam - Product Requirements Document

**Author:** doc_oct
**Date:** 2025-11-11
**Version:** 1.0

---

## Executive Summary

Mayday is a professional research publication platform that enables a civil society collective to publish rigorous investigations into surveillance capitalism's harms. The platform provides the infrastructure for transparent, credible research that advocates, policymakers, and litigators can cite in official proceedings—combining Bellingcat-style methodology with institutional legitimacy needed for EU policy work.

### What Makes This Special

The platform's magic is in balancing **activist mission** with **institutional legitimacy**—building infrastructure that lets researchers "enter the machine" to expose harms while producing outputs professional enough for EU regulators to cite in official proceedings. It's Bellingcat for surveillance capitalism, where the publishing platform itself signals credibility through professional presentation, transparent methodology, and resilient architecture.

---

## Project Classification

**Technical Type:** Web Application (Static Site + Headless CMS)
**Domain:** Civil Society / Policy Advocacy
**Complexity:** Medium

**Classification Details:**

This is a professional publishing platform combining:
- **Astro static site** for fast, accessible public-facing content
- **Strapi headless CMS** for editorial workflow and content management
- **Decentralized deployment** (Fleek/IPFS) for resilience and archival permanence
- **ShadCN/Radix UI** design system for professional, accessible interface

The platform serves as infrastructure for research publication, not a consumer product. Primary users are editorial staff managing investigations, with end-users (policymakers/advocates) consuming published research.

### Domain Context

**Civil society research collective** operating in policy advocacy space with specific requirements:

- **Professional legitimacy:** Platform must signal institutional credibility to risk-averse policymakers
- **Transparent methodology:** Every investigation must foreground research methods and sources
- **EU-first positioning:** Design for European policy networks (EURACTIV, EDRI, regulatory bodies)
- **Share-friendliness:** Must feel comfortable for professionals to forward to colleagues
- **Offline accessibility:** PDF evidence packages for legal filings and policy briefs

---

## Success Criteria

**Platform Launch Success:**
- Publish **3 high-impact investigations** within first 90 days using the platform
- Platform remains available with **zero takedowns** during MVP period
- **≥50% PDF download rate** among investigation viewers (validates offline accessibility value)

**Professional Adoption:**
- Achieve **≥5 professional citations** in policy briefs, regulatory filings, or EU policy media (EURACTIV) per quarter
- Evidence of **share adoption**: colleagues forwarding Mayday links within professional networks (tracked via referrals/direct feedback)
- Majority of traffic originates from **EU policy networks** (validates EU-first positioning)

**Platform Quality Indicators:**
- Editorial team can **draft, review, and publish** investigations using Strapi workflow without technical intervention
- **Methodology sections** render correctly with transparent sourcing and research methods
- **Rich footnotes system** enables complex referencing patterns investigators need
- **PDF generation pipeline** produces professional-quality evidence packages automatically

**The "Wow" Moment:**
When a EU regulator cites a Mayday investigation in an official DSA enforcement proceeding—that validates we've achieved the balance between activist mission and institutional legitimacy.

---

## Product Scope

### MVP - Minimum Viable Product

**What must work for this to be useful:**

**Core Publishing Platform:**
- Strapi CMS for editorial workflow (draft, review, publish investigations)
- Investigation content types with methodology sections, source citations, evidence documentation
- Astro static site generation for public-facing content
- Professional styling (ShadCN/Radix UI) that signals institutional legitimacy

**Critical UI Features:**
- **Rich footnotes system** (high priority):
  - Right-hand column display for persistent visibility
  - Different footnote types that float next to referencing content blocks
  - Hyperlinked references between content and footnotes
  - Multiple qualities/attributes per footnote
- Responsive design optimized for desktop/tablet (primary use case)

**Content Delivery:**
- **PDF generation pipeline**: Automated, professionally-formatted evidence packages for offline use
- Fast, accessible static pages (minimal client JS)
- Investigation templates that foreground transparent methodology

**Deployment & Resilience:**
- Fleek/IPFS-based deployment for censorship resistance
- Automatic seeding to decentralized storage on publication
- Anonymity layer that obscures hosting metadata while maintaining professional accessibility

**Out of Scope for MVP:**
- Anonymous submission workflows (Tor portals, encrypted drops)
- Public comment threads or reader accounts
- Native mobile apps
- Multi-language support (English-only)
- Real-time notifications/alerts

### Growth Features (Post-MVP)

**What makes it competitive:**

- **Policy brief generator**: Auto-tailor findings to specific jurisdictions (EU DSA, California CPRA, etc.)
- **Multi-language support**: Expand to key EU languages (German, French, Spanish) for deeper regional reach
- **Enhanced visual storytelling**:
  - Interactive charts and data visualizations
  - Scrollytelling effects for complex investigations
  - Motion/animation for engagement
- **Legal evidence API**: Structured data export for litigation teams' case management systems
- **Search and discovery**: Full-text search across investigations, tag-based filtering

### Vision (Future)

**The dream version:**

- **Anonymous submission portal**: Whistleblower intake system (only after establishing institutional credibility)
- **Collaborative annotation**: Private evidence package annotation for policymaker/litigator internal teams
- **Citation tracking**: Monitor where Mayday investigations are cited in official proceedings
- **Investigation templates library**: Pre-built templates for common investigation types
- **Multi-collective network**: Federation protocol allowing other research collectives to publish using same infrastructure
- **AI-assisted evidence analysis**: Tools to help researchers identify patterns in large datasets

---

{{#if domain_considerations}}

## Domain-Specific Requirements

{{domain_considerations}}

This section shapes all functional and non-functional requirements below.
{{/if}}

---

{{#if innovation_patterns}}

## Innovation & Novel Patterns

{{innovation_patterns}}

### Validation Approach

{{validation_approach}}
{{/if}}

---

## Web Application Specific Requirements

### Content Architecture

The platform supports diverse research publication types, each with distinct purposes and formats:

**Primary Content Types:**

1. **Essays**: In-depth analysis and commentary on topics such as digital identity, the Para-Real, virtual ecologies, climate grief, and surveillance capitalism
2. **Reports**: Detailed research documents addressing issues like web preservation, digital consent, smartphone use, and technology harms
3. **Research Notes**: Concise write-ups and key findings from ongoing investigations, case studies, and practical explorations
4. **Cables**: Short, periodic updates documenting ongoing work, research advances, reflections, and sector commentary
5. **Streams**: Recorded presentations, interviews, films, podcasts, and broadcasts (e.g., talks on digital preservation, design ethics, policy advocacy)
6. **Policy**: Co-authored policy documents and charters addressing subjects such as urban regeneration, ecological entanglement, and regulatory reform
7. **Glossary**: Definitions and explanations of key terms used in research (e.g., surveillance capitalism, algorithmic exploitation)
8. **Methodology**: Documentation of research approaches, frameworks, and editorial standards

**Content Type Requirements:**

- All content types share core metadata: title, author(s), date, tags
- Essays, Reports, and Policy documents require **rich footnote system** for academic-style citations
- Streams require media embed support (video, audio players)
- All types except Glossary/Methodology support **PDF generation**
- Cables prioritized for quick publishing (lightweight editorial workflow)
- Methodology pages serve as reference documentation for investigation transparency

### Editorial Workflow & Roles

**Strapi User Roles:**

1. **Researcher/Author**: Create and draft content across all content types
2. **Editor**: Review drafts, request revisions, approve for publication
3. **Publisher**: Final publish action, manage live content

**Publishing Gates:**

- **Draft → Review**: Author submits completed draft to Editor
- **Review → Approved**: Editor approves or sends back with feedback
- **Approved → Published**: Publisher makes content live on site
- **Cables** use lightweight workflow (Draft → Published) for speed

### Schema Migration Strategy

**Current State:** Existing Sanity schemas with minimal data

**Architect Responsibilities:**
- Evaluate existing Sanity schemas for reusability
- Determine migration strategy: automated port via YAML/DSL vs. manual recreation in Strapi
- Map Sanity field types to Strapi equivalents
- Prioritize schemas that align with new content types (Essays, Reports, etc.)
- Document which schemas to keep, modify, or replace

**Migration Priority:**
1. Core content schemas that map to new content types
2. Footnote/citation structures (if exist)
3. Media/asset management schemas
4. Metadata and taxonomy schemas

### Visual Storytelling & Media

**Graphics & Charts:**
- Media library in Strapi for reusable assets (illustrations, branding, evidence visualizations)
- Direct embedding in content via rich text or custom blocks
- Support for high-quality static images and SVG graphics

**Motion & Animation:**
- Standard open-source animation library (Architect to choose: GSAP, Motion.dev, or anime.js based on community adoption and license)
- Subtle UI animations for professional presentation
- Scrollytelling effects for long-form investigations (growth feature)

**Data Visualization:**
- Chart library for static/interactive charts (e.g., Chart.js, D3.js)
- Embedded directly in content
- Export-friendly for PDF generation

{{#if endpoint_specification}}

### API Specification

{{endpoint_specification}}
{{/if}}

{{#if authentication_model}}

### Authentication & Authorization

{{authentication_model}}
{{/if}}

{{#if platform_requirements}}

### Platform Support

{{platform_requirements}}
{{/if}}

{{#if device_features}}

### Device Capabilities

{{device_features}}
{{/if}}

{{#if tenant_model}}

### Multi-Tenancy Architecture

{{tenant_model}}
{{/if}}

{{#if permission_matrix}}

### Permissions & Roles

{{permission_matrix}}
{{/if}}
{{/if}}

---

## User Experience Principles

### Visual Personality

**Design Direction:** Investigative journalism meets academic rigor—drawing inspiration from Bellingcat's professional aesthetic with clean, restrained presentation.

**Typography:**
- **Headings:** Bold sans-serif (Archivo or similar) for impact
- **Body text:** IBM Plex for readability and professional tone
- **Hierarchy:** Clear typographic scale for scannable long-form content

**Visual Style:**
- Clean, minimal interface that foregrounds content over decoration
- Professional presentation that signals institutional legitimacy
- Restrained use of brand colors (avoid appearing activist/partisan)
- High contrast for accessibility and readability
- Academic/research institution aesthetic, not commercial/marketing

**References:**
- Bellingcat's clean investigative journalism style
- Current inspiration images show right-aligned footnotes with academic formatting
- Avoid heavy branding elements that might undermine professional legitimacy

### Key Interactions

**Long-Form Reading Experience:**

1. **Table of Contents:** Sticky/collapsible ToC for navigation in long reports
2. **Progress Indicators:** Reading progress bar for long-form content
3. **Reading Time Estimates:** Display estimated read time at article start
4. **Right-Aligned Footnotes:**
   - Persistent visibility in right column
   - Synchronized highlighting when referenced in main text
   - Hyperlinked bidirectional navigation (text ↔ footnote)
   - Support for rich footnote content (text, images, links, nested citations)

**Home Page (Bento Grid):**

**Layout Style:** Similar to newdesigncongress.org/en/ with modular grid
- **Latest Publications:** Dynamic feed of recent content across all types
- **Featured Content:** Curated/pinned investigations or reports
- **Content Type Filters:** Quick access to Essays, Reports, Policy, etc.
- **Visual Hierarchy:** Mix of card sizes for visual interest and content prioritization
- **Responsive Grid:** Adapts to tablet/desktop (mobile-friendly but desktop-optimized)

**Navigation:**
- Clear content type taxonomy (Essays, Reports, Cables, etc.)
- Search functionality (growth feature)
- Methodology and Glossary easily accessible for transparency

**Interaction Details:**
- Smooth scrolling and subtle animations for polish
- Hover states that provide context without distraction
- Fast page loads (static site advantage)
- Minimal client-side JS for professional performance

---

## Functional Requirements

### 1. Content Management System (Editorial Workflow)

**FR-1.1: Multi-Type Content Creation**
- System SHALL support 8 content types: Essays, Reports, Research Notes, Cables, Streams, Policy, Glossary, Methodology
- Each content type SHALL have appropriate fields for its purpose
- All content types SHALL share core metadata: title, author(s), publication date, tags

**FR-1.2: User Roles & Permissions**
- System SHALL support three roles: Researcher/Author, Editor, Publisher
- Authors SHALL create and draft content
- Editors SHALL review drafts, request revisions, and approve content
- Publishers SHALL make approved content live

**FR-1.3: Publishing Workflow**
- Standard workflow: Draft → Review → Approved → Published
- Cables content type SHALL support lightweight workflow: Draft → Published
- System SHALL track content state transitions
- System SHALL support revision history for all content

**FR-1.4: Rich Content Editing**
- Editor SHALL support structured content blocks
- Editor SHALL support rich text formatting
- Editor SHALL support media embedding (images, video, audio)
- Editor SHALL support footnote creation and management

### 2. Rich Footnote System (Critical Feature)

**FR-2.1: Footnote Creation**
- Authors SHALL create footnotes with multiple attributes/qualities
- System SHALL support different footnote types
- Footnotes SHALL support rich content (text, images, links, nested citations)

**FR-2.2: Footnote Display**
- Footnotes SHALL display in right-hand column on desktop/tablet
- Footnotes SHALL float next to referencing content blocks
- Footnotes SHALL remain persistently visible while reading

**FR-2.3: Footnote Navigation**
- System SHALL provide hyperlinked references between main text and footnotes
- System SHALL support bidirectional navigation (text ↔ footnote)
- System SHALL highlight active footnote when reference is clicked
- System SHALL synchronize highlighting between text and footnote

**FR-2.4: Footnote Responsiveness**
- On mobile, footnotes SHALL display inline or in expandable sections
- Footnote system SHALL maintain usability across viewport sizes

### 3. Content Publishing & Static Site Generation

**FR-3.1: Static Site Generation**
- System SHALL generate static HTML pages from Strapi content
- Build process SHALL trigger on content publish
- Generated site SHALL be optimized for performance (minimal JS)

**FR-3.2: Content Type Pages**
- System SHALL generate dedicated pages for each content type
- System SHALL support custom layouts per content type
- Essays, Reports, Policy SHALL use long-form reading layout with footnotes

**FR-3.3: Home Page**
- Home page SHALL display bento-grid layout
- Grid SHALL show latest publications across all content types
- Grid SHALL support featured/pinned content
- Grid SHALL support mixed card sizes for visual hierarchy
- Grid SHALL be responsive for desktop/tablet

**FR-3.4: Navigation & Discovery**
- Site SHALL provide navigation by content type
- Site SHALL display table of contents for long-form content
- Site SHALL show reading progress indicator
- Site SHALL display reading time estimates

### 4. PDF Generation Pipeline

**FR-4.1: Automated PDF Creation**
- System SHALL automatically generate PDF for all content types except Glossary/Methodology
- PDFs SHALL maintain professional formatting
- PDFs SHALL include footnotes in appropriate academic style
- PDFs SHALL preserve visual hierarchy and branding

**FR-4.2: PDF Distribution**
- System SHALL make PDFs available for download on content pages
- System SHALL track PDF download metrics

### 5. Media & Asset Management

**FR-5.1: Media Library**
- System SHALL provide centralized media library in Strapi
- Library SHALL support images, video, audio, documents
- Media SHALL be reusable across multiple publications

**FR-5.2: Media Embedding**
- System SHALL support image embedding in content
- System SHALL support video/audio player embedding for Streams
- System SHALL support chart/data visualization embedding

**FR-5.3: Visual Assets**
- System SHALL support high-quality static images
- System SHALL support SVG graphics
- System SHALL support responsive image loading

### 6. Deployment & Distribution

**FR-6.1: Decentralized Publishing**
- System SHALL deploy to Fleek or similar IPFS-based platform
- System SHALL automatically seed content to IPFS on publication
- Deployment SHALL maintain professional accessibility (standard HTTPS domains)

**FR-6.2: Hosting Anonymity**
- Deployment pipeline SHALL obscure hosting metadata
- System SHALL maintain censorship resistance without appearing overtly "crypto"

**FR-6.3: Build & Deploy Automation**
- System SHALL trigger builds on content publish
- System SHALL deploy static site automatically after successful build
- System SHALL support rollback to previous versions

### 7. Schema Migration & Data Management

**FR-7.1: Sanity to Strapi Migration**
- Architect SHALL evaluate existing Sanity schemas
- System SHALL support schema migration via YAML/DSL or manual recreation
- Migration SHALL prioritize schemas aligned with new content types

**FR-7.2: Data Integrity**
- System SHALL maintain referential integrity between content and media
- System SHALL support data backup and recovery
- System SHALL version control schema definitions

### 8. Animation & Visual Polish

**FR-8.1: UI Animation**
- System SHALL use standard open-source animation library (GSAP, Motion.dev, or anime.js)
- Animations SHALL be subtle and professional
- Animations SHALL enhance rather than distract from content

**FR-8.2: Scrolling Effects**
- System SHALL support smooth scrolling
- System SHALL support scroll-triggered animations (growth feature)

### 9. Typography & Design System

**FR-9.1: Typography Implementation**
- System SHALL use Archivo (or similar) for headings
- System SHALL use IBM Plex for body text
- System SHALL maintain clear typographic hierarchy

**FR-9.2: Component Library**
- System SHALL implement ShadCN or Radix UI components
- Components SHALL follow professional design aesthetic
- Components SHALL be accessible (WCAG compliant)

---

## Non-Functional Requirements

### Performance

**NFR-P1: Page Load Speed**
- Public pages SHALL load in <2 seconds on 3G connection
- Static site generation SHALL leverage Astro's minimal JS approach
- Images SHALL be optimized and served via CDN
- Critical CSS SHALL be inlined for above-the-fold content

**NFR-P2: Build Performance**
- Site build SHALL complete in <5 minutes for full rebuild
- Incremental builds SHALL support publishing single content updates
- Build process SHALL be parallelized where possible

**NFR-P3: CMS Performance**
- Strapi admin interface SHALL be responsive for editorial team
- Content save operations SHALL complete in <2 seconds
- Media uploads SHALL support progress indicators

### Security

**NFR-S1: Self-Hosted CMS Security**
- Strapi SHALL be self-hosted with Postgres + Redis
- CMS SHALL be exposed only via Tailscale + Cloudflare Access
- Telemetry SHALL be disabled
- System SHALL enforce strong authentication for CMS access

**NFR-S2: Data Protection**
- User credentials SHALL be hashed and salted
- Database backups SHALL be encrypted (restic)
- API tokens SHALL use secure generation
- HTTPS SHALL be enforced for all public endpoints

**NFR-S3: Deployment Security**
- Deployment pipeline SHALL obscure hosting metadata
- System SHALL not expose Strapi API publicly
- Static site SHALL contain no sensitive configuration

**NFR-S4: Content Integrity**
- Published content SHALL be immutable once deployed to IPFS
- System SHALL maintain content hashes for verification
- Revision history SHALL be preserved for audit trail

### Accessibility

**NFR-A1: WCAG Compliance**
- Site SHALL meet WCAG 2.1 Level AA standards
- Color contrast ratios SHALL meet AA requirements (4.5:1 for text)
- All interactive elements SHALL be keyboard accessible

**NFR-A2: Screen Reader Support**
- Semantic HTML SHALL be used throughout
- Footnote navigation SHALL be screen reader friendly
- Images SHALL have descriptive alt text
- ARIA labels SHALL be used where appropriate

**NFR-A3: Responsive Design**
- Site SHALL be usable on desktop, tablet, and mobile
- Touch targets SHALL be minimum 44x44 pixels
- Text SHALL remain readable without horizontal scrolling

### Integration

**NFR-I1: CMS to Static Site Pipeline**
- Strapi SHALL expose content via REST or GraphQL API
- Astro SHALL fetch content from Strapi during build
- API integration SHALL handle pagination for large content sets
- Pipeline SHALL support webhooks for automated builds

**NFR-I2: Deployment Pipeline**
- GitHub repo SHALL trigger builds on merge to main
- Fleek/IPFS deployment SHALL be automated
- System SHALL support manual deployment rollback
- Build failures SHALL not affect live site

**NFR-I3: Schema Portability**
- Content schemas SHALL be defined in version-controlled format (YAML/JSON)
- Schema migrations SHALL be automated where possible
- System SHALL support schema export for backup

### Scalability

**NFR-SC1: Content Volume**
- System SHALL support 1000+ published content items
- Build performance SHALL degrade gracefully with content volume
- Search functionality SHALL remain fast (growth feature)

**NFR-SC2: Media Storage**
- Media library SHALL support TB-scale storage
- IPFS pinning SHALL handle large media files
- System SHALL support CDN for media delivery

### Reliability & Resilience

**NFR-R1: Uptime**
- Static site SHALL target 99.9% uptime
- IPFS deployment SHALL provide redundancy
- System SHALL maintain availability during CMS maintenance

**NFR-R2: Censorship Resistance**
- Content SHALL be seeded to IPFS for archival permanence
- Decentralized deployment SHALL resist takedown attempts
- System SHALL support alternative access methods if primary domain blocked

**NFR-R3: Backup & Recovery**
- Database backups SHALL run daily (restic encrypted backups)
- Media SHALL be backed up to redundant storage
- System SHALL support full recovery from backups
- RTO (Recovery Time Objective): <4 hours
- RPO (Recovery Point Objective): <24 hours

---

## Implementation Planning

### Epic Breakdown Required

Requirements must be decomposed into epics and bite-sized stories (200k context limit).

**Project Track:** BMad Method (greenfield web application)

**Epic Planning Details:**
This PRD captures requirements for a professional research publication platform with:
- 8 content types with distinct workflows
- Critical footnote system requiring complex UI implementation
- CMS → Static site → IPFS deployment pipeline
- Schema migration from existing Sanity setup
- Professional design system implementation

**Next Step:** Run `workflow create-epics-and-stories` to create the implementation breakdown.

---

## References

- **Product Brief:** `.agents/brief.md`
- **Design References:**
  - `.agents/background/screens-branded/` (current state)
  - `.agents/background/inspiration-images/` (target aesthetic)
- **Inspiration:** Bellingcat.com, newdesigncongress.org/en/

---

## PRD Summary

**Vision:** Professional research publication platform enabling civil society collective to expose surveillance capitalism's harms through credible, citable investigations.

**Magic:** Balancing activist mission with institutional legitimacy—infrastructure that signals professional credibility to EU regulators while maintaining censorship resistance.

**Success Metrics:**
- 3 investigations published in 90 days
- ≥5 professional citations per quarter
- ≥50% PDF download rate
- Zero takedowns

**Key Requirements:**
- 8 content types (Essays, Reports, Cables, etc.)
- Rich footnote system with right-column display
- Strapi CMS → Astro static site → Fleek/IPFS
- Professional design (ShadCN/Radix, IBM Plex typography)
- Automated PDF generation
- Bento-grid home page

**Critical Features:**
1. **Rich footnotes** (highest priority UI feature)
2. **PDF generation pipeline** (offline accessibility)
3. **Professional presentation** (institutional legitimacy)
4. **Decentralized deployment** (censorship resistance)

---

## Next Steps

1. **Epic & Story Breakdown** (Required) - Run: `workflow create-epics-and-stories`
2. **UX Design** (Recommended) - Run: `workflow create-design` for detailed design work
3. **Architecture** (Required) - Run: `workflow create-architecture` for technical architecture
4. **Solutioning Gate Check** - Run: `workflow solutioning-gate-check` before implementation

---

_This PRD captures the essence of Mayday—using the tools of surveillance capitalism to help expose harms, spur policy reform, and speed the end of this extractive, exploitative, and dehumanizing system._

_The platform's magic lies in balancing activist mission with institutional legitimacy: building infrastructure that lets researchers "enter the machine" while producing outputs professional enough for EU regulators to cite in official proceedings._

_Created through collaborative discovery between doc_oct and AI facilitator._
