export const siteConfig = {
  name: "Czarkom",
  fullName: "Czarkom — Piotr Czarnik",
  description:
    "Elektryk, przeglądy elektryczne, monitoring CCTV, automatyka i sieci — Rzeszów, Krosno, Jasło, Sanok, Dębica, Mielec, Przemyśl, Łańcut i całe Podkarpacie. Instalacje NN/SN, pomiary, protokoły, smart home, BMS, Wi-Fi, LAN.",
  url: "https://czarkom.pl",
  updatedAt: "2026-03-25",
  phone: "+48 781 291 640", // TODO: uzupełnić
  phoneRaw: "+48781291640",
  email: "firma@czarkom.pl", // TODO: uzupełnić
  address: {
    street: "", // TODO: uzupełnić
    city: "Krosno",
    zip: "38-400", // TODO: uzupełnić
    region: "podkarpackie",
    country: "PL",
  },
  hours: "Codziennie 7:00–17:00 · Również weekendy",
  areas: [
    "Rzeszów",
    "Łańcut",
    "Krosno",
    "Sanok",
    "Jasło",
    "Dębica",
    "Mielec",
    "Przemyśl",
    "Jedlicze",
    "Podkarpacie",
  ],
  keywords: [
    "elektryk",
    "instalacje elektryczne",
    "przeglądy elektryczne",
    "pomiary elektryczne",
    "protokoły elektryczne",
    "monitoring CCTV",
    "kamery CCTV",
    "automatyka budynkowa",
    "smart home",
    "BMS",
    "Rzeszów",
    "Łańcut",
    "Krosno",
    "Sanok",
    "Jasło",
    "Dębica",
    "Mielec",
    "Przemyśl",
    "Podkarpacie",
  ],
  social: {
    facebook: "", // TODO: uzupełnić
    google: "", // TODO: uzupełnić
  },
  googleReviewUrl: "https://g.page/r/CQg-gchG2sS2EAE/review",
  nip: "", // TODO: uzupełnić
  regon: "", // TODO: uzupełnić
} as const;

export type SiteConfig = typeof siteConfig;
