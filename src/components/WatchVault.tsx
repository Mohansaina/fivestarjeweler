"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ShieldCheck, CheckCircle, Search, ArrowUpRight, Send, Instagram } from "lucide-react";

interface WatchVaultProps {
  onInquireWatch: (model: string) => void;
}

export default function WatchVault({ onInquireWatch }: WatchVaultProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "diamond" | "classic" | "sport">("all");
  const [customModelQuery, setCustomModelQuery] = useState("");
  const [sourcingSubmitted, setSourcingSubmitted] = useState(false);

  const curatedPieces = [
    {
      id: "daydate40",
      brand: "ROLEX",
      model: "Oyster Perpetual Day-Date 40",
      ref: "Ref. 228238 / Olive Dial",
      category: "classic",
      badge: "PRESIDENTIAL",
      description: "18K yellow gold with olive green sunburst dial, Roman numerals, and fluted bezel. Complete box and papers.",
      image: "/images/watches.jpg",
    },
    {
      id: "daytona",
      brand: "ROLEX",
      model: "Cosmograph Daytona Chronograph",
      ref: "Ref. 116500LN / Custom Pavé",
      category: "diamond",
      badge: "CUSTOM GEM-SET",
      description: "Precision chronograph fitted with custom VS+ baguette diamond bezel and black lacquer dial.",
      image: "/images/watches.jpg",
    },
    {
      id: "royaloak",
      brand: "AUDEMARS PIGUET",
      model: "Royal Oak Selfwinding 41mm",
      ref: "Ref. 15500ST / Bleue Tapisserie",
      category: "sport",
      badge: "HOROLOGY VAULT",
      description: "Stainless steel case, integrated bracelet, and Grande Tapisserie midnight blue dial with exhibition caseback.",
      image: "/images/watches.jpg",
    },
    {
      id: "santos",
      brand: "CARTIER",
      model: "Santos de Cartier Large Model",
      ref: "Ref. WSSA0018 / Iced Pavé",
      category: "diamond",
      badge: "BESPOKE DIAMOND CASE",
      description: "Iconic square silhouette meticulously paved with over 18 carats of micro-set natural diamonds.",
      image: "/images/watches.jpg",
    },
  ];

  const filteredPieces =
    activeFilter === "all"
      ? curatedPieces
      : curatedPieces.filter((p) => p.category === activeFilter);

  const handleSourcingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customModelQuery.trim()) return;
    setSourcingSubmitted(true);
  };

  return (
    <section id="watches-vault" className="py-24 sm:py-32 bg-[#08080c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-[10px] tracking-[0.3em] uppercase text-zinc-300 mb-3">
            <Clock className="w-3.5 h-3.5 text-zinc-300" />
            <span>SWISS HOROLOGY &amp; CUSTOM SETTING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-tight mb-4">
            The Timepiece Vault
          </h2>
          <div className="w-16 h-[1px] bg-white/40 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto">
            From the world&rsquo;s most sought-after Swiss manufactures to custom diamond-set bezels.
            Leveraging our direct 47th St trade connections to source, authenticate, and customize
            collector-grade horology.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "ALL TIMEPIECES" },
              { id: "diamond", label: "DIAMOND & GEM-SET" },
              { id: "classic", label: "PRESIDENTIAL & GOLD" },
              { id: "sport", label: "SPORT & STEEL" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs tracking-[0.2em] uppercase transition-all ${
                  activeFilter === tab.id
                    ? "bg-white text-black font-medium"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="bg-[#0b0b10] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="relative aspect-square w-full bg-black overflow-hidden">
                <Image
                  src={piece.image}
                  alt={piece.model}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 backdrop-blur-md text-[9px] tracking-widest uppercase text-zinc-300 border border-white/10">
                  {piece.badge}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-semibold block">
                    {piece.brand}
                  </span>
                  <h3 className="text-base font-serif text-white tracking-wide mt-1">
                    {piece.model}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{piece.ref}</p>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2.5">
                    {piece.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase text-zinc-400">
                    By Appointment
                  </span>
                  <button
                    onClick={() => onInquireWatch(`${piece.brand} ${piece.model}`)}
                    className="text-xs tracking-wider uppercase text-white hover:text-zinc-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-medium"
                  >
                    <span>INQUIRE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Sourcing Request Banner */}
        <div className="bg-[#0c0c12] border border-white/20 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-semibold block">
                NYC DIAMOND DISTRICT PRIVATE SOURCING
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-tight">
                Seeking a Specific Horological Reference?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Whether you desire a rare vintage reference, factory baguette bezel, or an allocation piece,
                our 47th St trade network locates, authenticates, and inspects timepieces worldwide.
              </p>
            </div>

            <div className="lg:col-span-5">
              {sourcingSubmitted ? (
                <div className="p-4 bg-white/10 border border-white/30 text-center space-y-2">
                  <CheckCircle className="w-6 h-6 text-white mx-auto" />
                  <p className="text-xs uppercase tracking-wider text-white font-medium">
                    Sourcing Request Received
                  </p>
                  <p className="text-[11px] text-zinc-300 font-light">
                    Our NYC horology desk will search our trade vault for &ldquo;{customModelQuery}&rdquo; and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSourcingSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={customModelQuery}
                      onChange={(e) => setCustomModelQuery(e.target.value)}
                      placeholder="e.g. Rolex Day-Date 40 Platinum / AP Royal Oak 15500"
                      className="flex-1 bg-black/70 border border-white/20 text-xs text-white p-3.5 focus:border-white focus:outline-none placeholder:text-zinc-600"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3.5 text-xs tracking-wider uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 flex items-center gap-1.5"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-light">
                    Direct confidential inquiry • Authenticated with box, papers &amp; chronometric test
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

