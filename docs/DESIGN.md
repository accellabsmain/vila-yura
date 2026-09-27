# DESIGN.md

# Luxury Villa Website — Master Design Direction

> **This document is the primary design and implementation reference for the entire Villa website.**
>
> All future design decisions, UI components, pages, animations, content structure, visual hierarchy, and interactions should follow this document unless explicitly overridden.

---

# 1. Project Vision

Build a **premium luxury villa website** that combines:

- **Cinematic visual storytelling**
- **Modern architectural design**
- **Quiet luxury aesthetic**
- **Warm and natural atmosphere**
- **Editorial typography**
- **Immersive photography**
- **Smooth and intentional motion**

The website should not feel like a generic real estate template or a standard villa booking platform.

It should feel like entering a carefully curated destination.

The experience should communicate:

> **A place to escape. A space to belong.**

At the same time, the brand should naturally communicate with both **Indonesian and international audiences**.

---

# 2. Primary Visual Reference Direction

The website combines two main design directions.

## 2.1 Hero Direction

The Hero should follow the visual character of the **first reference**.

Key characteristics:

- Large cinematic villa imagery
- Oversized typography
- Editorial composition
- Typography layered over imagery
- Subtle floating information
- Modern luxury real estate atmosphere
- Immersive first impression

The Hero should feel more like a **luxury architecture editorial or magazine cover** than a conventional landing page.

---

## 2.2 Overall Website Direction

The rest of the website should follow the structure and refinement of the **second reference**.

Key characteristics:

- Clean structured layout
- Generous whitespace
- Rounded containers
- Premium property cards
- Strong grid system
- Sophisticated typography
- Editorial image composition
- Calm and elegant visual hierarchy

The result should combine:

> **Cinematic Hero × Structured Luxury Experience**

---

# 3. Brand Personality

The visual personality should feel:

```text
Timeless
Warm
Architectural
Natural
Exclusive
Calm
Sophisticated
Private
Cinematic
Quietly Luxurious
```

Avoid making the brand feel:

```text
Cheap
Generic
Overly corporate
Playful
Tech-startup-like
Overly minimal
Cold
Over-animated
```

The website should sell an **experience and atmosphere**, not just a property.

---

# 4. Language System — Indonesian & English

The website must support **Bahasa Indonesia and English** as its primary languages.

Both languages should be treated as part of the product experience from the beginning.

Do not build English first and simply add Indonesian later as an afterthought.

---

## 4.1 Language Switcher

The navigation should include a clear but minimal language selector.

Example:

```text
EN | ID
```

Or:

```text
English / Bahasa Indonesia
```

Recommended desktop placement:

```text
[ Logo ]

Home
Villas
Experiences
About
Gallery

                         EN | ID
                         [ Book Your Stay → ]
```

The language switcher should be visually subtle.

Avoid:

- Large flag icons
- Excessive dropdown styling
- Bright colors
- Large language buttons

Use the same premium visual language as the navigation.

---

## 4.2 Language Behavior

All important website content should have proper translations.

This includes:

- Navigation
- Hero
- Buttons
- Villa descriptions
- Section titles
- Forms
- Booking information
- Error messages
- Empty states
- Footer
- Metadata where applicable

Do not mix Indonesian and English randomly inside the same sentence.

The active language should remain consistent throughout the interface.

---

## 4.3 Content Tone

### English Tone

English content should feel:

```text
Elegant
Natural
Warm
Editorial
Simple
International
```

Avoid overly corporate phrases such as:

```text
We provide world-class accommodation solutions.
```

Prefer:

```text
A private escape, designed around you.
```

Or:

```text
Stay somewhere that feels entirely your own.
```

---

### Bahasa Indonesia Tone

Bahasa Indonesia should feel:

```text
Hangat
Elegan
Natural
Tidak terlalu formal
Tidak terlalu santai
Premium
Deskriptif
```

Avoid robotic translations.

Do not translate English word-for-word.

Example:

```text
English:
Your private escape begins here.

Bahasa Indonesia:
Perjalanan menuju ruang privat Anda dimulai di sini.
```

