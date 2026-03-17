import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { knowledgeArticles, getArticleBySlug, getArticlesByCategory } from "@/data/knowledge";
import { services } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { CableColorChart } from "@/components/knowledge/CableColorChart";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return knowledgeArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return generatePageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/baza-wiedzy/${article.slug}`,
  });
}

export default function KnowledgeArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const breadcrumbs = [
    { name: "Baza wiedzy", href: "/baza-wiedzy" },
    { name: article.shortTitle, href: `/baza-wiedzy/${article.slug}` },
  ];

  const relatedArticles = (article.relatedArticles ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);

  const relatedServices = (article.relatedServices ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  const categoryArticles = getArticlesByCategory(article.category).filter(
    (a) => a.slug !== article.slug
  );

  return (
    <>
      {article.faq && article.faq.length > 0 && (
        <JsonLd data={faqSchema(article.faq)} />
      )}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strona główna", href: "/" },
          ...breadcrumbs,
        ])}
      />

      <article className="pt-8 pb-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <header className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed">
              {article.intro}
            </p>
          </header>

          {/* Special component for RJ-45 article */}
          {article.slug === "oznaczenia-kabli-lan-rj45" && (
            <div className="max-w-3xl">
              <CableColorChart />
            </div>
          )}

          {/* Article sections */}
          <div className="max-w-3xl space-y-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {section.heading}
                </h2>
                <p className="text-dark-300 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-dark-300"
                      >
                        <svg
                          className="w-5 h-5 text-primary-500 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* FAQ */}
            {article.faq && article.faq.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Najczęściej zadawane pytania
                </h2>
                <div className="space-y-4">
                  {article.faq.map((item, i) => (
                    <div
                      key={i}
                      className="bg-dark-800/50 border border-dark-700 rounded-xl p-5"
                    >
                      <h3 className="font-semibold text-white mb-2">
                        {item.question}
                      </h3>
                      <p className="text-dark-300 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar-like links */}
          <div className="max-w-3xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related articles */}
            {(relatedArticles.length > 0 || categoryArticles.length > 0) && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Powiązane artykuły
                </h3>
                <ul className="space-y-1">
                  {(relatedArticles.length > 0
                    ? relatedArticles
                    : categoryArticles.slice(0, 4)
                  ).map((a) => (
                    <li key={a!.slug}>
                      <Link
                        href={`/baza-wiedzy/${a!.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-dark-300 hover:text-white hover:bg-dark-800/50 transition-colors"
                      >
                        <span>{a!.icon}</span>
                        {a!.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Powiązane usługi
                </h3>
                <ul className="space-y-1">
                  {relatedServices.map((s) => (
                    <li key={s!.slug}>
                      <Link
                        href={`/${s!.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-dark-300 hover:text-primary-400 hover:bg-dark-800/50 transition-colors"
                      >
                        <span>{s!.icon}</span>
                        {s!.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </article>

      <CtaSection
        title="Potrzebujesz pomocy?"
        subtitle="Jeśli temat jest bardziej skomplikowany — zadzwoń lub napisz. Pomożemy."
      />
    </>
  );
}
