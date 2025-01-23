# Social Sharing Implementation Proposal

## Overview
Add tasteful, minimal social sharing capabilities to allow readers to share articles and music with their networks, while maintaining the site's serious aesthetic and respecting the gravity of the content.

## Design Approach

### Visual Design
- Minimal icon-only buttons in site's color scheme (red-700)
- Positioned at bottom of articles, above the Next navigation
- Hover state in red-800 for subtle interaction
- Small icons (h-4 w-4) to maintain understated presence
- Grouped with subtle separator between navigation elements

### Example Implementation
```tsx
// ShareButtons.tsx (Client Component)
"use client";

import { usePathname } from "next/navigation";
import { TwitterIcon, FacebookIcon, LinkedInIcon } from "@heroicons/react/24/outline";

interface ShareButtonsProps {
  title: string;
  description?: string;
}

export default function ShareButtons({ title, description }: ShareButtonsProps) {
  const pathname = usePathname();
  const url = `https://edenicpast.com${pathname}`;
  
  const shareData = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  return (
    <div className="flex items-center gap-4 text-red-700 mt-8 mb-4">
      <span className="text-sm">Share:</span>
      <button
        onClick={() => window.open(shareData.twitter, '_blank')}
        className="hover:text-red-800 transition-colors"
        aria-label="Share on Twitter"
      >
        <TwitterIcon className="h-4 w-4" />
      </button>
      <button
        onClick={() => window.open(shareData.facebook, '_blank')}
        className="hover:text-red-800 transition-colors"
        aria-label="Share on Facebook"
      >
        <FacebookIcon className="h-4 w-4" />
      </button>
      <button
        onClick={() => window.open(shareData.linkedin, '_blank')}
        className="hover:text-red-800 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
```

### Meta Tags Implementation
```tsx
// layout.tsx
export const metadata: Metadata = {
  title: "Edenic Past",
  description: "The meaning behind the songs by brutal death metal band Edenic Past",
  openGraph: {
    title: "Edenic Past",
    description: "The meaning behind the songs by brutal death metal band Edenic Past",
    url: "https://edenicpast.com",
    siteName: "Edenic Past",
    images: [
      {
        url: "/red-amarcord-square.png",
        width: 1200,
        height: 630,
        alt: "Edenic Past - Red Amarcord",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edenic Past",
    description: "The meaning behind the songs by brutal death metal band Edenic Past",
    images: ["/red-amarcord-square.png"],
  },
};
```

### Usage in Pages
```tsx
// Example usage in a page component
export default function Page() {
  return (
    <>
      <article>
        {/* Content */}
      </article>
      <ShareButtons 
        title="The Connection Between Bruno Schulz and the Holodomor" 
        description="Exploring the synchronicity between Schulz's writing and the Ukrainian famine"
      />
      <Nav />
    </>
  );
}
```

## Features

### Platforms Supported
- Twitter/X (for music and literary community engagement)
- Facebook (for broader sharing)
- LinkedIn (for professional/academic context)

### Implementation Details
1. Client-side component to handle share URLs and click events
2. Proper meta tags for rich previews on all platforms
3. Accessible button implementations with proper aria labels
4. Responsive design that works on all device sizes
5. No external scripts or tracking - just direct share links

### SEO and Meta Tags
- OpenGraph tags for Facebook/LinkedIn
- Twitter card meta tags
- Dynamic titles and descriptions per page
- Proper image tags for rich previews

## Technical Considerations

### Performance
- Small bundle size (only outline icons)
- No external dependencies
- Client-side component loads after main content
- No impact on Core Web Vitals

### Accessibility
- Proper aria labels
- Keyboard navigation support
- High contrast icons
- Clear hover states

## Next Steps
1. Create ShareButtons component
2. Add OpenGraph and Twitter card meta tags
3. Create social preview images
4. Test sharing on all platforms
5. Implement analytics to track sharing (optional)

## Future Enhancements
- Add copy link button
- Support for more platforms if needed
- Custom share images per article
- Share count tracking (if desired)
