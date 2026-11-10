"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, Video, Check, Instagram, Phone, Diamond } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedCategory,
}: AppointmentModalProps) {
  const [type, setType] = useState<"showroom" | "virtual">("showroom");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("2:00 PM");
  const [category, setCategory] = useState(preselectedCategory || "Custom Diamond Chains");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [notes, setNotes] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  React.useEffect(() => {
    if (preselectedCategory) {
      setCategory(preselectedCategory);
    }
  }, [preselectedCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const timeSlots = [
    "11:00 AM",
    "12:30 PM",
    "2:00 PM",
    "3:30 PM",
    "5:00 PM",
    "6:30 PM",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c0c10] border border-white/20 p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase">
              VIP Appointment Reserved
            </h3>

            <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-md mx-auto">
              Thank you, <span className="text-white font-medium">{name}</span>. Your consultation
              request has been received by our NYC Diamond District concierge.
            </p>

            <div className="bg-black/60 border border-white/10 p-5 text-left text-xs text-zinc-300 space-y-2 max-w-md mx-auto">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>
                  {type === "showroom"
                    ? "Private Showroom: NYC Diamond District, 47th St, Manhattan"
                    : "Private Virtual VIP Consultation (Zoom / FaceTime)"}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Date: {date || "Selected upcoming date"} at {time}</span>
              </p>
              <p className="flex items-center gap-2">
                <Diamond className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Focus: {category}</span>
              </p>
            </div>

            <p className="text-xs text-zinc-400 font-light">
              We will confirm your calendar invitation via phone/email shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="https://www.instagram.com/fivestarjeweler/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs tracking-wider uppercase border border-white/20 text-white hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                DM ON INSTAGRAM
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 text-xs tracking-wider uppercase bg-white text-black hover:bg-zinc-200"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center pb-4 border-b border-white/10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-medium block mb-1">
                FIVESTAR JEWELER • NYC
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-tight">
                Reserve VIP Appointment
              </h3>
              <p className="text-xs text-zinc-400 font-light mt-1">
                Private consultation with our NYC 47th St custom diamond specialists.
              </p>
            </div>

            {/* Consultation Format */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                Consultation Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setType("showroom")}
                  className={`p-3 text-xs text-left border flex items-center gap-2.5 transition-all ${
                    type === "showroom"
                      ? "border-white bg-white/10 text-white font-medium"
                      : "border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>NYC Showroom (47th St)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setType("virtual")}
                  className={`p-3 text-xs text-left border flex items-center gap-2.5 transition-all ${
                    type === "virtual"
                      ? "border-white bg-white/10 text-white font-medium"
                      : "border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>Virtual VIP Call</span>
                </button>
              </div>
            </div>

            {/* Focus Area */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                Jewelry Interest
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none"
              >
                {category &&
                  ![
                    "Solid Gold Miami Cuban Chains",
                    "Custom Diamond Pendants",
                    "Custom Diamond Rings",
                    "Solitaire Diamond Stud Earrings",
                    "Presidential & Medallion Rings",
                    "Fine Jewelry & Bracelets",
                    "Curated Luxury Timepieces",
                    "Custom Atelier Commission",
                    "General Inquiry",
                  ].includes(category) && <option value={category}>{category}</option>}
                <option value="Solid Gold Miami Cuban Chains">Solid Gold Miami Cuban Chains</option>
                <option value="Custom Diamond Pendants">Custom Diamond Pendants (Jesus Piece, Dripping Initial)</option>
                <option value="Custom Diamond Rings">Custom Diamond Rings (Engagement &amp; Cluster Rings)</option>
                <option value="Presidential & Medallion Rings">Presidential &amp; Medallion Rings</option>
                <option value="Solitaire Diamond Stud Earrings">Solitaire Diamond Stud Earrings</option>
                <option value="Fine Jewelry & Bracelets">Fine Jewelry &amp; Lucky Clover Bracelets</option>
                <option value="Curated Luxury Timepieces">Curated Luxury Swiss Timepieces</option>
                <option value="Custom Atelier Commission">Bespoke Diamond District Atelier Commission</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
              />
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Instagram Handle (Optional)"
                className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
              />
            </div>

            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us about the piece you have in mind or any questions..."
              className="w-full bg-black/60 border border-white/20 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
            />

            <button
              type="submit"
              className="w-full py-4 text-xs tracking-[0.25em] uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Calendar className="w-4 h-4" />
              CONFIRM APPOINTMENT REQUEST
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

