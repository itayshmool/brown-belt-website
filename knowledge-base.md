# AI Cool Products — Knowledge Base

> Source: "AI cool products" Google Drive spreadsheet + GitHub repo investigation
> Generated: 2026-03-19

---

## 1. claude-code-statusline

| Field | Value |
|-------|-------|
| **Owner** | Saar Shechter |
| **Repo** | `saarshe/claude-code-statusline` (public) |
| **URL** | — |
| **Tech Stack** | Go, TOML config, Homebrew distribution |
| **Category** | Developer Tool / CLI |

### What It Is
A customizable terminal status line for Claude Code that displays real-time session information directly in your terminal. It renders a persistent bar below the Claude Code interface showing context window usage, model info, token counts, cost tracking, and git status.

### Problem It Solves
When working with Claude Code in the terminal, developers lack visibility into their current session state — how much of the context window is used, what model they're on, how much the session is costing, and what git branch they're working on. This tool provides at-a-glance awareness without leaving the coding flow.

### Key Features
- Context window usage bar with visual fill indicator
- Model name display (e.g., Sonnet, Opus)
- Token usage tracking (input/output/cache)
- Cost tracking per session
- Git branch and status display
- 8 built-in themes (minimal, powerline, nerd, emoji, pastel, contrast, hacker, ocean)
- Interactive setup wizard (`claude-code-statusline setup`)
- Auto-start on terminal launch via shell RC integration
- TOML-based configuration

### How to Use
```bash
# Install via Homebrew
brew tap saarshe/claude-code-statusline
brew install claude-code-statusline

# Or via Go
go install github.com/saarshe/claude-code-statusline@latest

# Run setup wizard
claude-code-statusline setup

# Start manually
claude-code-statusline
```

---

## 2. @wix/skills

| Field | Value |
|-------|-------|
| **Owner** | Saar Shechter, Ron Buchnic, Yarden Ezra |
| **Repo** | `wix-private/premium-ai-cli` |
| **URL** | — |
| **Tech Stack** | Node.js, npm/npx, CLI |
| **Category** | Developer Tool / CLI |

### What It Is
A CLI tool for discovering and installing AI skills (prompts/rules/tools) into Cursor and Claude Code editors. It aggregates skills from multiple sources (Premium, Superpowers, Octocode, Vercel, Daymade) into a single searchable catalog and installs them into the correct editor configuration directories.

### Problem It Solves
AI skills for code editors are scattered across multiple repositories and teams. Developers waste time finding, downloading, and manually configuring skills. This CLI provides a unified marketplace-like experience — search, preview, and install skills with a single command.

### Key Features
- Multi-target installation (Cursor rules, Claude Code commands)
- Multiple skill sources: Premium AI Incubator, Superpowers, Octocode, Vercel, Daymade
- AI-powered semantic search ("find skills for code review")
- Fuzzy search for skill names
- Interactive TUI with real-time filtering
- Auto-updates via npm
- Slash command support for Claude Code

### How to Use
```bash
# Run directly with npx (no install needed)
npx @wix/skills

# Or install globally
npm install -g @wix/skills
wix-skills

# Search for specific skills
npx @wix/skills --search "code review"
```

---

## 3. ps-ux-review

| Field | Value |
|-------|-------|
| **Owner** | Roy Shlain |
| **Repo** | `wix-private/premium-ai-incubator` (path: `skills/ps-ux-review`) |
| **URL** | — |
| **Tech Stack** | AI Skill (Markdown prompt), Figma MCP integration |
| **Category** | AI Skill / Design Review |

### What It Is
An AI skill (prompt-based) that acts as a UX Review Orchestrator for growth and monetization product teams. It takes screenshots, Figma designs, or code as input and produces a structured UX review report covering UI/visual hierarchy, content/microcopy, accessibility, edge cases, and monetization effectiveness.

### Problem It Solves
UX reviews are time-consuming and often lack structured coverage across all dimensions (visual, content, accessibility, edge cases, monetization). This skill automates a comprehensive multi-dimensional review, producing prioritized action items tied to specific KPIs, replacing what would normally require multiple specialized reviewers.

### Key Features
- Accepts multiple input types: screenshots, Figma links (via MCP), code
- 5-step orchestrated review process:
  1. Context gathering & inference (platform, product context, primary KPI)
  2. Alignment/confirmation step with user
  3. Parallel specialized evaluations (UX/UI, Content, Accessibility, Edge Cases, Monetization)
  4. Structured final report (Action Items → Pros/Cons → Detailed Findings)
  5. Iteration loop for deeper dives
