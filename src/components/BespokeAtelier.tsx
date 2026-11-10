"use client";

import React from "react";
import Image from "next/image";

interface BespokeAtelierProps {
  onStartCustom: () => void;
}

export default function BespokeAtelier({ onStartCustom }: BespokeAtelierProps) {
  const steps = [
    {
      num: "01",
      title: "Design Consultation",
      description:
        "Bring your vision, reference imagery, or custom sketch. Our team creates a precise 3D rendering tailored to your exact specifications.",
    },
    {
      num: "02",
      title: "Diamond Selection",
      description:
        "Choose between GIA-certified natural diamonds or premium lab-grown stones. Each diamond is inspected under high magnification for optimal fire and table symmetry.",
    },
    {
      num: "03",
      title: "Handcrafting & Setting",
      description:
        "Cast in solid 14K, 18K gold or platinum. Master bench jewelers in our 47th Street workshop set every stone by hand with meticulous care.",
    },
    {
      num: "04",
      title: "Showroom Presentation",
      description:
        "Finished with hand polishing and comprehensive insurance appraisal documentation. Presented in our private NYC Diamond District salon.",
    },
  ];

  return (
    <section id="bespoke" className="py-20 sm:py-28 bg-[#060608] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Atelier Feature Banner */}
        <div className="border border-white/10 bg-black/60 mb-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Visual Image */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full bg-black">
              <Image
                src="/images/atelier.jpg"
                alt="FIVESTAR JEWELER NYC Diamond District Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-black/20 to-black lg:via-black/30" />
            </div>

            {/* Narrative */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light">
                THE 47TH STREET WORKSHOP
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal leading-tight">
                Crafted by Hand in New York City
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                In the historic NYC Diamond District, FIVESTAR JEWELER specializes in bespoke commissions.
                We do not mass produce — each piece is individually cast in solid gold or platinum, balanced
                for weight, and set under microscopes to ensure a lifetime of brilliance.
              </p>

              <div className="space-y-2 text-xs text-zinc-400 font-light pt-2">
                <p>• 100% Solid 14K, 18K Gold and Platinum only</p>
                <p>• Conflict-free GIA &amp; IGI certified stones</p>
                <p>• Lifetime cleaning, inspection, and authenticity guarantee</p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={onStartCustom}
                  className="px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  START A CUSTOM COMMISSION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light mb-2">
            THE PROCESS
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
            From Concept to Finished Piece
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 sm:p-8 bg-[#09090d] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="font-serif text-2xl text-zinc-500 block mb-3">
                  {step.num}
                </span>
                <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
