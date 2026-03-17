"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { siteConfig } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error ?? "Błąd wysyłania — spróbuj ponownie.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Błąd połączenia — sprawdź internet i spróbuj ponownie.");
    }
  }

  return (
    <section className="section-padding bg-dark-900/50">
      <Container>
        <SectionHeading
          title="Skontaktuj się z nami"
          subtitle="Zadzwoń, napisz lub wypełnij formularz — odpowiadamy szybko."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
              <PhoneButton className="text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Godziny pracy</h3>
              <p className="text-dark-400">{siteConfig.hours}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Obszar działania</h3>
              <p className="text-dark-400">{siteConfig.areas.join(", ")}</p>
            </div>
          </div>

          {/* Contact form */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
              <svg className="w-16 h-16 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-white">Wiadomość wysłana!</h3>
              <p className="text-dark-400">Odpiszemy najszybciej jak to możliwe.</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-1">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                  placeholder="+48 000 000 000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-1">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none disabled:opacity-50"
                  placeholder="Opisz krótko, czego potrzebujesz..."
                />
              </div>
              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}
              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? "Wysyłanie…" : "Wyślij wiadomość"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
