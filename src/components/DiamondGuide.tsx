"use client";

import React, { useState } from "react";
import { Diamond, Sparkles, Check, ShieldCheck, Eye, Award } from "lucide-react";

export default function DiamondGuide() {
  const [selectedCut, setSelectedCut] = useState("Emerald Cut");

  const diamondCuts = [
    {
      name: "Emerald Cut",
      facets: "Step Cut (49–57 Facets)",
      character: "Hall-of-Mirrors & High Optical Purity",
      bestFor: "Solitaire Engagement Rings & Heavy Statement Rings",
      description:
        "Rectangular step-cut with cropped corners. Emphasizes stone clarity and geometric grandeur, favored by royalty and discerning collectors.",
    },
    {
      name: "Round Brilliant",
      facets: "Brilliant Cut (57–58 Facets)",
      character: "Maximum Fire, Scintillation & Light Return",
      bestFor: "Tennis Chains, Solitaires & Pavé Accents",
      description:
        "The mathematical pinnacle of light refraction. Cut to precise proportions to reflect nearly 100% of light back to the viewer's eye.",
    },
    {
      name: "Radiant Cut",
      facets: "Mixed Cut (70 Facets)",
      character: "Vibrant Modern Fire with Emerald Silhouette",
      bestFor: "Engagement Rings & Centerpiece Pendants",
      description:
        "A hybrid masterpiece featuring the clean geometry of an emerald cut combined with the intense sparkle of a round brilliant.",
    },
    {
      name: "Oval Cut",
      facets: "Modified Brilliant (56–58 Facets)",
      character: "Elongating Elegance & Superior Spread",
      bestFor: "Contemporary Bridal & Halo Designs",
      description:
        "Features an elongated silhouette that flatters the hand, offering a larger face-up appearance per carat than traditional round diamonds.",
    },
    {
      name: "Baguette Cut",
      facets: "Step Cut (14 Facets)",
      character: "Architectural Symmetry & Razor-Crisp Lines",
      bestFor: "Cuban Chain Channels, Watch Bezels & Eternity Bands",
      description:
        "Precision-calibrated step-cuts used extensively in our 47th St atelier to channel light along the curves of heavy Miami Cuban links and watch bezels.",
    },
  ];

  const activeCutData = diamondCuts.find((c) => c.name === selectedCut) || diamondCuts[0];

  return (
    <section className="py-24 sm:py-32 bg-[#060608] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-[10px] tracking-[0.3em] uppercase text-zinc-300 mb-3">
            <Diamond className="w-3.5 h-3.5 text-zinc-300" />
            <span>GEMOLOGICAL EXCELLENCE • NYC 47TH ST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-tight mb-4">
            The Diamond Standard
          </h2>
          <div className="w-16 h-[1px] bg-white/40 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto">
            &ldquo;The Difference Is In The Quality.&rdquo; We don&rsquo;t rely on certificates alone.
            Every stone is personally loupe-inspected in our 47th St workshop for table reflection,
            girdle symmetry, and pristine crystal clarity.
          </p>
        </div>

        {/* Interactive Cut Selector */}
        <div className="bg-[#0b0b10] border border-white/15 p-6 sm:p-10 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {diamondCuts.map((cut) => (
              <button
                key={cut.name}
                type="button"
                onClick={() => setSelectedCut(cut.name)}
                className={`px-4 sm:px-6 py-2.5 text-xs tracking-wider uppercase transition-all duration-200 ${
                  selectedCut === cut.name
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {cut.name}
              </button>
            ))}
          </div>

          {/* Active Cut Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 border border-white/10 p-6 sm:p-8">
            <div className="lg:col-span-4 text-center lg:text-left space-y-2 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-semibold block">
                CUT PROFILE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase">
                {activeCutData.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">{activeCutData.facets}</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {activeCutData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">
                    Optical Character
                  </span>
                  <span className="text-white font-medium">{activeCutData.character}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">
                    Signature Application
                  </span>
                  <span className="text-white font-medium">{activeCutData.bestFor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4Cs Pillars Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#09090d] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-white">01</span>
              <Sparkles className="w-4 h-4 text-zinc-400" />
            </div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium">
              CUT &amp; SCINTILLATION
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              We exclusively commission Triple Excellent cuts with optimal table depth to ensure
              fire is never lost through the pavillion.
            </p>
          </div>

          <div className="p-6 bg-[#09090d] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-white">02</span>
              <Eye className="w-4 h-4 text-zinc-400" />
            </div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium">
              COLOR SPECTRUM
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Specializing in D, E, and F Collection Colorless diamonds, as well as naturally vivid
              fancy yellow and pink diamonds upon commission.
            </p>
          </div>

          <div className="p-6 bg-[#09090d] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-white">03</span>
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
            </div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium">
              EYE-CLEAN CLARITY
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Every stone is guaranteed 100% eye-clean (FL, VVS, VS). Zero visible carbon inclusions
              to cloud your stone&rsquo;s brilliance.
            </p>
          </div>

          <div className="p-6 bg-[#09090d] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-white">04</span>
              <Award className="w-4 h-4 text-zinc-400" />
            </div>
            <h4 className="text-sm uppercase tracking-wider text-white font-medium">
              GIA &amp; IGI CERTIFIED
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Complete laser inscription verification matching laboratory dossiers, backed by our
              official atelier insurance appraisal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

