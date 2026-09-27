"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../motion/Reveal";
import Image from "next/image";

interface FacilityCardProps {
  title: { en: string; id: string };
  desc: { en: string; id: string };
  images: string[];
  badge: { en: string; id: string };
}

const FACILITIES: FacilityCardProps[] = [
  {
    title: { en: "Private Swimming Pool", id: "Kolam Renang Privat Utama" },
    desc: { en: "Relax in crystal clear water surrounded by fresh highland breeze.", id: "Nikmati kolam renang yang jernih diselimuti udara segar pegunungan Tawangmangu." },
    images: ["/images/kolamrenang1.jpg", "/images/kolam.jpg", "/images/kedalamankolam.jpg"],
    badge: { en: "Outdoor Pool", id: "Kolam Renang" },
  },
  {
    title: { en: "Executive Lounge & Living", id: "Lounge Utama & Ruang Keluarga" },
    desc: { en: "Spacious living area designed for quality family time and relaxation.", id: "Ruang santai keluarga luas dengan desain interior mewah dan hangat." },
    images: ["/images/mainlounge.jpg", "/images/mainlounge2.jpg", "/images/lounge.jpg", "/images/lounge2.jpg"],
    badge: { en: "Living Space", id: "Ruang Keluarga" },
  },
  {
    title: { en: "Private Billiard & Entertainment", id: "Area Meja Biliar & Hiburan" },
    desc: { en: "Enjoy fun games with family and friends on our premium billiard table.", id: "Area hiburan meja biliar privat untuk menemani waktu santai Anda." },
    images: ["/images/mejabl.jpg", "/images/initlounge.jpg", "/images/initlounge2.jpg"],
    badge: { en: "Entertainment", id: "Area Hiburan" },
  },
  {
    title: { en: "Master Bedroom Suites", id: "Kamar Tidur Utama" },
    desc: { en: "Comfortable bedrooms with plush bedding and ambient lighting.", id: "Kamar tidur bernuansa hangat dengan tempat tidur empuk untuk istirahat terbaik." },
    images: ["/images/kamarlandscape.jpg", "/images/kamar1.jpg", "/images/kamar2.jpg", "/images/kamar3.jpg"],
    badge: { en: "5 Bedrooms", id: "5 Kamar Tidur" },
  },
  {
    title: { en: "Zen Koi Pond & Garden", id: "Kolam Ikan Koi & Taman Zen" },
    desc: { en: "Listen to soothing water streams with colorful koi fish and bonsai plants.", id: "Gemericik air kolam ikan koi dan keasrian taman bonsai menciptakan ketenangan." },
    images: ["/images/kolamikan.jpg", "/images/bonsai.jpg"],
    badge: { en: "Garden & Nature", id: "Taman Alam" },
  },
  {
    title: { en: "Private Carport & Access", id: "Carport Samping & Akses Privat" },
    desc: { en: "Ample parking spaces and private side access for complete convenience.", id: "Area parkir luas yang aman dan mudah diakses untuk seluruh tamu." },
    images: ["/images/carpot.jpg", "/images/carpotsamping.jpg", "/images/carpotsamping2.jpg", "/images/aksespintusamping.jpg"],
    badge: { en: "Private Access", id: "Akses Privat" },
  },
];

function AutoSlideCard({ facility, isId }: { facility: FacilityCardProps; isId: boolean }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (facility.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % facility.images.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [facility.images.length]);

  return (
    <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass-morphism-dark gold-border-glow hover:shadow-2xl transition-all duration-500">
      <AnimatePresence mode="wait">
        <motion.div
          key={facility.images[currentIdx]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={facility.images[currentIdx]}
            alt={isId ? facility.title.id : facility.title.en}
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
        <div className="flex justify-between items-start">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-widest glass-badge text-champagne-light shadow-sm">
            {isId ? facility.badge.id : facility.badge.en}
          </span>
          {facility.images.length > 1 && (
            <div className="flex gap-1.5 pt-1">
              {facility.images.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    dotIdx === currentIdx ? "w-4 bg-gold" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl font-sans font-semibold text-white group-hover:text-gold transition-colors mb-2">
            {isId ? facility.title.id : facility.title.en}
          </h3>
          <p className="text-xs font-sans text-white/75 line-clamp-2 leading-relaxed font-light">
            {isId ? facility.desc.id : facility.desc.en}
          </p>
        </div>
      </div>
    </div>
  );
}

export function LuxuryFacilities({ locale }: { locale: string }) {
  const isId = locale === "id";

  return (
    <section id="facilities-section" className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal variant="fadeUp">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold block mb-2">
                {isId ? "✦ FASILITAS REST & HEALING ✦" : "✦ REST & HEALING AMENITIES ✦"}
              </span>
              <h2 className="text-h2 font-sans font-semibold">
                {isId ? "Ketenangan Di Setiap Detail" : "Tranquility in Every Corner"}
              </h2>
            </Reveal>
          </div>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="text-body font-sans text-white/75 max-w-md">
              {isId
                ? "Dirancang khusus untuk kedamaian pikiran, istirahat berkualitas, dan pengalaman healing tak terlupakan di Tawangmangu."
                : "Curated for deep relaxation, peace of mind, and a restorative stay in Tawangmangu."}
            </p>
          </Reveal>
        </div>

        {/* Facility Cards Grid with Auto Slide (No Arrow Buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <Reveal key={index} variant="fadeUp" delay={index * 0.1}>
              <AutoSlideCard facility={facility} isId={isId} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}


