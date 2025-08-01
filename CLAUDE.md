# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Development
- `npm run dev` - Start development server (Next.js dev mode)
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (disabled during builds)

### Game Analysis
- `node scripts/count-games.js` - Analyze game distribution across categories and validate counts

## Architecture Overview

### Next.js App Router Structure
This is a Next.js 15 project using the App Router pattern with static export configuration:

- `app/` - App Router pages and layouts
  - `page.tsx` - Home page with featured/popular/new games sections
  - `game/[id]/page.tsx` - Individual game pages with iframe embedding
  - `category/[slug]/page.tsx` - Category listing pages
  - `layout.tsx` - Root layout with comprehensive SEO metadata
- `components/` - React components organized by purpose
  - `ui/` - Radix UI components (button, card, dialog, etc.)
  - Game-specific: `GameCard`, `GameFrame`, `CategoryCard`
  - Layout: `Navbar`, `Footer`, `GeometricBackground`
- `data/games.ts` - Centralized game and category data
- `types/game.ts` - TypeScript interfaces for Game and Category
- `public/embed/` - Static HTML5 game files served via iframe

### Game Data Structure
Games are defined with this interface:
```typescript
interface Game {
  id: string;           // Unique identifier, matches embed folder name
  title: string;        // Display name
  description: string;  // SEO description
  coverImage: string;   // Thumbnail path
  category: string;     // Maps to Category.slug
  iframeUrl: string;    // Path to embeddable HTML file
  featured?: boolean;   // Appears in featured section
  tags?: string[];      // Search/filter tags
  rating?: number;      // User rating
  plays?: number;       // Play count
  gameInfo?: {          // Extended game information
    overview: string;
    howToPlay: string;
    tips: string;
    faq: string;
  };
}
```

### Configuration
- **Static Export**: `next.config.js` configured for static site generation
- **SEO**: Comprehensive metadata in root layout with dynamic OG images
- **Styling**: Tailwind CSS with Radix UI components and custom theme
- **Fonts**: Inter (primary) and Nunito (display) from Google Fonts
- **Environment**: Auto-detects deployment platform (Netlify/Vercel) via `lib/site-config.ts`

### Game Embedding System
Games are embedded via iframe using the `GameFrame` component:
- Shows cover image and play button initially
- Loads iframe on user interaction (performance optimization)
- Provides fullscreen and refresh controls
- Handles loading states and error recovery

### Dynamic Imports
Non-critical components use dynamic imports for performance:
- `Footer` - SSR enabled for SEO
- `GeometricBackground` - Client-side only animation

## Key Implementation Details

### Game Organization
- Games are split between `games` (main collection) and `additionalGames` arrays
- Categories have defined game counts that should match actual game distribution
- Use `scripts/count-games.js` to validate category counts after adding games

### SEO Strategy
- Each game page generates structured metadata
- Canonical URLs auto-configured based on deployment environment
- Open Graph and Twitter Card meta tags for social sharing
- Robots.txt and sitemap generation via App Router

### Static Assets
- Game files in `public/embed/[game-id]/` directory structure
- Each game has `index.html` as entry point
- Cover images stored in `public/` or CDN paths

### Responsive Design
- Mobile-first grid layouts (2-3-4-6 column responsive grids)
- Touch-friendly game controls
- Optimized iframe dimensions for mobile devices

## Adding New Games

1. Add game files to `public/embed/[game-id]/`
2. Update `data/games.ts` with new Game object
3. Add cover image to `public/` or use CDN URL
4. Run `node scripts/count-games.js` to verify category counts
5. Update category `gameCount` if necessary

## Performance Considerations
- Dynamic imports for non-critical components
- Lazy iframe loading (only when user clicks play)
- Static export for optimal CDN caching
- Unoptimized images (suitable for static hosting)