Or a more natural brand-oriented version:

```text
Temukan ruang untuk benar-benar menikmati waktu Anda.
```

Translations should preserve the **emotion and meaning**, not necessarily the exact sentence structure.

---

# 5. Suggested Bilingual Content Direction

## Hero Example

### English

```text
DISCOVER
YOUR
SANCTUARY

A private escape surrounded by
nature, architecture, and stillness.

[ Explore Our Villas → ]
```

### Bahasa Indonesia

```text
TEMUKAN
RUANG
ANDA

Sebuah ruang privat yang dikelilingi
alam, arsitektur, dan ketenangan.

[ Jelajahi Villa Kami → ]
```

---

## Navigation Example

| English | Bahasa Indonesia |
|---|---|
| Home | Beranda |
| Villas | Villa |
| Experiences | Pengalaman |
| About | Tentang Kami |
| Gallery | Galeri |
| Journal | Cerita |
| Contact | Kontak |
| Book Your Stay | Reservasi Sekarang |

The Indonesian version should remain concise.

Avoid overly long navigation labels.

---

# 6. Color System

The website must use the following color palette as the primary design foundation.

## Smoky Black

```css
--color-black: #11120D;
```

Usage:

- Dark sections
- Footer
- Dark image overlays
- Primary typography
- Navigation text
- High-contrast UI
- Premium dark surfaces

This should replace the use of generic pure black.

---

## Olive Drab

```css
--color-olive: #565449;
```

Usage:

- Secondary backgrounds
- Muted UI
- Supporting typography
- Architectural accents
- Decorative elements
- Image overlays

This color should reinforce the connection between:

> Architecture × Nature × Earth

---

## Bone

```css
--color-bone: #D8CFBC;
```

Usage:

- Primary accent
- Important CTAs
- Statistics
- Active states
- Premium highlights
- Selected UI elements

This color should feel intentional.

Do not overuse it.

---

## Floral White

```css
--color-white: #FFFBF4;
```

Usage:

- Primary website background
- Light sections
- Cards
- Light typography on dark surfaces

Avoid using pure `#FFFFFF` as the main website background.

The warm white tone is important for the overall atmosphere.

---

## Extended Color System

Derived colors may be used when necessary.

```css
--color-black-soft: #1A1B16;
--color-black-muted: #292A24;

--color-olive-light: #6A685C;
--color-olive-soft: #7A786B;

--color-bone-light: #E5DDCC;
--color-bone-dark: #BFB6A4;

--color-white-soft: #F7F2E9;
--color-white-muted: #EEE9DF;
```

All additional colors should remain within this visual ecosystem.

Avoid introducing random accent colors.

---

# 7. Typography System

The typography should combine:

- **Editorial serif typography**
- **Modern sans-serif typography**

## Heading Font Direction

Suggested fonts:

```text
Playfair Display
Cormorant Garamond
DM Serif Display
```

Use serif typography primarily for:

- Major headings
- Editorial statements
- Hero typography
- Luxury storytelling moments

---

## Body & UI Font Direction

Suggested fonts:

```text
Inter
Manrope
Geist
Plus Jakarta Sans
```

Use sans-serif typography for:

- Navigation
- Body content
- Property information
- Forms
- Buttons
- UI components

---

# 8. Typography Philosophy

Typography should create hierarchy through:

```text
Scale
Spacing
Weight
Contrast
Position
```

Do not rely only on bold text.

Large typography is encouraged.

Especially in:

- Hero
- Section introductions
- CTA sections
- Editorial statements

Example:

```text
A PLACE
TO SLOW DOWN.
```

Typography may intentionally break the grid when used in important visual moments.

However, readability should never be sacrificed.

---

# 9. Global Layout System

Use a centered layout.

```css
max-width: 1440px;
margin: 0 auto;
padding-left: 24px;
padding-right: 24px;
```

---

## Desktop

```text
Maximum canvas: 1440px
Horizontal padding: 24–48px
```

---

## Tablet

```text
Horizontal padding: 20–24px
```

---

## Mobile

```text
Horizontal padding: 16px
```

