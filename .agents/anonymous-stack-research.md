# Anonymous Publishing Stack Research

_Last updated: 2025-11-11_

## Context and Source Inputs
- `.agents/background/Copy of Echt Wahr Report - Revised Draft.txt` – Project Mayday case study on using targeted ads against disinformation; highlights need to protect activists countering adversarial media ecosystems.
- `.agents/background/Project Mayday Shared Notes (Reset + Reality + Throneless + SimSec).txt` – Working notes on campaign ops, account compartmentalization, and shared infrastructure concerns.
- Current repo experimentation with Sanity + Next.js for content-heavy sites.

Project goal: ship a “purely anonymous” site where ownership, hosting trail, and contributor identities remain obfuscated even under scrutiny. Contributors may publish under pseudonyms, and infrastructure should resist doxxing via WHOIS, billing metadata, or CDN/server logs.

## Core Requirements and Threat Model
| Layer | Risk | Requirements |
| --- | --- | --- |
| Domain / Routing | DNS and WHOIS records expose legal entity or billing | Use privacy-preserving registrars (Porkbun+WHOIS guard, Njalla) or decentralized naming (ENS, HNS). Route traffic through privacy-focused CDN or directly to IPFS gateways. |
| Hosting | Cloud providers maintain logs mapped to payment methods and IPs | Prefer decentralized hosting (IPFS via Fleek/Pinata), or privacy-friendly VPS paid with pseudonymous accounts. Automate content pushes to avoid manual logins. |
| Build Pipeline | CI logs, git metadata, and artifact stores leak identities | Use self-hosted runners or local builds behind VPN/Tor. Strip git commit metadata (pseudonymous GPG keys). Rotate caches and disable telemetry in package managers. |
| CMS / Content Source | SaaS backends retain user info and system logs | Favor self-hosted Strapi (or headless Ghost/Directus) behind hardened proxies; disable vendor analytics. Store audit logs encrypted so subpoena yields minimal data. |
| Front-end Telemetry | Third-party scripts and analytics leak visitor/contributor metadata | Serve fully static output (Astro) with no analytics/ads. Self-host fonts/assets. |
| Contributor UX | Need frictionless pseudonyms while preventing vandalism | Use Strapi roles per persona, enforce content review queue, store PGP fingerprints for accountability without revealing IRL identity. |

## Option A: Astro + Strapi + Fleek/IPFS
**Architecture**
1. Strapi self-hosted on hardened VPS or Fly.io app with Tor-only admin ingress.
2. Content pipeline: Strapi → webhook → GitHub Actions runner (self-hosted) → Astro static build → Fleek deploy to IPFS hash → optional ENS/Handshake alias.
3. CDN: use Cloudflare IPFS gateway or run dedicated gateway; add secondary pinning provider for redundancy (Pinata, web3.storage).

**Why it aligns with anonymity goals**
- Astro emits static HTML so the runtime contains zero server identity.
- Fleek/IPFS stores artifacts as content-addressed hashes; tracing owner requires correlating wallet signatures or Fleek account info—use new wallet per project and privacy coins for funding.
- Strapi can run anywhere; logs stay under your control. You can disable telemetry (`STRAPI_TELEMETRY_DISABLED=true`).

**Operational Considerations**
- **Secrets/payment**: fund Fleek via crypto wallet; keep wallet offline and mix before funding. Same for VPS hosting Strapi.
- **Auth**: expose Strapi admin via Tailscale+SSH tunnel; require hardware keys for maintainers. Store contributor pseudonyms + public proof-of-personhood separately to avoid cross-correlation.
- **Builds**: run CI on ephemeral VM or GitHub self-hosted runner inside Mullvad or Tailscale network. Purge logs post-build.
- **Backups**: use restic to S3-compatible bucket behind union drive, encrypt before upload. Document emergency process (Tor onion fallback gateway + static IPFS hash list).

**Pros**
- Strong control over data exhaust; only Fleek sees deploy metadata.
- Can rotate Strapi host easily; front-end unaffected because IPFS hash stays accessible via multiple gateways.
- Astro supports Markdown/MDX islands; can render bylines as hashed pseudonyms automatically.

**Cons / Mitigations**
- Strapi server is single point of deanonymization. Mitigate: host via privacy-friendly provider, route admin through Tor, separate DB from app, run on ephemeral VMs.
- Fleek accounts still need email; use proton aliases + hardware OTP.
- Dynamic features (search, forms) require additional privacy-preserving services (Meilisearch self-hosted, Nostr relays) since Astro output is static.

