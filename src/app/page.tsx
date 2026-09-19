"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Professional");

  const handleOpenContact = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Semantic Landmark */}
      <main className="flex-grow">
        <Hero onOpenContact={() => handleOpenContact()} />
        <SocialProof />
        <Features />
        <HowItWorks onOpenContact={() => handleOpenContact()} />
        <Pricing onSelectPlan={(plan) => handleOpenContact(plan)} />
        <Testimonials />
        <FAQ />
        <CTASection onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer Landmark */}
      <Footer />

      {/* Lead Generation & Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}
