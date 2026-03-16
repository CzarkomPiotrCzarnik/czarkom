import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { footerServices, footerLocations, footerLinks } from "@/data/navigation";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/ck-symbol.svg"
                alt={`${siteConfig.name} logo`}
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <Image
                src="/images/logo/ck-text.svg"
                alt={siteConfig.name}
                width={100}
                height={25}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Elektryk, przeglądy elektryczne, monitoring CCTV i automatyka. Obsługujemy Rzeszów, Krosno, Jasło i okolice.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-primary-400 font-semibold hover:text-primary-300 transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-dark-400 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h3 className="text-white font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokalizacje */}
          <div>
            <h3 className="text-white font-semibold mb-4">Lokalizacje</h3>
            <ul className="space-y-2">
              {footerLocations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informacje */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informacje</h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-dark-500">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-dark-800">
        <Container className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-500">
            &copy; {year} {siteConfig.fullName}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-dark-600">
            Rzeszów &middot; Krosno &middot; Jasło i okolice
          </p>
        </Container>
      </div>
    </footer>
  );
}
