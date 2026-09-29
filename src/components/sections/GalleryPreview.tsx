"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

interface GalleryItem {
  id: string;
  src: string;
  category: "pool" | "lounge" | "bedroom" | "exterior";
  title: { en: string; id: string };
  tag: { en: string; id: string };
  aspectClass?: string;
}

const HIGHLIGHT_ITEMS: GalleryItem[] = [
  {
    id: "depan1",
    src: "/images/depan1.jpg",
    category: "exterior",
    title: { en: "Main Villa Exterior Front", id: "Tampak Depan Utama Yura Villa" },
    tag: { en: "Villa Exterior", id: "Tampak Depan" },
    aspectClass: "col-span-1 md:col-span-2 row-span-2 aspect-[16/10] md:aspect-auto",
  },
  {
    id: "kolamrenang1",
    src: "/images/kolamrenang1.jpg",
    category: "pool",
    title: { en: "Private Swimming Pool", id: "Kolam Renang Privat Utama" },
    tag: { en: "Private Pool", id: "Kolam Renang Privat" },
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "mainlounge",
    src: "/images/mainlounge.jpg",
    category: "lounge",
    title: { en: "Executive Living Lounge", id: "Living Lounge Utama" },
    tag: { en: "Living Lounge", id: "Lounge Utama" },
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "mejabl",
    src: "/images/mejabl.jpg",
    category: "lounge",
    title: { en: "Private Billiards Lounge", id: "Area Meja Biliar Privat" },
    tag: { en: "Entertainment", id: "Biliar Privat" },
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "kamarlandscape",
    src: "/images/kamarlandscape.jpg",
    category: "bedroom",
    title: { en: "Master Bedroom Suite", id: "Kamar Tidur Utama Suite" },
    tag: { en: "Executive Room", id: "Master Suite" },
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "bonsai",
    src: "/images/bonsai.jpg",
    category: "pool",
    title: { en: "Zen Bonsai & Water Garden", id: "Taman Bonsai & Gemericik Air" },
    tag: { en: "Zen Garden", id: "Taman Bonsai" },
    aspectClass: "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-auto",
  },
  {
    id: "kolamikan",
    src: "/images/kolamikan.jpg",
    category: "pool",
    title: { en: "Zen Koi Fish Pond", id: "Kolam Ikan Koi Zen" },
    tag: { en: "Koi Pond", id: "Kolam Koi" },
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "kamar1",
    src: "/images/kamar1.jpg",
    category: "bedroom",
    title: { en: "Executive Bedroom Suite", id: "Kamar Tidur Executive 1" },
    tag: { en: "Luxury Suite", id: "Kamar Tidur" },
    aspectClass: "aspect-[4/3]",
  },
];

