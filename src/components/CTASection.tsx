"use client";

import React from "react";
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { landingData } from "@/data/landingData";

interface CTASectionProps {
  onOpenContact: () => void;
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  const { ctaBanner, brand } = landingData;
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${brand.whatsappMessage}`;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 md:p-16 border border-indigo-500/30 bg-gradient-to-b from-indigo-950/80 via-slate-900/90 to-slate-950 shadow-2xl shadow-indigo-950/60 text-center">
          {/* Background Ambient Aura */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ctaBanner.badge}</span>
          </div>

          {/* Title */}
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {ctaBanner.title}
          </h2>

          {/* Description */}
          <p className="relative mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {ctaBanner.description}
          </p>

          {/* Action Buttons */}
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-base shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              id="final-cta-primary-btn"
            >
              <span>{ctaBanner.buttonText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/15 bg-slate-800/80 hover:bg-emerald-500/10 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 font-medium text-base flex items-center justify-center gap-2.5 transition"
              id="final-cta-wa-btn"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>{ctaBanner.secondaryButtonText}</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Akses Penuh 14 Hari</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tanpa Kartu Kredit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Setup Siap dalam 5 Menit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
