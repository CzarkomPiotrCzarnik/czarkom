import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllSlugs } from "@/lib/routes";
import { knowledgeArticles } from "@/data/knowledge";
import { newsArticles } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const siteLastModified = new Date(siteConfig.updatedAt);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/o-firmie/`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt/`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/baza-wiedzy/`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/partner-hikvision/`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/aktualnosci/`, lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.7 },
  ];

  const dynamicPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const knowledgePages: MetadataRoute.Sitemap = knowledgeArticles.map((a) => ({
    url: `${baseUrl}/baza-wiedzy/${a.slug}/`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsPages: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: `${baseUrl}/aktualnosci/${a.slug}/`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages, ...knowledgePages, ...newsPages];
}
