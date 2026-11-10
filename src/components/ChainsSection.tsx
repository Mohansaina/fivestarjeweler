"use client";

import React from "react";
import Image from "next/image";

interface ChainsSectionProps {
  onOpenAppointment: (category?: string) => void;
}

export default function ChainsSection({ onOpenAppointment }: ChainsSectionProps) {
  return (
    <section id="chains" className="bg-[#07070b] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black group">
            <Image
              src="/images/chains.jpg"
              alt="FIVESTAR JEWELER - Custom Diamond Chains & Pendants"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
          </div>

          {/* Typography */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light">
              47TH STREET ATELIER
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-normal font-normal">
              Chains &amp; Bespoke Pendants
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Solid gold Miami Cuban links (6mm to 22mm+), classic tennis chains, and custom-sculpted
              diamond emblem pendants. Each link is hand-set with microscope-calibrated VS/VVS
              diamonds in solid 14K and 18K yellow, white, and rose gold.
            </p>

            <p className="text-[11px] text-zinc-400 font-light">
              Crafted to custom millimeter specifications with dual-safety solid gold box clasps.
            </p>

            <div className="pt-3">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenAppointment("Custom Diamond Chains & Pendants")}
                className="px-7 py-3 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-zinc-200 transition-colors font-medium border border-white"
              >
                REQUEST A COMMISSION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

