"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight, Diamond, Heart, MessageCircle } from "lucide-react";

export default function InstagramFeed() {
  const posts = [
    {
      id: "1",
      image: "/images/chains.jpg",
      caption: "Heavy 18K solid yellow gold Miami Cuban link hand-set with flawless VS+ diamonds on 47th St. The difference is in the weight and clarity. 💎",
      likes: "184",
      comments: "29",
      tag: "CHAINS",
    },
    {
      id: "2",
      image: "/images/rings.jpg",
      caption: "Bespoke 5.20ct Emerald Cut diamond solitaire mounted in platinum with hidden diamond collar. Custom crafted for a private collector.",
      likes: "242",
      comments: "38",
      tag: "RINGS",
    },
    {
      id: "3",
      image: "/images/earrings.jpg",
      caption: "Cascading round & baguette diamond drop earrings. Maximum fire and movement under natural light. Available by private appointment.",
      likes: "195",
      comments: "24",
      tag: "EARRINGS",
    },
    {
      id: "4",
      image: "/images/watches.jpg",
      caption: "Curated Swiss luxury automatic with custom baguette gem-set bezel and sunburst midnight blue dial. Sourced exclusively in NYC.",
      likes: "310",
      comments: "45",
      tag: "WATCHES",
    },
    {
      id: "5",
      image: "/images/atelier.jpg",
      caption: "Behind the bench on 47th Street. Master setting each diamond prong by hand under high-power loupes. Quality over speed, always.",
      likes: "267",
      comments: "33",
      tag: "ATELIER",
    },
    {
      id: "6",
      image: "/images/hero.jpg",
      caption: "FIVESTAR JEWELER High Jewelry Campaign. The Difference Is In The Quality. DM for bespoke commissions and appointments.",
      likes: "288",
      comments: "41",
      tag: "EDITORIAL",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#060608] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Profile Header Card */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 bg-[#0b0b0f] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/40 p-0.5 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="FIVESTAR JEWELER"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide">
                  @fivestarjeweler
                </h3>
                <Diamond className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
              </div>
              <p className="text-xs text-zinc-300 font-serif italic mb-2">
                &ldquo;The Difference Is In The Quality&rdquo;
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-zinc-400">
                <span>
                  <strong className="text-white">11</strong> Posts
                </span>
                <span>
                  <strong className="text-white">340</strong> Followers
                </span>
                <span>
                  <strong className="text-white">152</strong> Following
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://www.instagram.com/fivestarjeweler/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs tracking-wider uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              FOLLOW ON IG
            </a>
            <a
              href="https://ig.me/m/fivestarjeweler"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs tracking-wider uppercase border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              DM FOR INQUIRIES
            </a>
          </div>
        </div>

        {/* Feed Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/fivestarjeweler/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-black overflow-hidden border border-white/10 hover:border-white/30 transition-all block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <span className="text-[9px] tracking-widest uppercase bg-white/20 self-start px-1.5 py-0.5">
                  {post.tag}
                </span>

                <p className="text-[10px] text-zinc-300 line-clamp-3 font-light leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] text-zinc-300 pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-400 fill-red-400" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-zinc-300" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