The design should never simply shrink from desktop to mobile.

Each layout should adapt intentionally.

---

# 10. Spacing System

Use generous whitespace.

Recommended major section spacing:

```css
padding-top: 120px;
padding-bottom: 120px;
```

Medium sections:

```css
padding-top: 80px;
padding-bottom: 80px;
```

Mobile spacing should be reduced appropriately.

The website should feel spacious but never empty.

---

# 11. Border Radius

Use soft architectural rounding.

```css
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-xl: 36px;
```

Recommended:

```text
Buttons → 999px
Small UI → 12px
Cards → 20px
Large cards → 28px
Hero → 32px
```

Avoid inconsistent border radius values.

---

# 12. Navigation

The navigation should be:

```text
Minimal
Elegant
Lightweight
Premium
```

Desktop structure:

```text
[ LOGO ]

Home
Villas
Experiences
About
Gallery

                        EN | ID
                        [ Book Your Stay → ]
```

When the page is at the top, navigation may visually blend with the Hero.

When scrolling:

- Navigation becomes sticky
- Background gains subtle transparency
- Blur is added
- A subtle border appears

Example:

```css
background: rgba(255, 251, 244, 0.72);
backdrop-filter: blur(16px);
border: 1px solid rgba(17, 18, 13, 0.08);
```

This transition must use **Framer Motion**.

---

# 13. Hero Section

The Hero is the primary visual statement.

It should immediately communicate:

> **This is not an ordinary villa.**

---

## 13.1 Hero Composition

Use a large cinematic villa image.

The Hero should feel immersive.

Suggested composition:

```text
┌──────────────────────────────────────────────┐
│ LOGO        NAVIGATION               EN | ID │
│                                              │
│                                              │
│ DISCOVER                                     │
│                                              │
│ YOUR               [ CINEMATIC VILLA IMAGE ] │
│                                              │
│ SANCTUARY                                    │
│                                              │
│ A private escape surrounded by nature.       │
│                                              │
│ [ Explore Villas → ]                         │
│                                              │
└──────────────────────────────────────────────┘
```

The image should remain the primary visual element.

---

## 13.2 Hero Typography

Desktop:

```css
font-size: clamp(72px, 10vw, 180px);
line-height: 0.82;
letter-spacing: -0.06em;
```

Typography should:

- Be oversized
- Feel editorial
- Partially overlap the image
- Create visual tension

Do not make the Hero look like a standard:

```text
Heading
Paragraph
Button
```

landing page structure.

---

## 13.3 Hero Image

Recommended visual direction:

- Modern villa
- Warm interior lighting
- Large glass windows
- Natural materials
- Tropical or natural landscape
- Cinematic dusk or soft daylight
- Architectural composition

Use a subtle gradient overlay.

```css
background:
linear-gradient(
  90deg,
  rgba(17, 18, 13, 0.65) 0%,
  rgba(17, 18, 13, 0.28) 45%,
  rgba(17, 18, 13, 0.05) 100%
);
```

Do not make the image excessively dark.

---

# 14. Framer Motion — Mandatory Requirement

**Framer Motion is required throughout the website.**

Primary animation and interaction logic must use Framer Motion.

Use Framer Motion for:

- Hero entrance
- Navigation transitions
- Scroll reveals
- Staggered elements
- Property card interactions
- Image reveal
- CTA interactions
- Gallery transitions
- Testimonial transitions
- Parallax effects
- Language-aware content transitions where appropriate

The motion should feel:

```text
Smooth
Slow
Intentional
Elegant
Cinematic
Premium
```

Never:

```text
Bouncy
Cartoonish
Aggressive
Overly fast
Random
Distracting
```

---

# 15. Hero Animation Sequence

Recommended sequence:

### Step 01 — Background

```text
Opacity: 0 → 1
Scale: 1.08 → 1
```

### Step 02 — Navigation

```text
Opacity: 0 → 1
Y: -20 → 0
```

### Step 03 — Main Typography

```text
Opacity: 0 → 1
Y: 80 → 0
```

Use staggered line animation.

Example:

