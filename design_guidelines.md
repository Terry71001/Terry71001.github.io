# Design Guidelines: Tech-Focused Student Portfolio Blog

## Design Approach
**Reference-Based Approach** drawing inspiration from modern portfolio platforms (Behance, Dribbble) combined with tech-forward aesthetics (Linear's precision, Stripe's sophistication). This creates a distinctive showcase platform that highlights creative work with technical credibility.

## Core Design Principles
1. **Visual Hierarchy Through Scale**: Large project imagery dominates, text plays supporting role
2. **Geometric Precision**: Sharp edges, grid-based layouts, technical exactness
3. **Breathing Space**: Generous whitespace creates premium, focused viewing experience
4. **Progressive Disclosure**: Work reveals itself through intentional scrolling and interaction

---

## Typography System

**Primary Font**: Inter (Google Fonts) - modern, technical, highly readable
**Accent Font**: JetBrains Mono (Google Fonts) - for technical tags, metadata

**Hierarchy**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight
- Section Headers: text-4xl md:text-5xl font-bold tracking-tight
- Project Titles: text-2xl md:text-3xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Metadata/Tags: text-sm font-mono uppercase tracking-wider
- Captions: text-sm leading-relaxed

---

## Layout System

**Spacing Scale**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: gap-2, gap-4 (between related elements)
- Component padding: p-6, p-8 (cards, containers)
- Section spacing: py-16, py-20, py-24 (vertical rhythm)
- Grid gaps: gap-8, gap-12 (project galleries)

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Grid Systems**:
- Desktop project grid: grid-cols-2 lg:grid-cols-3 gap-8
- Mobile: Always grid-cols-1 gap-6
- Featured work: Can break grid with spanning elements (col-span-2)

---

## Page Structures

### Homepage
1. **Hero Section** (h-screen with min-h-[600px])
   - Full-screen featured project image with gradient overlay
   - Large headline overlay: "Student Developer & Designer"
   - Subheading with brief introduction
   - Blurred-background CTA buttons: "View Projects" + "About Me"

2. **Featured Projects Grid** (py-20)
   - Masonry-style or staggered grid layout
   - 6-8 project cards with hover scale effect (scale-105)
   - Each card: Large image, project title, tech stack tags, year

3. **Skills Showcase** (py-16)
   - Grid display of technical skills with icons
   - Grid-cols-3 md:grid-cols-4 lg:grid-cols-6

4. **About Preview** (py-20)
   - Two-column layout: Profile image + bio text
   - Links to detailed about page

5. **Footer** (py-12)
   - Social links, contact email, copyright
   - Navigation shortcuts

### Project Gallery Page
1. **Filter Bar** (sticky top-0)
   - Category pills (All, Photography, Web Design, 3D Art, etc.)
   - Active state with underline/border treatment

2. **Gallery Grid** (py-12)
   - Responsive masonry layout
   - Varied aspect ratios for visual interest
   - Infinite scroll or pagination

### Individual Project Page
1. **Project Hero** (h-[70vh])
   - Full-width hero image
   - Overlaid title and metadata on gradient overlay
   
2. **Project Details** (py-16 max-w-4xl)
   - Left column: Description, process, challenges
   - Right sidebar: Tech stack, tools, year, links
   - Uses grid-cols-1 lg:grid-cols-3 (content spans 2 cols)

3. **Image Gallery** (py-12)
   - Large, high-quality project images
   - Single column on mobile, 2-column on desktop
   - gap-8 for breathing room

4. **Navigation** (py-12)
   - Previous/Next project links with thumbnail previews

---

## Component Library

### Navigation (fixed top-0 w-full)
- Translucent backdrop-blur-md background
- Logo/name on left, nav links center, social icons right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 with px-6 horizontal padding

### Project Cards
- Aspect ratio containers (aspect-[4/3] or aspect-[3/4])
- Image with object-cover
- Overlay on hover revealing project info
- Bottom-aligned metadata: title, tags
- Rounded corners: rounded-lg or rounded-xl

### Tag Pills
- Inline-flex items-center gap-2
- Small size: px-3 py-1 text-xs
- Monospace font for tech tags
- Border treatment: border rounded-full

### Button System
**Primary CTA**: Large, bold, backdrop-blur-md when on images
- Desktop: px-8 py-4 text-lg
- Mobile: px-6 py-3 text-base

**Secondary**: Outline style with border-2
**Tertiary**: Text-only with underline decoration

### Image Containers
- Always use aspect-ratio classes for consistency
- Loading skeleton states with bg-gray-200 animate-pulse
- Object-cover for all images to maintain aspect

---

## Images Strategy

**Hero Images Required**:
1. Homepage Hero: Tech-themed featured project (coding setup, design work, or creative piece) - aspect-[16/9] or full-screen
2. Project Page Heroes: Each project's primary showcase image

**Gallery Images**:
- Project thumbnails in portfolio grids
- Process/detail images in individual project pages
- About page: Professional photo or creative self-portrait

**Image Specifications**:
- Homepage hero: 1920x1080 minimum
- Project cards: 800x600 or 600x800 (varied ratios)
- Gallery images: 1200px wide minimum

---

## Interactions & Micro-animations

**Minimal Animation Strategy**:
- Card hover: transform scale-105 transition-transform duration-300
- Image loading: Fade-in opacity animation
- Scroll reveals: Subtle fade-up for sections (use intersection observer)
- Navigation: Smooth scroll behavior

**NO animations for**:
- Button states (handled by native button component)
- Page transitions
- Excessive scroll-triggered effects

---

## Accessibility

- All images have descriptive alt text
- Keyboard navigation for all interactive elements
- Focus visible states with ring-2 ring-offset-2
- Semantic HTML throughout (header, nav, main, article, section)
- ARIA labels for icon-only buttons
- Color contrast checked for all text overlays

---

This design creates a professional, tech-forward portfolio that showcases student work with visual impact while maintaining clean usability for classmate viewers.