"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Calendar, ShieldCheck, Award, Gem, Instagram } from "lucide-react";

interface ConciergeShowroomProps {
  onOpenAppointment: () => void;
}

export default function ConciergeShowroom({ onOpenAppointment }: ConciergeShowroomProps) {
  return (
    <section id="concierge" className="py-24 sm:py-32 bg-[#09090c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Address, Hours & VIP Services */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-zinc-400 font-medium block mb-2">
                VISIT OUR MANHATTAN ATELIER
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase leading-tight">
                NYC Diamond District • 47th St
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Experience the pinnacle of fine jewelry craftsmanship. Located in the world-renowned
              NYC Diamond District, our private salon offers personalized one-on-one appointments
              with master jewelers and certified diamond gemologists.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-medium text-xs tracking-wider uppercase">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>Atelier Location</span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  West 47th Street<br />
                  Diamond District, Manhattan<br />
                  New York, NY 10036
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-medium text-xs tracking-wider uppercase">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>Showroom Hours</span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Monday – Friday: 10:30 AM – 6:30 PM<br />
                  Saturday: 11:00 AM – 5:00 PM<br />
                  <span className="text-white font-medium">Strictly by Private Appointment</span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-medium text-xs tracking-wider uppercase">
                  <Instagram className="w-4 h-4 text-zinc-400" />
                  <span>Direct Social</span>
                </div>
                <p className="text-xs text-zinc-300 font-light">
                  <a
                    href="https://www.instagram.com/fivestarjeweler/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    @fivestarjeweler
                  </a>
                  <br />
                  DM for custom inquiries &amp; quotes
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-medium text-xs tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-zinc-400" />
                  <span>VIP Guarantees</span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Appraisal Documentation Included<br />
                  Conflict-Free Natural &amp; Lab Diamonds<br />
                  100% Solid Gold &amp; Platinum
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                <Calendar className="w-4 h-4" />
                SCHEDULE PRIVATE CONSULTATION
              </button>
            </div>
          </div>

          {/* Right Column: Diamond District Card / VIP Hospitality */}
          <div className="lg:col-span-5 bg-[#0e0e13] border border-white/15 p-8 sm:p-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-tight">
              The Private VIP Experience
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              When you book a private consultation at FIVESTAR JEWELER, you receive the full attention
              of our master diamond specialists. Whether you are designing an engagement ring,
              commissioning a heavy Miami Cuban chain, or curating a rare timepiece, our team
              ensures an unforgettable luxury experience.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <Gem className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px]">
                    Hands-On Diamond Comparison
                  </strong>
                  <span className="font-light">
                    Inspect loose GIA diamonds under 10x gemological microscopes and compare cuts side-by-side.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px]">
                    Direct NYC Bench Access
                  </strong>
                  <span className="font-light">
                    Consult with the artisans who actually set and cast your jewelry right on 47th Street.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px]">
                    Discretion &amp; Security
                  </strong>
                  <span className="font-light">
                    Private viewing suite with dedicated secure access for high-jewelry commissions.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://ig.me/m/fivestarjeweler"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-xs tracking-wider uppercase border border-white/20 text-white hover:bg-white/10 flex items-center justify-center gap-2 block text-center"
              >
                <Instagram className="w-4 h-4" />
                DIRECT MESSAGE CONCIERGE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

