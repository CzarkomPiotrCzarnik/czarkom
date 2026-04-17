import { siteConfig } from "@/data/site";

function compact<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => {
      if (Array.isArray(item)) return item.length > 0;
      return item !== "" && item !== undefined && item !== null;
    })
  );
}

function postalAddress() {
  return compact({
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.zip,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  });
}

function sameAsLinks() {
  return [
    siteConfig.social.facebook,
    siteConfig.social.google,
    siteConfig.googleReviewUrl,
  ].filter(Boolean);
}

export function organizationSchema() {
  return compact({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.fullName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo_czarkom_all.png`,
    image: `${siteConfig.url}/czarkom-wallpaper-4k.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress(),
    sameAs: sameAsLinks(),
    knowsAbout: siteConfig.keywords,
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  });
}

export function localBusinessSchema() {
  return compact({
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.fullName,
    url: siteConfig.url,
    image: `${siteConfig.url}/czarkom-wallpaper-4k.png`,
    logo: `${siteConfig.url}/images/logo/logo_czarkom_all.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress(),
    openingHours: "Mo-Su 07:00-17:00",
    sameAs: sameAsLinks(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi Czarkom",
      itemListElement: [
        "Elektryk",
        "Instalacje elektryczne",
        "Przeglądy elektryczne",
        "Pomiary elektryczne",
        "Protokoły elektryczne",
        "Monitoring CCTV",
        "Automatyka",
        "Smart Home",
        "BMS",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
  });
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: name,
    description,
    url,
    mainEntityOfPage: url,
    provider: {
      "@type": "Electrician",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.fullName,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      areaServed: siteConfig.areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}

export function webSiteSchema() {
  return compact({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "pl-PL",
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
  });
}

interface ArticleSchemaParams {
  title: string;
  description: string;
  url: string;
  type?: "Article" | "BlogPosting";
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
}

export function articleSchema({
  title,
  description,
  url,
  type = "Article",
  datePublished,
  dateModified,
  keywords = [],
}: ArticleSchemaParams) {
  return compact({
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: "pl-PL",
    datePublished,
    dateModified,
    keywords,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.fullName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo/logo_czarkom_all.png`,
      },
    },
    image: `${siteConfig.url}/czarkom-wallpaper-4k.png`,
  });
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href.endsWith('/') ? item.href : item.href + '/'}`,
    })),
  };
}
