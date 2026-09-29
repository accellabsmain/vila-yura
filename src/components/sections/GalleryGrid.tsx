"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../motion/Reveal";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

interface GalleryItem {
  id: string;
  src: string;
  category: "exterior" | "pool" | "lounge" | "bedroom";
  title: { en: string; id: string };
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Exterior
  { id: "depan1", src: "/images/depan1.jpg", category: "exterior", title: { en: "Main Villa Front View (Depan 1)", id: "Tampak Depan Utama Yura Villa (Depan 1)" } },
  { id: "depan2", src: "/images/depan2.jpg", category: "exterior", title: { en: "Villa Front View Angle 2", id: "Tampak Depan Yura Villa (Depan 2)" } },
  { id: "carpot", src: "/images/carpot.jpg", category: "exterior", title: { en: "Main Carport Area", id: "Area Carport Utama" } },
  { id: "carpotsamping", src: "/images/carpotsamping.jpg", category: "exterior", title: { en: "Side Carport Area 1", id: "Area Carport Samping 1" } },
  { id: "carpotsamping2", src: "/images/carpotsamping2.jpg", category: "exterior", title: { en: "Side Carport Area 2", id: "Area Carport Samping 2" } },
  { id: "aksespintusamping", src: "/images/aksespintusamping.jpg", category: "exterior", title: { en: "Private Side Access", id: "Akses Pintu Samping Privat" } },

  // Pool & Garden
  { id: "kolamrenang1", src: "/images/kolamrenang1.jpg", category: "pool", title: { en: "Main Swimming Pool", id: "Kolam Renang Utama" } },
  { id: "kolam", src: "/images/kolam.jpg", category: "pool", title: { en: "Poolside Relaxation Area", id: "Area Bersantai Kolam Renang" } },
  { id: "kedalamankolam", src: "/images/kedalamankolam.jpg", category: "pool", title: { en: "Pool Depth & Steps", id: "Detail Kedalaman Kolam" } },
  { id: "kolamikan", src: "/images/kolamikan.jpg", category: "pool", title: { en: "Zen Koi Fish Pond", id: "Kolam Ikan Koi Zen" } },
  { id: "bonsai", src: "/images/bonsai.jpg", category: "pool", title: { en: "Zen Bonsai Garden", id: "Taman Bonsai Zen" } },

  // Lounge & Living
  { id: "mainlounge", src: "/images/mainlounge.jpg", category: "lounge", title: { en: "Executive Living Lounge", id: "Main Lounge Utama" } },
  { id: "mainlounge2", src: "/images/mainlounge2.jpg", category: "lounge", title: { en: "Main Lounge Seating Area", id: "Area Tempat Duduk Main Lounge" } },
  { id: "lounge", src: "/images/lounge.jpg", category: "lounge", title: { en: "Spacious Lounge Area", id: "Area Lounge Bersantai" } },
  { id: "lounge2", src: "/images/lounge2.jpg", category: "lounge", title: { en: "Comfortable Lounge Space", id: "Ruang Lounge Nyaman" } },
  { id: "initlounge", src: "/images/initlounge.jpg", category: "lounge", title: { en: "Inner Lounge Space 1", id: "Lounge Interior 1" } },
  { id: "initlounge2", src: "/images/initlounge2.jpg", category: "lounge", title: { en: "Inner Lounge Space 2", id: "Lounge Interior 2" } },
  { id: "mejabl", src: "/images/mejabl.jpg", category: "lounge", title: { en: "Billiard & Entertainment Area", id: "Area Meja Biliar & Hiburan" } },

