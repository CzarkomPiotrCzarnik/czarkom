import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { generalFaq } from "@/data/faq";

export const metadata: Metadata = generatePageMetadata({
  title: "FAQ — najczęściej zadawane pytania | Czarkom",
  description:
    "Odpowiedzi na najczęstsze pytania o przeglądy elektryczne, pomiary, protokoły, monitoring CCTV i automatykę. Czarkom — Rzeszów, Krosno, Jasło.",
  path: "/faq",
});

const breadcrumbs = [{ name: "FAQ", href: "/faq" }];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaq)} />
      <JsonLd data={breadcrumbSchema([{ name: "Strona główna", href: "/" }, ...breadcrumbs])} />

      <section className="pt-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Najczęściej zadawane pytania
          </h1>
          <p className="text-lg text-dark-300">
            Odpowiedzi na pytania, które słyszymy najczęściej. Jeśli nie
            znajdziesz odpowiedzi — zadzwoń lub napisz.
          </p>
        </Container>
      </section>

      <FaqSection items={generalFaq} />

      <CtaSection
        title="Nie znalazłeś odpowiedzi?"
        subtitle="Skontaktuj się z nami — chętnie odpowiemy na Twoje pytanie."
      />
    </>
  );
}
