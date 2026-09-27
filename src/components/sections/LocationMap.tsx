import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";

export function LocationMap({ locale }: { locale: string }) {
  const isId = locale === 'id';
  
  return (
    <section className="py-24 bg-white">
      <Container>
        <Reveal variant="fadeUp" className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase mb-4 text-olive">
            {isId ? "Lokasi Kami" : "Our Location"}
          </h2>
          <h3 className="text-h2 font-heading">
            {isId ? "Temukan Vila Yura" : "Find Vila Yura"}
          </h3>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Jl. Pancot Lor No.rt02/05, Jetis, Kalisoro, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792
          </p>
        </Reveal>
        
        <Reveal variant="fadeUp" delay={0.2} className="w-full h-[500px] rounded-2xl overflow-hidden relative shadow-md">
          {/* Embedding a simple Google Maps iframe for Tawangmangu using coordinates */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.15816912345!2d111.1418094!3d-7.6579629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzknMjguNyJTIDExMcKwMDgnMzAuNSJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <a 
              href="https://www.google.com/maps/place/Villa+yura/@-7.6579629,111.1418094,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-olive transition-colors whitespace-nowrap shadow-lg"
            >
              {isId ? "Buka di Google Maps" : "Open in Google Maps"}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
