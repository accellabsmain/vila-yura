# CONTENT.md — Content Architecture & Data Schema

> **Depends on:** `ARCHITECTURE.md` (data layer), `I18N.md` (bilingual field pattern), `SEO.md` (content requirement per entity)
> **Purpose:** Skema penuh untuk semua entity di `data/*`, plus copywriting guideline agar konten konsisten dan SEO-ready sejak ditulis.

---

## 1. Prinsip Umum

- Tidak ada content hardcode di component (lihat `ARCHITECTURE.md` section 5).
- Semua field yang tampil ke user (nama, deskripsi, label) wajib bilingual `{ en, id }`.
- Data numerik/struktural (guests, bedrooms, price) tidak perlu bilingual, tapi format tampilannya locale-aware (lihat `I18N.md` section 8).

---

## 2. Schema — Villa (`types/villa.ts`)

```ts
export interface Villa {
  id: string;
  slug: { en: string; id: string };
  name: string;
  location: { en: string; id: string };
  title: { en: string; id: string };       // SEO title, beda dari name
  description: { en: string; id: string };   // long-form, untuk detail page
  shortDescription: { en: string; id: string }; // untuk card/grid, max ~120 char
  guests: number;
  bedrooms: number;
  bathrooms: number;
  priceFrom: number;              // IDR, per malam
  amenities: Amenity[];
  images: VillaImage[];
  featured?: boolean;             // tampil di FeaturedVillas home
}

export interface VillaImage {
  src: string;
  alt: { en: string; id: string };  // wajib, dipakai di SEO.md section 7
  width: number;
  height: number;
}

export interface Amenity {
  icon: string;
  label: { en: string; id: string };
}
```

---

## 3. Schema — Experience (`types/common.ts` atau `types/experience.ts`)

```ts
export interface Experience {
  id: string;
  slug: { en: string; id: string };
  title: { en: string; id: string };
  description: { en: string; id: string };
  image: VillaImage;
  relatedVillas?: string[]; // array of villa.id, untuk internal linking (SEO.md)
}
```

---

## 4. Schema — Journal Article

```ts
export interface JournalArticle {
  id: string;
  slug: { en: string; id: string };
  title: { en: string; id: string };
  excerpt: { en: string; id: string };
  content: { en: string; id: string };  // markdown atau rich text
  coverImage: VillaImage;
  publishedAt: string;           // ISO date
  targetKeyword: { en: string; id: string }; // wajib diisi, lihat SEO.md section 6
  relatedVillaSlug?: string;       // wajib minimal 1 internal link ke villa
}
```

**Kategori awal (dari `SEO.md` section 6):**

```text
Best Private Villas in Bali
Things to Do Near [Villa Location]
A Guide to a Private Villa Stay in Bali
Best Time to Visit [Location]
Romantic Villa Getaway Ideas
```

---

## 5. Schema — Testimonial

```ts
export interface Testimonial {
  id: string;
  guestName: string;
  guestOrigin?: string;
  quote: { en: string; id: string };
  rating: number; // 1–5
  relatedVillaId?: string;
  avatar?: string;
}
```

---

## 6. Copywriting Guideline

| Field | Panjang | Nada |
|---|---|---|
| `title` (SEO) | 50–60 karakter | Deskriptif + keyword di depan |
| `shortDescription` | ≤120 karakter | Evocative, satu kalimat |
| `description` | 150–300 kata | Sensory, spesifik lokasi, hindari generic ("beautiful", "amazing" tanpa konteks) |
| `journal.excerpt` | 100–150 karakter | Hook, bukan ringkasan datar |

**Larangan:** deskripsi generik yang bisa dipakai villa manapun ("A beautiful villa in Bali with amazing views"). Setiap deskripsi wajib menyebut 1–2 detail spesifik (nama area, fitur unik, orientasi pemandangan).

---

## 7. Alt Text Guideline (bind ke `SEO.md` section 7)

```text
Format: [Villa Name] - [Feature/Area shown]
Contoh EN: "Hilltop Villa - infinity pool overlooking rice terraces"
Contoh ID: "Villa Bukit - kolam infinity menghadap sawah"
```

Bukan generic `"villa image"` atau kosong.

---

## 8. Konsistensi Data — Checklist Sebelum Tambah Entity Baru

```text
[ ] slug.en dan slug.id sudah diisi (I18N.md section 2)
[ ] Semua field bilingual punya pasangan en/id, tidak ada yang kosong
[ ] shortDescription ≤120 karakter, description 150–300 kata
[ ] Minimal 3 image dengan alt text bilingual sesuai format section 7
[ ] Jika journal article: targetKeyword diisi + minimal 1 relatedVillaSlug
```

---

## 9. Content Ownership

Konten (copywriting) adalah tanggung jawab terpisah dari struktur data. AI Agent boleh generate draft awal berdasarkan schema di atas, tapi copy final untuk villa description dan journal article wajib direview manual sebelum publish — terutama klaim spesifik (harga, jumlah tamu, lokasi).
