# Azeena Admin Dashboard

## Overview
A SvelteKit admin dashboard application built with Svelte 5, TailwindCSS v4, and various UI components. Features include dashboard metrics, data visualizations with LayerChart/D3, and a responsive sidebar navigation.

## Tech Stack
- **Framework**: SvelteKit with Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: bits-ui, vaul-svelte, svelte-sonner
- **Charts**: LayerChart with D3 (d3-scale, d3-shape)
- **Icons**: Lucide Svelte, Tabler Icons

## Project Structure
```
src/
├── app.css          # Global styles with TailwindCSS
├── app.html         # HTML template
├── lib/             # Reusable components and utilities
└── routes/          # SvelteKit routes/pages
static/              # Static assets
```

## Development
- Run: `npm run dev` (starts dev server on port 5000)
- Build: `npm run build`
- Type check: `npm run check`
- Format: `npm run format`

## Deployment
Configured for autoscale deployment with Node.js adapter. Build command runs `npm run build` and production uses `node build`.
