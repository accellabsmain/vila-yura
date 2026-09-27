import { Reveal } from "../motion/Reveal";
import { StaggerContainer, StaggerItem } from "../motion/StaggerContainer";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { VillaCard, VillaCardProps } from "../villa/VillaCard";
import { VillaGrid } from "../villa/VillaGrid";

interface FeaturedVillasProps {
  title: string;
  subtitle: string;
  villas: VillaCardProps[];
  ctaText: string;
}

export function FeaturedVillas({ title, subtitle, villas, ctaText }: FeaturedVillasProps) {
  return (
    <section className="py-24 md:py-32 bg-white-soft rounded-[28px] my-12 mx-4 md:mx-6">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeading title={title} subtitle={subtitle} />
            <Button variant="outline" className="hidden md:inline-flex">{ctaText}</Button>
          </div>
        </Reveal>
        
        <StaggerContainer>
          <VillaGrid>
            {villas.map((villa, i) => (
              <StaggerItem key={i}>
                <VillaCard {...villa} />
              </StaggerItem>
            ))}
          </VillaGrid>
        </StaggerContainer>
        
        <Reveal className="mt-12 flex justify-center md:hidden">
          <Button variant="outline" className="w-full">{ctaText}</Button>
        </Reveal>
      </Container>
    </section>
  );
}
