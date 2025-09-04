# ReCode

## Overview

ReCode is a web platform dedicated to empowering women in rural Pakistan through technology education and digital literacy. The application serves as an informational and engagement hub for a non-profit initiative that emerged from the 2022 floods in Pakistan. It provides details about educational programs, showcases impact metrics, shares resources, and facilitates community involvement through volunteering, donations, and partnerships.

The platform focuses on bridging the digital divide by offering coding foundations, digital marketing skills, and basic computer literacy to underserved communities, particularly women in rural areas.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **UI Framework**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and a dark-mode focused design system
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **Development Setup**: Hot module replacement in development with Vite integration
- **API Structure**: RESTful endpoints prefixed with `/api` for clear separation from frontend routes

### Data Storage Architecture
- **Database**: PostgreSQL configured via Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing with interface-based design allowing easy database switching

### Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication prepared for future implementation

### Design System & Theming
- **Color Scheme**: Dark-themed design with purple (#271, 100%, 50%) and cyan (#188, 100%, 50%) accent colors
- **Typography**: Custom font stack including Orbitron for headings, Inter for body text, and system fonts as fallbacks
- **Animations**: CSS-based animations for glowing effects, floating elements, and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive behavior

### Development & Build Process
- **Development Server**: Express server with Vite middleware for HMR and hot reloading
- **Build Pipeline**: Vite builds frontend assets, ESBuild bundles server code for production
- **TypeScript**: Strict configuration with path mapping for clean imports (@/ for client, @shared/ for shared code)

## External Dependencies

### Database & Backend Services
- **Neon Database**: Serverless PostgreSQL hosting and management
- **Drizzle ORM**: Type-safe database schema definition and query building
- **PostgreSQL**: Primary database for user data and session storage

### UI & Component Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **Shadcn/ui**: Pre-built component library built on Radix UI with Tailwind CSS integration
- **Lucide React**: Icon library for consistent iconography throughout the application
- **React Icons**: Additional icon sets including social media icons (Facebook, Twitter, Instagram, LinkedIn)

### Development & Build Tools
- **Vite**: Frontend build tool and development server with React plugin
- **Replit Integration**: Development environment integration with error overlays and cartographer plugin
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS & Autoprefixer**: CSS processing and vendor prefix automation

### Utility Libraries
- **TanStack Query**: Server state management, caching, and data fetching
- **React Hook Form**: Form state management with validation
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting utilities
- **clsx & Tailwind Merge**: Utility for conditional CSS class names
- **Zod**: Schema validation for forms and API data
- **class-variance-authority**: Utility for creating component variants with consistent styling