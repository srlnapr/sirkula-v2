import React from 'react';

export default function SterilizationStatus() {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
            Status Sterilisasi &amp; Kapasitas Batch
          </h3>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
          Siklus #04 Berjalan
        </span>
      </div>

      <div className="grid grid-cols-2 gap-space-sm">
        <div className="p-space-sm bg-surface-container-low rounded-2xl flex flex-col gap-0.5">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Autoclave Hub
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
              121°C
            </span>
            <span className="text-label-sm text-secondary font-semibold font-mono">
              1.2 bar
            </span>
          </div>
          <span className="text-[11px] text-on-surface-variant">90 mnt pasteurisasi</span>
        </div>

        <div className="p-space-sm bg-surface-container-low rounded-2xl flex flex-col gap-0.5">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Kapasitas Harian
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
              82%
            </span>
            <span className="text-label-sm text-on-surface-variant">/ 10k</span>
          </div>
          <span className="text-[11px] text-secondary font-semibold">8.200 dari 10.000 baglog</span>
        </div>
      </div>

      <div className="p-space-sm bg-surface-container-low/70 rounded-2xl flex items-center justify-between text-body-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[18px]">local_shipping</span>
          <span className="font-medium text-primary text-label-md">Armada Kurir Siaga</span>
        </div>
        <div className="flex items-center gap-1.5 font-label-sm text-label-sm">
          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
            3 Aktif
          </span>
          <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant">
            1 Standby
          </span>
        </div>
      </div>
    </div>
  );
}
