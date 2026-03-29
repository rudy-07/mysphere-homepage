# mySphere Website

Official frontend website for the mySphere ecosystem, built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Overview

This project is the public-facing website for mySphere and its products:

- myCloud
- myCam
- myTune
- myLink
- myMoney

The site includes:

- A branded landing page
- Product detail pages using dynamic routing (`/products/:slug`)
- An About page
- A Not Found fallback page
- Responsive, animated UI sections with Framer Motion

## Live Product Links

- myCloud: https://cloud.mysphere.co.in
- myCam: https://cam.mysphere.co.in
- myTune: https://tune.mysphere.co.in

Note: Some products are listed as planned/in development and may have UI links intentionally hidden depending on status.

## Tech Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS 3
- shadcn/ui + Radix UI primitives
- React Router DOM 6
- Framer Motion
- TanStack Query
- Vitest + Testing Library
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development-mode build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint across the project
- `npm run test` - Run tests once with Vitest
- `npm run test:watch` - Run Vitest in watch mode

## Routing

Configured in `src/App.tsx`:

- `/` -> Home page (`src/pages/Index.tsx`)
- `/products/:slug` -> Product page (`src/pages/ProductPage.tsx`)
- `/about` -> About page (`src/pages/About.tsx`)
- `*` -> Not Found page (`src/pages/NotFound.tsx`)

## Project Structure

```text
.
|- public/
|  |- robots.txt
|  `- myTune_exe_app/
|- src/
|  |- components/
|  |  |- ui/
|  |  `- (site sections and shared components)
|  |- data/
|  |  `- products.ts
|  |- hooks/
|  |- lib/
|  |- pages/
|  |  |- About.tsx
|  |  |- Index.tsx
|  |  |- NotFound.tsx
|  |  `- ProductPage.tsx
|  |- test/
|  |- App.tsx
|  `- main.tsx
|- index.html
`- package.json
```

## Product Data Source

Product metadata (name, slug, status, features, integrations, platform availability, and external URLs) is centralized in:

- `src/data/products.ts`

If you want to add or update products, this is the first file to modify.

## Testing

Run all tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Test setup files are in `src/test/`.

## Build and Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Contributing

1. Create a feature branch.
2. Make focused changes.
3. Run lint and tests before opening a PR:

```bash
npm run lint
npm run test
```