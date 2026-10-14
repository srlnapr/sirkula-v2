import React, { useState } from 'react';
import { ADMIN_ORDERS_LIST } from '../../data/mockData';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

export default function OrderManagementSection() {
  const [orders, setOrders] = useDemoStorage(
    DEMO_STORAGE_KEYS.ADMIN_ORDERS,
    ADMIN_ORDERS_LIST
  );
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          const label =
            newStatus === 'pending'
              ? 'Menunggu Verifikasi'
              : newStatus === 'processing'
              ? 'Sedang Disiapkan'
              : newStatus === 'shipping'
              ? 'Dalam Pengiriman'
              : 'Selesai Diterima';
          return { ...ord, processingStatus: newStatus, processingLabel: label };
        }
        return ord;
      })
    );
  };

  const handlePaymentToggle = (orderId) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          const isPaid = ord.paymentStatus === 'paid';
          return {
            ...ord,
            paymentStatus: isPaid ? 'pending_verification' : 'paid',
            paymentLabel: isPaid ? 'Menunggu Bukti Transfer' : 'Lunas (Terverifikasi Kasir)',
          };
        }
        return ord;
      })
    );
  };

  const filteredOrders = orders.filter((o) => {
    const matchesFilter = statusFilter === 'all' || o.processingStatus === statusFilter;
    const matchesSearch =
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.product.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="manajemen-pesanan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>📦 MODUL PESANAN B2B PETANI</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Manajemen Pesanan Baglog
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Fitur 5: Pantau seluruh pesanan baglog dari petani, konfirmasi pembayaran, dan perbarui status logistik pengiriman.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono font-bold text-xs">
            {orders.length} Pesanan Aktif
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-[240px] max-w-md bg-surface-container-low px-3.5 py-2 rounded-xl border border-outline-variant/30 text-xs">
          <span className="material-symbols-outlined text-outline text-[18px]">search</span>
          <input
            type="text"
            placeholder="Cari ID pesanan, nama kelompok tani, produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-xs text-on-surface"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-xs font-semibold text-primary outline-none"
          >
            <option value="all">Semua Status Pemrosesan</option>
            <option value="pending">Menunggu Verifikasi</option>
            <option value="processing">Sedang Disiapkan di Hub</option>
            <option value="shipping">Dalam Pengiriman Kurir</option>
            <option value="completed">Selesai Diterima</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-2xl border border-primary/10">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
            <tr>
              <th className="py-3 px-4">ID &amp; Tanggal</th>
              <th className="py-3 px-4">Mitra Pembudidaya</th>
              <th className="py-3 px-4">Produk &amp; Volume</th>
              <th className="py-3 px-4">Status Pembayaran</th>
              <th className="py-3 px-4">Status Pemrosesan</th>
              <th className="py-3 px-4">Armada Kurir</th>
              <th className="py-3 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 text-on-surface">
            {filteredOrders.map((ord) => (
              <tr key={ord.id} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-3 px-4">
                  <strong className="font-mono text-primary font-bold block">{ord.id}</strong>
                  <span className="text-[11px] text-outline">{ord.orderDate}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="font-bold text-on-surface">{ord.farmerName}</div>
                  <span className="text-[11px] text-on-surface-variant font-mono">B2B Buyer</span>
                </td>
                <td className="py-3 px-4">
                  <div className="font-semibold text-primary">{ord.product}</div>
                  <div className="text-[11px] font-bold text-secondary">{ord.quantity} • {ord.totalAmount}</div>
                </td>
                <td className="py-3 px-4">
                  <button
                    type="button"
                    onClick={() => handlePaymentToggle(ord.id)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer transition-colors ${
                      ord.paymentStatus === 'paid'
                        ? 'bg-secondary-fixed/50 text-secondary hover:bg-secondary-fixed'
                        : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                    }`}
                    title="Klik untuk verifikasi status lunas"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {ord.paymentStatus === 'paid' ? 'check_circle' : 'hourglass_top'}
                    </span>
                    <span>{ord.paymentLabel}</span>
                  </button>
                </td>
                <td className="py-3 px-4">
                  <select
                    value={ord.processingStatus}
                    onChange={(e) => handleStatusChange(ord.id, e.target.value)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border-none outline-none cursor-pointer ${
                      ord.processingStatus === 'completed'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : ord.processingStatus === 'shipping'
                        ? 'bg-primary text-white'
                        : ord.processingStatus === 'processing'
                        ? 'bg-secondary-fixed/50 text-primary'
                        : 'bg-surface-container text-outline'
                    }`}
                  >
                    <option value="pending">Menunggu Verifikasi</option>
                    <option value="processing">Sedang Disiapkan</option>
                    <option value="shipping">Dalam Pengiriman Kurir</option>
                    <option value="completed">Selesai Diterima</option>
                  </select>
                </td>
                <td className="py-3 px-4 text-on-surface-variant text-[11px]">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[14px]">local_shipping</span>
                    <span>{ord.fleetAssigned}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => alert(`Cetak Surat Jalan & Invoice #${ord.id}`)}
                    className="p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-bold text-xs"
                    title="Cetak Surat Jalan (DO)"
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
