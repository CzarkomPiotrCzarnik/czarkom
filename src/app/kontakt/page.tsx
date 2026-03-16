import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt — Czarkom | Rzeszów, Krosno, Jasło",
  description:
    "Skontaktuj się z Czarkom — telefon, e-mail, formularz kontaktowy. Elektryk, przeglądy, monitoring, automatyka. Rzeszów, Krosno, Jasło.",
  path: "/kontakt",
});

const breadcrumbs = [{ name: "Kontakt", href: "/kontakt" }];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Strona główna", href: "/" }, ...breadcrumbs])} />

      <section className="section-padding">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kontakt
          </h1>
          <p className="text-lg text-dark-300 mb-8">
            Potrzebujesz wyceny, chcesz umówić przegląd lub masz pytanie? Zadzwoń, napisz lub wypełnij formularz.
          </p>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
