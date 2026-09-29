import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  const isId = true;
  return {
    title: isId ? "Kebijakan Privasi" : "Privacy Policy",
    description: isId
      ? "Kebijakan Privasi Yura Villa mengenai perlindungan data pribadi dan privasi tamu menginap di Tawangmangu."
      : "Privacy Policy of Yura Villa regarding personal data protection and guest privacy in Tawangmangu.",
  };
}

export default function PrivacyPage() {
  const isId = true;

  return (
    <main className="pt-36 pb-24 min-h-screen bg-cream text-charcoal font-sans">
      <Container className="max-w-4xl">
        <Reveal variant="fadeUp" className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-semibold block mb-3">
            ✦ LEGAL & PRIVACY ✦
          </span>
          <h1 className="text-h2 font-sans font-bold text-charcoal mb-4">
            {isId ? "Kebijakan Privasi Yura Villa" : "Yura Villa Privacy Policy"}
          </h1>
          <p className="text-xs text-charcoal/60 uppercase tracking-widest">
            {isId ? "Terakhir Diperbarui: September 2026" : "Last Updated: September 2026"}
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.2} className="space-y-8 text-body text-charcoal/85 leading-relaxed font-light">
          {isId ? (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">1. Komitmen Privasi Kami</h2>
                <p>
                  Di Yura Villa Tawangmangu, kami sangat menghargai privasi dan keamanan informasi pribadi setiap tamu. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi yang Anda berikan saat melakukan reservasi atau berkomunikasi dengan layanan concierge kami.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">2. Informasi yang Kami Kumpulkan</h2>
                <p>
                  Kami hanya mengumpulkan informasi yang diperlukan untuk pemesanan dan kenyamanan Anda menginap, meliputi:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Nama lengkap dan informasi kontak (nomor HP/WhatsApp, alamat email).</li>
                  <li>Rincian tanggal reservasi dan jumlah tamu menginap.</li>
                  <li>Catatan permintaan khusus atau preferensi fasilitas selama menginap di vila.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">3. Penggunaan Informasi</h2>
                <p>Informasi Anda kami gunakan semata-mata untuk:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Memproses konfirmasi pemesanan dan koordinasi penjemputan/check-in.</li>
                  <li>Memberikan layanan concierge 24/7 dan merespons pertanyaan Anda.</li>
                  <li>Memastikan keamanan serta privasi maksimal di area vila selama Anda menginap.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">4. Kerahasiaan & Keamanan Data</h2>
                <p>
                  Yura Villa menjamin bahwa data pribadi Anda tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak ketiga mana pun tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum yang berlaku di Republik Indonesia.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">5. Kontak Kami</h2>
                <p>
                  Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi tim kami melalui email di{" "}
                  <a href="mailto:contact@vilayura.com" className="text-gold font-medium hover:underline">
                    contact@vilayura.com
                  </a>{" "}
                  atau WhatsApp concierge resmi kami.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">1. Our Privacy Commitment</h2>
                <p>
                  At Yura Villa Tawangmangu, we deeply value the privacy and security of every guest’s personal information. This Privacy Policy outlines how we collect, use, and safeguard the personal data provided when booking or communicating with our concierge team.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">2. Information We Collect</h2>
                <p>We collect essential information required to ensure a smooth stay experience, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Full name and contact details (WhatsApp number, email address).</li>
                  <li>Reservation stay dates and number of guests.</li>
                  <li>Special requests or amenity preferences for your stay at Yura Villa.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">3. Use of Information</h2>
                <p>Your information is used exclusively to:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Process booking confirmations and facilitate seamless check-in.</li>
                  <li>Provide 24/7 concierge assistance and answer inquiries.</li>
                  <li>Ensure maximum security and personal privacy at the sanctuary.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">4. Data Confidentiality & Security</h2>
                <p>
                  Yura Villa guarantees that your personal information will never be sold, rented, or shared with third parties without your explicit consent, unless required by applicable law in Indonesia.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">5. Contact Us</h2>
                <p>
                  If you have any questions regarding this Privacy Policy, please contact our team via email at{" "}
                  <a href="mailto:contact@vilayura.com" className="text-gold font-medium hover:underline">
                    contact@vilayura.com
                  </a>{" "}
                  or through our official concierge WhatsApp.
                </p>
              </section>
            </>
          )}
        </Reveal>
      </Container>
    </main>
  );
}
