import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nexusflow.id"),
  title: "NexusFlow — Platform Otomasi Cerdas & Workspace Bisnis Modern",
  description:
    "Tingkatkan efisiensi tim hingga 10x lebih cepat dengan NexusFlow. Platform otomasi alur kerja visual, integrasi 200+ aplikasi, dan analitik cerdas tanpa ribet.",
  keywords: [
    "landing page",
    "otomasi bisnis",
    "workflow automation",
    "software produktivitas",
    "next.js landing page",
    "integrasi whatsapp official",
    "crm indonesia",
  ],
  authors: [{ name: "NexusFlow Team" }],
  creator: "NexusFlow Indonesia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nexusflow.id",
    title: "NexusFlow — Otomasi Cerdas Tanpa Batas untuk Bisnis Anda",
    description:
      "Tingkatkan efisiensi kerja tim dengan integrasi otomatisasi menyeluruh. Coba gratis 14 hari tanpa kartu kredit.",
    siteName: "NexusFlow",
    images: [
      {
        url: "/images/dashboard-preview.jpg",
        width: 1200,
        height: 630,
        alt: "NexusFlow Modern Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusFlow — Platform Otomasi Cerdas & Workspace Bisnis Modern",
    description:
      "Otomasi alur kerja tim 10x lebih cepat. Integrasi 200+ platform cloud & WhatsApp.",
    images: ["/images/dashboard-preview.jpg"],
    creator: "@nexusflow_id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