  // Bedrooms & Facilities
  { id: "kamarlandscape", src: "/images/kamarlandscape.jpg", category: "bedroom", title: { en: "Master Bedroom Landscape View", id: "Kamar Tidur Utama Landscape" } },
  { id: "kamar1", src: "/images/kamar1.jpg", category: "bedroom", title: { en: "Bedroom 1 Suite", id: "Kamar Tidur 1" } },
  { id: "kamar2", src: "/images/kamar2.jpg", category: "bedroom", title: { en: "Bedroom 2 Suite", id: "Kamar Tidur 2" } },
  { id: "kamar3", src: "/images/kamar3.jpg", category: "bedroom", title: { en: "Bedroom 3 Suite", id: "Kamar Tidur 3" } },
  { id: "kamar4", src: "/images/kamar4.jpg", category: "bedroom", title: { en: "Bedroom 4 Suite", id: "Kamar Tidur 4" } },
  { id: "kamar5", src: "/images/kamar5.jpg", category: "bedroom", title: { en: "Bedroom 5 Suite", id: "Kamar Tidur 5" } },
  { id: "detailkamarr", src: "/images/detailkamarr.jpg", category: "bedroom", title: { en: "Bedroom Detail & Decor", id: "Detail Interior Kamar" } },
  { id: "toileet", src: "/images/toileet.jpg", category: "bedroom", title: { en: "Luxury Bathroom Suite", id: "Kamar Mandi & Toilet" } },
];

export function GalleryGrid({ locale }: { locale: string }) {
  const isId = locale === "id";

  const mounted = useMounted();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  const categories = [
    { key: "all", label: isId ? "Semua 26 Foto" : "All 26 Photos" },
    { key: "exterior", label: isId ? "Eksterior & Akses" : "Exterior & Access" },
    { key: "pool", label: isId ? "Kolam & Taman" : "Pool & Garden" },
    { key: "lounge", label: isId ? "Lounge & Area Bersantai" : "Lounge & Living" },
    { key: "bedroom", label: isId ? "Kamar Tidur & Fasilitas" : "Bedrooms & Facilities" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNextLightbox = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
    );
  }, [filteredItems.length]);

  const handlePrevLightbox = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
    );
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handleNextLightbox, handlePrevLightbox]);

  return (
    <section id="gallery-grid-section" className="pt-36 pb-28 min-h-screen bg-cream">
      <Container>
        <Reveal variant="fadeUp" className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-sans font-semibold block mb-3">
            ✦ OFFICIAL PHOTO COLLECTION ✦
          </span>
          <h1 className="text-h1 font-sans font-semibold text-charcoal mb-4">
            {isId ? "Galeri Resmi Yura Villa" : "Yura Villa Official Gallery"}
          </h1>
          <p className="text-body font-sans text-charcoal/80 text-lg font-light leading-relaxed">
            {isId
              ? "Jelajahi keindahan setiap sudut Yura Villa melalui koleksi foto asli kami di Tawangmangu."
              : "Explore every detail of Yura Villa through our high-resolution official photo collection."}
          </p>
        </Reveal>

        {/* Filter Categories */}
        <Reveal variant="fadeUp" delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-6 py-3 rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-gold text-charcoal-dark shadow-lg shadow-gold/25 scale-105"
                    : "glass-panel text-charcoal hover:bg-gold/20 hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </Reveal>

        {/* Image Grid with Slide Left Animation on Category Switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer glass-panel gold-border-glow hover:shadow-2xl transition-all duration-500"
                onClick={() => setActiveImageIndex(idx)}
              >
                <Image
                  src={item.src}
                  alt={isId ? item.title.id : item.title.en}
                  fill
                  loading="lazy"
                  quality={80}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-sans font-semibold text-base transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {isId ? item.title.id : item.title.en}
                  </span>
                  <span className="text-[10px] text-gold uppercase tracking-widest mt-1 font-sans font-medium">
                    {categories.find((c) => c.key === item.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* ULTRA-SMOOTH LIGHTBOX MODAL PORTAL */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-charcoal-dark/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveImageIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-gold transition-colors p-2"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden gold-border-glow bg-black/40 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredItems[activeImageIndex].id}
                      initial={{ opacity: 0, scale: 0.97, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.97, x: -20 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={filteredItems[activeImageIndex].src}
                        alt={isId ? filteredItems[activeImageIndex].title.id : filteredItems[activeImageIndex].title.en}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 text-center text-white space-y-1">
                  <h3 className="text-xl font-sans font-semibold text-gold">
                    {isId ? filteredItems[activeImageIndex].title.id : filteredItems[activeImageIndex].title.en}
                  </h3>
                  <p className="text-xs font-sans text-white/60 uppercase tracking-widest">
                    {activeImageIndex + 1} / {filteredItems.length}
                  </p>
                </div>

                {/* Navigation arrows */}
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


