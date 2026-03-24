import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CtaSection } from "@/components/sections/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "O firmie Czarkom — doświadczenie, lokalność, profesjonalizm",
  description:
    "Czarkom to doświadczona firma elektryczna z Podkarpacia. Instalacje, przeglądy, monitoring, automatyka — Rzeszów, Krosno, Jasło i okolice.",
  path: "/o-firmie",
});

const breadcrumbs = [{ name: "O firmie", href: "/o-firmie" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Strona główna", href: "/" }, ...breadcrumbs])} />

      <section className="section-padding">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O firmie Czarkom
            </h1>
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              Czarkom to firma z doświadczeniem, która łączy wiedzę techniczną z
              konkretnym podejściem do klienta. Specjalizujemy się w instalacjach
              elektrycznych, przeglądach, pomiarach, monitoringu CCTV i automatyce
              budynkowej.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Czym się zajmujemy
                </h2>
                <p className="text-dark-300 leading-relaxed mb-4">
                  Działamy w 4 głównych obszarach: elektryka i instalacje (NN i SN),
                  przeglądy i pomiary z dokumentacją, monitoring CCTV oraz automatyka
                  budynkowa i smart home. Każda usługa jest realizowana kompleksowo —
                  od konsultacji, przez realizację, po dokumentację i odbiór.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Gdzie działamy
                </h2>
                <p className="text-dark-300 leading-relaxed mb-4">
                  Obsługujemy Rzeszów, Krosno, Jasło i okoliczne miejscowości.
                  Działamo lokalnie — znamy realia, szybko dojeżdżamy i budujemy
                  relacje z klientami na lata.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Nasze podejście
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Profesjonalizm",
                      text: "Uprawniony zespół, prace zgodne z normami, dokumentacja po każdym zleceniu.",
                    },
                    {
                      title: "Jasna komunikacja",
                      text: "Wyjaśniamy prostym językiem. Wiesz, co robimy, dlaczego i za ile.",
                    },
                    {
                      title: "Lokalność",
                      text: "Nie jesteśmy firmą z drugiego końca kraju. Działamy tu, na Podkarpaciu.",
                    },
                    {
                      title: "Terminowość",
                      text: "Szanujemy Twój czas. Ustalamy terminy i ich dotrzymujemy.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-xl bg-dark-900/50 border border-dark-800"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Partnerstwo z Hikvision
                </h2>
                <p className="text-dark-300 leading-relaxed mb-4">
                  W zakresie monitoringu CCTV działamy w ramach partnerstwa z Hikvision
                  — globalnym liderem systemów monitoringu wizyjnego. Daje nam to dostęp
                  do profesjonalnego zaplecza technicznego, szkoleń i wsparcia producenta
                  przy projektowaniu i wdrażaniu systemów kamer.
                </p>
                <Link
                  href="/partner-hikvision/"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  Dowiedz się więcej o partnerstwie →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
