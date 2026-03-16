import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="section-padding bg-dark-900/50">
      <Container>
        <SectionHeading
          title="Skontaktuj się z nami"
          subtitle="Zadzwoń, napisz lub wypełnij formularz — odpowiadamy szybko."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
              <PhoneButton className="text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Godziny pracy</h3>
              <p className="text-dark-400">{siteConfig.hours}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Obszar działania</h3>
              <p className="text-dark-400">{siteConfig.areas.join(", ")}</p>
            </div>
          </div>

          {/* Contact form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-1">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="+48 000 000 000"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="jan@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-1">
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Opisz krótko, czego potrzebujesz..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Wyślij wiadomość
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
