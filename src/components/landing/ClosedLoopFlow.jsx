import React from 'react';

export default function ClosedLoopFlow() {
  const steps = [
    {
      num: '01',
      icon: 'coffee',
      title: 'Pemisahan di Bar Kafe',
      desc: 'Ampas espresso dikumpulkan dalam wadah kedap khusus antimikroba bersertifikasi Sirkula.',
    },
    {
      num: '02',
      icon: 'local_shipping',
      title: 'Penjemputan Kurir Terjadwal',
      desc: 'Kurir Sirkula menjemput bahan baku secara terjadwal setiap 48 jam menggunakan wadah kedap khusus.',
    },
    {
      num: '03',
      icon: 'science',
      title: 'Formulasi Substrat 30% Kopi',
      desc: 'Ditakar manual bersama serbuk kayu & dedak (rasio 30:50:15) lalu disterilisasi autoclave 121°C 90 menit.',
    },
    {
      num: '04',
      icon: 'nutrition',
      title: 'Panen Segar & Residu Kompos',
      desc: 'Jamur bernilai jual tinggi dipanen petani; residu baglog menjadi pupuk organik agroforestri.',
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-12 scroll-mt-28" id="alur">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              ALUR SIKLUS TERTUTUP
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mt-1">
              Transformasi Sirkular Tanpa Limbah
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full border border-primary/10 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Traceability Terverifikasi &amp; Batch Barcode Bersertifikasi
            </span>
          </div>
        </div>

        {/* Process Diagram Bento Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-surface-container-lowest p-5 rounded-2xl border border-primary/5 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm font-semibold text-primary/40 font-mono">
                  {step.num}
                </span>
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  {step.icon}
                </span>
              </div>
              <h4 className="font-title-md text-title-md text-on-surface">{step.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Baglog Composition Banner */}
        <div className="mt-6 p-5 rounded-3xl bg-surface-container-lowest border border-primary/10 shadow-sm flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">potted_plant</span>
              <h4 className="font-label-md text-label-md font-bold text-primary">
                Bedah Formula Komposisi 1.2 kg Baglog Sirkula
              </h4>
            </div>
            <span className="text-xs text-on-surface-variant font-medium">
              Ditakar manual oleh tim teknisi: <strong className="text-secondary font-semibold">100% Bahan Alami Tanpa Kimia Sintetis</strong>
            </span>
          </div>

          {/* Segmented Bar */}
          <div className="h-6 w-full rounded-xl overflow-hidden flex bg-surface-container shadow-inner">
            <div style={{ width: '30%' }} className="bg-amber-900 text-amber-100 flex items-center justify-center text-[10px] font-bold" title="30% Ampas Kopi (360 gram)">
              30% Ampas Kopi
            </div>
            <div style={{ width: '50%' }} className="bg-[#7A5B3E] text-stone-100 flex items-center justify-center text-[10px] font-bold" title="50% Serbuk Kayu Sengon (600 gram)">
              50% Serbuk Sengon
            </div>
            <div style={{ width: '15%' }} className="bg-[#C49A45] text-amber-950 flex items-center justify-center text-[10px] font-bold" title="15% Dedak Padi (180 gram)">
              15% Dedak
            </div>
            <div style={{ width: '4%' }} className="bg-[#546E7A] text-slate-100 flex items-center justify-center text-[9px] font-bold" title="4% Kapur CaCO3 (48 gram)">
              4%
            </div>
            <div style={{ width: '1%' }} className="bg-[#3E2723] text-stone-200 flex items-center justify-center text-[8px] font-bold" title="1% Gipsum (12 gram)">
              1
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 text-[11px] text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-900 shrink-0"></span>
              <span><strong>30%</strong> Ampas Kopi (Nitrogen &amp; Kafein)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A5B3E] shrink-0"></span>
              <span><strong>50%</strong> Serbuk Kayu (Selulosa &amp; Karbon)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C49A45] shrink-0"></span>
              <span><strong>15%</strong> Dedak Padi (Nutrisi Primordia)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#546E7A] shrink-0"></span>
              <span><strong>4%</strong> Kapur CaCO₃ (pH Seimbang 6.2-6.5)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3E2723] shrink-0"></span>
              <span><strong>1%</strong> Gipsum (Aerasi &amp; Kelembapan 62%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
