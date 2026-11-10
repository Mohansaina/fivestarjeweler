"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenAppointment: () => void;
}

export default function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] lg:min-h-[98vh] flex items-end justify-start overflow-hidden bg-black pb-20 sm:pb-28">
      {/* Background Editorial Visual matching Harry Winston campaign (Screenshot 1) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="FIVESTAR JEWELER - The Art of the Gift"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.76]"
        />
        {/* Soft, Natural Chiaroscuro Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
      </div>

      {/* Hero Typography & CTA (Exact Match to Harry Winston Screenshot 1) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="max-w-xl text-left space-y-4">
          {/* Classic Display Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-normal font-normal leading-[1.12]">
            The Difference Is In The Quality
          </h1>

          {/* Understated Subtitle */}
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-md pt-1">
            Custom jewels and timepieces that mean more than words could ever say. Handcrafted in
            the NYC Diamond District on 47th Street.
          </p>

          {/* Minimalist Harry Winston Style Button */}
          <div className="pt-4">
            <button
              type="button"
              suppressHydrationWarning
              onClick={onOpenAppointment}
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-zinc-200 transition-colors font-medium border border-white"
            >
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
