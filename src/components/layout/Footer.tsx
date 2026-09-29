import Link from "next/link";
import { Container } from "../ui/Container";
import { Locale, WHATSAPP_CONFIG, getWhatsAppLink } from "@/lib/constants";

export function Footer({ messages, locale }: { messages: Record<string, string>; locale: Locale }) {
  const isId = locale === "id";

  return (
    <footer className="bg-charcoal-dark text-white pt-24 pb-12 border-t border-gold/30 relative overflow-hidden font-sans">
      {/* Decorative Gold Radial Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gold/20">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-sans font-bold tracking-[0.25em] text-white">
                YURA VILLA
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-gold font-sans font-medium mt-1">
                Tawangmangu Highlands
              </span>
            </div>

            <p className="text-white/75 max-w-md text-sm leading-relaxed font-light font-sans">
              {messages.description || "Sebuah tempat peristirahatan privat eksklusif di perbukitan Tawangmangu yang menggabungkan kemewahan modern dengan keasrian alam pegunungan."}
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Halo Yura Villa, saya ingin menghubungi tim anda.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-button-gold text-xs font-sans font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-md group"
              >
                <span>{isId ? "Hubungi Sekarang" : "Contact Now"}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
              {messages.explore || "Jelajahi"}
            </h3>
            <ul className="space-y-3 text-sm text-white/80 font-light font-sans">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  {isId ? "Beranda" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-gold transition-colors">
                  {isId ? "Fasilitas" : "Facilities"}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  {isId ? "Galeri" : "Gallery"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
              {messages.connect || "Lokasi & Kontak"}
            </h3>
            <ul className="space-y-3 text-sm text-white/80 font-light font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">📍</span>
                <span>
                  Jl. Pancot Lor No.rt02/05, Jetis, Kalisoro, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">📱</span>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {WHATSAPP_CONFIG.displayNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✉️</span>
                <a href="mailto:contact@vilayura.com" className="hover:text-gold transition-colors">
                  contact@vilayura.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-white/50">
          <p>&copy; {new Date().getFullYear()} Yura Villa. {messages.rights || "Hak cipta dilindungi."}</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

