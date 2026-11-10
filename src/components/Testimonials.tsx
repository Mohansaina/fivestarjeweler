"use client";

import React from "react";
import { Star, ShieldCheck, Diamond, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: "1",
      client: "Marcus V.",
      location: "Manhattan, NY",
      piece: "14mm Miami Cuban Chain (18K Solid Gold / VVS Diamonds)",
      quote:
        "The weight and finish on this Cuban link is unmatched. The pavé setting is perfectly level, the box clasp clicks with authority, and the diamonds throw insane fire even in low light. Their motto 'The Difference Is In The Quality' is 100% true.",
      rating: 5,
    },
    {
      id: "2",
      client: "Alexander & Sophia T.",
      location: "Tribeca, NYC",
      piece: "4.80ct GIA Emerald Cut Solitaire in Platinum",
      quote:
        "We visited multiple jewelers on 47th Street, but FIVESTAR JEWELER stood out immediately. They brought out loose GIA stones for us to inspect side-by-side under the microscope. The custom CAD rendering and final platinum mount exceeded all expectations.",
      rating: 5,
    },
    {
      id: "3",
      client: "David R.",
      location: "Miami & NYC",
      piece: "Rolex Day-Date 40 Olive Dial + Custom Tennis Chain",
      quote:
        "Private VIP appointment at the Manhattan showroom was seamless. Sourced the exact reference I wanted within 48 hours with full box, papers, and an independent appraisal. Best horology and custom diamond desk in the city.",
      rating: 5,
    },
    {
      id: "4",
      client: "Elena K.",
      location: "SoHo, NY",
      piece: "Bespoke Cascading Baguette & Round Diamond Earrings",
      quote:
        "Commissioned custom diamond drop earrings for a red carpet gala. The balance of the earrings is so comfortable to wear, and the stone alignment is laser-straight. A true master atelier.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#08080c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-[10px] tracking-[0.3em] uppercase text-zinc-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            <span>CLIENT REPUTATION • 47TH ST NYC</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-tight mb-4">
            Words From Our Collectors
          </h2>
          <div className="w-16 h-[1px] bg-white/40 mx-auto mb-6" />

          {/* 5-Star Rating Badge */}
          <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium">
            5.0 PERFECT RATING ACROSS BESPOKE COMMISSIONS
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-[#0b0b10] border border-white/10 hover:border-white/25 p-8 flex flex-col justify-between space-y-6 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                    {r.client}
                  </h4>
                  <span className="text-[11px] text-zinc-500 font-light">{r.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-wider uppercase text-zinc-400 block font-mono">
                    {r.piece}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

