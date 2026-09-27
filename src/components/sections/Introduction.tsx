import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";
import Image from "next/image";

export function Introduction({ title, text, subtitle }: { title: string; text: string; subtitle?: string }) {
  return (
    <section id="about-section" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal variant="fadeUp">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-medium">
                  {subtitle || "Kemewahan & Ketenangan"}
                </span>
              </div>
              <h2 className="text-h2 font-heading text-charcoal font-medium leading-tight">
                {title}
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <p className="text-body text-charcoal/80 leading-relaxed text-lg font-light">
                {text}
              </p>
            </Reveal>

            {/* Feature List */}
            <Reveal variant="fadeUp" delay={0.3}>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gold/20">
                <div className="space-y-1">
                  <span className="text-2xl font-heading font-semibold text-charcoal">100%</span>
                  <p className="text-xs uppercase tracking-wider text-olive font-medium">Privasi Terjaga</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-heading font-semibold text-charcoal">Tawangmangu</span>
                  <p className="text-xs uppercase tracking-wider text-olive font-medium">Udara Sejuk Pegunungan</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Immersive Photo Composition */}
          <div className="lg:col-span-6 relative">
            <Reveal variant="fadeUp" delay={0.4}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl gold-border-glow">
                <Image
                  src="/images/depan2.jpg"
                  alt="Vila Yura Exterior Depan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark backdrop-blur-md border border-white/10 text-white">
                  <span className="text-xs text-gold uppercase tracking-widest block mb-1">Vila Yura Sanctuary</span>
                  <p className="text-sm font-light">Arsitektur elegan dengan sentuhan kenyamanan bintang lima.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
