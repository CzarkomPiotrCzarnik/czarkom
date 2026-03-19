import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Container } from "@/components/layout/Container";

interface HeroSectionProps {
  h1: string;
  subtitle: string;
  ctaHref?: string;
  ctaText?: string;
  showPhone?: boolean;
}

export function HeroSection({
  h1,
  subtitle,
  ctaHref = "/kontakt",
  ctaText = "Zapytaj o wycenę",
  showPhone = true,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-900 to-dark-950 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
            <Button href="/kontakt/" variant="outline" size="lg">
              Umów przegląd
            </Button>
          </div>
          {showPhone && (
            <div className="mt-8">
              <PhoneButton className="text-lg" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
