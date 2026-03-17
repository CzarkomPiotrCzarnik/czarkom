import { siteConfig } from "@/data/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: siteConfig.fullName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    openingHours: "Mo-Su 07:00-17:00",
    areaServed: siteConfig.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Electrician",
      name: siteConfig.fullName,
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
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
