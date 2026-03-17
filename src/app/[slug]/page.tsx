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
    });
  }

  if (isLocationSlug(slug)) {
    const location = getLocationBySlug(slug)!;
    return generatePageMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      path: `/${slug}`,
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
          <div className="max-w-3xl">
            <p className="text-dark-300 leading-relaxed text-lg">
              {location.introText}
            </p>
          </div>
        </Container>
      </section>

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
