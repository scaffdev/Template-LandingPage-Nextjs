export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface PartnerLogo {
  name: string;
  badge: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  details: string[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  ctaText: string;
  features: string[];
  limitations?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
  metric?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LandingData {
  brand: {
    name: string;
    tagline: string;
    badge: string;
    whatsappNumber: string;
    whatsappMessage: string;
    supportEmail: string;
  };
  navigation: NavItem[];
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: {
      rating: number;
      totalReviews: string;
      avatars: string[];
      label: string;
    };
  };
  metrics: MetricItem[];
  partners: PartnerLogo[];
  features: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDescription: string;
    items: FeatureItem[];
  };
  howItWorks: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDescription: string;
    steps: StepItem[];
  };
  pricing: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDescription: string;
    discountBadge: string;
    plans: PricingPlan[];
  };
  testimonials: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDescription: string;
    items: TestimonialItem[];
  };
  faq: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDescription: string;
    items: FAQItem[];
  };
  ctaBanner: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    secondaryButtonText: string;
    guaranteeText: string;
  };
  footer: {
    description: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    socials: { name: string; href: string; icon: string }[];
    copyright: string;
  };
}

export const landingData: LandingData = {
  brand: {
    name: "NexusFlow",
    tagline: "Otomasi Cerdas & Workspace Terintegrasi",
    badge: "Next-Gen Productivity Suite",
    whatsappNumber: "6281234567890",
    whatsappMessage: "Halo%20NexusFlow,%20saya%20tertarik%20untuk%20mencoba%20demo%20dan%20berkonsultasi.",
    supportEmail: "hello@nexusflow.id",
  },
  navigation: [
    { label: "Fitur", href: "#features" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Harga", href: "#pricing" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "✨ NexusFlow 2.0 Kini Telah Hadir — Coba Gratis 14 Hari",
    titleStart: "Tingkatkan Efisiensi Bisnis Anda dengan",
    titleHighlight: "Otomasi Cerdas Tanpa Batas",
    titleEnd: "dalam Satu Platform.",
    description:
      "NexusFlow menyatukan manajemen alur kerja, integrasi data real-time, dan analitik cerdas untuk membantu tim Anda bekerja 10x lebih cepat tanpa kerumitan teknis.",
    primaryCta: "Mulai Uji Coba Gratis",
    secondaryCta: "Konsultasi via WhatsApp",
    socialProof: {
      rating: 4.9,
      totalReviews: "2,500+",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      ],
      label: "Dipercaya oleh lebih dari 500+ perusahaan bertumbuh pesat",
    },
  },
  metrics: [
    { value: "99.99%", label: "Uptime SLA", description: "Infrastruktur cloud berstandar enterprise" },
    { value: "10x", label: "Lebih Cepat", description: "Percepatan eksekusi tugas harian tim" },
    { value: "2.8M+", label: "Workflow Selesai", description: "Tugas otomatis tereksekusi tanpa kendala" },
    { value: "4.9 / 5", label: "Kepuasan Klien", description: "Berdasarkan ulasan terverifikasi pengguna" },
  ],
  partners: [
    { name: "FinTech Prime", badge: "Fintech" },
    { name: "LogisTrack Global", badge: "Supply Chain" },
    { name: "CloudScale ID", badge: "SaaS Enterprise" },
    { name: "RetailKu Nusantara", badge: "E-Commerce" },
    { name: "MedikaTech", badge: "Healthcare" },
  ],
  features: {
    sectionBadge: "Fitur Unggulan",
    sectionTitle: "Didesain untuk Performa Tinggi & Skalabilitas",
    sectionDescription:
      "Setiap modul dibangun dengan fokus pada kecepatan, keamanan tingkat tinggi, dan pengalaman pengguna yang intuitif.",
    items: [
      {
        id: "feat-1",
        title: "Visual Workflow Builder",
        description: "Rancang alur kerja kompleks dengan drag-and-drop sederhana tanpa perlu menulis kode rumit.",
        iconName: "Zap",
        highlight: "No-Code & Low-Code",
        details: ["500+ template siap pakai", "Triggers & Actions fleksibel", "Debugger real-time visual"],
      },
      {
        id: "feat-2",
        title: "Integrasi 200+ Ekosistem API",
        description: "Hubungkan instan ke WhatsApp Business, Google Workspace, Slack, Salesforce, hingga payment gateway lokal.",
        iconName: "Share2",
        highlight: "Sinkronisasi Real-time",
        details: ["Webhook dua arah", "Transformasi payload otomatis", "Retry mechanism toleransi tinggi"],
      },
      {
        id: "feat-3",
        title: "Analitik & Monitoring Cerdas",
        description: "Pantau metrik konversi, waktu respon, dan efisiensi operasional dengan dasbor prediktif real-time.",
        iconName: "BarChart3",
        highlight: "AI-Driven Insights",
        details: ["Peringatan anomali instan", "Ekspor laporan ke PDF/Excel", "Dasbor kustom tim"],
      },
      {
        id: "feat-4",
        title: "Keamanan Standar Perbankan",
        description: "Data sensitif terenkripsi end-to-end dengan kepatuhan standar ISO 27001, GDPR, dan enkripsi AES-256.",
        iconName: "ShieldCheck",
        highlight: "SOC 2 & ISO Ready",
        details: ["Role-based access control (RBAC)", "Audit log aktivitas tak terbatas", "Penyimpanan data lokal/cloud"],
      },
      {
        id: "feat-5",
        title: "Kolaborasi Tim Multidimensi",
        description: "Berbagi workspace, delegasikan wewenang, dan diskusikan pipeline langsung di dalam konteks pekerjaan.",
        iconName: "Users",
        highlight: "Ruang Kerja Tim",
        details: ["Komentar berulir kontekstual", "Histori revisi versi alur kerja", "Sinkronisasi status live"],
      },
      {
        id: "feat-6",
        title: "Otomasi WhatsApp & Multi-Channel",
        description: "Broadcast pesan terpersonalisasi dan auto-responder berbasis AI langsung ke jutaan prospek dan pelanggan.",
        iconName: "MessageSquare",
        highlight: "Tingkat Buka 98%",
        details: ["Template pesan resmi", "Routing otomatis ke staf terkait", "Pelacakan klik dan respon"],
      },
    ],
  },
  howItWorks: {
    sectionBadge: "Cara Kerja",
    sectionTitle: "Mulai Otomasi Hanya dalam 3 Langkah Sederhana",
    sectionDescription: "Tidak butuh waktu berminggu-minggu. Deploy alur kerja pertama Anda dalam hitungan menit.",
    steps: [
      {
        step: "01",
        title: "Hubungkan Akun & Data Anda",
        description: "Koneksikan platform favorit Anda seperti email, database, atau CRM dalam beberapa klik via autentikasi aman.",
        iconName: "Link2",
      },
      {
        step: "02",
        title: "Pilih / Susun Alur Kerja",
        description: "Gunakan template rekomendasi AI atau sesuaikan trigger dan kondisi aksi sesuai spesifikasi proses bisnis Anda.",
        iconName: "Sliders",
      },
      {
        step: "03",
        title: "Jalankan & Pantau Pertumbuhan",
        description: "Aktifkan otomatisasi dan amati tugas harian terselesaikan secara akurat sementara tim Anda fokus berinovasi.",
        iconName: "Sparkles",
      },
    ],
  },
  pricing: {
    sectionBadge: "Paket & Investasi",
    sectionTitle: "Pilihan Harga Transparan Sesuai Skala Anda",
    sectionDescription: "Mulai dengan gratis dan upgrade kapan saja seiring bertumbuhnya volume bisnis Anda.",
    discountBadge: "Hemat 20% Bayar Tahunan",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Cocok untuk perorangan, freelancer, atau bisnis pemula yang ingin mulai mengotomasi tugas rutin.",
        monthlyPrice: 199000,
        yearlyPrice: 159000,
        popular: false,
        ctaText: "Mulai Paket Starter",
        features: [
          "Hingga 5 workflow aktif",
          "1.000 task eksekusi / bulan",
          "Integrasi 10+ platform dasar",
          "Update frekuensi interval 15 menit",
          "Dukungan komunitas & email",
          "Histori aktivitas 30 hari",
        ],
        limitations: ["Belum termasuk integrasi WhatsApp Official", "Dukungan telepon khusus"],
      },
      {
        id: "pro",
        name: "Professional",
        description: "Pilihan favorit tim bertumbuh yang membutuhkan integrasi penuh, kecepatan maksimal, dan analitik tajam.",
        monthlyPrice: 499000,
        yearlyPrice: 399000,
        popular: true,
        ctaText: "Coba Pro Gratis 14 Hari",
        features: [
          "Workflow aktif tanpa batas",
          "25.000 task eksekusi / bulan",
          "Integrasi 200+ platform lengkap",
          "Eksekusi instan (Real-time trigger)",
          "Integrasi WhatsApp Official API",
          "Dukungan prioritas 24/7 via WhatsApp",
          "Analitik lanjutan & ekspor custom",
          "Multi-user (hingga 10 anggota tim)",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "Solusi kustom untuk perusahaan besar dengan regulasi ketat, volume jutaan transaksi, dan SLA terjamin.",
        monthlyPrice: 1499000,
        yearlyPrice: 1199000,
        popular: false,
        ctaText: "Hubungi Tim Enterprise",
        features: [
          "Semua fitur di paket Professional",
          "Task volume kustom (tanpa batasan)",
          "Dedicated Server & Virtual Private Cloud",
          "Jaminan 99.99% Uptime SLA",
          "Dedicated Account Manager & Onboarding",
          "Single Sign-On (SSO / SAML)",
          "Audit log keamanan komprehensif",
          "Perjanjian tingkat layanan (NDA & SLA)",
        ],
      },
    ],
  },
  testimonials: {
    sectionBadge: "Social Proof",
    sectionTitle: "Dipercaya oleh Para Pemimpin Industri",
    sectionDescription: "Lihat bagaimana tim modern menghemat ratusan jam kerja dan meningkatkan kepuasan pelanggan mereka.",
    items: [
      {
        id: "testi-1",
        name: "Aditya Pratama",
        role: "Chief Operating Officer",
        company: "LogisTrack Global",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        content:
          "Sebelum menggunakan NexusFlow, tim kami menghabiskan lebih dari 4 jam setiap hari hanya untuk rekonsiliasi data pengiriman manual. Sekarang seluruh alur kerja berjalan otomatis tanpa kesalahan!",
        metric: "Hemat 25+ jam kerja/minggu",
      },
      {
        id: "testi-2",
        name: "Nadia Saraswati",
        role: "Head of Growth & Marketing",
        company: "RetailKu Nusantara",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        content:
          "Integrasi WhatsApp broadcast dan CRM-nya sangat luar biasa stabil. Konversi penjualan kami naik 38% dalam dua bulan pertama implementasi. Tampilan dashboard-nya juga sangat memanjakan mata.",
        metric: "+38% Konversi Penjualan",
      },
      {
        id: "testi-3",
        name: "Bambang Wijaya",
        role: "VP of Engineering",
        company: "FinTech Prime",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        content:
          "Keamanan dan reliabilitas adalah prioritas absolut kami di sektor finansial. Uptime 99.99% dan sistem enkripsi NexusFlow benar-benar teruji saat lonjakan transaksi akhir bulan.",
        metric: "99.99% Uptime Terbukti",
      },
    ],
  },
  faq: {
    sectionBadge: "Tanya Jawab",
    sectionTitle: "Pertanyaan yang Sering Diajukan",
    sectionDescription: "Punya pertanyaan seputar cara kerja, harga, atau keamanan? Temukan jawabannya di sini.",
    items: [
      {
        id: "faq-1",
        question: "Apakah saya membutuhkan keahlian coding untuk menggunakan NexusFlow?",
        answer:
          "Sama sekali tidak! NexusFlow dibangun dengan antarmuka visual drag-and-drop yang ramah pemula. Kami juga menyediakan ratusan template siap pakai. Namun bagi developer, kami tetap menyediakan opsi webhooks dan custom code jika dibutuhkan.",
      },
      {
        id: "faq-2",
        question: "Berapa lama waktu yang dibutuhkan untuk proses implementasi?",
        answer:
          "Sebagian besar pengguna kami dapat membuat dan mengaktifkan otomasi pertama mereka dalam kurun waktu kurang dari 15 menit setelah mendaftar.",
      },
      {
        id: "faq-3",
        question: "Apakah ada uji coba gratis (free trial)?",
        answer:
          "Ya! Kami memberikan akses gratis selama 14 hari dengan semua fitur Professional aktif tanpa memerlukan kartu kredit. Anda dapat menguji seluruh keunggulan sistem kami secara bebas risiko.",
      },
      {
        id: "faq-4",
        question: "Bagaimana dengan keamanan data perusahaan kami?",
        answer:
          "Keamanan data adalah komitmen nomor satu kami. Seluruh transmisi data menggunakan enkripsi TLS 1.3 dan penyimpanan data dilindungi enkripsi AES-256 tingkat perbankan. Kami tidak pernah membagikan atau menjual data Anda kepada pihak ketiga manapun.",
      },
      {
        id: "faq-5",
        question: "Bisakah saya mengubah atau membatalkan paket langganan kapan saja?",
        answer:
          "Tentu saja. Anda memiliki fleksibilitas penuh untuk upgrade, downgrade, atau membatalkan langganan kapan saja langsung melalui dashboard akun tanpa biaya pinalti.",
      },
      {
        id: "faq-6",
        question: "Apakah tim NexusFlow siap membantu integrasi sistem custom?",
        answer:
          "Tentu. Tim technical specialist kami siap mendampingi Anda melalui sesi konsultasi teknis, pelatihan staf, hingga pembuatan alur kerja custom sesuai kebutuhan spesifik bisnis Anda.",
      },
    ],
  },
  ctaBanner: {
    badge: "Siap Melipatgandakan Produktivitas?",
    title: "Mulai Otomasi Bisnis Anda Hari Ini & Rasakan Perubahannya",
    description:
      "Bergabunglah bersama ratusan bisnis inovatif yang telah menghemat ribuan jam kerja setiap bulan dengan solusi terpercaya NexusFlow.",
    buttonText: "Mulai Uji Coba Gratis 14 Hari",
    secondaryButtonText: "Jadwalkan Demo Personal",
    guaranteeText: "Tanpa kartu kredit • Setup instan 5 menit • Jaminan kepuasan 100%",
  },
  footer: {
    description:
      "NexusFlow adalah platform otomasi cerdas dan manajemen alur kerja generasi terbaru yang dirancang untuk mempercepat pertumbuhan bisnis modern.",
    columns: [
      {
        title: "Produk",
        links: [
          { label: "Fitur Unggulan", href: "#features" },
          { label: "Integrasi Ekosistem", href: "#features" },
          { label: "Paket Harga", href: "#pricing" },
          { label: "Update Rilis 2.0", href: "#" },
          { label: "Roadmap Produk", href: "#" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { label: "Tentang Kami", href: "#" },
          { label: "Karir (We're Hiring!)", href: "#" },
          { label: "Blog & Artikel", href: "#" },
          { label: "Press Kit", href: "#" },
          { label: "Kontak Tim", href: "#contact" },
        ],
      },
      {
        title: "Dukungan & Legal",
        links: [
          { label: "Pusat Bantuan", href: "#faq" },
          { label: "Dokumentasi API", href: "#" },
          { label: "Kebijakan Privasi", href: "#" },
          { label: "Syarat & Ketentuan", href: "#" },
          { label: "Status Server (99.99%)", href: "#" },
        ],
      },
    ],
    socials: [
      { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
      { name: "Twitter / X", href: "https://twitter.com", icon: "Twitter" },
      { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
      { name: "GitHub", href: "https://github.com", icon: "Github" },
    ],
    copyright: `© ${new Date().getFullYear()} NexusFlow Indonesia. Seluruh hak cipta dilindungi undang-undang.`,
  },
};
