# Task Manager

A team project-management dashboard built with Next.js — kanban-style task lists with assignees, comments and likes, a notes section, a team chat UI, a documents page, and an analytics dashboard. Originally generated with v0.app.

## What it does

Task Manager is a client-side demo of a project workspace:

- **Tasks home** — task cards with assignee avatars, comment/like counts, status badges; create, edit, complete tasks
- **Notes section** — quick notes alongside tasks
- **Dashboard** — project overview page
- **Chats** — team messaging UI (demo conversations)
- **Documents** — document/file listing UI
- Demo team data in `lib/people.ts` — swap it for a real backend later

All state is in-memory client state — no backend, no database, no auth.

## Features

- Task CRUD with assignees, comments, likes, status
- Notes panel with create/edit/complete
- Chat UI with search, message threads, emoji/attachment buttons
- Documents page with card grid and dropdown actions
- Dashboard overview layout with sidebar (`dashboard-layout.tsx`)
- Dark/light theme toggle (next-themes)
- shadcn/ui components + Tailwind CSS
- Fully static — no API routes, no server actions

## Tech stack

- Next.js 14.2.16 (App Router, static export)
- React, TypeScript
- Tailwind CSS + shadcn/ui (Radix UI primitives) + Lucide icons
- next-themes for theming
- pnpm

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Build a static export:

```bash
pnpm build      # emits ./out
```

## Project structure

```
app/
  page.tsx            # tasks home page
  dashboard/page.tsx  # project overview
  chats/page.tsx      # team chat UI
  documents/page.tsx  # documents UI
  layout.tsx / client-layout.tsx
  globals.css
components/
  dashboard-layout.tsx  # sidebar layout shell
  notes-section.tsx
  theme-provider.tsx / theme-toggle.tsx
  ui/                   # shadcn/ui components
lib/
  people.ts             # demo team data
  utils.ts
public/                 # static assets
```

## Environment variables

None.

## Deployment

Static export (`output: 'export'`). Any static host works:

- GitHub Pages: build, then push `out/` to the `gh-pages` branch → `https://girishlade111.github.io/task-manager/`
- Vercel / Cloudflare Pages: connect the repo and deploy (no adapter needed)

Note: `next.config.mjs` sets `basePath: '/task-manager'` so assets resolve under the GitHub Pages subpath. Remove `basePath` when deploying to a root domain or Vercel.

## License

MIT — free to use and adapt.

---

Built by Girish Lade · [ladestack.in](https://ladestack.in)
