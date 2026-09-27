# PERFORMANCE.md — Performance Architecture

> **Depends on:** `ARCHITECTURE.md` (Server/Client Component policy)
> **Context:** Site image-heavy (villa photography), sehingga performance harus dikunci sejak awal, bukan optimization pass di akhir.

---

## 1. Core Rule

> **Server Component by default. Client Component hanya ketika benar-benar butuh interactivity, Framer Motion, state, atau browser API.**

Ini bukan saran — ini rule yang di-enforce di code review. `"use client"` di top-level page atau di komponen display-only adalah anti-pattern yang wajib direject.

---

## 2. Image Optimization

```text
✓ next/image untuk SEMUA gambar (tidak ada <img> mentah)
✓ Format: WebP / AVIF
✓ Responsive sizes attribute wajib diisi (bukan default)
✓ Lazy loading default untuk semua image
✓ priority hanya untuk Hero image (LCP element)
✓ explicit width/height untuk mencegah Cumulative Layout Shift
```

**Anti-pattern:** semua image di villa gallery pakai `priority` — hanya Hero yang boleh.

---

## 3. Font Optimization

```text
✓ next/font (self-hosted, no external font request blocking render)
✓ font-display: swap
✓ subset font sesuai karakter EN/ID yang dipakai (hindari full charset jika tidak perlu)
```

---

## 4. Code Splitting & Dynamic Import

Komponen berat wajib dynamic import dengan `next/dynamic`:

```text
✓ Gallery lightbox
✓ Booking calendar / availability widget
✓ Map embed (jika ada)
```

Komponen ini di-load hanya saat dibutuhkan (mis. on interaction / below-fold), bukan bundled ke initial JS.

---

## 5. Client Component Budget

Client Component dibatasi ke:

```text
components/motion/*      (Framer Motion — wajib client)
components/layout/Navbar, MobileMenu
components/ui/LanguageSwitcher
Form / booking interaction components
```

Di luar list ini, default Server Component. Setiap penambahan `"use client"` baru wajib direview terhadap list ini.

---

## 6. Performance Budget (Target)

```text
LCP        < 2.5s
CLS        < 0.1
INP        < 200ms
JS bundle  (initial load) — minimize; monitor via next build output
```

Diukur via Lighthouse / Vercel Analytics pada Hero page (halaman paling image-heavy) sebagai baseline terberat.

---

## 7. Motion Performance

Framer Motion animation wajib pakai property yang GPU-accelerated (`transform`, `opacity`) — bukan animate `width`/`height`/`top`/`left` langsung. Standar variant sudah di-lock di `lib/motion/variants.ts` (lihat `ARCHITECTURE.md` section 6) agar tidak ada animation ad-hoc yang melanggar rule ini.

---

## 8. Data Fetching

Karena `data/villas/*` bersifat static (bukan CMS dinamis di fase awal), page villa detail bisa full static generation (`generateStaticParams`) — tidak perlu client-side fetch untuk data yang sudah diketahui saat build time.

---

## 9. Review Checklist Sebelum Deploy

```text
[ ] Semua image pakai next/image dengan sizes yang benar
[ ] Hanya Hero image yang priority
[ ] Tidak ada "use client" di luar Client Component Budget (section 5)
[ ] Lighthouse score dicek di halaman Villa Detail (bukan cuma Home)
[ ] Font di-subset dan self-hosted
[ ] Bundle size initial load direview di next build output
```
