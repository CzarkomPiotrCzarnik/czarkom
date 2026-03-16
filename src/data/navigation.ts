export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Strona główna", href: "/" },
  {
    label: "Elektryk",
    href: "/elektryk",
    children: [
      { label: "Instalacje elektryczne", href: "/instalacje-elektryczne" },
      { label: "Elektryk Rzeszów", href: "/elektryk-rzeszow" },
      { label: "Elektryk Krosno", href: "/elektryk-krosno" },
      { label: "Elektryk Jasło", href: "/elektryk-jaslo" },
    ],
  },
  {
    label: "Przeglądy i pomiary",
    href: "/przeglady-elektryczne",
    children: [
      { label: "Przeglądy elektryczne", href: "/przeglady-elektryczne" },
      { label: "Pomiary elektryczne", href: "/pomiary-elektryczne" },
      { label: "Protokoły elektryczne", href: "/protokoly-elektryczne" },
    ],
  },
  {
    label: "Monitoring CCTV",
    href: "/monitoring-cctv",
    children: [
      { label: "Monitoring Rzeszów", href: "/monitoring-rzeszow" },
      { label: "Monitoring Krosno", href: "/monitoring-krosno" },
      { label: "Monitoring Jasło", href: "/monitoring-jaslo" },
    ],
  },
  {
    label: "Automatyka",
    href: "/automatyka",
    children: [
      { label: "Smart Home", href: "/smart-home" },
      { label: "BMS", href: "/bms" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerServices: NavItem[] = [
  { label: "Elektryk", href: "/elektryk" },
  { label: "Instalacje elektryczne", href: "/instalacje-elektryczne" },
  { label: "Przeglądy elektryczne", href: "/przeglady-elektryczne" },
  { label: "Pomiary elektryczne", href: "/pomiary-elektryczne" },
  { label: "Protokoły elektryczne", href: "/protokoly-elektryczne" },
  { label: "Monitoring CCTV", href: "/monitoring-cctv" },
  { label: "Automatyka", href: "/automatyka" },
  { label: "Smart Home", href: "/smart-home" },
  { label: "BMS", href: "/bms" },
];

export const footerLocations: NavItem[] = [
  { label: "Elektryk Rzeszów", href: "/elektryk-rzeszow" },
  { label: "Elektryk Krosno", href: "/elektryk-krosno" },
  { label: "Elektryk Jasło", href: "/elektryk-jaslo" },
  { label: "Przeglądy Rzeszów", href: "/przeglady-elektryczne-rzeszow" },
  { label: "Przeglądy Krosno", href: "/przeglady-elektryczne-krosno" },
  { label: "Przeglądy Jasło", href: "/przeglady-elektryczne-jaslo" },
  { label: "Monitoring Rzeszów", href: "/monitoring-rzeszow" },
  { label: "Monitoring Krosno", href: "/monitoring-krosno" },
  { label: "Monitoring Jasło", href: "/monitoring-jaslo" },
];

export const footerLinks: NavItem[] = [
  { label: "O firmie", href: "/o-firmie" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
];
