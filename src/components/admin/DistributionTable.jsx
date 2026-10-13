import React, { useState } from 'react';
import { DISTRIBUTION_SHIPMENTS } from '../../data/mockData';

export default function DistributionTable() {
  const [filter, setFilter] = useState('all');
  const [actionAlert, setActionAlert] = useState(null);

  const filteredShipments = DISTRIBUTION_SHIPMENTS.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'shipping') return item.statusType === 'shipping';
    if (filter === 'completed') return item.statusType === 'completed';
    if (filter === 'pending') return item.statusType === 'pending';
    return true;
  });

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-space-lg">
      {/* Table Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <h2 className="font-headline-md text-headline-md text-primary font-semibold">
              Penyaluran Baglog ke Mitra Pembudidaya
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Daftar pesanan aktif dan status pengiriman ke kumbung petani jamur binaan di Lembang &amp; Bandung Raya.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-space-sm">
          <button
            onClick={() => setActionAlert('Jadwal distribusi baru telah ditambahkan ke antrian logistik!')}
            className="px-space-md py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all flex items-center gap-space-xs shadow-sm"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Tambah Jadwal Distribusi</span>
          </button>
          <button
            onClick={() => setActionAlert('Semua 4 batch sterilisasi autoclave berhasil divalidasi lab!')}
            className="px-space-md py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">checklist</span>
            <span>Validasi Batch</span>
          </button>
        </div>
      </div>

      {/* Interactive feedback alert */}
      {actionAlert && (
        <div className="p-3 bg-secondary-fixed/40 border border-secondary/20 rounded-2xl flex items-center justify-between text-secondary font-label-md text-label-md animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">info</span>
            <span>{actionAlert}</span>
          </div>
          <button onClick={() => setActionAlert(null)} className="text-secondary font-bold">✕</button>
        </div>
      )}

      {/* Sub Filter Tabs */}
      <div className="flex flex-wrap items-center gap-space-xs p-1 bg-surface-container-low rounded-2xl w-fit">
        <button
          onClick={() => setFilter('all')}
          className={`px-space-md py-1.5 rounded-xl font-label-sm text-label-sm transition-all ${
            filter === 'all'
              ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          type="button"
        >
          Semua Pengiriman ({DISTRIBUTION_SHIPMENTS.length})
        </button>
        <button
          onClick={() => setFilter('shipping')}
          className={`px-space-md py-1.5 rounded-xl font-label-sm text-label-sm transition-all ${
            filter === 'shipping'
              ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          type="button"
        >
          Dalam Pengiriman (2)
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-space-md py-1.5 rounded-xl font-label-sm text-label-sm transition-all ${
            filter === 'completed'
              ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          type="button"
        >
          Selesai Hari Ini (1)
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-space-md py-1.5 rounded-xl font-label-sm text-label-sm transition-all ${
            filter === 'pending'
              ? 'bg-surface-container-lowest text-primary shadow-xs font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          type="button"
        >
          Menunggu Muat (1)
        </button>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto -mx-space-xl px-space-xl pb-space-sm">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-2xl">
              <th className="py-space-md px-space-md rounded-l-2xl">MITRA PETANI</th>
              <th className="py-space-md px-space-md">JUMLAH BAGLOG</th>
              <th className="py-space-md px-space-md">LOKASI TUJUAN</th>
              <th className="py-space-md px-space-md">JADWAL TIBA</th>
              <th className="py-space-md px-space-md">KURIR / ARMADA</th>
              <th className="py-space-md px-space-md">STATUS</th>
              <th className="py-space-md px-space-md text-right rounded-r-2xl">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low text-on-surface font-body-sm text-body-sm bg-surface-container-lowest">
            {filteredShipments.map((row) => (
              <tr key={row.id} className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-space-md px-space-md font-semibold text-primary">
                  {row.farmerGroup}
                </td>
                <td className="py-space-md px-space-md font-semibold text-primary font-mono">
                  {row.units}
                </td>
                <td className="py-space-md px-space-md text-on-surface">{row.destination}</td>
                <td className="py-space-md px-space-md font-mono text-on-surface-variant">
                  {row.scheduledTime}
                </td>
                <td className="py-space-md px-space-md text-on-surface">{row.fleet}</td>
                <td className="py-space-md px-space-md">
                  {row.statusType === 'shipping' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      Dalam Pengiriman
                    </span>
                  )}
                  {row.statusType === 'completed' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">task_alt</span>
                      Selesai Hari Ini
                    </span>
                  )}
                  {row.statusType === 'pending' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                      Menunggu Muat
                    </span>
                  )}
                </td>
                <td className="py-space-md px-space-md text-right">
                  <button
                    onClick={() => setActionAlert(`Menghubungi kontak kurir armada ${row.fleet}...`)}
                    className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-sm text-label-sm transition-all inline-flex items-center gap-1 shadow-xs"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {row.statusType === 'completed' ? 'receipt_long' : 'contact_phone'}
                    </span>
                    <span>{row.statusType === 'completed' ? 'Lihat BAST' : 'Kontak Kurir'}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md bg-surface-container-low/50 -mx-space-xl px-space-xl py-space-md rounded-2xl">
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Menampilkan <strong>{filteredShipments.length} dari 28 pengiriman</strong> aktif siklus panen minggu ini.
        </span>
        <div className="flex items-center gap-space-md">
          <button
            onClick={() => setActionAlert('Daftar riwayat 28 batch lengkap dibuka.')}
            className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1"
          >
            <span>Lihat Semua 28 Riwayat Pengiriman Batch</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
          <button
            onClick={() => setActionAlert('Mengunduh file Manifest Distribusi Lembang - Bandung (CSV)...')}
            className="px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors inline-flex items-center gap-1"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Unduh Manifest (CSV)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
