import React, { useState } from 'react';
import { COFFEE_SHOP_DATA } from '../../data/mockData';

export default function EcoBadgeCertificate() {
  const [downloadMsg, setDownloadMsg] = useState(null);

  const handleDownloadPdf = () => {
    setDownloadMsg('Laporan Audit ESG & Sertifikat Resmi PDF sedang diunduh...');
    setTimeout(() => setDownloadMsg(null), 4000);
  };

  const handleDownloadQr = () => {
    setDownloadMsg('Template Cetak Standee Meja Akrilik (Print-Ready 300 DPI) berhasil diunduh!');
    setTimeout(() => setDownloadMsg(null), 4000);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🏅 FITUR 6: SIRKULA ECO-BADGE</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary font-semibold">
            Akreditasi &amp; Kredensial Sirkula Eco-Badge
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Sertifikasi resmi komitmen kedai kopi terhadap ekonomi sirkular dan pengurangan emisi metana yang dapat dipajang di kasir.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-900 border border-amber-300 font-label-sm text-xs font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-amber-700">verified</span>
            <span>{COFFEE_SHOP_DATA.tier}</span>
          </span>
        </div>
      </div>

      {downloadMsg && (
        <div className="p-3.5 bg-secondary-fixed/50 border border-secondary rounded-2xl text-secondary text-xs sm:text-sm font-semibold flex items-center justify-between animate-fade-in shadow-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>{downloadMsg}</span>
          </div>
          <button onClick={() => setDownloadMsg(null)} className="cursor-pointer">✕</button>
        </div>
      )}

      {/* Main 2-Column Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Stylized Digital Certificate */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e3025] via-[#1b4d3e] to-[#002117] text-on-primary p-7 lg:p-9 shadow-xl flex flex-col justify-between min-h-[460px] border border-white/10">
          {/* Decorative Watermark Pattern */}
          <div className="absolute -right-12 -top-12 opacity-10 pointer-events-none text-white">
            <svg fill="none" height="280" viewBox="0 0 200 200" width="280">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeDasharray="16 12" strokeWidth="6"></circle>
              <path d="M100 30 C 60 70, 60 130, 100 170 C 140 130, 140 70, 100 30 Z" fill="currentColor"></path>
            </svg>
          </div>

          {/* Certificate Header */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold shadow-md">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim block font-bold">
                  Sirkula Circular Economy Standard
                </span>
                <span className="font-headline-sm text-base sm:text-headline-sm font-semibold text-white">
                  Sertifikat Kemitraan Sirkular 2025
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400/25 text-amber-200 border border-amber-300/30 font-label-sm text-xs uppercase tracking-wider font-bold">
              {COFFEE_SHOP_DATA.tier}
            </span>
          </div>

          {/* Certificate Main Body */}
          <div className="relative z-10 my-6 flex flex-col space-y-3">
            <span className="text-sm font-semibold text-secondary-fixed uppercase tracking-wider">
              No. Registrasi: SRK-ESG/2024/089-BDG
            </span>
            <span className="font-headline-md text-xl sm:text-2xl text-white font-medium italic">
              "{COFFEE_SHOP_DATA.certificateTitle}"
            </span>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed max-w-xl">
              Diberikan resmi kepada <strong className="text-white font-semibold">{COFFEE_SHOP_DATA.partnerName}</strong> atas dedikasi aktif mengalihkan residu ampas kopi menjadi media tanam baglog jamur pangan bernutrisi tinggi di Hub Lembang.
            </p>

            {/* Tier Progression Bar to Next Tier */}
            <div className="pt-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-primary-fixed-dim">Progress Menuju Platinum Tier:</span>
                <span className="text-white font-mono">145 kg / 250 kg (58%)</span>
              </div>
              <div className="w-full bg-black/30 h-2.5 rounded-full overflow-hidden p-0.5">
                <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: '58%' }}></div>
              </div>
              <span className="text-[11px] text-primary-fixed-dim">
                Kurang 105 kg ampas lagi untuk membuka plakat akrilik eksklusif &amp; liputan media ESG nasional.
              </span>
            </div>
          </div>

          {/* Certificate Verification Footer */}
          <div className="relative z-10 pt-4 bg-white/5 backdrop-blur-md px-5 py-4 rounded-2xl flex items-center justify-between gap-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white p-1 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h2v2h-2v-2zm-4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm2 2h2v4h-2v-4zm-4 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4-2h2v2h-2v-2z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-white font-semibold">
                  Scan QR Verifikasi Publik
                </span>
                <span className="text-[11px] text-primary-fixed-dim">
                  Bisa di-scan oleh barista maupun pelanggan kafe untuk transparansi jejak hijau.
                </span>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-primary-fixed-dim uppercase tracking-wider block">Masa Berlaku</span>
              <span className="text-xs font-mono font-bold text-white">Okt 2024 - Okt 2025</span>
            </div>
          </div>
        </div>

        {/* Right Column: Physical Table Standee & Actions */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Physical Acrylic Table Standee Preview */}
          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">storefront</span>
                <span className="font-bold text-primary text-sm">Media Pajang Meja Kasir</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-secondary text-[11px] font-bold">
                Standee Akrilik
              </span>
            </div>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              Tampilkan komitmen keberlanjutan kedai kopi Anda di atas meja barista untuk memperkuat reputasi ramah lingkungan (green branding) di mata pelanggan.
            </p>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-dashed border-primary/20 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-bold text-primary block">QR Meja Kasir Terhubung</span>
                <span className="text-on-surface-variant">Menampilkan cerita bahwa ampas kopi kedai ini menjadi media jamur di Lembang.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white py-3 px-5 rounded-xl font-label-md text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Unduh Sertifikat Resmi (PDF)</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadQr}
                className="w-full inline-flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container text-primary py-3 px-5 rounded-xl font-label-md text-xs font-bold border border-outline-variant/30 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>Download Template Standee (300 DPI)</span>
              </button>
            </div>
          </div>

          {/* Quick Barista Tip */}
          <div className="bg-surface-container-lowest p-5 rounded-3xl border border-primary/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[18px]">tips_and_updates</span>
            </div>
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-primary block">Tips Menjaga Kualitas Ampas</span>
              <p className="text-on-surface-variant leading-relaxed">
                Tutup rapat bak Sirkula setelah knocking porta-filter untuk mencegah kontaminasi residu susu dan menjaga kelembaban 60-65% sebelum kurir menjemput.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
