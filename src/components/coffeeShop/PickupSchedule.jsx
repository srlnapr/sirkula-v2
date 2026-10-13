import React, { useState } from 'react';
import { COFFEE_SHOP_DATA } from '../../data/mockData';

export default function PickupSchedule() {
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [pickupRequested, setPickupRequested] = useState(false);

  const handleRequestPickup = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setPickupRequested(true);
    setTimeout(() => setPickupRequested(false), 5000);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Section Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary font-semibold">
            Riwayat &amp; Jadwal Penjemputan
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Pantau logistik sirkular dan penimbangan ampas kopi secara transparan.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary text-on-primary px-5 py-3 rounded-full font-label-md text-label-md shadow-md transition-all duration-200"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Atur Jadwal Baru</span>
        </button>
      </div>

      {pickupRequested && (
        <div className="p-4 bg-secondary-fixed/50 border border-secondary rounded-2xl flex items-center justify-between text-secondary font-semibold animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span>Permintaan penjemputan baru terkirim ke Armada Hub! Kurir dijadwalkan dalam 48 jam.</span>
          </div>
          <button onClick={() => setPickupRequested(false)} className="text-secondary">✕</button>
        </div>
      )}

      {/* Upcoming Highlighted Pickup Alert Card */}
      <div className="bg-gradient-to-r from-primary-fixed/40 via-surface-container-low to-surface-container-lowest p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[24px]">local_shipping</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-title-md text-title-md text-primary font-bold">
                26 Okt 2024 (Besok)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                Armada Dijadwalkan
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Estimasi beban: ~20.0 kg • 2 Bak Sirkula Standar Food-Grade
            </p>
          </div>
        </div>
        <button
          onClick={() => alert('Driver Rahmat sedang menyelesaikan rute Sokaraja - ETA 09:00 WIB')}
          className="self-start sm:self-center text-primary font-label-md text-label-md hover:underline flex items-center gap-1 font-semibold"
          type="button"
        >
          Rincian Rute <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      {/* Filter Tabs Container */}
      <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] flex flex-col space-y-6">
        <div className="flex items-center justify-between border-b-0 pb-2">
          <div className="flex items-center gap-1 bg-surface-container-low p-1.5 rounded-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
                filter === 'all'
                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Semua
            </button>
            <button
              onClick={() => setFilter('scheduled')}
              className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
                filter === 'scheduled'
                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Terjadwal
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all ${
                filter === 'completed'
                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Selesai
            </button>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Menampilkan {COFFEE_SHOP_DATA.pickups.length} dari 18 riwayat
          </span>
        </div>

        {/* Waste Intake List */}
        <div className="flex flex-col space-y-3">
          {COFFEE_SHOP_DATA.pickups.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-container-low/60 hover:bg-surface-container-low transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">scale</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      {item.date}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.time}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Petugas: {item.officer}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4">
                <div className="text-right">
                  <span className="font-title-md text-title-md font-bold text-primary">
                    {item.weight}
                  </span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant">
                    Kadar Air {item.moisture}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* History Footer & Pagination Link */}
        <div className="pt-4 flex items-center justify-between">
          <button
            onClick={() => alert('Menampilkan seluruh 18 riwayat penjemputan dari log server')}
            className="font-label-md text-label-md text-secondary hover:text-primary font-semibold flex items-center gap-1 group"
          >
            <span>Lihat Semua 18 Riwayat Penjemputan</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
          <button
            onClick={() => alert('File CSV Logistik terunduh: sana-coffee-waste-log.csv')}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface flex items-center gap-1"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Unduh CSV Logistik</span>
          </button>
        </div>
      </div>

      {/* Modal Atur Jadwal Baru */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-md w-full shadow-2xl border border-primary/10">
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              Jadwalkan Penjemputan Ampas Kopi
            </h4>
            <p className="text-body-sm text-on-surface-variant mb-4">
              Pilih tanggal &amp; perkiraan jumlah bak penampung ampas kopi untuk armada kurir Sirkula.
            </p>
            <form onSubmit={handleRequestPickup} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Jumlah Bak Sirkula (Kapasitas @10kg)
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="2"
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Preferensi Slot Waktu
                </label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm">
                  <option>Pagi (08:30 - 11:30 WIB)</option>
                  <option>Sore (14:30 - 17:30 WIB)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Catatan untuk Driver
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Titip di area barista pintu samping"
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-sm"
                />
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
                  Konfirmasi Jadwal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
