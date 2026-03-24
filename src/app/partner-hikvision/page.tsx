import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = generatePageMetadata({
  title: "Partner Hikvision — monitoring CCTV i kamery | CZARKOM",
  description:
    "CZARKOM działa w ramach partnerstwa z Hikvision. Projektujemy, montujemy i serwisujemy systemy monitoringu CCTV dla firm, domów i wspólnot. Rzeszów, Krosno, Jasło.",
  path: "/partner-hikvision",
});

const hikvisionFaq = [
  {
    question: "Co oznacza partnerstwo CZARKOM z Hikvision?",
    answer:
      "Partnerstwo z Hikvision oznacza, że CZARKOM ma dostęp do profesjonalnego zaplecza technicznego, szkoleń i wsparcia producenta. Dzięki temu możemy oferować sprawdzone rozwiązania CCTV, najnowsze technologie i pewność, że system monitoringu jest wdrożony zgodnie z wytycznymi producenta.",
  },
  {
    question: "Jakie kamery Hikvision montuje CZARKOM?",
    answer:
      "Montujemy pełną gamę kamer Hikvision — od kompaktowych kamer do domu, przez kamery kopułkowe do biur i sklepów, po zaawansowane kamery obrotowe PTZ do obiektów przemysłowych. Dobieramy sprzęt indywidualnie do potrzeb klienta i specyfiki obiektu.",
  },
  {
    question: "Czy mogę podglądać kamery Hikvision zdalnie z telefonu?",
    answer:
      "Tak. Konfigurujemy zdalny podgląd kamer Hikvision przez aplikację Hik-Connect na smartfonie i tablecie. Możesz monitorować obraz na żywo, przeglądać nagrania i otrzymywać powiadomienia o zdarzeniach — z dowolnego miejsca na świecie.",
  },
  {
    question: "Dla kogo jest monitoring Hikvision?",
    answer:
      "Systemy monitoringu Hikvision sprawdzają się wszędzie: w domach jednorodzinnych, firmach, sklepach, magazynach, wspólnotach mieszkaniowych, biurach, placach manewrowych i obiektach przemysłowych. Rozwiązania Hikvision są skalowalne — od 2 kamer po rozbudowane systemy z dziesiątkami punktów obserwacji.",
  },
  {
    question: "Ile kosztuje montaż monitoringu Hikvision?",
    answer:
      "Koszt zależy od liczby kamer, typu obiektywów, długości okablowania i stopnia zaawansowania systemu. Po bezpłatnej konsultacji przygotowujemy szczegółową wycenę dopasowaną do potrzeb i budżetu. Skontaktuj się z nami — wycena jest bezpłatna i niezobowiązująca.",
  },
  {
    question: "Czy CZARKOM serwisuje i konfiguruje istniejące systemy Hikvision?",
    answer:
      "Tak. Oprócz nowych instalacji zajmujemy się serwisem, rozbudową i rekonfiguracją istniejących systemów monitoringu Hikvision. Naprawiamy usterki, aktualizujemy oprogramowanie rejestratorów, dodajemy nowe kamery i optymalizujemy ustawienia obrazu.",
  },
  {
    question: "Jaki jest obszar działania CZARKOM?",
    answer:
      "Obsługujemy klientów w Rzeszowie, Krośnie, Jaśle i okolicznych miejscowościach na Podkarpaciu. W przypadku większych projektów jesteśmy otwarci na realizacje w szerszym promieniu.",
  },
];

const breadcrumbs = [
  { name: "Partner Hikvision", href: "/partner-hikvision" },
];

const services = [
  {
    title: "Projektowanie systemów CCTV",
    description:
      "Analizujemy obiekt, dobieramy kamery i rejestratory, planujemy trasy kablowe i punkty montażu — tak, aby system był skuteczny i optymalny kosztowo.",
    icon: "📐",
  },
  {
    title: "Montaż kamer i rejestratorów",
    description:
      "Profesjonalna instalacja kamer Hikvision — wewnętrznych i zewnętrznych. Okablowanie strukturalne, zasilanie, rejestrator, dyski i pełna konfiguracja.",
    icon: "📹",
  },
  {
    title: "Konfiguracja zdalnego podglądu",
    description:
      "Ustawiamy dostęp do kamer z telefonu, tabletu i komputera. Aplikacja Hik-Connect, powiadomienia push, podgląd na żywo i odtwarzanie nagrań.",
    icon: "📱",
  },
  {
    title: "Serwis i rozbudowa monitoringu",
    description:
      "Naprawy, wymiana kamer, aktualizacje firmware, rozbudowa systemu o nowe punkty, optymalizacja ustawień obrazu i detekcji.",
    icon: "🔧",
  },
  {
    title: "Szkolenie użytkowników",
    description:
      "Po instalacji przeprowadzamy szkolenie z obsługi systemu — odtwarzanie nagrań, eksport materiału, zarządzanie użytkownikami i podstawowa diagnostyka.",
    icon: "🎓",
  },
  {
    title: "Monitoring dla firm i wspólnot",
    description:
      "Rozwiązania dopasowane do specyfiki obiektu — sklepy, biura, magazyny, wspólnoty mieszkaniowe, parkingi, place manewrowe.",
    icon: "🏢",
  },
];

