"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

export function FloatingWhatsApp({ locale = "id" }: { locale?: string }) {
  const isId = locale === "id";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
    >
      <a
        href={getWhatsAppLink(
          isId
            ? "Halo Vila Yura, saya ingin bertanya tentang ketersediaan dan booking villa."
            : "Hello Vila Yura, I would like to inquire about villa availability and booking."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 sm:gap-3 bg-charcoal text-white px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-2xl gold-border-glow hover:bg-gold transition-all duration-300 transform hover:scale-105"
      >
        <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-500"></span>
        </span>
        
        <div className="flex flex-col text-left leading-tight hidden xs:flex sm:flex">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold group-hover:text-charcoal transition-colors">
            {isId ? "Concierge 24/7" : "24/7 Concierge"}
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {isId ? "Reservasi via WA" : "Chat Concierge"}
          </span>
        </div>

        <div className="bg-emerald-600 group-hover:bg-charcoal p-1.5 sm:p-2 rounded-full text-white transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.195 4.39-1.151z"/>
          </svg>
        </div>
      </a>
    </motion.div>
  );
}
