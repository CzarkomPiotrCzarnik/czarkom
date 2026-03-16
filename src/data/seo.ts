import { siteConfig } from "@/data/site";

export const defaultMeta = {
  title: `${siteConfig.name} — elektryk, przeglądy, monitoring, automatyka`,
  description: siteConfig.description,
  openGraph: {
    type: "website" as const,
    locale: "pl_PL",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};
