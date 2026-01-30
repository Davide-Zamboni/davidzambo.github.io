# Davide Zamboni - Personal Website

A minimal, clean personal website built with Next.js 14 and TypeScript.

## Features

- Minimalist design with smooth animations
- Dark mode support (automatic based on system preference)
- Responsive layout
- Static site generation for fast loading
- GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Build for production
npm run build
```

The static site will be generated in the `out` directory.

## Deployment

The site is automatically deployed to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
npm run deploy
```

## Project Structure

```
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── projects/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
├── components/
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── Header.tsx
│   ├── Header.module.css
│   ├── ProjectCard.tsx
│   ├── ProjectCard.module.css
│   ├── SocialLinks.tsx
│   └── SocialLinks.module.css
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   └── robots.txt
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Inspiration

Design inspired by:
- [tomfran.github.io](https://tomfran.github.io) - Minimalist approach
- [cannoneyed.com](https://cannoneyed.com) - Link animations and project cards

## License

MIT
