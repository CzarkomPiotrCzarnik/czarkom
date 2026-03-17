export interface LocationData {
  slug: string;
  city: string;
  serviceSlug: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  introText: string;
  areas: string[];
  localFaq: { question: string; answer: string }[];
  relatedServices: string[];
  relatedLocations: string[];
}

interface CityConfig {
  city: string;
  slug: string;
  areas: string[];
}

const cities: CityConfig[] = [
  {
    city: "Rzeszów",
    slug: "rzeszow",
    areas: [
      "Rzeszów",
      "Boguchwała",
      "Tyczyn",
      "Głogów Małopolski",
      "Trzebownisko",
      "Świlcza",
      "Krasne",
    ],
  },
  {
    city: "Krosno",
    slug: "krosno",
    areas: [
      "Krosno",
      "Jedlicze",
      "Miejsce Piastowe",
      "Korczyna",
      "Iwonicz-Zdrój",
      "Rymanów",
    ],
  },
  {
    city: "Jasło",
    slug: "jaslo",
    areas: [
      "Jasło",
      "Brzostek",
      "Kołaczyce",
      "Tarnowiec",
      "Nowy Żmigród",
      "Osiek Jasielski",
    ],
  },
];

interface LocalServiceConfig {
  serviceSlug: string;
  serviceName: string;
  slugPrefix: string;
  generateContent: (city: string) => {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    heroText: string;
    introText: string;
    localFaq: { question: string; answer: string }[];
  };
}

