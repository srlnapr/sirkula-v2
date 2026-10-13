import React from 'react';

export default function AboutSection() {
  const pillars = [
    {
      icon: 'cycle',
      title: 'Prinsip Ekonomi Sirkular Tertutup',
      desc: 'Mengalihkan limbah organik ampas kopi dari Tempat Pembuangan Akhir (TPA) menjadi input produktif bernilai ekonomi tinggi dalam siklus nutrisi biologi tanpa sisa.',
      badge: 'Zero Waste to Landfill',
      badgeColor: 'bg-secondary-container text-on-secondary-container',
    },
    {
      icon: 'compost',
      title: 'Valorasi Ampas Kopi Specialty',
      desc: 'Ampas kopi kaya akan selulosa, mineral esensial, dan nitrogen organik yang secara alami sangat cocok sebagai substrat pemacu miselium jamur tiram.',
      badge: 'Nutrisi Kaya Nitrogen',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
    {
      icon: 'handshake',
      title: 'Simbiosis Kota & Desa',
      desc: 'Menghubungkan puluhan kedai kopi urban di perkotaan dengan komunitas pembudidaya jamur pedesaan, menciptakan rantai pasok inklusif yang saling menguntungkan.',
      badge: 'Dampak Sosial & Ekonomi',
      badgeColor: 'bg-primary-fixed/50 text-primary',
    },
  ];

  return (
    <section id="tentang" className="w-full bg-surface-container-low py-20 scroll-mt-28 border-y border-primary/5">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span>♻️ TENTANG SIRKULA</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-semibold tracking-tight">
              Menghubungkan Limbah Perkotaan dengan Ketahanan Pangan Lokal
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Sirkula adalah platform orkestrasi ekonomi sirkular B2B yang mentransformasi limbah ampas kopi harian (*spent coffee grounds*) menjadi media tanam baglog jamur tiram berkualitas tinggi, terjangkau, dan berkelanjutan.
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl border border-primary/10 shadow-xs max-w-sm">
            <span className="material-symbols-outlined text-[32px] text-secondary">eco</span>
            <div className="text-xs">
              <p className="font-bold text-primary">Inisiatif Bio-Sirkular 100% Indonesia</p>
              <p className="text-on-surface-variant mt-0.5">Berpusat di Hub Lembang &amp; melayani ekosistem Bandung Raya.</p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-7 rounded-3xl border border-primary/5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/40 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full font-label-sm text-[11px] font-bold ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-xs font-semibold text-secondary">
                <span>Pelajari prinsip sirkular</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Problem vs Solution Callout Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-primary text-on-primary shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-wider">
              Tantangan Nyata
            </span>
            <h4 className="font-headline-md text-headline-md text-white font-bold">
              Limbah Kopi di TPA Menghasilkan Gas Metana 25x Lebih Berbahaya dari CO₂
            </h4>
            <p className="text-body-sm text-primary-fixed-dim leading-relaxed">
              Sementara itu, pembudidaya jamur tiram di pedesaan kesulitan mendapatkan serbuk gergaji kayu yang harganya kian melambung. Sirkula menyelesaikan kedua masalah ini sekaligus melalui satu ekosistem terpadu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="#katalog"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim font-label-md text-label-md font-bold text-center transition-all shadow-sm"
            >
              Lihat Katalog Baglog
            </a>
            <a
              href="#alur"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md font-semibold text-center transition-all border border-white/20"
            >
              Lihat Alur Kerja
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
