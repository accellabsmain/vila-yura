import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/constants";

interface FacilityItem {
  title: { en: string; id: string };
  desc: { en: string; id: string };
  image: string;
  tag: { en: string; id: string };
  features: { en: string[]; id: string[] };
}

const FACILITIES_FULL: FacilityItem[] = [
  {
    title: { en: "Private Swimming Pool", id: "Kolam Renang Privat Utama" },
    desc: {
      en: "Immerse yourself in our serene outdoor private pool surrounded by breathtaking mountain views and lush fresh air.",
      id: "Rasakan sensasi berenang di kolam renang outdoor privat berlatar pemandangan pegunungan Tawangmangu yang menyejukkan.",
    },
    image: "/images/kolamrenang1.jpg",
    tag: { en: "Outdoor Private Pool", id: "Kolam Renang Privat" },
    features: {
      en: ["Mountain Valley View", "Sun Loungers", "Kid-Friendly Steps", "Clean Natural Water"],
      id: ["Pemandangan Lembah", "Kursi Bersantai", "Kedalaman Bertingkat", "Air Bersih Pegunungan"],
    },
  },
  {
    title: { en: "Executive Living Lounge", id: "Ruang Lounge & Santai Keluarga" },
    desc: {
      en: "A spacious interior lounge designed for intimate gatherings, equipped with cozy sofas and warm ambient lighting.",
      id: "Ruang tamu interior luas yang didesain untuk momen kehangatan bersama keluarga, dilengkapi sofa empuk dan pencahayaan hangat.",
    },
    image: "/images/mainlounge.jpg",
    tag: { en: "Indoor Lounge", id: "Ruang Keluarga" },
    features: {
      en: ["Plush Seating", "High Ceiling Architecture", "Ambient Lighting", "Open Plan Connect"],
      id: ["Sofa Mewah", "Arsitektur Plafon Tinggi", "Pencahayaan Warm", "Konsep Terbuka"],
    },
  },
  {
    title: { en: "Private Billiard & Game Area", id: "Meja Biliar & Area Hiburan" },
    desc: {
      en: "Challenge your family and friends to a game of billiard in your private entertainment lounge.",
      id: "Nikmati permainan seru bersama kerabat di meja biliar standar profesional yang berada di area lounge privat.",
    },
    image: "/images/mejabl.jpg",
    tag: { en: "Entertainment", id: "Area Hiburan" },
    features: {
      en: ["Full-Size Billiard Table", "Cues & Balls Provided", "Private Lounge Seating"],
      id: ["Meja Biliar Standar", "Stik & Bola Lengkap", "Area Tempat Duduk Privat"],
    },
  },
  {
    title: { en: "5 Executive Bedrooms", id: "5 Kamar Tidur Executive" },
    desc: {
      en: "Rest peacefully in plush king-size beds crafted with high quality linens and soothing minimalist aesthetics.",
      id: "Istirahat maksimal di 5 kamar tidur berkelas dengan tempat tidur empuk, seprai kualitas tinggi, dan dekorasi estetik.",
    },
    image: "/images/kamarlandscape.jpg",
    tag: { en: "Bedrooms", id: "Kamar Tidur" },
    features: {
      en: ["King Beds", "Crisp Clean Linens", "Scenic Windows", "En-suite Bathrooms"],
      id: ["Kasur King Size", "Seprai Bersih Premium", "Jendela Pemandangan", "Kamar Mandi Dalam"],
    },
  },
  {
    title: { en: "Zen Koi Pond & Bonsai Garden", id: "Kolam Ikan Koi & Taman Bonsai" },
    desc: {
      en: "Experience tranquility listening to flowing water streams while feeding colorful koi fish in our garden.",
      id: "Nikmati keheningan alam ditemani suara air mengalir dan kolam ikan koi yang dikelilingi koleksi tanaman bonsai zen.",
    },
    image: "/images/kolamikan.jpg",
    tag: { en: "Zen Garden", id: "Taman Alam" },
    features: {
      en: ["Live Koi Fish", "Curated Bonsai Trees", "Relaxation Seating"],
      id: ["Ikan Koi Asli", "Koleksi Bonsai", "Area Duduk Taman"],
    },
  },
  {
    title: { en: "Private Carport & Access", id: "Area Carport & Akses Samping" },
    desc: {
      en: "Convenient parking facilities with multiple carport spots and easy side entry for hassle-free check in.",
      id: "Fasilitas parkir aman dengan kapasitas beberapa mobil serta akses pintu samping privat untuk kemudahan Anda.",
    },
    image: "/images/carpot.jpg",
    tag: { en: "Parking & Access", id: "Parkir & Akses" },
    features: {
      en: ["Multi-Vehicle Carport", "Private Side Entry", "24/7 Security Feel"],
      id: ["Parkir Beberapa Mobil", "Akses Pintu Samping", "Privasi Maksimal"],
    },
  },
];

