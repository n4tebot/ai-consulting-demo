# AI Consulting Demo - Project Brief

## What This Is
A Next.js template app for demoing AI chatbot integrations to local businesses (dental offices, HVAC companies, med spas, law firms, etc.) in McKinney, TX. This is for Nathan's AI consulting/agency business.

## Requirements

### Landing Pages
Build **4 distinct landing page templates**, each for a different business type. They should look like real, professional business websites — not generic templates. Use modern, clean design inspired by Google's Material Design / Stitch aesthetic (soft shadows, rounded corners, generous whitespace, smooth animations).

**Template 1: Dental Office** (e.g., "Valley Creek Dental Care")
- Hero with smile imagery, trust badges, "Book Appointment" CTA
- Services grid (cleanings, implants, whitening, etc.)
- Testimonials section
- Insurance accepted section
- Contact/location footer

**Template 2: HVAC Company** (e.g., "Harris Air Services")
- Hero with urgency ("AC broken? We're here 24/7"), strong CTA
- Services list (repair, install, maintenance)
- "Why Choose Us" trust section (licensed, insured, family-owned)
- Service area map/list
- Emergency contact banner

**Template 3: Med Spa / Wellness**
- Elegant, luxurious feel (soft colors, serif fonts mixed with sans-serif)
- Services with pricing tiers
- Before/after gallery placeholder
- Booking CTA
- Testimonials

**Template 4: Law Firm**
- Professional, authoritative feel (dark blues, clean typography)
- Practice areas grid
- Attorney profiles
- Free consultation CTA
- Case results / trust indicators

### AI Chatbot Widget
- Floating chat bubble in bottom-right corner on ALL templates
- Expands into a chat window on click
- **Mobile responsive** — full-screen takeover on mobile, slide-up panel
- **Desktop** — fixed position chat panel, ~400px wide
- **Mock AI responses** — no real model. Use a delay + canned smart responses based on keyword matching:
  - If user mentions "appointment" or "book" → respond about scheduling
  - If user mentions "price" or "cost" or "insurance" → respond about pricing/insurance
  - If user mentions "emergency" or "urgent" → respond with emergency info
  - If user mentions "hours" or "open" → respond with business hours
  - Default → friendly "How can I help?" type response
- Typing indicator animation before responses
- Chat history persists during session
- Clean, modern chat UI (think iMessage/WhatsApp style bubbles)
- Business name and avatar in chat header (changes per template)

### Navigation
- Home page (`/`) with a selector/showcase of all 4 templates
- Each template at `/dental`, `/hvac`, `/medspa`, `/law`
- Clean navigation between them

### Design Quality
- **Must look production-ready** — this is being shown to real business owners
- Tailwind CSS for styling
- Smooth animations (framer-motion or CSS transitions)
- Professional color schemes per template
- Real-looking placeholder content (not lorem ipsum — use realistic business copy)
- Mobile-first responsive design
- Fast loading, good Lighthouse scores

### Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- No external AI API calls — all mocked
- Deploy-ready for Vercel

### Deployment
- Initialize as a git repo
- Make it ready to push to GitHub and deploy on Vercel
- Include a good README

## Design Inspiration
- Google Stitch (stitch.withgoogle.com) — clean, modern, Material-inspired
- Soft shadows, subtle gradients, rounded corners
- Generous whitespace
- Smooth micro-animations
- Professional photography placeholders (use placeholder services or emoji/icons)

## File Structure
```
/app
  /page.tsx          — showcase/selector page
  /dental/page.tsx   — dental template
  /hvac/page.tsx     — HVAC template  
  /medspa/page.tsx   — med spa template
  /law/page.tsx      — law firm template
/components
  /ChatWidget.tsx    — the AI chatbot widget
  /ChatBubble.tsx    — individual message bubble
  /templates/        — shared template components (Hero, Services, Testimonials, etc.)
```
