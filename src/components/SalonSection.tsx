"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Clock, Instagram } from "lucide-react";

interface SalonSectionProps {
  onOpenAppointment: () => void;
}

export default function SalonSection({ onOpenAppointment }: SalonSectionProps) {
  return (
    <section id="salon" className="bg-[#050508] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Workshop Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden bg-black group">
            <Image
              src="/images/atelier.jpg"
              alt="FIVESTAR JEWELER - NYC Diamond District Workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
          </div>

          {/* Salon Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light">
              MANHATTAN SALON &amp; WORKSHOP
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-normal font-normal">
              By Private Appointment
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Experience personalized fine jewelry consultations in the heart of the New York City
              Diamond District. Inspect certified loose diamonds under 10x gemological microscopes
              and consult directly with our master bench artisans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-zinc-400 font-light border-t border-white/10">
              <div className="space-y-1">
                <span className="text-white block uppercase tracking-wider text-[11px] font-normal">
                  Location
                </span>
                <p>West 47th Street, Diamond District</p>
                <p>Manhattan, New York 10036</p>
              </div>

              <div className="space-y-1">
                <span className="text-white block uppercase tracking-wider text-[11px] font-normal">
                  Hours
                </span>
                <p>Monday – Friday: 10:30 AM – 6:30 PM</p>
                <p>Saturday: 11:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                suppressHydrationWarning
                onClick={onOpenAppointment}
                className="px-7 py-3 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-zinc-200 transition-colors font-medium border border-white"
              >
                SCHEDULE AN APPOINTMENT
              </button>

              <a
                href="https://ig.me/m/fivestarjeweler"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-white/30 text-white text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition-colors font-medium"
              >
                DIRECT MESSAGE US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

