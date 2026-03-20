# Brown Belt Website — Specification

## 1. Purpose

A showcase website for the Premium team's "Brown Belt" initiative — celebrating self-taught technical projects built by people outside their primary expertise. The site serves as:

- A **catalog** of Brown Belt projects for discovery and adoption
- A **cultural artifact** reinforcing the autodidactism philosophy
- A **reference** for the monthly "Show and Tell" ceremony

---

## 2. Concept

The "Brown Belt" is a secondary, self-learned technical skill that empowers people to "move things" without waiting for others. Unlike a "Black Belt" (your core job role), a Brown Belt is horizontal — a QA lead building a dashboard, a PM building a CLI tool, a finance person automating compliance workflows.

The website should feel like a **hall of projects**, not a corporate wiki. It should make people want to build their own Brown Belt project.

---

## 3. Pages

### 3.1 Homepage

**Route:** `/`

**Purpose:** Aggregate all products in a browsable, filterable grid.

**Content:**
- Hero section with the Brown Belt concept (brief — 1-2 sentences)
- Product grid/cards showing all 14 products
- Each card displays:
  - Product name
  - Owner name(s)
  - One-line description
  - Category badge (CLI Tool, Web App, Desktop App, IDE Extension, AI Skill)
  - Platform indicator (Terminal, bo.wix.com, macOS, VS Code, Cursor)
- Filter/sort controls:
  - By category (CLI Tool, Web App, Desktop App, IDE Extension, AI Skill)
  - By platform
  - Search by name or keyword

**Behavior:**
- Clicking a card navigates to the product's dedicated page
- Cards should feel interactive (hover state, subtle animation)

---

### 3.2 Product Page

**Route:** `/products/:slug`

**Purpose:** Dedicated deep-dive page for each product.

**Sections (in order):**

1. **Header**
   - Product name
   - Owner name(s)
   - Category badge
   - Link to live URL (if exists)
   - Link to GitHub repo

2. **What It Is**
   - 2-3 sentence description of the product

3. **The Problem**
   - What pain point or gap this product addresses
   - Why existing solutions didn't work

4. **Key Features**
   - Bullet list of main features
   - Visually structured (icons or feature cards, not a plain list)

5. **Tech Stack**
   - Technologies used (displayed as tags/pills)

6. **How to Use**
   - Installation or access instructions
   - Code snippets where relevant (formatted with syntax highlighting)
   - Direct link to the product URL or install command

7. **Owner Spotlight** (optional, if data available)
   - Owner's name and role
   - Their "Black Belt" (primary role) vs this "Brown Belt" project
   - Brief context on what inspired them to build it

---

## 4. Design Direction

### Visual Identity
- **Dark theme** — aligned with the deck's dark background aesthetic
- **Accent color:** Green (`#DEFF9A`) — from the deck's highlight color
- **Secondary text:** Light gray (`#D1D5DB`) — from the deck's body text
- **Font:** Urbanist (from the deck) for headings, clean sans-serif for body
- **Mood:** Technical but approachable. Not corporate — more like a developer portfolio or indie product showcase

### Layout Principles
- Full-width hero, constrained content area (~1200px max)
- Generous whitespace
- Cards with subtle borders or glassmorphism on dark background
- Responsive: works on desktop and mobile (single-column on mobile)

### Interactions
- Smooth page transitions between homepage and product pages
- Card hover effects (subtle scale or glow)
- Syntax-highlighted code blocks for install commands
- Category filters with animated transitions

---

## 5. Data Source

All product data comes from the knowledge base (`knowledge-base.md`), which was compiled from GitHub repo investigation of 14 products listed in the "AI cool products" Google Drive spreadsheet.

### Product Data Schema

```
{
  slug: string,           // URL-friendly name, e.g., "abtestor"
  name: string,           // Display name, e.g., "ABtestor"
  owners: string[],       // Owner name(s)
  description: string,    // One-line summary for cards
  category: enum,         // "CLI Tool" | "Web App" | "Desktop App" | "IDE Extension" | "AI Skill"
  platform: string,       // "Terminal" | "bo.wix.com" | "wix-bo.com" | "macOS" | "VS Code" | "Cursor"
  repo: string,           // GitHub repo path, e.g., "wix-private/premium-abtestor"
  url: string | null,     // Live URL if exists
  techStack: string[],    // e.g., ["React", "Wix Serverless", "Trino"]
  whatItIs: string,       // 2-3 sentence description
  problem: string,        // Problem it solves
  features: string[],     // Key features list
  howToUse: string,       // Usage instructions (may contain markdown/code)
}
```

### Products (14)

| # | Name | Category |
|---|------|----------|
| 1 | claude-code-statusline | CLI Tool |
| 2 | @wix/skills | CLI Tool |
| 3 | ps-ux-review | AI Skill |
| 4 | ABtestor | Web App |
| 5 | Zik (Premium Pulse) | Web App |
| 6 | Premium QA Status | Web App |
| 7 | SoxyAI | Desktop App |
| 8 | UniSearch | Web App |
| 9 | devdock | Desktop App |
| 10 | IronScale | IDE Extension |
| 11 | Moltbook | Web App |
| 12 | Sentry Health | Web App |
| 13 | CDD Copilot + Contribution MCP | Web App |
| 14 | Localization Skills | AI Skill |

---

## 6. Tech Stack (Website)

### Recommended
- **Framework:** Next.js (App Router) or Astro — static-first, fast
- **Styling:** Tailwind CSS — utility-first, matches the dark theme well
- **Hosting:** Static deploy (Vercel, Wix BO, or GitHub Pages)
- **Data:** Static JSON or MDX files — no backend needed, all data is known at build time
- **Code highlighting:** Shiki or Prism for install command snippets

### Rationale
- 14 products with static content — no need for a CMS or database
- Static site = fast, cheap, zero maintenance
- MDX allows rich content (code blocks, custom components) per product page

---

## 7. Sitemap

```
/                           → Homepage (product grid)
/products/claude-code-statusline
/products/wix-skills
/products/ps-ux-review
/products/abtestor
/products/zik
/products/premium-qa-status
/products/soxyai
/products/unisearch
/products/devdock
/products/ironscale
/products/moltbook
/products/sentry-health
/products/cdd-copilot
/products/localization-skills
```

---

## 8. Out of Scope (for now)

- User accounts or authentication
- Comments or ratings
- Submit-a-project form (could be added later)
- Analytics dashboard
- Integration with the "Show and Tell" ceremony calendar
- Owner profile photos (unless provided)
