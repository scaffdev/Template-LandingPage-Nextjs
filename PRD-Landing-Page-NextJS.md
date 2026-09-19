# PRD: Landing Page Sederhana dengan Next.js

## 1. Ringkasan
Dokumen ini mendefinisikan kebutuhan untuk membangun sebuah landing page sederhana namun mengikuti best practice modern, menggunakan Next.js (App Router). Landing page ini bertujuan untuk memperkenalkan produk/layanan, mendorong konversi (sign up, kontak, atau pembelian), dan memberikan pengalaman yang cepat serta ramah SEO.

## 2. Latar Belakang & Tujuan
- **Masalah**: Belum ada halaman terpusat yang menjelaskan produk/layanan secara ringkas dan mengarahkan pengunjung ke aksi tertentu (CTA).
- **Tujuan Bisnis**:
  - Meningkatkan awareness terhadap produk/layanan.
  - Mendorong konversi (leads, sign up, pembelian, atau kontak).
  - Membangun kredibilitas melalui tampilan profesional dan cepat diakses.
- **Tujuan Teknis**:
  - Membangun landing page dengan performa tinggi (Core Web Vitals baik).
  - Kode yang mudah di-maintain dan scalable untuk pengembangan lanjutan.

## 3. Target Pengguna
- Calon pelanggan / pengunjung yang datang dari iklan, media sosial, atau pencarian organik.
- Perangkat: mobile-first (asumsikan mayoritas trafik dari mobile), tetap optimal di desktop.

## 4. Scope

### 4.1 In Scope
- Single-page landing page (1 halaman, bisa multi-section).
- Section umum:
  1. **Navbar** — logo, menu anchor link, CTA button.
  2. **Hero Section** — headline, sub-headline, CTA utama, visual/ilustrasi.
  3. **Features/Benefits Section** — 3–6 poin keunggulan produk/layanan.
  4. **Social Proof** — testimoni, logo klien, atau rating.
  5. **How It Works / Cara Kerja** (opsional, jika relevan).
  6. **Pricing** (opsional, jika produk berbayar).
  7. **FAQ Section** — pertanyaan umum.
  8. **CTA Section (final)** — ajakan bertindak sebelum footer.
  9. **Footer** — link, sosial media, copyright.
- Form kontak/sign up sederhana (opsional, tergantung kebutuhan CTA).
- Responsive design (mobile, tablet, desktop).
- SEO dasar (meta tags, Open Graph, sitemap, robots.txt).
- Analytics dasar (Google Analytics/Vercel Analytics).

### 4.2 Out of Scope
- Autentikasi user / dashboard.
- CMS dinamis (bisa jadi fase berikutnya jika dibutuhkan).
- Multi-language (kecuali diminta di kemudian hari).
- E-commerce/payment gateway penuh.

## 5. Tech Stack (Best Practice)

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR/SSG, performa, SEO friendly |
| Bahasa | TypeScript | Type-safety, mengurangi bug |
| Styling | Tailwind CSS | Cepat, konsisten, mudah maintain |
| Komponen UI | shadcn/ui (opsional) | Komponen accessible & reusable |
| Font | next/font | Optimasi loading font otomatis |
| Gambar | next/image | Optimasi gambar otomatis (lazy load, resize) |
| Form Handling | React Hook Form + Zod | Validasi form yang robust |
| Deployment | Vercel | Native support Next.js, edge network |
| Analytics | Vercel Analytics / GA4 | Tracking perilaku pengunjung |
| Linting/Formatting | ESLint + Prettier | Konsistensi kode |

## 6. Functional Requirements

| ID | Requirement | Prioritas |
|---|---|---|
| FR-1 | Landing page dapat diakses via satu URL utama (`/`) | Must |
| FR-2 | Setiap CTA mengarahkan ke tujuan yang jelas (form, WhatsApp, link eksternal, dll) | Must |
| FR-3 | Form kontak/sign up melakukan validasi input di client-side | Should |
| FR-4 | Navigasi menu (anchor link) smooth scroll ke section terkait | Should |
| FR-5 | Halaman dapat menampilkan konten dinamis dasar (misal: harga, testimoni) via config/data lokal (JSON/TS) | Could |
| FR-6 | Tersedia halaman 404 custom | Could |