- Severity-based prioritization (Critical / Important / Nice-to-have)
- Primary + defensive KPI tracking (flags when a fix helps one but hurts the other)
- Figma integration via `user-Figma Desktop:get_screenshot` and `get_design_context`

### How to Use
```bash
# Install via @wix/skills CLI
npx @wix/skills
# Search for "ps-ux-review" and install to Cursor or Claude Code

# Then invoke in your editor:
# Share a screenshot, Figma link, or point to code
# The skill will guide you through context alignment before reviewing
```

---

## 4. ABtestor

| Field | Value |
|-------|-------|
| **Owner** | Dolev Akons |
| **Repo** | `wix-private/premium-abtestor` |
| **URL** | https://bo.wix.com/abtestor/ |
| **Tech Stack** | React 18, React Query, Tailwind CSS, Radix UI, Wix Serverless, Trino, CloudStore |
| **Category** | Web Application / A/B Testing |

### What It Is
A full-featured A/B Test Management Platform built as a Wix Backoffice application. It's a monorepo with a React frontend and Wix Serverless backend that provides test management, live KPI data visualization, a knowledge base for past experiments, and role-based access control.

### Problem It Solves
Managing A/B tests across a large organization is fragmented — experiments are tracked in spreadsheets, KPI data lives in separate analytics tools, and there's no centralized knowledge base of what was tested and what was learned. ABtestor consolidates experiment lifecycle management, live data monitoring, and institutional knowledge in one place.

### Key Features
- Test management with full lifecycle tracking
- Live KPI data via Trino (real-time experiment metrics)
- Knowledge base for documenting experiment learnings
- Role-based access control (RBAC)
- Search and filtering across experiments
- CloudStore for persistent data storage
- Responsive UI with Radix UI components and Tailwind CSS

### How to Use
1. Navigate to https://bo.wix.com/abtestor/
2. Log in with Wix SSO credentials
3. Create new experiments, monitor live KPIs, and document findings
4. Use the knowledge base to review past experiment results

---

## 5. Zik (Premium Pulse)

| Field | Value |
|-------|-------|
| **Owner** | Netanel Goodman |
| **Repo** | `wix-private/premium-pulse` |
| **URL** | https://bo.wix.com/premium-pulse |
| **Tech Stack** | React, Wix Serverless, Trino, AI-powered analysis |
| **Category** | Web Application / Monitoring Dashboard |

### What It Is
A Premium Billing Error Monitoring Dashboard (internally called "Metric Monitor") with AI-powered anomaly analysis. It monitors 12+ BI events related to billing, checkout, domains, and Google Workspace, detecting anomalies and providing AI-generated analysis of error patterns.

### Problem It Solves
Billing errors in a premium/subscription platform can go unnoticed until they cause significant revenue loss or customer churn. Manual monitoring of 12+ event streams is impractical. Zik automates anomaly detection across billing pipelines, flags spikes in real-time, and uses AI to explain what's happening and why.

### Key Features
- Monitors 12+ BI events: checkout errors, domain issues, Google Workspace failures, billing discrepancies
- AI-powered anomaly analysis (explains error patterns in natural language)
- Trino-based anomaly detection engine
- React frontend with real-time dashboard
- Wix Serverless backend
- Historical trend analysis
- Configurable alert thresholds

### How to Use
1. Navigate to https://bo.wix.com/premium-pulse
2. Log in with Wix SSO credentials
3. View the dashboard for real-time monitoring of billing events
4. Click on anomalies for AI-generated analysis
5. Configure alert thresholds for specific event types

---

## 6. Premium QA Status

| Field | Value |
|-------|-------|
| **Owner** | Mila Kogan |
| **Repo** | `wix-private/Premium-QA-Sled` (path: `premium-qa-cdd/11-Dashboard`) |
| **URL** | https://wix-bo.com/_api/premium-qa-status/ |
| **Tech Stack** | Yoshi React app, Static + Docker deployment, JSON data files, Claude Code profiles |
| **Category** | Web Application / QA Dashboard |

### What It Is
A QA Weekly Dashboard for the Premium team, deployed to wix-bo.com. It displays weekly QA status reports covering test coverage across Premium domains (Plans, Domains, Google Workspace, Billing, Premium Platform, Carts, Emails). The broader repo also includes a sophisticated Claude Code profile system with 34 hooks for automated QA workflows.

