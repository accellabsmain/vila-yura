"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/constants";

interface HeroProps {
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  ctaText: string;
  image: { src: string; alt: string };
  locale?: string;
}

export function Hero({ title1, title2, title3, subtitle, ctaText, image, locale = "id" }: HeroProps) {
  const isId = locale === "id";
  
  // Clean ctaText of any existing arrow to prevent double arrows
  const cleanCtaText = ctaText ? ctaText.replace(/→/g, "").trim() : (isId ? "Reservasi Peristirahatan" : "Reserve Your Sanctuary");

  return (
    <section id="hero-section" className="relative w-full min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-charcoal-dark text-white rounded-b-[32px] sm:rounded-b-[44px] shadow-2xl">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={true}
            loading="eager"
            quality={85}
            sizes="100vw"
            className="object-cover object-center brightness-[0.70]"
          />
        </motion.div>
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/80 via-transparent to-black/50" />
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Glassmorphic Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full glass-badge mb-6 max-w-full gold-border-glow"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-champagne-light font-sans font-semibold truncate">
              ✦ REST & HEALING SANCTUARY ✦ TAWANGMANGU ✦
            </span>
          </motion.div>

          {/* Headline (Strictly Modern Sans-serif) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-h1 font-sans font-normal leading-[1.06] tracking-tight mb-6"
          >
            <span className="block text-white/95 font-sans font-light tracking-tight">{title1}</span>
            <span className="block font-sans font-bold tracking-tight bg-gradient-to-r from-white via-champagne-light to-gold bg-clip-text text-transparent">{title2}</span>
            <span className="block text-gold font-sans font-semibold tracking-wide">{title3}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-body font-sans text-white/85 max-w-xl text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10"
          >
            {subtitle}
          </motion.p>

          {/* Glass Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href={getWhatsAppLink(
                isId ? "Halo Yura Villa, saya ingin melakukan reservasi villa." : "Hello Yura Villa, I would like to book a villa stay."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 glass-button-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest px-7 py-4 rounded-full text-center group shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-emerald-400 group-hover:text-charcoal-dark transition-colors">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.195 4.39-1.151z"/>
              </svg>
              <span>{cleanCtaText}</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="#facilities-section"
              className="inline-flex items-center justify-center gap-2 glass-button text-white font-sans font-medium text-xs sm:text-sm uppercase tracking-widest px-6 py-4 rounded-full text-center"
            >
              <span>{isId ? "Jelajahi Fasilitas" : "Explore Features"}</span>
            </a>

            <a
              href="#location-map-section"
              className="inline-flex items-center justify-center gap-2 glass-button text-champagne-light hover:text-gold font-sans font-medium text-xs sm:text-sm uppercase tracking-widest px-6 py-4 rounded-full text-center group"
            >
              <span className="text-gold text-base group-hover:scale-110 transition-transform">📍</span>
              <span>{isId ? "Temukan Yura Villa" : "Find Yura Villa"}</span>
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Glassmorphic Metrics Card */}
      <Container className="relative z-10 mt-10 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl glass-morphism-dark gold-border-glow"
        >
          <div className="flex flex-col sm:border-r border-gold/20 pr-0 sm:pr-4 pb-3 sm:pb-0 border-b sm:border-b-0 border-gold/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-subtle font-sans font-medium">Kapasitas Utuh</span>
            <span className="text-base sm:text-lg font-sans text-white font-semibold mt-0.5">5 Bedroom Suite</span>
            <span className="text-[11px] font-sans text-white/60">Hingga 15+ Tamu</span>
          </div>

          <div className="flex flex-col lg:border-r border-gold/20 pr-0 lg:pr-4 pb-3 sm:pb-0 border-b sm:border-b-0 border-gold/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-subtle font-sans font-medium">Kolam & Taman</span>
            <span className="text-base sm:text-lg font-sans text-white font-semibold mt-0.5">{isId ? "Kolam Privat & Koi" : "Private Pool & Koi"}</span>
            <span className="text-[11px] font-sans text-white/60">Bonsai Garden Zen</span>
          </div>

          <div className="flex flex-col sm:border-r border-gold/20 pr-0 sm:pr-4 pb-3 sm:pb-0 border-b sm:border-b-0 border-gold/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-subtle font-sans font-medium">Hiburan Privat</span>
            <span className="text-base sm:text-lg font-sans text-white font-semibold mt-0.5">Billiard Lounge</span>
            <span className="text-[11px] font-sans text-white/60">Main Lounge & Audio</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-subtle font-sans font-medium">Sanctuary Healing</span>
            <span className="text-base sm:text-lg font-sans text-white font-semibold mt-0.5">24/7 Concierge</span>
            <span className="text-[11px] font-sans text-white/60">Privat & Suasana Damai</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

