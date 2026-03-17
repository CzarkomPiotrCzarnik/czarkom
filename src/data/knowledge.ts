export interface KnowledgeCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export interface KnowledgeArticle {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  intro: string;
  sections: {
    heading: string;
    content: string;
    list?: string[];
  }[];
  faq?: { question: string; answer: string }[];
  relatedArticles?: string[];
  relatedServices?: string[];
}

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: "instalacje-elektryczne",
    name: "Instalacje elektryczne",
    icon: "⚡",
    description:
      "Przepisy, normy, pomiary i bezpieczeństwo pracy z prądem. Wiedza niezbędna przy budowie, remoncie i eksploatacji instalacji.",
  },
  {
    slug: "sieci-i-telekomunikacja",
    name: "Sieci i telekomunikacja",
    icon: "🌐",
    description:
      "Okablowanie strukturalne, Wi-Fi, konfiguracja sieci, standardy RJ-45 i nowoczesne technologie łączności.",
  },
  {
    slug: "automatyka",
    name: "Automatyka i smart home",
    icon: "🤖",
    description:
      "Sterowanie budynkiem, systemy BMS, inteligentne instalacje, IoT i nowoczesna automatyka domowa i przemysłowa.",
  },
  {
    slug: "systemy-cctv",
    name: "Systemy CCTV",
    icon: "📹",
    description:
      "Kamery, rejestratory, projektowanie monitoringu i kontrola dostępu. Wszystko o systemach bezpieczeństwa.",
  },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  // ──── INSTALACJE ELEKTRYCZNE ────
  {
    slug: "przepisy-i-normy-elektryczne",
    category: "instalacje-elektryczne",
    title: "Przepisy i normy elektryczne — co musisz wiedzieć",
    shortTitle: "Przepisy i normy elektryczne",
    metaTitle: "Przepisy i normy elektryczne — przewodnik | Czarkom",
    metaDescription:
      "Najważniejsze przepisy i normy dotyczące instalacji elektrycznych w Polsce. PN-HD 60364, prawo budowlane, obowiązki właściciela — kompendium wiedzy.",
    icon: "📜",
    intro:
      "Instalacje elektryczne w Polsce podlegają ścisłym przepisom i normom. Ich znajomość jest kluczowa zarówno dla elektryków, jak i właścicieli nieruchomości. Oto najważniejsze regulacje, które warto znać.",
    sections: [
      {
        heading: "Najważniejsze normy",
        content:
          "Podstawową normą dotyczącą instalacji elektrycznych w budynkach jest seria PN-HD 60364 (dawniej PN-IEC 60364). Określa ona wymagania dotyczące projektowania, montażu i sprawdzania instalacji.",
        list: [
          "PN-HD 60364 — instalacje elektryczne w budynkach",
          "PN-EN 61439 — rozdzielnice niskonapięciowe",
          "PN-EN 62305 — ochrona odgromowa",
          "PN-EN 50110 — eksploatacja urządzeń elektrycznych",
        ],
      },
      {
        heading: "Prawo budowlane a instalacje",
        content:
          "Prawo budowlane nakłada obowiązek wykonywania przeglądów instalacji elektrycznych co 5 lat. Dotyczy to zarówno budynków mieszkalnych, jak i komercyjnych. Właściciel lub zarządca budynku odpowiada za stan instalacji.",
      },
      {
        heading: "Kto może wykonywać instalacje?",
        content:
          "Prace przy instalacjach elektrycznych mogą wykonywać wyłącznie osoby posiadające odpowiednie uprawnienia — świadectwo kwalifikacyjne SEP (Stowarzyszenie Elektryków Polskich) w zakresie eksploatacji (E) lub dozoru (D).",
        list: [
          "Uprawnienia E — eksploatacja (wykonawstwo)",
          "Uprawnienia D — dozór (nadzór i projektowanie)",
          "Uprawnienia w zakresie pomiarów",
        ],
      },
      {
        heading: "Obowiązki właściciela nieruchomości",
        content:
          "Właściciel ma obowiązek utrzymywać instalację w stanie sprawnym technicznie, zlecać przeglądy okresowe i przechowywać dokumentację — protokoły pomiarowe i techniczne.",
      },
    ],
    faq: [
      {
        question: "Jak często trzeba robić przegląd instalacji elektrycznej?",
        answer:
          "Zgodnie z prawem budowlanym — co 5 lat. Wcześniej, jeśli nastąpi zmiana właściciela, ubezpieczenie tego wymaga lub wystąpi awaria.",
      },
      {
        question: "Czy mogę sam naprawić gniazdko?",
        answer:
          "Drobne naprawy (wymiana gniazdka, włącznika) formalnie powinny być wykonywane przez osoby z uprawnieniami. W praktyce wielu ludzi robi to samodzielnie, ale przy poważniejszych pracach konieczny jest elektryk z SEP.",
      },
    ],
    relatedArticles: ["bezpieczenstwo-pracy-z-pradem", "pomiary-elektryczne-poradnik"],
    relatedServices: ["przeglady-elektryczne", "elektryk"],
  },
  {
    slug: "bezpieczenstwo-pracy-z-pradem",
    category: "instalacje-elektryczne",
    title: "Bezpieczeństwo pracy z prądem — zasady i zagrożenia",
    shortTitle: "Bezpieczeństwo pracy z prądem",
    metaTitle: "Bezpieczeństwo pracy z prądem — zasady i zagrożenia | Czarkom",
    metaDescription:
      "Jak bezpiecznie pracować z prądem? Zagrożenia, zasady BHP, ochrona przeciwporażeniowa. Poradnik dla elektryków i właścicieli domów.",
    icon: "🛡️",
    intro:
      "Prąd elektryczny jest niewidzialny i bardzo niebezpieczny. Porażenie może prowadzić do poparzeń, utraty przytomności, a nawet śmierci. Oto zasady, które warto znać — niezależnie czy jesteś elektrykiem, czy właścicielem domu.",
    sections: [
      {
        heading: "Zagrożenia związane z prądem",
        content:
          "Główne zagrożenia to porażenie elektryczne, poparzenia łukiem elektrycznym i pożar instalacji. Już prąd o natężeniu 30 mA przepływający przez ciało człowieka może być śmiertelny.",
        list: [
          "Porażenie — przepływ prądu przez ciało",
          "Poparzenie łukiem elektrycznym",
          "Pożar instalacji lub urządzeń",
          "Uszkodzenie sprzętu elektronicznego",
        ],
      },
      {
        heading: "Ochrona przeciwporażeniowa",
        content:
          "W każdej instalacji powinny działać dwa poziomy ochrony: podstawowa (izolacja, osłony) i dodatkowa (wyłączniki różnicowoprądowe, uziemienie). Wyłącznik RCD o czułości 30 mA to absolutne minimum w domowej instalacji.",
      },
      {
        heading: "Zasady bezpiecznej pracy",
        content: "Podstawowe zasady BHP przy pracy z instalacjami elektrycznymi:",
        list: [
          "Zawsze wyłącz zasilanie przed rozpoczęciem prac",
          "Sprawdź brak napięcia miernikiem",
          "Zabezpiecz rozdzielnicę przed przypadkowym załączeniem",
          "Używaj narzędzi izolowanych",
          "Nie pracuj sam przy instalacjach pod napięciem",
          "Noś obuwie ochronne z izolowaną podeszwą",
        ],
      },
    ],
    faq: [
      {
        question: "Co robić, gdy ktoś zostanie porażony prądem?",
        answer:
          "Nie dotykaj poszkodowanego! Wyłącz zasilanie (wyłącznik główny). Jeśli to niemożliwe, odsuń osobę od źródła prądu izolowanym przedmiotem. Wezwij pogotowie (112). Jeśli poszkodowany nie oddycha — rozpocznij resuscytację.",
      },
    ],
    relatedArticles: ["przepisy-i-normy-elektryczne", "pomiary-elektryczne-poradnik"],
    relatedServices: ["elektryk", "przeglady-elektryczne"],
  },
  {
    slug: "pomiary-elektryczne-poradnik",
    category: "instalacje-elektryczne",
    title: "Pomiary elektryczne — co, kiedy i po co?",
    shortTitle: "Pomiary elektryczne",
    metaTitle: "Pomiary elektryczne — poradnik: rodzaje, terminy, protokoły | Czarkom",
    metaDescription:
      "Jakie pomiary elektryczne trzeba wykonywać? Rezystancja izolacji, ochrona przeciwporażeniowa, uziemienie. Kiedy robić pomiary i do czego potrzebny protokół.",
    icon: "📏",
    intro:
      "Pomiary elektryczne to nie formalność — to realna weryfikacja bezpieczeństwa instalacji. Dowiedz się, jakie pomiary są wymagane, kiedy je wykonywać i co zawiera protokół pomiarowy.",
    sections: [
      {
        heading: "Rodzaje pomiarów",
        content: "W ramach standardowego przeglądu instalacji wykonuje się kilka rodzajów pomiarów:",
        list: [
          "Rezystancja izolacji — sprawdza, czy izolacja przewodów nie jest uszkodzona",
          "Skuteczność ochrony przeciwporażeniowej — weryfikuje, czy zabezpieczenia zadziałają w razie zwarcia",
          "Ciągłość przewodów ochronnych — potwierdza, że uziemienie jest prawidłowe",
          "Rezystancja uziemienia — mierzy jakość połączenia z ziemią",
          "Impedancja pętli zwarcia — pozwala ocenić, czy wyłączniki zadziałają w odpowiednim czasie",
        ],
      },
      {
        heading: "Kiedy robić pomiary?",
        content:
          "Pomiary obowiązkowe: co 5 lat (przegląd okresowy), po wykonaniu nowej instalacji, po modernizacji, po zdarzeniu losowym (zalanie, pożar). Często wymagane przez ubezpieczyciela.",
      },
      {
        heading: "Protokół pomiarowy",
        content:
          "Protokół z pomiarów to dokument potwierdzający stan instalacji. Zawiera wyniki poszczególnych pomiarów, ocenę stanu technicznego i podpis osoby z uprawnieniami. Przydaje się do ubezpieczenia, odbioru budynku, wynajmu i sprzedaży nieruchomości.",
      },
    ],
    faq: [
      {
        question: "Czy sam mogę wykonać pomiary elektryczne?",
        answer:
          "Nie — pomiary muszą być wykonane przez osobę z uprawnieniami SEP i profesjonalnym sprzętem pomiarowym. Tylko taki protokół ma wartość prawną.",
      },
      {
        question: "Ile kosztują pomiary elektryczne?",
        answer:
          "Koszt zależy od wielkości obiektu i zakresu pomiarów. Dla mieszkania to zwykle kilkaset złotych, dla domu lub firmy — zależy od rozmiaru instalacji. Skontaktuj się z nami po wycenę.",
      },
    ],
    relatedArticles: ["przepisy-i-normy-elektryczne", "systemy-uziemien"],
    relatedServices: ["pomiary-elektryczne", "protokoly-elektryczne", "przeglady-elektryczne"],
  },
  {
    slug: "systemy-uziemien",
    category: "instalacje-elektryczne",
    title: "Systemy uziemień — rodzaje, działanie i znaczenie",
    shortTitle: "Systemy uziemień",
    metaTitle: "Systemy uziemień — TN, TT, IT: rodzaje i zastosowania | Czarkom",
    metaDescription:
      "Czym jest uziemienie i dlaczego jest ważne? Systemy TN-C, TN-S, TN-C-S, TT, IT — różnice, zastosowania, wymagania. Poradnik.",
    icon: "⏚",
    intro:
      "Uziemienie to jeden z najważniejszych elementów bezpieczeństwa instalacji elektrycznej. Chroni ludzi przed porażeniem i urządzenia przed przepięciami. Poznaj rodzaje systemów uziemień stosowanych w Polsce.",
    sections: [
      {
        heading: "Do czego służy uziemienie?",
        content:
          "Uziemienie zapewnia bezpieczne odprowadzenie prądu zwarciowego do ziemi. Dzięki temu w razie uszkodzenia izolacji prąd płynie do ziemi zamiast przez ciało człowieka, a zabezpieczenia (wyłączniki) mogą szybko odłączyć zasilanie.",
      },
      {
        heading: "Rodzaje systemów uziemień",
        content: "W instalacjach niskiego napięcia stosuje się kilka systemów uziemień:",
        list: [
          "TN-C — przewód neutralny i ochronny połączone (PEN). Starsze instalacje.",
          "TN-S — osobne przewody neutralny (N) i ochronny (PE). Nowoczesny standard.",
          "TN-C-S — kombinacja TN-C i TN-S. Najczęściej stosowany w Polsce.",
          "TT — niezależne uziemienie odbiorcy. Stosowane w budynkach bez TN.",
          "IT — instalacja izolowana od ziemi. Zastosowania specjalne (szpitale, przemysł).",
        ],
      },
      {
        heading: "Który system jest najlepszy?",
        content:
          "Dla nowych domów i mieszkań standardem jest TN-C-S lub TN-S. System TT stosuje się tam, gdzie operator nie zapewnia uziemienia. Wybór zależy od warunków przyłączenia i rodzaju budynku.",
      },
    ],
    relatedArticles: ["pomiary-elektryczne-poradnik", "bezpieczenstwo-pracy-z-pradem"],
    relatedServices: ["elektryk", "instalacje-elektryczne"],
  },

  // ──── SIECI I TELEKOMUNIKACJA ────
  {
    slug: "oznaczenia-kabli-lan-rj45",
    category: "sieci-i-telekomunikacja",
    title: "Oznaczenia kabli LAN — standard RJ-45 (T568A i T568B)",
    shortTitle: "Oznaczenia kabli LAN RJ-45",
    metaTitle: "Oznaczenia kabli LAN RJ-45 — T568A i T568B | Czarkom",
    metaDescription:
      "Kolejność kolorów w kablu LAN RJ-45 — standardy T568A i T568B. Kabel prosty vs skrośny. Schemat podłączenia z opisem.",
    icon: "🔌",
    intro:
      "Standardowe schematy okablowania RJ-45 według norm T568A i T568B stosowane w sieciach komputerowych. Oto kolejność żył i najważniejsze informacje.",
    sections: [
      {
        heading: "Standard T568A",
        content: "Kolejność żył w standardzie T568A (standard rządowy USA, rzadziej stosowany w Polsce):",
        list: [
          "1. Biało-zielony",
          "2. Zielony",
          "3. Biało-pomarańczowy",
          "4. Niebieski",
          "5. Biało-niebieski",
          "6. Pomarańczowy",
          "7. Biało-brązowy",
          "8. Brązowy",
        ],
      },
      {
        heading: "Standard T568B",
        content: "Kolejność żył w standardzie T568B (najczęściej używany w Polsce i Europie):",
        list: [
          "1. Biało-pomarańczowy",
          "2. Pomarańczowy",
          "3. Biało-zielony",
          "4. Niebieski",
          "5. Biało-niebieski",
          "6. Zielony",
          "7. Biało-brązowy",
          "8. Brązowy",
        ],
      },
      {
        heading: "Kabel prosty vs skrośny",
        content:
          "Kabel prosty (patch cord) ma oba końce zaciśnięte w tym samym standardzie (T568A–T568A lub T568B–T568B). Służy do łączenia urządzeń z switchem/routerem. Kabel skrośny (crossover) ma jeden koniec T568A, drugi T568B — używany do bezpośredniego łączenia dwóch komputerów. Nowoczesne urządzenia z Auto-MDI/X wykrywają typ kabla automatycznie.",
      },
      {
        heading: "Którą normę wybrać?",
        content:
          "W Polsce i Europie standardem jest T568B. Jeśli rozbudowujesz istniejącą sieć — sprawdź, jaki standard jest już użyty i zachowaj spójność. Najważniejsze, aby oba końce kabla miały ten sam standard (przy kablu prostym).",
      },
    ],
    faq: [
      {
        question: "Jaką normę stosuje się w Polsce?",
        answer: "W Polsce i Europie standardem jest T568B. T568A to głównie standard amerykański.",
      },
      {
        question: "Czy potrzebuję kabla skrośnego?",
        answer:
          "Praktycznie nie — nowoczesne switche i routery mają Auto-MDI/X i rozpoznają typ kabla automatycznie. Kabel skrośny bywa potrzebny tylko przy bardzo starym sprzęcie.",
      },
    ],
    relatedArticles: ["okablowanie-strukturalne", "kategorie-kabli-sieciowych"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "okablowanie-strukturalne",
    category: "sieci-i-telekomunikacja",
    title: "Okablowanie strukturalne — jak zaprojektować sieć w domu i firmie",
    shortTitle: "Okablowanie strukturalne",
    metaTitle: "Okablowanie strukturalne — projekt sieci LAN dla domu i firmy | Czarkom",
    metaDescription:
      "Jak zaprojektować okablowanie strukturalne? Kategorie kabli, topologia, gniazda, patch panele. Poradnik dla domu i małej firmy.",
    icon: "🏗️",
    intro:
      "Okablowanie strukturalne to fundament dobrej sieci. Dobrze zaprojektowana sieć kablowa działa niezawodnie przez lata i jest łatwa w rozbudowie. Oto co warto wiedzieć planując sieć LAN.",
    sections: [
      {
        heading: "Co to jest okablowanie strukturalne?",
        content:
          "Okablowanie strukturalne to uporządkowany system kabli, gniazd, patch paneli i szaf krosowniczych. Zapewnia elastyczność — można łatwo zmieniać konfigurację sieci bez przebudowy okablowania.",
      },
      {
        heading: "Kategorie kabli",
        content: "Kable sieciowe dzielą się na kategorie różniące się przepustowością:",
        list: [
          "Cat 5e — do 1 Gbps, wystarczający dla większości zastosowań domowych",
          "Cat 6 — do 1 Gbps (10 Gbps do 55 m), lepsze ekranowanie",
          "Cat 6a — do 10 Gbps na pełnych 100 m, rekomendowany dla nowych instalacji",
          "Cat 7 — do 10 Gbps, pełne ekranowanie, droższy",
          "Cat 8 — do 40 Gbps, zastosowania serwerowe i data center",
        ],
      },
      {
        heading: "Planowanie instalacji",
        content: "Przy projektowaniu okablowania warto pamiętać o kilku zasadach:",
        list: [
          "Poprowadź kable do każdego pomieszczenia — nawet jeśli teraz nie potrzebujesz",
          "Używaj minimum Cat 6a — to inwestycja na lata",
          "Planuj punkty dla kamer, access pointów i urządzeń IoT",
          "Centralna szafka krosownicza — ułatwia zarządzanie",
          "Unikaj prowadzenia kabli sieciowych równolegle z elektrycznymi",
          "Zachowaj maksymalną długość 90 m dla kabla stałego (+ 10 m patch cordy)",
        ],
      },
    ],
    faq: [
      {
        question: "Czy warto prowadzić kable, skoro jest Wi-Fi?",
        answer:
          "Zdecydowanie tak. WiFi jest wygodne, ale kabel LAN daje stabilność, niskie opóźnienia i pełną przepustowość. Monitoring, praca zdalna, gaming — tu kabel jest najlepszy. Idealna sieć to kabel + Wi-Fi.",
      },
      {
        question: "Jakiej kategorii kabla użyć w nowym domu?",
        answer:
          "Rekomendujemy Cat 6a — obsługuje 10 Gbps i jest przyszłościowy. Różnica w cenie w porównaniu do Cat 5e jest niewielka, a kabel zostanie w ścianach na lata.",
      },
    ],
    relatedArticles: ["oznaczenia-kabli-lan-rj45", "jak-poprawic-zasieg-wifi"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "kategorie-kabli-sieciowych",
    category: "sieci-i-telekomunikacja",
    title: "Kategorie kabli sieciowych — Cat 5e, 6, 6a, 7, 8",
    shortTitle: "Kategorie kabli sieciowych",
    metaTitle: "Kategorie kabli sieciowych Cat 5e, 6, 6a, 7, 8 — porównanie | Czarkom",
    metaDescription:
      "Porównanie kategorii kabli sieciowych: Cat 5e, Cat 6, Cat 6a, Cat 7, Cat 8. Przepustowość, zastosowania, jaki kabel wybrać do domu i firmy.",
    icon: "📊",
    intro:
      "Wybór odpowiedniej kategorii kabla sieciowego ma kluczowe znaczenie dla wydajności i przyszłościowości sieci. Porównujemy najpopularniejsze kategorie.",
    sections: [
      {
        heading: "Porównanie kategorii",
        content: "Każda kategoria kabla ma inne parametry techniczne i zastosowania:",
        list: [
          "Cat 5e — 100 MHz, 1 Gbps, do 100 m. Minimum dla sieci domowej. Nieekranowany (UTP).",
          "Cat 6 — 250 MHz, 1 Gbps (10 Gbps do 55 m). Lepsze ekranowanie, mniej przesłuchów.",
          "Cat 6a — 500 MHz, 10 Gbps do 100 m. Rekomendowany standard dla nowych instalacji.",
          "Cat 7 — 600 MHz, 10 Gbps. Pełne ekranowanie (S/FTP). Wymaga specjalnych wtyczek.",
          "Cat 8 — 2000 MHz, 25-40 Gbps. Zastosowania serwerowe. Do 30 m.",
        ],
      },
      {
        heading: "Jaki kabel wybrać?",
        content:
          "Dla nowego domu rekomendujemy Cat 6a — oferuje 10 Gbps na pełnych 100 m i jest przyszłościowy. Cat 6 to minimum przy nowej instalacji. Cat 5e jest OK do rozbudowy istniejącej sieci. Cat 7 i 8 to rozwiązania specjalistyczne.",
      },
      {
        heading: "UTP, FTP, S/FTP — co oznacza ekranowanie?",
        content: "Oznaczenia dotyczą sposobu ekranowania kabla:",
        list: [
          "UTP — nieekranowany, najprostszy i najtańszy",
          "FTP — folia ekranująca wokół wszystkich par",
          "S/FTP — oplot + folia na parach, najlepsze ekranowanie",
          "U/FTP — folia na poszczególnych parach, bez oplotu",
        ],
      },
    ],
    relatedArticles: ["oznaczenia-kabli-lan-rj45", "okablowanie-strukturalne"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "jak-poprawic-zasieg-wifi",
    category: "sieci-i-telekomunikacja",
    title: "Jak poprawić zasięg Wi-Fi w domu? Praktyczny poradnik",
    shortTitle: "Jak poprawić zasięg Wi-Fi",
    metaTitle: "Jak poprawić zasięg Wi-Fi w domu — poradnik | Czarkom",
    metaDescription:
      "Słaby zasięg Wi-Fi na piętrze? Przerywający internet? Poradnik: optymalizacja routera, mesh, access point, repeater — co wybrać i jak poprawić Wi-Fi.",
    icon: "📶",
    intro:
      "Słaby zasięg Wi-Fi to jeden z najczęstszych problemów w domach. Internet przerywa na piętrze, w garażu nie ma sygnału, a streaming się buforuje. Oto sprawdzone sposoby na poprawę zasięgu.",
    sections: [
      {
        heading: "Dlaczego Wi-Fi jest słabe?",
        content: "Najczęstsze przyczyny słabego zasięgu Wi-Fi:",
        list: [
          "Zła lokalizacja routera — w rogu domu, w szafce, na podłodze",
          "Grube ściany — beton, cegła i zbrojenie tłumią sygnał",
          "Za wiele urządzeń na jednym routerze",
          "Zakłócenia od sąsiednich sieci — ten sam kanał Wi-Fi",
          "Stary router — brak obsługi Wi-Fi 5 lub Wi-Fi 6",
          "Praca na paśmie 2.4 GHz zamiast 5 GHz",
        ],
      },
      {
        heading: "Proste sposoby — bez wydawania pieniędzy",
        content: "Zanim kupisz nowy sprzęt, spróbuj:",
        list: [
          "Przenieś router do centralnego punktu domu",
          "Umieść router wysoko — na szafce, na ścianie",
          "Zmień kanał Wi-Fi — unikaj zatłoczonych kanałów (aplikacja WiFi Analyzer)",
          "Włącz pasmo 5 GHz — szybsze i mniej zakłóceń",
          "Zaktualizuj firmware routera",
          "Wyłącz niepotrzebne urządzenia z sieci",
        ],
      },
      {
        heading: "Mesh, access point czy repeater?",
        content:
          "Jeśli proste sposoby nie wystarczą, potrzebujesz dodatkowego sprzętu. Trzy opcje:",
        list: [
          "Repeater (wzmacniacz) — najtańszy, ale obniża prędkość o połowę. OK na szybkie łatanie.",
          "Mesh (siatka) — kilka jednostek tworzących jedną sieć. Prosty w konfiguracji, dobry roaming.",
          "Access point (AP) — podłączony kablem LAN, najlepsza wydajność. Wymaga okablowania.",
        ],
      },
      {
        heading: "Co polecamy?",
        content:
          "Dla domu jednorodzinnego najlepsze rozwiązanie to access point(y) połączone kablem LAN z routerem. Daje to pełną prędkość i stabilność. Mesh to dobra alternatywa, gdy nie ma możliwości poprowadzenia kabli. Repeater rekomendujemy tylko jako rozwiązanie tymczasowe.",
      },
    ],
    faq: [
      {
        question: "Dlaczego internet przerywa na piętrze?",
        answer:
          "Sygnał Wi-Fi słabnie przechodząc przez stropy i ściany. Beton ze zbrojeniem tłumi sygnał szczególnie mocno. Rozwiązanie: access point lub mesh na piętrze.",
      },
      {
        question: "Czy mesh jest lepszy od routera?",
        answer:
          "Mesh to rozbudowany system kilku urządzeń, które pokrywają cały dom. Pojedynczy router wystarczy dla małego mieszkania, ale w domu 100+ m² mesh lub AP to realne usprawnienie.",
      },
      {
        question: "Jak zwiększyć zasięg Wi-Fi w domu?",
        answer:
          "Przenieś router centralnie i wysoko. Włącz 5 GHz. Zmień kanał Wi-Fi. Jeśli to nie wystarczy — dodaj access point (na kablu LAN) lub system mesh. Na terenie Krosna, Rzeszowa i Jasła pomagamy dobrać i zainstalować sprzęt.",
      },
      {
        question: "Jak ustawić router, żeby internet lepiej działał?",
        answer:
          "Centralnie, wysoko (szafka, ściana), nie w szafce. Anteny: jedna pionowo, jedna pod 45°. Włącz 5 GHz, zmień kanał na mniej zatłoczony, zaktualizuj firmware. To daje natychmiastową poprawę.",
      },
      {
        question: "Dlaczego Wi-Fi nie działa w drugim pokoju?",
        answer:
          "Sygnał Wi-Fi słabnie przez ściany — szczególnie beton i cegła. Rozwiązania: access point na kablu LAN w tym pokoju, system mesh, lub (tymczasowo) repeater. Przeniesienie routera bliżej centrum domu też pomaga.",
      },
    ],
    relatedArticles: ["wifi-6-6e-7-porownianie", "okablowanie-strukturalne", "mesh-repeater-czy-access-point", "wifi-nie-dziala-w-drugim-pokoju"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "wifi-6-6e-7-porownianie",
    category: "sieci-i-telekomunikacja",
    title: "Wi-Fi 6, Wi-Fi 6E i Wi-Fi 7 — co warto wiedzieć",
    shortTitle: "Wi-Fi 6 / 6E / 7",
    metaTitle: "Wi-Fi 6 vs Wi-Fi 6E vs Wi-Fi 7 — porównanie standardów | Czarkom",
    metaDescription:
      "Czym różnią się Wi-Fi 6, Wi-Fi 6E i Wi-Fi 7? Prędkość, pasma, opóźnienia, MLO. Który standard wybrać do domu i firmy? Porównanie.",
    icon: "📡",
    intro:
      "Nowe standardy Wi-Fi oferują coraz lepszą wydajność, ale co to oznacza w praktyce? Porównujemy Wi-Fi 6 (802.11ax), Wi-Fi 6E i najnowszy Wi-Fi 7 (802.11be).",
    sections: [
      {
        heading: "Wi-Fi 6 (802.11ax)",
        content:
          "Wi-Fi 6 to obecny mainstream — obsługuje pasma 2.4 GHz i 5 GHz. Kluczowe ulepszenia to OFDMA (lepsza obsługa wielu urządzeń), MU-MIMO i Target Wake Time (oszczędność baterii). Prędkość teoretyczna: do 9.6 Gbps.",
        list: [
          "Pasma: 2.4 GHz + 5 GHz",
          "OFDMA — efektywna obsługa wielu urządzeń",
          "Prędkość: do 9.6 Gbps (teoretycznie)",
          "Dostępny w routerach od ok. 200 zł",
        ],
      },
      {
        heading: "Wi-Fi 6E",
        content:
          "Wi-Fi 6E to Wi-Fi 6 rozszerzony o pasmo 6 GHz. Nowe pasmo jest puste (brak zakłóceń od sąsiadów) i oferuje szerokie kanały 160 MHz. Idealny dla gęstych środowisk.",
        list: [
          "Dodatkowe pasmo 6 GHz — mniej zakłóceń",
          "Kanały 160 MHz — wysoka przepustowość",
          "Wymaga urządzeń z obsługą 6E",
          "Dostępny w routerach od ok. 400 zł",
        ],
      },
      {
        heading: "Wi-Fi 7 (802.11be)",
        content:
          "Wi-Fi 7 to najnowszy standard. Kluczowa nowość: MLO (Multi-Link Operation) — urządzenie może jednocześnie korzystać z wielu pasm. Kanały do 320 MHz. Prędkość teoretyczna: do 46 Gbps.",
        list: [
          "MLO — jednoczesne korzystanie z wielu pasm",
          "Kanały 320 MHz w paśmie 6 GHz",
          "Prędkość: do 46 Gbps (teoretycznie)",
          "4K QAM — wyższa efektywność kodowania",
          "Routery dostępne od ok. 600 zł",
        ],
      },
      {
        heading: "Który standard wybrać?",
        content:
          "Wi-Fi 6 wystarcza dla większości domów. Wi-Fi 6E warto rozważyć, jeśli masz dużo urządzeń lub sąsiadów z silnymi sieciami. Wi-Fi 7 to wybór przyszłościowy — technologia jest bardzo nowa i jeszcze nie wszystkie urządzenia ją obsługują.",
      },
    ],
    faq: [
      {
        question: "Czy muszę wymienić router na Wi-Fi 7?",
        answer:
          "Nie musisz. Wi-Fi 6 w zupełności wystarcza dla typowego domu. Warto rozważyć Wi-Fi 7 przy następnej wymianie sprzętu, ale nie ma potrzeby wymieniać routera na siłę.",
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "5g-w-domu"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "5g-w-domu",
    category: "sieci-i-telekomunikacja",
    title: "5G w domu — czy zastąpi światłowód?",
    shortTitle: "5G w domu",
    metaTitle: "5G w domu — czy zastąpi światłowód? Zalety i ograniczenia | Czarkom",
    metaDescription:
      "Czy internet 5G może zastąpić światłowód? Prędkość, opóźnienia, stabilność, koszty. Porównanie 5G vs światłowód do domu.",
    icon: "📱",
    intro:
      "Internet mobilny 5G to coraz popularniejsza alternatywa dla światłowodu, szczególnie tam, gdzie nie ma infrastruktury kablowej. Ale czy 5G naprawdę może zastąpić stałe łącze?",
    sections: [
      {
        heading: "Jak działa 5G do domu?",
        content:
          "Router 5G (CPE) z kartą SIM łączy się z najbliższą stacją bazową i udostępnia internet domowym urządzeniom przez Wi-Fi i LAN. Nie wymaga kabla od operatora — wystarczy zasięg 5G i zasilanie.",
      },
      {
        heading: "Zalety 5G",
        content: "Internet 5G ma realne korzyści:",
        list: [
          "Szybki montaż — wystarczy router i karta SIM",
          "Brak potrzeby przyłącza kablowego",
          "Prędkość do 1 Gbps (realnie 100-500 Mbps)",
          "Mobilność — router można przenosić",
          "Dostępne tam, gdzie nie ma światłowodu",
        ],
      },
      {
        heading: "Ograniczenia 5G",
        content: "5G nie jest idealne do wszystkiego:",
        list: [
          "Wyższe opóźnienia (ping) niż światłowód",
          "Prędkość zależy od odległości od stacji i obciążenia",
          "Limity transferu u wielu operatorów",
          "Mniej stabilne przy wielu urządzeniach naraz",
          "Wymaga dobrego zasięgu — nie wszędzie działa tak samo",
        ],
      },
      {
        heading: "5G czy światłowód?",
        content:
          "Światłowód jest nadal lepszym wyborem dla domu z wieloma urządzeniami, monitoringiem, pracą zdalną. 5G to świetna opcja jako internet do domu, gdy nie ma światłowodu, lub jako łącze zapasowe. Najlepsze rozwiązanie? Dobra sieć domowa — niezależnie od źródła internetu.",
      },
    ],
    faq: [
      {
        question: "Czy 5G wystarczy do pracy zdalnej?",
        answer:
          "W większości przypadków tak — wideokonferencje, VPN i praca w chmurze działają dobrze na 5G. Problem może się pojawić przy dużych transferach plików lub jednoczesnym korzystaniu z internetu przez wiele osób.",
      },
      {
        question: "Czy 5G działa w Rzeszowie, Krośnie i Jaśle?",
        answer:
          "Zasięg 5G stale się rozszerza. W Rzeszowie pokrycie jest już dobre, w Krośnie i Jaśle zależy od operatora i lokalizacji. Warto sprawdzić mapy pokrycia operatorów.",
      },
    ],
    relatedArticles: ["wifi-6-6e-7-porownianie", "jak-poprawic-zasieg-wifi"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "konfiguracja-sieci-ip",
    category: "sieci-i-telekomunikacja",
    title: "Konfiguracja sieci IP — adresy, DHCP, DNS dla początkujących",
    shortTitle: "Konfiguracja sieci IP",
    metaTitle: "Konfiguracja sieci IP — adresy, DHCP, DNS | Czarkom",
    metaDescription:
      "Jak działa sieć IP? Adresy IP, maska podsieci, brama, DHCP, DNS — podstawy konfiguracji sieci domowej prostym językiem.",
    icon: "🌍",
    intro:
      "Adres IP, DHCP, DNS — brzmi skomplikowanie? To podstawy, które warto znać, żeby rozumieć swoją sieć domową i rozwiązywać typowe problemy z internetem.",
    sections: [
      {
        heading: "Adres IP — co to jest?",
        content:
          "Adres IP to unikalny numer przypisany każdemu urządzeniu w sieci. W sieciach domowych najczęściej zaczyna się od 192.168. Przykład: 192.168.1.100. Router ma swój adres (np. 192.168.1.1), a każde urządzenie dostaje własny.",
      },
      {
        heading: "DHCP — automatyczne adresy",
        content:
          "DHCP to usługa routera, która automatycznie przydziela adresy IP urządzeniom. Dzięki niej nie musisz ręcznie konfigurować każdego telefonu i komputera. Dla większości urządzeń DHCP jest właściwym rozwiązaniem.",
      },
      {
        heading: "DNS — tłumacz adresów",
        content:
          "DNS zamienia nazwy stron (np. czarkom.pl) na adresy IP. Domyślnie używasz DNS od operatora, ale warto zmienić na szybszy — np. Cloudflare (1.1.1.1) lub Google (8.8.8.8). Zmiana DNS może poprawić szybkość ładowania stron.",
      },
      {
        heading: "Podstawowa diagnostyka",
        content: "Kiedy internet nie działa, sprawdź po kolei:",
        list: [
          "Czy router ma internet? (dioda WAN/Internet)",
          "Czy urządzenie ma adres IP? (ustawienia Wi-Fi → szczegóły)",
          "Ping do routera — czy jest połączenie lokalne",
          "Ping do 8.8.8.8 — czy jest internet",
          "Ping do google.pl — czy działa DNS",
        ],
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "okablowanie-strukturalne"],
    relatedServices: ["sieci-i-internet"],
  },

  // ──── AUTOMATYKA ────
  {
    slug: "smart-home-od-czego-zaczac",
    category: "automatyka",
    title: "Smart home — od czego zacząć? Poradnik dla początkujących",
    shortTitle: "Smart home — od czego zacząć",
    metaTitle: "Smart home — od czego zacząć? Poradnik 2026 | Czarkom",
    metaDescription:
      "Chcesz mieć inteligentny dom? Od czego zacząć? Oświetlenie, ogrzewanie, bezpieczeństwo — praktyczny poradnik smart home krok po kroku.",
    icon: "🏠",
    intro:
      "Smart home nie musi być drogi ani skomplikowany. Można zaczynać stopniowo — od jednego elementu — i rozbudowywać system z czasem. Oto praktyczny poradnik na start.",
    sections: [
      {
        heading: "Od czego zacząć?",
        content: "Najlepsze elementy smart home na start:",
        list: [
          "Inteligentne oświetlenie — żarówki Wi-Fi lub przełączniki (najmniejszy koszt, największy efekt wow)",
          "Inteligentny termostat — sterowanie ogrzewaniem z telefonu, realna oszczędność",
          "Czujnik ruchu / drzwi — podstawa automatyzacji",
          "Inteligentna wtyczka — sterowanie dowolnym urządzeniem",
          "Kamera IP — podgląd domu z telefonu",
        ],
      },
      {
        heading: "Ekosystem — na co uważać",
        content:
          "Wybierz jeden ekosystem i trzymaj się go. Popularne platformy: Google Home, Apple HomeKit, Amazon Alexa, Tuya/Smart Life. Sprawdź kompatybilność urządzeń przed zakupem. Standard Matter ułatwia łączenie urządzeń z różnych ekosystemów.",
      },
      {
        heading: "Przewodowo czy bezprzewodowo?",
        content:
          "Urządzenia bezprzewodowe (Wi-Fi, Zigbee, Z-Wave) są prostsze w instalacji. Rozwiązania przewodowe (KNX, Loxone) dają większą niezawodność i są lepsze w nowym budownictwie. Dla istniejących domów — bezprzewodowo. Dla budowy/remontu generalnego — warto rozważyć przewodowe.",
      },
      {
        heading: "Ile to kosztuje?",
        content:
          "Start od 200–500 zł (kilka żarówek + inteligentna wtyczka). Podstawowy system z oświetleniem, ogrzewaniem i bezpieczeństwem: 2000–5000 zł. Pełna automatyka przewodowa w nowym domu: od 15 000 zł w górę.",
      },
    ],
    faq: [
      {
        question: "Czy smart home wymaga internetu?",
        answer:
          "Większość urządzeń wymaga Wi-Fi do konfiguracji i sterowania z telefonu. Niektóre (Zigbee, Z-Wave) komunikują się lokalnie i działają bez internetu po konfiguracji.",
      },
      {
        question: "Czy mogę zainstalować smart home w mieszkaniu na wynajem?",
        answer:
          "Tak — urządzenia bezprzewodowe (żarówki, wtyczki, czujniki) łatwo zainstalować i zabrać ze sobą przy przeprowadzce.",
      },
    ],
    relatedArticles: ["automatyka-budynkowa-bms"],
    relatedServices: ["smart-home", "automatyka", "sieci-i-internet"],
  },
  {
    slug: "automatyka-budynkowa-bms",
    category: "automatyka",
    title: "Automatyka budynkowa i BMS — co to jest i komu się opłaca",
    shortTitle: "Automatyka budynkowa i BMS",
    metaTitle: "Automatyka budynkowa i BMS — zarządzanie budynkiem | Czarkom",
    metaDescription:
      "Co to jest BMS i automatyka budynkowa? Sterowanie HVAC, oświetleniem, energią. Dla kogo się opłaca i ile kosztuje. Poradnik.",
    icon: "🏢",
    intro:
      "BMS (Building Management System) to mózg nowoczesnego budynku — zarządza ogrzewaniem, wentylacją, oświetleniem i bezpieczeństwem. Sprawdza się w obiektach komercyjnych, ale coraz częściej trafia też do dużych domów.",
    sections: [
      {
        heading: "Co kontroluje BMS?",
        content: "System BMS integruje i zarządza:",
        list: [
          "HVAC — ogrzewanie, wentylacja, klimatyzacja",
          "Oświetlenie — sterowanie, harmonogramy, czujniki",
          "Bezpieczeństwo — alarmy, kontrola dostępu, CCTV",
          "Energia — monitoring zużycia, optymalizacja",
          "Żaluzje i rolety",
          "Windy i bramy",
        ],
      },
      {
        heading: "Dla kogo?",
        content:
          "BMS opłaca się przede wszystkim w większych obiektach — biurowcach, halach, galeriach handlowych, budynkach wielorodzinnych, hotelach. W dużych domach jednorodzinnych rolę BMS pełni zaawansowana automatyka domowa (KNX, Loxone).",
      },
      {
        heading: "Jakie korzyści?",
        content:
          "Oszczędność energii (15–30%), szybka reakcja na awarie, komfort użytkowników, raporty i dane do analizy, centralne sterowanie z jednego miejsca. W dłuższej perspektywie BMS się zwraca.",
      },
    ],
    relatedArticles: ["smart-home-od-czego-zaczac"],
    relatedServices: ["bms", "automatyka"],
  },

  // ──── SYSTEMY CCTV ────
  {
    slug: "rodzaje-kamer-cctv",
    category: "systemy-cctv",
    title: "Rodzaje kamer CCTV — którą wybrać do domu i firmy?",
    shortTitle: "Rodzaje kamer CCTV",
    metaTitle: "Rodzaje kamer CCTV — porównanie: IP, analogowe, PoE | Czarkom",
    metaDescription:
      "Jaką kamerę CCTV wybrać? Porównanie kamer IP, analogowych, PoE, kopułkowych, tubusowych i PTZ. Poradnik dla domu i firmy.",
    icon: "📷",
    intro:
      "Wybór kamery CCTV to jedna z pierwszych decyzji przy budowie systemu monitoringu. Rodzaj kamery wpływa na jakość obrazu, możliwości i cenę. Oto przegląd najpopularniejszych typów.",
    sections: [
      {
        heading: "Kamery IP vs analogowe",
        content:
          "Kamery IP to nowoczesny standard — przesyłają obraz cyfrowo przez sieć LAN/Wi-Fi. Kamery analogowe (CVBS) to technologia odchodząca. Pomiędzy nimi są kamery AHD/TVI/CVI — analogowe z HD. Dla nowych instalacji rekomendujemy kamery IP.",
      },
      {
        heading: "Typy kamer",
        content: "Najczęściej spotykane typy obudów:",
        list: [
          "Kopułkowe (dome) — dyskretne, odporne na wandalizm, do wnętrz i na zewnątrz",
          "Tubusowe (bullet) — dobrze widoczne (efekt odstraszający), na zewnątrz",
          "PTZ (obrotowe) — zdalnie sterowane, zoom optyczny, do dużych obszarów",
          "Turret — kompromis między dome i bullet, popularne w domach",
          "Miniaturowe / pinhole — ukryte, do specjalnych zastosowań",
        ],
      },
      {
        heading: "Na co zwrócić uwagę?",
        content: "Przy wyborze kamery sprawdź:",
        list: [
          "Rozdzielczość — minimum 2 MP (1080p), rekomendowane 4 MP lub więcej",
          "Podczerwień (IR) — zasięg widzenia w ciemności (20–80 m)",
          "PoE — zasilanie i dane jednym kablem LAN (wygodne i tanie w montażu)",
          "IP67/IK10 — klasa odporności na warunki atmosferyczne i uderzenia",
          "WDR — wyrównywanie jasności, ważne przy kontrastowym oświetleniu",
          "Detekcja ruchu / AI — inteligentna analiza obrazu",
        ],
      },
    ],
    faq: [
      {
        question: "Ile kamer potrzebuję do domu?",
        answer:
          "Typowo 4–8 kamer: wjazd, drzwi wejściowe, ogród/taras, garaż. Dokładna liczba zależy od układu posesji — doradzimy na miejscu.",
      },
      {
        question: "Czy kamery Wi-Fi są dobre?",
        answer:
          "Kamery Wi-Fi są wygodne w montażu, ale mniej stabilne niż podłączone kablem. Do profesjonalnego monitoringu rekomendujemy kamery PoE (zasilanie i dane jednym kablem LAN).",
      },
    ],
    relatedArticles: ["systemy-nagrywania-nvr-dvr", "projektowanie-monitoringu"],
    relatedServices: ["monitoring-cctv"],
  },
  {
    slug: "systemy-nagrywania-nvr-dvr",
    category: "systemy-cctv",
    title: "NVR i DVR — systemy nagrywania monitoringu",
    shortTitle: "Systemy nagrywania NVR/DVR",
    metaTitle: "NVR vs DVR — systemy nagrywania monitoringu CCTV | Czarkom",
    metaDescription:
      "Czym różni się NVR od DVR? Który rejestrator wybrać do kamer IP i analogowych? Pojemność dysku, liczba kanałów, podgląd zdalny.",
    icon: "💾",
    intro:
      "Rejestrator to serce systemu monitoringu — nagrywa obraz z kamer i umożliwia podgląd na żywo i odtwarzanie nagrań. Poznaj różnice między NVR i DVR.",
    sections: [
      {
        heading: "NVR vs DVR",
        content: "Dwa typy rejestratorów do różnych systemów:",
        list: [
          "DVR (Digital Video Recorder) — dla kamer analogowych (AHD/TVI/CVI). Przetwarza sygnał analogowy na cyfrowy.",
          "NVR (Network Video Recorder) — dla kamer IP. Nagrywa gotowy strumień cyfrowy z sieci.",
          "XVR / hybrydowy — obsługuje oba typy kamer. Dobry przy rozbudowie starego systemu.",
        ],
      },
      {
        heading: "Na co zwrócić uwagę?",
        content: "Przy wyborze rejestratora sprawdź:",
        list: [
          "Liczba kanałów — ile kamer obsługuje (4, 8, 16, 32)",
          "Rozdzielczość nagrywania — powinna pasować do kamer",
          "PoE w NVR — zasilanie kamer bezpośrednio z rejestratora",
          "Pojemność dysku — 1 TB wystarczy na ok. 7 dni z 4 kamer 2 MP",
          "Podgląd zdalny — aplikacja na telefon",
          "Kodek H.265+ — oszczędza miejsce na dysku",
        ],
      },
      {
        heading: "Ile potrzebuję miejsca na dysku?",
        content:
          "Zapotrzebowanie na dysk zależy od liczby kamer, rozdzielczości, kodeka i ciągłości nagrywania. Orientacyjnie: 4 kamery 4 MP z H.265+ nagrywające ciągle potrzebują ok. 1 TB na 7–10 dni. Rekomendujemy minimum 2 TB.",
      },
    ],
    relatedArticles: ["rodzaje-kamer-cctv", "projektowanie-monitoringu"],
    relatedServices: ["monitoring-cctv"],
  },
  {
    slug: "projektowanie-monitoringu",
    category: "systemy-cctv",
    title: "Projektowanie systemu monitoringu — jak to zrobić dobrze",
    shortTitle: "Projektowanie monitoringu",
    metaTitle: "Projektowanie systemu monitoringu CCTV — poradnik | Czarkom",
    metaDescription:
      "Jak zaprojektować monitoring? Ile kamer potrzeba, gdzie je umieścić, jaki rejestrator wybrać. Poradnik projektowania CCTV dla domu i firmy.",
    icon: "📐",
    intro:
      "Dobry monitoring to nie tylko kamery — to przemyślany projekt uwzględniający układ obiektu, cele bezpieczeństwa i budżet. Oto jak podejść do projektowania systemu CCTV.",
    sections: [
      {
        heading: "Cele monitoringu",
        content: "Na początku określ, czego oczekujesz od systemu:",
        list: [
          "Odstraszanie — widoczne kamery zniechęcają intruzów",
          "Identyfikacja — rozpoznanie twarzy / tablic rejestracyjnych (wymaga wyższej rozdzielczości)",
          "Dokumentacja zdarzeń — nagrania jako dowód",
          "Podgląd na żywo — z telefonu lub monitora",
          "Detekcja zdarzeń — powiadomienia przy ruchu",
        ],
      },
      {
        heading: "Rozmieszczenie kamer",
        content: "Typowe punkty monitorowania:",
        list: [
          "Wjazd na posesję / brama",
          "Drzwi wejściowe (główne i boczne)",
          "Ogród, taras, podwórko",
          "Garaż i miejsca parkingowe",
          "Korytarze i klatki schodowe (w firmach)",
          "Magazyn, recepcja, kasa (w obiektach komercyjnych)",
        ],
      },
      {
        heading: "Infrastruktura",
        content:
          "Do kamer IP potrzebujesz okablowania LAN (Cat 5e/6) lub Wi-Fi. Rekomendujemy kable — stabilniejsze. Switch PoE zasila kamery i przesyła dane jednym kablem. Zaplanuj też zasilanie awaryjne (UPS) i miejsce na rejestrator.",
      },
    ],
    relatedArticles: ["rodzaje-kamer-cctv", "systemy-nagrywania-nvr-dvr"],
    relatedServices: ["monitoring-cctv"],
  },

  // ──── PROBLEMY Z INSTALACJĄ — long-tail SEO ────
  {
    slug: "wybija-bezpiecznik-przyczyny",
    category: "instalacje-elektryczne",
    title: "Wybija bezpiecznik — dlaczego i co robić?",
    shortTitle: "Wybija bezpiecznik",
    metaTitle: "Wybija bezpiecznik — przyczyny i rozwiązania | Czarkom Krosno",
    metaDescription:
      "Dlaczego wybija bezpiecznik? Najczęstsze przyczyny: przeciążenie, zwarcie, uszkodzenie urządzenia. Co sprawdzić samemu, kiedy wezwać elektryka. Rzeszów, Krosno, Jasło.",
    icon: "🔧",
    intro:
      "Wybijający bezpiecznik to jeden z najczęstszych problemów elektrycznych w domach i mieszkaniach. Zwykle nie jest to poważna awaria, ale ignorowanie problemu może być niebezpieczne. Oto co sprawdzić i kiedy wezwać elektryka — obsługujemy Krosno, Rzeszów, Jasło i całe Podkarpacie.",
    sections: [
      {
        heading: "Najczęstsze przyczyny",
        content:
          "Bezpiecznik (wyłącznik nadprądowy) wyłącza się, gdy wykryje problem w instalacji. To jego zadanie — chroni przed pożarem i porażeniem. Najczęstsze przyczyny:",
        list: [
          "Przeciążenie obwodu — za dużo urządzeń na jednym bezpieczniku (np. czajnik + piekarnik + grzejnik)",
          "Zwarcie w instalacji — uszkodzony przewód lub gniazdko",
          "Uszkodzone urządzenie — pralka, zmywarka, odkurzacz z zwarciem wewnętrznym",
          "Wilgoć w gniazdku — po zalaniu, w łazience, piwnicy",
          "Stara instalacja — zużyte przewody, luźne połączenia",
          "Za mały bezpiecznik — np. 10A na obwodzie kuchennym",
        ],
      },
      {
        heading: "Co możesz sprawdzić sam?",
        content: "Zanim wezwiesz elektryka, wykonaj prostą diagnostykę:",
        list: [
          "Sprawdź, który bezpiecznik wypadł — to wskaże obwód z problemem",
          "Odłącz wszystkie urządzenia z tego obwodu",
          "Załącz bezpiecznik — jeśli trzyma, podłączaj urządzenia po jednym",
          "Jeśli wyłączy się po podłączeniu konkretnego urządzenia — problem jest w nim",
          "Jeśli wyłączy się bez żadnego urządzenia — problem jest w instalacji → wezwij elektryka",
        ],
      },
      {
        heading: "Wybija różnicówka (RCD) — to co innego",
        content:
          "Jeśli wyłącza się wyłącznik różnicowoprądowy (RCD/RCCB), to sygnał upływu prądu — czyli prąd 'ucieka' tam, gdzie nie powinien. Przyczyny: uszkodzona izolacja, wilgoć, wadliwe urządzenie. To poważniejszy problem — lepiej od razu zadzwonić do elektryka.",
      },
      {
        heading: "Kiedy wezwać elektryka?",
        content:
          "Wezwij elektryka, jeśli: bezpiecznik wyłącza się bez żadnego podłączonego urządzenia, czujesz zapach spalenizny, gniazdko jest ciepłe lub przebarwione, bezpiecznik wyłącza się powtarzalnie mimo odłączenia urządzeń. Na terenie Rzeszowa, Krosna, Jasła i okolic — zadzwoń do Czarkom, przyjedziemy szybko.",
      },
    ],
    faq: [
      {
        question: "Czy mogę sam wymienić bezpiecznik na większy?",
        answer:
          "Nie! Bezpiecznik jest dobrany do przekroju przewodów. Większy bezpiecznik nie ochroni instalacji przed przegrzaniem — to prosta droga do pożaru. Jeśli bezpiecznik jest za mały, trzeba wymienić przewody lub rozdzielić obwody.",
      },
      {
        question: "Ile kosztuje naprawa instalacji gdy wybija bezpiecznik?",
        answer:
          "Koszt diagnostyki i prostej naprawy to zwykle 150–400 zł w zależności od problemu. Jeśli wymagana jest większa ingerencja (wymiana obwodu, rozdzielenie obwodów) — wyceniamy indywidualnie.",
      },
      {
        question: "Czy elektryk przyjedzie do Krosna i okolic?",
        answer:
          "Tak — obsługujemy Krosno, Jasło, Rzeszów i okolice. Szybki dojazd, elastyczne terminy. Zadzwoń — umówimy wizytę, często nawet tego samego dnia.",
      },
      {
        question: "Dlaczego ciągle wybija korki?",
        answer:
          "Jeśli korki (bezpiecznik) wybijają regularnie — masz przeciążony obwód, zwarcie w instalacji lub uszkodzone urządzenie. Nie zwiększaj bezpiecznika — to niebezpieczne. Odłącz urządzenia po jednym, żeby znaleźć przyczynę. Jeśli nie pomaga — wezwij elektryka.",
      },
      {
        question: "Wybija korki po włączeniu piekarnika lub pralki — co zrobić?",
        answer:
          "Piekarnik (2-3 kW) i pralka (1,5-2 kW) pobierają dużo prądu. Jeśli są na jednym obwodzie z czajnikiem czy grzejnikiem — obwód się przeciąża. Rozwiązanie: osobne obwody dla kuchni i łazienki. To standardowa modernizacja, którą wykonujemy na terenie Krosna, Rzeszowa i Jasła.",
      },
      {
        question: "Bezpiecznik nie chce się włączyć — dlaczego?",
        answer:
          "Jeśli bezpiecznik natychmiast wyłącza się po próbie załączenia — w obwodzie jest zwarcie lub duży upływ prądu. Nie próbuj go 'wciskać siłą'. Odłącz wszystkie urządzenia, odłącz obwód i wezwij elektryka.",
      },
    ],
    relatedArticles: ["bezpieczenstwo-pracy-z-pradem", "pomiary-elektryczne-poradnik", "wybija-roznicowka-przyczyny"],
    relatedServices: ["elektryk", "przeglady-elektryczne"],
  },
  {
    slug: "podlaczenie-kuchenki-indukcyjnej",
    category: "instalacje-elektryczne",
    title: "Podłączenie kuchenki indukcyjnej — wymagania i instalacja",
    shortTitle: "Podłączenie kuchenki indukcyjnej",
    metaTitle: "Podłączenie kuchenki indukcyjnej — wymagania elektryczne | Czarkom",
    metaDescription:
      "Jak podłączyć kuchenkę indukcyjną? Wymagania: osobny obwód, przekrój kabla, zabezpieczenie. Co zrobić w starym mieszkaniu. Elektryk Rzeszów, Krosno, Jasło.",
    icon: "🍳",
    intro:
      "Kuchenka indukcyjna pobiera dużo prądu — typowo 3,7 kW, a płyty 4-strefowe nawet 7,4 kW. Wymaga odpowiedniej instalacji elektrycznej. Oto co musisz wiedzieć przed zakupem i podłączeniem — szczególnie w starszych domach na Podkarpaciu, gdzie instalacje nie zawsze są przystosowane.",
    sections: [
      {
        heading: "Wymagania elektryczne",
        content: "Płyta indukcyjna wymaga dedykowanego obwodu od rozdzielni:",
        list: [
          "Osobny obwód — kuchenka nie może dzielić obwodu z innymi urządzeniami",
          "Kabel 3×4 mm² (do 7,4 kW) lub 3×6 mm² (powyżej 7,4 kW)",
          "Zabezpieczenie: wyłącznik nadprądowy B25A lub B32A",
          "Wyłącznik różnicowoprądowy 30 mA",
          "Gniazdo siłowe lub podłączenie stałe (bezpośrednio pod kabel)",
        ],
      },
      {
        heading: "A co ze starszym mieszkaniem?",
        content:
          "W wielu starszych mieszkaniach w Krośnie, Rzeszowie czy Jaśle instalacja jest zbyt słaba na kuchenkę indukcyjną. Typowe problemy: przewody aluminium 2,5 mm², brak osobnego obwodu do kuchni, za mały bezpiecznik główny. W takim przypadku trzeba poprowadzić nowy obwód od rozdzielni do kuchni. To standardowa operacja — robimy to często.",
      },
      {
        heading: "Podłączenie — krok po kroku",
        content: "Jak wygląda typowe podłączenie indukcji wykonane przez elektryka:",
        list: [
          "Sprawdzamy instalację — przekrój przewodów, moc przyłączeniową",
          "Prowadzimy dedykowany kabel od rozdzielni (jeśli trzeba)",
          "Montujemy odpowiedni bezpiecznik i RCD",
          "Podłączamy płytę (stałe lub przez gniazdo)",
          "Testujemy działanie i wystawiamy dokumentację",
        ],
      },
      {
        heading: "Czy mogę podłączyć sam?",
        content:
          "Formalnie podłączenie powinien wykonać elektryk z uprawnieniami. To nie tylko kwestia przepisów — przy indukcji płyną duże prądy i błąd może być niebezpieczny. Wielu producentów wymaga podłączenia przez elektryka, żeby utrzymać gwarancję.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje podłączenie kuchenki indukcyjnej?",
        answer:
          "Samo podłączenie (gdy masz gotowy obwód): 150–300 zł. Prowadzenie nowego obwodu od rozdzielni: 300–800 zł, zależnie od odległości i zakresu prac. Wyceniamy indywidualnie — zadzwoń.",
      },
      {
        question: "Czy w moim domu da się podłączyć indukcję?",
        answer:
          "Prawie zawsze tak — ale może być potrzebne dorobienie osobnego obwodu. Najlepiej umówić się na oględziny, sprawdzimy instalację i powiemy co trzeba zrobić.",
      },
    ],
    relatedArticles: ["wybija-bezpiecznik-przyczyny", "wymiana-instalacji-stary-dom"],
    relatedServices: ["elektryk", "instalacje-elektryczne"],
  },
  {
    slug: "wymiana-instalacji-stary-dom",
    category: "instalacje-elektryczne",
    title: "Wymiana instalacji elektrycznej w starym domu — kiedy i jak?",
    shortTitle: "Wymiana instalacji w starym domu",
    metaTitle: "Wymiana instalacji elektrycznej w starym domu — poradnik | Czarkom",
    metaDescription:
      "Kiedy wymienić instalację elektryczną? Objawy starej instalacji, koszty, etapy wymiany. Aluminium, brak RCD, częste awarie. Elektryk Krosno, Rzeszów, Jasło.",
    icon: "🏚️",
    intro:
      "Wiele domów na Podkarpaciu — w Krośnie, Rzeszowie, Jaśle i okolicach — ma instalację elektryczną z lat 70. lub 80. Aluminiowe przewody, brak różnicówek, stare bezpieczniki topikowe. Taka instalacja jest nie tylko niewydajna, ale i niebezpieczna. Oto kiedy wymiana jest konieczna.",
    sections: [
      {
        heading: "Objawy starej instalacji",
        content: "Wymiana jest konieczna lub zalecana, gdy:",
        list: [
          "Przewody aluminiowe — łamliwe, mniejsza przepustowość, luźne połączenia",
          "Bezpieczniki topikowe (ceramiczne) zamiast wyłączników nadprądowych",
          "Brak wyłącznika różnicowoprądowego (RCD/różnicówki)",
          "Częste wypadanie bezpieczników bez wyraźnej przyczyny",
          "Ciepłe gniazdka lub przełączniki",
          "Zapach spalenizny przy gniazdkach",
          "Migające światło",
          "Brak przewodu ochronnego (PE) — instalacja dwuprzewodowa",
          "Instalacja nie była przeglądana od ponad 10 lat",
        ],
      },
      {
        heading: "Jak wygląda wymiana?",
        content: "Etapy wymiany instalacji elektrycznej:",
        list: [
          "Oględziny i projekt — sprawdzamy obecną instalację, planujemy nową",
          "Nowa rozdzielnia — wyłączniki nadprądowe, RCD, SPD (ochrona przepięciowa)",
          "Nowe przewody miedziane — odpowiednie przekroje dla każdego obwodu",
          "Osobne obwody — oświetlenie, gniazdka, kuchnia, łazienka, kocioł",
          "Montaż gniazdek i przełączników",
          "Pomiary i protokół odbioru",
          "Prace wykończeniowe — zakrywanie bruzd (lub współpraca z ekipą remontową)",
        ],
      },
      {
        heading: "Ile to kosztuje?",
        content:
          "Koszt wymiany instalacji zależy od wielkości domu i zakresu prac. Orientacyjne ceny (robocizna + materiał) dla Krosna, Rzeszowa i okolic: mieszkanie 50 m² — od 5 000 zł, dom 100 m² — od 10 000 zł, dom 200 m² — od 18 000 zł. Dokładną wycenę przygotowujemy po oględzinach.",
      },
    ],
    faq: [
      {
        question: "Czy muszę wymieniać całą instalację, czy można częściowo?",
        answer:
          "Można wymieniać etapami — np. najpierw rozdzielnia i obwody kuchni/łazienki, potem reszta. Nie rekomendujemy jednak łączenia aluminium z miedzią bez odpowiednich złączek.",
      },
      {
        question: "Czy wymiana wymaga kucia ścian?",
        answer:
          "Często tak — nowe kable prowadzi się w bruzdach. Ale zależy od budynku: w domach z pustymi przestrzeniami w ścianach da się prowadzić bez kucia. Ocenimy to na miejscu.",
      },
    ],
    relatedArticles: ["pomiary-elektryczne-poradnik", "przepisy-i-normy-elektryczne"],
    relatedServices: ["elektryk", "instalacje-elektryczne"],
  },
  {
    slug: "gniazdko-nie-dziala",
    category: "instalacje-elektryczne",
    title: "Gniazdko nie działa — co sprawdzić przed wezwaniem elektryka",
    shortTitle: "Gniazdko nie działa",
    metaTitle: "Gniazdko nie działa — co sprawdzić? Poradnik | Czarkom",
    metaDescription:
      "Gniazdko przestało działać? Sprawdź bezpiecznik, RCD, gniazdko. Kiedy wezwać elektryka. Szybka pomoc — Krosno, Rzeszów, Jasło.",
    icon: "🔌",
    intro:
      "Nie działa gniazdko? Zanim zadzwonisz do elektryka, możesz sprawdzić kilka rzeczy samodzielnie. Często przyczyną jest wyłączony bezpiecznik lub zadziałała różnicówka. Oto szybka diagnostyka krok po kroku.",
    sections: [
      {
        heading: "Krok 1 — sprawdź bezpiecznik",
        content:
          "Otwórz rozdzielnię i sprawdź, czy któryś z wyłączników jest w pozycji 'wyłączony' (dźwignia w dół). Jeśli tak — spróbuj go załączyć. Jeśli natychmiast wypadnie — problem jest poważniejszy, wezwij elektryka.",
      },
      {
        heading: "Krok 2 — sprawdź różnicówkę (RCD)",
        content:
          "Wyłącznik różnicowoprądowy (zwykle oznaczony symbolem ΔI lub z przyciskiem TEST) mógł zadziałać. Zresetuj go — wyłącz i ponownie włącz. Jeśli wyłącza się powtarzalnie, może być upływ prądu w instalacji lub urządzeniu.",
      },
      {
        heading: "Krok 3 — przetestuj gniazdko",
        content: "Podłącz do gniazdka inne urządzenie (np. lampkę, ładowarkę). Jeśli działa — problem był w poprzednim urządzeniu. Jeśli nie — sprawdź inne gniazdka w tym samym pomieszczeniu.",
      },
      {
        heading: "Kiedy jest problem z instalacją?",
        content: "Wezwij elektryka, jeśli:",
        list: [
          "Bezpiecznik natychmiast wyłącza się po załączeniu",
          "Gniazdko jest ciepłe, przebarwione lub czujesz zapach spalenizny",
          "Nie działa kilka gniazdek w różnych pokojach",
          "Gniazdko iskrzy przy podłączaniu wtyczki",
          "Problem powtarza się mimo podłączenia innego urządzenia",
        ],
      },
    ],
    faq: [
      {
        question: "Ile kosztuje naprawa gniazdka?",
        answer:
          "Wymiana gniazdka to koszt 80–200 zł z dojazdem. Naprawa obwodu (np. uszkodzony przewód w ścianie) — wyceniamy po diagnostyce. Na terenie Krosna, Rzeszowa i Jasła dojeżdżamy szybko.",
      },
      {
        question: "Co zrobić gdy brak prądu w gniazdku?",
        answer:
          "Sprawdź bezpieczniki w rozdzielni — prawdopodobnie jeden jest wyłączony. Sprawdź też różnicówkę (RCD). Jeśli wszystko jest włączone — problem może być w samym gniazdku lub przewodzie. Nie grzeb w gniazdku sam — wezwij elektryka.",
      },
      {
        question: "Gniazdko iskrzy — czy to niebezpieczne?",
        answer:
          "Tak! Iskrzenie oznacza luźny kontakt, uszkodzony mechanizm lub nadmierny prąd. Przestań używać tego gniazdka i wezwij elektryka. Iskrzenie może doprowadzić do pożaru.",
      },
      {
        question: "Gniazdko się grzeje — co to znaczy?",
        answer:
          "Ciepłe gniazdko to sygnał luźnego połączenia lub przeciążenia. Odłącz urządzenia, przestań używać gniazdka i wezwij elektryka — to stan zagrożenia pożarowego.",
      },
    ],
    relatedArticles: ["wybija-bezpiecznik-przyczyny", "bezpieczenstwo-pracy-z-pradem", "swiatlo-dziala-ale-gniazdka-nie"],
    relatedServices: ["elektryk"],
  },
  {
    slug: "ile-kosztuje-instalacja-elektryczna-nowy-dom",
    category: "instalacje-elektryczne",
    title: "Ile kosztuje instalacja elektryczna w nowym domu?",
    shortTitle: "Koszt instalacji w nowym domu",
    metaTitle: "Ile kosztuje instalacja elektryczna w nowym domu? Cennik 2026 | Czarkom",
    metaDescription:
      "Ile kosztuje instalacja elektryczna w nowym domu? Cennik orientacyjny 2026. Co wpływa na cenę, ile punktów zaplanować. Elektryk Krosno, Rzeszów, Jasło.",
    icon: "💰",
    intro:
      "Budujesz dom na Podkarpaciu i zastanawiasz się ile kosztuje instalacja elektryczna? To jeden z większych wydatków budowlanych, ale dobrze zrobiona instalacja służy całe życie. Oto orientacyjne koszty i co na nie wpływa.",
    sections: [
      {
        heading: "Co wpływa na cenę?",
        content: "Koszt instalacji zależy od wielu czynników:",
        list: [
          "Powierzchnia domu (liczba pomieszczeń)",
          "Liczba punktów (gniazdka, przełączniki, wypusty)",
          "Standard osprzętu (basic, premium, smart)",
          "Rodzaj obwodów (jednofazowe, trójfazowe, dedykowane)",
          "Rozdzielnia — wielkość i wyposażenie",
          "Dodatkowe instalacje — alarmy, monitoring, sieć LAN, automatyka",
          "Czy dom jest jednokondygnacyjny czy piętrowy",
        ],
      },
      {
        heading: "Orientacyjne koszty (2026, Podkarpacie)",
        content: "Robocizna + materiał (bez osprzętu końcowego tj. gniazdek, przełączników):",
        list: [
          "Dom 80–100 m² — 12 000 – 20 000 zł",
          "Dom 120–150 m² — 18 000 – 28 000 zł",
          "Dom 180–250 m² — 25 000 – 45 000 zł",
          "Osprzęt (gniazdka, przełączniki) — od 2 000 do 10 000 zł zależnie od marki",
          "Rozdzielnia kompletna — 2 000 – 5 000 zł",
        ],
      },
      {
        heading: "Ile punktów zaplanować?",
        content: "Rekomendowane minimum dla komfortowego użytkowania:",
        list: [
          "Kuchnia — 8-12 gniazdek (nad blatem, piekarnik, zmywarka, lodówka, indukcja, okap)",
          "Salon — 6-10 gniazdek + TV + LAN",
          "Sypialnia — 4-6 gniazdek (po obu stronach łóżka + biurko)",
          "Łazienka — 2-4 gniazdka (lusterko, pralka, suszarka)",
          "Garaż — 4-6 gniazdek + siłowe",
          "Każde pomieszczenie — minimum 1 punkt oświetleniowy + gniazdka na odkurzacz",
          "Ogrodzenie — wypust na bramę, domofon, monitoring",
        ],
      },
      {
        heading: "Na czym nie oszczędzać?",
        content:
          "Nie oszczędzaj na: przekroju kabli (lepszy zapas niż za mało), rozdzielni (z miejscem na rozbudowę), okablowaniu LAN (ciągnij do każdego pokoju — Wi-Fi tego nie zastąpi), dedykowanych obwodach do kuchni i kocioł/pompa ciepła.",
      },
    ],
    faq: [
      {
        question: "Czy mogę rozłożyć instalację na etapy?",
        answer:
          "Tak — ale kluczowe jest poprowadzenie wszystkich kabli na etapie stanu surowego (przed tynkami). Potem montaż osprzętu i rozdzielni można rozłożyć. W Czarkom planujemy z myślą o przyszłości.",
      },
      {
        question: "Czy wycena jest za darmo?",
        answer:
          "Wstępna wycena na podstawie projektu lub opisu — tak. Szczegółowa wycena po oględzinach na miejscu — również bezpłatna na terenie Krosna, Rzeszowa i Jasła.",
      },
    ],
    relatedArticles: ["okablowanie-strukturalne", "przepisy-i-normy-elektryczne"],
    relatedServices: ["elektryk", "instalacje-elektryczne"],
  },
  {
    slug: "podlaczenie-wallboxa-stacja-ladowania",
    category: "instalacje-elektryczne",
    title: "Podłączenie wallboxa — stacja ładowania samochodu elektrycznego",
    shortTitle: "Podłączenie wallboxa / stacja ładowania",
    metaTitle: "Podłączenie wallboxa — stacja ładowania auta elektrycznego | Czarkom",
    metaDescription:
      "Jak podłączyć wallbox (ładowarkę do auta elektrycznego) w domu? Wymagania, moc, kabel, zabezpieczenia. Instalacja wallbox Krosno, Rzeszów, Jasło.",
    icon: "🔋",
    intro:
      "Coraz więcej osób na Podkarpaciu przesiada się na auta elektryczne i hybrydowe. Podłączenie wallboxa (domowej stacji ładowania) wymaga odpowiedniej instalacji. Oto co musisz wiedzieć.",
    sections: [
      {
        heading: "Wymagania instalacyjne",
        content: "Wallbox typowo pobiera od 3,7 kW do 22 kW. Wymagania:",
        list: [
          "Dedykowany obwód od rozdzielni",
          "Kabel 3×6 mm² (11 kW) lub 5×6 mm² (22 kW trójfazowy)",
          "Zabezpieczenie nadprądowe B32A lub B40A",
          "Wyłącznik różnicowoprądowy typ A lub B (zależnie od wallboxa)",
          "Sprawdzenie mocy przyłączeniowej — czy starczy na dom + wallbox",
        ],
      },
      {
        heading: "Moc przyłączeniowa — najczęstszy problem",
        content:
          "Wiele domów ma moc przyłączeniową 14-15 kW. Wallbox 11 kW + normalne zużycie domu to za dużo. Rozwiązania: dynamiczne zarządzanie mocą (wallbox dopasowuje ładowanie do aktualnego zużycia), zwiększenie mocy przyłączeniowej u operatora, ładowanie w nocy (niższe zużycie).",
      },
      {
        heading: "Ile to kosztuje?",
        content:
          "Wallbox (urządzenie): od 2 500 zł. Instalacja (robocizna + kabel + zabezpieczenia): 1 500 – 4 000 zł, zależnie od odległości od rozdzielni. Komplet (urządzenie + montaż) na terenie Krosna, Rzeszowa i okolic: od 4 000 zł.",
      },
    ],
    faq: [
      {
        question: "Czy mogę ładować auto ze zwykłego gniazdka?",
        answer:
          "Technicznie tak (3,7 kW), ale powoli i obciąża gniazdko. Regularne ładowanie ze zwykłego gniazdka nie jest zalecane — może prowadzić do przegrzania. Wallbox to bezpieczne i szybsze rozwiązanie.",
      },
      {
        question: "Czy montujecie wallboxy w Krośnie i okolicach?",
        answer:
          "Tak — instalujemy stacje ładowania na terenie Krosna, Rzeszowa, Jasła i okolic. Sprawdzamy instalację, dobieramy zabezpieczenia i montujemy — kompletna usługa.",
      },
    ],
    relatedArticles: ["pomiary-elektryczne-poradnik", "ile-kosztuje-instalacja-elektryczna-nowy-dom"],
    relatedServices: ["elektryk", "instalacje-elektryczne"],
  },

  // ──── PROBLEMY Z SIECIĄ — long-tail SEO ────
  {
    slug: "dlaczego-internet-przerywa",
    category: "sieci-i-telekomunikacja",
    title: "Dlaczego internet przerywa? Diagnostyka krok po kroku",
    shortTitle: "Dlaczego internet przerywa",
    metaTitle: "Dlaczego internet przerywa? Diagnostyka krok po kroku | Czarkom",
    metaDescription:
      "Internet się zacina, przerywa, jest wolny? Diagnostyka krok po kroku — router, Wi-Fi, operator. Pomoc z siecią Krosno, Rzeszów, Jasło.",
    icon: "🔍",
    intro:
      "Internet przerywa, strony się nie ładują, streaming się buforuje? Problem może być po stronie operatora, routera, Wi-Fi lub Twojej sieci domowej. Oto jak zdiagnozować przyczynę — krok po kroku.",
    sections: [
      {
        heading: "Krok 1 — operator czy Twoja sieć?",
        content: "Podłącz komputer kablem LAN bezpośrednio do routera i sprawdź prędkość (speedtest.net). Jeśli prędkość jest dobra kablem, ale słaba na Wi-Fi — problem jest w sieci domowej. Jeśli kablem też jest słabo — dzwoń do operatora.",
      },
      {
        heading: "Krok 2 — restart routera",
        content: "Brzmi banalnie, ale rozwiązuje ~30% problemów. Odłącz router od zasilania na 30 sekund, podłącz z powrotem, poczekaj 2 minuty. Jeśli problem wraca po jakimś czasie — router może mieć problem z pamięcią lub przegrzewać się.",
      },
      {
        heading: "Krok 3 — sprawdź Wi-Fi",
        content: "Jeśli problem dotyczy tylko Wi-Fi:",
        list: [
          "Sprawdź sygnał — ile kresek Wi-Fi masz na urządzeniu",
          "Przejdź na pasmo 5 GHz (jeśli router je ma) — mniej zakłóceń",
          "Zmień kanał Wi-Fi — szczególnie na 2.4 GHz (aplikacja WiFi Analyzer)",
          "Przenieś router wyżej i centralnie",
          "Sprawdź, ile urządzeń jest podłączonych (stare routery nie radzą sobie z >15-20)",
        ],
      },
      {
        heading: "Krok 4 — sprawdź DNS",
        content:
          "Jeśli strony się nie ładują, ale ping do 8.8.8.8 działa — problem z DNS. Zmień DNS na Cloudflare (1.1.1.1) lub Google (8.8.8.8) w ustawieniach Wi-Fi urządzenia lub routera.",
      },
      {
        heading: "Kiedy potrzebujesz pomocy?",
        content:
          "Jeśli problem wraca regularnie, dotyczy wielu urządzeń lub się pogarsza — to może być kwestia sprzętu, konfiguracji sieci lub zasięgu Wi-Fi. Na terenie Krosna, Rzeszowa i Jasła pomagamy z diagnostyką i naprawą sieci domowych i firmowych.",
      },
    ],
    faq: [
      {
        question: "Czy to zawsze wina operatora?",
        answer:
          "Nie — w naszym doświadczeniu 60-70% problemów z internetem to kwestia routera, jego lokalizacji, konfiguracji lub zasięgu Wi-Fi w domu. Operator rzadko jest winny, jeśli test kablem daje dobrą prędkość.",
      },
      {
        question: "Internet nie działa — co zrobić?",
        answer:
          "Zrestartuj router (odłącz zasilanie na 30 sek.). Sprawdź czy problem jest na jednym urządzeniu czy na wszystkich. Podłącz komputer kablem do routera i sprawdź prędkość. Jeśli kablem nie działa — dzwoń do operatora. Jeśli kablem działa a na Wi-Fi nie — problem z siecią domową.",
      },
      {
        question: "Dlaczego Wi-Fi rozłącza?",
        answer:
          "Najczęstsze przyczyny: zatłoczony kanał Wi-Fi, router się przegrzewa, za dużo urządzeń, słaby sygnał na granicy zasięgu. Zmień kanał Wi-Fi, przełącz na 5 GHz, przenieś router wyżej. Jeśli nie pomaga — router może wymagać wymiany.",
      },
      {
        question: "Czemu internet tnie?",
        answer:
          "Tnący się internet to zwykle problem z Wi-Fi (za daleko od routera, zatłoczony kanał, stary router) lub z przeciążeniem domowej sieci. Zmierz prędkość kablem — jeśli jest OK, problem jest w Wi-Fi. Jeśli kablem też tnie — problem u operatora.",
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "konfiguracja-sieci-ip", "jest-wifi-ale-nie-ma-internetu"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "siec-do-pracy-zdalnej",
    category: "sieci-i-telekomunikacja",
    title: "Sieć domowa do pracy zdalnej — jak przygotować?",
    shortTitle: "Sieć do pracy zdalnej",
    metaTitle: "Sieć domowa do pracy zdalnej — konfiguracja i sprzęt | Czarkom",
    metaDescription:
      "Jak przygotować sieć do pracy zdalnej? Stabilne Wi-Fi, VPN, wideokonferencje. Konfiguracja sieci domowej. Pomoc — Krosno, Rzeszów, Jasło.",
    icon: "💻",
    intro:
      "Praca zdalna wymaga stabilnego internetu — szczególnie do wideokonferencji, VPN i pracy w chmurze. Słaby Wi-Fi i lagujący Zoom to zmora wielu osób pracujących z domu w Krośnie, Rzeszowie i okolicach. Oto jak to naprawić.",
    sections: [
      {
        heading: "Wymagania minimalne",
        content: "Dla komfortowej pracy zdalnej potrzebujesz:",
        list: [
          "Prędkość internetu: minimum 30 Mbps pobierania, 10 Mbps wysyłania",
          "Ping (opóźnienie): poniżej 50 ms",
          "Stabilne połączenie — bez przerw i dużych wahań",
          "Dobre pokrycie Wi-Fi w miejscu pracy (lub kabel LAN)",
        ],
      },
      {
        heading: "Kabel LAN — najlepsza opcja",
        content:
          "Dla stabilnej pracy zdalnej nic nie pobije kabla LAN. Podłączenie komputera kablem do routera (lub switcha) daje stałą prędkość, niskie opóźnienie i zero przerw. Jeśli router jest daleko od biurka — poprowadź kabel lub użyj access pointa w pokoju.",
      },
      {
        heading: "Priorytet ruchu (QoS)",
        content:
          "Wiele routerów pozwala ustawić priorytet dla określonych urządzeń lub aplikacji (QoS). Ustaw wysoki priorytet dla komputera roboczego — dzięki temu Zoom nie będzie lagował, gdy ktoś inny ogląda Netflix.",
      },
      {
        heading: "Łącze zapasowe",
        content:
          "Przerwa w internecie = przerwa w pracy. Warto mieć backup: hotspot z telefonu (LTE/5G), router z kartą SIM, lub drugi dostawca. Niektóre routery mają wbudowany failover — automatycznie przełączają na zapasowe łącze.",
      },
    ],
    faq: [
      {
        question: "Czy VPN spowalnia internet?",
        answer:
          "VPN dodaje ~5-15% narzutu. Przy dobrym łączu (50+ Mbps) to nieodczuwalne. Problem pojawia się przy wolnym lub niestabilnym Wi-Fi — wtedy VPN 'dokłada' do istniejących problemów.",
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "okablowanie-strukturalne"],
    relatedServices: ["sieci-i-internet"],
  },

  // ──── PROBLEMY Z CCTV — long-tail SEO ────
  {
    slug: "kamera-nie-dziala-co-sprawdzic",
    category: "systemy-cctv",
    title: "Kamera monitoringu nie działa — co sprawdzić?",
    shortTitle: "Kamera nie działa",
    metaTitle: "Kamera monitoringu nie działa — co sprawdzić? | Czarkom",
    metaDescription:
      "Kamera CCTV przestała działać? Brak obrazu, kamera offline? Diagnostyka krok po kroku. Serwis monitoringu Krosno, Rzeszów, Jasło.",
    icon: "📹",
    intro:
      "Kamera nagle przestała pokazywać obraz, jest offline w aplikacji lub nagrywa czarny ekran? Zanim wezwiesz serwisanta, sprawdź kilka rzeczy. Większość problemów da się szybko zlokalizować.",
    sections: [
      {
        heading: "Najczęstsze przyczyny",
        content: "Dlaczego kamera przestaje działać:",
        list: [
          "Brak zasilania — uszkodzony zasilacz, odłączony PoE, przepalony port switcha",
          "Problem z kablem — uszkodzenie LAN, pogryzione przez gryzonie, poluzowana wtyczka",
          "Restart rejestratora — po utracie zasilania NVR mógł się nie uruchomić poprawnie",
          "Aktualizacja firmware — nowa wersja mogła zmienić ustawienia",
          "Zmieniony adres IP — kamera ma inny IP niż rejestrator",
          "Uszkodzenie kamery — po burzy (przepięcie), zalanie, mechaniczne",
        ],
      },
      {
        heading: "Co sprawdzić samemu?",
        content: "Szybka diagnostyka krok po kroku:",
        list: [
          "Sprawdź czy diody na kamerze się świecą (zasilanie)",
          "Odłącz i podłącz kabel LAN przy kamerze",
          "Zrestartuj rejestrator (NVR) — wyłącz na 30 sekund",
          "Zrestartuj switch PoE (jeśli masz)",
          "Sprawdź w aplikacji na telefonie — czy inne kamery działają",
          "Spróbuj podłączyć kamerę innym kablem LAN",
        ],
      },
      {
        heading: "Po burzy — przepięcie",
        content:
          "Jeśli kamera przestała działać po burzy, to najpewniej przepięcie. Uszkodzony może być port PoE w switchu, sam rejestrator lub elektronika kamery. Takie awarie zdarzają się często w domach bez ochrony przepięciowej (SPD). Na terenie Krosna, Rzeszowa i Jasła naprawiamy i wymieniamy uszkodzone elementy monitoringu.",
      },
    ],
    faq: [
      {
        question: "Ile kosztuje naprawa monitoringu?",
        answer:
          "Diagnostyka + dojazd: od 150 zł. Wymiana kamery: od 300 zł (z kamerą). Naprawa okablowania: zależnie od zakresu. Wyceniamy po rozmowie — często diagnozujemy problem zdalnie przez telefon.",
      },
      {
        question: "Czy mogę sam podłączyć nową kamerę zamiast uszkodzonej?",
        answer:
          "Fizycznie tak — nowa kamera IP w to samo gniazdo. Ale trzeba ją dodać do rejestratora i skonfigurować (adres IP, strumień, detekcja). Pomagamy z tym zdalnie lub na miejscu.",
      },
      {
        question: "Kamera nie nagrywa — dlaczego?",
        answer:
          "Sprawdź dysk w rejestratorze — może być pełny, uszkodzony lub odłączony. W ustawieniach NVR sprawdź, czy nagrywanie jest włączone i czy harmonogram jest ustawiony. Brak nagrań to częsty problem po awarii zasilania — rejestrator wymaga restartu.",
      },
      {
        question: "Kamera nie pokazuje obrazu na żywo — co sprawdzić?",
        answer:
          "Sprawdź zasilanie kamery (diody), kabel LAN, restart rejestratora. Jeśli obraz jest tylko czarny — może być problem z trybem nocnym (IR) lub uszkodzonym sensorem kamery. Jeśli obraz jest 'zamrożony' — zrestartuj kamerę.",
      },
      {
        question: "Kamera IP nie działa — základní diagnostyka?",
        answer:
          "Sprawdź zasilanie (PoE lub zasilacz), kabel LAN, ping na adres IP kamery. Zaloguj się do panelu web kamery (przeglądarka, IP kamery). Jeśli nie odpowiada — zrestartuj. Jeśli dalej nie działa — reset do ustawień fabrycznych.",
      },
    ],
    relatedArticles: ["rodzaje-kamer-cctv", "systemy-nagrywania-nvr-dvr", "kamera-offline-jak-przywrocic"],
    relatedServices: ["monitoring-cctv"],
  },
  {
    slug: "podglad-kamer-na-telefonie",
    category: "systemy-cctv",
    title: "Jak oglądać kamery monitoringu na telefonie?",
    shortTitle: "Podgląd kamer na telefonie",
    metaTitle: "Podgląd kamer monitoringu na telefonie — konfiguracja | Czarkom",
    metaDescription:
      "Jak skonfigurować podgląd kamer CCTV na telefonie? Hik-Connect, DMSS, iVMS. Krok po kroku. Monitoring Krosno, Rzeszów, Jasło.",
    icon: "📱",
    intro:
      "Podgląd kamer na telefonie to jedna z najczęściej oczekiwanych funkcji monitoringu. Większość nowoczesnych rejestratorów (NVR) i kamer IP umożliwia podgląd zdalny przez dedykowaną aplikację. Oto jak to skonfigurować.",
    sections: [
      {
        heading: "Najpopularniejsze aplikacje",
        content: "Aplikacja zależy od producenta sprzętu:",
        list: [
          "Hikvision — Hik-Connect (dawniej iVMS-4500)",
          "Dahua — DMSS (dawniej gDMSS)",
          "Uniview — EZView",
          "TP-Link (VIGI) — VIGI",
          "Reolink — Reolink",
          "Inne — ONVIF kompatybilne aplikacje (np. tinyCam)",
        ],
      },
      {
        heading: "Konfiguracja krok po kroku",
        content: "Typowa konfiguracja podglądu zdalnego:",
        list: [
          "Zainstaluj aplikację producenta na telefonie",
          "Utwórz konto w chmurze producenta (np. Hik-Connect)",
          "Na rejestratorze włącz P2P / chmurę (Cloud) w ustawieniach sieciowych",
          "Zeskanuj kod QR rejestratora w aplikacji",
          "Dodaj rejestrator — podaj kod weryfikacyjny",
          "Gotowe — kamery pojawią się w aplikacji",
        ],
      },
      {
        heading: "Problemy z podglądem?",
        content: "Najczęstsze problemy i rozwiązania:",
        list: [
          "Brak obrazu zdalnie → sprawdź, czy rejestrator ma internet (kabel LAN do routera)",
          "Wolny obraz → przełącz na podstrumień (sub stream) w aplikacji",
          "Nie można dodać rejestratora → sprawdź status P2P w ustawieniach NVR",
          "Aplikacja wymaga aktualizacji → pobierz najnowszą wersję",
        ],
      },
    ],
    faq: [
      {
        question: "Czy podgląd na telefonie jest bezpieczny?",
        answer:
          "Tak, pod warunkiem że: zmienisz domyślne hasło rejestratora (ważne!), używasz aktualnego firmware, korzystasz z oficjalnej aplikacji producenta. Nie udostępniaj kodu QR ani hasła obcym osobom.",
      },
      {
        question: "Czy mogę oglądać kamery będąc za granicą?",
        answer:
          "Tak — podgląd P2P działa przez internet, niezależnie od lokalizacji. Potrzebujesz tylko połączenia internetowego na telefonie.",
      },
      {
        question: "Nie widzę kamery w aplikacji — dlaczego?",
        answer:
          "Sprawdź: czy rejestrator ma internet (kabel LAN do routera), czy P2P jest włączone w ustawieniach NVR, czy aplikacja jest aktualna. Spróbuj usunąć i dodać rejestrator od nowa w aplikacji.",
      },
      {
        question: "Monitoring nie działa na telefonie — co zrobić?",
        answer:
          "Zrestartuj router i rejestrator. Sprawdź aplikację — wyloguj i zaloguj ponownie. Upewnij się, że rejestrator jest podłączony kablem LAN do routera z internetem. Jeśli nie pomaga — zadzwoń, pomagamy z konfiguracją na terenie Krosna, Rzeszowa i Jasła.",
      },
      {
        question: "Aplikacja do kamery nie działa — co robić?",
        answer:
          "Zaktualizuj aplikację, wyczyść cache, wyloguj i zaloguj ponownie. Jeśli nie pomaga — odinstaluj i zainstaluj ponownie. Problem może też wynikać z aktualizacji systemu telefonu — sprawdź czy jest nowa wersja aplikacji.",
      },
    ],
    relatedArticles: ["kamera-nie-dziala-co-sprawdzic", "rodzaje-kamer-cctv", "kamera-offline-jak-przywrocic"],
    relatedServices: ["monitoring-cctv"],
  },

  // ──── SMART HOME PROBLEMY ────
  {
    slug: "smart-home-a-siec-wifi",
    category: "automatyka",
    title: "Smart home a sieć Wi-Fi — jak nie przeciążyć routera?",
    shortTitle: "Smart home a sieć Wi-Fi",
    metaTitle: "Smart home a sieć Wi-Fi — ile urządzeń wytrzyma router? | Czarkom",
    metaDescription:
      "Smart home dodaje dziesiątki urządzeń do Wi-Fi. Jak nie przeciążyć routera? Ile urządzeń obsługuje router? Porady — Krosno, Rzeszów, Jasło.",
    icon: "🌐",
    intro:
      "Inteligentny dom to kilkanaście, a nawet kilkadziesiąt urządzeń podłączonych do Wi-Fi: żarówki, czujniki, kamery, gniazdka, asystent głosowy. Przeciętny router od operatora tego nie udźwignie. Oto jak to rozwiązać.",
    sections: [
      {
        heading: "Ile urządzeń obsługuje router?",
        content:
          "Router od operatora — zwykle 15-25 urządzeń stabilnie. Router Wi-Fi 6 — do 50-100. Powyżej 20-30 urządzeń IoT warto rozważyć: osobną sieć dla urządzeń smart, Zigbee/Z-Wave zamiast Wi-Fi, enterprise-grade access pointy.",
      },
      {
        heading: "Zigbee i Z-Wave — alternatywa dla Wi-Fi",
        content: "Nie wszystko musi lecieć po Wi-Fi:",
        list: [
          "Zigbee — odrębna sieć radiowa, niezależna od Wi-Fi. Żarówki, czujniki, zamki. Wymaga huba (np. Sonoff ZBBridge, Philips Hue Bridge).",
          "Z-Wave — podobnie jak Zigbee, ale mniej urządzeń na rynku PL. Stabilna, małe zakłócenia.",
          "Thread/Matter — nowy standard, WiFi + Zigbee + BLE. Przyszłość smart home.",
        ],
      },
      {
        heading: "Jak dobrze zaprojektować sieć dla smart home?",
        content: "Wskazówki:",
        list: [
          "Osobna sieć Wi-Fi (SSID) dla urządzeń IoT — izolacja od głównej sieci",
          "Zigbee/Z-Wave dla czujników i żarówek — odciąża Wi-Fi",
          "Kabel LAN dla wszystkiego co stoi w jednym miejscu (hub, NAS, konsola)",
          "Router z obsługą 100+ urządzeń lub access pointy enterprise",
          "Planuj sieć razem z automatyką — najlepiej na etapie budowy/remontu",
        ],
      },
    ],
    faq: [
      {
        question: "Czy potrzebuję specjalny router do smart home?",
        answer:
          "Nie specjalny, ale dobry. Router Wi-Fi 6 z obsługą 100+ urządzeń, dwoma pasmami i opcją wielu SSID. Lub lepiej — profesjonalne access pointy + osobny router. Pomagamy dobrać i skonfigurować.",
      },
    ],
    relatedArticles: ["smart-home-od-czego-zaczac", "jak-poprawic-zasieg-wifi"],
    relatedServices: ["smart-home", "sieci-i-internet"],
  },

  // ──── NOWE ARTYKUŁY PROBLEMOWE — frazy long-tail SEO ────

  // Wi-Fi / Internet
  {
    slug: "jest-wifi-ale-nie-ma-internetu",
    category: "sieci-i-telekomunikacja",
    title: "Jest Wi-Fi, ale nie ma internetu — co to oznacza?",
    shortTitle: "Jest Wi-Fi ale nie ma internetu",
    metaTitle: "Jest Wi-Fi ale nie ma internetu — co zrobić? | Czarkom",
    metaDescription:
      "Telefon łączy się z Wi-Fi, ale internet nie działa? Router działa, ale nie ma internetu? Przyczyny i rozwiązania. Pomoc — Krosno, Rzeszów, Jasło.",
    icon: "❓",
    intro:
      "Twoje urządzenie pokazuje połączenie z Wi-Fi, ale strony się nie ładują, a aplikacje nie działają? To bardzo częsty problem. Ikona Wi-Fi jest, ale internetu nie ma. Oto dlaczego tak się dzieje i co zrobić — krok po kroku.",
    sections: [
      {
        heading: "Dlaczego jest Wi-Fi, ale nie ma internetu?",
        content:
          "Wi-Fi i internet to dwie różne rzeczy. Wi-Fi to lokalna sieć bezprzewodowa tworzona przez router. Internet to łączność z siecią zewnętrzną dostarczana przez operatora. Możesz mieć Wi-Fi bez internetu, gdy:",
        list: [
          "Operator ma awarię — brak sygnału z zewnątrz",
          "Router stracił połączenie z internetem — wymaga restartu",
          "Problem z DNS — router działa, ale nie tłumaczy adresów stron",
          "Kabel od operatora jest odłączony lub uszkodzony",
          "Router jest źle skonfigurowany — np. po resecie do ustawień fabrycznych",
          "Konto u operatora jest zablokowane — brak płatności",
        ],
      },
      {
        heading: "Co zrobić — krok po kroku",
        content: "Sprawdź po kolei:",
        list: [
          "Zrestartuj router — odłącz zasilanie na 30 sekund, podłącz z powrotem",
          "Sprawdź diody na routerze — czy dioda WAN/Internet świeci się zielono?",
          "Sprawdź na innym urządzeniu — jeśli na żadnym nie działa, problem jest w routerze lub u operatora",
          "Zmień DNS na telefonie/komputerze — ustaw 1.1.1.1 lub 8.8.8.8",
          "Sprawdź kabel WAN — jest podłączony do portu WAN routera, nie LAN?",
          "Zadzwoń do operatora — zapytaj czy jest awaria w Twojej okolicy",
        ],
      },
      {
        heading: "Telefon łączy się z Wi-Fi, ale nie ma internetu",
        content:
          "Jeśli problem dotyczy tylko telefonu, a inne urządzenia działają: zapomnij sieć Wi-Fi w ustawieniach telefonu i połącz się na nowo, wyłącz i włącz Wi-Fi, zrestartuj telefon, sprawdź czy nie masz włączonego VPN lub prywatnego DNS, który blokuje połączenie.",
      },
      {
        heading: "Laptop nie widzi Wi-Fi",
        content:
          "Jeśli laptop w ogóle nie widzi sieci Wi-Fi: sprawdź czy Wi-Fi jest włączone (klawisz Fn+F2 lub ikona samolotu), zaktualizuj sterowniki karty sieciowej, zrestartuj usługę WLAN (Windows: services.msc → WLAN AutoConfig). Jeśli nie pomaga — może być uszkodzona karta Wi-Fi w laptopie.",
      },
      {
        heading: "Telewizor nie łączy się z internetem",
        content:
          "Smart TV ma słabsze karty Wi-Fi niż telefony. Rozwiązania: przenieś router bliżej TV, podłącz TV kablem LAN (najlepsze rozwiązanie), użyj adaptera powerline jeśli kabel LAN nie wchodzi w grę, zaktualizuj oprogramowanie TV.",
      },
    ],
    faq: [
      {
        question: "Router działa ale nie ma internetu — co zrobić?",
        answer:
          "Zrestartuj router (odłącz zasilanie na 30 sek.). Sprawdź diodę WAN — powinna świecić. Jeśli nie — problem z kablem od operatora lub po jego stronie. Jeśli świeci ale internetu nie ma — zmień DNS na 8.8.8.8. Jeśli nic nie pomaga — dzwoń do operatora lub do nas.",
      },
      {
        question: "Zepsuł mi się internet — do kogo dzwonić?",
        answer:
          "Najpierw do operatora — sprawdź czy nie ma awarii. Jeśli operator mówi, że u nich jest OK, problem jest w Twojej sieci domowej. Na terenie Krosna, Rzeszowa i Jasła pomagamy z diagnostyką i naprawą sieci — zadzwoń do Czarkom.",
      },
      {
        question: "Dlaczego internet nie działa mimo Wi-Fi?",
        answer:
          "Wi-Fi to tylko lokalna sieć. Internet dostarcza operator kablem lub światłowodem. Jeśli router stracił połączenie z operatorem, Wi-Fi dalej działa (bo to osobna rzecz), ale internet nie. Restart routera rozwiązuje problem w ~50% przypadków.",
      },
    ],
    relatedArticles: ["dlaczego-internet-przerywa", "jak-poprawic-zasieg-wifi"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "wifi-nie-dziala-w-drugim-pokoju",
    category: "sieci-i-telekomunikacja",
    title: "Wi-Fi nie działa w drugim pokoju — jak to naprawić?",
    shortTitle: "Wi-Fi nie działa w pokoju",
    metaTitle: "Wi-Fi nie działa w drugim pokoju / na piętrze — rozwiązania | Czarkom",
    metaDescription:
      "Wi-Fi nie działa w drugim pokoju, na piętrze, w garażu? Internet tylko przy routerze? Sprawdzone sposoby na poprawę zasięgu. Krosno, Rzeszów, Jasło.",
    icon: "📡",
    intro:
      "Internet działa tylko przy routerze, a w sypialni, na piętrze czy w garażu Wi-Fi ledwo zipie? To jeden z najczęstszych problemów w domach jednorodzinnych na Podkarpaciu — grube ściany, piętro do pokonania, garaż za daleko. Oto co zrobić.",
    sections: [
      {
        heading: "Dlaczego Wi-Fi nie sięga do drugiego pokoju?",
        content: "Sygnał Wi-Fi słabnie przechodząc przez przeszkody:",
        list: [
          "Ściany z cegły lub betonu — tłumią sygnał o 50-80%",
          "Strop żelbetowy (między piętrami) — praktycznie blokuje sygnał",
          "Duża odległość — powyżej 10-15 m przez ściany zasięg spada dramatycznie",
          "Zakłócenia — sąsiednie sieci Wi-Fi, kuchenka mikrofalowa, urządzenia Bluetooth",
          "Stary router — Wi-Fi 4 (802.11n) ma znacznie słabszy zasięg niż Wi-Fi 5/6",
          "Router schowany w szafce — zamknięta szafka tłumi sygnał o 20-40%",
        ],
      },
      {
        heading: "Proste rozwiązania — zacznij od tego",
        content: "Zanim kupisz nowy sprzęt:",
        list: [
          "Przenieś router do centralnego punktu domu",
          "Wyjmij router z szafki — ustaw go na szafce, na ścianie",
          "Przełącz na pasmo 5 GHz — mniejsze zakłócenia (ale krótszy zasięg)",
          "Zmień kanał Wi-Fi — na mniej zatłoczony (aplikacja WiFi Analyzer)",
          "Ustaw anteny routera — jedna pionowo, jedna pod kątem 45°",
        ],
      },
      {
        heading: "Wi-Fi nie działa na piętrze — co zrobić?",
        content:
          "Strop żelbetowy to największy wróg Wi-Fi. Rozwiązanie: poprowadź kabel LAN na piętro i podłącz tam access point (AP). To daje pełną prędkość. Alternatywa bez kabla: system mesh — dwie jednostki (dół + góra) tworzą jedną sieć. Gorzej niż AP, ale nie wymaga kabla.",
      },
      {
        heading: "Internet nie działa w garażu",
        content:
          "Garaż to często osobny budynek lub dalsza część domu. Opcje: kabel LAN + access point (najlepiej, jeśli da się poprowadzić), mesh zewnętrzny, powerline (adapter przez instalację elektryczną — jakość zależy od instalacji). Na terenie Krosna, Rzeszowa i Jasła pomagamy dobrać i zainstalować odpowiednie rozwiązanie.",
      },
    ],
    faq: [
      {
        question: "Internet działa tylko przy routerze — co zrobić?",
        answer:
          "Router ma ograniczony zasięg. Jeśli internet działa tylko w pobliżu routera, potrzebujesz dodatkowego punktu dostępowego (AP) lub systemu mesh. Najpierw spróbuj przenieść router do centralnego punktu domu.",
      },
      {
        question: "Czy repeater (wzmacniacz) pomoże?",
        answer:
          "Repeater jest najtańszą opcją, ale obniża prędkość o ~50%. OK na szybkie rozwiązanie, ale nie polecamy na stałe. Lepiej: access point na kablu LAN lub mesh.",
      },
      {
        question: "Ile kosztuje rozbudowa Wi-Fi w domu?",
        answer:
          "Access point (urządzenie): od 200 zł. Mesh (2 szt.): od 400 zł. Instalacja z poprowadzeniem kabla LAN: od 300 zł. Na terenie Krosna, Rzeszowa i Jasła wyceniamy bezpłatnie po oględzinach.",
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "mesh-repeater-czy-access-point"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "internet-wolny-mimo-swiatlowodu",
    category: "sieci-i-telekomunikacja",
    title: "Internet wolny mimo światłowodu — gdzie leży problem?",
    shortTitle: "Internet wolny mimo światłowodu",
    metaTitle: "Internet wolny mimo światłowodu — przyczyny i rozwiązania | Czarkom",
    metaDescription:
      "Masz światłowód, a internet wolno działa? Przyczyny: router, Wi-Fi, konfiguracja. Jak przyspieszyć internet w domu. Pomoc — Krosno, Rzeszów, Jasło.",
    icon: "🐌",
    intro:
      "Płacisz za 300 Mbps, a speedtest pokazuje 30? Masz światłowód, ale internet wolno działa, a strony się ładują wieki? Problem prawie na pewno nie jest w światłowodzie — jest w Twojej sieci domowej. Oto jak go znaleźć.",
    sections: [
      {
        heading: "Dlaczego internet działa wolno mimo światłowodu?",
        content: "Światłowód dostarcza szybki internet do Twojego domu. Ale pomiędzy światłowodem a Twoim urządzeniem jest kilka ogniw, z których każde może spowalniać:",
        list: [
          "ONT/router od operatora — stary lub słaby nie wyciąga pełnej prędkości",
          "Wi-Fi — przez ściany tracisz 50-90% prędkości",
          "Stary router — Wi-Fi 4 nie obsłuży więcej niż 100-150 Mbps",
          "Za dużo urządzeń — 10+ urządzeń dzieli się przepustowością",
          "Pasmo 2.4 GHz — max ~100 Mbps; przełącz na 5 GHz (do 800+ Mbps)",
          "Kabel LAN Cat5 (nie Cat5e) — max 100 Mbps",
        ],
      },
      {
        heading: "Jak sprawdzić gdzie jest problem?",
        content: "Test krok po kroku:",
        list: [
          "Podłącz komputer kablem LAN do ONT/routera od operatora",
          "Uruchom speedtest.net — jeśli prędkość jest OK, problem jest w Wi-Fi",
          "Podłącz do swojego routera (jeśli masz osobny) — jeśli tu spada, router spowalnia",
          "Zmierz prędkość na Wi-Fi w tym samym pokoju — jeśli niska, router ma słabe Wi-Fi",
          "Zmierz w innym pokoju — jeśli spada, potrzebujesz lepszego pokrycia",
        ],
      },
      {
        heading: "Dlaczego internet działa wolno wieczorem?",
        content:
          "Wieczorem internet spowalnia z dwóch powodów: 1) więcej osób w domu korzysta równocześnie (streaming, gry, telefony), 2) u niektórych operatorów w starszej infrastrukturze jest zjawisko dzielenia łącza z sąsiadami. Jeśli kabel od operatora daje mało wieczorem — to wina operatora. Jeśli kabel daje dużo, a Wi-Fi mało — problem w sieci domowej.",
      },
      {
        heading: "Jak przyspieszyć internet w domu?",
        content: "Sprawdzone sposoby:",
        list: [
          "Przełącz się na pasmo 5 GHz — dwukrotnie szybciej niż 2.4 GHz",
          "Podłącz kablem LAN urządzenia stacjonarne (TV, komputer, konsola)",
          "Wymień router — model z Wi-Fi 6 obsłuży pełną prędkość światłowodu",
          "Dodaj access point — jeśli Wi-Fi nie sięga do odległych pokoi",
          "Zaktualizuj firmware routera",
          "Wyłącz niepotrzebne urządzenia z sieci",
        ],
      },
    ],
    faq: [
      {
        question: "Czemu internet tnie mimo światłowodu?",
        answer:
          "Światłowód jest szybki, ale liczy się cała droga od światłowodu do urządzenia. Stary router, słabe Wi-Fi lub za dużo urządzeń spowalniają. Zmierz prędkość kablem — jeśli jest OK, problem jest w sieci domowej, nie u operatora.",
      },
      {
        question: "Jak ustawić router, żeby internet lepiej działał?",
        answer:
          "Przenieś do centralnego punktu domu, ustaw wysoko, włącz 5 GHz, zmień kanał Wi-Fi na mniej zatłoczony, zaktualizuj firmware. To daje najszybszą poprawę bez wydawania pieniędzy.",
      },
      {
        question: "Czy muszę wymieniać router od operatora?",
        answer:
          "Często tak — routery od operatorów to zwykle podstawowe modele z Wi-Fi 4 lub słabym Wi-Fi 5. Własny router z Wi-Fi 6 + access pointy to inwestycja, ale daje realną różnicę. Pomagamy dobrać sprzęt i skonfigurować — na terenie Krosna, Rzeszowa i Jasła.",
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "jest-wifi-ale-nie-ma-internetu"],
    relatedServices: ["sieci-i-internet"],
  },
  {
    slug: "mesh-repeater-czy-access-point",
    category: "sieci-i-telekomunikacja",
    title: "Mesh, repeater czy access point — co wybrać do domu?",
    shortTitle: "Mesh vs repeater vs access point",
    metaTitle: "Mesh, repeater czy access point — co wybrać? Porównanie | Czarkom",
    metaDescription:
      "Mesh, wzmacniacz Wi-Fi czy access point? Które rozwiązanie wybrać do domu? Porównanie, zalety, wady, koszty. Instalacja Wi-Fi — Krosno, Rzeszów, Jasło.",
    icon: "⚖️",
    intro:
      "Słaby zasięg Wi-Fi — postanawiasz coś z tym zrobić. Ale co kupić: mesh, repeater (wzmacniacz), czy access point? Każde rozwiązanie ma inne zalety. Oto rzetelne porównanie, żebyś wybrał to, co naprawdę pasuje do Twojego domu.",
    sections: [
      {
        heading: "Repeater (wzmacniacz Wi-Fi)",
        content: "Najtańsze rozwiązanie, ale z ograniczeniami:",
        list: [
          "Cena: od 50–150 zł",
          "Wzmacnia istniejący sygnał Wi-Fi",
          "Obniża prędkość o ~50% (bo przesyła na tym samym kanale)",
          "Tworzy osobną sieć (np. 'MojaSiec_EXT') — urządzenia się nie przełączają gładko",
          "OK na szybkie łatanie — np. pokój gościnny, garaż",
          "Nie polecamy jako rozwiązanie stałe",
        ],
      },
      {
        heading: "Mesh (system siatkowy)",
        content: "Kilka urządzeń tworzących jedną spójną sieć:",
        list: [
          "Cena: od 400 zł (2 szt.) do 1500+ zł (3 szt. premium)",
          "Jedna sieć Wi-Fi w całym domu — gładkie przełączanie (roaming)",
          "Łatwa konfiguracja — zwykle przez aplikację na telefonie",
          "Nie wymaga kabla LAN między jednostkami (ale kablem działa lepiej)",
          "Traci ~20-30% prędkości przez bezprzewodowy backhaul",
          "Dobry dla domu, gdzie nie da się poprowadzić kabli",
        ],
      },
      {
        heading: "Access point (AP) — najlepsza wydajność",
        content: "Dedykowany punkt dostępowy podłączony kablem LAN:",
        list: [
          "Cena AP: od 200 zł (dobry: 400-600 zł)",
          "Pełna prędkość — nie traci na retransmisji (kabel zapewnia backhaul)",
          "Jedna sieć Wi-Fi — gładki roaming (802.11r/k/v)",
          "Wymaga poprowadzenia kabla LAN od routera do AP",
          "Najlepsze rozwiązanie trwałe — stosowane w firmach i dużych domach",
          "Idealny na etapie budowy/remontu — ciągniemy kabel w ścianach",
        ],
      },
      {
        heading: "Co wybrać?",
        content: "Nasza rekomendacja bazująca na setkach instalacji na Podkarpaciu:",
        list: [
          "Mieszkanie do 60 m² — dobry router Wi-Fi 6 wystarczy",
          "Dom 80-120 m², 1 piętro, bez możliwości kabla — mesh",
          "Dom 80-120 m², 1 piętro, z możliwością kabla — access point",
          "Dom 150+ m², 2+ piętra — access pointy (minimum 2-3) na kablu LAN",
          "Garaż, budynek gospodarczy — access point na kablu lub zewnętrzny AP",
          "Tymczasowa poprawa — repeater",
        ],
      },
    ],
    faq: [
      {
        question: "Mesh czy wzmacniacz Wi-Fi — co lepsze?",
        answer:
          "Zdecydowanie mesh. Repeater tnie prędkość o połowę i tworzy osobną sieć. Mesh daje jedną sieć, gładki roaming i znacznie lepszą prędkość. Jedyna zaleta repeatera to niska cena.",
      },
      {
        question: "Access point czy repeater — co wybrać?",
        answer:
          "Jeśli możesz poprowadzić kabel LAN do miejsca, gdzie chcesz Wi-Fi — zawsze access point. Daje 100% prędkości. Repeater to rozwiązanie tymczasowe, które obniża prędkość o połowę.",
      },
      {
        question: "Czy możecie zainstalować access point w moim domu?",
        answer:
          "Tak — na terenie Krosna, Rzeszowa, Jasła i okolic instalujemy access pointy, systemy mesh, prowadzimy kable LAN. Dobieramy sprzęt do domu, konfigurujemy i testujemy. Zadzwoń — wycenimy bezpłatnie.",
      },
      {
        question: "Ile kosztuje rozbudowa sieci Wi-Fi w domu?",
        answer:
          "Repeater: 50-150 zł (sam sprzęt, bez montażu). Mesh (2 szt.): 400-1500 zł. Access point + kabel LAN + montaż: od 500 zł. Dokładnie wyceniamy po oględzinach — na Podkarpaciu dojeżdżamy bezpłatnie.",
      },
    ],
    relatedArticles: ["jak-poprawic-zasieg-wifi", "wifi-nie-dziala-w-drugim-pokoju"],
    relatedServices: ["sieci-i-internet"],
  },

  // Kamery / monitoring
  {
    slug: "kamera-offline-jak-przywrocic",
    category: "systemy-cctv",
    title: "Kamera offline — jak przywrócić podgląd w telefonie?",
    shortTitle: "Kamera offline — rozwiązania",
    metaTitle: "Kamera offline — jak przywrócić podgląd na telefonie? | Czarkom",
    metaDescription:
      "Kamera jest offline w aplikacji? Monitoring nie działa na telefonie? Podgląd kamer nie działa przez internet? Rozwiązania krok po kroku. Krosno, Rzeszów, Jasło.",
    icon: "🔴",
    intro:
      "Kamera jest offline w aplikacji, monitoring nie działa na telefonie, a podgląd kamer nie działa przez internet? To jeden z najczęstszych problemów z systemami CCTV. Zwykle przyczyna jest prosta do naprawienia.",
    sections: [
      {
        heading: "Dlaczego kamera jest offline?",
        content: "Status 'offline' w aplikacji oznacza, że telefon nie może się połączyć z kamerą/rejestratorem. Najczęstsze przyczyny:",
        list: [
          "Rejestrator (NVR) stracił połączenie z internetem",
          "Router został zrestartowany i zmienił adres IP rejestratora",
          "Brak zasilania kamery lub rejestratora",
          "Operator internetu ma awarię",
          "Usługa P2P (chmura) producenta jest niedostępna tymczasowo",
          "Podgląd działa tylko w sieci domowej, ale nie przez internet (zły port forwarding)",
        ],
      },
      {
        heading: "Co zrobić — krok po kroku",
        content: "Diagnostyka podglądu zdalnego:",
        list: [
          "Sprawdź czy masz internet w domu (na innym urządzeniu)",
          "Zrestartuj router — odłącz na 30 sek., podłącz z powrotem",
          "Zrestartuj rejestrator (NVR) — wyłącz, odczekaj 30 sek., włącz",
          "Sprawdź w aplikacji — czy status zmienił się na online?",
          "Jeśli masz pod ręką — sprawdź czy rejestrator ma internet (dioda sieciowa)",
          "Zaktualizuj aplikację na telefonie do najnowszej wersji",
        ],
      },
      {
        heading: "Kamera działa w domu, ale nie poza domem",
        content:
          "Jeśli podgląd kamer działa, gdy jesteś w domu (na Wi-Fi), ale nie działa przez internet mobilny (poza domem) — problem jest w konfiguracji dostępu zdalnego. Sprawdź: czy P2P/chmura jest włączona na rejestratorze, czy rejestrator jest podłączony do routera kablem LAN, czy router nie blokuje ruchu (firewall). To częsta konfiguracja, z którą pomagamy.",
      },
      {
        heading: "Kamera domowa offline — kamery Wi-Fi",
        content:
          "Kamery Wi-Fi (bez rejestratora, łączące się bezpośrednio z chmurą) tracą połączenie częściej. Przyczyny: słaby sygnał Wi-Fi, zmiana hasła do Wi-Fi, zmiana routera, restart routera (kamera nie zawsze automatycznie się łączy). Rozwiązanie: zrestartuj kamerę (odłącz zasilanie), sprawdź zasięg Wi-Fi w miejscu kamery.",
      },
    ],
    faq: [
      {
        question: "Monitoring nie działa na telefonie — co sprawdzić najpierw?",
        answer:
          "Najpierw sprawdź czy w domu jest internet. Potem zrestartuj router i rejestrator. W 70% przypadków to rozwiązuje problem. Jeśli nie — zadzwoń, pomagamy zdalnie przez telefon.",
      },
      {
        question: "Podgląd kamer nie działa przez internet — dlaczego?",
        answer:
          "Najczęściej: rejestrator nie ma połączenia z internetem lub P2P/chmura jest wyłączona. Sprawdź kabel LAN rejestratora i status P2P w ustawieniach sieciowych NVR.",
      },
      {
        question: "Kamera działa tylko w domu, a poza domem nie — co zrobić?",
        answer:
          "Problem z konfiguracją P2P. W rejestratorze musi być włączony dostęp chmurowy (Hik-Connect, DMSS itp.) i rejestrator musi mieć internet. Na terenie Krosna, Rzeszowa i Jasła pomagamy z konfiguracją — zdalnie lub na miejscu.",
      },
      {
        question: "Czemu kamera zrywa połączenie?",
        answer:
          "Niestabilne Wi-Fi (przy kamerach Wi-Fi), słaby sygnał, przepełniony adresat MAC w routerze, lub problem z zasilaniem kamery. Kamery na kablu LAN z PoE są znacznie stabilniejsze.",
      },
    ],
    relatedArticles: ["kamera-nie-dziala-co-sprawdzic", "podglad-kamer-na-telefonie"],
    relatedServices: ["monitoring-cctv"],
  },
  {
    slug: "kamera-nie-dziala-po-zmianie-wifi",
    category: "systemy-cctv",
    title: "Kamera nie działa po zmianie Wi-Fi — jak połączyć od nowa?",
    shortTitle: "Kamera po zmianie Wi-Fi",
    metaTitle: "Kamera nie działa po zmianie Wi-Fi / hasła — rozwiązanie | Czarkom",
    metaDescription:
      "Kamera nie działa po zmianie Wi-Fi, hasła lub routera? Jak ponownie połączyć kamerę z nową siecią? Poradnik krok po kroku. Serwis — Krosno, Rzeszów, Jasło.",
    icon: "🔄",
    intro:
      "Zmieniłeś hasło Wi-Fi, nazwę sieci (SSID) lub router — i kamera przestała działać? To bardzo częsty problem. Kamera Wi-Fi pamięta stare dane sieci i nie potrafi się automatycznie przłączyć do nowej. Musisz ją skonfigurować od nowa.",
    sections: [
      {
        heading: "Dlaczego kamera przestaje działać po zmianie Wi-Fi?",
        content:
          "Kamera Wi-Fi zapisuje w pamięci: nazwę sieci (SSID) i hasło. Gdy zmieniasz hasło Wi-Fi, nazwę sieci lub wymieniasz router na nowy — kamera próbuje się połączyć ze starymi danymi i nie może. Status: offline.",
      },
      {
        heading: "Jak ponownie połączyć kamerę z Wi-Fi",
        content: "Standardowa procedura dla większości kamer Wi-Fi:",
        list: [
          "Zresetuj kamerę do ustawień fabrycznych (przycisk RESET — przytrzymaj 5-10 sekund)",
          "Kamera przejdzie w tryb konfiguracji (zwykle migająca dioda)",
          "Otwórz aplikację (Hik-Connect, DMSS, Reolink itp.)",
          "Dodaj kamerę od nowa — wybierz nową sieć Wi-Fi i wpisz nowe hasło",
          "Poczekaj aż kamera się połączy — może potrwać 1-2 minuty",
          "Gotowe — kamera powinna być online",
        ],
      },
      {
        heading: "Jak zresetować kamerę Wi-Fi?",
        content: "Reset kamery do ustawień fabrycznych:",
        list: [
          "Znajdź przycisk RESET — zwykle mały otwór z tyłu lub na spodzie kamery",
          "Przy włączonej kamerze wciśnij i przytrzymaj spinaczem przez 5-10 sekund",
          "Kamera się zrestartuje — diody zaczną migać (tryb konfiguracji)",
          "Uwaga: reset kasuje WSZYSTKIE ustawienia — hasło, nazwę, nagrania w chmurze zostaną",
        ],
      },
      {
        heading: "Kamera nie łączy się z nowym routerem",
        content:
          "Nowy router = nowa sieć. Kamera tego nie wie. Procedura taka sama: reset kamery → dodaj od nowa w aplikacji → wybierz nową sieć. Wskazówka: jeśli na nowym routerze ustawisz taką samą nazwę sieci (SSID) i hasło jak na starym — wiele kamer połączy się automatycznie bez resetu.",
      },
      {
        heading: "Kamera nie wykrywa sieci Wi-Fi",
        content: "Jeśli kamera nie widzi Twojej sieci:",
        list: [
          "Sprawdź czy kamera obsługuje pasmo 5 GHz — wiele kamer działa tylko na 2.4 GHz",
          "Upewnij się, że 2.4 GHz jest włączone na routerze",
          "Nazwa sieci nie powinna mieć znaków specjalnych (polskich liter, emotikon)",
          "Przenieś kamerę bliżej routera na czas konfiguracji",
          "Zrestartuj router i kamerę",
        ],
      },
    ],
    faq: [
      {
        question: "Kamera nie działa po zmianie hasła Wi-Fi — co zrobić?",
        answer:
          "Zresetuj kamerę (przycisk RESET 5-10 sek.) i dodaj ją od nowa w aplikacji z nowym hasłem Wi-Fi. Alternatywnie: na routerze ustaw stare hasło z powrotem — kamera się połączy automatycznie.",
      },
      {
        question: "Kamera nie chce się połączyć z telefonem — dlaczego?",
        answer:
          "Telefon i kamera muszą być w tej samej sieci Wi-Fi podczas konfiguracji. Sprawdź czy telefon jest podłączony do Wi-Fi routera (nie danych komórkowych). Wyłącz dane mobilne na czas konfiguracji.",
      },
      {
        question: "Kamera nie działa po aktualizacji telefonu — co robić?",
        answer:
          "Zaktualizuj aplikację kamery do najnowszej wersji. Jeśli nie pomaga: usuń aplikację, zainstaluj ponownie, zaloguj się. Kamera nie wymaga resetu — problem jest po stronie aplikacji.",
      },
      {
        question: "Czy pomożecie mi skonfigurować kamerę w Krośnie?",
        answer:
          "Tak — na terenie Krosna, Rzeszowa, Jasła i okolic pomagamy z konfiguracją kamer Wi-Fi i systemów CCTV. Często rozwiązujemy problem przez telefon, nie trzeba wizyty.",
      },
    ],
    relatedArticles: ["kamera-offline-jak-przywrocic", "kamera-nie-dziala-co-sprawdzic"],
    relatedServices: ["monitoring-cctv"],
  },

  // Elektryka
  {
    slug: "wybija-roznicowka-przyczyny",
    category: "instalacje-elektryczne",
    title: "Dlaczego wybija różnicówka? Przyczyny i rozwiązania",
    shortTitle: "Wybija różnicówka",
    metaTitle: "Dlaczego wybija różnicówka (RCD)? Przyczyny i rozwiązania | Czarkom",
    metaDescription:
      "Różnicówka wybija bez powodu? Po deszczu? Po włączeniu pralki? Dlaczego wybija RCD i co zrobić. Elektryk Krosno, Rzeszów, Jasło.",
    icon: "⚡",
    intro:
      "Różnicówka (wyłącznik różnicowoprądowy RCD) chroni przed porażeniem prądem. Gdy wykryje upływ prądu — natychmiast odcina zasilanie. Jeśli różnicówka ciągle wybija, nie ignoruj tego — to sygnał realnego problemu w instalacji. Oto najczęstsze przyczyny.",
    sections: [
      {
        heading: "Czym się różni różnicówka od bezpiecznika?",
        content:
          "Bezpiecznik (wyłącznik nadprądowy) chroni przed przeciążeniem i zwarciem. Różnicówka (RCD) chroni przed porażeniem prądem — wykrywa, gdy prąd 'ucieka' obudową urządzenia lub przez uszkodzoną izolację. To dwa różne zabezpieczenia.",
      },
      {
        heading: "Dlaczego różnicówka wybija?",
        content: "Najczęstsze przyczyny zadziałania RCD:",
        list: [
          "Uszkodzone urządzenie — pralka, zmywarka, podgrzewacz, bojler z przebiciem na obudowę",
          "Wilgoć w gniazdku — po zalaniu, w piwnicy, na tarasie",
          "Uszkodzona izolacja przewodów — w starych instalacjach, po remontach",
          "Uszkodzony kabel urządzenia — przegryzione, przytrzaśnięte, przetarte",
          "Przepięcie — po burzy, przywróceniu zasilania",
          "Sama różnicówka jest uszkodzona — rzadko, ale się zdarza",
        ],
      },
      {
        heading: "Różnicówka wybija po deszczu",
        content:
          "Bardzo częsty problem. Woda dostaje się do gniazdek zewnętrznych, puszek na elewacji, oświetlenia ogrodowego lub kabli prowadzonych pod ziemią. Upływ przez wilgoć powoduje zadziałanie RCD. Rozwiązanie: sprawdź szczelność gniazdek zewnętrznych, wymień uszkodzone uszczelki, zabezpiecz puszki. Na Podkarpaciu po obfitych opadach mamy wiele takich zgłoszeń.",
      },
      {
        heading: "Różnicówka wybija bez powodu",
        content: "Nie ma 'bez powodu' — RCD zawsze reaguje na upływ. Jeśli nie widzisz oczywistej przyczyny:",
        list: [
          "Odłącz kolejno urządzenia i sprawdź, po którym przestaje wybijać",
          "Sprawdź wilgotne miejsca — piwnica, łazienka, gniazdka zewnętrzne",
          "Poluzowany przewód w gniazdku może powodować mikroupływy",
          "Długa instalacja z wieloma gniazdkami ma naturalny upływ — może być na granicy czułości RCD",
          "Wezwij elektryka z miernikiem upływu — zmierzy dokładnie skąd ucieka prąd",
        ],
      },
      {
        heading: "Co zrobić kiedy różnicówka wybija?",
        content: "Krok po kroku:",
        list: [
          "Odłącz wszystkie urządzenia z obwodu chronionego różnicówką",
          "Załącz różnicówkę — jeśli trzyma, podłączaj urządzenia po jednym",
          "Jeśli wybija po podłączeniu konkretnego urządzenia — to ono jest winne",
          "Jeśli wybija bez urządzeń — problem w instalacji, wezwij elektryka",
          "Nie blokuj różnicówki w pozycji ON — to zabezpieczenie przed porażeniem!",
        ],
      },
    ],
    faq: [
      {
        question: "Dlaczego różnicówka wybija po włączeniu pralki?",
        answer:
          "Najprawdopodobniej pralka ma uszkodzoną izolację grzałki lub silnika — prąd 'ucieka' przez obudowę. Pralka wymaga serwisu. Nie używaj jej do czasu naprawy — to mógłby być porażenie.",
      },
      {
        question: "Czy mogę wyłączyć różnicówkę, żeby nie wybijała?",
        answer:
          "Absolutnie NIE! Różnicówka chroni przed śmiertelnym porażeniem prądem. Jej wyłączenie to ryzyko życia. Znajdź przyczynę upływu i napraw ją.",
      },
      {
        question: "Różnicówka wybija wieczorem — dlaczego?",
        answer:
          "Wieczorem włączasz więcej urządzeń: pralka, zmywarka, piekarnik, bojler. Jedno z nich może mieć upływ. Odłączaj urządzenia po jednym, żeby znaleźć winowajcę.",
      },
      {
        question: "Elektryk naprawi problem z różnicówką w Krośnie?",
        answer:
          "Tak — na terenie Krosna, Rzeszowa, Jasła i okolic wykonujemy diagnostykę upływów prądu miernikiem izolacji. Znajdujemy przyczynę i naprawiamy. Zadzwoń — przyjedziemy szybko.",
      },
    ],
    relatedArticles: ["wybija-bezpiecznik-przyczyny", "bezpieczenstwo-pracy-z-pradem"],
    relatedServices: ["elektryk", "przeglady-elektryczne"],
  },
  {
    slug: "swiatlo-dziala-ale-gniazdka-nie",
    category: "instalacje-elektryczne",
    title: "Światło działa, ale gniazdka nie — skąd taki problem?",
    shortTitle: "Światło działa, gniazdka nie",
    metaTitle: "Światło działa ale gniazdka nie — przyczyny i rozwiązania | Czarkom",
    metaDescription:
      "Światło działa, ale gniazdka nie? Brak prądu w jednym pokoju? Połowa mieszkania bez prądu? Przyczyny i co zrobić. Elektryk Krosno, Rzeszów, Jasło.",
    icon: "💡",
    intro:
      "Światło się świeci, ale gniazdka nie działają? Albo prąd jest w jednym pokoju, a w drugim nie? To typowy objaw wyłączonego bezpiecznika na jednym obwodzie. Oto dlaczego tak się dzieje i co zrobić.",
    sections: [
      {
        heading: "Dlaczego światło działa, a gniazdka nie?",
        content:
          "W prawidłowo zrobionej instalacji oświetlenie i gniazdka mają osobne obwody z osobnymi bezpiecznikami. Gdy wypadnie bezpiecznik od gniazdek — światło dalej działa (bo ma swój bezpiecznik). To normalne i pożądane — awaria jednego obwodu nie wyłącza całego domu.",
      },
      {
        heading: "Co sprawdzić?",
        content: "Krok po kroku:",
        list: [
          "Otwórz rozdzielnię (skrzynkę z bezpiecznikami)",
          "Sprawdź, czy któryś wyłącznik jest w pozycji WYŁĄCZONY (dźwignia w dół)",
          "Załącz go — jeśli trzyma, problem rozwiązany",
          "Jeśli natychmiast wyłącza się — problem w obwodzie, wezwij elektryka",
          "Sprawdź też różnicówkę — jeśli jest wyłączona, zresetuj ją (wyłącz/włącz)",
        ],
      },
      {
        heading: "Brak prądu w jednym pokoju",
        content:
          "Jeśli prąd nie działa w jednym pokoju, a w reszcie domu jest OK — to zwykle jeden wyłączony bezpiecznik. Ale uwaga: w starszych domach na Podkarpaciu zdarza się, że cały obwód gniazdkowy (np. cała jedna strona domu) wisi na jednym bezpieczniku. Wtedy awaria jednego gniazdka wyłącza kilka pokoi.",
      },
      {
        heading: "Połowa mieszkania bez prądu",
        content:
          "Jeśli nie działa połowa mieszkania (np. cała prawa strona), to w starych instalacjach zwykle oznacza jedną z dwóch rzeczy: wypadł bezpiecznik obsługujący tę stronę, lub (rzadko) poluzował się przewód w rozdzielni. Sprawdź bezpieczniki. Jeśli wszystkie są włączone, a prądu dalej nie ma — wezwij elektryka.",
      },
      {
        heading: "Nie działa siła w garażu",
        content:
          "Gniazdka siłowe (400V, trójfazowe) w garażu mają osobne zabezpieczenia — często na osobnym RCD. Sprawdź w rozdzielni: czy bezpiecznik trójfazowy jest włączony, czy różnicówka dla tego obwodu nie zadziałała. Jeśli bezpiecznik siłowy ciągle wypada — może być problem z urządzeniem (np. kompresor, spawarka) lub instalacją.",
      },
    ],
    faq: [
      {
        question: "Brak prądu w gniazdku — co zrobić?",
        answer:
          "Sprawdź bezpiecznik w rozdzielni. Sprawdź różnicówkę (RCD). Jeśli wszystko wygląda OK — przetestuj gniazdko lampką lub ładowarką. Jeśli nie działa — problem może być w przewodzie w ścianie. Wezwij elektryka.",
      },
      {
        question: "Wybiło korki — co to znaczy?",
        answer:
          "Zadziałał bezpiecznik (wyłącznik nadprądowy) lub różnicówka (RCD). Przyczyny: przeciążenie, zwarcie, uszkodzone urządzenie, wilgoć. Odłącz urządzenia, załącz bezpiecznik. Jeśli wypada ponownie — problem jest poważniejszy.",
      },
      {
        question: "Elektryk przyjedzie gdy brak prądu w mieszkaniu?",
        answer:
          "Tak — na terenie Krosna, Rzeszowa i Jasła przyjeżdżamy szybko, często tego samego dnia. Awarie elektryczne traktujemy priorytetowo. Zadzwoń do Czarkom.",
      },
      {
        question: "Ile kosztuje elektryk do awarii?",
        answer:
          "Dojazd + diagnostyka: od 150 zł. Naprawa prostych awarii (wymiana bezpiecznika, naprawa gniazdka): 150-400 zł. Większe prace wyceniamy po diagnostyce.",
      },
    ],
    relatedArticles: ["gniazdko-nie-dziala", "wybija-bezpiecznik-przyczyny"],
    relatedServices: ["elektryk"],
  },
];

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): KnowledgeArticle[] {
  return knowledgeArticles.filter((a) => a.category === category);
}

export function getCategoryBySlug(slug: string): KnowledgeCategory | undefined {
  return knowledgeCategories.find((c) => c.slug === slug);
}
