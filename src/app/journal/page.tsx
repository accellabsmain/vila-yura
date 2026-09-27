import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

export default function Page() {
  return (
    <main className="pt-40 pb-24 min-h-screen flex items-center justify-center text-center">
      <Container>
        <Reveal variant="fadeUp">
          <h1 className="text-h2 font-heading mb-6 uppercase">Coming Soon</h1>
          <p className="text-body max-w-xl mx-auto">This section is currently being crafted to bring you an interactive and tailored experience.</p>
        </Reveal>
      </Container>
    </main>
  );
}
