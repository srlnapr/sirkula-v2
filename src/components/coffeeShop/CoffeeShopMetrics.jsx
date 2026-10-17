import React from 'react';
import { COFFEE_SHOP_DATA } from '../../data/mockData';

export default function CoffeeShopMetrics() {
  return (
    <div className="flex flex-col gap-3">
      {/* Module Feature Badge */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-mono text-[11px] font-bold uppercase tracking-wider">
          <span>📊 DASHBOARD OVERVIEW</span>
        </div>
        <span className="text-xs text-outline hidden sm:inline">
          Data real-time Klaster Bandung (Riau &amp; Dago)
        </span>
      </div>

      {/* 4 Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Metric 1: Total Waste Diverted */}
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 border border-primary/5">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">recycling</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary text-primary font-mono text-[11px] font-bold">
              +12% Bulan Ini
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Total Ampas Terkumpul
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[32px] leading-tight text-primary font-bold">
                {COFFEE_SHOP_DATA.totalWasteDiverted}
              </span>
              <span className="text-sm text-on-surface-variant font-medium">kg ampas</span>
            </div>
          </div>
          <div className="pt-3 border-t border-primary/5 flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">nutrition</span>
            <span className="line-clamp-1">Setara <strong>{COFFEE_SHOP_DATA.unitBaglogsYield}</strong></span>
          </div>
        </div>

        {/* Metric 2: Next Scheduled Pickup */}
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 border border-primary/5">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-900">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
              Besok Pagi
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Jadwal Penjemputan
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] leading-tight text-primary font-bold line-clamp-1">
                {COFFEE_SHOP_DATA.nextPickup}
              </span>
            </div>
          </div>
          <div className="pt-3 border-t border-primary/5 flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">person_pin_circle</span>
            <span className="line-clamp-1">Kurir: {COFFEE_SHOP_DATA.driverName}</span>
          </div>
        </div>

        {/* Metric 3: Request Status & Bin Capacity */}
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 border border-primary/5">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">inventory_2</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary text-[11px] font-bold">
              1 Permintaan Aktif
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Status Permintaan &amp; Bak
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[32px] leading-tight text-primary font-bold">
                {COFFEE_SHOP_DATA.binCapacityPercentage}%
              </span>
              <span className="text-sm text-secondary font-semibold">Siap Jemput</span>
            </div>
          </div>
          <div className="pt-3 border-t border-primary/5 flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">check_circle</span>
            <span className="line-clamp-1">Wadah ampas 2 bak tertutup rapat</span>
          </div>
        </div>

        {/* Metric 4: Avoided Carbon & Eco-Tier */}
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 border border-primary/5">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">eco</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">
              {COFFEE_SHOP_DATA.tier}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-outline uppercase tracking-wider block mb-0.5">
              Dampak Emisi Tereduksi
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[32px] leading-tight text-primary font-bold">
                {COFFEE_SHOP_DATA.co2Avoided}
              </span>
              <span className="text-sm text-on-surface-variant font-medium">kg CO₂e</span>
            </div>
          </div>
          <div className="pt-3 border-t border-primary/5 flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">workspace_premium</span>
            <span className="line-clamp-1">Certified Circular Champion 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
