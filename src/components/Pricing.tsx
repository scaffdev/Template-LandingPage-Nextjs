"use client";

import React, { useState } from "react";
import { Check, X, Sparkles, ArrowRight, Shield } from "lucide-react";
import { landingData, PricingPlan } from "@/data/landingData";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const { pricing } = landingData;
  const [isYearly, setIsYearly] = useState(false);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {pricing.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {pricing.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {pricing.sectionDescription}
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl glass-panel border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
              id="pricing-monthly-btn"
            >
              Tagihan Bulanan
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
              id="pricing-yearly-btn"
            >
              <span>Tagihan Tahunan</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold">
                {pricing.discountBadge}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.plans.map((plan: PricingPlan) => {
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "glass-panel border-2 border-indigo-500 shadow-2xl shadow-indigo-950/70 scale-100 lg:-translate-y-2 glow-card"
                    : "glass-panel border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Paling Populer
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1.5 min-h-[38px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {formatRupiah(currentPrice)}
                      </span>
                      <span className="text-slate-400 text-xs">/ bulan</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {isYearly ? "Ditagih tahunan (hemat 20%)" : "Ditagih per bulan, batalkan kapan saja"}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Termasuk Fitur:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Limitations if any */}
                    {plan.limitations?.map((limit, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                        <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{limit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-white/10 hover:border-white/20"
                    }`}
                    id={`pricing-plan-${plan.id}-btn`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-500 mt-2.5 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-slate-400" />
                    Garansi uang kembali 14 hari penuh
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
