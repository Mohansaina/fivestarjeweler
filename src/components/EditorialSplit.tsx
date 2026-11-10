"use client";

import React from "react";
import Image from "next/image";

interface EditorialSplitProps {
  onOpenAppointment: (category?: string) => void;
}

export default function EditorialSplit({ onOpenAppointment }: EditorialSplitProps) {
  return (
    <section id="rings" className="bg-white text-black py-16 sm:py-24 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* 2-Column Split matching Harry Winston Screenshot 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Rings / The Season of Yes */}
          <div className="space-y-6 group">
            {/* Image Container with Exact High-Jewelry Box Framing */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <Image
                src="/images/rings.jpg"
                alt="FIVESTAR JEWELER - Diamond Engagement Rings"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Typography */}
            <div className="text-center pt-2 space-y-3 max-w-md mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0c0c12] tracking-normal font-normal">
                The Season of Yes
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Embrace every milestone with custom solitaire engagement rings, emerald-cut diamonds,
                and seamless bridal eternity bands handcrafted on 47th Street.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => onOpenAppointment("Diamond Rings & Solitaires")}
                  className="text-xs tracking-[0.25em] uppercase text-black hover:text-zinc-600 font-medium inline-flex items-center gap-1 group-hover:underline underline-offset-4 transition-all"
                >
                  <span>DISCOVER</span>
                  <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Watches / Time for Brilliance */}
          <div id="watches" className="space-y-6 group">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <Image
                src="/images/watches.jpg"
                alt="FIVESTAR JEWELER - Curated Luxury Timepieces"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Typography */}
            <div className="text-center pt-2 space-y-3 max-w-md mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0c0c12] tracking-normal font-normal">
                Time for Brilliance
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                Celebrate every precious moment with curated Swiss luxury horology and custom
                diamond-set bezels that shine as brightly as the Manhattan skyline.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => onOpenAppointment("Curated Luxury Timepieces")}
                  className="text-xs tracking-[0.25em] uppercase text-black hover:text-zinc-600 font-medium inline-flex items-center gap-1 group-hover:underline underline-offset-4 transition-all"
                >
                  <span>DISCOVER</span>
                  <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

