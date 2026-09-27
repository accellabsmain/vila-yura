# COMPONENTS.md — Component System Reference

> **Depends on:** `ARCHITECTURE.md` (folder structure, Server/Client policy), `DESIGN.md` (visual token), `RESPONSIVE.md` (breakpoint behavior)
> **Purpose:** Mencegah komponen duplikat/ad-hoc (`Button2.tsx`, `HeroFinal.tsx`). Setiap komponen baru harus dicek ke sini dulu sebelum dibuat.

---

## 1. Component Inventory

```text
ui/
├── Button            — client jika ada onClick handler kompleks; server-safe jika pure link
├── Container          — server, layout wrapper (max-width + padding token)
├── SectionHeading       — server
├── Badge              — server
├── LanguageSwitcher      — client (lihat I18N.md section 6)
├── IconButton          — server, kecuali ada interaksi
└── MagneticButton        — client (Framer Motion)

layout/
├── Navbar             — client (state: mobile menu toggle)
├── MobileMenu           — client
├── Footer              — server
└── PageTransition         — client (Framer Motion)

sections/
├── Hero               — server wrapper + client motion child
├── Introduction          — server
├── Experiences           — server
├── FeaturedVillas         — server
├── Statistics            — client jika ada counter animation
├── ImageStatement         — server
├── Gallery             — client (lightbox interaction)
├── Testimonials          — server, kecuali carousel butuh client
└── FinalCTA            — server

villa/
├── VillaCard            — server
├── VillaGrid            — server
├── VillaHero            — server wrapper + client motion child
├── VillaAmenities         — server
├── VillaGallery          — client (lightbox)
└── VillaBookingCTA        — client (form/interaction, sticky behavior)

motion/
├── Reveal              — client
├── StaggerContainer        — client
├── TextReveal            — client
├── ImageReveal           — client
├── ParallaxImage          — client
└── MagneticButton         — client
```

**Rule:** Jika komponen baru tidak masuk kategori di atas, tambahkan ke dokumen ini dulu (via revisi), baru buat filenya — bukan sebaliknya.

---

## 2. Props Contract — Pola Umum

Semua komponen yang menampilkan content bilingual **menerima objek locale-resolved**, bukan raw bilingual object + locale string terpisah. Resolusi locale terjadi di level `page.tsx` (Server Component), bukan di dalam child component.

```ts
// ❌ Salah — komponen resolve locale sendiri
<VillaCard villa={villa} locale={locale} />

// ✅ Benar — page.tsx sudah resolve
<VillaCard
  name={villa.name}
  description={villa.description[locale]}
  slug={villa.slug[locale]}
/>
```

Alasan: menjaga komponen tetap presentational, testable, dan tidak bergantung ke i18n context di level rendering.

---

## 3. Contoh Props Interface

```ts
// components/villa/VillaCard.tsx
interface VillaCardProps {
  name: string;
  location: string;
  slug: string;
  guests: number;
  bedrooms: number;
  thumbnail: { src: string; alt: string };
  href: string; // sudah termasuk /${locale}/${segment}/${slug}
}
```

```ts
// components/motion/Reveal.tsx
interface RevealProps {
  children: React.ReactNode;
  variant?: keyof typeof import("@/lib/motion/variants").variants;
  delay?: number;
  className?: string;
}
```

---

## 4. Composition Rule — Server/Client Boundary

Section besar (`Hero`, `VillaHero`) adalah **Server Component** yang membungkus child **Client Component** motion — bukan section itu sendiri yang jadi `"use client"`.

```tsx
// sections/Hero.tsx (Server Component)
export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section>
      <Reveal variant="fadeUp">
        <h1>{title}</h1>
      </Reveal>
      <ImageReveal src={image} />
    </section>
  );
}
```

Ini konsisten dengan Client Component Budget di `PERFORMANCE.md` section 5 — hanya `motion/*` yang client, wrapper section tetap server.

---

## 5. Styling Contract

- Semua styling lewat Tailwind utility class + token dari `DESIGN.md` (tidak ada arbitrary value `[#1a1a1a]` kecuali token belum ada — tambahkan ke `DESIGN.md` dulu).
- Variant styling (mis. Button primary/secondary) pakai `class-variance-authority` (cva) atau setara — bukan conditional className manual berulang.

```ts
// components/ui/Button.tsx
const buttonVariants = cva("base-classes", {
  variants: {
    intent: { primary: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { intent: "primary", size: "md" },
});
```

---

## 6. Naming Convention

```text
✓ PascalCase untuk komponen: VillaCard.tsx
✓ Tidak ada suffix versi: New, Final, V2, Copy
✓ Satu komponen = satu tanggung jawab (VillaGrid tidak fetch data, hanya render list)
✓ Data fetching terjadi di page.tsx, diteruskan sebagai props
```

---

## 7. Checklist Sebelum Buat Komponen Baru

```text
[ ] Sudah ada di inventory section 1? Jika ya, extend — jangan duplikat.
[ ] Server atau Client? Cek section 4 & Client Component Budget di PERFORMANCE.md.
[ ] Props menerima locale-resolved data, bukan raw bilingual object.
[ ] Styling pakai token DESIGN.md, bukan arbitrary value baru.
[ ] Breakpoint behavior sudah ada acuan di RESPONSIVE.md?
```
