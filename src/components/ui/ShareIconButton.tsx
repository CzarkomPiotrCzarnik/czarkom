"use client";

import { useState, useCallback } from "react";
import { siteConfig } from "@/data/site";

interface ShareIconButtonProps {
  variant?: "default" | "mobile";
}

export function ShareIconButton({ variant = "default" }: ShareIconButtonProps) {
  const [copied, setCopied] = useState(false);
  const url = siteConfig.googleReviewUrl;

  const handleShare = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch {
      prompt("Skopiuj link do opinii:", url);
    }
  }, [url]);

  const isMobile = variant === "mobile";

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        type="button"
        title="Kopiuj link do opinii"
        className={
          isMobile
            ? "flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            : "flex items-center justify-center w-6 h-6 rounded hover:text-white transition-colors text-dark-400 hover:bg-dark-800"
        }
      >
        {copied ? (
          <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        )}
      </button>

      {/* Dymek */}
      {copied && (
        <div className={`absolute z-50 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium shadow-lg pointer-events-none
          bg-dark-800 border border-dark-700 text-white
          ${isMobile
            ? "bottom-full mb-2 right-0"
            : "top-full mt-2 right-0"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>Skopiowano link!</span>
          </div>
          <div className="text-dark-400 mt-0.5">Przekaż dalej i poproś o opinię</div>
        </div>
      )}
    </div>
  );
}
