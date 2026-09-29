import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  const isId = true;
  return {
    title: isId ? "Syarat & Ketentuan" : "Terms of Service",
    description: isId
      ? "Syarat dan Ketentuan reservasi dan aturan menginap di Yura Villa Tawangmangu."
      : "Terms of Service and stay guidelines for Yura Villa Tawangmangu.",
  };
}

export default function TermsPage() {
  const isId = true;

  return (
    <main className="pt-36 pb-24 min-h-screen bg-cream text-charcoal font-sans">
      <Container className="max-w-4xl">
        <Reveal variant="fadeUp" className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-semibold block mb-3">
            ✦ TERMS OF STAY ✦
          </span>
          <h1 className="text-h2 font-sans font-bold text-charcoal mb-4">
            {isId ? "Syarat & Ketentuan Yura Villa" : "Yura Villa Terms of Service"}
          </h1>
          <p className="text-xs text-charcoal/60 uppercase tracking-widest">
            {isId ? "Terakhir Diperbarui: September 2026" : "Last Updated: September 2026"}
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.2} className="space-y-8 text-body text-charcoal/85 leading-relaxed font-light">
          {isId ? (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">1. Ketentuan Umum Menginap</h2>
                <p>
                  Dengan melakukan reservasi di Yura Villa Tawangmangu, tamu dianggap telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan yang berlaku demi menjaga kenyamanan, keamanan, dan ketenangan bersama di area sanctuary.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">2. Waktu Check-in & Check-out</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Waktu standar Check-in: Mulai pukul 14.00 WIB.</li>
                  <li>Waktu standar Check-out: Maksimal pukul 12.00 WIB.</li>
                  <li>Permintaan early check-in atau late check-out bergantung pada ketersediaan vila dan konfirmasi tim concierge.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">3. Kapasitas & Penggunaan Fasilitas</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Yura Villa memiliki 5 kamar tidur suite privat dengan kapasitas ideal hingga 15+ tamu.</li>
                  <li>Fasilitas kolam renang privat, meja biliar, dan area lounge khusus diperuntukkan bagi tamu terdaftar.</li>
                  <li>Tamu diharapkan menjaga kebersihan dan tidak merusak fasilitas vila.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">4. Ketenangan & Privasi Lingkungan</h2>
                <p>
                  Yura Villa dirancang sebagai tempat istirahat dan healing sejati. Tamu dimohon untuk menjaga ketenangan lingkungan pegunungan Tawangmangu dan membatasi suara keras setelah pukul 22.00 WIB demi kenyamanan sekitar.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">5. Kebijakan Pembatalan & Perubahan Tanggal</h2>
                <p>
                  Perubahan jadwal atau pembatalan reservasi dapat dilakukan dengan menghubungi tim concierge kami sesuai dengan syarat pembatalan yang disepakati pada saat konfirmasi pemesanan.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">1. General Stay Conditions</h2>
                <p>
                  By completing a reservation at Yura Villa Tawangmangu, guests agree to abide by these Terms of Service to ensure a peaceful, safe, and memorable restorative stay for everyone.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">2. Check-in & Check-out Timings</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Standard Check-in time: From 14:00 WIB onwards.</li>
                  <li>Standard Check-out time: By 12:00 WIB.</li>
                  <li>Requests for early check-in or late check-out are subject to availability and concierge confirmation.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">3. Capacity & Amenity Usage</h2>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Yura Villa features 5 executive bedroom suites, comfortably hosting up to 15+ guests.</li>
                  <li>Private pool, billiard table, and living lounges are strictly for registered staying guests.</li>
                  <li>Guests are kindly requested to take care of all villa amenities.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">4. Peace & Environment Respect</h2>
                <p>
                  Yura Villa is dedicated to deep relaxation and healing. Guests are asked to respect the serene mountain environment of Tawangmangu and keep noise levels low after 22:00 WIB.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-charcoal">5. Cancellation & Modifications</h2>
                <p>
                  Booking modifications or cancellations can be processed by contacting our concierge team in accordance with the booking terms agreed upon during reservation.
                </p>
              </section>
            </>
          )}
        </Reveal>
      </Container>
    </main>
  );
}
