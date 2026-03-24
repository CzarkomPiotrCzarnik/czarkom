export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Elektryk",
    href: "/elektryk/",
    children: [
      { label: "Instalacje elektryczne", href: "/instalacje-elektryczne/" },
      { label: "Elektryk Rzeszów", href: "/elektryk-rzeszow/" },
      { label: "Elektryk Krosno", href: "/elektryk-krosno/" },
      { label: "Elektryk Jasło", href: "/elektryk-jaslo/" },
    ],
  },
  {
    label: "Przeglądy i pomiary",
    href: "/przeglady-elektryczne/",
    children: [
      { label: "Przeglądy elektryczne", href: "/przeglady-elektryczne/" },
      { label: "Pomiary elektryczne", href: "/pomiary-elektryczne/" },
      { label: "Protokoły elektryczne", href: "/protokoly-elektryczne/" },
      { label: "Przeglądy Rzeszów", href: "/przeglady-elektryczne-rzeszow/" },
      { label: "Przeglądy Krosno", href: "/przeglady-elektryczne-krosno/" },
      { label: "Przeglądy Jasło", href: "/przeglady-elektryczne-jaslo/" },
      { label: "Pomiary Rzeszów", href: "/pomiary-elektryczne-rzeszow/" },
      { label: "Pomiary Krosno", href: "/pomiary-elektryczne-krosno/" },
      { label: "Pomiary Jasło", href: "/pomiary-elektryczne-jaslo/" },
      { label: "Protokoły Rzeszów", href: "/protokoly-elektryczne-rzeszow/" },
      { label: "Protokoły Krosno", href: "/protokoly-elektryczne-krosno/" },
      { label: "Protokoły Jasło", href: "/protokoly-elektryczne-jaslo/" },
    ],
  },
  {
    label: "Monitoring CCTV",
    href: "/monitoring-cctv/",
    children: [
      { label: "Partner Hikvision", href: "/partner-hikvision/" },
      { label: "Monitoring Rzeszów", href: "/monitoring-rzeszow/" },
      { label: "Monitoring Krosno", href: "/monitoring-krosno/" },
      { label: "Monitoring Jasło", href: "/monitoring-jaslo/" },
    ],
  },
  {
    label: "Automatyka",
    href: "/automatyka/",
    children: [
      { label: "Smart Home", href: "/smart-home/" },
      { label: "BMS", href: "/bms/" },
      { label: "Automatyka Rzeszów", href: "/automatyka-rzeszow/" },
      { label: "Automatyka Krosno", href: "/automatyka-krosno/" },
      { label: "Automatyka Jasło", href: "/automatyka-jaslo/" },
    ],
  },
  {
    label: "Sieci i internet",
    href: "/sieci-i-internet/",
    children: [
      { label: "Sieci Rzeszów", href: "/sieci-i-internet-rzeszow/" },
      { label: "Sieci Krosno", href: "/sieci-i-internet-krosno/" },
      { label: "Sieci Jasło", href: "/sieci-i-internet-jaslo/" },
    ],
  },
  { label: "Baza wiedzy", href: "/baza-wiedzy/" },
  { label: "Aktualności", href: "/aktualnosci/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const footerServices: NavItem[] = [
  { label: "Elektryk", href: "/elektryk/" },
  { label: "Instalacje elektryczne", href: "/instalacje-elektryczne/" },
  { label: "Przeglądy elektryczne", href: "/przeglady-elektryczne/" },
  { label: "Pomiary elektryczne", href: "/pomiary-elektryczne/" },
  { label: "Protokoły elektryczne", href: "/protokoly-elektryczne/" },
  { label: "Monitoring CCTV", href: "/monitoring-cctv/" },
  { label: "Partner Hikvision", href: "/partner-hikvision/" },
  { label: "Automatyka", href: "/automatyka/" },
  { label: "Smart Home", href: "/smart-home/" },
  { label: "BMS", href: "/bms/" },
  { label: "Sieci i internet", href: "/sieci-i-internet/" },
];

export const footerLocations: NavItem[] = [
  { label: "Elektryk Rzeszów", href: "/elektryk-rzeszow/" },
  { label: "Elektryk Krosno", href: "/elektryk-krosno/" },
  { label: "Elektryk Jasło", href: "/elektryk-jaslo/" },
  { label: "Przeglądy Rzeszów", href: "/przeglady-elektryczne-rzeszow/" },
  { label: "Przeglądy Krosno", href: "/przeglady-elektryczne-krosno/" },
  { label: "Przeglądy Jasło", href: "/przeglady-elektryczne-jaslo/" },
  { label: "Pomiary Rzeszów", href: "/pomiary-elektryczne-rzeszow/" },
  { label: "Pomiary Krosno", href: "/pomiary-elektryczne-krosno/" },
  { label: "Pomiary Jasło", href: "/pomiary-elektryczne-jaslo/" },
  { label: "Protokoły Rzeszów", href: "/protokoly-elektryczne-rzeszow/" },
  { label: "Protokoły Krosno", href: "/protokoly-elektryczne-krosno/" },
  { label: "Protokoły Jasło", href: "/protokoly-elektryczne-jaslo/" },
  { label: "Monitoring Rzeszów", href: "/monitoring-rzeszow/" },
  { label: "Monitoring Krosno", href: "/monitoring-krosno/" },
  { label: "Monitoring Jasło", href: "/monitoring-jaslo/" },
  { label: "Automatyka Rzeszów", href: "/automatyka-rzeszow/" },
  { label: "Automatyka Krosno", href: "/automatyka-krosno/" },
  { label: "Automatyka Jasło", href: "/automatyka-jaslo/" },
  { label: "Sieci Rzeszów", href: "/sieci-i-internet-rzeszow/" },
  { label: "Sieci Krosno", href: "/sieci-i-internet-krosno/" },
  { label: "Sieci Jasło", href: "/sieci-i-internet-jaslo/" },
];

export const footerLinks: NavItem[] = [
  { label: "O firmie", href: "/o-firmie/" },
  { label: "Baza wiedzy", href: "/baza-wiedzy/" },
  { label: "Aktualności", href: "/aktualnosci/" },
  { label: "Kontakt", href: "/kontakt/" },
  { label: "FAQ", href: "/faq/" },
];
