# One7 Engg & Arch

A responsive website for One7 Engg & Arch, built with React and Vite. It introduces the studio and provides dedicated pages for its portfolio, services, and contact information.

## Features

- Responsive layouts for desktop and mobile
- Home, Portfolio, Services, and Contact pages
- Client-side navigation with React Router
- Portfolio cards driven by project data
- Contact links to Instagram and Gmail compose
- Dark visual theme with Jost headings and Inter body text

## Getting started

### Requirements

- Node.js
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal (usually `http://localhost:5173`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reloading |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

To preview a production build:

```bash
npm run build
npm run preview
```

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/portfolio` | Portfolio |
| `/services` | Services |
| `/contact` | Contact |

## Project structure

```text
src/
├── assets/       # Images and bundled assets
├── components/   # Shared page components and their styles
├── data/         # Portfolio project data
├── pages/        # Route-level page components
├── App.jsx       # Routes and shared page layout
└── main.jsx      # React application entry point
public/           # Static files served as-is
```

## Updating portfolio projects

Edit the `projects` array in [`src/data/projects.js`](src/data/projects.js). Each entry includes an `id`, `title`, `category`, and `image` path. Public image paths should point to files under `public/`; for example, `/projects/example.jpg` refers to `public/projects/example.jpg`. Replace the current sample entries and add the corresponding image files.

## Contact links

The contact page links to the studio's Instagram profile and opens Gmail compose addressed to `ar208213@gmail.com`. These links are configured in [`src/components/Contact.jsx`](src/components/Contact.jsx).
