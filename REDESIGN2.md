# REDESIGN v2 — Unique Layouts Per Template

The current templates all share the same layout pattern (hero → sections → footer). That's the problem. Each template needs a COMPLETELY DIFFERENT page structure and flow.

## CRITICAL: Each page must have a fundamentally different layout structure. Not just different colors — different ARCHITECTURE.

## NO framer-motion. CSS animations only (@keyframes + Tailwind).
## npm run build MUST pass with zero errors.

---

## Template 1: DENTAL — "Valley Creek Dental Care" (/dental)
**Inspiration:** aspendental.com, gentledental.com — warm, approachable, service-focused

**Layout Structure (UNIQUE — split hero, horizontal flow):**
1. **Sticky nav** — logo left, phone + "Book Now" button right, clean white bar
2. **Split hero** — LEFT: headline + subtitle + CTA button. RIGHT: Large decorative tooth/smile emoji or abstract shape with the brand color. Background: soft gradient.
3. **Horizontal scrolling service cards** — a row of cards that shows services (General, Cosmetic, Implants, Whitening, Emergency, Pediatric) — each card has an emoji icon, service name, one-liner, and "Learn More" text
4. **Full-width banner** — "New Patient Special: $79 Exam & X-Rays" — teal background, white text, CTA
5. **Two-column "Why Choose Us"** — Left: numbered list of reasons (1. Same-Day Appointments, 2. Gentle & Caring Team, 3. Modern Technology, 4. Insurance Accepted). Right: placeholder image area with rounded corners
6. **Testimonial carousel** — single quote displayed at a time, large quotation marks, patient name, 5 stars. Auto-rotates (CSS animation or simple state toggle)
7. **Insurance section** — "We Accept Most Insurance" with a grid of insurance company names
8. **Contact footer** — 3 columns: Location/Map, Hours, Contact info
- **Colors:** Teal (#0D9488) + warm white (#FAFAF9) + slate text
- **Typography:** Rounded, friendly sans-serif

---

## Template 2: HVAC — "Harris Air Services" (/hvac)
**Inspiration:** morrisjenkins.com, onehourheatandair.com — urgent, trustworthy, phone-forward

**Layout Structure (UNIQUE — top-heavy urgency, vertical stacking):**
1. **Emergency bar** (full width, orange background) — "🔥 AC Emergency? Call (469) 325-1034 — 24/7 Service"
2. **Nav bar** — logo left, nav links center, phone number right
3. **Full-width hero** — dark navy background, large bold white text: "McKinney's Most Trusted HVAC Company", subtitle: "Family-Owned Since 2008", TWO CTAs side by side: "Schedule Service" (orange) + "Call Now" (white outline)
4. **Trust strip** — horizontal bar with 4 items in a row: "Licensed & Insured" | "15+ Years" | "5-Star Rated" | "Family-Owned" — icons + text, light gray background
5. **Services — alternating left-right layout** — NOT a grid. Each service (AC Repair, Heating, Installation, Maintenance) gets its own row. Odd rows: icon/image left, text right. Even rows: text left, icon/image right. This creates visual rhythm.
6. **Big stats section** — dark background, 3 large numbers: "2,500+ Homes Served" | "4.9★ Google Rating" | "Same-Day Service"
7. **Testimonials** — 3 cards in a row, each with star rating, quote, name
8. **Service area** — "Serving McKinney & Surrounding Areas" with list: McKinney, Allen, Plano, Frisco, Prosper, Anna, Melissa
9. **Emergency CTA** — full-width dark section: "Don't Sweat It. Call Harris Air." + phone number + button
10. **Footer** — license info, hours, contact
- **Colors:** Navy (#1E3A5F) + Orange (#F97316) + white
- **Typography:** Bold, heavy sans-serif headings, clean body

---

## Template 3: MED SPA — "Serenity Med Spa" (/medspa)
**Inspiration:** luxury spa sites — lots of whitespace, editorial feel, almost magazine-like

**Layout Structure (UNIQUE — editorial/magazine style, centered flow):**
1. **Minimal nav** — centered logo, hamburger-style nav links on both sides (but visible, not hidden). Ultra-clean.
2. **Full-screen hero** — off-white/cream background, centered text only (no image): large elegant serif headline "Where Science Meets Beauty", thin line separator, subtitle, "Book Your Consultation" link (not button — underlined text link for elegance)
3. **Featured treatments** — 3 columns, each with: treatment name in serif, starting price below, thin bottom border. Example: "Botox" / "From $12/unit" | "Dermal Fillers" / "From $650" | "Chemical Peels" / "From $150"
4. **Philosophy section** — full-width, centered paragraph in large serif italic text: "At Serenity, we believe beauty is not about changing who you are..." Very editorial.
5. **Treatment menu** — LEFT-aligned, organized by category with thin horizontal rules between items:
   ```
   INJECTABLES
   ─────────────────────
   Botox                    from $12/unit
   Dermal Fillers           from $650
   Kybella                  from $1,200
   
   SKIN REJUVENATION  
   ─────────────────────
   Chemical Peels           from $150
   Microneedling            from $300
   Laser Resurfacing        from $500
   ```
6. **Full-width quote** — single client testimonial in large italic serif, centered, with thin lines above and below
7. **Meet the Provider** — centered photo placeholder (circle) + name + credentials + short bio
8. **Contact** — centered: address, phone, email, hours. Very minimal.
- **Colors:** Cream (#FAF7F2) + Charcoal (#2D2D2D) + Rose/Blush accent (#C9A87C or warm gold)
- **Typography:** Serif headings (use Georgia), light-weight sans-serif body. Lots of letter-spacing on section headers.

---

## Template 4: LAW FIRM — "Stone & Associates" (/law)
**Inspiration:** morganandmorgan.com — bold, confident, results-driven

**Layout Structure (UNIQUE — bold hero, step-based flow, heavy on credibility):**
1. **Dark nav bar** — navy background, white logo text, nav links, "Free Consultation" button (gold)
2. **Full-viewport hero** — dark navy with subtle texture/gradient, LEFT-aligned large text: "Fighting for What's Right." Below: "McKinney's premier litigation firm." Gold CTA: "Get Your Free Case Review"
3. **How It Works — 3-step horizontal flow** (like Morgan & Morgan):
   - Step 1: "Contact Us" → Step 2: "We Investigate" → Step 3: "We Fight for You"
   - Connected by lines/arrows, each with a number badge
4. **Results bar** — full-width gold/amber background, dark text: "$50M+ Recovered • 500+ Cases Won • 98% Success Rate"
5. **Practice areas** — 2x3 grid but with LARGE text and minimal icons. Each area is just a bordered box with the practice area name in large font: "Personal Injury" | "Family Law" | "Business Litigation" | "Criminal Defense" | "Estate Planning" | "Real Estate"
6. **Lead attorney section** — full-width, two columns. LEFT: large name + credentials + long bio paragraph. RIGHT: placeholder silhouette/initials. Authoritative layout.
7. **Testimonials** — dark background, large quote in white serif italic, client initials + case type below
8. **CTA section** — "Every Case Matters. Yours Included." + intake form placeholder (name, phone, case type dropdown, message, submit button)
9. **Footer** — professional, navy, columns: Practice Areas links, Contact Info, Office Hours, Disclaimer text
- **Colors:** Deep Navy (#0F172A) + Gold/Amber (#D4A853) + White
- **Typography:** Strong serif headings, clean sans-serif body

---

## Homepage (/)
Keep it simple — a clean showcase that links to each template. Maybe just a centered heading + 4 cards with each template's color.

## Chat Widget
- Keep existing ChatWidget.tsx but update accent colors to match each template
- Pass a `themeColor` prop from each page

## After completing:
1. Run `npm run build` — must pass with ZERO errors
2. Run: `cd /tmp/ai-consulting-demo && git add -A && git commit -m "v2: unique layouts per template — dental/hvac/medspa/law" && git push origin main`
