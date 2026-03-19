"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

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
          <span>{siteConfig.hours}</span>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary-400 transition-colors"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-primary-400 font-semibold hover:text-primary-300 transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </Container>
      </div>

      {/* Mobile top bar - phone */}
      <div className="md:hidden bg-primary-600 py-2">
        <Container>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center justify-center gap-2 text-white text-sm font-semibold"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Zadzwoń: {siteConfig.phone}
          </a>
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
                  className="px-2.5 py-2 text-[13px] font-medium text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-dark-800/50 whitespace-nowrap"
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
                  <div className="absolute top-full left-0 mt-1 w-56 bg-dark-900 border border-dark-700 rounded-xl shadow-xl py-2 z-50">
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
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/kontakt/" size="sm">
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
