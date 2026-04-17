import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/schema";
import { siteConfig } from "@/data/site";

const geist = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Czarkom — elektryk, przeglądy elektryczne, monitoring, automatyka | Podkarpacie",
    template: "%s | Czarkom",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "Usługi elektryczne i monitoring",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Czarkom — elektryk, przeglądy, monitoring, automatyka",
    description: siteConfig.description,
    images: [
      {
        url: "/czarkom-wallpaper-4k.png",
        width: 1920,
        height: 1080,
        alt: "Czarkom — elektryk, monitoring CCTV i pomiary elektryczne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Czarkom — elektryk, przeglądy, monitoring, automatyka",
    description: siteConfig.description,
    images: ["/czarkom-wallpaper-4k.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geist.variable} font-sans antialiased`}>
        <JsonLd data={webSiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
