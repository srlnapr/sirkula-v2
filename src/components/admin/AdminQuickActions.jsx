import React, { useState } from 'react';

export default function AdminQuickActions() {
  const [activeModal, setActiveModal] = useState(null);
  const [weighForm, setWeighForm] = useState({ shop: 'Kopi Toko Djawa', weight: '22.5', moisture: '61%' });
  const [dispatchForm, setDispatchForm] = useState({ van: 'Kurir Van #01', area: 'Dago & Riau Bandung' });
  const [successToast, setSuccessToast] = useState(null);

  const handleWeighSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    setSuccessToast(`Timbangan ${weighForm.shop} (${weighForm.weight} kg) berhasil dicatat ke buku log manifest harian oleh petugas!`);
    setTimeout(() => setSuccessToast(null), 4000);
  };

  const handleDispatchSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    setSuccessToast(`Surat Jalan ${dispatchForm.van} ke ${dispatchForm.area} berhasil diterbitkan!`);
    setTimeout(() => setSuccessToast(null), 4000);
  };

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-primary/5 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
            Aksi Cepat &amp; Kontrol Lapangan Hub
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Operasikan pencatatan harian, penugasan armada, dan penerbitan dokumen sertifikasi sirkular.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-bold">
          4 Fitur Kontrol Cepat
        </span>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Action 1 */}
        <button
          onClick={() => setActiveModal('weigh')}
          className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left transition-all hover:-translate-y-0.5 border border-outline-variant/30 flex flex-col justify-between group cursor-pointer"
          type="button"
        >
          <div className="flex items-center justify-between pb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">scale</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md font-bold text-primary">Input Timbangan</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Catat ampas masuk kafe baru</p>
          </div>
        </button>

        {/* Action 2 */}
        <button
          onClick={() => setActiveModal('dispatch')}
          className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left transition-all hover:-translate-y-0.5 border border-outline-variant/30 flex flex-col justify-between group cursor-pointer"
          type="button"
        >
          <div className="flex items-center justify-between pb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md font-bold text-primary">Tugaskan Kurir</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Dispatch rute jemput armada</p>
          </div>
        </button>

        {/* Action 3 */}
        <button
          onClick={() => {
            alert('Batch Barcode #SRK-BATCH-BDG-098 berhasil digenerate dan dikirim ke printer thermal lab!');
          }}
          className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left transition-all hover:-translate-y-0.5 border border-outline-variant/30 flex flex-col justify-between group cursor-pointer"
          type="button"
        >
          <div className="flex items-center justify-between pb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md font-bold text-primary">Generate QR Batch</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Cetak stiker barcode baglog</p>
          </div>
        </button>

        {/* Action 4 */}
        <button
          onClick={() => {
            alert('Laporan Rekap BAST & ESG Mingguan Hub Lembang - Bandung (PDF) berhasil diunduh!');
          }}
          className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container text-left transition-all hover:-translate-y-0.5 border border-outline-variant/30 flex flex-col justify-between group cursor-pointer"
          type="button"
        >
          <div className="flex items-center justify-between pb-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md font-bold text-primary">Export Rekap BAST</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Unduh laporan audit resmi</p>
          </div>
        </button>
      </div>

      {/* Checklist Kontrol & Kebersihan oleh Staf Lapangan */}
      <div className="p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">checklist</span>
          <span className="font-label-sm text-label-sm font-bold text-primary">
            Checklist Harian Staf Hub:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/30">
            <span className="text-secondary font-bold">🌡️</span>
            <span>Suhu Ruang: <strong className="text-primary font-semibold">22.4°C (Termometer Fisik)</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/30">
            <span className="text-secondary font-bold">💧</span>
            <span>Higrometer: <strong className="text-primary font-semibold">65% RH (Sesuai SOP)</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/30">
            <span className="text-secondary font-bold">🛡️</span>
            <span>Sanitasi Ruang: <strong className="text-secondary font-semibold">Inspeksi Lolos</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/30">
            <span className="text-secondary font-bold">🚚</span>
            <span>Armada Kurir: <strong className="text-primary font-semibold">4/4 Siaga Lapangan</strong></span>
          </div>
        </div>
      </div>

      {/* Success Toast Banner */}
      {successToast && (
        <div className="p-3 bg-secondary-fixed/40 border border-secondary/30 rounded-2xl text-secondary text-xs font-semibold flex items-center justify-between animate-fade-in">
          <span>✓ {successToast}</span>
          <button onClick={() => setSuccessToast(null)} className="text-primary font-bold">✕</button>
        </div>
      )}

      {/* Modal 1: Input Timbangan Masuk */}
      {activeModal === 'weigh' && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-md w-full shadow-2xl border border-primary/10">
            <div className="flex items-center justify-between pb-3 border-b border-primary/10">
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                Input Timbangan Ampas Masuk
              </h4>
              <button onClick={() => setActiveModal(null)} className="text-on-surface-variant hover:text-on-surface">✕</button>
            </div>
            <form onSubmit={handleWeighSubmit} className="space-y-4 pt-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-outline uppercase mb-1">Nama Kedai Kopi Mitra</label>
                <input
                  type="text"
                  value={weighForm.shop}
                  onChange={(e) => setWeighForm({ ...weighForm, shop: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 focus:border-primary outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-outline uppercase mb-1">Berat Timbangan (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={weighForm.weight}
                    onChange={(e) => setWeighForm({ ...weighForm, weight: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 focus:border-primary outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline uppercase mb-1">Kadar Air Lab (%)</label>
                  <input
                    type="text"
                    value={weighForm.moisture}
                    onChange={(e) => setWeighForm({ ...weighForm, moisture: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 focus:border-primary outline-none"
                    required
                  />
                </div>
              </div>
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  Simpan &amp; Verifikasi Timbangan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Dispatch Armada */}
      {activeModal === 'dispatch' && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-md w-full shadow-2xl border border-primary/10">
            <div className="flex items-center justify-between pb-3 border-b border-primary/10">
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                Tugaskan Armada Kurir Penjemputan
              </h4>
              <button onClick={() => setActiveModal(null)} className="text-on-surface-variant hover:text-on-surface">✕</button>
            </div>
            <form onSubmit={handleDispatchSubmit} className="space-y-4 pt-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-outline uppercase mb-1">Pilih Unit Kendaraan</label>
                <select
                  value={dispatchForm.van}
                  onChange={(e) => setDispatchForm({ ...dispatchForm, van: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 focus:border-primary outline-none"
                >
                  <option value="Kurir Van #01">Kurir Van #01 (Driver: Budi)</option>
                  <option value="Kurir Van #02">Kurir Van #02 (Driver: Ilham)</option>
                  <option value="Kurir Van #04">Kurir Van #04 (Driver: Rahmat)</option>
                  <option value="Kurir Pickup #03">Kurir Pickup #03 (Standby Lembang)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-outline uppercase mb-1">Klaster Rute Tujuan</label>
                <input
                  type="text"
                  value={dispatchForm.area}
                  onChange={(e) => setDispatchForm({ ...dispatchForm, area: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 focus:border-primary outline-none"
                  required
                />
              </div>
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  Terbitkan Surat Tugas Rute
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