### Problem It Solves
QA teams need a centralized, accessible dashboard to track weekly testing progress across multiple product domains. Without it, status is communicated through scattered Slack messages and manual reports. This dashboard provides a persistent, auto-deployed view of QA health that any Wix employee can access.

### Key Features
- Weekly QA status reports organized by product domain
- Auto-deployed to wix-bo.com via Falcon CI
- SSO-protected access for all Wix employees
- JSON-based data updates (easy to automate)
- 14 product domain categories (Plans, Domains, Google Workspace, Billing, etc.)
- Claude Code integration with profile-based configuration (34 hooks for QA automation)
- Test plan management and documentation

### How to Use
1. Navigate to https://wix-bo.com/_api/premium-qa-status/
2. Log in with Wix SSO (required)
3. View weekly QA status across all Premium domains
4. For data updates: add JSON files to `src/data/weeks/` and deploy via standard PR flow

---

## 7. SoxyAI

| Field | Value |
|-------|-------|
| **Owner** | Idan Rachmanov |
| **Repo** | `wix-private/finance-soxyai` |
| **URL** | — |
| **Tech Stack** | Python 3.10+, Java (Trino CLI), PyWebView (Desktop GUI), Google APIs (Calendar, Drive, Gmail) |
| **Category** | Desktop Application / Compliance Automation |

### What It Is
A SOX-compliance data export tool for Trino that automates the tedious process of query execution, audit trail generation, IPE (Information Produced by Entity) reports, SHA-256 checksum creation, and screenshot documentation. It has both a Desktop GUI (PyWebView) and a CLI interface.

### Problem It Solves
SOX (Sarbanes-Oxley) compliance requires meticulous documentation of every data query — who ran it, when, what the results were, and proof of data integrity. Manually creating audit trails, checksums, and screenshots for each query is extremely time-consuming and error-prone. SoxyAI automates the entire compliance workflow end-to-end.

### Key Features
- Automated Trino query execution with full audit trails
- IPE (Information Produced by Entity) report generation
- SHA-256 checksum calculation for data integrity verification
- Automated screenshot capture for documentation
- Desktop GUI via PyWebView (cross-platform)
- CLI for headless/automated execution
- Google Calendar integration (schedule compliance tasks)
- Google Drive integration (auto-upload reports)
- Gmail integration (email compliance reports)
- Supports multiple query configurations

### How to Use
```bash
# Prerequisites
# Python 3.10+, Java (for Trino CLI)

# Install dependencies
pip install -r requirements.txt

# Run Desktop GUI
python main.py --gui

# Run CLI mode
python main.py --cli --query "SELECT ..." --output report.xlsx

# Configure Google API integrations via OAuth credentials
```

---

## 8. UniSearch

| Field | Value |
|-------|-------|
| **Owner** | Roi Ashkenazi |
| **Repo** | `wix-private/unisearch` |
| **URL** | https://bo.wix.com/unisearch |
| **Tech Stack** | Node.js v18, Yarn Berry, Wix Serverless, OAuth (GitHub, Slack, Jira), Wix Prompt Hub |
| **Category** | Web Application / Federated Search |

### What It Is
A federated search engine that simultaneously searches across GitHub, Slack, and Jira from a single search bar. It provides smart correlation between results across platforms and optional AI-powered reranking using Wix Prompt Hub.

### Problem It Solves
Developers and PMs constantly context-switch between GitHub, Slack, and Jira to find information related to a single topic. A bug might have a Jira ticket, a Slack discussion, and a GitHub PR — finding all three requires searching three separate tools. UniSearch unifies this into one query with cross-platform correlation.

### Key Features
- Parallel search across GitHub, Slack, and Jira
- Smart result correlation (links related items across platforms)
- AI-powered reranking (optional, via Wix Prompt Hub)
- OAuth integration for each platform
- Dark and light theme support
- Deployed as Wix Backoffice application
- Real-time search results

### How to Use
1. Navigate to https://bo.wix.com/unisearch
2. Log in with Wix SSO
3. Connect your GitHub, Slack, and Jira accounts via OAuth
4. Type a search query — results appear from all platforms simultaneously
5. Click correlated results to see related items across platforms

---

## 9. devdock

| Field | Value |
|-------|-------|
| **Owner** | Shay Kovach |
| **Repo** | `shayko1/devdock` (public) |
| **URL** | — |
| **Tech Stack** | Electron 33, React 19, TypeScript 5.7, Vite 6, xterm.js, node-pty, Vitest, Playwright |
| **Category** | Desktop Application / Developer Productivity |

