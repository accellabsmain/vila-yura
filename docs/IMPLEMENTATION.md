# IMPLEMENTATION.md — Development Roadmap & Agent Kickoff Guide

> **Depends on:** SEMUA dokumen sebelumnya (`DESIGN.md`, `ARCHITECTURE.md`, `SEO.md`, `RESPONSIVE.md`, `I18N.md`, `COMPONENTS.md`, `CONTENT.md`, `PERFORMANCE.md`)
> **Purpose:** Dokumen terakhir sebelum build. Isinya urutan phase + template prompt siap-pakai untuk AI Agent (Claude Code, Cursor, dll).

---

## 1. Reading Order untuk Agent

```text
DESIGN.md → ARCHITECTURE.md → SEO.md → RESPONSIVE.md →
I18N.md → COMPONENTS.md → CONTENT.md → PERFORMANCE.md → IMPLEMENTATION.md
```

Semua file wajib ada di `docs/` di root repo sebelum kickoff.

---

## 2. Phase Breakdown

| Phase | Scope | Output |
|---|---|---|
| 0 | Project scaffold: Next.js + TS + Tailwind config, folder structure sesuai `ARCHITECTURE.md` section 2 | Empty skeleton, build passing |
| 1 | Design tokens + motion system (`lib/motion/*`, Tailwind config dari `DESIGN.md`) | Token siap dipakai, belum ada UI |
| 2 | `components/ui/*` — atomic components | Storybook-able components, tidak terikat page |
| 3 | `components/layout/*` — Navbar, Footer, MobileMenu, PageTransition | Layout shell jalan di semua route dummy |
| 4 | `components/sections/*` — Hero, Introduction, FeaturedVillas, dst | Section reusable, data via props (belum wired ke `data/`) |
| 5 | `data/villas/*` + `types/villa.ts` + `components/villa/*` | Villa listing & detail page fungsional (locale tunggal dulu, mis. `en`) |
| 6 | i18n wiring: `messages/*.json`, `[locale]` routing, `LanguageSwitcher`, slug mapping | Kedua locale jalan, switch locale tidak broken |
| 7 | SEO: `lib/metadata.ts`, `JsonLd`, `sitemap.ts`, `robots.ts` | Metadata & structured data lolos validasi (Rich Results Test) |
| 8 | Journal + Experience pages | Content pages jalan, internal linking ke villa aktif |
| 9 | Performance pass: image audit, client component audit, Lighthouse | Skor sesuai budget di `PERFORMANCE.md` section 6 |
| 10 | QA responsive: review tiap breakpoint per `RESPONSIVE.md` | Semua section sesuai behavior table |

**Rule:** satu phase = satu sesi kerja dengan Agent. Jangan minta lompat phase sebelum phase sebelumnya di-review.

---

## 3. Template Kickoff Prompt (Phase 0 — Onboarding)

```text
Kamu akan membangun website villa dengan stack Next.js App Router + TypeScript
+ Tailwind CSS + Framer Motion.

Baca seluruh dokumen di docs/ dengan urutan berikut sebelum menulis kode apapun:
DESIGN.md, ARCHITECTURE.md, SEO.md, RESPONSIVE.md, I18N.md, COMPONENTS.md,
CONTENT.md, PERFORMANCE.md, IMPLEMENTATION.md.

Setelah selesai membaca, tulis ringkasan singkat berisi:
1. Folder structure yang akan kamu ikuti (dari ARCHITECTURE.md)
2. Rule Server vs Client Component yang akan kamu terapkan
3. Hal yang menurutmu ambigu atau butuh klarifikasi

JANGAN generate kode apapun di langkah ini. Tunggu konfirmasi saya sebelum lanjut ke Phase 0 (scaffold).
```

---

## 4. Template Prompt per Phase

Pola umum — isi `{phase}` dan `{scope}` sesuai tabel section 2:

```text
Lanjut ke Phase {phase}: {scope}.

Constraint wajib:
- Ikuti folder structure ARCHITECTURE.md section 2 — tidak ada file di luar struktur itu
- Server Component by default (ARCHITECTURE.md section 4), Client Component
  hanya sesuai budget di PERFORMANCE.md section 5
- Styling pakai token DESIGN.md, tidak ada arbitrary value baru tanpa alasan
- Jangan buat komponen di luar inventory COMPONENTS.md section 1 — kalau perlu
  komponen baru, tanya saya dulu

Setelah selesai, tampilkan list file yang dibuat/diubah dan jelaskan bagian mana
yang perlu saya review manual.
```

**Contoh konkret Phase 5:**

```text
Lanjut ke Phase 5: data/villas/* + types/villa.ts + components/villa/*.

Gunakan schema Villa persis seperti di CONTENT.md section 2 — jangan tambah/
kurangi field tanpa konfirmasi. Buat 2 dummy villa entry untuk testing.
VillaCard dan VillaGrid mengikuti props contract di COMPONENTS.md section 3.
Grid behavior ikuti RESPONSIVE.md section 4 (1/2/3 kolom + asymmetric di
Large Desktop).
```

---

## 5. Review Checklist per Phase (sebelum lanjut)

```text
[ ] File yang dibuat sesuai folder structure ARCHITECTURE.md?
[ ] Tidak ada "use client" di luar Client Component Budget?
[ ] Styling pakai token DESIGN.md, bukan angka arbitrary baru?
[ ] Kalau ada content: sudah bilingual sesuai CONTENT.md checklist?
[ ] Kalau ada komponen baru: sudah ditambahkan ke COMPONENTS.md?
[ ] Build passing (npm run build) tanpa warning baru?
```

Kalau ada item gagal, **perbaiki dulu sebelum lanjut phase berikutnya** — jangan biarkan technical debt menumpuk lintas phase.

---

## 6. Anti-Pattern yang Harus Ditolak dari Agent

```text
✗ "Saya buat sekalian semua halaman biar cepat" → tolak, minta per-phase
✗ Komponen baru tanpa update COMPONENTS.md
✗ Hardcode string EN atau ID di komponen
✗ "use client" di page.tsx atau komponen display-only
✗ Villa/experience entry tanpa slug.id atau alt text bilingual
✗ Deskripsi generic yang melanggar CONTENT.md section 6
```

---

## 7. Definition of Done (Project Level)

```text
[ ] Semua 10 phase selesai dan di-review
[ ] Lighthouse score memenuhi budget PERFORMANCE.md section 6 di halaman
    Home DAN Villa Detail
[ ] hreflang & JSON-LD lolos validasi (Google Rich Results Test)
[ ] Semua breakpoint di RESPONSIVE.md sudah di-review manual
[ ] Tidak ada TODO/placeholder content tersisa di data/*
```