export default function FacilitiesPage() {
  const isId = true;

  return (
    <main className="pt-36 pb-24 min-h-screen bg-cream">
      <Container>
        {/* Page Header */}
        <Reveal variant="fadeUp" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium block mb-3">
            ✦ EXCLUSIVE AMENITIES ✦
          </span>
          <h1 className="text-h1 font-heading text-charcoal font-medium mb-6">
            {isId ? "Fasilitas Vila Yura" : "Vila Yura Facilities"}
          </h1>
          <p className="text-body text-charcoal/80 text-lg font-light leading-relaxed">
            {isId
              ? "Setiap sudut dan fasilitas Vila Yura dirancang khusus untuk menjamin kenyamanan, privasi, dan kebahagiaan Anda selama menginap di Tawangmangu."
              : "Every space and feature at Vila Yura is tailored to ensure your complete privacy, relaxation, and memorable stay."}
          </p>
        </Reveal>

        {/* Facilities List */}
        <div className="space-y-16">
          {FACILITIES_FULL.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Reveal key={idx} variant="fadeUp">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-10 rounded-3xl glass-panel gold-border-glow ${isEven ? "" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Photo */}
                  <div className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl ${isEven ? "" : "lg:order-2"}`}>
                    <Image
                      src={item.image}
                      alt={isId ? item.title.id : item.title.en}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gold text-charcoal-dark shadow-lg">
                        {isId ? item.tag.id : item.tag.en}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                    <h2 className="text-h2 font-heading text-charcoal font-medium">
                      {isId ? item.title.id : item.title.en}
                    </h2>
                    <p className="text-body text-charcoal/80 font-light leading-relaxed">
                      {isId ? item.desc.id : item.desc.en}
                    </p>

                    {/* Features list */}
                    <div className="pt-4 border-t border-gold/20">
                      <h4 className="text-xs uppercase tracking-widest text-gold-dark font-medium mb-3">
                        {isId ? "Keunggulan Utama" : "Key Highlights"}
                      </h4>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-charcoal/90 font-medium">
                        {(isId ? item.features.id : item.features.en).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="text-gold">✦</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <Reveal variant="fadeUp" className="mt-20">
          <div className="p-12 rounded-3xl bg-charcoal text-white text-center gold-border-glow relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium block">
                ✦ TAWANGMANGU HIGHLANDS ✦
              </span>
              <h3 className="text-h2 font-heading">
                {isId ? "Ingin Menanyakan Detail Fasilitas?" : "Have Questions About Our Amenities?"}
              </h3>
              <p className="text-body text-white/80 font-light">
                {isId
                  ? "Tim kami siap menjawab pertanyaan Anda mengenai kapasitas, tata letak villa, dan booking."
                  : "Our concierge team is available to assist with any questions regarding villa layout and booking."}
              </p>
              <a
                href={getWhatsAppLink("Halo Vila Yura, saya ingin menanyakan detail fasilitas dan booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gold via-gold-light to-gold text-charcoal-dark font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
              >
                <span>{isId ? "Tanya Sekarang" : "Inquire Now"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
