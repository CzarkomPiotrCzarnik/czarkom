export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const generalFaq: FaqItem[] = [
  {
    question: "Jaki jest obszar działania firmy Czarkom?",
    answer:
      "Działamy głównie na terenie Rzeszowa, Krosna, Jasła i okolic. Obsługujemy też Jedlicze i okoliczne miejscowości. W przypadku większych projektów dojeżdżamy dalej — skontaktuj się z nami.",
    category: "ogólne",
  },
  {
    question: "Jak mogę zamówić usługę?",
    answer:
      "Najszybciej telefonicznie lub przez formularz kontaktowy na stronie. Opisz krótko, czego potrzebujesz — odezwiemy się z wstępną wyceną.",
    category: "ogólne",
  },
  {
    question: "Czy wystawiacie faktury?",
    answer:
      "Tak, wystawiamy faktury VAT na życzenie klienta.",
    category: "ogólne",
  },
  {
    question: "Kiedy trzeba wykonać przegląd instalacji elektrycznej?",
    answer:
      "Przeglądy instalacji elektrycznych powinny być wykonywane nie rzadziej niż co 5 lat. Obowiązek ten wynika z Prawa budowlanego. Przegląd jest też wymagany przy odbiorze budynku, zmianie właściciela, wynajmie i w sytuacjach ubezpieczeniowych.",
    category: "przeglady",
  },
  {
    question: "Czy muszę mieć protokół z przeglądu?",
    answer:
      "Tak — właściciel nieruchomości ma prawny obowiązek posiadania aktualnego protokołu z przeglądu instalacji elektrycznej. Dokument ten potwierdza, że instalacja jest bezpieczna.",
    category: "przeglady",
  },
  {
    question: "Czy ubezpieczyciel może odmówić wypłaty bez aktualnego protokołu?",
    answer:
      "Tak — w praktyce ubezpieczyciel może kwestionować zasadność wypłaty odszkodowania, jeśli instalacja nie miała aktualnego przeglądu. Dlatego warto mieć dokumentację na bieżąco.",
    category: "przeglady",
  },
  {
    question: "Co obejmuje przegląd instalacji elektrycznej?",
    answer:
      "Przegląd obejmuje oględziny instalacji, pomiary ochronne (rezystancja izolacji, skuteczność ochrony, ciągłość przewodów) oraz ocenę stanu technicznego. Po przeglądzie klient otrzymuje protokół.",
    category: "przeglady",
  },
  {
    question: "Ile kosztują pomiary elektryczne?",
    answer:
      "Koszt zależy od wielkości obiektu i zakresu pomiarów. Skontaktuj się z nami — przygotujemy indywidualną wycenę.",
    category: "pomiary",
  },
  {
    question: "Czy protokół jest potrzebny przy wynajmie lub sprzedaży?",
    answer:
      "Tak — przy wynajmie i sprzedaży nieruchomości aktualny protokół z pomiarów elektrycznych jest ważnym dokumentem potwierdzającym bezpieczny stan instalacji.",
    category: "protokoly",
  },
  {
    question: "Jakie dokumenty dostanę po pomiarach?",
    answer:
      "Po wykonaniu pomiarów klient otrzymuje czytelny protokół z wynikami pomiarów ochronnych, oceną stanu instalacji i danymi wykonawcy.",
    category: "pomiary",
  },
  {
    question: "Ile kamer potrzeba do domu?",
    answer:
      "Zależy od wielkości domu i posesji. Typowo 4–8 kamer wystarczy do skutecznego monitoringu domu jednorodzinnego. Pomagamy dobrać odpowiedni system.",
    category: "monitoring",
  },
  {
    question: "Czy monitoring działa z telefonu?",
    answer:
      "Tak — konfigurujemy podgląd na żywo na telefonie, tablecie i komputerze. Masz dostęp do kamer z dowolnego miejsca.",
    category: "monitoring",
  },
  {
    question: "Od czego zacząć smart home?",
    answer:
      "Najczęściej od oświetlenia i ogrzewania — to daje najszybsze efekty. System można potem rozbudować o rolety, monitoring, scenariusze i asystentów głosowych.",
    category: "automatyka",
  },
  {
    question: "Czy automatykę można zainstalować w istniejącym budynku?",
    answer:
      "Tak — wiele rozwiązań automatyki budynkowej można wdrożyć bez rozbudowy instalacji, korzystając z technologii bezprzewodowych.",
    category: "automatyka",
  },

  // ──── FAQ problemowe — frazy wpisywane w Google ────
  {
    question: "Dlaczego wybija bezpiecznik i co to może oznaczać?",
    answer:
      "Bezpiecznik (wyłącznik nadprądowy) zadziałał, bo wykrył przeciążenie lub zwarcie w obwodzie. Najczęstsze przyczyny: za dużo urządzeń na jednym obwodzie, uszkodzone urządzenie, wilgoć. Odłącz urządzenia i spróbuj załączyć bezpiecznik. Jeśli ciągle wybija — wezwij elektryka.",
    category: "elektryka",
  },
  {
    question: "Dlaczego wybija różnicówka?",
    answer:
      "Różnicówka (RCD) chroni przed porażeniem prądem. Wybija, gdy wykryje upływ prądu — np. z uszkodzonego urządzenia, wilgotnego gniazdka lub starej izolacji. Nigdy nie blokuj różnicówki — znajdź przyczynę upływu. Przyjeżdżamy z diagnostyką na terenie Krosna, Rzeszowa i Jasła.",
    category: "elektryka",
  },
  {
    question: "Brak prądu w gniazdku — co zrobić?",
    answer:
      "Sprawdź bezpiecznik i różnicówkę w rozdzielni. Przetestuj gniazdko innym urządzeniem. Jeśli bezpiecznik ciągle wypada lub gniazdko jest ciepłe/iskrzy — wezwij elektryka. Nie grzeb w gniazdku sam.",
    category: "elektryka",
  },
  {
    question: "Internet nie działa — co zrobić?",
    answer:
      "Zrestartuj router (odłącz zasilanie na 30 sek.). Sprawdź na innym urządzeniu. Podłącz komputer kablem LAN do routera — jeśli kablem działa, problem jest w Wi-Fi. Jeśli kablem też nie — dzwoń do operatora. Pomagamy z diagnostyką sieci na Podkarpaciu.",
    category: "sieci",
  },
  {
    question: "Słaby zasięg Wi-Fi w domu — jak poprawić?",
    answer:
      "Przenieś router centralnie i wysoko. Włącz pasmo 5 GHz. Zmień kanał Wi-Fi. Jeśli to nie wystarczy — rozważ access point (na kablu LAN) lub system mesh. Instalujemy i konfigurujemy na terenie Krosna, Rzeszowa i Jasła.",
    category: "sieci",
  },
  {
    question: "Kamera nie działa w aplikacji — co sprawdzić?",
    answer:
      "Sprawdź: czy rejestrator ma internet (kabel LAN do routera), czy P2P/chmura jest włączona, czy aplikacja jest aktualna. Zrestartuj router i rejestrator. Jeśli nie pomaga — konieczna diagnostyka. Pomagamy zdalnie i na miejscu.",
    category: "monitoring",
  },
  {
    question: "Kamera jest offline — jak przywrócić podgląd?",
    answer:
      "Status offline oznacza, że kamera/rejestrator nie ma połączenia z internetem. Zrestartuj router i rejestrator. Sprawdź kabel LAN. Jeśli kamera Wi-Fi — sprawdź zasięg i czy hasło sieci się nie zmieniło.",
    category: "monitoring",
  },
  {
    question: "Czy dojedziesz do mnie w nagłej awarii?",
    answer:
      "Tak — awarie elektryczne traktujemy priorytetowo. Na terenie Krosna, Rzeszowa, Jasła i okolic często przyjeżdżamy tego samego dnia. Zadzwoń — ustalimy najszybszy termin.",
    category: "ogólne",
  },
];

export const homepageFaq: FaqItem[] = generalFaq.filter((f) =>
  [
    "Kiedy trzeba wykonać przegląd instalacji elektrycznej?",
    "Czy muszę mieć protokół z przeglądu?",
    "Ile kamer potrzeba do domu?",
    "Jaki jest obszar działania firmy Czarkom?",
    "Jak mogę zamówić usługę?",
  ].includes(f.question)
);
