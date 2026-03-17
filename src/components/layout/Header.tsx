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
            <Button href="/kontakt" size="sm">
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
        <div className="lg:hidden bg-dark-900 border-t border-dark-800">
          <Container className="py-4 space-y-1">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-dark-200 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-dark-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block text-center py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                Zadzwoń: {siteConfig.phone}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