const benefits = [
  {
    title: "Sprawdzony sprzęt Hikvision",
    description:
      "Kamery i rejestratory od światowego lidera rynku CCTV. Niezawodność, wysoka jakość obrazu i zaawansowane funkcje analityczne.",
  },
  {
    title: "Kompleksowa realizacja",
    description:
      "Od projektu, przez okablowanie i montaż, po konfigurację i szkolenie. Wszystko z jednej ręki — bez szukania kolejnych ekip.",
  },
  {
    title: "Zdalny podgląd 24/7",
    description:
      "Kontroluj swój obiekt z dowolnego miejsca. Podgląd z telefonu, powiadomienia o zdarzeniach, dostęp do nagrań w chmurze lub na rejestratorze.",
  },
  {
    title: "Wsparcie techniczne producenta",
    description:
      "Jako partner Hikvision mamy dostęp do szkoleń, aktualizacji i wsparcia technicznego — Twój system jest zawsze aktualny i sprawny.",
  },
  {
    title: "Doświadczenie i lokalność",
    description:
      "Znamy specyfikę obiektów w regionie. Działamy szybko, jesteśmy blisko i odpowiadamy za jakość wykonania.",
  },
  {
    title: "Gwarancja i serwis",
    description:
      "Zapewniamy gwarancję na wykonaną instalację. W razie potrzeby — szybki serwis, diagnostyka i rozbudowa systemu.",
  },
];

