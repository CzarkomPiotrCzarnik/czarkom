import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HikvisionPartnerSection } from "@/components/sections/HikvisionPartnerSection";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { homepageFaq } from "@/data/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  keywords: [
    "elektryk Rzeszów",
    "elektryk Łańcut",
    "elektryk Krosno",
    "elektryk Sanok",
    "elektryk Jasło",
    "elektryk Dębica",
    "elektryk Mielec",
    "elektryk Przemyśl",
    "instalacje elektryczne",
    "przeglądy elektryczne",
    "monitoring CCTV",
    "kamery CCTV",
  ],
};

const mainServices = [
  {
    title: "Elektryk / Instalacje elektryczne",
    description:
      "Montaż, modernizacja i naprawa instalacji elektrycznych NN i SN. Domy, mieszkania, firmy.",
    href: "/elektryk",
    icon: "⚡",
  },
  {
    title: "Przeglądy elektryczne",
    description:
      "Przeglądy instalacji z pełną dokumentacją. Protokoły do ubezpieczenia, odbioru, wynajmu.",
    href: "/przeglady-elektryczne",
    icon: "🔍",
  },
  {
    title: "Pomiary elektryczne",
    description:
      "Pomiary ochronne — rezystancja izolacji, skuteczność ochrony, ciągłość przewodów.",
    href: "/pomiary-elektryczne",
    icon: "📏",
  },
  {
    title: "Protokoły elektryczne",
    description:
      "Czytelne protokoły z pomiarów — do odbioru, ubezpieczenia, kontroli, wynajmu.",
    href: "/protokoly-elektryczne",
    icon: "📋",
  },
  {
    title: "Monitoring CCTV",
    description:
      "Montaż kamer, rejestratory, podgląd z telefonu. Domy, firmy, posesje.",
    href: "/monitoring-cctv",
    icon: "📹",
  },
  {
    title: "Automatyka / Smart Home / BMS",
    description:
      "Inteligentne sterowanie oświetleniem, ogrzewaniem, roletami. Wygoda i oszczędność.",
    href: "/automatyka",
    icon: "⚙️",
  },
];

