"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaterfallSections from "@/components/WaterfallSections";
import FeaturedInventory from "@/components/FeaturedInventory";
import InteractiveJewelryViewer from "@/components/InteractiveJewelryViewer";
import WaterfallFooter from "@/components/WaterfallFooter";
import MobileBottomBar from "@/components/MobileBottomBar";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentCategory, setAppointmentCategory] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (category?: string) => {
    setAppointmentCategory(category);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black/10 selection:text-black pb-16 lg:pb-0">
      {/* Header with Circular Medallion Logo */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Experience */}
      <main className="flex-1">
        {/* Hero Section: Editorial Woman Model & 'The Difference Is In The Quality' */}
        <Hero onOpenAppointment={() => handleOpenAppointment("General Inquiry")} />

        {/* Content Exactly Matching the 5 Reference Screenshots */}
        <WaterfallSections onOpenAppointment={handleOpenAppointment} />

        {/* Real Atelier Inventory Showcase (All 9 Real User Workshop Pieces) */}
        <FeaturedInventory onOpenAppointment={handleOpenAppointment} />

        {/* Interactive 3D Perspective Atelier Inspector & Configurator */}
        <InteractiveJewelryViewer onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* Luxury Footer Matching Screenshot 5 */}
      <WaterfallFooter />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* VIP Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedCategory={appointmentCategory}
      />
    </div>
  );
}
