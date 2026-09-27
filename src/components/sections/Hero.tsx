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
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href={getWhatsAppLink(
                isId ? "Halo Vila Yura, saya ingin melakukan reservasi villa." : "Hello Vila Yura, I would like to book a villa stay."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 glass-button-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full text-center group"
            >
              <span>{cleanCtaText}</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="#facilities-section"
              className="inline-flex items-center justify-center gap-2 glass-button text-white font-sans font-medium text-xs sm:text-sm uppercase tracking-widest px-7 py-4 rounded-full text-center"
            >
              <span>{isId ? "Jelajahi Fasilitas" : "Explore Features"}</span>
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

