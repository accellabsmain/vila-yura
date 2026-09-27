import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

export function Reviews({ locale }: { locale: string }) {
  const isId = locale === "id";

  const reviews = [
    {
      name: "Hendra & Family",
      location: "Jakarta Selatan",
      text: isId
        ? "Vila Yura benar-benar spektakuler! Kolam renang privat, area biliar privat, dan pemandangan perbukitan Tawangmangu sangat memanjakan. Tim kami 24 jam sangat responsif."
        : "Vila Yura is truly spectacular! The private pool, private billiard area, and Tawangmangu valley views are breathtaking. 24/7 concierge service was top-notch.",
      rating: 5,
      date: "Agustus 2026",
    },
    {
      name: "Dr. Amanda Wijaya",
      text: isId
        ? "Tempat favorit untuk retreat keluarga. Suasana tenang, kamar tidur sangat bersih dan luas dengan interior kayu modern yang hangat. Pasti akan kembali lagi di liburan berikutnya!"
        : "Favorite retreat spot for our family. Peaceful atmosphere, spotless master bedrooms with warm modern wooden interiors. We will definitely return!",
      rating: 5,
      location: "Surabaya",
      date: "Juli 2026",
    },
    {
      name: "Christian & Friends",
      text: isId
        ? "Pengalaman gathering yang sempurna. Meja biliar, kolam ikan koi, dan area lounge outdoor sangat cocok untuk bersantai sore hari sambil menikmati udara sejuk pegunungan."
        : "Perfect gathering experience! The billiard table, koi pond, and outdoor lounge were ideal for unwinding in the cool mountain breeze.",
      rating: 5,
      location: "Semarang",
      date: "September 2026",
    },
  ];

  return (
    <section id="reviews-section" className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <Reveal variant="fadeUp" className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold block mb-2">
            {isId ? "✦ ULASAN & PENGALAMAN TAMU ✦" : "✦ GUEST EXPERIENCES ✦"}
          </span>
          <h2 className="text-h2 font-sans font-semibold">
            {isId ? "Kepuasan Tamu Vila Yura" : "What Our Guests Say"}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Reveal key={i} variant="fadeUp" delay={0.15 * (i + 1)}>
              <div className="h-full glass-morphism-dark gold-border-glow p-8 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-gold">
                      {[...Array(r.rating)].map((_, j) => (
                        <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-champagne-light px-3 py-1 rounded-full glass-badge font-sans font-medium">
                      ✓ Verified Guest
                    </span>
                  </div>

                  <p className="text-body font-sans text-white/85 italic leading-relaxed mb-6 font-light">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/20 flex justify-between items-end">
                  <div>
                    <h4 className="font-sans font-semibold text-white text-base">{r.name}</h4>
                    <span className="text-xs font-sans text-white/60">{r.location}</span>
                  </div>
                  <span className="text-[11px] font-sans text-gold/80 font-medium">{r.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

