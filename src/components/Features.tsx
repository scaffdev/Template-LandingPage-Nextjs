"use client";

import React from "react";
import {
  Zap,
  Share2,
  BarChart3,
  ShieldCheck,
  Users,
  MessageSquare,
  Check,
  Sparkles,
} from "lucide-react";
import { landingData, FeatureItem } from "@/data/landingData";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Share2,
  BarChart3,
  ShieldCheck,
  Users,
  MessageSquare,
};

export default function Features() {
  const { features } = landingData;

  return (
    <section id="features" className="py-24 sm:py-32 relative scroll-mt-20">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {features.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {features.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {features.sectionDescription}
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.items.map((feat: FeatureItem) => {
            const Icon = iconMap[feat.iconName] || Zap;
            return (
              <div
                key={feat.id}
                className="group relative rounded-2xl glass-panel p-7 sm:p-8 border border-white/10 hover:border-indigo-500/40 glow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-indigo-300 border border-white/5">
                      {feat.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Sub-benefits list */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  {feat.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
