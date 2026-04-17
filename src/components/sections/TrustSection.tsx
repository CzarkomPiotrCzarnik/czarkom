import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const trustItems = [
  {
    icon: "🔧",
    title: "Doświadczenie i uprawnienia",
    text: "Zespół z wieloletnim doświadczeniem i pełnymi uprawnieniami do wykonywania prac elektrycznych.",
  },
  {
    icon: "📋",
    title: "Dokumentacja i protokoły",
    text: "Każda usługa zakończona czytelną dokumentacją — protokoły, pomiary, odbiory.",
  },
  {
    icon: "📍",
    title: "Lokalny dojazd",
    text: "Obsługujemy Rzeszów, Krosno, Jasło, Sanok, Dębicę, Mielec, Przemyśl, Łańcut i okoliczne miejscowości. Szybki dojazd i elastyczne terminy.",
  },
  {
    icon: "🛡️",
    title: "Bezpieczeństwo",
    text: "Prace zgodne z normami i przepisami. Bezpieczeństwo instalacji to nasz priorytet.",
  },
  {
    icon: "💬",
    title: "Jasna komunikacja",
    text: "Wyjaśniamy wszystko prostym językiem. Wiesz, co robimy i dlaczego.",
  },
  {
    icon: "⚡",
    title: "Szybka reakcja",
    text: "Staramy się reagować szybko — zarówno przy awariach, jak i przy planowanych usługach.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-dark-900/50">
      <Container>
        <SectionHeading
          title="Dlaczego Czarkom?"
          subtitle="Profesjonalizm, lokalność i konkretne podejście do każdego zlecenia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
