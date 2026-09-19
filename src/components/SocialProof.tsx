"use client";

import React from "react";
import { ShieldCheck, Award, TrendingUp, Users } from "lucide-react";
import { landingData } from "@/data/landingData";

export default function SocialProof() {
  const { metrics, partners } = landingData;

  const metricIcons = [ShieldCheck, TrendingUp, Award, Users];

  return (
    <section className="py-14 border-y border-white/5 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <div
                key={item.label}
                className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-indigo-500/30 transition-all text-center group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-indigo-300 mt-1">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
              </div>
            );
          })}
        </div>

        {/* Client / Partner Logos Ticker */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Dipercaya oleh tim inovatif di berbagai industri terkemuka
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
                <span className="text-sm sm:text-base font-bold text-slate-300 tracking-wide">
                  {partner.name}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
