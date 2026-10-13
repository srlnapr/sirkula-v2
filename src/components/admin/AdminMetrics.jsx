import React from 'react';
import { ADMIN_METRICS, ADMIN_KEY_STATS } from '../../data/mockData';

export default function AdminMetrics() {
  const overviewStats = [
    {
      label: 'Total Pengguna',
      value: ADMIN_KEY_STATS.totalUsers,
      unit: 'Akun Terdaftar',
      sub: '32 Kafe • 48 Petani • 37 Tim/Kurir',
      icon: 'group',
      color: 'text-primary',
      bg: 'bg-primary-fixed/40',
    },
    {
      label: 'Mitra Kedai Kopi',
      value: ADMIN_KEY_STATS.activeCoffeeShops,
      unit: 'Kedai Aktif',
      sub: 'Suplai ampas harian Bandung Raya',
      icon: 'local_cafe',
      color: 'text-secondary',
      bg: 'bg-secondary-fixed/40',
    },
    {
      label: 'Mitra Petani Jamur',
      value: ADMIN_KEY_STATS.activeFarmers,
      unit: 'Poktan & Mandiri',
      sub: 'Sentra Lembang, Parongpong & Ciwidey',
      icon: 'yard',
      color: 'text-primary',
      bg: 'bg-secondary-container',
    },
    {
      label: 'Total Pesanan Baglog',
      value: ADMIN_KEY_STATS.totalOrders,
      unit: 'Order Selesai & Jalan',
      sub: 'Rata-rata 1.200 unit per pesanan',
      icon: 'shopping_bag',
      color: 'text-secondary',
      bg: 'bg-secondary-fixed/40',
    },
    {
      label: 'Akumulasi Transaksi',
      value: ADMIN_KEY_STATS.totalTransactionsValue,
      unit: 'Omzet Penjualan YTD',
      sub: `Bulan Ini: ${ADMIN_KEY_STATS.monthlyRevenue}`,
      icon: 'payments',
      color: 'text-primary',
      bg: 'bg-primary-fixed/40',
      isHighlight: true,
    },
  ];

  return (
    <div className="flex flex-col gap-space-lg">
      {/* 5 Core MVP Overview Counters (Fitur 1) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
        {overviewStats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-3xl border transition-all hover:-translate-y-0.5 shadow-xs flex flex-col justify-between ${
              stat.isHighlight
                ? 'col-span-2 sm:col-span-1 md:col-span-1 bg-surface-container-lowest border-secondary/40 shadow-sm'
                : 'bg-surface-container-lowest border-primary/10'
            }`}
          >
            <div className="flex items-center justify-between pb-2">
              <span className="font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </span>
              <div className={`w-8 h-8 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[18px]">{stat.icon}</span>
              </div>
            </div>
            <div>
              <div className="font-headline-sm text-headline-sm font-bold text-primary font-mono leading-tight">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-secondary mt-0.5">
                {stat.unit}
              </div>
              <p className="text-[10px] text-outline mt-1 truncate" title={stat.sub}>
                {stat.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Operational Highlights Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {/* Card 1: Total Ampas Kopi Masuk */}
        <article className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group border border-primary/5">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-fixed/30 pointer-events-none blur-2xl"></div>
          <div>
            <div className="flex items-start justify-between gap-space-md mb-space-md">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[26px]">recycling</span>
              </div>
              <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                {ADMIN_METRICS.monthlyGrowth}
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant block uppercase tracking-wider">
              Total Ampas Kopi Masuk
            </span>
            <div className="flex items-baseline gap-space-xs mt-space-xs">
              <span className="font-headline-xl text-headline-xl text-primary font-bold">
                {ADMIN_METRICS.totalWasteCollected}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">/ bulan siap olah</span>
            </div>
          </div>

          <div className="mt-space-lg pt-space-md bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col gap-1">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-secondary text-[16px]">store</span>
              <span>
                Diverted dari <strong>{ADMIN_METRICS.activeCoffeeShops} kedai mitra aktif</strong> Bandung Raya
              </span>
            </div>
            <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px]">eco</span>
                <span>Cegah {ADMIN_METRICS.emissionsAvoided}</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-mono text-[11px]">
                Kadar Air 65% OK
              </span>
            </div>
          </div>
        </article>

      {/* Card 2: Stok Baglog Siap Kirim */}
      <article className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary-fixed/40 pointer-events-none blur-2xl"></div>
        <div>
          <div className="flex items-start justify-between gap-space-md mb-space-md">
            <div className="w-12 h-12 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[26px]">potted_plant</span>
            </div>
            <span className="px-space-sm py-1 rounded-full bg-surface-variant text-primary font-label-sm text-label-sm font-semibold">
              {ADMIN_METRICS.formulaRatio}
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant block uppercase tracking-wider">
            Stok Baglog Siap Kirim
          </span>
          <div className="flex items-baseline gap-space-xs mt-space-xs">
            <span className="font-headline-xl text-headline-xl text-primary font-bold">
              {ADMIN_METRICS.baglogInventory}
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">inokulasi &amp; ready</span>
          </div>
        </div>

        <div className="mt-space-lg pt-space-md bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col gap-1">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
            <span>Grade A Primordia Tinggi • Gudang terisi 72%</span>
          </div>
          <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">science</span>
            <span>Siklus sterilisasi autoclave tervalidasi lab</span>
          </div>
        </div>
      </article>

      {/* Card 3: Efisiensi Rute & Emisi */}
      <article className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-fixed-dim/20 pointer-events-none blur-2xl"></div>
        <div>
          <div className="flex items-start justify-between gap-space-md mb-space-md">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[26px]">local_shipping</span>
            </div>
            <span className="px-space-sm py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
              Efisiensi Rute 96.5%
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant block uppercase tracking-wider">
            Efisiensi Rute Kurir &amp; Logistik
          </span>
          <div className="flex items-baseline gap-space-xs mt-space-xs">
            <span className="font-headline-xl text-headline-xl text-primary font-bold">
              {ADMIN_METRICS.routeEfficiency}
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">Skor Ketepatan Rute</span>
          </div>
        </div>

        <div className="mt-space-lg pt-space-md bg-surface-container-low/70 rounded-2xl p-space-md flex flex-col gap-1">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-secondary text-[16px]">alt_route</span>
            <span>Koordinasi Tim Kurir • {ADMIN_METRICS.activeCourierFleet || 4} Armada Kurir aktif</span>
          </div>
          <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>SLA Distribusi Kurir 48 Jam On-Time</span>
          </div>
        </div>
      </article>
    </section>
  </div>
);
}
