import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  noIndex,
  keywords,
}: MetadataParams): Metadata {
  const url = `${siteConfig.url}${path.endsWith('/') ? path : path + '/'}`;

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/czarkom-wallpaper-4k.png`,
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/czarkom-wallpaper-4k.png`],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