const localServiceConfigs: LocalServiceConfig[] = [
  {
    serviceSlug: "elektryk",
    serviceName: "Elektryk",
    slugPrefix: "elektryk",
    generateContent: (city) => ({
      metaTitle: `Elektryk ${city} — instalacje elektryczne NN i SN | Czarkom`,
      metaDescription: `Elektryk ${city} — montaż, modernizacja i naprawa instalacji elektrycznych. Instalacje NN i SN. Szybki dojazd. Zadzwoń do Czarkom!`,
      h1: `Elektryk ${city} — instalacje elektryczne`,
      heroText: `Szukasz sprawdzonego elektryka w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach? Czarkom to doświadczony zespół, który wykona instalacje elektryczne solidnie, terminowo i zgodnie z normami.`,
      introText: `Działamy na terenie ${city === "Rzeszów" ? "Rzeszowa" : city === "Krosno" ? "Krosna" : "Jasła"} i okolic. Wykonujemy instalacje elektryczne w domach, mieszkaniach, firmach i obiektach komercyjnych. Montaż, modernizacja, naprawy — kompleksowo i z dokumentacją.`,
      localFaq: [
        {
          question: `Czy dojeżdżacie do ${city === "Rzeszów" ? "Rzeszowa" : city === "Krosno" ? "Krosna" : "Jasła"} i okolic?`,
          answer: `Tak, obsługujemy ${city} i okoliczne miejscowości. Szybki dojazd i elastyczne terminy.`,
        },
        {
          question: `Ile kosztuje usługa elektryka w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Koszt zależy od zakresu prac. Skontaktuj się z nami — przygotujemy indywidualną wycenę. Ceny są konkurencyjne i transparentne.`,
        },
      ],
    }),
  },
  {
    serviceSlug: "przeglady-elektryczne",
    serviceName: "Przeglądy elektryczne",
    slugPrefix: "przeglady-elektryczne",
    generateContent: (city) => ({
      metaTitle: `Przeglądy elektryczne ${city} — protokoły i dokumentacja | Czarkom`,
      metaDescription: `Przeglądy elektryczne ${city} — pełna dokumentacja, protokoły do ubezpieczenia i odbioru. Domy, mieszkania, firmy. Zadzwoń do Czarkom!`,
      h1: `Przeglądy elektryczne ${city} — dokumentacja i bezpieczeństwo`,
      heroText: `Wykonujemy przeglądy instalacji elektrycznych w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach. Pełna dokumentacja, protokoły zgodne z przepisami, szybki termin realizacji.`,
      introText: `Przegląd instalacji elektrycznej w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} to nie formalność — to realna ochrona Twojego domu, mieszkania lub firmy. Wykonujemy przeglądy z pełną dokumentacją i jasną komunikacją wyników. Obsługujemy ${city} i najbliższe okolice.`,
      localFaq: [
        {
          question: `Kiedy trzeba wykonać przegląd instalacji elektrycznej w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Przeglądy instalacji elektrycznych powinny być wykonywane co 5 lat. Wymagane są też przy zmianie właściciela, wynajmie i w sytuacjach ubezpieczeniowych.`,
        },
        {
          question: `Czy wykonujecie przeglądy w domach i mieszkaniach w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Tak — wykonujemy przeglądy w domach jednorodzinnych, mieszkaniach, firmach i budynkach komercyjnych na terenie ${city === "Rzeszów" ? "Rzeszowa" : city === "Krosno" ? "Krosna" : "Jasła"} i okolic.`,
        },
        {
          question: `Ile kosztuje przegląd instalacji elektrycznej w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Koszt zależy od wielkości obiektu. Skontaktuj się — podamy cenę po ustaleniu zakresu.`,
        },
      ],
    }),
  },
  {
    serviceSlug: "pomiary-elektryczne",
    serviceName: "Pomiary elektryczne",
    slugPrefix: "pomiary-elektryczne",
    generateContent: (city) => ({
      metaTitle: `Pomiary elektryczne ${city} — protokoły pomiarowe | Czarkom`,
      metaDescription: `Pomiary elektryczne ${city} — rezystancja izolacji, ochrona przeciwporażeniowa, protokoły. Szybka realizacja. Zadzwoń do Czarkom!`,
      h1: `Pomiary elektryczne ${city} — precyzyjna dokumentacja`,
      heroText: `Wykonujemy pomiary ochronne instalacji elektrycznych w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach. Profesjonalny sprzęt, czytelne protokoły, szybka realizacja.`,
      introText: `Pomiary elektryczne w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} — rezystancja izolacji, skuteczność ochrony przeciwporażeniowej, ciągłość przewodów ochronnych. Wykonujemy pełen zakres pomiarów z dokumentacją.`,
      localFaq: [
        {
          question: `Jakie pomiary elektryczne wykonujecie w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Wykonujemy pełen zakres pomiarów ochronnych: rezystancja izolacji, skuteczność ochrony, ciągłość przewodów, rezystancja uziemienia.`,
        },
        {
          question: `Czy pomiary i protokół potrzebne są do ubezpieczenia domu w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Tak — aktualny protokół pomiarowy może być wymagany przez ubezpieczyciela, szczególnie w razie szkody.`,
        },
      ],
    }),
  },
  {
    serviceSlug: "protokoly-elektryczne",
    serviceName: "Protokoły elektryczne",
    slugPrefix: "protokoly-elektryczne",
    generateContent: (city) => ({
      metaTitle: `Protokoły elektryczne ${city} — dokumentacja pomiarowa | Czarkom`,
      metaDescription: `Protokoły z pomiarów elektrycznych ${city} — do odbioru, ubezpieczenia, wynajmu, sprzedaży. Czytelna dokumentacja. Czarkom.`,
      h1: `Protokoły elektryczne ${city} — dokumentacja na czas`,
      heroText: `Wystawiamy protokoły z pomiarów elektrycznych w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach. Do odbioru, ubezpieczenia, wynajmu — czytelnie i szybko.`,
      introText: `Potrzebujesz protokołu z pomiarów elektrycznych w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}? Do odbioru budynku, ubezpieczyciela, wynajmu albo sprzedaży? Wykonujemy pomiary i wystawiamy protokoły zgodne z normami.`,
      localFaq: [
        {
          question: `Jak szybko otrzymam protokół w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Protokół jest zazwyczaj gotowy w dniu pomiarów lub w ciągu 1-2 dni roboczych.`,
        },
        {
          question: `Czy protokół jest potrzebny przy sprzedaży domu w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Tak — aktualny protokół z pomiarów to ważny dokument przy sprzedaży nieruchomości.`,
        },
      ],
    }),
  },
  {
    serviceSlug: "monitoring-cctv",
    serviceName: "Monitoring CCTV",
    slugPrefix: "monitoring",
    generateContent: (city) => ({
      metaTitle: `Monitoring ${city} — montaż kamer CCTV | Czarkom`,
      metaDescription: `Monitoring CCTV ${city} — montaż kamer, rejestratory, podgląd z telefonu. Domy, firmy, posesje. Zadzwoń do Czarkom!`,
      h1: `Monitoring ${city} — kamery CCTV dla domu i firmy`,
      heroText: `Montujemy systemy monitoringu CCTV w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach. Kamery, rejestratory, podgląd z telefonu — profesjonalnie i sprawnie.`,
      introText: `Monitoring CCTV w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} to skuteczna ochrona domu, firmy i posesji. Montujemy i konfigurujemy systemy kamer z podglądem zdalnym. Dojeżdżamy na teren ${city === "Rzeszów" ? "Rzeszowa" : city === "Krosno" ? "Krosna" : "Jasła"} i okolic.`,
      localFaq: [
        {
          question: `Ile kosztuje montaż monitoringu w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Koszt zależy od liczby kamer i specyfiki obiektu. Skontaktuj się — przygotujemy wycenę.`,
        },
        {
          question: `Czy montujecie kamery do domów w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Tak — montujemy systemy CCTV dla domów, posesji, firm i obiektów komercyjnych w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach.`,
        },
      ],
    }),
  },
  {
    serviceSlug: "sieci-i-internet",
    serviceName: "Sieci i internet",
    slugPrefix: "sieci-i-internet",
    generateContent: (city) => ({
      metaTitle: `Sieci i internet ${city} — Wi-Fi, LAN, diagnostyka | Czarkom`,
      metaDescription: `Słaby internet w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}? Diagnostyka Wi-Fi, konfiguracja sieci LAN/WLAN, mesh, access pointy. Czarkom — zadzwoń!`,
      h1: `Sieci i internet ${city} — diagnostyka, Wi-Fi, LAN`,
      heroText: `Problemy z internetem lub Wi-Fi w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}? Diagnozujemy, projektujemy i konfigurujemy sieci domowe i firmowe. Dobieramy sprzęt i rozwiązania dopasowane do Twoich potrzeb.`,
      introText: `Działamy na terenie ${city === "Rzeszów" ? "Rzeszowa" : city === "Krosno" ? "Krosna" : "Jasła"} i okolic. Pomagamy z problemami z internetem — od diagnostyki przez konfigurację routera, po budowę sieci LAN i dobór mesh/access pointów. Pracujemy z domami, mieszkaniami i małymi firmami.`,
      localFaq: [
        {
          question: `Czy naprawiacie problemy z Wi-Fi w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Tak — diagnozujemy przyczyny słabego zasięgu Wi-Fi i dobieramy rozwiązanie: zmiana konfiguracji, mesh, access point lub okablowanie. Dojeżdżamy na teren ${city === "Rzeszów" ? "Rzeszowa" : city === "Krosno" ? "Krosna" : "Jasła"} i okolic.`,
        },
        {
          question: `Ile kosztuje poprawa sieci w domu w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Koszt zależy od zakresu — od konfiguracji routera po rozbudowę sieci z okablowaniem. Skontaktuj się — przygotujemy wycenę.`,
        },
      ],
    }),
  },
  {
    serviceSlug: "automatyka",
    serviceName: "Automatyka",
    slugPrefix: "automatyka",
    generateContent: (city) => ({
      metaTitle: `Automatyka ${city} — inteligentne sterowanie budynkiem | Czarkom`,
      metaDescription: `Automatyka budynkowa ${city} — sterowanie oświetleniem, ogrzewaniem, integracja systemów. Wygoda i oszczędność. Czarkom.`,
      h1: `Automatyka ${city} — inteligentne rozwiązania`,
      heroText: `Wdrażamy systemy automatyki budynkowej w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} i okolicach. Sterowanie, integracja, oszczędność energii.`,
      introText: `Automatyka budynkowa w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"} — sterowanie oświetleniem, ogrzewaniem, roletami z aplikacji. Oszczędzasz energię i zyskujesz wygodę. Obsługujemy ${city} i okolice.`,
      localFaq: [
        {
          question: `Czy instalujecie automatykę w istniejących budynkach w ${city === "Rzeszów" ? "Rzeszowie" : city === "Krosno" ? "Krośnie" : "Jaśle"}?`,
          answer: `Tak — wiele rozwiązań automatyki można wdrożyć w istniejących budynkach bez dużych przeróbek.`,
        },
      ],
    }),
  },
];

