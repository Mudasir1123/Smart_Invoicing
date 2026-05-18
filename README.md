# Smart Invoicing - Premium SaaS Website

A modern, high-end SaaS landing page built with Next.js 16, React 19, Framer Motion, and GSAP. This project demonstrates premium design patterns including glassmorphism, cinematic scroll storytelling, and micro-interactions.

## Project Overview

Smart Invoicing is a fully functional premium SaaS website that showcases:
- **Loader/Splash Screen**: Animated fullscreen loader with brand logo
- **Hero Section**: Text reveals, particle animations, and call-to-action buttons
- **Features Section**: 6 animated cards with scroll-triggered reveals
- **Pricing Section**: 3-tier pricing cards with highlighted professional plan
- **Why Choose Section**: Animated reasons list with stats
- **CTA Section**: High-impact call-to-action with gradient background
- **About Page**: Company story, values, team members, and statistics
- **Contact Page**: Contact form with micro-interactions and validation
- **Page Transitions**: Smooth animations between routes using Framer Motion

## Technical Stack

### Core Framework
- **Next.js 16** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling

### Animation Libraries
- **Framer Motion** - Component animations and transitions
- **GSAP 3** - Advanced scroll-triggered animations with ScrollTrigger
- **Lenis** - Smooth scroll with GSAP integration

### 3D Graphics (Optional)
- **Three.js** & **@react-three/fiber** - For optional 3D effects
- **@react-three/drei** - 3D utilities

### UI Components
- **Lucide React** - Icon library
- **shadcn/ui** - Pre-built component library

## Project Structure

```
/components
  /providers
    - LenisProvider.tsx (Smooth scroll setup)
    - PageTransition.tsx (Page route animations)
  /sections
    - HeroSection.tsx (Hero with particles & text reveals)
    - FeaturesSection.tsx (6 feature cards)
    - PricingSection.tsx (Pricing plans)
    - WhyChooseSection.tsx (Reasons & stats)
    - CtaSection.tsx (Final CTA)
  - Loader.tsx (Splash screen)
  - Navbar.tsx (Navigation with animations)
  - Footer.tsx (Footer with links)
  - AnimatedButton.tsx (Button with hover effects)
  - AnimatedCard.tsx (Card with tilt & lift)
  - TextReveal.tsx (Word-by-word text animation)

/app
  - page.tsx (Home page)
  - layout.tsx (Root layout with providers)
  /about
    - page.tsx (About page)
  /contact
    - page.tsx (Contact page)

/hooks
  - useReducedMotion.ts (Accessibility - prefers-reduced-motion)

/lib
  - performance.ts (Performance monitoring utilities)
  - theme.ts (Design tokens & colors)

/styles
  - globals.css (Global styles & animations)
```

## Design System

### Color Palette
- **Primary**: #1E9AD8 (Teal/Cyan)
- **Success**: #00A266 (Green)
- **Navy**: #173B64 (Dark Navy)
- **White**: #FFFFFF

### Design Elements
- **Glassmorphism**: `backdrop-blur-md` + `bg-white/5` + `border-white/10`
- **Soft Shadows**: `box-shadow: 0 10px 40px rgba(0,0,0,0.3)`
- **Rounded Corners**: `rounded-2xl` everywhere
- **Spacing**: `py-24 px-6 lg:px-16`

### Animations
- **Text Reveals**: Word-by-word fade-in with stagger
- **Card Entries**: From left/right/bottom with 3deg rotation
- **Scroll Triggers**: GSAP ScrollTrigger for cinematic reveals
- **Micro-interactions**: Button scale on hover, card tilt, glow effects
- **Page Transitions**: 0.6s opacity + translateY with ease-in-out

## Key Features

### 1. Loader Component
- Fullscreen animated splash screen
- Animated logo with spring animation
- Progress bar animation
- 2-second duration with skip on click

### 2. Smooth Scroll
- Lenis integration for smooth scrolling
- GSAP ScrollTrigger sync for scroll-triggered animations
- Mobile-optimized scroll behavior

### 3. Scroll-Based Animations
- Hero section pinning with scroll
- Sequential card animations with staggered delays
- Parallax effects and depth animations
- Accessibility support with `prefers-reduced-motion`

### 4. Micro-Interactions
- Button hover: scale 1.05 + glow effect
- Card hover: rotateX/Y ±5deg + lift effect
- Form input focus: #00A266 glow with smooth transition
- Link underline slide animations

### 5. Performance Optimizations
- GPU acceleration via `transform` & `translate3d`
- Image lazy loading with `next/image`
- Optimized package imports for Lucide
- Disabled source maps in production
- Compression enabled in Next.js config

### 6. Accessibility
- Respects `prefers-reduced-motion` media query
- Keyboard navigation support
- Proper ARIA labels on interactive elements
- Focus states visible
- Color contrast >= 4.5:1 (WCAG AA)

## Installation & Setup

### 1. Clone and Install
```bash
git clone <repository>
cd smart-invoicing
pnpm install
```

### 2. Install Additional Dependencies
All dependencies are already included. If needed:
```bash
pnpm add framer-motion gsap lenis @react-three/fiber @react-three/drei three
```

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
pnpm build
pnpm start
```

## Customization

### Change Brand Colors
Edit `/lib/theme.ts` and update CSS variables in `app/globals.css`:
```css
--primary: #1E9AD8;
--success: #00A266;
--navy: #173B64;
```

### Modify Animation Timings
All animations are in `tailwind.config.ts` under `animation` and `keyframes`. Adjust duration values (e.g., `0.6s` → `0.3s` for faster animations).

### Update Content
- **Home**: Edit `/components/sections/*Section.tsx`
- **About**: Edit `/app/about/page.tsx`
- **Contact**: Edit `/app/contact/page.tsx`

### Disable Smooth Scroll
Remove or modify `LenisProvider` in `app/layout.tsx` if you prefer native scrolling.

## Performance Targets

- **Lighthouse**: >90 on desktop, >85 on mobile
- **FCP (First Contentful Paint)**: <1.5s
- **LCP (Largest Contentful Paint)**: <2.5s
- **Frame Rate**: 60 FPS minimum on all interactions
- **CLS (Cumulative Layout Shift)**: <0.1

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS 14+, Android 12+

## Deployment

### Deploy to Vercel
```bash
pnpm build
vercel deploy
```

### Deploy to Other Platforms
The Next.js build is compatible with any Node.js hosting:
```bash
pnpm build
NODE_ENV=production pnpm start
```

## Best Practices Used

1. **Component Composition**: Reusable, isolated components
2. **Performance**: GPU acceleration, lazy loading, code splitting
3. **Accessibility**: WCAG AA compliance, keyboard navigation
4. **Design System**: CSS variables for theme management
5. **TypeScript**: Full type safety throughout
6. **Responsive Design**: Mobile-first approach
7. **SEO**: Meta tags, semantic HTML, accessibility

## Resources & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Documentation](https://gsap.com/docs/v3)
- [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is licensed under the MIT License. Feel free to use it as a template for your own SaaS landing pages.

---

**Built with care for premium SaaS experiences.** Start Smart. Invoice Smart. Grow Smart.