## 7. Non-Functional Requirements

### 7.1 Performance
- Skor Lighthouse minimal **90+** untuk Performance, Accessibility, Best Practices, dan SEO.
- Gunakan `next/image` dan `next/font` untuk optimasi otomatis.
- Static Generation (SSG) untuk halaman landing (tidak perlu SSR karena konten statis).

### 7.2 SEO
- Meta title & description dinamis via `generateMetadata` (App Router).
- Open Graph & Twitter Card tags untuk preview media sosial.
- `sitemap.xml` dan `robots.txt` otomatis (fitur bawaan Next.js).
- Struktur heading semantik (`h1` hanya satu per halaman, hierarki `h2`/`h3` konsisten).

### 7.3 Accessibility (a11y)
- Kontras warna sesuai WCAG AA.
- Semua gambar punya `alt` text.
- Elemen interaktif dapat diakses via keyboard.
- Gunakan HTML semantik (`<nav>`, `<main>`, `<section>`, `<footer>`).

### 7.4 Responsiveness
- Breakpoint minimal: mobile (< 640px), tablet (640–1024px), desktop (> 1024px).
- Desain mobile-first menggunakan utility Tailwind (`sm:`, `md:`, `lg:`).

### 7.5 Maintainability
- Struktur folder rapi mengikuti konvensi Next.js App Router:
  ```
  /app
    /page.tsx
    /layout.tsx
    /components
      /Navbar.tsx
      /Hero.tsx
      /Features.tsx
      /Testimonials.tsx
      /Pricing.tsx
      /FAQ.tsx
      /Footer.tsx
    /lib
    /public
  ```
- Komponen kecil, reusable, dan punya tanggung jawab tunggal (single responsibility).
- Data konten (teks, testimoni, FAQ) dipisah dalam file config/data agar mudah diubah tanpa menyentuh logic komponen.

### 7.6 Security
- Validasi input form di client & (jika ada backend/API route) di server.
- Gunakan environment variable (`.env.local`) untuk kredensial/API key, jangan hardcode.

## 8. Design Guidelines
- Konsisten dalam penggunaan warna brand (primary, secondary, accent).
- Tipografi jelas: maksimal 2 jenis font (heading & body).
- Spacing konsisten menggunakan skala Tailwind (4, 8, 16, 24, 32px, dst).
- CTA button harus menonjol secara visual (warna kontras, ukuran cukup besar).
- Gunakan whitespace yang cukup agar halaman tidak terasa padat.

## 9. Success Metrics
- **Conversion rate** CTA (klik/submit form) — target ditentukan sesuai goal bisnis.
- **Bounce rate** rendah (< 50% sebagai baseline awal).
- **Page load time** < 2.5 detik (LCP).
- **Lighthouse score** 90+ di semua kategori.

## 10. Timeline (Estimasi)

| Fase | Deliverable | Estimasi Waktu |
|---|---|---|
| Setup Project | Inisialisasi Next.js, Tailwind, struktur folder | 0.5 hari |
| Desain/Wireframe | Layout section utama (bisa low-fidelity) | 1 hari |
| Development | Implementasi semua section & komponen | 2–3 hari |
| Optimasi | SEO, performance, accessibility check | 0.5–1 hari |
| Testing & QA | Cross-browser, responsive testing | 0.5 hari |
| Deployment | Deploy ke Vercel + domain setup | 0.5 hari |

**Total estimasi**: ± 5–7 hari kerja (tergantung kompleksitas konten & jumlah revisi).

## 11. Risiko & Asumsi
- **Asumsi**: Konten (copy, gambar, testimoni) disediakan oleh pemilik produk atau dibuat bersama saat development.
- **Risiko**: Jika scope bertambah (misal butuh CMS atau multi-page), estimasi waktu perlu direvisi.

## 12. Pertanyaan Terbuka (untuk klarifikasi lebih lanjut)
- Apa nama produk/brand dan siapa target audiens spesifiknya?
- Apa CTA utama yang diinginkan (isi form, WhatsApp, daftar akun, beli produk)?
- Apakah sudah ada aset desain (logo, warna brand, foto) atau perlu dibuat dari nol?
- Apakah perlu integrasi tools tertentu (email marketing, CRM, payment)?
