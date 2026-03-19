"use client";

import { useState, useCallback } from "react";
import { siteConfig } from "@/data/site";

export function ShareReviewButton() {
  const [copied, setCopied] = useState(false);
  const url = siteConfig.googleReviewUrl;

  const handleShare = useCallback(async () => {
    // Web Share API — natywny dialog na mobile/desktop (jeśli wspierany)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Oceń ${siteConfig.name} w Google`,
          text: `Jeśli byłeś zadowolony z usług ${siteConfig.name}, zostaw opinię w Google:`,
          url,
        });
        return;
      } catch {
        // użytkownik anulował lub błąd — fallback na kopiowanie
      }
    }

    // Fallback — Clipboard API
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ostateczny fallback
      prompt("Skopiuj link do opinii:", url);
    }
  }, [url]);

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-700 text-dark-400 hover:text-white hover:border-dark-500 transition-all text-sm group"
      type="button"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span className="text-green-400">Skopiowano link!</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          <span>Udostępnij link do opinii</span>
        </>
      )}
    </button>
  );
}
