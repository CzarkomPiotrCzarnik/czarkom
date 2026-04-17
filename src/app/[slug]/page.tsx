import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";
import { isServiceSlug, isLocationSlug, getAllSlugs } from "@/lib/routes";
import { generatePageMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { LocalAreaSection } from "@/components/sections/LocalAreaSection";
import { IconList } from "@/components/ui/IconList";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PageProps {
  params: { slug: string };
}

const cityContext: Record<string, { intro: string; market: string }> = {
  Rzeszów: {
    intro:
      "Rzeszów to dynamicznie rozwijający się rynek nowych domów, mieszkań i lokali usługowych, dlatego duża część zleceń dotyczy nowych instalacji, odbiorów oraz rozbudowy istniejących systemów.",
    market:
      "W praktyce oznacza to potrzebę terminowej realizacji, czytelnej dokumentacji i sprawnej współpracy z inwestorem, ekipą remontową lub zarządcą obiektu.",
  },
  Krosno: {
    intro:
      "W Krośnie i okolicach często pracujemy zarówno w nowych obiektach, jak i przy modernizacji starszych instalacji w domach, firmach i budynkach użytkowych.",
    market:
      "Takie realizacje wymagają dokładnych oględzin, dopasowania zakresu prac do stanu obiektu i jasnego wskazania, co warto poprawić już teraz, a co można rozłożyć na etapy.",
  },
  Jasło: {
    intro:
      "W Jaśle i okolicznych miejscowościach często liczy się szybki dojazd, elastyczny termin i usługa wykonana kompleksowo, od przeglądu albo pomiarów po poprawki i dokumentację.",
    market:
      "Dlatego mocno stawiamy tu na praktyczne doradztwo, prostą komunikację i rozwiązania, które realnie podnoszą bezpieczeństwo oraz wygodę użytkowania instalacji.",
  },
  Łańcut: {
    intro:
      "W Łańcucie i okolicach często łączą się zlecenia dla domów jednorodzinnych, mniejszych firm i budynków po remoncie, gdzie liczy się szybka organizacja pracy i dobra dokumentacja.",
    market:
      "To rynek, na którym ważna jest punktualność, estetyczne wykonanie i możliwość sprawnego dojazdu także do pobliskich miejscowości powiatu łańcuckiego.",
  },
  Sanok: {
    intro:
      "W Sanoku i południowej części regionu wiele realizacji dotyczy domów, obiektów usługowych i nieruchomości wymagających modernizacji lub doposażenia w monitoring i automatykę.",
    market:
      "Tutaj szczególnie ceniona jest kompleksowa obsługa: oględziny, dobór rozwiązania, wykonanie oraz jasne wyjaśnienie, jak korzystać z instalacji i dokumentacji.",
  },
  Dębica: {
    intro:
      "W Dębicy i okolicach często trafiają do nas zlecenia związane z instalacjami w domach, lokalach usługowych i małych zakładach, gdzie ważne są termin i sprawna wycena.",
    market:
      "Duże znaczenie ma też elastyczny dojazd oraz możliwość wykonania zarówno pomiarów i przeglądów, jak i późniejszych poprawek albo rozbudowy instalacji.",
  },
  Mielec: {
    intro:
      "W Mielcu i pobliskich miejscowościach obsługujemy zarówno klientów indywidualnych, jak i firmy, dla których liczy się niezawodność instalacji, sieci i monitoringu.",
    market:
      "To obszar, gdzie przy wielu realizacjach ważna jest dobra organizacja techniczna i dopasowanie rozwiązania do intensywnego użytkowania obiektu.",
  },
  Przemyśl: {
    intro:
      "W Przemyślu i okolicach pracujemy przy domach, mieszkaniach, firmach oraz budynkach wymagających przeglądów, pomiarów albo modernizacji istniejących instalacji.",
    market:
      "Klienci w tym rejonie często szukają wykonawcy, który nie tylko zrobi usługę, ale też pomoże uporządkować dokumentację i jasno wskaże dalsze kroki.",
  },
};

const localServiceScenarios: Record<string, string[]> = {
  elektryk: [
    "Nowe instalacje elektryczne w domach jednorodzinnych i mieszkaniach",
    "Modernizacja starych instalacji przed remontem lub sprzedażą nieruchomości",
    "Rozbudowa rozdzielnic, dodatkowe obwody i usuwanie usterek",
  ],
  "instalacje-elektryczne": [
    "Instalacje od podstaw w nowych budynkach",
    "Wymiana starych przewodów i osprzętu w starszych obiektach",
    "Przygotowanie instalacji pod ogrzewanie, automatykę i monitoring",
  ],
  "przeglady-elektryczne": [
    "Przeglądy okresowe wymagane przez właściciela lub zarządcę",
    "Kontrola instalacji przed wynajmem, sprzedażą albo ubezpieczeniem",
    "Odbiory i dokumentacja po remoncie lub modernizacji",
  ],
  "pomiary-elektryczne": [
    "Pomiary ochronne do protokołu i dokumentacji technicznej",
    "Sprawdzenie stanu instalacji po remoncie lub awarii",
    "Pomiary potrzebne do odbioru inwestycji i celów ubezpieczeniowych",
  ],
  "protokoly-elektryczne": [
    "Protokoły do odbioru budynku lub lokalu",
    "Dokumentacja dla ubezpieczyciela, najemcy lub kupującego",
    "Protokoły potwierdzające stan instalacji po pomiarach i przeglądzie",
  ],
  "monitoring-cctv": [
    "Monitoring posesji, domu i bramy wjazdowej",
    "Kamery CCTV dla firm, sklepów i magazynów",
    "Zdalny podgląd z telefonu oraz konfiguracja rejestracji obrazu",
  ],
  automatyka: [
    "Sterowanie oświetleniem, ogrzewaniem i roletami",
    "Automatyzacja wybranych funkcji w istniejącym budynku",
    "Integracja instalacji pod wygodniejsze i oszczędniejsze użytkowanie",
  ],
  "sieci-i-internet": [
    "Poprawa zasięgu Wi-Fi w domu lub biurze",
    "Konfiguracja sieci pod monitoring IP i smart home",
    "Diagnostyka internetu, routera i okablowania LAN",
  ],
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;

  if (isServiceSlug(slug)) {
    const service = getServiceBySlug(slug)!;
    return generatePageMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/${slug}`,
      keywords: [service.name, service.shortName, ...service.sections.scope.slice(0, 4)],
    });
  }

  if (isLocationSlug(slug)) {
    const location = getLocationBySlug(slug)!;
    return generatePageMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      path: `/${slug}`,
      keywords: [location.serviceName, location.city, ...location.areas.slice(0, 4)],
    });
  }

  return {};
}

/* ──────────── Service Page ──────────── */

function ServicePage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)!;

  const breadcrumbs = [{ name: service.name, href: `/${slug}` }];

  const relatedServices = service.relatedServices
    .map((s) => {
      const found = services.find((x) => x.slug === s);
      return found ? { label: found.name, href: `/${found.slug}` } : null;
    })
    .filter(Boolean) as { label: string; href: string }[];

  const relatedLocations = service.localPages
    .map((l) => {
      const found = locations.find((x) => x.slug === l);
      return found
        ? { label: `${service.shortName} ${found.city}`, href: `/${found.slug}` }
        : null;
    })
    .filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <JsonLd
        data={serviceSchema(
          service.name,
          service.description,
          `${siteConfig.url}/${slug}/`
        )}
      />
      {service.faq.length > 0 && <JsonLd data={faqSchema(service.faq)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strona główna", href: "/" },
          ...breadcrumbs,
        ])}
      />

      <section className="pt-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </section>

      <HeroSection h1={service.h1} subtitle={service.heroText} />

      {/* Problem / Why */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Dlaczego warto?"
            centered={false}
          />
          <p className="text-dark-300 leading-relaxed max-w-3xl mt-4">
            {service.sections.problem}
          </p>
        </Container>
      </section>

      {/* Scope */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <SectionHeading title="Zakres usługi" />
          <div className="max-w-2xl mx-auto mt-8">
            <IconList items={service.sections.scope} />
          </div>
        </Container>
      </section>

      <BenefitsSection benefits={service.sections.benefits} />

      {/* Audiences */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <SectionHeading title="Dla kogo?" />
          <div className="max-w-2xl mx-auto mt-8">
            <IconList items={service.sections.audiences} />
          </div>
        </Container>
      </section>

      <ProcessSection steps={service.sections.process} />

      <section className="section-padding bg-dark-900/50">
        <Container>
          <SectionHeading
            title={`Gdzie najczęściej realizujemy usługę: ${service.shortName}`}
            subtitle="Najwięcej zapytań dotyczy domów, mieszkań, firm i obiektów wymagających bezpiecznej, zgodnej z przepisami instalacji oraz czytelnej dokumentacji."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-start">
            <div>
              <p className="text-dark-300 leading-relaxed">
                Realizujemy prace na terenie Rzeszowa, Krosna, Jasła i okolic.
                Klienci najczęściej szukają konkretnej pomocy: szybkiej wyceny,
                fachowego wykonania, pomiarów, protokołu albo modernizacji
                istniejącej instalacji. Dlatego każdą usługę opisujemy w sposób
                praktyczny i prowadzimy od oględzin do dokumentacji końcowej.
              </p>
            </div>
            <div className="max-w-2xl">
              <IconList
                items={[
                  ...service.sections.scope.slice(0, 4),
                  ...service.sections.audiences.slice(0, 2),
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {service.faq.length > 0 && <FaqSection items={service.faq} />}

      <RelatedLinksSection
        services={relatedServices}
        locations={relatedLocations}
      />

      <CtaSection
        title={`Potrzebujesz pomocy — ${service.shortName.toLowerCase()}?`}
        subtitle="Zadzwoń lub napisz — przygotujemy wycenę dopasowaną do Twoich potrzeb."
      />
    </>
  );
}

/* ──────────── Location Page ──────────── */

function LocationPage({ slug }: { slug: string }) {
  const location = getLocationBySlug(slug)!;
  const baseService = services.find((service) => service.slug === location.serviceSlug);
  const cityInfo = cityContext[location.city];
  const localScenarios = localServiceScenarios[location.serviceSlug] ?? [];

  const breadcrumbs = [
    { name: location.serviceName, href: `/${location.serviceSlug}` },
    { name: `${location.serviceName} ${location.city}`, href: `/${slug}` },
  ];

  const relatedServices = location.relatedServices
    .map((s) => {
      const found = services.find((x) => x.slug === s);
      return found ? { label: found.name, href: `/${found.slug}` } : null;
    })
    .filter(Boolean) as { label: string; href: string }[];

  const relatedLocations = location.relatedLocations
    .map((l) => {
      const found = locations.find((x) => x.slug === l);
      return found
        ? { label: `${found.serviceName} ${found.city}`, href: `/${found.slug}` }
        : null;
    })
    .filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <JsonLd
        data={serviceSchema(
          `${location.serviceName} — ${location.city}`,
          location.metaDescription,
          `${siteConfig.url}/${slug}/`
        )}
      />
      {location.localFaq.length > 0 && (
        <JsonLd data={faqSchema(location.localFaq)} />
      )}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strona główna", href: "/" },
          ...breadcrumbs,
        ])}
      />

      <section className="pt-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </section>

      <HeroSection
        h1={location.h1}
        subtitle={location.heroText}
      />

      {/* Intro */}
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl space-y-6">
            <p className="text-dark-300 leading-relaxed text-lg">
              {location.introText}
            </p>
            {cityInfo && (
              <>
                <p className="text-dark-300 leading-relaxed">
                  {cityInfo.intro}
                </p>
                <p className="text-dark-300 leading-relaxed">
                  {cityInfo.market}
                </p>
              </>
            )}
          </div>
        </Container>
      </section>

      {baseService && (
        <section className="section-padding bg-dark-900/50">
          <Container>
            <SectionHeading
              title={`${location.serviceName} w ${location.city} — co najczęściej wykonujemy`}
              subtitle="Mocniejsze dopasowanie strony do lokalnych zapytań i realnych potrzeb klientów z regionu."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Typowe realizacje
                </h2>
                <IconList items={localScenarios.length > 0 ? localScenarios : baseService.sections.scope.slice(0, 3)} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Dlaczego klienci wybierają tę usługę
                </h2>
                <IconList items={baseService.sections.benefits.slice(0, 5)} />
              </div>
            </div>
          </Container>
        </section>
      )}

      {baseService && (
        <section className="section-padding">
          <Container>
            <SectionHeading
              title={`Zakres usługi w ${location.city} i okolicach`}
              subtitle="Na stronie lokalnej pokazujemy nie tylko miasto, ale też konkretny zakres prac i typ obiektów, które obsługujemy."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-start">
              <div className="max-w-2xl">
                <IconList items={baseService.sections.scope.slice(0, 6)} />
              </div>
              <div className="rounded-2xl border border-dark-800 bg-dark-900/60 p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Dla kogo pracujemy
                </h2>
                <p className="text-dark-300 leading-relaxed mb-6">
                  Obsługujemy klientów prywatnych, firmy, wspólnoty, zarządców
                  i inwestorów. Jeśli szukasz wykonawcy na terenie {location.city}
                  , który zrobi usługę rzetelnie i zostawi po sobie porządną
                  dokumentację, ta strona prowadzi dokładnie do właściwej oferty.
                </p>
                <IconList items={baseService.sections.audiences.slice(0, 5)} />
              </div>
            </div>
          </Container>
        </section>
      )}

      <LocalAreaSection city={location.city} areas={location.areas} />

      {location.localFaq.length > 0 && (
        <FaqSection
          title={`FAQ — ${location.serviceName} ${location.city}`}
          items={location.localFaq}
        />
      )}

      <RelatedLinksSection
        services={relatedServices}
        locations={relatedLocations}
      />

      <CtaSection
        title={`Szukasz ${location.serviceName.toLowerCase()} w ${location.city}?`}
        subtitle="Skontaktuj się z nami — działamy lokalnie i znamy specyfikę regionu."
      />
    </>
  );
}

/* ──────────── Router ──────────── */

export default function SlugPage({ params }: PageProps) {
  const { slug } = params;

  if (isServiceSlug(slug)) {
    return <ServicePage slug={slug} />;
  }

  if (isLocationSlug(slug)) {
    return <LocationPage slug={slug} />;
  }

  notFound();
}
