import React, { useState } from 'react';
import {
  FARMER_YIELD_TRACKER_BATCHES,
  FARMER_PRODUCTIVITY_METRICS,
} from '../../data/mockData';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

export default function FarmerYieldTrackerSection() {
  const [activeTab, setActiveTab] = useState('tracker'); // 'tracker' | 'calendar' | 'productivity'
  const [batches, setBatches] = useDemoStorage(
    DEMO_STORAGE_KEYS.FARMER_BATCHES,
    FARMER_YIELD_TRACKER_BATCHES
  );
  const [isAddBatchOpen, setIsAddBatchOpen] = useState(false);
  const [editingGrowthBatch, setEditingGrowthBatch] = useState(null);
  const [harvestingBatch, setHarvestingBatch] = useState(null);

  // New Batch Form State
  const [newBatchForm, setNewBatchForm] = useState({
    name: '',
    kumbung: 'Kumbung A Lembang',
    variety: 'Jamur Tiram Putih',
    startDate: new Date().toISOString().split('T')[0],
    units: 400,
  });

  // Calculate estimated harvest date rule-based: start date + 22 days (21 days incubation + 1 day primordia emergence)
  const calculateEstimatedHarvest = (dateStr) => {
    try {
      const d = new Date(dateStr);
      d.setDate(d.getDate() + 22);
      return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch {
      return '22 Hari Pasca Mulai';
    }
  };

  const handleAddBatchSubmit = (e) => {
    e.preventDefault();
    const estHarvest = calculateEstimatedHarvest(newBatchForm.startDate);
    const created = {
      id: `BATCH-${Math.floor(811 + Math.random() * 50)}`,
      name: newBatchForm.name || `Batch Kumbung (${newBatchForm.variety})`,
      kumbung: newBatchForm.kumbung,
      variety: newBatchForm.variety,
      startDate: newBatchForm.startDate,
      units: Number(newBatchForm.units),
      myceliumCoverage: '10% Hifa Mulai Tumbuh',
      growthStage: 'incubation',
      stageLabel: 'Fase Inkubasi Miselium (Awal)',
      harvestDateEst: estHarvest,
      daysToHarvest: 22,
      notes: 'Batch baru ditata di rak kumbung, kelembapan terjaga.',
      harvestedKg: 0,
      defectiveUnits: 0,
    };
    setBatches([created, ...batches]);
    setIsAddBatchOpen(false);
    setNewBatchForm({
      name: '',
      kumbung: 'Kumbung A Lembang',
      variety: 'Jamur Tiram Putih',
      startDate: new Date().toISOString().split('T')[0],
      units: 400,
    });
  };

  const handleUpdateGrowthSubmit = (e) => {
    e.preventDefault();
    setBatches((prev) =>
      prev.map((b) => (b.id === editingGrowthBatch.id ? editingGrowthBatch : b))
    );
    setEditingGrowthBatch(null);
  };

  const handleRecordHarvestSubmit = (e) => {
    e.preventDefault();
    setBatches((prev) =>
      prev.map((b) => {
        if (b.id === harvestingBatch.id) {
          return {
            ...b,
            growthStage: 'harvested',
            stageLabel: 'Panen Selesai Diserap Offtaker',
            daysToHarvest: 0,
            harvestedKg: Number(harvestingBatch.harvestedKg),
            defectiveUnits: Number(harvestingBatch.defectiveUnits || 0),
          };
        }
        return b;
      })
    );
    setHarvestingBatch(null);
  };

  return (
    <section id="yield-tracker" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header & Feature Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-1">
            <span>🍄 FARMER YIELD TRACKER</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Farmer Yield Tracker &amp; Kalender Panen
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Catat tanggal mulai budidaya, pantau kolonisasi miselium, peroleh estimasi panen berbasis SOP ilmiah 21 hari, dan rekap produktivitas panen.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-2xl border border-outline-variant/30">
          <button
            type="button"
            onClick={() => setActiveTab('tracker')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tracker'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">psychiatry</span>
            <span>Batch Budidaya ({batches.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'calendar'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span>Kalender Panen</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('productivity')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'productivity'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">analytics</span>
            <span>Produktivitas</span>
          </button>
        </div>
      </div>

      {/* Alur Budidaya Petani Visual Stepper */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-xs">
          <span className="font-bold text-primary block">
            Alur Terintegrasi: Beli Baglog → Catat Batch → Update Miselium → Estimasi Panen → Catat Panen
          </span>
          <span className="text-[11px] text-on-surface-variant">
            Estimasi waktu panen dihitung secara akurat berdasarkan tanggal inokulasi SOP (21 hari kolonisasi ampas kopi + 1–4 hari primordia).
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsAddBatchOpen(true)}
          className="px-4 py-2 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">add_circle</span>
          <span>Catat Batch Budidaya Baru</span>
        </button>
      </div>

      {/* ================= TAB 1: YIELD TRACKER (BATCH LIST & UPDATE) ================= */}
      {activeTab === 'tracker' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {batches.map((batch) => (
              <div
                key={batch.id}
                className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 pb-3 border-b border-primary/10">
                    <div>
                      <span className="text-[10px] font-mono text-outline">{batch.id} • Mulai: {batch.startDate}</span>
                      <h4 className="font-headline-sm text-sm sm:text-base font-bold text-primary">
                        {batch.name}
                      </h4>
                      <span className="text-xs text-on-surface-variant">{batch.kumbung} • {batch.variety}</span>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        batch.growthStage === 'harvested'
                          ? 'bg-secondary-container text-on-secondary-container'
                          : batch.growthStage === 'primordia'
                          ? 'bg-secondary-fixed text-primary animate-pulse'
                          : 'bg-primary-fixed/40 text-primary'
                      }`}
                    >
                      {batch.stageLabel}
                    </span>
                  </div>

                  {/* Growth Indicators */}
                  <div className="py-3 space-y-2 text-xs text-on-surface-variant">
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Jumlah Baglog:</span>
                      <strong className="font-mono text-primary">{batch.units} unit baglog</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-outline">Rambatan Miselium:</span>
                      <span className="font-semibold text-secondary font-mono">{batch.myceliumCoverage}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-outline uppercase font-semibold block">Perkiraan Waktu Panen:</span>
                        <strong className="text-primary font-mono text-xs sm:text-sm">{batch.harvestDateEst}</strong>
                      </div>
                      <div className="text-right">
                        {batch.daysToHarvest > 0 ? (
                          <span className="px-2.5 py-1 rounded-lg bg-secondary-fixed/50 text-secondary font-bold text-xs font-mono">
                            {batch.daysToHarvest} Hari Lagi
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-xs">
                            Panen Selesai
                          </span>
                        )}
                      </div>
                    </div>

                    {batch.harvestedKg > 0 && (
                      <div className="p-2.5 rounded-xl bg-secondary-container/40 flex items-center justify-between text-xs">
                        <span className="font-semibold text-primary">Hasil Panen Tercatat:</span>
                        <strong className="font-mono text-secondary font-bold text-sm">{batch.harvestedKg} kg Jamur Grade A</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Batch Action Buttons */}
                <div className="pt-3 border-t border-primary/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingGrowthBatch(batch)}
                    className="px-3 py-1.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-primary font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">vital_signs</span>
                    <span>Update Pertumbuhan</span>
                  </button>

                  {batch.growthStage !== 'harvested' ? (
                    <button
                      type="button"
                      onClick={() => setHarvestingBatch({ ...batch, harvestedKg: 95.0, defectiveUnits: 5 })}
                      className="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-secondary-fixed text-primary font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">scale</span>
                      <span>Catat Hasil Panen</span>
                    </button>
                  ) : (
                    <span className="text-[11px] text-secondary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      <span>Terserap Offtaker</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 2: KALENDER PANEN (FITUR 8) ================= */}
      {activeTab === 'calendar' && (
        <div className="space-y-4">
          <div className="p-4 bg-primary text-on-primary rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-[26px]">calendar_today</span>
              <div>
                <h4 className="font-label-md text-label-md font-bold">
                  Kalender Jadwal Panen Jamur (Oktober – November 2024)
                </h4>
                <p className="text-xs text-primary-fixed-dim">
                  Jadwal petik panen flushing otomatis diperbarui sesuai tanggal awal budidaya tiap batch kumbung.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-primary font-bold text-xs">
              Siklus Rutin 21 Hari
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-primary/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
                <tr>
                  <th className="py-3 px-4">Tanggal Panen</th>
                  <th className="py-3 px-4">Nama Batch &amp; Kumbung</th>
                  <th className="py-3 px-4">Varietas</th>
                  <th className="py-3 px-4">Populasi Baglog</th>
                  <th className="py-3 px-4">Status Siklus</th>
                  <th className="py-3 px-4 text-right">Target Panen Offtaker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-on-surface">
                {batches.map((b) => (
                  <tr key={b.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-primary text-sm">
                      {b.harvestDateEst}
                    </td>
                    <td className="py-3 px-4">
                      <strong className="text-primary font-bold">{b.name}</strong>
                      <span className="text-[11px] text-outline block">{b.kumbung}</span>
                    </td>
                    <td className="py-3 px-4">{b.variety}</td>
                    <td className="py-3 px-4 font-mono font-semibold">{b.units} unit</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold">
                        {b.stageLabel}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-secondary">
                      {b.harvestedKg > 0 ? `${b.harvestedKg} kg (Selesai)` : `Estimasi ~${Math.round(b.units * 0.38)} kg`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 3: MONITORING PRODUKTIVITAS (FITUR 9) ================= */}
      {activeTab === 'productivity' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[10px] text-outline uppercase font-semibold block">Total Baglog Dikelola</span>
              <div className="font-headline-sm text-headline-sm font-bold text-primary font-mono mt-0.5">
                {FARMER_PRODUCTIVITY_METRICS.totalManagedBaglogs.toLocaleString('id-ID')} unit
              </div>
              <span className="text-[11px] text-on-surface-variant">Di 2 kumbung Lembang</span>
            </div>

            <div className="p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/30">
              <span className="text-[10px] text-primary uppercase font-bold block">Baglog Produktif</span>
              <div className="font-headline-sm text-headline-sm font-bold text-secondary font-mono mt-0.5">
                {FARMER_PRODUCTIVITY_METRICS.productiveBaglogs.toLocaleString('id-ID')} unit
              </div>
              <span className="text-[11px] font-bold text-primary">{FARMER_PRODUCTIVITY_METRICS.productivityRate} Keberhasilan</span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[10px] text-outline uppercase font-semibold block">Baglog Gagal / Kontaminasi</span>
              <div className="font-headline-sm text-headline-sm font-bold text-error font-mono mt-0.5">
                {FARMER_PRODUCTIVITY_METRICS.defectiveBaglogs} unit
              </div>
              <span className="text-[11px] text-secondary font-semibold">Garansi Ganti Baru 100%</span>
            </div>

            <div className="p-4 rounded-2xl bg-primary-fixed/40 border border-primary/20">
              <span className="text-[10px] text-primary uppercase font-bold block">Hasil Panen Terserap</span>
              <div className="font-headline-sm text-headline-sm font-bold text-primary font-mono mt-0.5">
                {FARMER_PRODUCTIVITY_METRICS.accumulatedHarvestKg} kg
              </div>
              <span className="text-[11px] font-bold text-secondary">{FARMER_PRODUCTIVITY_METRICS.averageYieldPerBaglog}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-label-md text-label-md font-bold text-primary">
                Pendapatan Penjualan Hasil Panen Offtaker Sirkula
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Nilai hasil panen jamur tiram putih grade A yang telah ditimbang dan diserap oleh offtaker Sirkula.
              </p>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-surface-container-lowest border border-secondary/30 text-right">
              <span className="text-[10px] text-outline uppercase font-bold block">Total Cair ke Rekening:</span>
              <span className="font-headline-sm text-headline-sm font-bold text-secondary font-mono">
                {FARMER_PRODUCTIVITY_METRICS.totalEarningsBuyback}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH BATCH BUDIDAYA ================= */}
      {isAddBatchOpen && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase">Farmer Yield Tracker</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                  Catat Batch Budidaya Baru
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddBatchOpen(false)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddBatchSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">Nama / Identitas Batch</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Batch Kumbung A - Oktober 2"
                  value={newBatchForm.name}
                  onChange={(e) => setNewBatchForm({ ...newBatchForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Lokasi Kumbung</label>
                  <select
                    value={newBatchForm.kumbung}
                    onChange={(e) => setNewBatchForm({ ...newBatchForm, kumbung: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
                  >
                    <option>Kumbung A Lembang</option>
                    <option>Kumbung B Parongpong</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Varietas Jamur</label>
                  <select
                    value={newBatchForm.variety}
                    onChange={(e) => setNewBatchForm({ ...newBatchForm, variety: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
                  >
                    <option>Jamur Tiram Putih</option>
                    <option>Jamur Tiram Abu</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Tanggal Mulai Inokulasi</label>
                  <input
                    type="date"
                    required
                    value={newBatchForm.startDate}
                    onChange={(e) => setNewBatchForm({ ...newBatchForm, startDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Jumlah Baglog (Unit)</label>
                  <input
                    type="number"
                    required
                    min={50}
                    step={50}
                    value={newBatchForm.units}
                    onChange={(e) => setNewBatchForm({ ...newBatchForm, units: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
              </div>

              {/* Automatic rule-based projection banner */}
              <div className="p-3 rounded-xl bg-secondary-fixed/40 border border-secondary/20 space-y-1">
                <span className="text-[10px] font-bold text-primary uppercase block">
                  Perkiraan Panen Berbasis SOP (Tanggal Mulai + 22 Hari):
                </span>
                <span className="font-mono font-bold text-secondary text-sm block">
                  {calculateEstimatedHarvest(newBatchForm.startDate)}
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  Dihitung otomatis: 21 hari inkubasi miselium matang + 1-4 hari kemunculan badan buah primordia.
                </span>
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
                  className="px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs"
                >
                  Simpan Batch Budidaya
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL UPDATE KONDISI PERTUMBUHAN ================= */}
      {editingGrowthBatch && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase">Update Kondisi Pertumbuhan</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                  {editingGrowthBatch.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingGrowthBatch(null)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateGrowthSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">
                  Persentase Rambatan Miselium Putih
                </label>
                <select
                  value={editingGrowthBatch.myceliumCoverage}
                  onChange={(e) =>
                    setEditingGrowthBatch({ ...editingGrowthBatch, myceliumCoverage: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
                >
                  <option>30% Hifa Awal</option>
                  <option>65% Hifa Merambat</option>
                  <option>95% Kolonisasi Putih Rapat</option>
                  <option>100% Kolonisasi Selesai (Buka Cincin)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Fase Pertumbuhan Saat Ini</label>
                <select
                  value={editingGrowthBatch.growthStage}
                  onChange={(e) => {
                    const stage = e.target.value;
                    const label =
                      stage === 'incubation'
                        ? 'Fase Inkubasi Miselium'
                        : stage === 'primordia'
                        ? 'Fase Primordia (Pinhead Tumbuh)'
                        : 'Panen Selesai';
                    setEditingGrowthBatch({ ...editingGrowthBatch, growthStage: stage, stageLabel: label });
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
                >
                  <option value="incubation">Inkubasi Miselium</option>
                  <option value="primordia">Primordia / Pinhead Muncul</option>
                  <option value="harvested">Siap Petik Panen</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Catatan Observasi Fisik Kumbung</label>
                <textarea
                  rows={2}
                  value={editingGrowthBatch.notes}
                  onChange={(e) => setEditingGrowthBatch({ ...editingGrowthBatch, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingGrowthBatch(null)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs"
                >
                  Simpan Kondisi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL CATAT HASIL PANEN ================= */}
      {harvestingBatch && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase">Pencatatan Panen &amp; Buyback</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                  {harvestingBatch.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setHarvestingBatch(null)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRecordHarvestSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">Hasil Panen Bersih (kg Jamur Tiram)</label>
                <input
                  type="number"
                  step="0.5"
                  required
                  value={harvestingBatch.harvestedKg}
                  onChange={(e) => setHarvestingBatch({ ...harvestingBatch, harvestedKg: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold text-primary text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Baglog Gagal Tumbuh / Afkir (Unit)</label>
                <input
                  type="number"
                  required
                  value={harvestingBatch.defectiveUnits}
                  onChange={(e) => setHarvestingBatch({ ...harvestingBatch, defectiveUnits: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono text-error font-bold"
                />
                <span className="text-[10px] text-secondary mt-1 block">
                  *Unit gagal akan diproses untuk klaim garansi penggantian baglog 100%.
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-secondary-fixed/40 border border-secondary/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-primary uppercase font-bold block">Estimasi Serapan Offtaker:</span>
                  <span className="text-xs text-on-surface-variant">Rp 16.000 / kg Jamur Grade A</span>
                </div>
                <strong className="font-mono font-bold text-primary text-sm">
                  Rp {(Number(harvestingBatch.harvestedKg || 0) * 16000).toLocaleString('id-ID')}
                </strong>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setHarvestingBatch(null)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Simpan &amp; Verifikasi Offtaker</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
