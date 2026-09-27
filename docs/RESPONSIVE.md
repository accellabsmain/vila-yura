# RESPONSIVE.md — Responsive Behavior Architecture

> **Depends on:** `DESIGN.md`, `ARCHITECTURE.md`, `COMPONENTS.md`
> **Principle:** Bukan sekadar `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` — behavior didefinisikan per komponen, bukan diserahkan ke Tailwind default reflow.

---

## 1. Breakpoint Strategy

```text
Mobile          < 640px
Tablet          640px – 1023px
Desktop         1024px – 1439px
Large Desktop   1440px+
```

Mapping ke Tailwind: `sm / md / lg / xl / 2xl`. Breakpoint ini adalah acuan tunggal — tidak ada custom breakpoint tambahan tanpa update dokumen ini.

---

## 2. Prinsip Umum

- Behavior didefinisikan **per komponen**, bukan hasil generik dari shrink desktop layout.
- Setiap komponen di `COMPONENTS.md` wajib punya subsection responsive di sini sebelum diimplementasi.
- Reflow bukan sekadar reduce columns — termasuk perubahan hierarki visual, overlap, dan urutan elemen.

---

## 3. Hero Section

| Breakpoint | Behavior |
|---|---|
| Desktop | Large cinematic image, oversized typography overlapping image, floating information block |
| Tablet | Large image, typography direduksi, overlap dikurangi |
| Mobile | Stack vertikal: Image → Typography → Description → CTA (tidak ada overlap) |

---

## 4. Villa Grid

| Breakpoint | Columns |
|---|---|
| Mobile | 1 |
| Tablet | 2 |
| Desktop | 3 |
| Large Desktop | Asymmetric editorial grid (bukan grid seragam) |

**Catatan:** di Large Desktop, grid tidak boleh treated sebagai `4 kolom seragam` — harus mengikuti pola editorial (mixed span) sesuai `DESIGN.md`.

---

## 5. Navbar & Mobile Menu

| Breakpoint | Behavior |
|---|---|
| Desktop | Horizontal nav, semua item visible, `LanguageSwitcher` inline |
| Tablet | Horizontal nav, item mungkin di-collapse ke dropdown jika overflow |
| Mobile | Hamburger → `MobileMenu` full-screen overlay, `LanguageSwitcher` di dalam menu |

---

## 6. Gallery

| Breakpoint | Behavior |
|---|---|
| Desktop | Masonry / editorial multi-column dengan lightbox |
| Tablet | 2-column grid |
| Mobile | Single column, swipeable carousel opsional |

---

## 7. Villa Detail Page

| Breakpoint | Behavior |
|---|---|
| Desktop | Two-column: gallery/content kiri, sticky `VillaBookingCTA` kanan |
| Tablet | Single column, `VillaBookingCTA` non-sticky di bawah content |
| Mobile | Single column, `VillaBookingCTA` sticky di bottom (fixed bar) |

---

## 8. Typography Scale

Didefinisikan sebagai token, bukan angka lepas di tiap komponen (detail token ada di `DESIGN.md`; tabel ini hanya map ke breakpoint):

```text
H1: Mobile 32px → Tablet 48px → Desktop 72px → Large Desktop 88px
H2: Mobile 24px → Tablet 32px → Desktop 44px
Body: Mobile 16px → Desktop 18px
```

---

## 9. Testing Requirement

Setiap komponen di `sections/` dan `villa/` wajib di-review pada 4 breakpoint di atas sebelum dianggap "done" — bukan hanya visual check di desktop lalu diasumsikan Tailwind auto-handle sisanya.
