"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn, RotateCcw, ShieldCheck, Check, Instagram, Sliders } from "lucide-react";

interface InteractiveJewelryViewerProps {
  onOpenAppointment: (details: string) => void;
}

interface InteractivePiece {
  id: string;
  name: string;
  category: string;
  image: string;
  baseWeight: string;
  baseCarats: string;
  diamonds: string;
  description: string;
  metals: string[];
  widths: string[];
}

export default function InteractiveJewelryViewer({ onOpenAppointment }: InteractiveJewelryViewerProps) {
  const pieces: InteractivePiece[] = [
    {
      id: "honeycomb_cuban",
      name: "19mm Honeycomb Diamond Miami Cuban Chain",
      category: "CHAINS & PENDANTS",
      image: "/images/inventory/19mm_honeycomb_cuban.jpg",
      baseWeight: "385 - 460 Grams Solid Gold",
      baseCarats: "35.5 - 45.0 Carats VVS-VS Natural Diamonds",
      diamonds: "Honeycomb Edge-to-Edge Microscope Pavé",
      description: "Cast in solid gold on 47th Street. Each link is hand-filed and set with full honeycomb pavé diamonds for maximum uninterrupted fire.",
      metals: ["14K Solid White Gold", "18K Solid White Gold", "14K Two-Tone Gold"],
      widths: ["19mm (Signature)", "16mm", "14mm", "22mm Heavy"],
    },
    {
      id: "solid_cuban",
      name: "Heavy Solid Gold Miami Cuban Link Chain",
      category: "SOLID GOLD CHAINS",
      image: "/images/inventory/solid_cuban_chain.jpg",
      baseWeight: "220 - 390 Grams Solid Gold",
      baseCarats: "Solid Heavy Gold (Mirror Polish)",
      diamonds: "Mirror Finish Beveled Links",
      description: "Crafted with tight link tolerances, hand-beveled edges, and substantial wrist drape. The undisputed NYC Diamond District classic.",
      metals: ["10K Solid Gold", "14K Solid Yellow Gold", "18K Royal Yellow Gold"],
      widths: ["14mm (Popular)", "12mm", "16mm", "18mm", "20mm+"],
    },
    {
      id: "jesus_piece",
      name: "Hand-Carved Two-Tone Diamond Jesus Piece",
      category: "BESPOKE PENDANTS",
      image: "/images/inventory/jesus_piece_pendant.jpg",
      baseWeight: "115 Grams Two-Tone Solid Gold",
      baseCarats: "8.50 Carats Natural Diamonds",
      diamonds: "Full Crown of Thorns & Iced Beard",
      description: "Museum-grade sculpted anatomy with calibrated round brilliant diamonds set into the crown of thorns and beard, framed in high-polish gold hair.",
      metals: ["14K Two-Tone Gold", "18K Two-Tone Gold", "14K Solid White Gold"],
      widths: ["Medium (2.5 Inches)", "Large (3.2 Inches)", "King Size (4.0 Inches)"],
    },
    {
      id: "presidential_ring",
      name: "Custom Presidential Watch-Bezel Diamond Ring",
      category: "SIGNET & MONOGRAM RINGS",
      image: "/images/inventory/presidential_watch_ring.jpg",
      baseWeight: "42 Grams Solid Gold",
      baseCarats: "4.20 Carats Calibrated Diamonds",
      diamonds: "Fluted Halo & Diamond Jubilee Band",
      description: "Inspired by iconic Swiss horology with a coin-edge fluted bezel, pavé diamond halo, personalized raised monogram, and diamond link band.",
      metals: ["14K Two-Tone Gold", "18K Yellow Gold", "Platinum & 18K Gold"],
      widths: ["Size 9 (Custom Sized)", "Size 10", "Size 11", "Custom Guild Size"],
    },
  ];

  const [activePieceIndex, setActivePieceIndex] = useState(0);
  const currentPiece = pieces[activePieceIndex];

  const [selectedMetal, setSelectedMetal] = useState(currentPiece.metals[0]);
  const [selectedWidth, setSelectedWidth] = useState(currentPiece.widths[0]);
  const [loupeEnabled, setLoupeEnabled] = useState(false);

  // 3D Tilt State
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Loupe Zoom Position
  const [loupePos, setLoupePos] = useState({ x: 50, y: 50 });

  const handleSelectPiece = (index: number) => {
    setActivePieceIndex(index);
    setSelectedMetal(pieces[index].metals[0]);
    setSelectedWidth(pieces[index].widths[0]);
    setTilt({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Subtle 3D tilt: max 9 degrees
    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((0.5 - (y / rect.height))) * 18;

    setTilt({
      rotateX,
      rotateY,
      sheenX: percentX,
      sheenY: percentY,
    });

    setLoupePos({ x: percentX, y: percentY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
  };

  const commissionSummary = `${currentPiece.name} [Config: ${selectedMetal}, ${selectedWidth}]`;

  return (
    <section
      id="custom-atelier"
      className="py-24 sm:py-32 bg-[#09090e] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-500/10 via-white/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 text-[10px] tracking-[0.25em] uppercase text-zinc-300 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>INTERACTIVE ATELIER INSPECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.06em] font-normal text-white">
            Inspect &amp; Configure
          </h2>
          <div className="w-12 h-[1px] bg-amber-400/60 mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
            Interact with our master bench pieces. Drag to rotate in 3D perspective under showroom lighting,
            switch gold specifications, or toggle the 10x jeweler&rsquo;s loupe.
          </p>

          {/* Piece Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {pieces.map((piece, idx) => (
              <button
                key={piece.id}
                type="button"
                suppressHydrationWarning
                onClick={() => handleSelectPiece(idx)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 ${
                  activePieceIndex === idx
                    ? "bg-white text-black font-semibold shadow-lg scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {piece.name.split(" ")[0]} {piece.name.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive 3D Canvas / Loupe */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* 3D Perspective Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: "1000px",
              }}
              className="relative w-full max-w-lg aspect-[4/5] sm:aspect-square bg-gradient-to-b from-zinc-900 to-black rounded-lg p-3 sm:p-5 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-crosshair overflow-hidden group select-none"
            >
              {/* Dynamic 3D Rotated Surface */}
              <div
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${
                    isHovered ? 1.02 : 1
                  })`,
                  transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded overflow-hidden"
              >
                {/* Product Image */}
                <Image
                  src={currentPiece.image}
                  alt={currentPiece.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center pointer-events-none"
                  priority
                />

                {/* Dynamic Specular Sheen Reflection Layer */}
                <div
                  style={{
                    background: `radial-gradient(circle 300px at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="absolute inset-0 pointer-events-none mix-blend-screen"
                />

                {/* 10x Jeweler's Loupe Lens Overlay */}
                {loupeEnabled && isHovered && (
                  <div
                    style={{
                      left: `${loupePos.x}%`,
                      top: `${loupePos.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="absolute w-40 h-40 rounded-full border-2 border-amber-300/80 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-none bg-black/50 backdrop-contrast-125 z-30"
                  >
                    {/* Magnified Image Copy */}
                    <div
                      style={{
                        position: "absolute",
                        width: "350%",
                        height: "350%",
                        left: `${-(loupePos.x * 3.5 - 50)}%`,
                        top: `${-(loupePos.y * 3.5 - 50)}%`,
                      }}
                    >
                      <Image
                        src={currentPiece.image}
                        alt="10X Loupe Magnification"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    {/* Loupe Crosshair / Bezel Ring */}
                    <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none shadow-inner" />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] tracking-widest uppercase bg-black/80 px-1.5 py-0.5 rounded text-amber-300 font-mono">
                      10X LOUPE
                    </div>
                  </div>
                )}
              </div>

              {/* Controls Overlay at Bottom of Card */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-auto">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setLoupeEnabled(!loupeEnabled)}
                  className={`px-3 py-1.5 text-[10px] tracking-wider uppercase font-medium flex items-center gap-1.5 backdrop-blur-md border transition-all ${
                    loupeEnabled
                      ? "bg-amber-400 text-black border-amber-300 shadow-md font-semibold"
                      : "bg-black/70 text-white border-white/20 hover:bg-black/90"
                  }`}
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>{loupeEnabled ? "LOUPE ACTIVE" : "ENABLE 10X LOUPE"}</span>
                </button>

                <div className="px-3 py-1.5 text-[9px] tracking-widest uppercase bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400 flex items-center gap-1">
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>DRAG TO TILT 3D</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Configurator */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-medium">
                {currentPiece.category}
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-wide text-white mt-1">
                {currentPiece.name}
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2">
                {currentPiece.description}
              </p>
            </div>

            {/* Spec 1: Metal / Karat Selection */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="block text-xs uppercase tracking-wider text-zinc-300 flex items-center justify-between">
                <span>Select Metal &amp; Karat</span>
                <span className="text-amber-300 text-[11px] font-mono">{selectedMetal}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPiece.metals.map((metal) => (
                  <button
                    key={metal}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedMetal(metal)}
                    className={`p-2.5 text-xs text-left border transition-all flex items-center justify-between ${
                      selectedMetal === metal
                        ? "border-amber-400 bg-amber-400/10 text-white font-medium"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <span>{metal}</span>
                    {selectedMetal === metal && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Spec 2: Width / Dimension Selection */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="block text-xs uppercase tracking-wider text-zinc-300 flex items-center justify-between">
                <span>Width / Size Profile</span>
                <span className="text-amber-300 text-[11px] font-mono">{selectedWidth}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {currentPiece.widths.map((w) => (
                  <button
                    key={w}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedWidth(w)}
                    className={`p-2.5 text-xs text-left border transition-all flex items-center justify-between ${
                      selectedWidth === w
                        ? "border-amber-400 bg-amber-400/10 text-white font-medium"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <span>{w}</span>
                    {selectedWidth === w && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Bench Estimation Panel */}
            <div className="bg-white/5 border border-white/10 p-4 space-y-2 rounded">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Solid Gold Weight:</span>
                <span className="font-mono text-white">{currentPiece.baseWeight}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Diamond Weight:</span>
                <span className="font-mono text-amber-300">{currentPiece.baseCarats}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Certification:</span>
                <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                  <ShieldCheck className="w-3 h-3" />
                  GIA / Master Bench Appraisal
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenAppointment(commissionSummary)}
                className="w-full py-3.5 bg-white text-black hover:bg-zinc-200 text-xs tracking-[0.2em] uppercase font-bold transition-colors shadow-lg"
              >
                INQUIRE WITH THIS CONFIGURATION
              </button>

              <a
                href={`https://ig.me/m/fivestarjeweler?text=${encodeURIComponent(
                  `Hello FIVESTAR JEWELER, I configured this piece in your online atelier viewer: ${commissionSummary}. Please let me know pricing and craft timeline.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 border border-white/20 hover:border-white text-zinc-300 hover:text-white text-xs tracking-wider uppercase font-light transition-colors flex items-center justify-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>DM THIS SPECIFICATION ON INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

