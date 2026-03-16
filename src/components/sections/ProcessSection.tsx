import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProcessStep {
  step: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export function ProcessSection({
  title = "Jak wygląda współpraca?",
  subtitle,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600/20 text-primary-400 font-bold text-lg mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
