export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  icon: string;
  pillar: "elektryka" | "przeglady" | "monitoring" | "automatyka";
  priority: number;
  sections: {
    problem: string;
    scope: string[];
    benefits: string[];
    audiences: string[];
    process: { step: string; description: string }[];
  };
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  localPages: string[];
}

export const services: ServiceData[] = [
  {
    slug: "elektryk",
    name: "Elektryk",
    shortName: "Elektryk",
    description:
      "Profesjonalne usługi elektryczne — montaż, modernizacja, naprawy instalacji niskiego i średniego napięcia.",
    metaTitle: "Elektryk — instalacje elektryczne NN i SN | Czarkom",
    metaDescription:
      "Elektryk z doświadczeniem — montaż, modernizacja i naprawa instalacji elektrycznych NN i SN. Rzeszów, Krosno, Jasło i okolice. Zadzwoń!",
    h1: "Elektryk — instalacje elektryczne NN i SN",
    heroText:
      "Montaż, modernizacja i naprawa instalacji elektrycznych w domach, mieszkaniach i firmach. Działamy na terenie Rzeszowa, Krosna, Jasła i okolic.",
    icon: "⚡",
    pillar: "elektryka",
    priority: 4,
    sections: {
      problem:
        "Potrzebujesz sprawdzonego elektryka, który wykona instalację solidnie, bezpiecznie i zgodnie z normami? Szukasz kogoś, kto nie tylko zamontuje, ale też doradzi i wyjaśni?",
      scope: [
        "Instalacje elektryczne w domach i mieszkaniach",
        "Instalacje w firmach, halach i obiektach komercyjnych",
        "Modernizacja starych instalacji",
        "Montaż rozdzielnic i zabezpieczeń",
        "Instalacje niskiego napięcia (NN)",
        "Instalacje średniego napięcia (SN)",
        "Usuwanie usterek i awarii",
        "Podłączenia i rozbudowa instalacji",
      ],
      benefits: [
        "Doświadczony zespół z uprawnieniami",
        "Prace zgodne z normami i przepisami",
        "Kompleksowa obsługa — od projektu do odbioru",
        "Szybki dojazd na terenie Rzeszowa, Krosna i Jasła",
        "Czytelna wycena przed rozpoczęciem prac",
      ],
      audiences: [
        "Właściciele domów i mieszkań",
        "Firmy i przedsiębiorcy",
        "Inwestorzy i deweloperzy",
        "Zarządcy nieruchomości",
        "Wspólnoty mieszkaniowe",
      ],
      process: [
        {
          step: "Kontakt i wycena",
          description: "Opisz zakres prac — przygotujemy wstępną wycenę.",
        },
        {
          step: "Oględziny i plan",
          description:
            "Przyjeżdżamy, oceniamy sytuację i ustalamy szczegóły realizacji.",
        },
        {
          step: "Realizacja",
          description:
            "Wykonujemy prace terminowo, z dbałością o porządek i bezpieczeństwo.",
        },
        {
          step: "Odbiór i dokumentacja",
          description:
            "Po zakończeniu prac przekazujemy dokumentację i wyjaśniamy wszystko.",
        },
      ],
    },
    faq: [
      {
        question: "Czy wykonujecie instalacje elektryczne w nowych domach?",
        answer:
          "Tak, wykonujemy kompletne instalacje elektryczne od zera — w domach jednorodzinnych, wielorodzinnych i obiektach komercyjnych.",
      },
      {
        question: "Czy naprawiacie awarie elektryczne?",
        answer:
          "Tak, usuwamy awarie i usterki instalacji elektrycznych. Staramy się reagować jak najszybciej.",
      },
      {
        question: "Czy wykonujecie instalacje średniego napięcia (SN)?",
        answer:
          "Tak, posiadamy doświadczenie w instalacjach niskiego i średniego napięcia.",
      },
    ],
    relatedServices: [
      "instalacje-elektryczne",
      "przeglady-elektryczne",
      "pomiary-elektryczne",
    ],
    localPages: ["elektryk-rzeszow", "elektryk-krosno", "elektryk-jaslo"],
  },
  {
    slug: "instalacje-elektryczne",
    name: "Instalacje elektryczne",
    shortName: "Instalacje",
    description:
      "Kompleksowe instalacje elektryczne dla domów, mieszkań i firm — montaż, modernizacja, rozdzielnice.",
    metaTitle: "Instalacje elektryczne — montaż i modernizacja | Czarkom",
    metaDescription:
      "Instalacje elektryczne w domach, mieszkaniach i firmach. Montaż, modernizacja, rozdzielnice. Rzeszów, Krosno, Jasło. Zadzwoń po wycenę!",
    h1: "Instalacje elektryczne — montaż i modernizacja",
    heroText:
      "Projektujemy i wykonujemy instalacje elektryczne od podstaw. Modernizujemy stare instalacje, montujemy rozdzielnice i zabezpieczenia.",
    icon: "🔌",
    pillar: "elektryka",
    priority: 5,
    sections: {
      problem:
        "Budujesz dom, remontujesz mieszkanie albo potrzebujesz nowej instalacji elektrycznej w firmie? Dobrze wykonana instalacja to fundament bezpieczeństwa i komfortu.",
      scope: [
        "Instalacje elektryczne w nowych budynkach",
        "Modernizacja instalacji w starszych obiektach",
        "Montaż rozdzielnic i automatyki zabezpieczeniowej",
        "Instalacje oświetleniowe i gniazd",
        "Wyprowadzenia pod urządzenia AGD i RTV",
        "Instalacje siłowe",
        "Instalacje w budynkach komercyjnych i przemysłowych",
      ],
      benefits: [
        "Prace wykonane zgodnie z aktualnymi normami",
        "Dokumentacja powykonawcza",
        "Terminowa realizacja",
        "Doradztwo techniczne na każdym etapie",
      ],
      audiences: [
        "Osoby budujące dom",
        "Osoby remontujące mieszkanie",
        "Firmy i biura",
        "Deweloperzy",
      ],
      process: [
        {
          step: "Konsultacja",
          description: "Omawiamy zakres i wymagania.",
        },
        {
          step: "Wycena",
          description: "Przygotowujemy szczegółową ofertę.",
        },
        {
          step: "Montaż",
          description: "Realizujemy prace na miejscu.",
        },
        {
          step: "Odbiór",
          description: "Sprawdzamy instalację i przekazujemy dokumenty.",
        },
      ],
    },
    faq: [
      {
        question: "Ile trwa montaż instalacji elektrycznej w domu?",
        answer:
          "Czas zależy od wielkości budynku i zakresu prac. Dla domu jednorodzinnego to zazwyczaj od kilku dni do 2 tygodni.",
      },
      {
        question: "Czy modernizujecie stare instalacje aluminiowe?",
        answer:
          "Tak, wymieniamy stare instalacje aluminiowe na nowoczesne miedziane, zgodne z aktualnymi normami.",
      },
    ],
    relatedServices: ["elektryk", "przeglady-elektryczne", "pomiary-elektryczne"],
    localPages: [],
  },
  {
    slug: "przeglady-elektryczne",
    name: "Przeglądy elektryczne",
    shortName: "Przeglądy",
    description:
      "Przeglądy instalacji elektrycznych dla domów, mieszkań, firm i budynków. Dokumentacja, bezpieczeństwo, zgodność z przepisami.",
    metaTitle:
      "Przeglądy elektryczne — protokoły i dokumentacja | Czarkom",
    metaDescription:
      "Przeglądy instalacji elektrycznych z pełną dokumentacją. Domy, mieszkania, firmy. Bezpieczeństwo, ubezpieczenie, zgodność z prawem. Rzeszów, Krosno, Jasło.",
    h1: "Przeglądy elektryczne — bezpieczeństwo, dokumentacja, spokój",
    heroText:
      "Przegląd instalacji elektrycznej to nie formalność — to realna ochrona domu, rodziny i majątku. Wykonujemy przeglądy z pełną dokumentacją na terenie Rzeszowa, Krosna, Jasła i okolic.",
    icon: "🔍",
    pillar: "przeglady",
    priority: 1,
    sections: {
      problem:
        "Czy Twoja instalacja elektryczna jest bezpieczna? Czy masz aktualny protokół? Przegląd instalacji elektrycznej to nie tylko wymóg prawny — to realna ochrona Twojego domu, rodziny i majątku. Ubezpieczyciel może odmówić wypłaty odszkodowania, jeśli nie masz aktualnych dokumentów.",
      scope: [
        "Przeglądy okresowe instalacji elektrycznych",
        "Przeglądy instalacji w budynkach mieszkalnych",
        "Przeglądy instalacji w obiektach komercyjnych",
        "Przeglądy instalacji w budynkach użyteczności publicznej",
        "Przeglądy odbiorcze nowych instalacji",
        "Ocena stanu technicznego instalacji",
        "Wykrywanie nieprawidłowości i zagrożeń",
        "Protokoły z przeglądu z jasnym opisem stanu instalacji",
      ],
      benefits: [
        "Pełna dokumentacja — protokół z przeglądu",
        "Bezpieczeństwo domowników i pracowników",
        "Zgodność z obowiązkami właściciela nieruchomości",
        "Ochrona ubezpieczeniowa — aktualny protokół jako dowód",
        "Wykrycie usterek, zanim staną się zagrożeniem",
        "Spokój — wiesz, że instalacja jest sprawna",
      ],
      audiences: [
        "Właściciele domów jednorodzinnych",
        "Właściciele mieszkań",
        "Wynajmujący lokale i mieszkania",
        "Właściciele firm i lokali usługowych",
        "Zarządcy nieruchomości",
        "Wspólnoty mieszkaniowe",
        "Deweloperzy — odbiory",
      ],
      process: [
        {
          step: "Umów przegląd",
          description:
            "Zadzwoń lub napisz — ustalamy termin, najczęściej w ciągu kilku dni.",
        },
        {
          step: "Przegląd na miejscu",
          description:
            "Przyjeżdżamy i przeprowadzamy pełny przegląd instalacji elektrycznej.",
        },
        {
          step: "Analiza i ocena",
          description:
            "Oceniamy stan instalacji, wskazujemy ewentualne nieprawidłowości.",
        },
        {
          step: "Protokół i dokumentacja",
          description:
            "Klient otrzymuje czytelny protokół z przeglądu wraz z informacją o stanie instalacji.",
        },
      ],
    },
    faq: [
      {
        question: "Kiedy trzeba wykonać przegląd instalacji elektrycznej?",
        answer:
          "Przeglądy instalacji elektrycznych powinny być wykonywane nie rzadziej niż co 5 lat. Przegląd jest też wymagany przy odbiorze budynku, zmianie właściciela, wynajmie i w wielu sytuacjach ubezpieczeniowych.",
      },
      {
        question: "Czy muszę mieć protokół z przeglądu?",
        answer:
          "Tak — właściciel nieruchomości ma obowiązek posiadania aktualnego protokołu z przeglądu instalacji. Jest to wymagane przez Prawo budowlane.",
      },
      {
        question:
          "Czy ubezpieczyciel może odmówić wypłaty bez aktualnego protokołu?",
        answer:
          "Tak, w praktyce ubezpieczyciel może kwestionować zasadność wypłaty odszkodowania, jeśli instalacja nie miała aktualnego przeglądu. To ważny argument za regularnymi kontrolami.",
      },
      {
        question: "Co obejmuje przegląd instalacji elektrycznej?",
        answer:
          "Przegląd obejmuje oględziny instalacji, pomiary ochronne (rezystancja izolacji, skuteczność ochrony, ciągłość przewodów ochronnych) oraz ocenę stanu technicznego. Po przeglądzie klient otrzymuje protokół.",
      },
      {
        question: "Ile trwa przegląd instalacji?",
        answer:
          "Typowy przegląd domu jednorodzinnego trwa od 1 do 3 godzin, w zależności od wielkości i złożoności instalacji.",
      },
      {
        question: "Czy można zrobić przegląd w mieszkaniu?",
        answer:
          "Tak, wykonujemy przeglądy instalacji elektrycznych w mieszkaniach, domach, firmach i obiektach komercyjnych.",
      },
    ],
    relatedServices: [
      "pomiary-elektryczne",
      "protokoly-elektryczne",
      "elektryk",
    ],
    localPages: [
      "przeglady-elektryczne-rzeszow",
      "przeglady-elektryczne-krosno",
      "przeglady-elektryczne-jaslo",
    ],
  },
  {
    slug: "pomiary-elektryczne",
    name: "Pomiary elektryczne",
    shortName: "Pomiary",
    description:
      "Pomiary ochronne instalacji elektrycznych — rezystancja izolacji, skuteczność ochrony, ciągłość przewodów. Dokumentacja i protokoły.",
    metaTitle: "Pomiary elektryczne — dokumentacja i protokoły | Czarkom",
    metaDescription:
      "Pomiary elektryczne z protokołem — rezystancja izolacji, skuteczność ochrony, ciągłość przewodów. Rzeszów, Krosno, Jasło. Zadzwoń!",
    h1: "Pomiary elektryczne — precyzyjna kontrola instalacji",
    heroText:
      "Wykonujemy pomiary ochronne instalacji elektrycznych z pełną dokumentacją. Rezystancja izolacji, skuteczność ochrony przeciwporażeniowej, ciągłość przewodów — wszystko, czego potrzebujesz do bezpieczeństwa i zgodności z przepisami.",
    icon: "📏",
    pillar: "przeglady",
    priority: 2,
    sections: {
      problem:
        "Pomiary elektryczne to nie formalnośc — to konkretna kontrola, czy Twoja instalacja jest bezpieczna. Wyniki pomiarów trafiają do protokołu, który jest dowodem stanu technicznego instalacji.",
      scope: [
        "Pomiary rezystancji izolacji",
        "Pomiary skuteczności ochrony przeciwporażeniowej",
        "Pomiary ciągłości przewodów ochronnych",
        "Pomiary rezystancji uziemienia",
        "Pomiary natężenia oświetlenia",
        "Pomiary parametrów pętli zwarciowej",
        "Dokumentacja pomiarowa z wynikami",
      ],
      benefits: [
        "Precyzyjne wyniki z użyciem profesjonalnego sprzętu",
        "Pełna dokumentacja pomiarowa",
        "Wykrycie ukrytych problemów w instalacji",
        "Protokół przydatny do ubezpieczenia, odbioru, kontroli",
        "Szybka realizacja i jasna komunikacja wyników",
      ],
      audiences: [
        "Właściciele nieruchomości",
        "Zarządcy budynków",
        "Firmy i przedsiębiorcy",
        "Deweloperzy",
        "Wynajmujący",
      ],
      process: [
        {
          step: "Zgłoszenie",
          description: "Skontaktuj się — ustalamy zakres i termin.",
        },
        {
          step: "Pomiary na obiekcie",
          description:
            "Przyjeżdżamy z profesjonalnym sprzętem i przeprowadzamy pomiary.",
        },
        {
          step: "Analiza wyników",
          description: "Opracowujemy wyniki i oceniamy stan instalacji.",
        },
        {
          step: "Protokół pomiarowy",
          description:
            "Otrzymujesz czytelny protokół z wynikami pomiarów i oceną stanu.",
        },
      ],
    },
    faq: [
      {
        question: "Jakie pomiary elektryczne wykonujecie?",
        answer:
          "Wykonujemy pełen zakres pomiarów ochronnych: rezystancja izolacji, skuteczność ochrony przeciwporażeniowej, ciągłość przewodów ochronnych, rezystancja uziemienia i inne.",
      },
      {
        question: "Czy pomiary są potrzebne do ubezpieczenia?",
        answer:
          "Tak — aktualny protokół z pomiarów może być wymagany przez ubezpieczyciela, szczególnie w przypadku szkody.",
      },
      {
        question: "Ile kosztują pomiary elektryczne?",
        answer:
          "Koszt zależy od wielkości obiektu i zakresu pomiarów. Skontaktuj się z nami — przygotujemy indywidualną wycenę.",
      },
    ],
    relatedServices: [
      "przeglady-elektryczne",
      "protokoly-elektryczne",
      "elektryk",
    ],
    localPages: [
      "pomiary-elektryczne-rzeszow",
      "pomiary-elektryczne-krosno",
      "pomiary-elektryczne-jaslo",
    ],
  },
  {
    slug: "protokoly-elektryczne",
    name: "Protokoły elektryczne",
    shortName: "Protokoły",
    description:
      "Protokoły z pomiarów elektrycznych — dokumentacja do odbioru, ubezpieczenia, wynajmu, sprzedaży nieruchomości.",
    metaTitle: "Protokoły elektryczne — dokumentacja pomiarowa | Czarkom",
    metaDescription:
      "Protokoły z pomiarów elektrycznych — do odbioru, ubezpieczenia, wynajmu, sprzedaży. Czytelna dokumentacja. Rzeszów, Krosno, Jasło.",
    h1: "Protokoły elektryczne — dokumentacja, na którą możesz liczyć",
    heroText:
      "Protokół z pomiarów elektrycznych to ważny dokument — potrzebny przy odbiorze, kontroli, wynajmie, sprzedaży i w sprawach ubezpieczeniowych. Wystawiamy czytelne protokoły z pełną dokumentacją pomiarową.",
    icon: "📋",
    pillar: "przeglady",
    priority: 3,
    sections: {
      problem:
        "Potrzebujesz protokołu z pomiarów elektrycznych? Do odbioru budynku, dla ubezpieczyciela, przy wynajmie albo sprzedaży? Protokół to dokument potwierdzający stan Twojej instalacji — wystawiamy go po wykonaniu rzetelnych pomiarów.",
      scope: [
        "Protokoły z pomiarów ochronnych",
        "Protokoły odbiorcze instalacji",
        "Protokoły okresowe — co 5 lat",
        "Protokoły dla ubezpieczycieli",
        "Protokoły do wynajmu i sprzedaży nieruchomości",
        "Protokoły dla zarządców i wspólnot",
        "Dokumentacja powykonawcza",
      ],
      benefits: [
        "Czytelny protokół zrozumiały dla każdego",
        "Dokument spełniający wymogi prawne",
        "Szybka realizacja — bez zbędnego czekania",
        "Protokół do odbioru, ubezpieczenia, kontroli",
        "Jasna informacja o stanie instalacji",
      ],
      audiences: [
        "Właściciele nieruchomości potrzebujący dokumentacji",
        "Wynajmujący mieszkania i lokale",
        "Sprzedający nieruchomości",
        "Deweloperzy — odbiory",
        "Zarządcy budynków",
        "Wspólnoty mieszkaniowe",
      ],
      process: [
        {
          step: "Zamów protokół",
          description:
            "Powiedz nam, do czego potrzebujesz protokołu — dobierzemy zakres.",
        },
        {
          step: "Pomiary",
          description: "Wykonujemy pomiary na obiekcie.",
        },
        {
          step: "Dokumentacja",
          description:
            "Sporządzamy protokół z wynikami — czytelny i zgodny z normami.",
        },
        {
          step: "Przekazanie",
          description: "Otrzymujesz gotowy protokół.",
        },
      ],
    },
    faq: [
      {
        question: "Czy protokół jest potrzebny przy wynajmie lub sprzedaży?",
        answer:
          "Tak — przy wynajmie i sprzedaży nieruchomości aktualny protokół z pomiarów jest ważnym dokumentem potwierdzającym stan instalacji.",
      },
      {
        question: "Co zawiera protokół z pomiarów elektrycznych?",
        answer:
          "Protokół zawiera wyniki pomiarów ochronnych, ocenę stanu technicznego instalacji, datę badania i dane osoby wykonującej pomiary.",
      },
      {
        question: "Jak szybko otrzymam protokół?",
        answer:
          "Protokół jest zazwyczaj gotowy w dniu wykonania pomiarów lub w ciągu 1–2 dni roboczych.",
      },
      {
        question: "Czy elektryk wystawi protokół do domu?",
        answer:
          "Tak — przyjeżdżamy na miejsce, wykonujemy pomiary i wystawiamy protokół na miejscu lub dostarczamy go w krótkim czasie.",
      },
    ],
    relatedServices: [
      "przeglady-elektryczne",
      "pomiary-elektryczne",
      "elektryk",
    ],
    localPages: [
      "protokoly-elektryczne-rzeszow",
      "protokoly-elektryczne-krosno",
      "protokoly-elektryczne-jaslo",
    ],
  },
  {
    slug: "monitoring-cctv",
    name: "Monitoring CCTV",
    shortName: "Monitoring",
    description:
      "Montaż i konfiguracja systemów monitoringu CCTV — kamery, rejestratory, podgląd z telefonu. Domy, firmy, posesje.",
    metaTitle: "Monitoring CCTV — montaż kamer i systemów | Czarkom",
    metaDescription:
      "Monitoring CCTV — montaż kamer, rejestratorów, podgląd z telefonu. Domy, firmy, posesje. Rzeszów, Krosno, Jasło. Zadzwoń!",
    h1: "Monitoring CCTV — kamery i systemy bezpieczeństwa",
    heroText:
      "Montujemy i konfigurujemy systemy monitoringu CCTV dla domów, firm i posesji. Kamery, rejestratory, podgląd z telefonu — wszystko w jednym miejscu.",
    icon: "📹",
    pillar: "monitoring",
    priority: 6,
    sections: {
      problem:
        "Chcesz mieć kontrolę nad tym, co dzieje się wokół Twojego domu lub firmy? Monitoring CCTV to skuteczne narzędzie ochrony — odstraszasz, rejestrujesz i masz podgląd w dowolnym momencie.",
      scope: [
        "Montaż kamer wewnętrznych i zewnętrznych",
        "Instalacja rejestratorów DVR/NVR",
        "Konfiguracja podglądu zdalnego (telefon, tablet, komputer)",
        "Systemy monitoringu dla domów i posesji",
        "Systemy monitoringu dla firm i magazynów",
        "Rozbudowa istniejących systemów",
        "Serwis i konserwacja",
      ],
      benefits: [
        "Bezpieczeństwo 24/7",
        "Podgląd na żywo z telefonu",
        "Odstraszanie intruzów",
        "Nagrywanie zdarzeń — dowody w razie potrzeby",
        "Profesjonalny montaż i konfiguracja",
        "Doradztwo w doborze systemu",
      ],
      audiences: [
        "Właściciele domów i posesji",
        "Firmy i przedsiębiorcy",
        "Sklepy i lokale usługowe",
        "Magazyny i hale",
        "Wspólnoty mieszkaniowe",
      ],
      process: [
        {
          step: "Konsultacja",
          description: "Omawiamy potrzeby i specyfikę obiektu.",
        },
        {
          step: "Projekt",
          description: "Dobieramy kamery, rejestrator i rozmieszczenie.",
        },
        {
          step: "Montaż",
          description:
            "Instalujemy system — kamery, okablowanie, rejestrator.",
        },
        {
          step: "Konfiguracja i szkolenie",
          description:
            "Konfigurujemy podgląd zdalny i pokazujemy, jak korzystać z systemu.",
        },
      ],
    },
    faq: [
      {
        question: "Ile kamer potrzeba do domu?",
        answer:
          "Zależy od wielkości i układu obiektu. Typowo dla domu jednorodzinnego wystarcza 4–8 kamer. Pomagamy dobrać odpowiednią liczbę.",
      },
      {
        question: "Czy monitoring działa z telefonu?",
        answer:
          "Tak — konfigurujemy podgląd na żywo na telefonie, tablecie i komputerze. Masz dostęp z dowolnego miejsca.",
      },
      {
        question: "Czy kamery działają w nocy?",
        answer:
          "Tak — montujemy kamery z podświetleniem IR lub technologią ColorVu, które zapewniają czytelny obraz nawet w pełnej ciemności.",
      },
      {
        question: "Czy można rozbudować istniejący system?",
        answer:
          "Tak — rozbudowujemy istniejące systemy o dodatkowe kamery i funkcje.",
      },
    ],
    relatedServices: [
      "kamery-do-domu",
      "monitoring-firmy",
      "serwis-monitoringu",
    ],
    localPages: [
      "monitoring-rzeszow",
      "monitoring-krosno",
      "monitoring-jaslo",
    ],
  },
  {
    slug: "automatyka",
    name: "Automatyka",
    shortName: "Automatyka",
    description:
      "Automatyka budynkowa — inteligentne sterowanie instalacjami, integracja systemów, oszczędność energii.",
    metaTitle: "Automatyka budynkowa — sterowanie i integracja | Czarkom",
    metaDescription:
      "Automatyka budynkowa — sterowanie oświetleniem, ogrzewaniem, integracja systemów. Wygoda, oszczędność, kontrola. Rzeszów, Krosno, Jasło.",
    h1: "Automatyka budynkowa — wygoda, oszczędność, kontrola",
    heroText:
      "Wdrażamy systemy automatyki budynkowej — sterowanie oświetleniem, ogrzewaniem, roletami i wiele więcej. Oszczędzasz energię, zyskujesz wygodę i kontrolę nad budynkiem.",
    icon: "⚙️",
    pillar: "automatyka",
    priority: 7,
    sections: {
      problem:
        "Chcesz, żeby Twój dom lub budynek pracował mądrzej? Automatyka budynkowa to oszczędność energii, wygoda i pełna kontrola — z jednej aplikacji.",
      scope: [
        "Automatyka budynkowa",
        "Inteligentne sterowanie oświetleniem",
        "Sterowanie ogrzewaniem i klimatyzacją",
        "Automatyczne rolety i żaluzje",
        "Scenariusze i automatyzacje",
        "Integracja systemów (alarmy, monitoring, HVAC)",
        "Sterowanie z aplikacji mobilnej",
      ],
      benefits: [
        "Oszczędność energii — do 30% mniej na ogrzewaniu",
        "Wygoda — sterowanie z telefonu",
        "Bezpieczeństwo — automatyczne reakcje na zdarzenia",
        "Komfort — scenariusze dopasowane do Twojego życia",
        "Przyszłościowe rozwiązania — łatwa rozbudowa",
      ],
      audiences: [
        "Właściciele domów jednorodzinnych",
        "Właściciele apartamentów",
        "Firmy i biura",
        "Deweloperzy",
        "Obiekty komercyjne",
      ],
      process: [
        {
          step: "Analiza potrzeb",
          description: "Rozmawiamy o tym, co chcesz automatyzować.",
        },
        {
          step: "Projekt systemu",
          description: "Dobieramy rozwiązania i komponenty.",
        },
        {
          step: "Instalacja",
          description: "Montujemy i konfigurujemy system.",
        },
        {
          step: "Szkolenie",
          description: "Pokazujemy, jak korzystać z systemu.",
        },
      ],
    },
    faq: [
      {
        question: "Czy automatykę można zainstalować w istniejącym budynku?",
        answer:
          "Tak — wiele rozwiązań automatyki budynkowej można wdrożyć bez rozbudowy instalacji, korzystając z technologii bezprzewodowych.",
      },
      {
        question: "Ile kosztuje automatyka budynkowa?",
        answer:
          "Koszt zależy od zakresu systemu. Podstawowe rozwiązania zaczynają się od kilku tysięcy złotych. Skontaktuj się po indywidualną wycenę.",
      },
    ],
    relatedServices: ["smart-home", "bms", "sterowanie-oswietleniem"],
    localPages: [
      "automatyka-rzeszow",
      "automatyka-krosno",
      "automatyka-jaslo",
    ],
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    shortName: "Smart Home",
    description:
      "Inteligentny dom — sterowanie oświetleniem, ogrzewaniem, roletami z telefonu. Scenariusze i automatyzacje.",
    metaTitle: "Smart Home — inteligentny dom | Czarkom",
    metaDescription:
      "Smart Home — inteligentny dom z Czarkom. Sterowanie oświetleniem, ogrzewaniem, roletami z telefonu. Rzeszów, Krosno, Jasło.",
    h1: "Smart Home — inteligentny dom pod Twoją kontrolą",
    heroText:
      "Zaprojektujemy i wdrożymy inteligentny dom dostosowany do Twoich potrzeb. Sterowanie oświetleniem, ogrzewaniem, roletami — wszystko z jednej aplikacji.",
    icon: "🏠",
    pillar: "automatyka",
    priority: 8,
    sections: {
      problem:
        "Chcesz mieć dom, który reaguje na Twoje potrzeby? Smart Home to nie gadżet — to realna wygoda, oszczędność i bezpieczeństwo na co dzień.",
      scope: [
        "Projektowanie systemów smart home",
        "Sterowanie oświetleniem",
        "Sterowanie ogrzewaniem i klimatyzacją",
        "Automatyczne rolety i żaluzje",
        "Scenariusze i harmonogramy",
        "Integracja z asystentami głosowymi",
        "Systemy bezpieczeństwa",
      ],
      benefits: [
        "Wszystko pod kontrolą w jednej aplikacji",
        "Oszczędność energii",
        "Wygoda na co dzień",
        "Bezpieczny dom nawet pod Twoją nieobecność",
      ],
      audiences: [
        "Właściciele domów",
        "Osoby budujące nowy dom",
        "Ludzie ceniący wygodę i technologię",
      ],
      process: [
        { step: "Rozmowa", description: "Poznajemy Twoje potrzeby." },
        { step: "Projekt", description: "Dobieramy rozwiązania." },
        {
          step: "Realizacja",
          description: "Montujemy i konfigurujemy.",
        },
        { step: "Przekazanie", description: "Szkolimy i oddajemy system." },
      ],
    },
    faq: [
      {
        question: "Od czego zacząć smart home?",
        answer:
          "Najczęściej zaczynamy od oświetlenia i ogrzewania — to daje najszybsze efekty. Potem można rozbudować o rolety, monitoring i inne elementy.",
      },
    ],
    relatedServices: ["automatyka", "bms", "sterowanie-ogrzewaniem"],
    localPages: [],
  },
  {
    slug: "bms",
    name: "BMS",
    shortName: "BMS",
    description:
      "System zarządzania budynkiem BMS — monitoring, kontrola, optymalizacja instalacji technicznych.",
    metaTitle: "BMS — system zarządzania budynkiem | Czarkom",
    metaDescription:
      "BMS — system zarządzania budynkiem. Monitoring, kontrola i optymalizacja instalacji. Oszczędność i efektywność. Rzeszów, Krosno, Jasło.",
    h1: "BMS — zarządzanie budynkiem z jednego miejsca",
    heroText:
      "Wdrażamy systemy BMS do zarządzania instalacjami technicznymi budynku — HVAC, oświetlenie, bezpieczeństwo, energia — wszystko pod kontrolą.",
    icon: "🏢",
    pillar: "automatyka",
    priority: 9,
    sections: {
      problem:
        "Zarządzasz budynkiem komercyjnym lub wielorodzinnym? BMS to system, który daje Ci pełną kontrolę nad instalacjami — od ogrzewania po monitoring — i pomaga oszczędzać.",
      scope: [
        "Projektowanie systemów BMS",
        "Integracja instalacji budynkowych",
        "Monitoring parametrów budynku",
        "Optymalizacja zużycia energii",
        "Sterowanie HVAC, oświetleniem, bezpieczeństwem",
        "Raportowanie i analiza danych",
      ],
      benefits: [
        "Pełna kontrola nad budynkiem",
        "Oszczędność energii i kosztów eksploatacji",
        "Szybka reakcja na awarie",
        "Raporty i dane do analizy",
      ],
      audiences: [
        "Zarządcy budynków komercyjnych",
        "Deweloperzy",
        "Obiekty biurowe i handlowe",
        "Budynki wielorodzinne",
      ],
      process: [
        { step: "Audyt", description: "Analizujemy instalacje budynku." },
        { step: "Projekt", description: "Opracowujemy system BMS." },
        { step: "Wdrożenie", description: "Instalujemy i integrujemy." },
        {
          step: "Przekazanie",
          description: "Szkolimy i uruchamiamy monitoring.",
        },
      ],
    },
    faq: [
      {
        question: "Czym jest BMS?",
        answer:
          "BMS (Building Management System) to system zarządzania budynkiem, który integruje i kontroluje instalacje techniczne — ogrzewanie, wentylację, oświetlenie, bezpieczeństwo.",
      },
    ],
    relatedServices: ["automatyka", "smart-home", "integracje"],
    localPages: [],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(
  pillar: ServiceData["pillar"]
): ServiceData[] {
  return services.filter((s) => s.pillar === pillar);
}
