# Sell it, sell it, sell it - Member Marketplace React App

A modern, high-performance React application converted from the static member marketplace demo, aligned with the architectural conventions of the `buy` application.

## Tech Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS with custom theme extensions (`midnight-navy`, `brand-accent`, `charcoal`, `Outfit` & `Inter` typography)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Animations**: CSS transitions, keyframes (`animate-float`), and IntersectionObserver scroll reveal

## Getting Started

### Development
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:5175`.

### Production Build
```bash
npm run build
```
Generates optimized production bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```

## Component Architecture
- `src/components/layout/Navbar.jsx`: Sticky responsive navbar with blur transition and mobile drawer
- `src/components/layout/Footer.jsx`: 4-column footer with social links
- `src/components/home/HeroSplit.jsx`: Split hero with CTA buttons and staggered floating product showcase
- `src/components/home/ValueStrip.jsx`: 4 value proposition badges
- `src/components/home/WhyMarketplace.jsx`: 3 pillar cards (Save, Discover, Recirculate)
- `src/components/home/InteractiveMarketplace.jsx`: Live product catalog with category filter tabs and heart wishlist toggles
- `src/components/home/EditorialProductWall.jsx`: Dark editorial collage with staggered gallery cards
- `src/components/home/MembershipPricing.jsx`: $19/month membership conversion section
- `src/components/home/MembershipBenefits.jsx`: Expandable member privilege rows
- `src/components/home/AccountExperience.jsx`: Interactive dashboard mockup with live activity cards
- `src/components/home/CategoryDiscovery.jsx`: Horizontal snap carousel with left/right scroll controls
- `src/components/home/BuyerJourney.jsx`: 4-step buyer journey with dashed flow connectors
- `src/components/home/TrustGrid.jsx`: 6 trust & clarity cards
- `src/components/home/FAQSection.jsx`: Interactive accordion
- `src/components/home/ConversionCTA.jsx`: High-contrast closing CTA section
- `src/components/home/MobileStickyCTA.jsx`: Mobile sticky membership bar
- `src/components/common/AuthModal.jsx`: Login & Join Now modal dialog