export function GalleryPreview({ locale }: { locale: string }) {
  const isId = locale === "id";

  const mounted = useMounted();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLightboxIndex]);

  const categories = [
    { key: "all", label: isId ? "Semua Highlit" : "All Highlights" },
    { key: "pool", label: isId ? "Kolam & Taman" : "Pool & Garden" },
    { key: "lounge", label: isId ? "Lounge & Biliar" : "Lounge & Billiards" },
    { key: "bedroom", label: isId ? "Kamar Tidur" : "Bedrooms" },
    { key: "exterior", label: isId ? "Eksterior" : "Exterior" },
  ];

  const filteredItems = selectedCategory === "all"
    ? HIGHLIGHT_ITEMS
    : HIGHLIGHT_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNextLightbox = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
    );
  }, [filteredItems.length]);

  const handlePrevLightbox = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
    );
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handleNextLightbox, handlePrevLightbox]);

  return (
    <section id="gallery-section" className="py-24 md:py-32 bg-cream text-charcoal relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Title & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <Reveal variant="fadeUp" className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-sans font-semibold">
                {isId ? "✦ KOLEKSI FOTO ASLI YURA VILLA ✦" : "✦ YURA VILLA PHOTO HIGHLIGHTS ✦"}
              </span>
            </div>
            <h2 className="text-h2 font-sans font-semibold text-charcoal mb-4">
              {isId ? "Keindahan Dalam Lensa" : "Beauty in Frame"}
            </h2>
            <p className="text-body font-sans text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
              {isId
                ? "Jelajahi keasrian suasana, keindahan kolam renang privat, dan kemewahan lounge interior Yura Villa secara interaktif."
                : "Explore the serene atmosphere, private swimming pool, and luxury interior lounge of Yura Villa interactively."}
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2} className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 glass-button-gold text-xs font-sans font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-md group"
            >
              <span>{isId ? "Lihat Semua 26 Foto" : "View All 26 Photos"}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>

        {/* Dynamic Category Filter: Compact Tabs & Mobile Dropdown */}
        <Reveal variant="fadeUp" delay={0.3} className="mb-8">
          {/* Mobile Dropdown View */}
          <div className="sm:hidden w-full mb-4">
            <label htmlFor="gallery-category-select" className="sr-only">Pilih Kategori Galeri</label>
            <div className="relative">
              <select
                id="gallery-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-charcoal text-gold font-sans font-semibold text-xs uppercase tracking-wider px-4 py-3 rounded-xl border border-gold/40 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold appearance-none"
              >
                {categories.map((cat) => (
                  <option key={cat.key} value={cat.key} className="bg-charcoal text-white">
                    {cat.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Desktop / Tablet Compact Pill Tabs */}
          <div className="hidden sm:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`relative px-4 py-2 rounded-full text-[11px] font-sans uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-charcoal text-gold font-semibold shadow-md border border-gold/50"
                      : "glass-panel text-charcoal/80 hover:text-charcoal hover:bg-gold/15"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Category Change Container with Slide Left Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* DYNAMIC BENTO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`group relative rounded-3xl overflow-hidden glass-panel gold-border-glow shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 ${
                    selectedCategory === "all" ? item.aspectClass || "aspect-[4/3]" : "aspect-[4/3]"
                  }`}
                  onClick={() => setActiveLightboxIndex(idx)}
                >
                  <Image
                    src={item.src}
                    alt={isId ? item.title.id : item.title.en}
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-widest bg-charcoal-dark/75 text-gold backdrop-blur-md border border-gold/40 shadow-md">
                      {isId ? item.tag.id : item.tag.en}
                    </span>
                  </div>

                  {/* Center Zoom Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <div className="w-12 h-12 rounded-full bg-gold text-charcoal-dark flex items-center justify-center shadow-xl backdrop-blur-md gold-border-glow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <h3 className="text-white font-sans font-medium text-base sm:text-lg tracking-wide group-hover:text-gold transition-colors">
                        {isId ? item.title.id : item.title.en}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* ULTRA-SMOOTH DETAILED LIGHTBOX MODAL PORTAL */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-charcoal-dark/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveLightboxIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-gold transition-colors p-2"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                {/* Main Lightbox Image with Smooth Slide/Fade */}
                <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden gold-border-glow shadow-2xl bg-black/40">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredItems[activeLightboxIndex].id}
                      initial={{ opacity: 0, scale: 0.97, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.97, x: -20 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={filteredItems[activeLightboxIndex].src}
                        alt={
                          isId
                            ? filteredItems[activeLightboxIndex].title.id
                            : filteredItems[activeLightboxIndex].title.en
                        }
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Lightbox Caption Footer */}
                <div className="mt-6 text-center text-white space-y-2">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-widest bg-gold/20 text-gold border border-gold/40">
                    {isId
                      ? filteredItems[activeLightboxIndex].tag.id
                      : filteredItems[activeLightboxIndex].tag.en}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white">
                    {isId
                      ? filteredItems[activeLightboxIndex].title.id
                      : filteredItems[activeLightboxIndex].title.en}
                  </h3>
                  <p className="text-xs font-sans text-white/60 uppercase tracking-widest">
                    {isId ? "Foto" : "Photo"} {activeLightboxIndex + 1} {isId ? "dari" : "of"}{" "}
                    {filteredItems.length}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/gallery"
                      className="inline-flex items-center gap-2 text-xs font-sans text-gold hover:underline tracking-wider font-semibold group"
                      onClick={() => setActiveLightboxIndex(null)}
                    >
                      <span>{isId ? "Lihat seluruh 26 foto di halaman galeri" : "Explore full 26 photo gallery"}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>

                {/* Lightbox Navigation Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevLightbox}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold hover:text-charcoal-dark text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all border border-gold/30 shadow-xl"
                      aria-label="Previous photo"
                    >
                      ←
                    </button>
                    <button
                      onClick={handleNextLightbox}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold hover:text-charcoal-dark text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all border border-gold/30 shadow-xl"
                      aria-label="Next photo"
                    >
                      →
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}


