import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconList } from "@/components/ui/IconList";

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits: string[];
}

export function BenefitsSection({
  title = "Korzyści",
  subtitle,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title={title} subtitle={subtitle} centered={false} />
          </div>
          <div>
            <IconList items={benefits} />
          </div>
        </div>
      </Container>
    </section>
  );
}
