import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

export function AboutSnippet({ locale }: { locale: string }) {
  const isId = locale === "id";

  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal variant="fadeUp">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-sans font-semibold block mb-3">
              {isId ? "✦ TENTANG VILA YURA ✦" : "✦ ABOUT VILA YURA ✦"}
            </span>
            <h2 className="text-h2 font-sans font-semibold">
              {isId ? "Harmoni Alam & Tempat Peristirahatan Sejati" : "Harmony of Nature & Restorative Sanctuary"}
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <p className="text-body text-charcoal/80 text-lg sm:text-xl font-light leading-relaxed">
              {isId 
                ? "Terletak di kawasan Tawangmangu yang sejuk dan tenang, Vila Yura bukan sekadar tempat menginap, melainkan sebuah sanctuary untuk melepaskan beban dan memulihkan energi. Kami merancang setiap sudut vila dengan nuansa hangat dan privat, menciptakan tempat tinggal yang damai untuk liburan istirahat terbaik Anda."
                : "Nestled in the tranquil highlands of Tawangmangu, Vila Yura is more than just a getaway—it is a dedicated sanctuary for slow living and deep restorative rest. Every space is thoughtfully designed to offer peace of mind, privacy, and authentic healing for you and your family."}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
