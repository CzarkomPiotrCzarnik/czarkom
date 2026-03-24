"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { ShareIconButton } from "@/components/ui/ShareIconButton";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (href: string) => {
    setMobileDropdown(mobileDropdown === href ? null : href);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-800">
      {/* Top bar */}
      <div className="bg-dark-900 py-2 hidden md:block">
        <Container className="flex justify-between items-center text-sm text-dark-400">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
            <span className="text-dark-700">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary-400 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/partner-hikvision/"
              className="flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-dark-700 rounded-md hover:border-primary-800/50 transition-colors"
            >
              <Image
                src="/images/partners/hikvision-logo.png"
                alt="Hikvision"
                width={84}
                height={17}
                className="h-4 w-auto brightness-125"
                unoptimized
              />
              <span className="text-[11px] font-semibold text-dark-200 leading-none">
                Oficjalny partner
              </span>
            </Link>
            <span className="text-dark-700">|</span>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Oceń nas
            </a>
            <ShareIconButton />
          </div>
        </Container>
      </div>

      {/* Mobile top bar - phone + review */}
      <div className="md:hidden bg-primary-600 py-2">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-white text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/80 text-xs"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Oceń nas
            </a>
            <ShareIconButton variant="mobile" />
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/ck-symbol.svg"
              alt={`${siteConfig.name} logo`}
              width={40}
              height={40}
              className="w-10 h-10"
              unoptimized
            />
            <Image
              src="/images/logo/ck-text.svg"
              alt={siteConfig.name}
              width={120}
              height={30}
              className="h-7 w-auto hidden sm:block"
              unoptimized
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-0">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.href)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-1.5 xl:px-2.5 py-2 text-xs xl:text-[13px] font-medium text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-dark-800/50 whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="w-3 h-3 ml-1 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-dark-900 border border-dark-700 rounded-xl shadow-xl py-2 z-50">
                    {/* Hikvision partner badge inside Monitoring CCTV dropdown */}
                    {item.href === "/monitoring-cctv/" && (
                      <Link
                        href="/partner-hikvision/"
                        className="flex items-center gap-3 mx-2 mb-2 px-3 py-2.5 bg-gradient-to-r from-dark-800 to-dark-800/60 border border-dark-700 rounded-lg hover:border-primary-800/60 transition-colors"
                      >
                        <Image
                          src="/images/partners/hikvision-partner-badge.png"
                          alt="Hikvision — oficjalny partner"
                          width={90}
                          height={35}
                          className="h-7 w-auto"
                          unoptimized
                        />
                        <span className="text-[11px] leading-tight text-dark-300">
                          <span className="block font-semibold text-white">Oficjalny partner</span>
                          Hikvision
                        </span>
                      </Link>
                    )}
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button href="/kontakt/" size="sm" className="whitespace-nowrap">
              Zapytaj o wycenę
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark-400 hover:text-white"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-950 border-t border-dark-800 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <Container className="py-4">
            <nav className="space-y-1">
              {mainNav.map((item) => (
                <div key={item.href} className="border-b border-dark-800/50 last:border-0">
                  {item.children ? (
                    <>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex-1 px-4 py-3.5 text-base font-medium text-dark-100 hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.href)}
                          className="px-4 py-3.5 text-dark-400 hover:text-white transition-colors"
                          aria-label={`Rozwiń ${item.label}`}
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${mobileDropdown === item.href ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>
                      </div>
                      {mobileDropdown === item.href && (
                        <div className="pb-2 pl-4 space-y-0.5">
                          {/* Hikvision partner badge inside mobile Monitoring CCTV dropdown */}
                          {item.href === "/monitoring-cctv/" && (
                            <Link
                              href="/partner-hikvision/"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 mx-2 mb-2 px-3 py-2.5 bg-dark-800/60 border border-dark-700 rounded-lg"
                            >
                              <Image
                                src="/images/partners/hikvision-partner-badge.png"
                                alt="Hikvision — oficjalny partner"
                                width={80}
                                height={31}
                                className="h-6 w-auto"
                                unoptimized
                              />
                              <span className="text-[11px] leading-tight text-dark-300">
                                <span className="block font-semibold text-white">Oficjalny partner</span>
                                Hikvision
                              </span>
                            </Link>
                          )}
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 text-sm text-dark-400 hover:text-primary-400 hover:bg-dark-800/50 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3.5 text-base font-medium text-dark-100 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 space-y-3 px-4 pb-4">
              <Link
                href="/kontakt/"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors text-base"
              >
                Zapytaj o wycenę
              </Link>
              <p className="text-center text-xs text-dark-500">
                {siteConfig.hours}
              </p>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
