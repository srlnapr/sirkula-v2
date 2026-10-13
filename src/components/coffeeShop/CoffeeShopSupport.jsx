import React from 'react';

export default function CoffeeShopSupport() {
  return (
    <section className="bg-surface-container-low rounded-3xl p-8 lg:p-10 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] relative overflow-hidden">
      {/* Subtle Green Accent Bar on Left */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-primary"></div>
      
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pl-2">
        <div className="flex flex-col space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
              Dukungan Operasional Kedai
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
            Butuh penjemputan darurat atau wadah tambahan?
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Tim Account Manager B2B Sirkula siap membantu penyesuaian jadwal harian, penambahan bak kedap aroma, maupun integrasi data ESG untuk laporan tahunan kedai Anda.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-on-secondary px-6 py-3.5 rounded-full font-label-md text-label-md shadow-sm transition-all font-semibold"
            href="https://wa.me/6281288007475"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp AM (+62 812-Sirkula)</span>
          </a>
          <button
            onClick={() => alert('SOP Penyimpanan Limbah Ampas Kopi (Dokumen PDF) terunduh.')}
            className="inline-flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface px-5 py-3.5 rounded-full font-label-md text-label-md shadow-sm transition-all font-semibold"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            <span>SOP Penyimpanan Limbah</span>
          </button>
        </div>
      </div>
    </section>
  );
}