const priorityLinks = [
  { label: "Elektryk Rzeszów", href: "/elektryk-rzeszow/" },
  { label: "Elektryk Łańcut", href: "/elektryk-lancut/" },
  { label: "Elektryk Krosno", href: "/elektryk-krosno/" },
  { label: "Elektryk Sanok", href: "/elektryk-sanok/" },
  { label: "Elektryk Jasło", href: "/elektryk-jaslo/" },
  { label: "Elektryk Dębica", href: "/elektryk-debica/" },
  { label: "Elektryk Mielec", href: "/elektryk-mielec/" },
  { label: "Elektryk Przemyśl", href: "/elektryk-przemysl/" },
  { label: "Przeglądy Rzeszów", href: "/przeglady-elektryczne-rzeszow/" },
  { label: "Przeglądy Krosno", href: "/przeglady-elektryczne-krosno/" },
  { label: "Przeglądy Jasło", href: "/przeglady-elektryczne-jaslo/" },
  { label: "Monitoring Rzeszów", href: "/monitoring-rzeszow/" },
  { label: "Monitoring Krosno", href: "/monitoring-krosno/" },
  { label: "Monitoring Jasło", href: "/monitoring-jaslo/" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaq)} />

      <HeroSection
        h1="Elektryk, przeglądy elektryczne, monitoring CCTV i automatyka — Podkarpacie"
        subtitle="Instalacje NN i SN, pomiary i protokoły, kamery i monitoring, smart home i BMS. Działamy w Rzeszowie, Krośnie, Jaśle, Sanoku, Dębicy, Mielcu, Przemyślu, Łańcucie i okolicach."
      />

      <ServicesGrid
        title="Czym się zajmujemy"
        subtitle="4 filary usług Czarkom — od instalacji elektrycznych, przez przeglądy i pomiary, po monitoring i automatykę."
        services={mainServices}
      />

      {/* Highlighted section: przeglądy i protokoły */}
      <section className="section-padding bg-gradient-to-b from-primary-950/30 to-dark-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-900/40 border border-primary-800/30 rounded-full mb-4">
                Najważniejsza usługa
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Przeglądy elektryczne i protokoły pomiarowe
              </h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                Przegląd instalacji elektrycznej to nie formalność — to realna
                ochrona domu, rodziny i majątku. Protokół z pomiarów może być
                potrzebny przy odbiorze, kontroli, wynajmie, sprzedaży
                nieruchomości i w sprawach ubezpieczeniowych.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Wykrywamy nieprawidłowości i jasno wskazujemy, co poprawić",
                  "Czytelna dokumentacja zrozumiała dla każdego",
                  "Protokół zgodny z wymogami Prawa budowlanego",
                  "Szybki termin — najczęściej w ciągu kilku dni",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-dark-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/przeglady-elektryczne/" size="lg">
                  Umów przegląd
                </Button>
                <Button href="/protokoly-elektryczne/" variant="outline">
                  Potrzebuję protokół
                </Button>
              </div>
            </div>
            <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Dla kogo jest przegląd?
              </h3>
              <div className="space-y-4">
                {[
                  { who: "Właściciel domu", why: "Bezpieczeństwo i obowiązek prawny" },
                  { who: "Wynajmujący", why: "Dokumentacja do wynajmu" },
                  { who: "Sprzedający", why: "Protokół do transakcji" },
                  { who: "Właściciel firmy", why: "Zgodność i ubezpieczenie" },
                  { who: "Zarządca", why: "Przeglądy okresowe budynku" },
                  { who: "Deweloper", why: "Odbiory nowych instalacji" },
                ].map((item) => (
                  <div key={item.who} className="flex justify-between items-center py-2 border-b border-dark-800 last:border-0">
                    <span className="font-medium text-white">{item.who}</span>
                    <span className="text-sm text-dark-400">{item.why}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustSection />

      <HikvisionPartnerSection />

      {/* Area section */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Obszar działania"
            subtitle="Obsługujemy najważniejsze miasta Podkarpacia i okoliczne miejscowości."
          />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { city: "Rzeszów", href: "/elektryk-rzeszow" },
              { city: "Łańcut", href: "/elektryk-lancut" },
              { city: "Krosno", href: "/elektryk-krosno" },
              { city: "Sanok", href: "/elektryk-sanok" },
              { city: "Jasło", href: "/elektryk-jaslo" },
              { city: "Dębica", href: "/elektryk-debica" },
              { city: "Mielec", href: "/elektryk-mielec" },
              { city: "Przemyśl", href: "/elektryk-przemysl" },
            ].map((item) => (
              <Button key={item.city} href={item.href} variant="secondary" size="sm">
                📍 {item.city}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-dark-900/40">
        <Container>
          <SectionHeading
            title="Usługi, których klienci szukają najczęściej"
            subtitle="Mocne strony docelowe pod zapytania usługowe i lokalne: elektryk, przeglądy, instalacje elektryczne i monitoring CCTV."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <div className="rounded-2xl border border-dark-800 bg-dark-900/60 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Instalacje elektryczne, pomiary i przeglądy
              </h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                Realizujemy nowe instalacje elektryczne, modernizacje starych
                instalacji, pomiary ochronne oraz okresowe przeglądy
                elektryczne. Obsługujemy domy, mieszkania, firmy, wspólnoty i
                obiekty usługowe z pełną dokumentacją.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/instalacje-elektryczne/" variant="secondary" size="sm">
                  Instalacje elektryczne
                </Button>
                <Button href="/pomiary-elektryczne/" variant="secondary" size="sm">
                  Pomiary elektryczne
                </Button>
                <Button href="/przeglady-elektryczne/" variant="secondary" size="sm">
                  Przeglądy elektryczne
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-800 bg-dark-900/60 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Kamery CCTV, monitoring i zdalny podgląd
              </h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                Projektujemy i montujemy monitoring CCTV dla domów, firm,
                wspólnot i posesji. Dobieramy kamery, rejestratory i konfigurację
                sieci, dzięki czemu system działa stabilnie i daje wygodny
                podgląd z telefonu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/monitoring-cctv/" variant="secondary" size="sm">
                  Monitoring CCTV
                </Button>
                <Button href="/partner-hikvision/" variant="secondary" size="sm">
                  Partner Hikvision
                </Button>
                <Button href="/sieci-i-internet/" variant="secondary" size="sm">
                  Sieci i internet
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Popularne wyszukiwania lokalne"
            subtitle="Skróty do najważniejszych landingów usługowych i miejskich, żeby użytkownik i Google szybciej trafiali do właściwej strony."
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {priorityLinks.map((item) => (
              <Button key={item.href} href={item.href} variant="outline" size="sm">
                {item.label}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />

      <FaqSection items={homepageFaq} />

      <CtaSection
        title="Potrzebujesz elektryka, przeglądu lub monitoringu?"
        subtitle="Zadzwoń lub napisz — przygotujemy wycenę i dobierzemy rozwiązanie dopasowane do Twoich potrzeb."
      />
    </>
  );
}
