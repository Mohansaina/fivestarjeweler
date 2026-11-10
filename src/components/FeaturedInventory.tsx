"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Instagram, Sparkles } from "lucide-react";

interface FeaturedInventoryProps {
  onOpenAppointment: (itemTitle: string) => void;
}

export default function FeaturedInventory({ onOpenAppointment }: FeaturedInventoryProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "chains" | "rings" | "bracelets_earrings">("all");

  const inventoryItems = [
    {
      id: "19mm_honeycomb",
      category: "chains",
      categoryLabel: "ICED CUBAN CHAINS",
      title: "19mm Honeycomb Diamond Miami Cuban Chain",
      metal: "14K Solid White Gold",
      diamonds: "Full Honeycomb Diamond Pavé",
      specs: "19mm Width • Custom Lengths • Heavy Solid Box Clasp",
      description:
        "Handcrafted on 47th Street. Features a dense honeycomb pavé setting where each diamond sits edge-to-edge for uninterrupted fire and maximum surface sparkle.",
      image: "/images/inventory/19mm_honeycomb_cuban.jpg",
    },
    {
      id: "solid_cuban",
      category: "chains",
      categoryLabel: "SOLID GOLD CHAINS",
      title: "Heavy Solid Gold Miami Cuban Link Chain",
      metal: "10K / 14K / 18K Solid Yellow Gold",
      diamonds: "High Mirror Polish Finish",
      specs: "Available 8mm to 22mm+ • Solid Cast Links • Substantial Weight",
      description:
        "Handmade solid gold links engineered with tight tolerance, hand-beveled edges, and substantial wrist/chest drape. Built for daily prestige.",
      image: "/images/inventory/solid_cuban_chain.jpg",
    },
    {
      id: "jesus_piece",
      category: "chains",
      categoryLabel: "CUSTOM PENDANTS",
      title: "Hand-Carved Two-Tone Diamond Jesus Piece",
      metal: "Solid 14K Two-Tone Gold",
      diamonds: "Full Diamond Crown of Thorns & Iced Beard",
      specs: "Hand-Sculpted Facial Anatomy • Diamond Eyes • Solid Iced Bail",
      description:
        "A legendary NYC Diamond District masterpiece. Intricately carved with microscope-set round brilliant diamonds across the crown of thorns and beard, framed in high-polish gold hair.",
      image: "/images/inventory/jesus_piece_pendant.jpg",
    },
    {
      id: "dripping_monogram",
      category: "chains",
      categoryLabel: "CUSTOM COMMISSIONS",
      title: "Custom 3D Dripping Letter Diamond Pendant",
      metal: "14K Solid Gold (Custom Tone)",
      diamonds: "Multi-Tier Hand-Set Round Diamonds",
      specs: "Personalized Initial / Word • 3D Dripping Effect • Heavy Bail",
      description:
        "Bold 3D typography pendant with fluid liquid drip detailing. Fully iced out across all front surfaces and finished with an oversized diamond bail engineered for Cuban chains.",
      image: "/images/inventory/dripping_diamond_pendant.jpg",
    },
    {
      id: "presidential_ring",
      category: "rings",
      categoryLabel: "SIGNET & MONOGRAM RINGS",
      title: "Custom Presidential Watch-Bezel Diamond Ring",
      metal: "14K Two-Tone Gold",
      diamonds: "Diamond Pavé Shoulders & Center Halo",
      specs: "Fluted Watch Bezel • Custom Monogram Center • Diamond Link Band",
      description:
        "An iconic NYC Diamond District signature. Inspired by Swiss horology with a fluted bezel case, diamond-set jubilee shoulders, and custom personalized center.",
      image: "/images/inventory/presidential_watch_ring.jpg",
    },
    {
      id: "pave_medallion",
      category: "rings",
      categoryLabel: "STATEMENT RINGS",
      title: "Full Pavé Multi-Tier Diamond Medallion Ring",
      metal: "14K / 18K Solid Gold",
      diamonds: "Multi-Tier Concentric Round Diamonds",
      specs: "Circular Signet Silhouette • Hand-Set Prong Pavé",
      description:
        "Heavy statement signet ring featuring multiple concentric tiers of calibrated round brilliant diamonds creating a dome of continuous brilliance.",
      image: "/images/inventory/pave_medallion_ring.jpg",
    },
    {
      id: "toi_et_moi",
      category: "rings",
      categoryLabel: "FINE DIAMOND RINGS",
      title: "Cluster Diamond Open Bypass Ring",
      metal: "14K White Gold / Platinum",
      diamonds: "Multi-Stone Calibrated Diamond Clusters",
      specs: "Open Bypass Architecture • Hand-Sculpted Mount",
      description:
        "A contemporary fine jewelry bypass ring designed with cascading multi-shape diamond clusters that wrap gracefully around the finger.",
      image: "/images/inventory/toi_et_moi_diamond_ring.jpg",
    },
    {
      id: "clover_bracelets",
      category: "bracelets_earrings",
      categoryLabel: "FINE BRACELETS",
      title: "Luxury Gold & Black Onyx Clover Motif Bracelets",
      metal: "Solid 18K Yellow Gold",
      diamonds: "Natural Polished Black Onyx Inlays",
      specs: "Four-Leaf Clover Motifs • Beaded Milgrain Edge • Hallmarked",
      description:
        "Timeless four-leaf clover motifs crafted with genuine black onyx hardstone inserts and delicate hand-beaded milgrain contours. Stunning worn individually or stacked.",
      image: "/images/inventory/clover_bracelets.jpg",
    },
    {
      id: "diamond_studs",
      category: "bracelets_earrings",
      categoryLabel: "BENCH ATELIER",
      title: "Round Brilliant Solitaire Diamond Studs",
      metal: "Solid 14K / 18K White or Yellow Gold",
      diamonds: "GIA Certified Matched Pair • Ideal Cut",
      specs: "4-Prong Basket Crowns • Screwback / Pushback Security",
      description:
        "Photographed directly on our master jeweler's wooden bench peg during setting. Selected for exceptional color, clarity, and maximum fire.",
      image: "/images/inventory/diamond_stud_earrings_bench.jpg",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? inventoryItems
      : inventoryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="inventory" className="py-20 sm:py-28 bg-[#fafafa] text-black border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[9px] tracking-[0.25em] uppercase font-medium mb-3">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>AUTHENTIC NYC WORKSHOP PIECES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0b0b12] uppercase tracking-[0.06em] font-normal leading-tight">
            Featured Atelier Inventory
          </h2>
          <div className="w-12 h-[1px] bg-zinc-300 mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed max-w-xl mx-auto">
            Directly from our showcase and master jeweler workbench on 47th Street.
            Each piece is custom cast in solid gold, microscope hand-set, and certified authentic.
          </p>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 text-xs tracking-[0.18em] uppercase">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFilter("all")}
              className={`pb-1 transition-colors ${
                activeFilter === "all"
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-zinc-500 hover:text-black font-light"
              }`}
            >
              ALL PIECES ({inventoryItems.length})
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFilter("chains")}
              className={`pb-1 transition-colors ${
                activeFilter === "chains"
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-zinc-500 hover:text-black font-light"
              }`}
            >
              CHAINS &amp; PENDANTS (4)
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFilter("rings")}
              className={`pb-1 transition-colors ${
                activeFilter === "rings"
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-zinc-500 hover:text-black font-light"
              }`}
            >
              CUSTOM RINGS (3)
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFilter("bracelets_earrings")}
              className={`pb-1 transition-colors ${
                activeFilter === "bracelets_earrings"
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-zinc-500 hover:text-black font-light"
              }`}
            >
              BRACELETS &amp; EARRINGS (2)
            </button>
          </div>
        </div>

        {/* Inventory 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-sm hover:shadow-xl luxury-sheen-container"
            >
              {/* Product Visual Container (Pure Photography with Zero Text Overlay) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#0b0b12] font-normal leading-snug">
                    {item.title}
                  </h3>
                  <div className="pt-2 pb-2 space-y-1 text-xs text-zinc-500 font-light">
                    <p className="text-black font-medium">{item.metal}</p>
                    <p className="text-zinc-700">{item.diamonds}</p>
                    <p className="text-[11px] text-zinc-400 tracking-wide">{item.specs}</p>
                  </div>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed pt-2 border-t border-zinc-100">
                    {item.description}
                  </p>
                </div>

                {/* Direct Action CTAs */}
                <div className="pt-5 border-t border-zinc-200 space-y-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment(item.title)}
                    className="w-full py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE ABOUT THIS PIECE
                  </button>

                  <a
                    href={`https://ig.me/m/fivestarjeweler?text=${encodeURIComponent(
                      `Hello FIVESTAR JEWELER, I am inquiring about this piece on your website: ${item.title} (${item.metal}, ${item.diamonds}). Please let me know pricing and availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 border border-zinc-300 hover:border-black text-zinc-700 hover:text-black text-[11px] tracking-wider uppercase font-light transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5 text-zinc-800" />
                    <span>DM ON INSTAGRAM</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
