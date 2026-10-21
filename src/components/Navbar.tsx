"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { landingData } from "@/data/landingData";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${landingData.brand.whatsappNumber}?text=${landingData.brand.whatsappMessage}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3.5 shadow-lg shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group transition"
            aria-label="Kembali ke beranda NexusFlow"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                {landingData.brand.name}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1 hidden sm:block">
                Automate & Scale
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {landingData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-indigo-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition flex items-center gap-1.5 text-xs font-medium"
              title="Konsultasi WhatsApp Cepat"
              id="navbar-wa-btn"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
              id="navbar-cta-btn"
            >
              <span>Uji Coba Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 transition"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl glass-panel p-5 border border-white/10 bg-slate-900/95 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {landingData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-indigo-400 text-base font-medium transition"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-slate-800 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                id="mobile-drawer-cta-btn"
              >
                <span>Mulai Uji Coba Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium text-sm flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
