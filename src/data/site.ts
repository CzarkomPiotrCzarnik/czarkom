export const siteConfig = {
  name: "Czarkom",
  fullName: "Czarkom — Piotr Czarnik",
  description:
    "Elektryk, przeglądy elektryczne, monitoring CCTV i automatyka — Rzeszów, Krosno, Jasło. Instalacje NN i SN, pomiary, protokoły, smart home, BMS.",
  url: "https://czarkom.pl",
  phone: "+48 000 000 000", // TODO: uzupełnić
  phoneRaw: "+48000000000",
  email: "kontakt@czarkom.pl", // TODO: uzupełnić
  address: {
    street: "", // TODO: uzupełnić
    city: "Krosno",
    zip: "", // TODO: uzupełnić
    region: "podkarpackie",
    country: "PL",
  },
  hours: "Pon–Pt: 7:00–17:00, Sob: po uzgodnieniu",
  areas: ["Rzeszów", "Krosno", "Jasło", "Jedlicze", "okolice"],
  social: {
    facebook: "", // TODO: uzupełnić
    google: "", // TODO: uzupełnić
  },
  nip: "", // TODO: uzupełnić
  regon: "", // TODO: uzupełnić
} as const;

export type SiteConfig = typeof siteConfig;