```text
DISCOVER
↓
YOUR
↓
SANCTUARY
```

### Step 04 — Supporting Content

```text
Opacity: 0 → 1
Y: 30 → 0
```

### Step 05 — CTA

```text
Opacity: 0 → 1
Y: 20 → 0
```

### Step 06 — Floating Information

Animate into place subtly.

```text
Opacity: 0 → 1
Y: 20 → 0
```

Recommended easing:

```text
[0.22, 1, 0.36, 1]
```

---

# 16. Reusable Motion Architecture

Do not create random animation logic repeatedly.

Create reusable motion components and variants.

Suggested structure:

```text
components/
  motion/
    Reveal.tsx
    StaggerContainer.tsx
    ImageReveal.tsx
    MagneticButton.tsx
    ParallaxImage.tsx

lib/
  motion.ts
```

Recommended variants:

```text
fadeIn
fadeUp
fadeDown
imageReveal
scaleReveal
textReveal
staggerContainer
staggerItem
```

All motion should follow the same timing and easing philosophy.

---

# 17. Scroll Animation

Use:

```text
whileInView
viewport={{ once: true }}
useScroll
useTransform
```

Recommended section reveal:

```text
Opacity: 0 → 1
Y: 40 → 0
```

Cards should reveal sequentially.

Example:

```text
Card 01 → 0ms
Card 02 → 100ms
Card 03 → 200ms
Card 04 → 300ms
```

Do not animate every individual element.

Motion should reinforce hierarchy.

---

# 18. Introduction Section

After the Hero, introduce the brand with generous whitespace.

Example English:

```text
OUR STORY

A DIFFERENT WAY
TO EXPERIENCE
LUXURY.
```

Supporting copy:

```text
We believe a villa should be more than a place to stay.
It should become part of the memories you take home.
```

Bahasa Indonesia:

```text
CERITA KAMI

CARA BERBEDA
UNTUK MENIKMATI
SEBUAH PENGALAMAN.
```

Supporting copy:

```text
Bagi kami, sebuah villa bukan sekadar tempat untuk menginap.
Ia adalah bagian dari waktu, cerita, dan kenangan yang Anda bawa pulang.
```

Use the same layout and hierarchy in both languages, while allowing text dimensions to adapt naturally.

---

# 19. Experiences Section

Create a premium experience grid inspired by the second reference.

Example:

```text
01
Private Villa

A space designed entirely around your time.

02
Nature

Reconnect with the landscape around you.

03
Wellness

Slow down and return to yourself.

04
Curated Experiences

Discover experiences made for your stay.
```

Indonesian:

```text
01
Villa Privat

Ruang yang dirancang untuk menikmati waktu Anda.

02
Menyatu dengan Alam

Terhubung kembali dengan lingkungan di sekitar Anda.

03
Wellness

Berhenti sejenak dan nikmati waktu untuk diri sendiri.

04
Pengalaman Pilihan

Nikmati pengalaman yang dirancang untuk melengkapi perjalanan Anda.
```

Each card contains:

- Number
- Image
- Title
- Short description

Use Framer Motion for subtle hover effects.

---

# 20. Featured Villas

This should be a major visual section.

Use an asymmetric editorial grid.

Example:

```text
┌───────────────┬────────────────────────────┐
│               │                            │
│ Villa A       │         Villa B            │
│               │                            │
├───────────────┼──────────────┬─────────────┤
│ Villa C       │ Villa D      │ Villa E     │
└───────────────┴──────────────┴─────────────┘
```

Each villa card may include:

```text
Villa Name

Location

2–4 Guests
Private Pool
From $XXX / Night
```

Indonesian version:

```text
Nama Villa

Lokasi

2–4 Tamu
Kolam Renang Privat
Mulai dari RpX / Malam
```

Do not overcrowd cards.

Photography comes first.

---

# 21. Property Card Interaction

Framer Motion interaction:

```text
Image
Scale: 1 → 1.05

Overlay
Opacity: 0.10 → 0.35

Text
Y: 10 → 0
```

The movement should be subtle.

Cards should feel alive, not animated excessively.

---

