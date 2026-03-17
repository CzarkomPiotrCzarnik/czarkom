export const siteConfig = {
  name: "Czarkom",
  fullName: "Czarkom — Piotr Czarnik",
  description:
    "Elektryk, przeglądy elektryczne, monitoring CCTV, automatyka i sieci — Rzeszów, Krosno, Jasło. Instalacje NN/SN, pomiary, protokoły, smart home, BMS, Wi-Fi, LAN.",
  url: "https://czarkom.pl",
  phone: "+48 693 302 788", // TODO: uzupełnić
  phoneRaw: "+48693302788",
  email: "firma@czarkom.pl", // TODO: uzupełnić
  address: {
    street: "", // TODO: uzupełnić
    city: "Krosno",
    zip: "", // TODO: uzupełnić
    region: "podkarpackie",
    country: "PL",
  },
  hours: "Codziennie 7:00–17:00 · Również weekendy",
  areas: ["Rzeszów", "Krosno", "Jasło", "Jedlicze", "okolice"],
  social: {
    facebook: "", // TODO: uzupełnić
    google: "", // TODO: uzupełnić
  },
  nip: "", // TODO: uzupełnić
  regon: "", // TODO: uzupełnić
} as const;

export type SiteConfig = typeof siteConfig;
