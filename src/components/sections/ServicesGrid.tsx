import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
}

export function ServicesGrid({
  title = "Nasze usługi",
  subtitle,
  services,
}: ServicesGridProps) {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <Card key={service.href} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
