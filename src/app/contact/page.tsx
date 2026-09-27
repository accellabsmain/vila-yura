import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { getMessages } from "@/lib/i18n";
import { Locale } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const loc: Locale = "id";
  const messages = getMessages(loc);
  
  return {
    title: messages.nav.contact,
  };
}

export default function ContactPage() {
  const loc: Locale = "id";
  const messages = getMessages(loc);

  return (
    <main className="pt-36 pb-32 min-h-screen bg-cream">
      <Container>
        <Reveal variant="fadeUp" className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium block mb-3">
            ✦ GET IN TOUCH ✦
          </span>
          <h1 className="text-h1 font-heading text-charcoal font-medium mb-4">
            {messages.nav.contact}
          </h1>
          <p className="text-body text-charcoal/80 text-lg font-light leading-relaxed">
            {loc === "id"
              ? "Hubungi tim kami untuk pertanyaan, penawaran khusus, atau bantuan reservasi Vila Yura."
              : "Reach out to our dedicated concierge team for inquiries or booking assistance."}
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.2}>
          <ContactForm messages={messages.form} />
        </Reveal>
      </Container>
      <FloatingWhatsApp locale={loc} />
    </main>
  );
}
