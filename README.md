# Reaj Uddin - Professional Portfolio

A beautifully crafted single-page portfolio for Meta Ads and performance marketing specialist Reaj Uddin. Built with Next.js 16, React, Tailwind CSS, and TypeScript.

## Design Highlights

### Visual Aesthetic
- **Craftsman/Creative Office Vibe**: Blends paper textures with modern, clean layouts
- **Color Palette**: 
  - Deep Navy (#1D3557) - Professional primary color
  - Energetic Red (#E63946) - Action accent
  - Paper (#F9F9F7) - Warm off-white background
  - Pastel Accents - Soft highlights (Blue, Mint)

### Typography
- **Headings**: Playfair Display (Serif) - Editorial, sophisticated feel
- **Body**: Inter (Sans-serif) - Modern readability

### Features
1. **Hero & Trust Section**: Immediately establishes credibility with $3,000+ ad spend proof
2. **About Section**: Research-Plan-Execute workflow with visual timeline
3. **Skills & Tools**: Card-based layout with pastel header colors
4. **Case Studies Gallery**: Horizontal scrollable showcase with detailed modal views
5. **Process Section**: 5-step workflow visualization (desktop & mobile variants)
6. **Testimonials**: Client feedback with star ratings
7. **Contact Section**: Form + contact methods with dark theme
8. **Navigation**: Sticky navbar with scroll detection

## Animations & Interactions

- **Scroll Triggers**: Fade-in animations as sections enter viewport
- **Staggered Reveals**: Cards appear with cascading timing
- **Floating Elements**: Background decorative elements with subtle motion
- **Hover Effects**: Shadow, scale, and color transitions
- **Smooth Scrolling**: Native browser scroll behavior with smooth behavior

## Project Structure

```
/components
  /sections
    hero.tsx          # Hero section with trust badge
    about.tsx         # About section with workflow
    skills.tsx        # Skills/toolkit cards
    case-studies.tsx  # Case studies gallery
    process.tsx       # 5-step process timeline
    testimonials.tsx  # Client testimonials
    contact.tsx       # Contact form & footer
  case-study-modal.tsx    # Full case study modal
  navbar.tsx              # Fixed navigation bar

/app
  layout.tsx          # Root layout with fonts
  page.tsx            # Main entry point
  globals.css         # Design tokens & animations
```

## Design System

### Color Tokens
- `--color-navy`: #1D3557 (Primary)
- `--color-red`: #E63946 (Accent)
- `--color-paper`: #F9F9F7 (Background)
- `--color-white`: #FFFFFF
- `--color-charcoal`: #2D3436
- `--color-pastel-blue`: #A8DADC
- `--color-pastel-mint`: #F1FAEE

### Spacing
- Consistent use of Tailwind scale (gap-4, gap-6, gap-8)
- Responsive padding (px-6 md:px-8)
- Flexible grid gaps for better mobile experience

### Border Radius
- Small elements: rounded-lg (0.5rem)
- Medium elements: rounded-xl (1rem)
- Custom: --radius: 0.625rem

## Responsive Design

- **Mobile First**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for medium screens (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Features**:
  - Horizontal scroll for case studies (touch-optimized)
  - Vertical timeline for process on mobile
  - Responsive grid adjustments
  - Mobile-friendly form inputs

## Case Studies

Three detailed case studies showcasing:
1. Fashion Ecommerce (ROAS optimization)
2. Online Education (Lead generation)
3. Lifestyle Brand (Brand awareness & scaling)

Each includes:
- Challenge & Context
- Research & Strategy
- Execution Details
- Results & Key Learnings
- Modal deep-dive view

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: 
  - Playfair Display (Headings)
  - Inter (Body)
- **Components**: shadcn/ui (Button, Dialog, etc.)
- **Animations**: CSS keyframes + Tailwind utilities
- **Deployment**: Vercel (recommended)

## Key Sections Content

### Hero Section
- Establishes identity and role
- Trust badge highlighting $3,000+ ad spend
- Dual CTAs for case studies and contact

### About Section
- Personal story and philosophy
- 4-step workflow visualization
- Desktop/mobile responsive layout

### Skills Section
- 3 skill clusters: Strategy, Campaign Management, Content
- Color-coded card headers
- Pastel aesthetic

### Case Studies
- Horizontal scroll gallery (mobile & desktop)
- Rich cards with key metrics
- Modal expansion for full details

### Process Section
- 5-step journey visualization
- Desktop: Grid with connecting line animation
- Mobile: Vertical timeline with progress indicator

### Testimonials
- 4 client quotes with attribution
- Star ratings
- Hover effects for interactivity

### Contact
- Dual layout: Contact info + Form
- Quick facts sidebar
- Dark theme section
- Email, WhatsApp, LinkedIn links

## Customization

### Update Content
Edit text in component files under `/components/sections/`

### Modify Colors
Update color tokens in `/app/globals.css`:
- `:root` for light theme
- `.dark` for dark theme

### Change Fonts
Edit font imports in `/app/layout.tsx` and update `@theme` section in globals.css

### Add New Sections
1. Create component in `/components/sections/`
2. Import and add to `/app/page.tsx`
3. Use existing scroll animation patterns

## Performance

- Optimized images (lazy loading)
- Smooth scrolling (hardware-accelerated)
- Efficient animations (GPU-friendly)
- Mobile-optimized touch interactions
- Minimal bundle size with Tailwind

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Proper color contrast ratios
- Keyboard navigation support
- Form labels and descriptions

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Compatible with Netlify, GitHub Pages, etc.
- Build command: `npm run build`
- Output directory: `.next`

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Multilingual support
- [ ] Blog section
- [ ] Client management dashboard
- [ ] Email notifications for form submissions
- [ ] Video case study integration
- [ ] Analytics tracking
- [ ] SEO optimizations

## License

MIT License - Free to use and modify

## Contact

For inquiries or to view the live portfolio, visit:
- Email: reaj@example.com
- WhatsApp: +880 1700-000000
- LinkedIn: linkedin.com/in/reajuddin

---

**Created with attention to detail, research-driven design, and performance in mind.**
# reaj-shawon-portfolio
