import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#090d16] text-white px-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative text-center max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto mb-2">
          <Zap className="w-8 h-8" />
        </div>

        <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 font-mono tracking-widest block">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Mohon maaf, halaman atau tautan yang Anda tuju sedang tidak tersedia atau telah dipindahkan ke tautan baru.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
