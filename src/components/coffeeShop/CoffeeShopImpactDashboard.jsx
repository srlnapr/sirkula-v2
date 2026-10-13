import React, { useState } from 'react';
import {
  COFFEE_SHOP_DATA,
  COFFEE_SHOP_ESG_REPORTS,
} from '../../data/mockData';

export default function CoffeeShopImpactDashboard() {
  const [activeTab, setActiveTab] = useState('impact'); // 'impact' | 'reports' | 'branding'
  const [downloadAlert, setDownloadAlert] = useState('');
  const [copyStatus, setCopyStatus] = useState(false);

  const handleDownloadReport = (month) => {
    setDownloadAlert(`Laporan Audit Dampak Lingkungan ESG (${month}) berhasil diunduh dalam format PDF resmi.`);
    setTimeout(() => setDownloadAlert(''), 5000);
  };

  const handleCopyEsgStatement = () => {
    const statement = `Sana Coffee Roasters berkomitmen pada ekonomi sirkular bersama Sirkula. Hingga Oktober 2024, kami telah mengalihkan 145 kg ampas kopi dari TPA dan mereduksi 174 kg CO₂e emisi gas metana, yang didaur ulang menjadi substrat bernutrisi bagi petani jamur di Lembang.`;
    navigator.clipboard.writeText(statement);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 4000);
  };

  return (
    <section id="dampak-lingkungan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🌱 FITUR 7 &amp; 8: ESG &amp; DAMPAK LINGKUNGAN</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Impact Dashboard &amp; Laporan Dampak Lingkungan
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Pantau kalkulasi limbah yang dialihkan dari TPA, emisi metana yang dicegah, dan unduh laporan ESG resmi untuk branding keberlanjutan kedai Anda.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => handleDownloadReport('Kuartal Q3 2024')}
            className="px-4 py-2.5 rounded-full bg-secondary text-primary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer hover:bg-secondary-fixed shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Unduh Laporan ESG (PDF 8 Hal)</span>
          </button>
        </div>
      </div>

      {downloadAlert && (
        <div className="p-4 rounded-2xl bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
          <span>{downloadAlert}</span>
        </div>
      )}

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-primary/10 pb-3 overflow-x-auto scrollbar-none">
        {[
          { id: 'impact', label: 'Fitur 7: Metrik & Ekivalensi Dampak', icon: 'monitoring' },
          { id: 'reports', label: 'Fitur 8: Rekap & Unduh Laporan Bulanan', icon: 'article' },
          { id: 'branding', label: 'Kit Publikasi & ESG Branding', icon: 'share' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-xs font-bold'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ================= TAB 1: FITUR 7 - IMPACT DASHBOARD ================= */}
      {activeTab === 'impact' && (
        <div className="flex flex-col gap-6">
          {/* Main Key Impact Figures (2 Big Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-surface-container-low border border-primary/10 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-outline uppercase font-bold">TOTAL LIMBAH DIALIHKAN</span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">
                  Zero Waste to Landfill
                </span>
              </div>
              <div>
                <div className="text-[42px] leading-tight font-bold text-primary font-mono">
                  {COFFEE_SHOP_DATA.totalWasteDiverted} <span className="text-xl font-normal text-on-surface-variant">kg</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Limbah ampas kopi terhindar dari pembusukan anaerobik di TPA Sarimukti / Babakan Siliwangi Bandung.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-primary/5 flex items-center gap-3 text-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">nutrition</span>
                <span>Ditransformasi menjadi <strong>{COFFEE_SHOP_DATA.unitBaglogsYield}</strong> jamur tiram di Lembang</span>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-surface-container-low border border-primary/10 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-outline uppercase font-bold">REDUKSI EMISI GAS RUMAH KACA</span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-bold">
                  IPCC Waste Model
                </span>
              </div>
              <div>
                <div className="text-[42px] leading-tight font-bold text-primary font-mono">
                  {COFFEE_SHOP_DATA.co2Avoided} <span className="text-xl font-normal text-on-surface-variant">kg CO₂e</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Pencegahan emisi gas metana (CH₄) yang memiliki potensi pemanasan global 28x lebih tinggi daripada CO₂.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-primary/5 flex items-center gap-3 text-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">park</span>
                <span>Setara daya serap fotosintesis <strong>9 pohon dewasa</strong> selama 1 tahun penuh</span>
              </div>
            </div>
          </div>

          {/* Equivalency 3-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">directions_car</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-outline uppercase block">EKIVALENSI KENDARAAN</span>
                <span className="font-bold text-xs text-primary">~1.120 km Perjalanan Mobil</span>
                <span className="text-[10px] text-on-surface-variant block">Emisi bensin yang terhindarkan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">bolt</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-outline uppercase block">HEMAT ENERGI LISTRIK</span>
                <span className="font-bold text-xs text-primary">285 kWh Listrik Rumah</span>
                <span className="text-[10px] text-on-surface-variant block">Daya terselamatkan dari siklus daur</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">compost</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-outline uppercase block">PUPUK ORGANIK TERCIPTA</span>
                <span className="font-bold text-xs text-primary">95 kg Kompos Kascing</span>
                <span className="text-[10px] text-on-surface-variant block">Dikembalikan ke kebun sayur Lembang</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: FITUR 8 - LAPORAN BULANAN ESG ================= */}
      {activeTab === 'reports' && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm sm:text-base text-primary">Daftar Dokumen Laporan Kontribusi Lingkungan</h3>
              <p className="text-xs text-on-surface-variant">
                Laporan resmi bernomor registrasi Sirkula untuk lampiran Sustainability Report (SR) &amp; audit ESG tahunan.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-surface-container-low">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container text-on-surface-variant uppercase text-[10px] font-mono border-b border-primary/10">
                <tr>
                  <th className="p-3.5">Periode Audit</th>
                  <th className="p-3.5">Nomor Sertifikasi</th>
                  <th className="p-3.5">Ampas Teralihkan</th>
                  <th className="p-3.5">Reduksi Emisi</th>
                  <th className="p-3.5">Status Audit</th>
                  <th className="p-3.5 text-right">Unduh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {COFFEE_SHOP_ESG_REPORTS.map((rep, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-lowest/80 transition-colors">
                    <td className="p-3.5">
                      <span className="font-bold text-primary block">{rep.month}</span>
                      <span className="text-[10px] text-outline">{rep.baglogsProduced} porsi baglog</span>
                    </td>
                    <td className="p-3.5 font-mono text-xs text-primary">{rep.reportNumber}</td>
                    <td className="p-3.5 font-mono font-bold text-primary">{rep.wasteKg} kg</td>
                    <td className="p-3.5 font-mono font-bold text-primary">{rep.co2Kg} kg CO₂e</td>
                    <td className="p-3.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[10px]">
                        {rep.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => handleDownloadReport(rep.month)}
                        className="px-3 py-1 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 3: BRANDING & PUBLIC RELATIONS KIT ================= */}
      {activeTab === 'branding' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Press statement box */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-outline uppercase font-bold">
              KREDENSIAL BRANDING SOSIAL MEDIA &amp; WEBSITE KEDAI
            </span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Salin narasi resmi keberlanjutan ini untuk dicantumkan pada profil Instagram, bio menu, atau siaran pers kedai Anda:
            </p>
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-primary/10 text-xs text-primary italic leading-relaxed font-serif">
              "Sana Coffee Roasters berkomitmen pada ekonomi sirkular bersama Sirkula. Hingga Oktober 2024, kami telah mengalihkan 145 kg ampas kopi dari TPA dan mereduksi 174 kg CO₂e emisi gas metana, yang didaur ulang menjadi substrat bernutrisi bagi petani jamur di Lembang."
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-outline">
                {copyStatus ? '✓ Teks berhasil disalin ke clipboard!' : 'Klik untuk menyalin narasi lengkap'}
              </span>
              <button
                type="button"
                onClick={handleCopyEsgStatement}
                className="px-4 py-1.5 rounded-full bg-primary text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copyStatus ? 'Tersalin' : 'Salin Narasi'}</span>
              </button>
            </div>
          </div>

          {/* Social media badge asset download */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col gap-3.5">
            <span className="text-[11px] font-mono text-outline uppercase font-bold">ASSET VISUAL RESMI</span>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => alert('Template Instagram Story 1080x1920 (PNG Transparan) terunduh.')}
                className="w-full p-3 rounded-xl bg-surface-container-lowest border border-primary/10 hover:border-primary/30 flex items-center justify-between text-xs font-semibold text-primary transition-all text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  <span>Instagram Story (1080x1920)</span>
                </div>
                <span className="material-symbols-outlined text-[16px]">download</span>
              </button>
              <button
                type="button"
                onClick={() => alert('Template Stiker Meja Bar Akrilik (Vector PDF) terunduh.')}
                className="w-full p-3 rounded-xl bg-surface-container-lowest border border-primary/10 hover:border-primary/30 flex items-center justify-between text-xs font-semibold text-primary transition-all text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">qr_code</span>
                  <span>Stiker Meja &amp; QR Meja Bar</span>
                </div>
                <span className="material-symbols-outlined text-[16px]">download</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
