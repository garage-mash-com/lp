# CLAUDE.md

必ず日本語で回答してください。

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript landing page for D-MASH LINE (Garage MASH), a car buying service based in Japan. The application is built using Vite as the build tool and serves as a single-page landing site showcasing the company's car buying services.

## Development Commands

### Primary Development Workflow
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `docs/` directory)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

### Build and Deploy Process
According to the README, the standard build and deploy process is:
```bash
npm run build && git add -A && git commit -m "build"
```

## Architecture and Structure

### Build Configuration
- **Vite**: Modern build tool with React plugin
- **Output Directory**: `docs/` (configured for GitHub Pages deployment)
- **TypeScript**: Configured with separate app and node configs

### Component Structure
- **Single Page Application**: All content is rendered in `App.tsx` as sections
- **Component Organization**:
  - `src/components/FaqItem.tsx` - Collapsible FAQ component with internal state
  - `src/components/icons/` - SVG icon components (DialogueIcon, PriceIcon, SpeedIcon)
  - Icons are exported via barrel export from `src/components/icons/index.ts`

### Styling Approach
- CSS modules/classes with Japanese content
- Responsive design for landing page sections
- Static asset management for car images and step illustrations

### Key Application Sections
The landing page consists of these main sections (all in App.tsx):
1. Header with logo and CTA button
2. Hero section
3. Features (3 key benefits with icons)
4. Process flow (4-step buying process)
5. Customer testimonials
6. Portfolio/recent purchases showcase
7. FAQ section (using FaqItem component)
8. Service area coverage
9. Final CTA section
10. Footer with company information

### Static Assets
- Car images: `src/assets/` (prius.jpg, harrier.jpg, alphard.jpg)
- Process step images: `src/assets/step1-4.png`
- Company representative image: `src/assets/me.jpg`

### External Integration
- LINE integration for customer inquiries: `https://lin.ee/dHbAsr2`
- Company website: `https://dmash-line.com/`

## Code Quality Standards

### Linting Configuration
- ESLint with TypeScript support
- React Hooks and React Refresh plugins
- Browser globals configured
- Ignores `dist/` directory

### TypeScript Setup
- Strict TypeScript configuration
- Separate configs for app code and Node.js tooling
- Interface definitions for component props (e.g., `FaqItemProps`)

## Development Notes

- This is a Japanese-language landing page for car buying services
- The site builds to `docs/` directory (likely for GitHub Pages hosting)
- No test framework is currently configured
- No complex state management - uses local component state only
- All content is static/hardcoded (no CMS or API integration)
