import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = generatePageMetadata({
  title: "Aktualności — nowości i wydarzenia | CZARKOM",
  description:
    "Aktualności firmy CZARKOM — nowe usługi, partnerstwa, realizacje i informacje z branży instalacji elektrycznych, monitoringu CCTV i automatyki.",
  path: "/aktualnosci",
});

const breadcrumbs = [{ name: "Aktualności", href: "/aktualnosci" }];

export default function AktualnosciPage() {
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

          <header className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Aktualności
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed">
              Nowości, wydarzenia i informacje z życia firmy CZARKOM.
            </p>
          </header>

          <div className="max-w-3xl space-y-6">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/aktualnosci/${article.slug}/`}
                className="block bg-dark-900 border border-dark-800 rounded-2xl p-6 hover:border-primary-800/50 transition-colors group"
              >
                <time className="text-sm text-dark-500 mb-2 block">
                  {new Date(article.date).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-dark-400 text-sm leading-relaxed line-clamp-3">
                  {article.intro}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
