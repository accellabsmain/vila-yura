"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "../ui/Container";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { Locale, getWhatsAppLink } from "@/lib/constants";

export function Navbar({ messages, locale }: { messages: Record<string, string>; locale: Locale }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { href: "/", label: messages.home || (locale === "id" ? "Beranda" : "Home") },
    { href: "/facilities", label: messages.facilities || (locale === "id" ? "Fasilitas" : "Facilities") },
    { href: "/gallery", label: messages.gallery || (locale === "id" ? "Galeri" : "Gallery") },
  ];

  const cleanBookText = (messages.book || "Reservasi").replace(/→/g, "").trim();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-morphism-dark py-4 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/35 to-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="text-2xl font-sans font-bold text-white tracking-[0.2em] group-hover:text-gold transition-colors">
              YURA VILLA
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-gold font-sans font-semibold -mt-1">
              Tawangmangu Highlands
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-xs font-sans font-medium uppercase tracking-[0.2em] text-white/90 hover:text-champagne-light transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher className="text-white/90 hover:text-champagne-light" />
            <a
              href={getWhatsAppLink("Halo Yura Villa, saya ingin bertanya tentang reservasi villa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-button-gold text-xs font-sans font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-md"
            >
              <span>{cleanBookText}</span>
              <span className="text-sm">→</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher className="text-white text-xs" />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2 focus:outline-none hover:text-gold transition-colors"
              aria-label="Open Mobile Menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        messages={messages}
        locale={locale}
      />
    </>
  );
}

