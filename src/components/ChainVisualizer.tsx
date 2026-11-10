"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Diamond, Scale, Ruler, ShieldCheck, ArrowRight, Instagram } from "lucide-react";

interface ChainVisualizerProps {
  onInquire: (spec: string) => void;
}

export default function ChainVisualizer({ onInquire }: ChainVisualizerProps) {
  const [width, setWidth] = useState(12); // mm
  const [length, setLength] = useState(22); // inches
  const [metal, setMetal] = useState("14K Yellow Gold");
  const [diamondGrade, setDiamondGrade] = useState("VVS/VS Brilliant Natural");
  const [style, setStyle] = useState("Miami Cuban Link (Full Pavé)");

  // Realistic estimates based on standard NYC Diamond District bench formulas
  const calculateWeight = () => {
    const baseGramsPerInch = (width * width * 0.42);
    const metalFactor = metal.includes("18K") ? 1.2 : metal.includes("Platinum") ? 1.5 : 1.0;
    return Math.round(baseGramsPerInch * (length / 20) * metalFactor);
  };

  const calculateCarats = () => {
    if (style.includes("Plain")) return 0;
    const stonesPerInch = width * 1.8;
    const avgCaratPerStone = (width * 0.008);
    return (stonesPerInch * length * avgCaratPerStone).toFixed(1);
  };

  const estimatedGrams = calculateWeight();
  const estimatedCarats = calculateCarats();

  const handleInquireNow = () => {
    const spec = `${style} | ${width}mm Width | ${length}" Length | ${metal} | ${diamondGrade} (~${estimatedCarats} CT)`;
    onInquire(spec);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#050508] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 text-[10px] tracking-[0.3em] uppercase text-zinc-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>INTERACTIVE ATELIER BENCH CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase mb-4">
            Custom Chain &amp; Link Architect
          </h2>
          <div className="w-16 h-[1px] bg-white/40 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto">
            Design your ideal custom Cuban or tennis chain in real time. Our 47th St workshop calculates
            approximate solid gold weight and diamond carat weight before we cut the first link.
          </p>
        </div>

        {/* Visualizer Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#09090d] border border-white/15 p-6 sm:p-10 lg:p-12">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Style Selector */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium mb-3">
                1. Select Chain Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Miami Cuban Link (Full Pavé)",
                  "Baguette & Round Cuban Link",
                  "Solid Gold Plain Polish Cuban",
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStyle(s)}
                    className={`p-3 text-xs text-left border transition-all ${
                      style === s
                        ? "border-white bg-white/15 text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                        : "border-white/10 bg-black/40 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Width Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
                  2. Link Width: <span className="text-white font-serif text-sm">{width} mm</span>
                </label>
                <span className="text-[11px] text-zinc-500 font-light">6mm (Slim) to 22mm (Heavyweight)</span>
              </div>
              <input
                type="range"
                min="6"
                max="22"
                step="1"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full accent-white h-2 bg-zinc-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
                <span>6mm</span>
                <span>10mm</span>
                <span>14mm</span>
                <span>18mm</span>
                <span>22mm</span>
              </div>
            </div>

            {/* Length Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
                  3. Chain Length: <span className="text-white font-serif text-sm">{length} Inches</span>
                </label>
                <span className="text-[11px] text-zinc-500 font-light">Collar to Chest Drop</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[18, 20, 22, 24, 26, 28].map((len) => (
                  <button
                    key={len}
                    type="button"
                    onClick={() => setLength(len)}
                    className={`py-2 text-xs border transition-all text-center ${
                      length === len
                        ? "border-white bg-white text-black font-semibold"
                        : "border-white/15 text-zinc-400 hover:text-white bg-black/30"
                    }`}
                  >
                    {len}&quot;
                  </button>
                ))}
              </div>
            </div>

            {/* Precious Metal */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium mb-3">
                4. Solid Gold / Platinum Alloy
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  "14K Yellow Gold",
                  "14K White Gold",
                  "18K Solid Gold",
                  "950 Platinum",
                ].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMetal(m)}
                    className={`py-2.5 px-2 text-xs border text-center transition-all ${
                      metal === m
                        ? "border-white bg-white/10 text-white font-medium"
                        : "border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Diamond Grade */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium mb-3">
                5. Diamond Grade &amp; Origin
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "VVS/VS Brilliant Natural (Earth-Mined)",
                  "Flawless Lab-Grown (IGI Certified)",
                ].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDiamondGrade(d)}
                    className={`p-3 text-xs text-left border transition-all ${
                      diamondGrade === d
                        ? "border-white bg-white/10 text-white font-medium"
                        : "border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Calculation Card & Preview */}
          <div className="lg:col-span-5 bg-black/80 border border-white/20 p-6 sm:p-8 space-y-6">
            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black">
              <Image
                src="/images/chains.jpg"
                alt="Custom Diamond Chain Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute top-2 left-2 px-2.5 py-1 bg-black/80 text-[10px] tracking-widest uppercase text-white border border-white/20">
                LIVE SPECIFICATION
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#0d0d12] border border-white/10">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Est. Gold Weight</span>
                </div>
                <p className="text-2xl font-serif text-white">
                  ~{estimatedGrams} <span className="text-xs font-sans text-zinc-400 font-normal">Grams</span>
                </p>
                <span className="text-[10px] text-zinc-500 font-light">Solid 100% Cast Gold</span>
              </div>

              <div className="p-4 bg-[#0d0d12] border border-white/10">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                  <Diamond className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Est. Diamond Weight</span>
                </div>
                <p className="text-2xl font-serif silver-text-gradient">
                  ~{estimatedCarats} <span className="text-xs font-sans text-zinc-400 font-normal">Carats</span>
                </p>
                <span className="text-[10px] text-zinc-500 font-light">Hand-Set Microscope Pavé</span>
              </div>
            </div>

            {/* Summary List */}
            <div className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-white/10 font-light">
              <div className="flex justify-between">
                <span className="text-zinc-500">Architecture:</span>
                <span className="text-white font-medium">{style}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Dimensions:</span>
                <span className="text-white font-medium">{width}mm Width • {length}&quot; Length</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Metal Alloy:</span>
                <span className="text-white font-medium">{metal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Diamonds:</span>
                <span className="text-white font-medium">{diamondGrade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Workshop:</span>
                <span className="text-white font-medium">NYC Diamond District (47th St)</span>
              </div>
            </div>

            {/* Inquire Action Button */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleInquireNow}
                className="w-full py-4 text-xs tracking-[0.25em] uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                <span>REQUEST COMMISSION FOR THIS SPEC</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://ig.me/m/fivestarjeweler?text=${encodeURIComponent(
                  `Hi FIVESTAR JEWELER, I designed this spec on your website: ${width}mm ${length}" ${style} in ${metal} with ${diamondGrade} (~${estimatedCarats} CT, ~${estimatedGrams}g). Please let me know pricing and appointment availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs tracking-[0.2em] uppercase border border-white/20 text-zinc-300 hover:text-white hover:bg-white/10 flex items-center justify-center gap-2 block text-center"
              >
                <Instagram className="w-4 h-4" />
                <span>SEND DIRECT VIA INSTAGRAM DM</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

