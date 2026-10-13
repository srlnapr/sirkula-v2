import React, { useState } from 'react';
import { FARMER_DATA } from '../../data/mockData';

export default function GrowthCalendar() {
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [recordedMsg, setRecordedMsg] = useState(null);

  const filteredBatches = FARMER_DATA.batches.filter((batch) => {
    if (filter === 'all') return true;
    if (filter === 'incubation') return batch.type === 'incubation';
    if (filter === 'primordia') return batch.type === 'primordia';
    if (filter === 'harvested') return batch.type === 'harvested';
    return true;
  });

  const handleRecordHarvest = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setRecordedMsg('Hasil panen harian berhasil disimpan & diverifikasi offtaker Sirkula!');
    setTimeout(() => setRecordedMsg(null), 4000);
  };

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-6">
      {/* Section Header with Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-semibold">
            Kalender Pertumbuhan &amp; Hasil Panen
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Pantau fase miselium dan pencatatan panen jamur tiram berkala di Lembang &amp; Bandung Raya.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md transition-all duration-200 shadow-sm flex-shrink-0 font-semibold"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          <span>Catat Hasil Panen Harian</span>
        </button>
      </div>

      {recordedMsg && (
        <div className="p-3 bg-secondary-fixed/50 border border-secondary rounded-2xl text-secondary text-sm font-semibold flex items-center justify-between animate-fade-in">
          <span>{recordedMsg}</span>
          <button onClick={() => setRecordedMsg(null)}>✕</button>
        </div>
      )}

      {/* Highlight Card: Active Primordia Phase */}
      <div className="bg-surface-container-low rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[26px]">energy_savings_leaf</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-title-md text-title-md text-primary font-semibold">
                Fase Pinhead / Primordia Aktif (Batch #SRK-809)
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wide font-bold">
                Siap Panen 4 Hari Lagi
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Kumbung A • Kelembaban 88% dipertahankan stabil dengan misting berkala
            </p>
          </div>
        </div>
        <button
          onClick={() => alert('Detail Kumbung A: Suhu 24°C, Kelembaban 88%, Kontaminasi 0%, Autoclave Cycle Verified')}
          className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary font-semibold transition-colors flex-shrink-0 self-start sm:self-center"
        >
          <span>Detail Kumbung</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              filter === 'all'
                ? 'bg-primary text-on-primary shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('incubation')}
            className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              filter === 'incubation'
                ? 'bg-primary text-on-primary shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Inkubasi
          </button>
          <button
            onClick={() => setFilter('primordia')}
            className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              filter === 'primordia'
                ? 'bg-primary text-on-primary shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Siap Panen
          </button>
          <button
            onClick={() => setFilter('harvested')}
            className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              filter === 'harvested'
                ? 'bg-primary text-on-primary shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Riwayat Panen
          </button>
        </div>
        <span className="font-body-sm text-body-sm text-outline flex-shrink-0">
          Menampilkan {filteredBatches.length} dari 16 batch
        </span>
      </div>

      {/* Growth Stages & Harvest Log Items List */}
      <div className="flex flex-col gap-3">
        {filteredBatches.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors gap-4 shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.type === 'harvested'
                    ? 'bg-secondary-container/40 text-secondary'
                    : 'bg-surface-container-high text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">
                  {item.type === 'harvested'
                    ? 'check_circle'
                    : item.type === 'primordia'
                    ? 'psychiatry'
                    : 'hourglass_top'}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md font-semibold text-primary truncate">
                    {item.id} • {item.location}
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{item.stage}</span>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4 flex-shrink-0">
              <span
                className={`font-title-md text-title-md font-semibold font-mono ${
                  item.type === 'harvested' ? 'text-secondary' : 'text-primary'
                }`}
              >
                {item.units}
              </span>
              <span
                className={`px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wide font-bold ${
                  item.type === 'harvested'
                    ? 'bg-secondary-container text-on-secondary-container'
                    : item.type === 'primordia'
                    ? 'bg-primary-fixed text-on-primary-fixed'
                    : 'bg-surface-container-highest text-on-surface-variant'
                }`}
              >
                {item.statusTag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer of Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
        <button
          onClick={() => alert('Menampilkan seluruh 16 riwayat batch panen.')}
          className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-secondary font-semibold transition-colors"
        >
          <span>Lihat Semua 16 Riwayat Batch</span>
          <span className="material-symbols-outlined text-[18px]">east</span>
        </button>
        <button
          onClick={() => alert('Catatan Panen CSV terunduh: catatan-panen-tirta-mandiri.csv')}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary">download</span>
          <span>Unduh Catatan Panen CSV</span>
        </button>
      </div>

      {/* Harvest Form Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-md w-full shadow-2xl border border-primary/10">
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              Catat Hasil Panen Harian
            </h4>
            <p className="text-body-sm text-on-surface-variant mb-4">
              Input berat panen jamur tiram putih hari ini untuk verifikasi timbangan offtaker Sirkula.
            </p>
            <form onSubmit={handleRecordHarvest} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Pilih Batch &amp; Kumbung
                </label>
                <select className="w-full px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low text-sm">
                  <option>Batch #SRK-809 • Kumbung A</option>
                  <option>Batch #SRK-808 • Kumbung B</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Berat Panen (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  defaultValue="25.5"
                  className="w-full px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low text-sm font-mono font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Grade Kualitas
                </label>
                <select className="w-full px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low text-sm">
                  <option>Grade A (Tudung Utuh, Bersih, Diameter 6-8cm)</option>
                  <option>Grade B (Ukuran campur)</option>
                </select>
              </div>
              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-2.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-secondary transition-colors"
                >
                  Simpan Panen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
