import React from 'react';

export default function ImpactSdgSection() {
  const stats = [
    {
      value: '113.4 Ton',
      label: 'Ampas Kopi Dikelola / Tahun',
      sublabel: 'Dialihkan 100% dari TPA Sarimukti & Jelekong',
      icon: 'recycling',
      color: 'text-secondary',
      bg: 'bg-secondary-fixed/30',
    },
    {
      value: '136.1 Ton',
      label: 'Estimasi Reduksi Emisi CO₂e',
      sublabel: 'Pencegahan emisi gas metana (CH₄) berbahaya',
      icon: 'cloud_done',
      color: 'text-primary',
      bg: 'bg-primary-fixed/40',
    },
    {
      value: '94.500 Unit',
      label: 'Substrat Baglog Tersalurkan',
      sublabel: 'Menggantikan 47.2 ton serbuk kayu tebangan',
      icon: 'potted_plant',
      color: 'text-secondary',
      bg: 'bg-secondary-container',
    },
    {
      value: 'Rp 70.8 Juta',
      label: 'Akumulasi Hemat Biaya Petani',
      sublabel: 'Efisiensi input Rp 750/unit dibanding harga pasar',
      icon: 'savings',
      color: 'text-primary',
      bg: 'bg-secondary-fixed/40',
    },
  ];

  return (
    <section className="w-full max-w-[1360px] mx-auto px-margin-mobile md:px-margin py-20 scroll-mt-28" id="dampak-sdg">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
        <span className="font-label-sm text-label-sm px-4 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed uppercase tracking-wider font-bold">
          📊 STATISTIK DAMPAK LINGKUNGAN
        </span>
        <h2 className="font-headline-xl text-headline-xl text-primary font-semibold">
          Dampak Terukur &amp; Kontribusi Nyata terhadap Emisi Karbon
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Setiap kilogram ampas kopi yang dialihkan dari Tempat Pembuangan Akhir (TPA) menciptakan efek riak positif yang terukur bagi iklim dan ketahanan pangan komunitas lokal di Jawa Barat.
        </p>
      </div>

      {/* 4 Quantitative Impact Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest p-6 rounded-3xl border border-primary/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
          >
            <div className="flex items-center justify-between pb-4">
              <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center ${s.color}`}>
                <span className="material-symbols-outlined text-[24px]">{s.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-outline font-mono">BANDUNG HUB</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg font-bold text-primary font-mono tracking-tight">
                {s.value}
              </div>
              <h3 className="font-label-md text-label-md font-bold text-on-surface mt-1">
                {s.label}
              </h3>
              <p className="font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-snug">
                {s.sublabel}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-primary/5 flex items-center gap-1.5 text-[11px] text-secondary font-semibold">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Terverifikasi Protokol GHG</span>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology Callout Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-primary/10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px]">calculate</span>
            <h4 className="font-label-md text-label-md font-bold text-primary">
              Metodologi Estimasi Pengurangan Emisi Metana (CH₄ Avoidance)
            </h4>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Ampas kopi yang membusuk di tumpukan sampah TPA Sarimukti terurai secara anaerobik dan menghasilkan gas metana (CH₄) dengan faktor pemanasan global 28x lebih tinggi daripada CO₂. Berdasarkan IPCC Tier-1 Waste Guidelines, setiap <strong>1 kg ampas kopi basah yang dihindarkan dari TPA mencegah timbulan 1,2 kg CO₂e emisi gas rumah kaca</strong> ke atmosfer.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <div className="px-4 py-2.5 rounded-2xl bg-surface-container-lowest border border-primary/10 text-center">
            <span className="text-[10px] text-outline uppercase tracking-wider block font-bold">Faktor Konversi</span>
            <span className="text-primary font-mono font-bold text-sm">1 kg ampas = 1.2 kg CO₂e</span>
          </div>
        </div>
      </div>

      {/* 3 SDG Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {/* SDG 12 */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-primary/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[26px]">autorenew</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline font-mono font-bold">SDG 12</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
              Konsumsi &amp; Produksi Bertanggung Jawab
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Mencegah pemborosan bahan organik lewat pendekatan upcycling sirkular. Memutus rantai limbah linier industri kafe perkotaan agar kembali menjadi input agrikultur produktif.
            </p>
          </div>
          <div className="pt-6 border-t border-primary/5 mt-6">
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
              Target: Zero Landfill Organik
            </span>
          </div>
        </div>

        {/* SDG 13 */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-primary/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed/50 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[26px]">eco</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline font-mono font-bold">SDG 13</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
              Penanganan Perubahan Iklim
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ampas kopi yang membusuk di bawah timbunan sampah melepaskan gas metana (CH₄) 28x lebih berbahaya dibanding CO₂. Dengan mengeringkannya untuk baglog jamur, pembentukan gas metana dicegah sejak sumber.
            </p>
          </div>
          <div className="pt-6 border-t border-primary/5 mt-6">
            <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
              Metode: Methane Avoidance Protocol
            </span>
          </div>
        </div>

        {/* SDG 8 */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-primary/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[26px]">trending_up</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline font-mono font-bold">SDG 8</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
              Pekerjaan Layak &amp; Pertumbuhan Ekonomi
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Menghadirkan bahan baku berkualitas dengan marjin laba panen lebih sehat bagi kelompok tani jamur kecil-menengah, mendorong kemandirian pangan dan regenerasi petani muda lokal di Jawa Barat.
            </p>
          </div>
          <div className="pt-6 border-t border-primary/5 mt-6">
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
              Dampak: +20% Rata-rata Marjin Petani
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