### What It Is
A local project command center for macOS — a desktop application that serves as a launchpad for all your development projects. It features embedded Claude terminal sessions with git worktree support, a browser bridge CLI, agent management, and pipeline automation.

### Problem It Solves
Developers juggle multiple projects, each with different setups, terminals, and workflows. Switching between projects means opening new terminals, navigating to directories, remembering run commands, and losing context. devdock provides a single hub to launch, manage, and monitor all projects with integrated AI assistance.

### Key Features
- Project launchpad with quick access to all local projects
- Embedded Claude terminal sessions with full xterm.js integration
- Git worktree support for parallel branch work
- Browser bridge CLI for connecting browser actions to devdock
- Agent management (manage multiple AI agents per project)
- Pipeline automation (define and run multi-step workflows)
- macOS-native via Electron 33
- Modern React 19 + Vite 6 frontend
- Full test coverage with Vitest + Playwright

### How to Use
```bash
# Clone and build
git clone https://github.com/shayko1/devdock
cd devdock
npm install
npm run dev

# Or build for distribution
npm run build
# Install the .dmg from dist/
```

---

## 10. IronScale

| Field | Value |
|-------|-------|
| **Owner** | Israel Zablianov |
| **Repo** | `wix-private/vscode-scala-extension` |
| **URL** | — |
| **Tech Stack** | TypeScript 5.9, VS Code Extension API, Metals (Scala LSP), Red Hat Java, Bazel, BSP |
| **Category** | IDE Extension / Developer Tool |

### What It Is
A VS Code/Cursor extension for Scala + Java development in Wix's Bazel monorepo. It bundles 6 extensions (Metals, Red Hat Java, Bazel Java, Java Debugger, vscode-bazel, vscode-proto3) into an integrated development experience with cross-language navigation, test running, JVM debugging, and Nile/Ninja service generation.

### Problem It Solves
Developing Scala and Java in Wix's Bazel monorepo requires multiple VS Code extensions that don't work well together out of the box. Configuring Metals, Java LSP, Bazel build, protobuf navigation, and debugging individually is painful and error-prone. IronScale provides a single-click setup that configures everything correctly for Wix's specific monorepo architecture.

### Key Features
- Extension Pack: bundles Metals, Red Hat Java, Bazel Java (Salesforce), Java Debugger, vscode-bazel, vscode-proto3
- Cross-language navigation: Scala ↔ Proto ↔ BUILD files
- Integrated test runner with Test Explorer, CodeLens, and JUnit XML parsing
- JVM debugger with JDWP attach and auto-detection (Scala/Java)
- Nile/Ninja service generation wizards (13 templates)
- VMR operations (pull/lock commands)
- Bazel error parser + Flynt lint diagnostics
- Onboarding wizard for first-time setup
- Status bar as primary UI (optimized for Cursor compatibility)
- Dual language server: Metals (Scala via BSP) + Red Hat Java (JDT LS via Bazel Java bridge)
- Auto-resolved Java 21 via Coursier
- Metals auto-configured to 4GB with G1GC

### How to Use
1. Install IronScale extension from VS Code / Cursor marketplace (or internal distribution)
2. Open a Bazel/Scala workspace (e.g., `premium`)
3. The onboarding wizard guides initial setup
4. Use status bar button as the main entry point for features
5. Navigate cross-language with Go to Definition (Scala → Proto → BUILD)
6. Run tests via Test Explorer or CodeLens
7. Generate new services via Nile/Ninja wizards

---

## 11. Moltbook

| Field | Value |
|-------|-------|
| **Owner** | Israel Zablianov |
| **Repo** | `wix-private/premium-moltbook` |
| **URL** | https://bo.wix.com/premium-moltbook/feed |
| **Tech Stack** | React, Yoshi, shadcn/ui (frontend), Wix Serverless, CloudStore (backend), npm packages (SDK/MCP/CLI) |
| **Category** | Web Application + Platform / AI Social Network |

### What It Is
A "Social Network for AI Agents" — a platform where AI agents can post, comment, upvote, and debate. It provides 5 integration methods: heartbeat loop, MCP server, TypeScript SDK, CLI, and HTTP API. Agents build karma, participate in communities, and interact with each other autonomously.

### Problem It Solves
AI agents working in isolation lack a way to share knowledge, findings, and status updates with other agents and humans. There's no "water cooler" for AI agents. Moltbook creates a shared social space where agents can post discoveries, ask questions, debate solutions, and build reputation — making multi-agent workflows more transparent and collaborative.

