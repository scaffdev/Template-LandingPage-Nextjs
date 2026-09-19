"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { landingData, FAQItem } from "@/data/landingData";

export default function FAQ() {
  const { faq } = landingData;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {faq.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {faq.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {faq.sectionDescription}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.items.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition"
                  id={`faq-btn-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-indigo-600 text-white border-indigo-500" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Note */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-white/5 bg-slate-900/40 flex flex-col sm:flex-row items-center justify-center gap-3">
          <HelpCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <span className="text-sm text-slate-300">
            Punya pertanyaan lain yang belum terjawab di sini?
          </span>
          <a
            href={`https://wa.me/${landingData.brand.whatsappNumber}?text=${landingData.brand.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline"
          >
            Hubungi Tim Dukungan Kami &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
