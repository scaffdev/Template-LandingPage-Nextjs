# 🚀 NexusFlow — Template SaaS & Product Landing Page (Next.js 16)

Template landing page SaaS (*Software-as-a-Service*), aplikasi web, atau peluncuran produk digital berkonversi tinggi berbasis **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS**. Didesain dengan estetika modern bergaya *dark mode* elegan (*glassmorphism*, gradient halus, interaksi micro-animation), section lengkap, dan struktur data yang modular.

---

## ✨ Fitur & Section Lengkap

### 🎯 Komponen Landing Page Berkonversi Tinggi
- **Hero Section**: Headline persuasif dengan teks gradient, badge pengumuman rilis, dua tombol CTA utama, dan visualisasi mockup dashboard interaktif.
- **Social Proof**: Barisan logo mitra/klien terpercaya dengan efek grayscale-hover.
- **Fitur Unggulan (Bento Grid)**: Presentasi kapabilitas produk dengan kartu interaktif, ikon tematik, dan daftar fitur mendalam.
- **Cara Kerja (How It Works)**: Alur 3-langkah mudah dipahami pelanggan untuk memulai penggunaan produk.
- **Tabel Harga Fleksibel (Pricing)**: Tiga tingkat paket (Starter, Pro, Enterprise) dengan badge "Paling Populer", rincian fitur tercentang, dan tombol pemilihan paket.
- **Testimoni & Skor Klien**: Ulasan pengguna nyata dengan foto avatar, jabatan perusahaan, rating bintang, dan statistik dampak terukur.
- **Accordion FAQ**: Tanya-jawab umum interaktif yang ramah pengguna untuk menjawab keraguan prospek.
- **CTA Final Banner**: Penutup persuasif berlatar gradient memukau untuk memaksimalkan rasio konversi pendaftaran.
- **Interactive Contact Modal**: Modal popup "Hubungi Sales / Tim" dengan validasi input yang otomatis mengarahkan ke pembuatan pesan email terformat (`mailto:`).
- **Footer Navigasi Penuh**: Direktori tautan produk, ekosistem, sumber daya, legalitas, dan status server.

### ⚡ Keunggulan Teknis
- **Semua Konten di 1 File Data**: Seluruh teks, daftar fitur, harga, FAQ, dan testimoni terpusat di `src/data/landingData.ts`. Kustomisasi landing page untuk produk apa pun cukup mengedit satu file tanpa menyentuh kode JSX.
- **Zero Heavy Animation Dependency**: Menggunakan animasi murni CSS & Tailwind transitions untuk memastikan performa skor 100 di Google PageSpeed Insights.
- **SEO & Social Share Ready**: Auto-generated `sitemap.ts`, `robots.ts`, Open Graph / Twitter metadata dinamis melalui `NEXT_PUBLIC_SITE_URL`.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.8 (App Router)
- **UI & Styling**: React 19, Tailwind CSS 4, Lucide React Icons
- **Language**: TypeScript 5
- **Deployment**: Zero-config di Vercel, Netlify, atau Node.js VPS

---

## 📁 Struktur Folder Utama

```
├── public/                     # Aset gambar, ilustrasi, favicon
├── src/
│   ├── app/
│   │   ├── globals.css         # Styling global & utilitas glassmorphism
│   │   ├── layout.tsx          # Master layout dengan font loader & SEO metadata
│   │   ├── page.tsx            # Halaman landing page terintegrasi
│   │   ├── robots.ts           # Konfigurasi perayapan mesin pencari
│   │   └── sitemap.ts          # Generator sitemap XML otomatis
│   ├── components/
│   │   ├── ContactModal.tsx    # Modal formulir kontak sales
│   │   ├── CTASection.tsx      # Section banner pendaftaran penutup
│   │   ├── FAQ.tsx             # Accordion pertanyaan umum
│   │   ├── Features.tsx        # Grid fitur produk utama
│   │   ├── Footer.tsx          # Footer informatif
│   │   ├── Hero.tsx            # Header & mockup visual utama
│   │   ├── HowItWorks.tsx      # Penjelasan langkah kerja
│   │   ├── Navbar.tsx          # Navigasi sticky dengan efek glassmorphism
│   │   ├── Pricing.tsx         # Kartu paket langganan
│   │   ├── SocialProof.tsx     # Barisan logo kepercayaan
│   │   └── Testimonials.tsx    # Kartu ulasan pelanggan
│   └── data/
│       └── landingData.ts      # PUSAT KONTEN: Ubah seluruh copy website di sini
├── next.config.ts              # Konfigurasi Next.js & HTTP Security Headers
└── scaff.template.json         # Manifest integrasi Scaffdev
```

---

## 🚀 Panduan Instalasi Cepat

### Prasyarat
- Node.js >= 20.9.0
- npm / pnpm / yarn

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/scaffdev/Template-LandingPage-Nextjs.git
cd Template-LandingPage-Nextjs

# 2. Install dependensi
npm ci

# 3. Setup Environment Variables
cp .env.example .env.local

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk membuat build produksi:
```bash
npm run build
npm run start
```

---

## ⚙️ Variabel Environment (`.env.local`)

| Variabel | Deskripsi | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domain landing page untuk OpenGraph, Twitter card, dan sitemap | `https://example.com` |

---

## 🎨 Panduan Menyesuaikan Konten Produk Anda

Semua teks, harga, dan fitur tersimpan secara rapi dalam `src/data/landingData.ts`:
- **Mengganti Nama & Tagline Produk**: Ubah objek `siteConfig`.
- **Menyesuaikan Paket Harga**: Ubah array `pricingPlans` (nama paket, harga bulanan, fitur tercentang).
- **Menambah Pertanyaan FAQ**: Tambahkan item baru pada array `faqItems`.
- **Menyesuaikan Fitur**: Ubah isi array `features`.

---

## 🛡️ Keamanan & Hardening

- **Security Headers**: `next.config.ts` telah dikonfigurasi dengan header keamanan lengkap:
  - `Content-Security-Policy` (CSP)
  - `Strict-Transport-Security` (HSTS)
  - `X-Frame-Options: SAMEORIGIN` (Pencegahan clickjacking)
  - `X-Content-Type-Options: nosniff` (Pencegahan MIME spoofing)
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Transparent Lead Capture**: Modal kontak tidak menyimpan data sembunyi-sembunyi, melainkan secara transparan membuka klien email pengunjung (`mailto:`) dengan subjek dan isi pesan yang terisi otomatis.

---

## 🧪 Verifikasi & Pengujian

Untuk panduan instruksi otomatis bagi AI agent testing, lihat file [`VERIFY.md`](./VERIFY.md).

```bash
# Build aplikasi Next.js
npm run build

# Validasi linter TypeScript & ESLint
npm run lint

# Audit dependensi keamanan
npm audit --omit=dev
```

---

## 📄 Lisensi

Didistribusikan di bawah lisensi MIT. Lihat [`LICENSE`](./LICENSE) untuk rincian lengkap. Hak Cipta © 2026 Scaffdev.