### Key Features
- 5 integration methods: heartbeat loop, MCP server (15 tools), TypeScript SDK, CLI, HTTP API
- Social interactions: posts, comments, upvotes, debates
- Karma system for agent reputation
- Rate limiting to prevent spam
- Default communities for topic organization
- React + shadcn/ui frontend for humans to observe agent activity
- Wix Serverless + CloudStore backend
- npm packages: `@moltbook/sdk`, `@moltbook/mcp`, `@moltbook/cli`

### How to Use
```bash
# Install MCP server (for Claude Code / Cursor)
npx @moltbook/mcp

# Install CLI
npm install -g @moltbook/cli
moltbook post "Hello from my agent!"

# Use TypeScript SDK
npm install @moltbook/sdk
```
```typescript
import { Moltbook } from '@moltbook/sdk';
const mb = new Moltbook({ agentName: 'my-agent' });
await mb.post('Discovered a bug in checkout flow');
```

Web UI: https://bo.wix.com/premium-moltbook/feed

---

## 12. Sentry Health

| Field | Value |
|-------|-------|
| **Owner** | Shay Kovach |
| **Repo** | `wix-private/sentry-health` |
| **URL** | https://wix-bo.com/sentry-health |
| **Tech Stack** | React, Vite, Wix Serverless, Sentry API integration |
| **Category** | Web Application / Error Monitoring Dashboard |

### What It Is
A Sentry Health Dashboard deployed as a Wix Backoffice application. It connects to Sentry's API and provides a comprehensive health overview for any Sentry project — showing unresolved issues, event trends, user impact, crash-free session rates, releases, alerts, session replays, and browser/OS/device breakdowns.

### Problem It Solves
Sentry's native UI, while powerful, requires navigating multiple pages to get a holistic view of project health. Teams need a single-pane-of-glass dashboard that shows KPIs (unresolved issues, events, affected users, crash-free rate), trend charts, issue tables, release timelines, and session replays all in one view — integrated into the Wix backoffice where teams already work.

### Key Features
- **KPI Cards**: Unresolved Issues, Total Events, Users Affected, New Issues (< 72h), Crash-Free Sessions
- **Secondary KPIs**: Assigned vs unowned issues, Latest Release info, Active Alerts (issue + metric), Session Replays count
- **Visualizations**: Trend charts, Pie charts (Browsers, OS, Devices), Releases Timeline
- **Issue Management**: Issue table with assignee tracking, team member lookup
- **Session Replays**: Embedded replay viewer
- **Filtering**: Period, Environment, Level, Interval, Tag filters (browser, OS, device), Issue-specific filtering
- **Project Picker**: Switch between any Sentry project dynamically
- **Auto-refresh**: Live dot indicator, last-updated timestamp, manual refresh button
- Persists last-selected project in localStorage

### How to Use
1. Navigate to https://wix-bo.com/sentry-health
2. Log in with Wix SSO
3. Select a Sentry project from the project picker
4. Use the filter bar to narrow by time period, environment, error level, etc.
5. Review KPIs, trend charts, and issue tables
6. Click into session replays for user-level debugging

---

## Summary Table

| # | Product | Owner | Category | Platform |
|---|---------|-------|----------|----------|
| 1 | claude-code-statusline | Saar Shechter | CLI Tool | Terminal (macOS/Linux) |
| 2 | @wix/skills | Saar Shechter, Ron Buchnic, Yarden Ezra | CLI Tool | Terminal (Node.js) |
| 3 | ps-ux-review | Roy Shlain | AI Skill | Cursor / Claude Code |
| 4 | ABtestor | Dolev Akons | Web App | bo.wix.com |
| 5 | Zik (Premium Pulse) | Netanel Goodman | Web App | bo.wix.com |
| 6 | Premium QA Status | Mila Kogan | Web App | wix-bo.com |
| 7 | SoxyAI | Idan Rachmanov | Desktop App | macOS/Windows (Python) |
| 8 | UniSearch | Roi Ashkenazi | Web App | bo.wix.com |
| 9 | devdock | Shay Kovach | Desktop App | macOS (Electron) |
| 10 | IronScale | Israel Zablianov | IDE Extension | VS Code / Cursor |
| 11 | Moltbook | Israel Zablianov | Web App + Platform | bo.wix.com + npm |
| 12 | Sentry Health | Shay Kovach | Web App | wix-bo.com |
