"use client";

import React from "react";
import Image from "next/image";

interface TopRatedBannerProps {
  onOpenAppointment: (category?: string) => void;
}

export default function TopRatedBanner({ onOpenAppointment }: TopRatedBannerProps) {
  const certifications = [
    { name: "GIA CERTIFIED", desc: "Natural Diamonds" },
    { name: "IGI LABORATORY", desc: "Diamond Dossier" },
    { name: "SOLID 18K GOLD", desc: "Cast in NYC" },
    { name: "SWISS HOROLOGY", desc: "Trade Vault Sourcing" },
    { name: "47TH ST ATELIER", desc: "Master Bench Guild" },
    { name: "CONFLICT-FREE", desc: "Kimberley Process" },
  ];

  return (
    <section className="bg-white text-black py-16 sm:py-20 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Header Matching the User's Screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0b0b12] uppercase tracking-[0.08em] font-normal leading-tight">
            TOP RATED CUSTOM JEWELER IN THE NYC DIAMOND DISTRICT • 47TH ST
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto pt-1">
            Handcrafting bespoke diamond Cuban chains, certified engagement solitaires, statement earrings,
            and sourcing curated luxury Swiss timepieces.
          </p>
        </div>

        {/* Minimalist Horizontal Brand & Certification Bar Matching the Screenshot */}
        <div className="border-y border-zinc-200 py-6 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {certifications.map((item) => (
              <div key={item.name} className="space-y-0.5">
                <span className="block text-xs sm:text-sm tracking-[0.25em] font-serif uppercase text-[#0c0c12] font-medium">
                  {item.name}
                </span>
                <span className="block text-[10px] tracking-wider uppercase text-zinc-500 font-light">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Fine Jewelry Macro Showcase Matching Lower Half of Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Handcrafted Rings & Bridal */}
          <div className="group cursor-pointer space-y-4" onClick={() => onOpenAppointment("High Jewelry Diamond Rings")}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <Image
                src="/images/rings.jpg"
                alt="FIVESTAR JEWELER - Diamond Engagement Rings"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="space-y-1 pt-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-serif text-[#0c0c12] font-normal">
                Bespoke Diamond Rings &amp; Solitaires
              </h3>
              <p className="text-xs text-zinc-600 font-light">
                GIA-certified emerald cut, radiant, and round diamonds mounted in solid platinum and 18K gold.
              </p>
            </div>
          </div>

          {/* Card 2: Handcrafted Miami Cuban Chains & Pendants */}
          <div className="group cursor-pointer space-y-4" onClick={() => onOpenAppointment("Custom Diamond Chains")}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <Image
                src="/images/chains.jpg"
                alt="FIVESTAR JEWELER - Handcrafted Diamond Chains"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="space-y-1 pt-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-serif text-[#0c0c12] font-normal">
                Solid Gold Miami Cuban Chains
              </h3>
              <p className="text-xs text-zinc-600 font-light">
                Microscope-set VS/VVS diamonds in solid 14K and 18K gold, calibrated from 6mm to 22mm+.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

