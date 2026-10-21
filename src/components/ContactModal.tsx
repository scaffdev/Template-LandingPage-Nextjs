"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, MessageSquare, Sparkles, AlertCircle } from "lucide-react";
import { landingData } from "@/data/landingData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export default function ContactModal({ isOpen, onClose, defaultPlan }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: defaultPlan || "Professional",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultPlan) {
      setFormData((prev) => ({ ...prev, plan: defaultPlan }));
    }
  }, [defaultPlan]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!formData.email.trim()) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon/WhatsApp wajib diisi.";
    } else if (!/^[0-9+-\s]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Nomor telepon minimal 8 digit angka valid.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent("Kontak dari website");
    const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan: ${formData.message || "—"}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      plan: "Professional",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  const whatsappUrl = `https://wa.me/${landingData.brand.whatsappNumber}?text=${landingData.brand.whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl border border-white/15 bg-slate-900/95 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Subtle decorative background gradient */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Tutup modal"
          id="close-contact-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">Permintaan Terkirim!</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
              Terima kasih <strong className="text-white">{formData.name}</strong>. Tim konsultan NexusFlow akan segera
              menghubungi Anda melalui WhatsApp ({formData.phone}) dalam waktu maksimal 15 menit kerja.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm font-medium hover:bg-slate-700 transition"
              >
                Tutup Jendela
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4" />
                Chat WhatsApp Langsung
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Akses Eksklusif & Demo
              </div>
              <h2 id="contact-modal-title" className="text-2xl font-bold text-white tracking-tight">
                Mulai Uji Coba Gratis
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Isi formulir singkat ini untuk mengaktifkan uji coba gratis 14 hari atau jadwalkan konsultasi khusus.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Lengkap *</label>
                <input
                  type="text"
                  placeholder="Contoh: Rian Anggara"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border ${
                    errors.name ? "border-rose-500 focus:ring-rose-500" : "border-slate-700 focus:border-indigo-500"
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition`}
                  id="modal-input-name"
                />
                {errors.name && (
                  <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Bisnis *</label>
                  <input
                    type="email"
                    placeholder="nama@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border ${
                      errors.email ? "border-rose-500" : "border-slate-700 focus:border-indigo-500"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition`}
                    id="modal-input-email"
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nomor WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border ${
                      errors.phone ? "border-rose-500" : "border-slate-700 focus:border-indigo-500"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition`}
                    id="modal-input-phone"
                  />
                  {errors.phone && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Perusahaan / Tim</label>
                  <input
                    type="text"
                    placeholder="Contoh: PT Inovasi Maju"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    id="modal-input-company"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Pilihan Paket</label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    id="modal-select-plan"
                  >
                    <option value="Starter">Starter (Rp 159k/bln)</option>
                    <option value="Professional">Professional (Rp 399k/bln) - Populer</option>
                    <option value="Enterprise">Enterprise (Kustom)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Kebutuhan / Pesan Singkat (Opsional)</label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan proses bisnis yang ingin diotomasi..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                  id="modal-input-message"
                />
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  id="modal-submit-btn"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Memproses Pendaftaran...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim & Aktifkan Uji Coba
                    </>
                  )}
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-700/60"></div>
                  <span className="flex-shrink mx-3 text-slate-500 text-xs uppercase font-medium">atau konsultasi via</span>
                  <div className="flex-grow border-t border-slate-700/60"></div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-medium text-sm flex items-center justify-center gap-2 transition"
                  id="modal-whatsapp-quick-btn"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Hubungi Admin WhatsApp Resmi
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
