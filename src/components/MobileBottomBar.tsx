"use client";

import React from "react";
import { Calendar, Instagram, Phone, Sparkles } from "lucide-react";

interface MobileBottomBarProps {
  onOpenAppointment: () => void;
}

export default function MobileBottomBar({ onOpenAppointment }: MobileBottomBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#08080c]/95 backdrop-blur-xl border-t border-white/15 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Quick DM */}
        <a
          href="https://ig.me/m/fivestarjeweler"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 text-[10px] tracking-wider uppercase text-zinc-300 hover:text-white border border-white/10 bg-white/5"
        >
          <Instagram className="w-4 h-4 mb-0.5 text-zinc-300" />
          <span>IG DM</span>
        </a>

        {/* Custom Specification */}
        <a
          href="#custom-atelier"
          className="flex flex-col items-center justify-center py-1.5 px-2 text-[10px] tracking-wider uppercase text-zinc-300 hover:text-white border border-white/10 bg-white/5"
        >
          <Sparkles className="w-4 h-4 mb-0.5 text-zinc-300" />
          <span>CUSTOM</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center py-1.5 px-2 text-[10px] tracking-wider uppercase font-medium bg-white text-black hover:bg-zinc-200"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-black" />
          <span>BOOK VIP</span>
        </button>
      </div>
    </div>
  );
}