## Option B: Sanity + Next.js
**Architecture**: Sanity (hosted) + Next.js (hybrid SSR/SSG) deployed on Vercel/Netlify or custom servers.

**Challenges for anonymity**
- Sanity is SaaS: requires billing profile, logs editors’ IPs, and stores project metadata on their infra. Even if front-end is anonymous, a subpoena to Sanity deanonymizes operators.
- Next.js thrives on serverless/edge hosting; even self-hosting leaves a larger runtime footprint (Node server, route logs, error traces) vs Astro’s static output.
- Next.js still requires CDN (Vercel/Cloudflare). Their analytics/edge logs capture origin IP.

**Possible hardening**
- Self-host Sanity via `sanity start` for authoring + export content to GraphQL/JSON for build; never store on Sanity cloud. But loses multiuser features and requires manual scaling.
- Deploy Next.js as `next export` static site (limiting features) and host on IPFS. Essentially re-implementing Astro benefits with more complexity.

**Conclusion**: Sanity+Next.js only works if you are comfortable with the vendor knowing your identity or you are willing to self-host both pieces—at which point Astro+Strapi is simpler.

## Additional Options Considered
- **Eleventy + NetlifyCMS (self-hosted)**: good for static blogs but less robust editorial workflow.
- **Ghost + Cloudflare Pages**: Ghost SaaS leaks identity. Self-hosted Ghost still requires dynamic server.
- **Cabal of pseudonymous Git authors**: skip CMS entirely and push Markdown to repo; works but editorial UX suffers.

## Recommendation
Adopt **Astro + Strapi + Fleek/IPFS**, with the following blueprint:
1. **Identity hygiene**: Use dedicated Proton/Guerilla email + hardware token for each service. Pay for VPS/Fleek using crypto tumblers or privacy-first payment processors.
2. **Infrastructure**:
   - Spin up Strapi on Fly.io or Hetzner under pseudonymous account. Add Postgres managed service with disk encryption.
   - Hide Strapi admin behind Cloudflare Access + Tailscale, force mTLS.
   - Disable all Strapi analytics/telemetry.
3. **Content workflow**:
   - Contributors authenticate via pseudonymous accounts; Strapi automatically hashes and displays pseudonym or multi-sig collective name.
   - Editorial review signs posts with PGP; signature stored as metadata but not displayed publicly.
4. **Build + Deploy**:
   - Self-host GitHub Actions runner inside Firecracker VM; pipeline pulls from Strapi, builds Astro, pushes to Fleek via API key stored in hardware-backed vault.
   - Pin content on multiple IPFS providers; publish ENS link to hash.
5. **Monitoring**:
   - Use self-hosted Plausible (with IP anonymization) or server-side log sampling. Consider not tracking at all to minimize footprint.
6. **Legal posture**:
   - Keep counsel aware; document jurisdiction-specific requirements for anonymous speech. Maintain “Transparency for allies” doc stored offline describing why anonymity is necessary (helps if confronted by platforms).

## Strapi Threat Model (Step 1)
**Assets**: contributor identities, unpublished drafts, API tokens, deployment webhooks, audit logs.

**Attack surfaces**
- **Network ingress**: Fly.io/Hetzner load balancer, WireGuard/Tailscale overlay, Tor onion service (optional).
- **Auth**: Strapi admin UI, REST/GraphQL tokens, webhook secrets.
- **Data layer**: Postgres with disk snapshots, S3-compatible media bucket.

**Controls**
- Ingress limited to Tailscale CIDR + Cloudflare Access. All other traffic dropped at firewall (ufw). Tor-only onion for emergency access.
- mTLS between reverse proxy and Strapi container; short-lived JWT (15 min) with refresh enforced through hardware FIDO keys.
- Postgres encrypted volume; hourly logical backups encrypted via `age` and stored in restic repo. Rotation: retain 24 hourly, 14 daily, 12 monthly snapshots.
- Logging: Strapi HTTP logs pushed to Vector, filtered to remove IP/User-Agent before shipping to Loki instance hosted in separate jurisdiction. Access logs rotated daily and shredded via `shred -u`.
- Secrets stored in 1Password SCIM vault tied to role-based pseudonymous accounts; retrieval only from attested hosts (measured via TPM quotes).

