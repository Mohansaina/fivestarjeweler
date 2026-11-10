"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06060c] border-t border-white/10 text-zinc-400 text-xs font-light">
      {/* Top Brand Name Bar (Exact Match to Harry Winston Screenshot 5) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-8 border-b border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/25 bg-black flex items-center justify-center p-0.5 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="FIVESTAR JEWELER"
                fill
                sizes="44px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs tracking-[0.25em] uppercase font-serif text-white">
                FIVESTAR JEWELER
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-light">
                NYC DIAMOND DISTRICT • 47TH ST
              </span>
            </div>
          </div>

          <div className="text-[11px] tracking-wider text-zinc-500 font-light">
            Private Consultations &bull; By Appointment Only
          </div>
        </div>
      </div>

      {/* 4-Column Navigation Grid matching Screenshot 5 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-serif text-white font-normal">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#salon" className="hover:text-white transition-colors">
                  Schedule an Appointment
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-white transition-colors">
                  Request a Commission
                </a>
              </li>
              <li>
                <a href="#watches" className="hover:text-white transition-colors">
                  Timepiece Sourcing
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-white transition-colors">
                  Appraisals &amp; Authentications
                </a>
              </li>
            </ul>
          </div>

          {/* The Atelier Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-serif text-white font-normal">
              THE ATELIER
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#chains" className="hover:text-white transition-colors">
                  Chains &amp; Pendants
                </a>
              </li>
              <li>
                <a href="#rings" className="hover:text-white transition-colors">
                  Diamond Rings
                </a>
              </li>
              <li>
                <a href="#earrings" className="hover:text-white transition-colors">
                  Statement Earrings
                </a>
              </li>
              <li>
                <a href="#watches" className="hover:text-white transition-colors">
                  Curated Timepieces
                </a>
              </li>
            </ul>
          </div>

          {/* Client Care Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-serif text-white font-normal">
              CLIENT CARE
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#salon" className="hover:text-white transition-colors">
                  GIA &amp; IGI Standards
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-white transition-colors">
                  Lifetime Maintenance
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-white transition-colors">
                  Insured White-Glove Transit
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-white transition-colors">
                  Discretion &amp; Security
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-serif text-white font-normal">
              FOLLOW US
            </h4>
            <p className="text-xs text-zinc-400 font-light">
              Connect with our NYC atelier:
            </p>
            <div className="pt-1">
              <a
                href="https://www.instagram.com/fivestarjeweler/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/15 text-zinc-300 hover:text-white hover:border-white transition-colors text-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>@fivestarjeweler</span>
              </a>
            </div>
            <p className="text-[10px] text-zinc-500 font-light">
              11 Posts &bull; 340 Followers &bull; Direct Inquiries
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top (Exact Match to Screenshot 5) */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          <div className="text-[11px] text-zinc-500 font-light">
            FIVESTAR JEWELER, Inc. 2026 &bull; NYC Diamond District &bull; 47th St
          </div>

          <button
            type="button"
            suppressHydrationWarning
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
          >
            <ArrowUp className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
