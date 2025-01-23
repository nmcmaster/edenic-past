# Technology Stack Documentation

## Core Technologies

### Frontend Framework
- Next.js 13+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS

### Development Tools
- ESLint for code quality
- PostCSS for CSS processing
- Node.js/npm for package management

## Architecture Decisions

### App Router Implementation
- Using Next.js 13+ app directory structure
- Page-based routing with nested layouts
- Client-side navigation between tracks

### Component Architecture
- Reusable UI components in src/app/ui/
- Client components for interactive elements (MediaPlayer)
- Server components for static content
- Consistent props typing with TypeScript

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom CSS variables for theming
- Responsive design using Tailwind breakpoints
- Consistent spacing using Tailwind classes

### External Integrations
- Bandcamp embedded player for music playback
- Hero Icons for UI icons
- No backend required (static site)

### Performance Considerations
- Client-side mounting for media player
- Static page generation
- Minimal JavaScript footprint
- Responsive images

## File Structure
```
src/
├── app/
│   ├── ui/           # Reusable UI components
│   ├── utils/        # Constants and utilities
│   ├── red-amarcord/ # Album-specific content
│   ├── promo/        # Promotional content
│   └── discography/  # Discography section
```

## Dependencies
- @heroicons/react: UI icons
- next: Framework
- react/react-dom: UI library
- typescript: Type safety
- tailwindcss: Styling
- eslint: Code quality
- postcss: CSS processing

## Development Decisions
1. Chose Next.js for:
   - Built-in TypeScript support
   - File-based routing
   - Static site generation
   - React 18 features

2. Selected Tailwind CSS for:
   - Rapid development
   - Consistent styling
   - Built-in responsive design
   - Small bundle size

3. TypeScript Implementation:
   - Strict mode enabled
   - Consistent interface naming
   - Props typing for all components
   - Utility type usage

4. Code Organization:
   - Feature-based directory structure
   - Shared UI components
   - Constants separation
   - Clear component responsibilities