# 22. Statistics Section

Use a dark visual break.

```css
background: #11120D;
color: #FFFBF4;
```

Example:

### English

```text
25+
PRIVATE VILLAS

12
EXCLUSIVE LOCATIONS

4.9/5
GUEST RATING

98%
GUEST SATISFACTION
```

### Bahasa Indonesia

```text
25+
VILLA PRIVAT

12
LOKASI EKSKLUSIF

4.9/5
PENILAIAN TAMU

98%
KEPUASAN TAMU
```

Numbers should animate into view using Framer Motion.

Avoid bouncing effects.

---

# 23. Cinematic Image Statement

Create a full-width immersive image section.

Example:

### English

```text
YOUR PRIVATE
ESCAPE.

Somewhere between
nature and architecture.
```

### Bahasa Indonesia

```text
RUANG PRIVAT
UNTUK ANDA.

Di antara alam,
arsitektur, dan ketenangan.
```

Use subtle scroll-based parallax.

Do not make the movement dramatic.

---

# 24. Gallery

The Gallery should feel editorial.

Avoid a simple equal-sized image grid.

Use:

- Different image sizes
- Intentional composition
- Architectural details
- Interior moments
- Exterior atmosphere
- Natural surroundings

The Gallery should tell a visual story.

Suggested sequence:

```text
Architecture
↓
Interior
↓
Detail
↓
Landscape
↓
Experience
```

Use Framer Motion for image reveal and transitions.

---

# 25. Testimonials

Avoid generic testimonial cards.

Use a more editorial presentation.

Example:

### English

```text
“Every detail felt intentional.
It didn't feel like staying somewhere.

It felt like having our own world.”

— Guest Name
Australia
```

### Bahasa Indonesia

```text
“Setiap detail terasa dipikirkan dengan baik.
Rasanya bukan seperti sekadar menginap.

Kami seperti memiliki dunia kami sendiri.”

— Nama Tamu
Indonesia
```

Use `AnimatePresence` if testimonials are interactive.

Transitions should use:

```text
Opacity
Y
X
```

Keep transitions elegant.

---

# 26. Final CTA

The final CTA should feel bold and memorable.

Dark background:

```css
background: #11120D;
```

English:

```text
YOUR NEXT
ESCAPE
AWAITS.

Discover a private stay
designed around unforgettable moments.

[ Explore Our Villas → ]
```

Bahasa Indonesia:

```text
WAKTUNYA
UNTUK
MENJAUH SEJENAK.

Temukan ruang privat untuk
menciptakan pengalaman yang tak terlupakan.

[ Jelajahi Villa Kami → ]
```

Primary CTA:

```css
background: #D8CFBC;
color: #11120D;
```

---

# 27. Button System

## Primary Button

```css
background: #D8CFBC;
color: #11120D;

border-radius: 999px;
padding: 14px 24px;
```

Examples:

```text
Explore Our Villas →
Jelajahi Villa Kami →
```

Hover:

```text
Scale: 1 → 1.02
Arrow: X 0 → 4
```

Use Framer Motion.

---

## Secondary Button

```css
background: transparent;
border: 1px solid rgba(17, 18, 13, 0.2);
```

Examples:

```text
Learn More →
Selengkapnya →
```

Buttons should remain elegant and not overly large.

---

# 28. Image Direction

All imagery should follow this visual language:

```text
Luxury
Architectural
Natural
Warm
Cinematic
Editorial
Timeless
```

Preferred subjects:

- Modern villas
- Natural landscapes
- Tropical vegetation
- Stone
- Wood
- Concrete
- Glass architecture
- Warm lighting
- Private pools
- Mountain or forest surroundings
- Ocean views where relevant
- Sunset and dusk atmosphere

Avoid:

```text
Cheap stock photography
Over-saturated images
Artificial HDR
Overly bright corporate imagery
Generic Airbnb photography
```

---

# 29. Mobile Experience

Mobile must be intentionally designed.

Do not simply compress the desktop layout.

Hero on mobile:

```text
Cinematic Image

↓

Large Heading

↓

Supporting Text

↓

CTA
```

