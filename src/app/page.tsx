import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { LuxuryFacilities } from "@/components/sections/LuxuryFacilities";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Reviews } from "@/components/sections/Reviews";
import { LocationMap } from "@/components/sections/LocationMap";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getMessages } from "@/lib/i18n";
import { Locale } from "@/lib/constants";

export default function HomePage() {
  const loc: Locale = "id";
  const messages = getMessages(loc);

  return (
    <>
      <Hero
        title1={messages.hero.title1}
        title2={messages.hero.title2}
        title3={messages.hero.title3}
        subtitle={messages.hero.subtitle}
        ctaText={messages.hero.cta}
        image={{ src: "/images/depan1.jpg", alt: "Yura Villa Rest Sanctuary" }}
        locale={loc}
      />

      <Introduction
        subtitle="SANCTUARY HEALING DI TAWANGMANGU"
        title="PENGALAMAN ISTIRAHAT & HEALING SEJATI"
        text="Lepaskan penat dan pulihkan kebugaran jiwa serta raga Anda di Yura Villa. Terletak di perbukitan Tawangmangu yang sejuk, sanctuary privat kami menghadirkan ketenangan alam murni, 5 kamar tidur nyaman, kolam renang privat, lounge biliar, dan suasana kolam koi yang menenangkan."
      />

      <LuxuryFacilities locale={loc} />

      <AboutSnippet locale={loc} />

      <GalleryPreview locale={loc} />

      <Reviews locale={loc} />

      <LocationMap locale={loc} />

      <FinalCTA
        title="Temukan Ruang Tenang untuk Kembali Utuh."
        ctaText={messages.nav.book}
      />
    </>
  );
}

