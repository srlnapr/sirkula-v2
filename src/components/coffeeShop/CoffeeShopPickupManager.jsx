import React, { useState } from 'react';
import {
  COFFEE_SHOP_PICKUP_REQUESTS,
  COFFEE_SHOP_PROFILE,
} from '../../data/mockData';

export default function CoffeeShopPickupManager({ onRequestCreated }) {
  const [activeTab, setActiveTab] = useState('tracking'); // 'tracking' | 'schedule_form' | 'history'
  const [requests, setRequests] = useState(COFFEE_SHOP_PICKUP_REQUESTS);
  const [selectedTrackingId, setSelectedTrackingId] = useState('REQ-PKP-104');
  const [searchHistory, setSearchHistory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  // Form state for Fitur 2 & Fitur 3: Permintaan & Jadwal Penjemputan
  const [formDate, setFormDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [formTimeSlot, setFormTimeSlot] = useState('Pagi (08:30 - 11:30 WIB)');
  const [formEstimatedWeight, setFormEstimatedWeight] = useState(20);
  const [formBinCount, setFormBinCount] = useState(2);
  const [formAddress, setFormAddress] = useState(COFFEE_SHOP_PROFILE.outletAddress);
  const [formNotes, setFormNotes] = useState('Ampas telah dipadatkan dalam bak food-grade tertutup.');

  const selectedRequest =
    requests.find((r) => r.id === selectedTrackingId) || requests[0];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newReq = {
      id: `REQ-PKP-${Math.floor(105 + Math.random() * 50)}`,
      requestedDate: formDate,
      timeSlot: formTimeSlot,
      estimatedWeightKg: Number(formEstimatedWeight),
      binCount: Number(formBinCount),
      outletAddress: formAddress,
      notes: formNotes,
      status: 'dijadwalkan',
      statusLabel: 'Dijadwalkan Hub',
      courierName: 'Rahmat',
      fleet: 'Kurir Van #04',
      eta: 'Sesuai Jadwal Slot',
      trackingSteps: [
        { title: 'Permintaan Diterima Sistem', time: 'Baru Saja', completed: true },
        { title: 'Verifikasi & Penjadwalan Rute Hub', time: 'Sedang Diproses', completed: true, isCurrent: true },
        { title: 'Armada Menuju Lokasi Kedai', time: 'Menunggu', completed: false },
        { title: 'Timbang di Tempat & Serah Terima', time: 'Menunggu', completed: false },
      ],
    };

    setRequests([newReq, ...requests]);
    setSelectedTrackingId(newReq.id);
    setIsModalOpen(false);
    setActiveTab('tracking');
    setSuccessToast(`Permintaan ${newReq.id} berhasil dikirim! Armada Hub sedang menjadwalkan rute.`);
    if (onRequestCreated) onRequestCreated(newReq);
    setTimeout(() => setSuccessToast(''), 6000);
  };

  const completedRequests = requests.filter((r) => r.status === 'selesai');
  const filteredHistory = completedRequests.filter((r) =>
    r.id.toLowerCase().includes(searchHistory.toLowerCase()) ||
    r.requestedDate.toLowerCase().includes(searchHistory.toLowerCase()) ||
    (r.courierName && r.courierName.toLowerCase().includes(searchHistory.toLowerCase()))
  );

  return (
    <section id="penjemputan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🚚 FITUR 2, 3, 4, 5: OPERASIONAL LOGISTIK AMPAS</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Jadwal, Permintaan &amp; Tracking Penjemputan Ampas Kopi
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Atur jadwal penjemputan baru, pantau posisi kurir penjemput secara real-time, dan periksa riwayat penimbangan terverifikasi.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Buat Permintaan Penjemputan</span>
          </button>
        </div>
      </div>

      {successToast && (
        <div className="p-4 rounded-2xl bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center justify-between gap-2.5 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
            <span>{successToast}</span>
          </div>
          <button onClick={() => setSuccessToast('')} className="text-on-secondary-container">✕</button>
        </div>
      )}

      {/* Sub-Tabs: Fitur 4 (Tracking), Fitur 2 & 3 (Atur Jadwal), Fitur 5 (Riwayat) */}
      <div className="flex items-center gap-2 border-b border-primary/10 pb-3 overflow-x-auto scrollbar-none">
        {[
          { id: 'tracking', label: 'Fitur 4: Live Tracking Penjemputan', icon: 'local_shipping' },
          { id: 'schedule_form', label: 'Fitur 2 & 3: Form Jadwal & Permintaan', icon: 'calendar_month' },
          { id: 'history', label: 'Fitur 5: Riwayat Penjemputan', icon: 'receipt_long' },
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

      {/* ================= TAB 1: FITUR 4 - LIVE TRACKING PENJEMPUTAN ================= */}
      {activeTab === 'tracking' && (
        <div className="flex flex-col gap-6">
          {/* Active Request Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-surface-container-low border border-primary/10">
            <div>
              <span className="text-[11px] font-mono text-outline uppercase block">PILIH PERMINTAAN AKTIF:</span>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {requests.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedTrackingId(r.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedRequest.id === r.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span>{r.id}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        r.status === 'selesai'
                          ? 'bg-secondary'
                          : r.status === 'dijadwalkan'
                          ? 'bg-amber-400 animate-pulse'
                          : 'bg-primary'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-on-surface-variant">Status Saat Ini:</span>
              <span
                className={`px-3 py-1 rounded-full font-bold text-xs ${
                  selectedRequest.status === 'selesai'
                    ? 'bg-secondary-container text-on-secondary-container'
                    : selectedRequest.status === 'dijadwalkan'
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {selectedRequest.statusLabel}
              </span>
            </div>
          </div>

          {/* Stepper Tracking Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-surface-container-low border border-primary/10 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-primary/10">
              <div>
                <span className="text-[10px] font-mono text-outline uppercase block">DETAIL STATUS PENJEMPUTAN</span>
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                  <span>{selectedRequest.id}</span>
                  <span className="text-xs font-normal text-on-surface-variant">
                    • {selectedRequest.requestedDate} ({selectedRequest.timeSlot})
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-white font-mono font-bold text-xs">
                  ETA: {selectedRequest.eta}
                </span>
              </div>
            </div>

            {/* 4-Stage Stepper: menunggu -> dijadwalkan -> dijemput -> selesai */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-2">
              {[
                {
                  label: 'Menunggu Konfirmasi',
                  desc: 'Sistem mencatat permintaan',
                  time: 'Tahap 1',
                  isDone: true,
                },
                {
                  label: 'Dijadwalkan Hub',
                  desc: `${selectedRequest.fleet || 'Kurir Van #04'} ditugaskan`,
                  time: 'Tahap 2',
                  isDone: selectedRequest.status !== 'menunggu',
                  isCurrent: selectedRequest.status === 'dijadwalkan',
                },
                {
                  label: 'Dijemput Armada',
                  desc: 'Kurir menuju lokasi kedai',
                  time: 'Tahap 3',
                  isDone: selectedRequest.status === 'dijemput' || selectedRequest.status === 'selesai',
                  isCurrent: selectedRequest.status === 'dijemput',
                },
                {
                  label: 'Selesai & Diverifikasi',
                  desc: 'Timbang digital di Hub Lembang',
                  time: 'Tahap 4',
                  isDone: selectedRequest.status === 'selesai',
                  isCurrent: selectedRequest.status === 'selesai',
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    step.isCurrent
                      ? 'bg-surface-container-lowest border-primary ring-2 ring-primary/20 shadow-xs'
                      : step.isDone
                      ? 'bg-surface-container-lowest border-primary/10'
                      : 'bg-surface-container/50 border-dashed border-outline-variant/40 opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        step.isDone
                          ? 'bg-secondary text-primary'
                          : step.isCurrent
                          ? 'bg-primary text-white animate-pulse'
                          : 'bg-surface-container text-outline'
                      }`}
                    >
                      {step.isDone ? '✓' : idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-outline uppercase">{step.time}</span>
                  </div>
                  <h4 className="text-xs font-bold text-primary">{step.label}</h4>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Courier & Pickup Location Info Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-primary/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm shrink-0">
                    <span className="material-symbols-outlined text-[24px]">person</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-outline uppercase block">PETUGAS LOGISTIK</span>
                    <span className="font-bold text-xs text-primary">{selectedRequest.courierName}</span>
                    <span className="text-[11px] text-on-surface-variant block">{selectedRequest.fleet}</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/6281288007475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Hubungi</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-primary/10 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-outline uppercase block mb-0.5">LOKASI &amp; WADAH:</span>
                <p className="text-xs text-on-surface font-medium line-clamp-1">{selectedRequest.outletAddress}</p>
                <div className="flex items-center gap-3 mt-1 text-[11px] text-on-surface-variant">
                  <span>Estimasi: <strong>{selectedRequest.estimatedWeightKg} kg</strong></span>
                  <span>• Wadah: <strong>{selectedRequest.binCount} Bak Food-Grade</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: FITUR 2 & 3 - FORM JADWAL & PERMINTAAN PENJEMPUTAN ================= */}
      {activeTab === 'schedule_form' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-primary/10 flex flex-col gap-6 max-w-2xl mx-auto w-full">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase mb-1">
              <span>📅 ATUR JADWAL &amp; PERMINTAAN BARU</span>
            </div>
            <h3 className="font-headline-sm text-base sm:text-lg font-bold text-primary">
              Kirim Permintaan Penjemputan Ampas Kopi
            </h3>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Armada van kurir Sirkula akan menukar bak ampas penuh Anda dengan bak bersih berpenutup kedap udara.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-xs">
            {/* Tanggal Penjemputan */}
            <div>
              <label className="block font-semibold text-primary mb-1">Tanggal Penjemputan</label>
              <input
                type="date"
                required
                value={formDate}
                onChange={(e) => setFormDate(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface font-semibold focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Pilihan Waktu Slot */}
            <div>
              <label className="block font-semibold text-primary mb-1">Pilihan Waktu Slot Kedatangan Kurir</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Pagi (08:30 - 11:30 WIB)',
                  'Siang (13:00 - 15:30 WIB)',
                  'Sore (16:00 - 18:00 WIB)',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormTimeSlot(slot)}
                    className={`p-2.5 rounded-xl border text-center font-semibold transition-all ${
                      formTimeSlot === slot
                        ? 'bg-primary text-white border-primary shadow-xs'
                        : 'bg-surface-container-lowest border-primary/10 text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Jumlah Perkiraan Ampas & Wadah Bak */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-primary mb-1">
                  Perkiraan Bobot Ampas (kg)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="5"
                    max="100"
                    step="1"
                    required
                    value={formEstimatedWeight}
                    onChange={(e) => setFormEstimatedWeight(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface font-semibold focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                  <span className="font-bold text-xs text-primary shrink-0">kg</span>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-primary mb-1">
                  Jumlah Bak Sirkula yang Terisi
                </label>
                <select
                  value={formBinCount}
                  onChange={(e) => setFormBinCount(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface font-semibold focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                >
                  <option value={1}>1 Bak (Kapasitas ~10-12 kg)</option>
                  <option value={2}>2 Bak (Kapasitas ~20-24 kg)</option>
                  <option value={3}>3 Bak (Kapasitas ~30-36 kg)</option>
                  <option value={4}>4 Bak atau Lebih</option>
                </select>
              </div>
            </div>

            {/* Alamat Penjemputan */}
            <div>
              <label className="block font-semibold text-primary mb-1">Alamat Titik Penjemputan Kedai</label>
              <textarea
                rows={2}
                required
                value={formAddress}
                onChange={(e) => setFormAddress(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface font-medium resize-none focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Catatan untuk Kurir */}
            <div>
              <label className="block font-semibold text-primary mb-1">Catatan Tambahan untuk Petugas Logistik</label>
              <input
                type="text"
                placeholder="Contoh: Wadah diletakkan di dekat pintu gudang belakang barista..."
                value={formNotes}
                onChange={(e) => setFormNotes(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-full bg-primary text-white font-bold transition-all hover:bg-primary/90 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Kirim Permintaan Penjemputan ke Hub</span>
            </button>
          </form>
        </div>
      )}

      {/* ================= TAB 3: FITUR 5 - RIWAYAT PENJEMPUTAN ================= */}
      {activeTab === 'history' && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm sm:text-base text-primary flex items-center gap-2">
                <span>Catatan Riwayat Penyerahan Ampas Kopi</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-mono text-xs">
                  {completedRequests.length} Penjemputan
                </span>
              </h3>
              <p className="text-xs text-on-surface-variant">
                Total ampas terserah terverifikasi: <strong>145.0 kg</strong> (100% lolos uji QC Hub).
              </p>
            </div>

            <div className="relative min-w-[200px]">
              <input
                type="text"
                placeholder="Cari tanggal / kurir..."
                value={searchHistory}
                onChange={(e) => setSearchHistory(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-surface-container-low border border-primary/10 text-xs focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              />
              <span className="material-symbols-outlined text-[16px] text-outline absolute left-2.5 top-2">search</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-surface-container-low">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container text-on-surface-variant uppercase text-[10px] font-mono border-b border-primary/10">
                <tr>
                  <th className="p-3.5">ID &amp; Tanggal</th>
                  <th className="p-3.5">Petugas Kurir</th>
                  <th className="p-3.5">Bobot Timbang</th>
                  <th className="p-3.5">Kadar Air</th>
                  <th className="p-3.5">Status Verifikasi</th>
                  <th className="p-3.5 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {filteredHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-lowest/80 transition-colors">
                    <td className="p-3.5">
                      <span className="font-mono font-bold text-primary block">{item.id}</span>
                      <span className="text-[11px] text-outline">{item.requestedDate}</span>
                    </td>
                    <td className="p-3.5">
                      <span className="font-bold text-primary block">{item.courierName}</span>
                      <span className="text-[11px] text-on-surface-variant">{item.fleet}</span>
                    </td>
                    <td className="p-3.5">
                      <span className="font-mono font-bold text-sm text-primary">
                        {item.verifiedWeightKg || item.estimatedWeightKg} kg
                      </span>
                      <span className="text-[10px] text-outline block">2 Bak Food-Grade</span>
                    </td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-mono text-[11px] font-bold">
                        {item.moistureRate || '61%'} (Ideal)
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className="inline-flex items-center gap-1 text-primary font-bold text-xs">
                        <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                        <span>Terverifikasi Hub</span>
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => alert(`Bukti Timbangan Digital untuk ${item.id} (PDF) berhasil diunduh.`)}
                        className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        Unduh Bukti
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Permintaan Cepat (Triggered from Top Header button) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-primary/10 space-y-4 max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-primary/10">
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                  FORM PERMINTAAN PENJEMPUTAN
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                  Atur Jadwal Penjemputan Baru
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5 text-xs">
              <div>
                <label className="block font-semibold text-primary mb-1">Tanggal</label>
                <input
                  type="date"
                  required
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-surface-container-low border border-primary/10 font-semibold"
                />
              </div>

              <div>
                <label className="block font-semibold text-primary mb-1">Slot Waktu</label>
                <select
                  value={formTimeSlot}
                  onChange={(e) => setFormTimeSlot(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-surface-container-low border border-primary/10 font-semibold"
                >
                  <option value="Pagi (08:30 - 11:30 WIB)">Pagi (08:30 - 11:30 WIB)</option>
                  <option value="Siang (13:00 - 15:30 WIB)">Siang (13:00 - 15:30 WIB)</option>
                  <option value="Sore (16:00 - 18:00 WIB)">Sore (16:00 - 18:00 WIB)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-primary mb-1">Perkiraan Berat</label>
                  <input
                    type="number"
                    min="5"
                    max="100"
                    value={formEstimatedWeight}
                    onChange={(e) => setFormEstimatedWeight(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-surface-container-low border border-primary/10 font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-primary mb-1">Jumlah Bak</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formBinCount}
                    onChange={(e) => setFormBinCount(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-surface-container-low border border-primary/10 font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-primary mb-1">Alamat Penjemputan</label>
                <textarea
                  rows={2}
                  required
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-surface-container-low border border-primary/10 font-medium resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-primary mb-1">Catatan Tambahan</label>
                <input
                  type="text"
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-surface-container-low border border-primary/10"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary text-white font-bold hover:bg-primary/90"
                >
                  Konfirmasi Permintaan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