function generateLocations(): LocationData[] {
  const locations: LocationData[] = [];

  for (const cityConfig of cities) {
    for (const serviceConfig of localServiceConfigs) {
      const content = serviceConfig.generateContent(cityConfig.city);
      const slug = `${serviceConfig.slugPrefix}-${cityConfig.slug}`;

      const otherCities = cities
        .filter((c) => c.slug !== cityConfig.slug)
        .map((c) => `${serviceConfig.slugPrefix}-${c.slug}`);

      locations.push({
        slug,
        city: cityConfig.city,
        serviceSlug: serviceConfig.serviceSlug,
        serviceName: serviceConfig.serviceName,
        ...content,
        areas: cityConfig.areas,
        relatedServices: [
          serviceConfig.serviceSlug,
          ...(serviceConfig.serviceSlug === "przeglady-elektryczne"
            ? ["pomiary-elektryczne", "protokoly-elektryczne"]
            : serviceConfig.serviceSlug === "pomiary-elektryczne"
              ? ["przeglady-elektryczne", "protokoly-elektryczne"]
              : serviceConfig.serviceSlug === "protokoly-elektryczne"
                ? ["przeglady-elektryczne", "pomiary-elektryczne"]
                : []),
        ],
        relatedLocations: otherCities,
      });
    }
  }

  return locations;
}

export const locations: LocationData[] = generateLocations();

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCity(city: string): LocationData[] {
  return locations.filter((l) => l.city === city);
}

export function getLocationsByService(serviceSlug: string): LocationData[] {
  return locations.filter((l) => l.serviceSlug === serviceSlug);
}
