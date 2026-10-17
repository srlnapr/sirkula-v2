import React from 'react';
import { ADMIN_KEY_STATS } from '../../data/mockData';

export default function EnvironmentalImpactAdminSection() {
  const clusterData = [
    { name: 'Klaster Bandung Tengah (Braga & Asia Afrika)', volume: '420 kg / bln', shops: '10 Kedai', co2Saved: '504 kg CO₂e' },
    { name: 'Klaster Bandung Utara (Dago Pakar & Dipatiukur)', volume: '380 kg / bln', shops: '9 Kedai', co2Saved: '456 kg CO₂e' },
    { name: 'Klaster Bandung Timur (Riau, Citarum & Progo)', volume: '310 kg / bln', shops: '8 Kedai', co2Saved: '372 kg CO₂e' },
    { name: 'Klaster Bandung Selatan (Buah Batu & Lengkong)', volume: '140 kg / bln', shops: '5 Kedai', co2Saved: '168 kg CO₂e' },
  ];

  return (
    <section id="dampak-lingkungan-admin" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🌱 AUDIT ESG &amp; DAMPAK LINGKUNGAN</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Dashboard Dampak Lingkungan &amp; Reduksi Emisi
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Rekapitulasi kuantitatif pengalihan limbah ampas kopi dari TPA Sarimukti dan estimasi pencegahan emisi gas metana (CH₄ Avoidance).
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert('Mengunduh Laporan Audit Dampak Lingkungan Regional Sirkula Hub (PDF)...')}
          className="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-fixed text-primary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
          <span>Unduh Laporan Audit ESG</span>
        </button>
      </div>

      {/* 4 Primary Impact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2">
            <span className="text-[11px] font-bold text-outline uppercase">Ampas Bulan Ini</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">recycling</span>
          </div>
          <div>
            <div className="font-headline-md text-headline-md font-bold text-primary font-mono">
              {ADMIN_KEY_STATS.currentMonthWaste}
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Dialihkan 100% dari TPA</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-secondary-fixed/30 border border-secondary/30 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2">
            <span className="text-[11px] font-bold text-primary uppercase">Emisi Dicegah Bulan Ini</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">cloud_done</span>
          </div>
          <div>
            <div className="font-headline-md text-headline-md font-bold text-secondary font-mono">
              {ADMIN_KEY_STATS.currentMonthEmissions}
            </div>
            <p className="text-xs text-primary font-medium mt-1">Pencegahan Gas Metana</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2">
            <span className="text-[11px] font-bold text-outline uppercase">Total Kumulatif YTD</span>
            <span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
          </div>
          <div>
            <div className="font-headline-md text-headline-md font-bold text-primary font-mono">
              {ADMIN_KEY_STATS.totalWasteCollectedYTD}
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Ampas Kopi Terkelola</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-primary-fixed/40 border border-primary/20 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2">
            <span className="text-[11px] font-bold text-primary uppercase">Total Reduksi Karbon YTD</span>
            <span className="material-symbols-outlined text-primary text-[20px]">forest</span>
          </div>
          <div>
            <div className="font-headline-md text-headline-md font-bold text-primary font-mono">
              {ADMIN_KEY_STATS.totalEmissionsReducedYTD}
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Setara 6.200 bibit pohon</p>
          </div>
        </div>
      </div>

      {/* Cluster Breakdown & Calculation Methodology */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Cluster Breakdown Table (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <h4 className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>
            <span>Distribusi Penyelamatan Ampas per Klaster Bandung Raya</span>
          </h4>

          <div className="overflow-x-auto rounded-2xl border border-primary/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
                <tr>
                  <th className="py-3 px-4">Klaster Rute Logistik</th>
                  <th className="py-3 px-4">Mitra Kafe</th>
                  <th className="py-3 px-4">Ampas / Bulan</th>
                  <th className="py-3 px-4 text-right">Reduksi Emisi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-on-surface">
                {clusterData.map((c, i) => (
                  <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">{c.name}</td>
                    <td className="py-3 px-4 text-on-surface-variant">{c.shops}</td>
                    <td className="py-3 px-4 font-mono font-bold text-secondary">{c.volume}</td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-primary">{c.co2Saved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: IPCC Tier-1 Formula Card (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-surface-container-low border border-primary/10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">calculate</span>
            <h4 className="font-label-md text-label-md font-bold text-primary">
              Metode Perhitungan Sains
            </h4>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Mengacu pada protokol <em>IPCC Guidelines for National Greenhouse Gas Inventories</em>, pembusukan ampas kopi secara anaerobik di TPA menghasilkan gas metana (CH₄).
          </p>
          <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-xs font-mono">
            <strong className="text-primary block mb-1">Rumus Estimasi:</strong>
            1 kg Ampas Kopi = 1.2 kg CO₂e Methane Avoidance
          </div>
          <p className="text-[11px] text-outline">
            Data diverifikasi berkala oleh analis lingkungan hidup Sirkula Hub BDG-01 setiap akhir bulan kalender.
          </p>
        </div>
      </div>
    </section>
  );
}
