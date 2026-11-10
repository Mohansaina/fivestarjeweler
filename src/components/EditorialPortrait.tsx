"use client";

import React from "react";
import Image from "next/image";

interface EditorialPortraitProps {
  onOpenAppointment: (category?: string) => void;
}

export default function EditorialPortrait({ onOpenAppointment }: EditorialPortraitProps) {
  return (
    <section id="earrings" className="bg-white text-black pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Full-Width Portrait matching Harry Winston Screenshot 3 */}
        <div className="space-y-8 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/images/earrings.jpg"
              alt="FIVESTAR JEWELER - Statement Diamond Earrings"
              fill
              sizes="100vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Typography */}
          <div className="text-center pt-2 space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0c0c12] tracking-normal font-normal">
              Statement Earrings
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              Cascading diamond drop earrings and cluster pavé huggies engineered for fluid movement
              and maximum light return. Meticulously set by hand in solid 14K and 18K gold.
            </p>
            <div className="pt-2">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenAppointment("Statement Diamond Earrings")}
                className="text-xs tracking-[0.25em] uppercase text-black hover:text-zinc-600 font-medium inline-flex items-center gap-1 group-hover:underline underline-offset-4 transition-all"
              >
                <span>DISCOVER</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

