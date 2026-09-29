"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

import { getWhatsAppLink } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  messages: Record<string, string>;
  locale?: string;
}

export function MobileMenu({ isOpen, onClose, links, messages }: MobileMenuProps) {
  const cleanBookText = (messages.book || "Reservasi").replace(/→/g, "").trim();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-charcoal-dark/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 border-l border-gold/20"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex flex-col" onClick={onClose}>
              <span className="text-2xl font-sans font-bold text-white tracking-[0.2em]">
                YURA VILLA
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-medium -mt-1">
                Tawangmangu Highlands
              </span>
            </Link>
            
            <button
              onClick={onClose}
              className="p-2.5 rounded-full glass-badge text-white hover:text-gold transition-colors focus:outline-none"
              aria-label="Close Mobile Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-8 my-auto py-8">
            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-3xl sm:text-4xl font-sans font-semibold text-white/90 hover:text-gold transition-colors uppercase tracking-wider block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: links.length * 0.1 }}
              className="flex flex-col gap-5 pt-8 border-t border-gold/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">Bahasa / Language</span>
                <LanguageSwitcher className="text-white text-sm" />
              </div>

              <a
                href={getWhatsAppLink("Halo Yura Villa, saya ingin mereservasi villa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center glass-button-gold font-sans font-semibold text-xs uppercase tracking-widest px-6 py-4 rounded-full shadow-lg hover:scale-[1.02] transition-all"
              >
                {cleanBookText} →
              </a>
            </motion.div>
          </div>

          {/* Footer Info */}
          <div className="text-xs font-sans text-white/50 border-t border-gold/20 pt-4 flex justify-between items-center">
            <span>Yura Villa © {new Date().getFullYear()}</span>
            <span className="text-gold uppercase tracking-wider text-[10px]">Tawangmangu</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

