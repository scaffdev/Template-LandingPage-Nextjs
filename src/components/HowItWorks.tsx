"use client";

import React from "react";
import { Link2, Sliders, Sparkles, ArrowRight } from "lucide-react";
import { landingData, StepItem } from "@/data/landingData";

const iconMap: Record<string, React.ElementType> = {
  Link2,
  Sliders,
  Sparkles,
};

interface HowItWorksProps {
  onOpenContact: () => void;
}

export default function HowItWorks({ onOpenContact }: HowItWorksProps) {
  const { howItWorks } = landingData;

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative scroll-mt-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {howItWorks.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {howItWorks.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {howItWorks.sectionDescription}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorks.steps.map((step: StepItem, idx: number) => {
            const Icon = iconMap[step.iconName] || Sparkles;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl glass-panel p-8 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-indigo-500/40 group-hover:text-indigo-400 transition-colors font-mono">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub-indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-indigo-400">
                  <span>Tahap {idx + 1} Selesai Otomatis</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10 text-sm font-semibold transition"
          >
            <span>Ingin demonstrasi langsung dengan alur kerja Anda?</span>
            <span className="text-indigo-400 underline">Jadwalkan di sini</span>
          </button>
        </div>
      </div>
    </section>
  );
}
