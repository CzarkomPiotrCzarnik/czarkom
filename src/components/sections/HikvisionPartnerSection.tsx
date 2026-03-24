import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function HikvisionPartnerSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-950/20 to-dark-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-900/40 border border-primary-800/30 rounded-full mb-4">
              Partnerstwo technologiczne
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              CZARKOM — partner Hikvision
            </h2>
            <p className="text-dark-300 leading-relaxed mb-4">
              Działamy w ramach partnerstwa z Hikvision — światowym liderem
              systemów monitoringu wizyjnego. Dzięki temu nasi klienci otrzymują
              sprawdzone rozwiązania CCTV, profesjonalny montaż i pełne wsparcie
              techniczne.
            </p>
            <p className="text-dark-300 leading-relaxed mb-6">
              Projektujemy, montujemy i serwisujemy systemy kamer dla domów, firm
              i wspólnot mieszkaniowych — z zdalnym podglądem na telefonie
              i gwarancją niezawodności.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/partner-hikvision/" size="lg">
                Dowiedz się więcej
              </Button>
              <Button href="/kontakt/" variant="outline">
                Zapytaj o monitoring
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/partners/czarkom-partner-hikvision.png"
              alt="CZARKOM — partner Hikvision. Profesjonalne systemy monitoringu CCTV"
              width={440}
              height={300}
              className="rounded-2xl max-w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
