"use client";

import React, { useState } from "react";
import { Check, Instagram, Send } from "lucide-react";

interface CustomConsultationBuilderProps {
  initialCategory?: string;
  onOpenAppointment: () => void;
}

export default function CustomConsultationBuilder({
  initialCategory,
  onOpenAppointment,
}: CustomConsultationBuilderProps) {
  const [category, setCategory] = useState(initialCategory || "Chains & Pendants");
  const [metal, setMetal] = useState("14K Yellow Gold");
  const [diamondType, setDiamondType] = useState("Natural Earth-Mined (GIA)");
  const [dimensions, setDimensions] = useState("");
  const [budgetRange, setBudgetRange] = useState("$5,000 – $10,000");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { name: "Chains & Pendants", desc: "Miami Cuban, Tennis, Custom" },
    { name: "Diamond Rings", desc: "Solitaire, Eternity, Bridal" },
    { name: "Diamond Earrings", desc: "Drops, Studs, Huggies" },
    { name: "Luxury Watches", desc: "Swiss Horology, Diamond Bezel" },
    { name: "Custom Emblem", desc: "Bespoke 3D Logo / Pendant" },
  ];

  const metals = [
    "14K Yellow Gold",
    "14K White Gold",
    "14K Rose Gold",
    "18K Solid Gold",
    "950 Platinum",
  ];

  const diamondOptions = [
    "Natural Earth-Mined (GIA Certified)",
    "Premium Lab-Grown (IGI Certified)",
    "Collection Grade D-F Colorless",
    "Custom Baguette & Pavé Setting",
  ];

  const budgetTiers = [
    "$2,500 – $5,000",
    "$5,000 – $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
  ];

  const generateInquiryMessage = () => {
    return `Hello FIVESTAR JEWELER, I would like to inquire about a custom commission:\n• Category: ${category}\n• Metal: ${metal}\n• Diamonds: ${diamondType}\n• Budget: ${budgetRange}\n• Specifics: ${dimensions || "To discuss"}\n• Notes: ${clientNotes || "Looking for a consultation in the NYC Diamond District"}\nClient: ${clientName || "Valued Client"}`;
  };

  const handleInstagramDM = () => {
    const text = encodeURIComponent(generateInquiryMessage());
    window.open(`https://ig.me/m/fivestarjeweler?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="custom-builder" className="py-20 sm:py-28 bg-[#08080c] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light mb-2">
            BESPOKE COMMISSIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
            Request a Consultation
          </h2>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Specify your preferences to receive a direct consultation and estimate from our NYC workshop.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-[#0b0b10] border border-white/15 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto text-white">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-serif text-white font-normal">
              Inquiry Prepared
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Thank you, {clientName || "Valued Client"}. Your custom inquiry for a{" "}
              <span className="text-white font-medium">{category}</span> in{" "}
              <span className="text-white font-medium">{metal}</span> has been received.
            </p>

            <div className="p-4 bg-black/50 border border-white/10 text-left text-xs text-zinc-400 space-y-1 font-light">
              <p>• Category: {category}</p>
              <p>• Metal: {metal}</p>
              <p>• Diamonds: {diamondType}</p>
              <p>• Investment Tier: {budgetRange}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                suppressHydrationWarning
                onClick={handleInstagramDM}
                className="px-6 py-3 text-xs tracking-wider uppercase font-medium bg-white text-black hover:bg-zinc-200 flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>SEND VIA INSTAGRAM DM</span>
              </button>

              <button
                type="button"
                suppressHydrationWarning
                onClick={onOpenAppointment}
                className="px-6 py-3 text-xs tracking-wider uppercase border border-white/20 text-white hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-zinc-500 hover:text-white underline pt-2 block mx-auto font-light"
            >
              Modify Details
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0b0b10] border border-white/10 p-6 sm:p-10 space-y-8"
          >
            {/* Category */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light mb-3">
                1. Select Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {categories.map((cat) => (
                  <button
                    type="button"
                    suppressHydrationWarning
                    key={cat.name}
                    onClick={() => setCategory(cat.name)}
                    className={`p-3 text-left border transition-colors ${
                      category === cat.name
                        ? "border-white bg-white/10 text-white font-medium"
                        : "border-white/10 text-zinc-400 hover:text-zinc-200 bg-black/30"
                    }`}
                  >
                    <p className="text-xs font-medium text-white mb-0.5">{cat.name}</p>
                    <p className="text-[10px] text-zinc-500 font-light">{cat.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Metal */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light mb-3">
                2. Precious Metal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {metals.map((m) => (
                  <button
                    type="button"
                    suppressHydrationWarning
                    key={m}
                    onClick={() => setMetal(m)}
                    className={`py-2.5 px-2 text-xs border text-center transition-colors ${
                      metal === m
                        ? "border-white bg-white/10 text-white font-medium"
                        : "border-white/10 text-zinc-400 hover:text-zinc-200 bg-black/30"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Diamond Grade */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light mb-3">
                3. Diamond Selection
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {diamondOptions.map((d) => (
                  <button
                    type="button"
                    suppressHydrationWarning
                    key={d}
                    onClick={() => setDiamondType(d)}
                    className={`p-3 text-xs text-left border transition-colors flex items-center justify-between ${
                      diamondType === d
                        ? "border-white bg-white/10 text-white font-medium"
                        : "border-white/10 text-zinc-400 hover:text-zinc-200 bg-black/30"
                    }`}
                  >
                    <span>{d}</span>
                    {diamondType === d && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Specifics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light mb-2">
                  4. Approximate Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none"
                >
                  {budgetTiers.map((t) => (
                    <option key={t} value={t} className="bg-black text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light mb-2">
                  Dimensions / Sizing (Optional)
                </label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g. 12mm width, 22-inch length / Ring size 7"
                  className="w-full bg-black/60 border border-white/15 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light">
                5. Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full bg-black/60 border border-white/15 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
                />
                <input
                  type="text"
                  required
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  placeholder="Phone Number or Instagram Handle (@...)"
                  className="w-full bg-black/60 border border-white/15 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <textarea
                rows={2}
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                placeholder="Specific ideas, reference images, or timeline..."
                className="w-full bg-black/60 border border-white/15 text-zinc-200 text-xs p-3 focus:border-white focus:outline-none placeholder:text-zinc-600"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                suppressHydrationWarning
                className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>SUBMIT INQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
