import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noIndex,
}: MetadataParams): Metadata {
  const url = `${siteConfig.url}${path.endsWith('/') ? path : path + '/'}`;

  return {
    title,
    description,
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
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
