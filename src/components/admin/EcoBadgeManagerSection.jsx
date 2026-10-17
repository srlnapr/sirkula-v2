import React, { useState } from 'react';
import { ADMIN_ECO_BADGES } from '../../data/mockData';

export default function EcoBadgeManagerSection() {
  const [badges, setBadges] = useState(ADMIN_ECO_BADGES);

  const handleIssueBadge = (id) => {
    setBadges((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'active', statusLabel: 'Badge Baru Terbit' } : b))
    );
    alert(`Eco-Badge resmi untuk mitra ${id} berhasil diterbitkan dan siap diunduh!`);
  };

  return (
    <section id="manajemen-eco-badge" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🏅 KREDENSIAL ESG &amp; SERTIFIKASI HIJAU</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Manajemen Eco-Badge &amp; Laporan Dampak Kedai
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Kelola penerbitan sertifikat Sirkula Eco-Badge bagi kedai kopi mitra, penentuan tier (Gold/Silver/Bronze), dan pengiriman QR standee meja.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert('Buka generator penerbitan batch Eco-Badge baru...')}
          className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span>Terbitkan Badge Baru</span>
        </button>
      </div>

      {/* Tier Explanation Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
            🥇
          </div>
          <div className="text-xs">
            <span className="font-bold text-amber-950 block">Gold Tier Champion</span>
            <span className="text-amber-800">&gt;100 kg ampas/bulan dialihkan • Standee Akrilik Bar</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-400 text-white flex items-center justify-center font-bold text-sm">
            🥈
          </div>
          <div className="text-xs">
            <span className="font-bold text-slate-900 block">Silver Tier Advocate</span>
            <span className="text-slate-700">50 - 100 kg ampas/bulan • Sertifikat Digital &amp; Stiker</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-400 text-white flex items-center justify-center font-bold text-sm">
            🥉
          </div>
          <div className="text-xs">
            <span className="font-bold text-orange-950 block">Bronze Tier Pioneer</span>
            <span className="text-orange-800">&lt;50 kg ampas/bulan • Sertifikat Kemitraan Sirkular</span>
          </div>
        </div>
      </div>

      {/* Badges Table */}
      <div className="overflow-x-auto rounded-2xl border border-primary/10">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
            <tr>
              <th className="py-3 px-4">Nama Kedai Kopi</th>
              <th className="py-3 px-4">Kategori Tier</th>
              <th className="py-3 px-4">Ampas Dialihkan</th>
              <th className="py-3 px-4">Reduksi CO₂e</th>
              <th className="py-3 px-4">Status &amp; Tgl Terbit</th>
              <th className="py-3 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 text-on-surface">
            {badges.map((b) => (
              <tr key={b.id} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-3 px-4">
                  <span className="font-mono text-[10px] text-outline block">{b.id}</span>
                  <strong className="text-primary font-bold text-sm">{b.coffeeShop}</strong>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${b.tierColor}`}>
                    {b.tier}
                  </span>
                </td>
                <td className="py-3 px-4 font-mono font-bold text-secondary">
                  {b.wasteDivertedKg}
                </td>
                <td className="py-3 px-4 font-mono font-semibold text-primary">
                  {b.co2ReducedKg}
                </td>
                <td className="py-3 px-4 text-xs">
                  <span className="font-semibold block text-primary">{b.statusLabel}</span>
                  <span className="text-[11px] text-outline">Terbit: {b.issuedDate}</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="inline-flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => alert(`Unduh Sertifikat PDF Resmi untuk ${b.coffeeShop}`)}
                      className="px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                      title="Unduh Sertifikat PDF"
                    >
                      <span className="material-symbols-outlined text-[14px]">file_download</span>
                      <span>Sertifikat</span>
                    </button>
                    {b.status !== 'active' && (
                      <button
                        type="button"
                        onClick={() => handleIssueBadge(b.id)}
                        className="px-2.5 py-1.5 rounded-lg bg-primary hover:bg-secondary text-white font-bold text-[11px] cursor-pointer"
                      >
                        Terbitkan
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
