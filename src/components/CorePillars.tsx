"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CorePillarsProps {
  onSelectCategory: (category: string) => void;
}

export default function CorePillars({ onSelectCategory }: CorePillarsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "chains" | "rings" | "earrings" | "watches">("all");

  const pillars = [
    {
      id: "chains",
      title: "Chains & Pendants",
      subtitle: "MIAMI CUBAN LINKS • TENNIS CHAINS • CUSTOM PENDANTS",
      image: "/images/chains.jpg",
      description:
        "Handcrafted in solid 14K and 18K yellow, white, and rose gold. Each link is hand-set on 47th Street with hand-selected VS and VVS diamonds for seamless brilliance and substantial weight.",
      details: "Available from 6mm to 22mm+ • Custom lengths • Solid gold clasp with dual safety lock",
    },
    {
      id: "rings",
      title: "Diamond Rings",
      subtitle: "ENGAGEMENT • SOLITAIRES • ETERNITY BANDS",
      image: "/images/rings.jpg",
      description:
        "GIA-certified natural and premium lab-grown diamonds selected for exceptional cut, symmetry, and fire. Custom mounted in solid platinum and 18K gold with bespoke hidden halos and micro-pavé bands.",
      details: "Emerald cut, radiant, oval, and round brilliant • Certified GIA & IGI documentation",
    },
    {
      id: "earrings",
      title: "Diamond Earrings",
      subtitle: "CHANDELIER DROPS • BAGUETTE STUDS • HOOPS",
      image: "/images/earrings.jpg",
      description:
        "Cascading diamond drop earrings and pavé huggies engineered for fluid movement and maximum light dispersion. Balanced for comfortable, secure wear.",
      details: "Solid 14K and 18K gold • Friction and threaded safety backings",
    },
    {
      id: "watches",
      title: "Curated Timepieces",
      subtitle: "SWISS HOROLOGY • CUSTOM GEM-SETTING",
      image: "/images/watches.jpg",
      description:
        "Private acquisition and custom diamond-setting for the world's most sought-after Swiss luxury timepieces. Every reference is authenticated and accompanied by complete provenance.",
      details: "Bespoke diamond bezels • Fluted and factory references • Full box and papers",
    },
  ];

  const filteredPillars =
    activeTab === "all" ? pillars : pillars.filter((p) => p.id === activeTab);

  return (
    <section id="pillars" className="py-20 sm:py-28 bg-[#070709] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-400 font-light mb-3">
            OUR SPECIALTIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-normal font-normal">
            Bespoke Fine Jewelry
          </h2>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Every piece is cast, assembled, and diamond-set in our NYC 47th Street atelier.
          </p>

          {/* Clean Understated Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs tracking-[0.2em] uppercase">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab("all")}
              className={`pb-1 transition-colors ${
                activeTab === "all"
                  ? "text-white border-b border-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              ALL
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab("chains")}
              className={`pb-1 transition-colors ${
                activeTab === "chains"
                  ? "text-white border-b border-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              CHAINS &amp; PENDANTS
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab("rings")}
              className={`pb-1 transition-colors ${
                activeTab === "rings"
                  ? "text-white border-b border-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              RINGS
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab("earrings")}
              className={`pb-1 transition-colors ${
                activeTab === "earrings"
                  ? "text-white border-b border-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EARRINGS
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab("watches")}
              className={`pb-1 transition-colors ${
                activeTab === "watches"
                  ? "text-white border-b border-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              WATCHES
            </button>
          </div>
        </div>

        {/* Editorial Collection Grid (Clean, Luxurious, Spacious) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="group flex flex-col justify-between bg-black/40 border border-white/10 hover:border-white/25 transition-all duration-300"
            >
              {/* Image Container with Natural Proportions */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
              </div>

              {/* Text Information */}
              <div className="p-8 sm:p-10 space-y-4">
                <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-light">
                  {pillar.subtitle}
                </p>

                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {pillar.description}
                </p>

                <p className="text-[11px] text-zinc-500 font-light pt-1">
                  {pillar.details}
                </p>

                {/* Quiet Luxury Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onSelectCategory(pillar.title)}
                    className="text-xs tracking-[0.2em] uppercase text-white hover:text-zinc-300 border-b border-white pb-0.5 transition-colors"
                  >
                    INQUIRE ABOUT THIS COLLECTION
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