export default function PartnerHikvisionPage() {
  return (
    <>
      <JsonLd data={faqSchema(hikvisionFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strona główna", href: "/" },
          ...breadcrumbs,
        ])}
      />
      <JsonLd
        data={serviceSchema(
          "Montaż i serwis monitoringu CCTV Hikvision",
          "Projektowanie, montaż, konfiguracja i serwis systemów monitoringu wizyjnego CCTV opartych o rozwiązania Hikvision. Kompleksowa obsługa dla firm, domów i wspólnot — Rzeszów, Krosno, Jasło.",
          `${siteConfig.url}/partner-hikvision/`
        )}
      />

      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-900 to-dark-950 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-900/40 border border-primary-800/30 rounded-full mb-4">
                Partnerstwo technologiczne
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                CZARKOM — partner Hikvision
              </h1>
              <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-2xl leading-relaxed">
                Projektujemy, montujemy i serwisujemy nowoczesne systemy monitoringu CCTV
                oparte o rozwiązania Hikvision. Profesjonalne wdrożenia dla firm, domów
                i wspólnot mieszkaniowych w Rzeszowie, Krośnie, Jaśle i okolicach.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button href="/kontakt/" size="lg">
                  Zapytaj o wycenę
                </Button>
                <Button href="/monitoring-cctv/" variant="outline" size="lg">
                  Zobacz usługi CCTV
                </Button>
              </div>
              <div className="mt-8">
                <PhoneButton className="text-lg" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/partners/czarkom-partner-hikvision.png"
                alt="CZARKOM — partner Hikvision. Logo partnerstwa w zakresie systemów monitoringu CCTV"
                width={480}
                height={320}
                className="rounded-2xl max-w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* O partnerstwie */}
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Partnerstwo z Hikvision — co to oznacza dla Ciebie?"
              subtitle="Współpraca z globalnym liderem branży CCTV przekłada się na jakość i niezawodność każdej realizacji."
            />
            <div className="mt-8 text-dark-300 space-y-4 text-left md:text-center leading-relaxed">
              <p>
                Firma CZARKOM działa w ramach partnerstwa z{" "}
                <a
                  href="https://www.hikvision.com/europe/"
                  target="_blank"
                  rel="noopener"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  Hikvision
                </a>
                {" "}— światowym liderem
                w dziedzinie systemów monitoringu wizyjnego i bezpieczeństwa obiektów.
                Oznacza to dostęp do profesjonalnego zaplecza technicznego, regularnych
                szkoleń oraz wsparcia producenta na każdym etapie realizacji.
              </p>
              <p>
                Dla naszych klientów partnerstwo z Hikvision to przede wszystkim pewność,
                że system monitoringu jest projektowany i wdrażany z wykorzystaniem
                sprawdzonych, najnowszych technologii — od kamer o wysokiej rozdzielczości,
                przez inteligentną analitykę obrazu, po niezawodne rejestratory i platformy
                do{" "}
                <a
                  href="https://www.hikvision.com/europe/products/software/hik-connect/"
                  target="_blank"
                  rel="noopener"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  zdalnego podglądu
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Usługi CCTV */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <SectionHeading
            title="Usługi monitoringu CCTV"
            subtitle="Kompleksowa obsługa — od projektu do serwisu. Wszystko oparte o rozwiązania Hikvision."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-dark-900 border border-dark-800 rounded-2xl p-6 hover:border-primary-800/50 transition-colors"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Korzyści */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Dlaczego warto wybrać CZARKOM?"
            subtitle="Łączymy doświadczenie lokalnego instalatora z zapleczem technologicznym globalnego producenta."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dla kogo */}
      <section className="section-padding bg-gradient-to-b from-primary-950/30 to-dark-950">
        <Container>
          <SectionHeading
            title="Dla kogo jest monitoring Hikvision?"
            subtitle="Rozwiązania dopasowane do różnych typów obiektów i potrzeb."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                target: "Domy i posesje",
                desc: "Ochrona rodziny, mienia i otoczenia domu. Kamery zewnętrzne i wewnętrzne z podglądem na telefonie.",
                icon: "🏠",
              },
              {
                target: "Firmy i biura",
                desc: "Kontrola dostępu, monitoring pracowników, ochrona majątku firmowego. Systemy skalowalne wraz z rozwojem firmy.",
                icon: "🏢",
              },
              {
                target: "Wspólnoty mieszkaniowe",
                desc: "Monitoring klatek, parkingów, placów zabaw. Poprawa bezpieczeństwa mieszkańców i zmniejszenie aktów wandalizmu.",
                icon: "🏘️",
              },
              {
                target: "Sklepy i lokale",
                desc: "Kontrola punktów sprzedaży, prewencja kradzieży, nagrania z kas — zgodne z wymaganiami ubezpieczycieli.",
                icon: "🏪",
              },
            ].map((item) => (
              <div
                key={item.target}
                className="bg-dark-900/50 border border-dark-800 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.target}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Proces współpracy */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Jak wygląda współpraca?"
            subtitle="Od pierwszego kontaktu do działającego systemu — krok po kroku."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Konsultacja",
                desc: "Omawiamy potrzeby, analizujemy obiekt i określamy zakres instalacji.",
              },
              {
                step: "02",
                title: "Projekt i wycena",
                desc: "Dobieramy kamery, rejestrator i infrastrukturę. Przygotowujemy przejrzystą wycenę.",
              },
              {
                step: "03",
                title: "Montaż i konfiguracja",
                desc: "Realizujemy instalację — okablowanie, montaż kamer, konfiguracja rejestratora i zdalnego dostępu.",
              },
              {
                step: "04",
                title: "Szkolenie i odbiór",
                desc: "Uczymy obsługi systemu, przekazujemy dokumentację i zapewniamy wsparcie po wdrożeniu.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-primary-600/20 mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Najczęściej zadawane pytania o monitoring Hikvision"
        subtitle="Odpowiedzi na pytania, które najczęściej słyszymy od klientów."
        items={hikvisionFaq}
      />

      {/* Linkowanie wewnętrzne */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Powiązane usługi"
            subtitle="Monitoring CCTV to element szerszej oferty CZARKOM."
          />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { label: "Monitoring CCTV", href: "/monitoring-cctv/" },
              { label: "Monitoring Rzeszów", href: "/monitoring-rzeszow/" },
              { label: "Monitoring Krosno", href: "/monitoring-krosno/" },
              { label: "Monitoring Jasło", href: "/monitoring-jaslo/" },
              { label: "Instalacje elektryczne", href: "/instalacje-elektryczne/" },
              { label: "Automatyka", href: "/automatyka/" },
              { label: "Sieci i internet", href: "/sieci-i-internet/" },
              { label: "Smart Home", href: "/smart-home/" },
              { label: "Kontakt", href: "/kontakt/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block px-4 py-2 text-sm font-medium text-dark-300 bg-dark-900 border border-dark-800 rounded-full hover:border-primary-800/50 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Potrzebujesz monitoringu? Porozmawiajmy"
        subtitle="Zadzwoń lub napisz — bezpłatnie doradzimy, dobierzemy sprzęt Hikvision i przygotujemy wycenę dopasowaną do Twojego obiektu."
        ctaText="Zapytaj o wycenę monitoringu"
        ctaHref="/kontakt/"
      />
    </>
  );
}
