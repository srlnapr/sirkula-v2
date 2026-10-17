import React from 'react';
import { FARMER_DATA } from '../../data/mockData';

export default function FarmerMetrics({ onScrollToSection }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Module Feature Tag */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-mono text-[11px] font-bold uppercase tracking-wider">
          <span>📊 DASHBOARD OVERVIEW</span>
        </div>
        <span className="text-xs text-outline hidden sm:inline">
          Data real-time Kumbung Lembang &amp; Parongpong
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Ringkasan Pesanan */}
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 border border-primary/5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-11 h-11 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">
              1 Pengiriman
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Ringkasan Pesanan
            </span>
            <div className="text-[32px] leading-tight text-primary font-bold">
              3 <span className="text-base font-normal text-on-surface-variant">Pesanan</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-primary/5 text-xs text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">check_circle</span>
            <span className="line-clamp-1">PO-BGL-8821 dalam perjalanan (ETA 14:00)</span>
          </div>
        </div>

        {/* Card 2: Stok Baglog Siap Pakai */}
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 border border-primary/5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-11 h-11 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">inventory_2</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary text-[11px] font-bold">
              Kapasitas 2.000
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Stok Baglog di Kumbung
            </span>
            <div className="text-[32px] leading-tight text-primary font-bold">
              {FARMER_DATA.activeBaglogs}{' '}
              <span className="text-base font-normal text-on-surface-variant">unit</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-primary/5 text-xs text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary shrink-0">eco</span>
            <span className="line-clamp-1">Formula 30% ampas kopi tersterilisasi</span>
          </div>
        </div>

        {/* Card 3: Budidaya Aktif */}
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 border border-primary/5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-11 h-11 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">potted_plant</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary text-primary text-[11px] font-bold">
              Kumbung A &amp; B
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Budidaya Aktif
            </span>
            <div className="text-[32px] leading-tight text-primary font-bold">
              2 <span className="text-base font-normal text-on-surface-variant">Batch</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-primary/5 text-xs text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">vital_signs</span>
            <span className="line-clamp-1">850 baglog masa inkubasi &amp; primordia</span>
          </div>
        </div>

        {/* Card 4: Jadwal Panen Terdekat */}
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 border border-primary/5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-900">
              <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
              28 Okt 2024
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Jadwal Panen Terdekat
            </span>
            <div className="text-[32px] leading-tight text-primary font-bold">
              {FARMER_DATA.nextHarvestDays}{' '}
              <span className="text-base font-normal text-on-surface-variant">Lagi</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-primary/5 text-xs text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary shrink-0">scale</span>
            <span className="line-clamp-1">Batch #809 • Est. ~185 kg Jamur Grade A</span>
          </div>
        </div>
      </div>
    </div>
  );
}
