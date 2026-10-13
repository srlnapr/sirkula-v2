import React, { useState } from 'react';
import { ADMIN_PRODUCTION_LOGS, ADMIN_FARM_MONITORING } from '../../data/mockData';

export default function ProductionCropSection() {
  const [activeTab, setActiveTab] = useState('production'); // 'production' | 'crop-monitoring'
  const [productionLogs, setProductionLogs] = useState(ADMIN_PRODUCTION_LOGS);
  const [farmMonitoring, setFarmMonitoring] = useState(ADMIN_FARM_MONITORING);
  const [isAddBatchOpen, setIsAddBatchOpen] = useState(false);
  const [newBatch, setNewBatch] = useState({
    coffeeWasteUsed: '360 kg',
    sawdustUsed: '600 kg',
    branUsed: '180 kg',
    outputUnits: '1.000 Baglog Tiram Putih',
    operator: 'Kang Dadang & Tim Mixer',
  });

  const handleAddBatchSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: `BATCH-${Math.floor(883 + Math.random() * 50)}`,
      date: 'Hari ini, Baru Saja',
      coffeeWasteUsed: newBatch.coffeeWasteUsed,
      sawdustUsed: newBatch.sawdustUsed,
      branUsed: newBatch.branUsed,
      outputUnits: newBatch.outputUnits,
      operator: newBatch.operator,
      autoclaveTemp: '121°C • 90 Menit (1.2 bar)',
      qaStatus: 'passed',
      qaStatusLabel: 'Lolos Uji Steril',
    };
    setProductionLogs([created, ...productionLogs]);
    setIsAddBatchOpen(false);
  };

  return (
    <section id="manajemen-produksi" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header & Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🔬 MODUL PABRIKASI &amp; AGRONOMI</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Manajemen Produksi &amp; Monitoring Budidaya
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Fitur 7 &amp; 8: Catat konversi ampas kopi ke baglog steril serta pantau siklus pertumbuhan kumbung petani jamur.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-2xl border border-outline-variant/30">
          <button
            type="button"
            onClick={() => setActiveTab('production')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'production'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">factory</span>
            <span>Pencatatan Produksi Substrat</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('crop-monitoring')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'crop-monitoring'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">psychology</span>
            <span>Monitoring Kumbung Petani ({farmMonitoring.length})</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: PENCATATAN PRODUKSI (FITUR 7) ================= */}
      {activeTab === 'production' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="p-3 bg-secondary-fixed/30 rounded-2xl border border-secondary/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">science</span>
              <div className="text-xs">
                <span className="font-bold text-primary block">Protokol Formulasi 30% Ampas Kopi Murni</span>
                <span className="text-on-surface-variant">Takaran terkalibrasi per batch 1.200 kg: 360 kg ampas + 600 kg serbuk + 180 kg dedak + kapur &amp; gipsum</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAddBatchOpen(true)}
              className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              <span>Catat Batch Produksi Baru</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-primary/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
                <tr>
                  <th className="py-3 px-4">Batch ID &amp; Waktu</th>
                  <th className="py-3 px-4">Input Ampas Kopi</th>
                  <th className="py-3 px-4">Bahan Pengisi Lain</th>
                  <th className="py-3 px-4">Hasil Output Baglog</th>
                  <th className="py-3 px-4">Sterilisasi Autoclave</th>
                  <th className="py-3 px-4">Operator Mixer</th>
                  <th className="py-3 px-4 text-right">Status QA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-on-surface">
                {productionLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-3 px-4">
                      <strong className="font-mono text-primary font-bold block">{log.id}</strong>
                      <span className="text-[11px] text-outline">{log.date}</span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-secondary">
                      {log.coffeeWasteUsed}
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant text-[11px]">
                      {log.sawdustUsed} kayu + {log.branUsed} dedak
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono font-bold text-[11px]">
                        {log.outputUnits}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant text-[11px]">
                      {log.autoclaveTemp}
                    </td>
                    <td className="py-3 px-4 font-semibold text-primary">
                      {log.operator}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-secondary font-bold text-[11px]">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        <span>{log.qaStatusLabel}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 2: MONITORING BUDIDAYA PETANI (FITUR 8) ================= */}
      {activeTab === 'crop-monitoring' && (
        <div className="space-y-4">
          <div className="p-4 bg-primary-container text-on-primary rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-fixed text-[24px]">potted_plant</span>
              <div>
                <h4 className="font-label-md text-label-md font-bold">
                  Dashboard Pemantauan Panen Kumbung Petani Jamur
                </h4>
                <p className="text-xs text-primary-fixed-dim">
                  Pantau pertumbuhan miselium, kelembapan, dan estimasi waktu petik panen untuk kesiapan penyerapan offtaker Sirkula.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary text-secondary-fixed text-xs font-bold font-mono">
              Total 4.400 Baglog Terpantau
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {farmMonitoring.map((farm) => (
              <div
                key={farm.id}
                className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 pb-3 border-b border-primary/10">
                    <div>
                      <span className="text-[10px] font-mono text-outline">{farm.id} • {farm.location}</span>
                      <h4 className="font-headline-sm text-sm sm:text-base font-bold text-primary">
                        {farm.farmerName}
                      </h4>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${farm.healthBadge}`}>
                      {farm.kumbungHealth}
                    </span>
                  </div>

                  <div className="py-3 space-y-2 text-xs text-on-surface-variant">
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Varietas &amp; Populasi:</span>
                      <strong className="text-primary">{farm.variety} ({farm.activeBaglogs} baglog)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Fase Pertumbuhan Saat Ini:</span>
                      <span className="px-2 py-0.5 rounded-lg bg-surface-container-lowest font-semibold text-secondary">
                        {farm.currentStage}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Estimasi Waktu Panen:</span>
                      <span className="font-bold text-primary font-mono">{farm.harvestEstDays}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-[11px] flex items-center justify-between">
                      <span className="text-outline font-semibold">Proyeksi Hasil Panen:</span>
                      <span className="font-mono font-bold text-secondary">{farm.projectedYieldKg}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-primary/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-outline">
                    Jaminan Buyback: <strong className="text-primary">100% Kontrak Offtaker</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => alert(`Log Inspeksi Agronomis Kumbung: ${farm.farmerName}`)}
                    className="text-[11px] text-primary hover:underline font-bold"
                  >
                    Detail Log Kumbung
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH BATCH PRODUKSI ================= */}
      {isAddBatchOpen && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Catat Batch Produksi Substrat Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsAddBatchOpen(false)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddBatchSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Ampas Kopi (kg)</label>
                  <input
                    type="text"
                    required
                    value={newBatch.coffeeWasteUsed}
                    onChange={(e) => setNewBatch({ ...newBatch, coffeeWasteUsed: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Serbuk Kayu (kg)</label>
                  <input
                    type="text"
                    required
                    value={newBatch.sawdustUsed}
                    onChange={(e) => setNewBatch({ ...newBatch, sawdustUsed: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Dedak (kg)</label>
                  <input
                    type="text"
                    required
                    value={newBatch.branUsed}
                    onChange={(e) => setNewBatch({ ...newBatch, branUsed: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Hasil Output Baglog (Unit)</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 1.000 Baglog Tiram Putih"
                  value={newBatch.outputUnits}
                  onChange={(e) => setNewBatch({ ...newBatch, outputUnits: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Operator Mixer &amp; Autoclave</label>
                <input
                  type="text"
                  required
                  value={newBatch.operator}
                  onChange={(e) => setNewBatch({ ...newBatch, operator: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddBatchOpen(false)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs"
                >
                  Simpan Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
