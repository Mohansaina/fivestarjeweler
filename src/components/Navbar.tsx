"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, MapPin, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenAppointment: (category?: string) => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenuItems = [
    { title: "FEATURED WORKSHOP INVENTORY", href: "#inventory" },
    { title: "CHAINS & MIAMI CUBANS", href: "#chains" },
    { title: "BESPOKE DIAMOND PENDANTS", href: "#pendants" },
    { title: "ENGAGEMENT & CLUSTER RINGS", href: "#rings" },
    { title: "PRESIDENTIAL & MEDALLIONS", href: "#rings" },
    { title: "SOLITAIRE DIAMOND STUDS", href: "#earrings" },
    { title: "FINE JEWELRY & BRACELETS", href: "#bracelets" },
    { title: "CURATED TIMEPIECES", href: "#watches" },
    { title: "ABOUT OUR 47TH ST ATELIER", href: "#about" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.toLowerCase();
    if (query.includes("chain") || query.includes("cuban")) {
      document.getElementById("chains")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("pendant") || query.includes("jesus") || query.includes("drip")) {
      document.getElementById("pendants")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("ring") || query.includes("solitaire") || query.includes("president") || query.includes("medallion")) {
      document.getElementById("rings")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("earring") || query.includes("stud")) {
      document.getElementById("earrings")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("bracelet") || query.includes("clover")) {
      document.getElementById("bracelets")?.scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("watch") || query.includes("timepiece")) {
      document.getElementById("watches")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" });
    }
    setSearchOpen(false);
  };

  return (
    <>
      {/* Official Harry Winston Style Header: ☰ on Left, Brand in Center, 🔍 on Right */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#05050a]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5 sm:py-6"
        }`}
      >
        {/* Subtle Gold Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 transition-all duration-150 ease-out z-50 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Left: Minimal Hamburger Menu (☰) */}
          <div className="w-1/3 flex items-center justify-start">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="text-white hover:text-zinc-300 transition-colors p-1.5 -ml-1.5 focus:outline-none"
            >
              <div className="space-y-1.5 w-6">
                <span className="block w-6 h-[1.5px] bg-white transition-transform" />
                <span className="block w-4 h-[1.5px] bg-white transition-transform" />
                <span className="block w-6 h-[1.5px] bg-white transition-transform" />
              </div>
            </button>
          </div>

          {/* Center: Majestic Circular Medallion Brand Mark */}
          <div className="w-1/3 flex items-center justify-center">
            <Link href="/" className="flex flex-col items-center group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/30 group-hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.18)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] transition-all duration-300 bg-black flex items-center justify-center p-1">
                <Image
                  src="/images/logo.jpg"
                  alt="FIVESTAR JEWELER"
                  fill
                  sizes="(max-width: 640px) 48px, 64px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-300 font-serif mt-1.5 font-light group-hover:text-white transition-colors hidden sm:block">
                FIVESTAR JEWELER
              </span>
            </Link>
          </div>

          {/* Right: Search Icon (🔍) */}
          <div className="w-1/3 flex items-center justify-end space-x-4">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="text-white hover:text-zinc-300 transition-colors p-1.5"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="max-w-2xl mx-auto px-6 pt-3 pb-2 animate-in fade-in duration-200">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chains, pendants, rings, earrings, watches..."
                className="w-full bg-black/80 border-b border-white text-white text-xs tracking-wider py-2.5 px-2 focus:outline-none placeholder:text-zinc-500 font-light"
                autoFocus
              />
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setSearchOpen(false)}
                className="absolute right-2 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Harry Winston Style Slide-Out Navigation Drawer (Exact Match to Screenshot 4) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-md bg-white text-black h-full flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            {/* Dark Top Close Banner */}
            <div className="bg-[#090912] p-6 flex justify-center items-center">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
                className="text-white hover:text-zinc-300 transition-colors p-2"
              >
                <X className="w-7 h-7 stroke-[1.5]" />
              </button>
            </div>

            {/* Menu Links with Classic Harry Winston Typography */}
            <div className="px-8 py-6 space-y-1 flex-1">
              {navMenuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-zinc-200 text-xs sm:text-sm tracking-[0.22em] text-[#0a0a0f] hover:text-zinc-600 transition-colors font-serif uppercase"
                >
                  <span>{item.title}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 stroke-[1.5]" />
                </a>
              ))}
            </div>

            {/* Salon Locator / Private Appointment (Bottom of Menu matching Screenshot 4) */}
            <div className="p-8 border-t border-zinc-200 bg-zinc-50 space-y-4">
              <div className="flex items-center justify-between text-xs tracking-[0.2em] font-serif text-[#0a0a0f] uppercase">
                <span>SALON LOCATOR</span>
                <MapPin className="w-5 h-5 text-zinc-600 stroke-[1.5]" />
              </div>
              <p className="text-[11px] text-zinc-600 font-light leading-relaxed">
                NYC Diamond District • West 47th Street, Manhattan
              </p>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3.5 bg-black text-white text-xs tracking-[0.25em] uppercase hover:bg-zinc-800 transition-colors font-medium"
              >
                REQUEST AN APPOINTMENT
              </button>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </>
  );
}
