import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/constants";

export function FinalCTA({
  title,
  ctaText,
  image,
}: {
  title: string;
  ctaText: string;
  image?: { src: string; alt: string };
}) {
  const bgImage = image?.src || "/images/depan1.jpg";
  const cleanCtaText = ctaText ? ctaText.replace(/→/g, "").trim() : "Reservasi Healing";

  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-charcoal-dark text-white border-t border-gold/30">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Vila Yura Sanctuary"
          fill
          className="object-cover brightness-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/75 to-black/80" />
      </div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <Reveal variant="fadeUp">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold block mb-4">
            ✦ REST & HEALING SANCTUARY ✦
          </span>
          <h2 className="text-h2 font-sans font-semibold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-body font-sans text-white/85 max-w-xl mx-auto mb-10 text-lg font-light leading-relaxed">
            Hubungi tim concierge kami untuk memeriksa ketersediaan tanggal dan merencanakan waktu istirahat privat Anda di Tawangmangu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Halo Vila Yura, saya ingin bertanya mengenai reservasi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-button-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest px-10 py-4.5 rounded-full shadow-xl hover:scale-105 transition-all group"
            >
              <span>{cleanCtaText}</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