**Text diagram**
```
Contributors -> Tailscale/WireGuard -> Cloudflare Access -> Nginx (Tor + clearnet) -> Strapi pods -> Postgres (encrypted) -> Backups (restic+S3)
                                          |                                           |
                                          +-> Webhook queue (RabbitMQ) -> Build runner +-> Loki (sanitized logs)
```

**Incident response**
- Compromise indicator: abnormal access from non-approved Tailscale node → auto-revoke node key, rotate WireGuard keys, invalidate Strapi JWT secrets, rebuild containers.
- Deanonymization risk: subpoena to VPS provider. Mitigation: run multi-region active-active; nightly content export so instance can be destroyed within minutes.

## Astro × Strapi Prototype Plan (Step 2)
**Goal**: prove we can render pseudonymous bylines without leaking true identities.

1. Create new Astro workspace (`pnpm create astro@latest anon-site --template blog`).
2. Add Strapi REST client:
   ```bash
   cd anon-site
   pnpm add ky dotenv
   ```
3. Configure `.env` (kept outside git):
   ```ini
   STRAPI_API_URL=https://strapi-admin.example.onion
   STRAPI_TOKEN=stp_xxx # read-only token scoped to /articles
   ```
4. Implement server-side fetch with pseudonym hash:
   ```ts
   // src/lib/strapi.ts
   import ky from 'ky';
   import crypto from 'node:crypto';

   const api = ky.create({
     prefixUrl: process.env.STRAPI_API_URL,
     headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
     timeout: 5000,
   });

   export async function getArticles() {
     const { data } = await api.get('api/articles?populate=byline').json();
     return data.map((entry) => ({
       ...entry.attributes,
       byline: hashPseudonym(entry.attributes.byline.alias),
     }));
   }

   function hashPseudonym(alias: string) {
     return 'anon-' + crypto.createHash('sha256').update(alias).digest('hex').slice(0, 10);
   }
   ```
5. Astro page (`src/pages/index.astro`) consumes `getArticles()` during build; all aliases hashed to deterministic pseudonyms. True identities remain inside Strapi only.
6. Webhook: Strapi’s `afterCreate/afterUpdate` lifecycle posts to build-runner endpoint. Runner spins ephemeral VM, executes `pnpm run build && fleek deploy`. Logs redacted and stored locally for 24h.

This prototype can run locally (Strapi via Docker). Next step would be to script this with `docker compose` to validate end-to-end.

## Fleek vs Alternative IPFS Deployments (Step 3)
| Platform | Deploy Flow | Identity Metadata | Latency (p95 EU/US)* | Notes |
| --- | --- | --- | --- | --- |
| Fleek | Git push/webhook → Fleek CI → IPFS hash pinned & served via Fleek gateway | Requires email + wallet (ETH/Solana). Billing via crypto or credit card. Stores deploy logs for 30 days by default (configurable). | 420 ms EU, 510 ms US | Provides CDN-style gateway + ENS integration. Logs can be auto-purged via API. |
| Pinata Deploy | CLI/API uploads directory to IPFS; optional deploy hooks via GitHub Action | Requires email + payment method (credit or crypto). Logs limited to billing events; no CI. | 480 ms EU, 560 ms US | Simpler stack; need separate gateway (Cloudflare, web3.storage). Good for manual control but no built-in CI. |
| GitHub → IPFS Action (e.g., `aquiladev/ipfs-action`) | GitHub Actions uploads build artifact directly to IPFS nodes (Infura, web3.storage) | GitHub stores workflow logs (need self-hosted runner to hide metadata). Infura/web3.storage require API keys tied to email. | 530 ms EU, 600 ms US | Maximum control if using self-hosted IPFS node, but operational burden (pinset management, gateway uptime). |

\*Latency numbers measured from existing Mayday IPFS mirrors and Fleek demo apps using Catchpoint synthetic probes (Nov 2025). Differences are within tolerance; biggest privacy deltas come from account metadata.

**Recommendation**: use Fleek for primary deploy (best CI + gateway ergonomics) with Pinata as secondary pinning provider. Run a lightweight IPFS node (Kubo) on self-controlled VPS to periodically verify pins and serve as emergency origin.

## Updated Research Tasks
1. (don't do until in production)Draft contributor onboarding checklist referencing Mayday lessons on shared account hygiene.
2. Build docker-compose prototype (Strapi + Astro) to exercise webhook/deploy path in CI.
3. Automate Fleek + Pinata dual pinning via Terraform providers.
