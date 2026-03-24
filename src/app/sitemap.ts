import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllSlugs } from "@/lib/routes";
import { knowledgeArticles } from "@/data/knowledge";
import { newsArticles } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/o-firmie/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/baza-wiedzy/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/partner-hikvision/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/aktualnosci/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const dynamicPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const knowledgePages: MetadataRoute.Sitemap = knowledgeArticles.map((a) => ({
    url: `${baseUrl}/baza-wiedzy/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsPages: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: `${baseUrl}/aktualnosci/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages, ...knowledgePages, ...newsPages];
}
