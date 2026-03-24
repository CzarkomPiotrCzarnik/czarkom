import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getNewsArticleBySlug(params.slug);
  if (!article) return {};

  return generatePageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/aktualnosci/${article.slug}`,
  });
}

export default function NewsArticlePage({ params }: PageProps) {
  const article = getNewsArticleBySlug(params.slug);
  if (!article) notFound();

  const breadcrumbs = [
    { name: "Aktualności", href: "/aktualnosci" },
    { name: article.shortTitle, href: `/aktualnosci/${article.slug}` },
  ];

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
            <time className="text-sm text-dark-500 mb-3 block">
              {new Date(article.date).toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed">
              {article.intro}
            </p>
          </header>

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
                          strokeWidth={2.5}
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

            {/* FAQ inside article */}
            {article.faq && article.faq.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Najczęściej zadawane pytania
                </h2>
                <div className="space-y-4">
                  {article.faq.map((item, i) => (
                    <div
                      key={i}
                      className="border border-dark-800 rounded-xl p-5"
                    >
                      <h3 className="font-semibold text-white mb-2">
                        {item.question}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-900/20 to-dark-900 border border-primary-800/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Zainteresowany monitoringiem Hikvision?
              </h2>
              <p className="text-dark-300 mb-6 max-w-lg mx-auto">
                Skontaktuj się z nami — bezpłatnie doradzimy i przygotujemy
                wycenę dopasowaną do Twojego obiektu.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/kontakt/" size="lg">
                  Zapytaj o wycenę
                </Button>
                <Button href="/partner-hikvision/" variant="outline">
                  Dowiedz się więcej o partnerstwie
                </Button>
              </div>
            </div>

            {/* Related links */}
            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  Powiązane strony
                </h2>
                <div className="flex flex-wrap gap-3">
                  {article.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-block px-4 py-2 text-sm font-medium text-dark-300 bg-dark-900 border border-dark-800 rounded-full hover:border-primary-800/50 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </Container>
      </article>

      <CtaSection
        title="Potrzebujesz monitoringu lub instalacji elektrycznej?"
        subtitle="Zadzwoń lub napisz — przygotujemy wycenę i dobierzemy rozwiązanie dopasowane do Twoich potrzeb."
      />
    </>
  );
}
