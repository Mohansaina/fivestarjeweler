"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function WaterfallFooter() {
  const [selectedCountry, setSelectedCountry] = useState("United States | USD $");

  const countries = [
    "United States | USD $",
    "United Kingdom | GBP £",
    "Canada | CAD $",
    "European Union | EUR €",
    "United Arab Emirates | AED",
    "Australia | AUD $",
  ];

  return (
    <footer className="bg-[#151c24] text-white pt-20 pb-12 border-t border-white/10 text-xs font-light select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top: Centered Quick Links & Socials (Exact Match to Reference Screenshot) */}
        <div className="text-center max-w-2xl mx-auto space-y-6 pb-20">
          <h3 className="text-base sm:text-lg font-medium text-white tracking-wide">
            Quick links
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-300">
            <a href="#inventory" className="hover:text-white transition-colors">
              Atelier Inventory
            </a>
            <a href="#chains" className="hover:text-white transition-colors">
              Cuban Chains
            </a>
            <a href="#rings" className="hover:text-white transition-colors">
              Diamond Rings
            </a>
            <a href="#watches" className="hover:text-white transition-colors">
              Swiss Timepieces
            </a>
            <Link href="#about" className="hover:text-white transition-colors">
              Terms of service
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              Refund policy
            </Link>
          </div>

          {/* Social Icon: Instagram Only (Links to @fivestarjeweler) */}
          <div className="flex items-center justify-center pt-2">
            <a
              href="https://www.instagram.com/fivestarjeweler/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @fivestarjeweler"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-zinc-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all text-xs tracking-wider"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@fivestarjeweler</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Country/Region Picker on Left, Payment Icons on Right (Exact Match) */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left: Country / Region Dropdown */}
          <div className="space-y-2">
            <span className="block text-xs text-zinc-400">Country/region</span>
            <div className="relative inline-block w-64">
              <select
                suppressHydrationWarning
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full appearance-none bg-transparent border border-white/25 hover:border-white/50 text-white text-xs px-4 py-2.5 pr-10 focus:outline-none focus:border-white transition-colors cursor-pointer rounded-sm"
              >
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-[#151c24] text-white">
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Right: Payment Icons (Exact Match to Screenshot) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* AMEX */}
            <div className="w-10 h-6 bg-[#006fcf] rounded flex items-center justify-center text-[7px] font-black text-white tracking-tighter shadow-sm">
              AMEX
            </div>

            {/* Apple Pay */}
            <div className="w-10 h-6 bg-black border border-white/20 rounded flex items-center justify-center text-[9px] font-semibold text-white tracking-tight shadow-sm">
              <span className="text-[10px]"></span>Pay
            </div>

            {/* Diners Club */}
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm p-1">
              <div className="w-4 h-4 rounded-full border-2 border-[#004a97] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#004a97] rounded-full" />
              </div>
            </div>

            {/* Discover */}
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm">
              <span className="text-[7px] font-extrabold text-[#ff6000] tracking-tighter">DISCOVER</span>
            </div>

            {/* Google Pay */}
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm text-[8px] font-bold text-zinc-700">
              <span className="text-[#4285f4] font-black mr-0.5">G</span>Pay
            </div>

            {/* Maestro */}
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm">
              <div className="flex -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#0099df] opacity-80" />
              </div>
            </div>

            {/* Mastercard */}
            <div className="w-10 h-6 bg-[#1a1f2c] rounded flex items-center justify-center shadow-sm">
              <div className="flex -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-85" />
              </div>
            </div>

            {/* PayPal */}
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm text-[8px] font-extrabold text-[#003087]">
              <i>PayPal</i>
            </div>

            {/* Bitcoin / Crypto */}
            <div className="w-10 h-6 bg-[#f7931a] rounded flex items-center justify-center text-[9px] font-black text-white shadow-sm">
              ₿
            </div>

            {/* Shop Pay */}
            <div className="w-10 h-6 bg-[#5a31f4] rounded flex items-center justify-center text-[8px] font-bold text-white lowercase shadow-sm">
              shop
            </div>

            {/* UnionPay */}
            <div className="w-10 h-6 bg-[#006699] rounded flex items-center justify-center text-[6px] font-black text-white tracking-tighter shadow-sm">
              UnionPay
            </div>

            {/* Visa */}
            <div className="w-10 h-6 bg-[#1434cb] rounded flex items-center justify-center text-[8px] font-black text-white tracking-wider italic shadow-sm">
              VISA
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright & Policies */}
        <div className="mt-8 pt-6 border-t border-white/5 text-[11px] text-zinc-400 font-light flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>&copy; 2026, FIVESTAR JEWELER. Powered by NYC Diamond District Atelier</span>
          <span>&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">Refund policy</a>
          <span>&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">Privacy policy</a>
          <span>&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">Terms of service</a>
          <span>&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">Shipping policy</a>
          <span>&middot;</span>
          <a href="#about" className="hover:text-white transition-colors">Contact information</a>
        </div>
      </div>
    </footer>
  );
}
