# SEO.md — Technical SEO Architecture

> **Depends on:** `ARCHITECTURE.md` (routing, data layer), `I18N.md`
> **Feeds into:** `IMPLEMENTATION.md`

SEO dirancang dari awal, bukan ditambahkan setelah UI selesai. Semua konfigurasi di bawah ini bind ke struktur `app/[locale]/` dan `data/villas/*` yang sudah di-lock di `ARCHITECTURE.md`.

---

## 1. Technical SEO Checklist

```text
✓ Dynamic Metadata (per page, per locale)
✓ Title Templates
✓ Meta Description
✓ Canonical URL
✓ OpenGraph
✓ Twitter Cards
✓ robots.txt
✓ sitemap.xml
✓ Structured Data / JSON-LD
✓ Image Optimization (alt text wajib dari data layer, bukan hardcode)
✓ Semantic HTML (heading hierarchy, landmark tags)
✓ hreflang untuk EN & ID
```

---

## 2. Dynamic Metadata

Generator terpusat di `lib/metadata.ts`, dipanggil dari tiap `page.tsx` via `generateMetadata()`. Tidak ada metadata hardcode di komponen.

```ts
// lib/metadata.ts
export function generateVillaMetadata(villa: Villa, locale: Locale): Metadata {
  return {
    title: `${villa.name} | Private Luxury Villa`,
    description: villa.description[locale],
    alternates: {
      canonical: `/${locale}/villas/${villa.slug[locale]}`,
      languages: {
        en: `/en/villas/${villa.slug.en}`,
        id: `/id/villa/${villa.slug.id}`,
      },
    },
    openGraph: { images: villa.images[0], locale },
  };
}
```

**Title Template (root layout):**

```text
%s | [Brand Name]
```

**Contoh output:**

```text
EN: Hilltop Villa Bali | Private Luxury Villa
ID: Villa Bukit Bali | Villa Privat dengan Pemandangan Alam
```

---

## 3. Structured Data (JSON-LD)

Diimplementasikan via `components/seo/JsonLd.tsx`, di-inject per page type.

| Halaman | Schema Type |
|---|---|
| Home | `Organization`, `LocalBusiness` |
| Villa Detail | `LodgingBusiness` / `VacationRental` |
| Semua halaman | `BreadcrumbList` |
| Journal Article | `Article` |
| Halaman dengan Q&A | `FAQPage` |

**Field wajib untuk villa schema** — diambil langsung dari `data/villas/*`, bukan ditulis ulang:

```text
name, location, priceRange, image[], amenityFeature[],
aggregateRating (jika ada), occupancy (guests), availability
```

---

## 4. URL & hreflang Structure

Mengikuti keputusan **fully localized URL** di `ARCHITECTURE.md`:

```text
/en/villas/hilltop-villa
/id/villa/hilltop-villa
```

Setiap page wajib emit tag `hreflang` pasangan EN↔ID via `alternates.languages` (lihat contoh section 2). Ini mencegah duplicate content penalty antar locale.

---

## 5. Sitemap & Robots

`app/sitemap.ts` — auto-generate dari `data/villas/*`, `data/experiences.ts`, dan konten journal. Tidak boleh manual-list URL.

```ts
// app/sitemap.ts (concept)
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...villas.flatMap(v => localesFor(v)), // /en & /id per villa
    ...journalArticles.flatMap(a => localesFor(a)),
  ];
}
```

`app/robots.ts` — allow all crawl, exclude route internal (mis. `/api/*`, draft preview).

---

## 6. Content SEO — Journal

Journal (`/journal`) adalah organic traffic engine. Kategori artikel awal:

```text
Best Private Villas in Bali
Things to Do Near [Villa Location]
A Guide to a Private Villa Stay in Bali
Best Time to Visit [Location]
Romantic Villa Getaway Ideas
```

Setiap artikel wajib punya: target keyword utama, internal link ke minimal 1 villa detail page, `Article` schema, dan metadata bilingual mengikuti pola di section 2.

---

## 7. Image SEO

```text
✓ alt text diambil dari data/villas/*.ts (bilingual), bukan generic "villa image"
✓ filename deskriptif (hilltop-villa-pool-view.webp, bukan IMG_2831.webp)
✓ next/image dengan explicit width/height untuk mencegah CLS
```

---

## 8. Non-Goals / Out of Scope

Dokumen ini tidak mengatur performance budget (lihat `PERFORMANCE.md`) atau breakpoint behavior (lihat `RESPONSIVE.md`) — hanya technical & content SEO.
