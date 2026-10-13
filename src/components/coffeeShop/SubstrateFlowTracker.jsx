import React from 'react';

export default function SubstrateFlowTracker() {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[22px]">hub</span>
          <span className="font-title-md text-title-md text-on-surface font-semibold">
            Distribusi Substrat Terakhir
          </span>
        </div>
        <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded-full font-bold">
          Batch #SRK-809
        </span>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Ampas kopi Sana Coffee Roasters saat ini dalam fase inokulasi miselium di{' '}
        <strong className="text-on-surface font-semibold">
          Mitra Tani Jamur Tirta Mandiri &amp; Kelompok Tani Lembang
        </strong>.
      </p>

      {/* Segmented Steps Tracker */}
      <div className="grid grid-cols-4 gap-2 pt-2">
        <div className="flex flex-col space-y-1.5">
          <div className="h-2 rounded-full bg-secondary"></div>
          <span className="font-label-sm text-label-sm text-on-surface font-medium">1. Jemput</span>
        </div>
        <div className="flex flex-col space-y-1.5">
          <div className="h-2 rounded-full bg-secondary"></div>
          <span className="font-label-sm text-label-sm text-on-surface font-medium">2. Sterilisasi</span>
        </div>
        <div className="flex flex-col space-y-1.5">
          <div className="h-2 rounded-full bg-secondary"></div>
          <span className="font-label-sm text-label-sm text-secondary font-bold">3. Inokulasi</span>
        </div>
        <div className="flex flex-col space-y-1.5">
          <div className="h-2 rounded-full bg-surface-container-highest"></div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">4. Panen Jamur</span>
        </div>
      </div>
    </div>
  );
}
