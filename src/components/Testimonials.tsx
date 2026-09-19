"use client";

import React from "react";
import { Star, Sparkles, Quote } from "lucide-react";
import { landingData, TestimonialItem } from "@/data/landingData";

export default function Testimonials() {
  const { testimonials } = landingData;

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative scroll-mt-20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {testimonials.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {testimonials.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {testimonials.sectionDescription}
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testi: TestimonialItem) => (
            <div
              key={testi.id}
              className="relative rounded-2xl glass-panel p-8 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30 group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Highlight metric if any */}
                {testi.metric && (
                  <div className="inline-block mb-3 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                    {testi.metric}
                  </div>
                )}

                {/* Content */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={testi.avatarUrl}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{testi.name}</h4>
                  <p className="text-xs text-slate-400">
                    {testi.role}, <span className="text-indigo-400">{testi.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