Large typography may be reduced or repositioned for readability.

Property sections should become:

```text
Single-column layout
```

or:

```text
Horizontal swipe experience
```

depending on the content.

Hover-only interactions must have mobile alternatives.

---

# 30. Accessibility

The website must support:

- Good color contrast
- Semantic HTML
- Keyboard navigation
- Focus states
- Accessible buttons
- Proper alt text
- Responsive typography
- `prefers-reduced-motion`

When reduced motion is enabled:

- Disable unnecessary parallax
- Reduce large movement
- Keep important state transitions clear

---

# 31. Technical Motion Requirements

Animations should prioritize:

```text
transform
opacity
```

Avoid unnecessary animation of:

```text
width
height
top
left
```

unless there is a strong reason.

Requirements:

- Optimized images
- Lazy loading below the fold
- Lightweight scroll effects
- Reusable motion variants
- Smooth mobile performance

---

# 32. Recommended Page Structure

The primary homepage structure:

```text
01. Navigation

02. Hero
    Discover Your Sanctuary
    / Temukan Ruang Anda

03. Introduction
    A Different Way to Experience Luxury
    / Cara Berbeda untuk Menikmati Sebuah Pengalaman

04. Experiences
    Private Villa
    Nature
    Wellness
    Curated Experiences

05. Featured Villas
    / Pilihan Villa

06. Statistics

07. Cinematic Visual Statement

08. Gallery

09. Testimonials

10. Final CTA

11. Footer
```

---

# 33. Footer

Footer should remain minimal.

Example:

```text
LOGO

Discover
Villas
Experiences
About
Journal

Instagram
Contact

© 2026 Brand Name.
All rights reserved.
```

Indonesian navigation should adapt accordingly.

Background:

```css
#11120D
```

Primary text:

```css
#FFFBF4
```

Muted text:

```css
rgba(255, 251, 244, 0.55)
```

---

# 34. Visual Priority System

Always prioritize:

```text
1. Photography
2. Typography
3. Space
4. Motion
5. Interface
```

The UI should support the experience.

It should never overpower the architecture, imagery, or storytelling.

---

# 35. Core Design Rules

The AI Agent should follow these rules consistently.

## Always

- Use the defined color palette
- Support Indonesian and English
- Use Framer Motion for meaningful motion
- Maintain generous spacing
- Prioritize photography
- Use editorial typography
- Keep interactions subtle
- Build responsive layouts intentionally
- Maintain visual consistency
- Reuse animation variants
- Preserve accessibility

## Never

- Use generic real estate templates
- Use excessive shadows
- Overuse borders
- Add random colors
- Over-animate components
- Use bouncy motion
- Use excessive glassmorphism
- Make every section look like a card
- Translate content word-for-word without considering tone
- Let UI elements overpower imagery
- Build desktop and simply shrink it for mobile

---

# 36. Final Creative Direction

The website should guide visitors through an emotional journey:

```text
DISCOVER
↓

IMAGINE
↓

FEEL
↓

EXPLORE
↓

ESCAPE
↓

BOOK
```

In Bahasa Indonesia:

```text
TEMUKAN
↓

BAYANGKAN
↓

RASAKAN
↓

JELAJAHI
↓

MENJAUH SEJENAK
↓

MULAI PERJALANAN
```

The website should make visitors feel something before asking them to make a booking.

---

# 37. Final Implementation Statement

> **Build a cinematic and bilingual luxury villa experience where architecture, nature, and stillness come together.**

The Hero must deliver immediate visual impact through:

- Cinematic imagery
- Oversized editorial typography
- Layered composition
- Subtle information
- Premium Framer Motion animation

The rest of the website should progressively reveal:

- The brand story
- The villa experience
- The architecture
- The destinations
- The atmosphere
- The reasons to stay

The final result must feel:

```text
Timeless
Warm
Architectural
Cinematic
Natural
Exclusive
Editorial
Premium
```

**This DESIGN.md is the master reference for the project. All future pages, components, animations, content decisions, and visual updates should remain consistent with this direction unless explicitly overridden.**