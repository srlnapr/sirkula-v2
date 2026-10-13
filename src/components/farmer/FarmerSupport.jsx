import React from 'react';

export default function FarmerSupport() {
  return (
    <div className="bg-surface-container rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 my-2">
      <div className="flex items-start gap-4 max-w-3xl">
        <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
          <span className="material-symbols-outlined text-[26px]">support_agent</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Dukungan Teknis Agronomis Kumbung
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
            Butuh konsultasi mikologi atau penanganan hama kumbung?
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Tim Agronomis &amp; Mikolog B2B Sirkula siap membantu pengecekan miselium, mitigasi jamur kontaminan (Trichoderma), dan penjadwalan pasokan baglog rutin.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-shrink-0 w-full md:w-auto">
        <a
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md font-semibold transition-colors shadow-sm w-full sm:w-auto"
          href="https://wa.me/6281288007475"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span>WhatsApp Agronomis Sirkula</span>
        </a>
        <button
          onClick={() => alert('SOP Penanganan Kumbung & Higienitas Jamur Tiram terunduh.')}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold transition-colors shadow-sm w-full sm:w-auto border border-outline-variant/30"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">menu_book</span>
          <span>SOP Penanganan Kumbung</span>
        </button>
      </div>
    </div>
  );
}
