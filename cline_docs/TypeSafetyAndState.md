# Type Safety and State Management Guidelines

## TypeScript Configuration

### Compiler Options
- Strict mode enabled
- Null checks enforced
- Strict function types
- No implicit any

## Component Type Safety

### Props Typing
```typescript
// Example from MediaPlayer.tsx
interface MediaPlayerProps {
  src: string;
  albumHref: string;
  albumTitle: string;
}

// Example from Nav.tsx
interface NavProps {
  hrefBackward: string;
  hrefForward: string;
  textForward: string;
  textBackward: string;
  infoIconLeft?: boolean;
  infoIconRight?: boolean;
}
```

### State Management
- Local component state using useState
- No global state management (not required for current scope)
- Client-side state for MediaPlayer mounting

## Type Safety Best Practices

### Component Props
1. Always define explicit interfaces for props
2. Use optional properties where appropriate
3. Document complex prop types
4. Avoid any type

### Event Handlers
```typescript
// Example pattern
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  // Handler implementation
};
```

### Constants and Utils
```typescript
// Example from constants.tsx
export const paragraphBottomMargin: string = "mb-5";
export const albumHrefRedAmarcord: string = "https://edenicpast.bandcamp.com/album/red-amarcord";
```

## Type Safety Enforcement

### ESLint Rules
- no-explicit-any
- explicit-function-return-type
- no-unused-vars
- explicit-module-boundary-types

### Code Review Guidelines
1. Check prop type definitions
2. Verify event handler types
3. Ensure no type assertions
4. Validate interface completeness

## Current Implementation

### Component Examples
```typescript
// MediaPlayer.tsx
"use client";
import { useEffect, useState } from "react";

interface StyleProps {
  border: number;
  margin: string;
  height: number;
  display: string;
}

export const iframeStyle: StyleProps = {
  border: 0,
  margin: "0 auto",
  height: 42,
  display: "block",
};
```

### Type Safety Considerations
1. Client Components
   - Explicit client directive
   - State type definitions
   - Event handler typing

2. Server Components
   - Props interface definitions
   - Return type specifications
   - Metadata typing

## Future Improvements

### Potential Enhancements
1. Add path type safety
2. Implement API route type safety
3. Add strict type checking for content structure
4. Consider implementing zod for runtime type validation

### Type Safety TODOs
- [ ] Add type definitions for content structure
- [ ] Implement strict typing for navigation paths
- [ ] Add type guards where necessary
- [ ] Consider implementing branded types for IDs
