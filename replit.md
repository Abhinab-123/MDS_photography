# MDS Photography - Visual Studio Website

## Overview

This is a professional photography studio website for Mahalaxmi Digital Studio (MDS Photography). It's a single-page application showcasing the studio's portfolio, service packages, team members, and contact information. The site features a modern, elegant design with smooth animations and a luxury aesthetic targeting wedding and event photography clients in Odisha, India.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with custom theme variables
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for smooth page transitions and effects
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development Server**: Vite dev server proxied through Express for HMR support

### Data Storage

- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Storage**: In-memory storage implementation (`MemStorage` class) - can be swapped for database storage
- **Migrations**: Drizzle Kit for schema migrations (`./migrations` directory)

### Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── studio/   # Page-specific components (Hero, Portfolio, etc.)
│   │   │   └── ui/       # Reusable shadcn/ui components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Route page components
├── server/           # Backend Express server
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── attached_assets/  # Static images and media files
```

### Key Design Patterns

- **Component-Based UI**: Modular React components with separation between page sections and reusable UI elements
- **Storage Interface Pattern**: `IStorage` interface allows swapping between in-memory and database implementations
- **Path Aliases**: TypeScript path aliases (`@/`, `@shared/`, `@assets/`) for clean imports

## External Dependencies

### Third-Party Services

- **WhatsApp Business**: Contact form submissions redirect to WhatsApp (`wa.me/918917328397`)
- **Google Maps**: Location links for studio address
- **Social Media**: Instagram and Facebook integration for profile links

### Fonts (Google Fonts)

- Cormorant Garamond (heading display)
- Playfair Display (secondary headings)
- Inter (body text)

### Database

- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Currently using in-memory storage; database connection ready for production use

### Key NPM Packages

- `framer-motion`: Animation library for UI transitions
- `drizzle-orm` + `drizzle-zod`: Database ORM with Zod validation integration
- `@tanstack/react-query`: Async state management
- `@radix-ui/*`: Accessible UI primitives for shadcn/ui components
- `connect-pg-simple`: PostgreSQL session store (for future auth implementation)