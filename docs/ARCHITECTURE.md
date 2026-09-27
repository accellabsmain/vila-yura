# ARCHITECTURE.md — Technical Architecture Reference

> **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion
> **Status:** Foundational document — locked before any main UI is built
> **Depends on:** `DESIGN.md`
> **Feeds into:** `SEO.md`, `RESPONSIVE.md`, `I18N.md`, `COMPONENTS.md`, `CONTENT.md`, `PERFORMANCE.md`, `IMPLEMENTATION.md`

---

## 1. Purpose

Dokumen ini adalah single source of truth untuk struktur teknis project. Tujuannya:

- Mencegah AI Agent membuat file/komponen ad-hoc (`HeroNew.tsx`, `HeroFinal2.tsx`, dst)
- Mengunci pola Server vs Client Component sebelum development dimulai
- Menentukan folder structure yang scalable untuk multi-page, multi-locale, image-heavy site
- Menjadi kontrak antara `DESIGN.md` (visual) dan `SEO.md` / `RESPONSIVE.md` (behavior)

Semua dokumen turunan (`SEO.md`, `RESPONSIVE.md`, dst) **wajib mengikuti struktur di sini**, bukan sebaliknya.

---

## 2. Folder Structure

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── villas/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── experiences/
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   │
│   │   ├── journal/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
│
├── components/
│   ├── ui/          # Button, Container, Badge, LanguageSwitcher, dll — atomic, stateless
│   ├── layout/       # Navbar, MobileMenu, Footer, PageTransition
│   ├── sections/      # Hero, Introduction, FeaturedVillas, Statistics, FinalCTA
│   ├── villa/         # VillaCard, VillaGrid, VillaHero, VillaAmenities, VillaGallery
│   ├── motion/        # Reveal, StaggerContainer, TextReveal, ImageReveal, ParallaxImage
│   └── seo/           # JsonLd, MetaTags helpers (jika perlu component-level SEO)
│
├── lib/
│   ├── utils.ts        # helper generik (cn, formatCurrency, dll)
│   ├── metadata.ts       # generator dynamic metadata per page
│   ├── motion/
│   │   ├── variants.ts    # fadeUp, fadeIn, textReveal, imageReveal
│   │   ├── transitions.ts   # easing & duration standar
│   │   └── config.ts
│   └── constants.ts
│
├── data/
│   ├── villas/
│   │   ├── hilltop-villa.ts
│   │   ├── ocean-view-villa.ts
│   │   └── forest-retreat.ts
│   ├── experiences.ts
│   ├── testimonials.ts
│   └── navigation.ts
│
├── messages/
│   ├── en.json
│   └── id.json
│
├── types/
│   ├── villa.ts
│   └── common.ts
│
└── public/
    ├── images/
    ├── icons/
    └── fonts/
```

**Rule:** file baru harus masuk salah satu kategori di atas. Tidak ada file lepas di root `components/` atau `app/`.

---

## 3. Routing & i18n Architecture

URL structure: **fully localized, prefix-based**.

```text
/en/villas/hilltop-villa
/id/villa/hilltop-villa
```

Alasan (lihat detail lengkap di `I18N.md`):
- Eksplisit untuk search engine → mendukung `hreflang`
- Scalable untuk locale tambahan di masa depan
- Tidak ambigu dibanding default-locale-tanpa-prefix

Setiap route di bawah `app/[locale]/` wajib punya entry `messages/en.json` dan `messages/id.json` yang matching key.

---

## 4. Server vs Client Component Policy

> **Default: Server Component.** Client Component hanya jika butuh interactivity, Framer Motion, `useState`/`useEffect`, atau browser API.

| Kategori | Server | Client |
|---|---|---|
| `page.tsx`, `layout.tsx` | ✅ | — |
| Data fetching / static content | ✅ | — |
| `components/motion/*` | — | ✅ (`"use client"`) |
| `Navbar`/`MobileMenu` (state toggle) | — | ✅ |
| `LanguageSwitcher` | — | ✅ |
| `VillaCard`, `VillaGrid` (display only) | ✅ | — |
| Form/booking interaction | — | ✅ |

**Anti-pattern yang harus dicegah:** `"use client"` di top-level page atau di komponen yang murni menampilkan data statis.

---

## 5. Data Layer

Konten **tidak boleh hardcode** di dalam component. Semua entity (villa, experience, testimonial) didefinisikan di `data/` dengan struktur bilingual:

```ts
// data/villas/hilltop-villa.ts
export const hilltopVilla: Villa = {
  id: "hilltop-villa",
  slug: { en: "hilltop-villa", id: "villa-bukit" },
  name: "Hilltop Villa",
  location: { en: "Bali, Indonesia", id: "Bali, Indonesia" },
  title: { en: "...", id: "..." },
  description: { en: "...", id: "..." },
  guests: 4,
  bedrooms: 2,
  bathrooms: 2,
  amenities: [],
  images: [],
};
```

Type contract didefinisikan di `types/villa.ts` dan wajib di-reuse di seluruh `data/villas/*`.

---

## 6. Motion Architecture

Satu motion system global — bukan animation logic per-komponen.

```text
lib/motion/
├── variants.ts     → fadeUp, fadeIn, textReveal, imageReveal, staggerContainer, staggerItem
├── transitions.ts  → easing & duration standar
└── config.ts
```

Standar reveal:

```text
Y: 40 → 0
Duration: 0.8s
Easing: [0.22, 1, 0.36, 1]
```

Semua komponen di `components/motion/*` meng-import dari `lib/motion/variants.ts` — tidak ada inline variant per komponen.

---

## 7. Image & Performance Baseline

Karena site image-heavy (villa), berikut baseline wajib (detail lengkap di `PERFORMANCE.md`):

```text
✓ next/image untuk semua gambar
✓ WebP / AVIF
✓ priority hanya untuk Hero image
✓ lazy loading untuk sisanya
✓ font optimization (next/font)
✓ dynamic import untuk komponen berat (mis. gallery lightbox)
```

---

## 8. SEO Hooks (di-detail-kan di `SEO.md`)

Arsitektur ini menyediakan hook untuk:

- `app/sitemap.ts` — auto-generate dari `data/villas/*`
- `app/robots.ts`
- `lib/metadata.ts` — generator dynamic metadata per locale & per slug
- `components/seo/JsonLd.tsx` — structured data (`LodgingBusiness`, `BreadcrumbList`, `FAQPage`)

---

## 9. Sitemap Halaman (Reference)

```text
HOME
├── Villas
│   ├── Villa Detail
│   └── Availability / Booking
├── Experiences
├── About
├── Gallery
├── Journal
│   └── Article
└── Contact
```

---

## 10. Roadmap Dokumen Berikutnya

```text
ARCHITECTURE.md  ← dokumen ini
        ↓
SEO.md            (metadata, structured data, sitemap detail)
        ↓
RESPONSIVE.md       (behavior per breakpoint per komponen)
        ↓
I18N.md             (slug mapping EN/ID, translation flow)
        ↓
COMPONENTS.md         (props contract tiap komponen)
        ↓
CONTENT.md            (skema penuh data/*, copywriting guideline)
        ↓
PERFORMANCE.md         (image, font, bundle budget)
        ↓
IMPLEMENTATION.md        (urutan build, milestone)
```

**Next action:** lanjut ke `SEO.md`, karena SEO memengaruhi routing, metadata, URL structure, dan sitemap yang sudah di-lock di dokumen ini.
