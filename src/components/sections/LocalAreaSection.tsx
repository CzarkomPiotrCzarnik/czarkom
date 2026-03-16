import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LocalAreaSectionProps {
  city: string;
  areas: string[];
}

export function LocalAreaSection({ city, areas }: LocalAreaSectionProps) {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          title={`Obszar działania — ${city} i okolice`}
          subtitle={`Obsługujemy ${city} oraz okoliczne miejscowości. Szybki dojazd i elastyczne terminy.`}
        />
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {areas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm text-dark-300"
            >
              {area}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
