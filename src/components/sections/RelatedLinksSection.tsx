import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksSectionProps {
  title?: string;
  services?: RelatedLink[];
  locations?: RelatedLink[];
}

export function RelatedLinksSection({
  title = "Powiązane usługi i lokalizacje",
  services = [],
  locations = [],
}: RelatedLinksSectionProps) {
  if (services.length === 0 && locations.length === 0) return null;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Powiązane usługi
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm bg-dark-800 border border-dark-700 rounded-lg text-dark-300 hover:text-primary-400 hover:border-primary-600/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {locations.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Lokalizacje
              </h3>
              <div className="flex flex-wrap gap-2">
                {locations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm bg-dark-800 border border-dark-700 rounded-lg text-dark-300 hover:text-primary-400 hover:border-primary-600/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
