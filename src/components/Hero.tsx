"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Star, Sparkles, Shield, Activity, Zap } from "lucide-react";
import { landingData } from "@/data/landingData";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const { hero, brand } = landingData;
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${brand.whatsappMessage}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-sky-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 shadow-lg shadow-indigo-500/10 text-xs sm:text-sm font-medium text-indigo-300 hover:border-indigo-500/60 transition cursor-default">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>{hero.badge}</span>
          </div>

          {/* Headline (Single H1) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            {hero.titleStart}{" "}
            <span className="text-gradient-primary block sm:inline">
              {hero.titleHighlight}
            </span>{" "}
            {hero.titleEnd}
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-base shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              id="hero-primary-cta"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/15 hover:border-emerald-500/50 bg-slate-800/60 hover:bg-emerald-500/10 text-slate-200 hover:text-emerald-300 font-medium text-base flex items-center justify-center gap-2.5 transition backdrop-blur-md"
              id="hero-secondary-cta"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>{hero.secondaryCta}</span>
            </a>
          </div>

          {/* Social Proof Review Pill */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              {hero.socialProof.avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`User Reviewer ${i + 1}`}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white ml-1">{hero.socialProof.rating}</span>
              <span className="text-xs text-slate-400">({hero.socialProof.totalReviews} ulasan)</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-xs text-slate-400">{hero.socialProof.label}</span>
          </div>
        </div>

        {/* Product Visual Mockup Showcase with Next/Image */}
        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          {/* Ambient border gradient wrapper */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent shadow-2xl shadow-indigo-950/60">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-white/10 aspect-[16/9]">
              <Image
                src="/images/dashboard-preview.jpg"
                alt="NexusFlow Analytics & Workflow Automation Dashboard UI"
                width={1280}
                height={720}
                priority
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />

              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Live Badge Left */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 sm:left-6 items-center gap-3 p-3.5 rounded-2xl glass-panel border border-emerald-500/30 bg-slate-900/90 shadow-xl animate-bounce duration-1000">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  99.99% Real-time Sync
                </p>
                <p className="text-[11px] text-slate-400">2,845 task aktif diproses</p>
              </div>
            </div>

            {/* Floating Live Badge Right */}
            <div className="hidden sm:flex absolute -top-5 -right-4 sm:right-6 items-center gap-3 p-3.5 rounded-2xl glass-panel border border-indigo-500/30 bg-slate-900/90 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Zap className="w-5 h-5 fill-indigo-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">10x Workflow Acceleration</p>
                <p className="text-[11px] text-slate-400">Efisiensi tim meningkat drastis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
