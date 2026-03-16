import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/PhoneButton";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CtaSection({
  title = "Potrzebujesz pomocy? Zadzwoń lub napisz",
  subtitle = "Skontaktuj się z nami — przygotujemy wycenę i dobierzemy rozwiązanie dopasowane do Twoich potrzeb.",
  ctaText = "Zapytaj o wycenę",
  ctaHref = "/kontakt",
}: CtaSectionProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900/40 to-dark-900 border border-primary-800/30 px-8 py-16 md:px-16 text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-600/10 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={ctaHref} size="lg">
                {ctaText}
              </Button>
              <PhoneButton className="text-lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
