import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { knowledgeCategories, getArticlesByCategory } from "@/data/knowledge";

export const metadata: Metadata = generatePageMetadata({
  title: "Baza wiedzy — poradniki elektryczne, sieci, monitoring | Czarkom",
  description:
    "Praktyczna baza wiedzy: instalacje elektryczne, sieci LAN i Wi-Fi, monitoring CCTV, automatyka i smart home. Poradniki, normy, schematy.",
  path: "/baza-wiedzy",
});

const breadcrumbs = [{ name: "Baza wiedzy", href: "/baza-wiedzy" }];

export default function KnowledgeBasePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strona główna", href: "/" },
          ...breadcrumbs,
        ])}
      />

      <section className="pt-8 pb-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Baza wiedzy technicznej
          </h1>
          <p className="text-lg text-dark-300 max-w-3xl mb-16">
            Praktyczne poradniki, normy, schematy i wyjaśnienia. Korzystaj
            z naszej wiedzy — tak jak korzystamy z niej my na co dzień.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {knowledgeCategories.map((category) => {
              const articles = getArticlesByCategory(category.slug);
              return (
                <div key={category.slug}>
                  <h2 className="text-2xl font-bold text-primary-400 mb-2 flex items-center gap-2">
                    <span>{category.icon}</span>
                    {category.name}
                  </h2>
                  <p className="text-sm text-dark-400 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-1">
                    {articles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/baza-wiedzy/${article.slug}`}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-dark-300 hover:text-white hover:bg-dark-800/60 transition-colors"
                        >
                          <span className="text-sm">{article.icon}</span>
                          <span className="text-sm">{article.shortTitle}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
