"use client";

import React from "react";
import Image from "next/image";

interface WaterfallSectionsProps {
  onOpenAppointment: (category?: string) => void;
}

export default function WaterfallSections({ onOpenAppointment }: WaterfallSectionsProps) {
  const brandPillars = [
    { name: "GIA CERTIFIED", desc: "Natural Diamonds" },
    { name: "18K SOLID GOLD", desc: "Cast in NYC" },
    { name: "MIAMI CUBANS", desc: "Hand-Made Links" },
    { name: "BESPOKE PENDANTS", desc: "Microscope Pavé" },
    { name: "SWISS HOROLOGY", desc: "Trade Vault Sourcing" },
    { name: "47TH ST ATELIER", desc: "Master Bench Guild" },
  ];

  return (
    <div className="bg-white text-black">
      {/* 1. TOP RATED BANNER (Matching Screenshot 1) */}
      <section className="py-16 sm:py-20 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0c0c14] tracking-[0.06em] uppercase font-normal leading-tight max-w-4xl mx-auto">
            TOP RATED CUSTOM JEWELER IN NYC DIAMOND DISTRICT • 47TH ST
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-light mt-3 mb-10 max-w-xl mx-auto">
            Browse our custom jewelry disciplines to find that perfect handcrafted design.
          </p>

          {/* Horizontal Brand Pillar Bar */}
          <div className="border-t border-b border-zinc-200 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {brandPillars.map((item) => (
                <div key={item.name} className="space-y-0.5">
                  <span className="block text-xs sm:text-sm tracking-[0.22em] font-serif uppercase text-[#0c0c12] font-medium">
                    {item.name}
                  </span>
                  <span className="block text-[10px] tracking-wider uppercase text-zinc-500 font-light">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY GRID (Matching Screenshot 2 - Pure Photography Without Obstructing Text) */}
      <section id="categories" className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Row 1: Solid Gold Miami Cubans & Bespoke Diamond Pendants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Card 1: Solid Gold Miami Cubans */}
            <div id="chains" className="space-y-5 text-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group border border-zinc-200 shadow-sm">
                <Image
                  src="/images/inventory/solid_cuban_chain.jpg"
                  alt="Heavy Solid Gold Miami Cuban Link Chains NYC"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                  SOLID GOLD MIAMI CUBANS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Solid 10K, 14K, and 18K yellow and white gold Miami Cuban links with hand-beveled edges,
                  tight link clearances, and substantial solid weight.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment("Solid Gold Miami Cuban Chains")}
                    className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Bespoke Diamond Pendants */}
            <div id="pendants" className="space-y-5 text-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group border border-zinc-200 shadow-sm">
                <Image
                  src="/images/inventory/jesus_piece_pendant.jpg"
                  alt="Hand Carved Diamond Jesus Piece and Custom Pendants"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                  CUSTOM DIAMOND PENDANTS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Museum-grade hand-carved two-tone Jesus pieces with diamond crowns of thorns,
                  and 3D dripping letter custom nameplates set in NYC.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment("Custom Diamond Pendants")}
                    className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Custom Rings & Statement Bench Earrings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Card 3: Custom Rings & Bands */}
            <div id="rings" className="space-y-5 text-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group border border-zinc-200 shadow-sm">
                <Image
                  src="/images/inventory/toi_et_moi_diamond_ring.jpg"
                  alt="Custom Cluster Diamond Rings and Engagement Silhouettes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                  ENGAGEMENT &amp; CLUSTER RINGS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Explore our selection of custom engagement rings, cluster diamond bypass rings,
                  and eternity bands handcrafted to your exact specifications.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment("Custom Diamond Rings")}
                    className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Diamond Stud Earrings on Master Bench */}
            <div id="earrings" className="space-y-5 text-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group border border-zinc-200 shadow-sm">
                <Image
                  src="/images/inventory/diamond_stud_earrings_bench.jpg"
                  alt="Master Jeweler Bench Solitaire Diamond Stud Earrings"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                  SOLITAIRE DIAMOND STUDS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Photographed on our master jeweler&rsquo;s wooden bench peg. Perfectly matched GIA
                  certified round brilliant diamonds mounted in solid gold 4-prong crowns.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment("Solitaire Diamond Stud Earrings")}
                    className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Presidential & Medallion Rings + High Jewelry Motif Bracelets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 5: Presidential Signet & Medallion Rings */}
            <div className="space-y-5 text-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group border border-zinc-200 shadow-sm">
                <Image
                  src="/images/inventory/presidential_watch_ring.jpg"
                  alt="Custom Presidential Watch-Bezel Diamond Signet Ring"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                  PRESIDENTIAL &amp; MEDALLION RINGS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Swiss horology inspired fluted bezel monogram rings and multi-tier concentric pavé
                  diamond medallions cast in solid 14K and 18K gold.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment("Presidential & Medallion Rings")}
                    className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Card 6: High Jewelry Clover Motif Bracelets */}
            <div id="bracelets" className="space-y-5 text-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group border border-zinc-200 shadow-sm">
                <Image
                  src="/images/inventory/clover_bracelets.jpg"
                  alt="Gold and Black Onyx Clover Motif Luxury Bracelets"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                  FINE JEWELRY &amp; BRACELETS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Iconic four-leaf lucky clover motifs inlaid with genuine polished black onyx,
                  hand-milgrained golden borders, and diamond tennis bracelets.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => onOpenAppointment("Fine Jewelry & Bracelets")}
                    className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LUXURIOUS TIMEPIECES WIDE BANNER (Exact Match to User's Reference Screenshot) */}
      <section id="watches" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-20 sm:mb-28">
        <div className="relative w-full aspect-[1024/380] min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex items-center justify-center overflow-hidden bg-white border border-zinc-200 shadow-sm">
          {/* Split Lifestyle Watch Visual Background: Woman's Watch on Left, Man's Watch on Right */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/watches_banner.jpg"
              alt="Curated Luxurious Swiss Timepieces"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Centered Luxury Card (Exact Typography & Palette from Reference) */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg mx-4 text-center bg-white/95 sm:bg-white p-6 sm:p-8 lg:p-10 shadow-lg border border-zinc-200/80 space-y-3.5">
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#00106a] font-medium">
              EXPLORE OUR CURATED SELECTION OF
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif uppercase text-[#00106a] tracking-[0.06em] font-normal leading-tight">
              LUXURIOUS TIMEPIECES
            </h2>

            <p className="text-xs sm:text-[13px] text-zinc-600 font-light leading-relaxed max-w-sm mx-auto">
              The right watch is more than just a statement, it&rsquo;s part of your legacy. Discover
              curated Swiss timepieces and custom diamond-set bezels sourced directly in NYC.
            </p>

            <div className="pt-2">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenAppointment("Curated Luxury Timepieces")}
                className="px-8 sm:px-10 py-2.5 bg-[#00106a] hover:bg-[#081a80] text-white text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors shadow-sm"
              >
                INQUIRE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION (Matching Screenshot 4) */}
      <section id="about" className="py-16 sm:py-24 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl font-serif uppercase text-[#0c0c12] tracking-wide font-normal">
                ABOUT US
              </h2>

              <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                FIVESTAR JEWELER was founded in the historic NYC Diamond District on 47th Street.
                What sets us apart from other jewelers is our unwavering commitment to our clients and
                our founding motto: <span className="font-serif italic font-normal text-black">&ldquo;The Difference Is In The Quality.&rdquo;</span>
              </p>

              <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                Keeping your vision at the center of everything we do, our master bench artisans hand-set
                each diamond with microscope precision, cast exclusively in solid 14K and 18K gold and platinum,
                and source certified GIA and IGI conflict-free stones.
              </p>

              <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                Whether you are looking to commission a heavy solid gold Miami Cuban chain, design an
                engagement ring that you&rsquo;ve always dreamed about, or source an elusive Swiss luxury
                timepiece, you can rely on our 47th Street atelier.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => onOpenAppointment("Custom Atelier Commission")}
                  className="px-8 py-3 bg-[#0a1128] hover:bg-[#101b3d] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  SCHEDULE SALON CONSULTATION
                </button>
              </div>
            </div>

            {/* Right: Atelier / Showroom Visual */}
            <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 shadow-xl border border-zinc-200">
              <Image
                src="/images/atelier.jpg"
                alt="FIVESTAR JEWELER 47th Street Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
