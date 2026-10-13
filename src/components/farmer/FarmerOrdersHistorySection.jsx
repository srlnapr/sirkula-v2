import React, { useState } from 'react';
import { FARMER_ORDERS_DATA } from '../../data/mockData';

export default function FarmerOrdersHistorySection({ orders = FARMER_ORDERS_DATA }) {
  const [selectedTrackingOrder, setSelectedTrackingOrder] = useState(orders[0] || null);

  return (
    <section id="riwayat-pesanan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>📦 RIWAYAT &amp; PELACAKAN LOGISTIK</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Riwayat Pesanan &amp; Tracking Distribusi Baglog
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Fitur 5 &amp; 6: Pantau proses pengadaan baglog, status pelunasan, serta posisi pengantaran armada kurir menuju kumbung Anda.
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono font-bold text-xs self-start sm:self-auto">
          {orders.length} Pesanan Terdata
        </span>
      </div>

      {/* ================= FITUR 6: LIVE TRACKING PENGIRIMAN ACTIVE ORDER ================= */}
      {selectedTrackingOrder && (
        <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-low border border-primary/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-primary/10">
            <div>
              <span className="text-[10px] font-mono text-outline uppercase block">PELACAKAN PENGIRIMAN AKTIF</span>
              <h3 className="font-headline-sm text-sm sm:text-base font-bold text-primary flex items-center gap-2">
                <span>{selectedTrackingOrder.id}</span>
                <span className="text-xs font-normal text-on-surface-variant">• {selectedTrackingOrder.product}</span>
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary text-white font-mono font-bold text-xs">
                ETA: {selectedTrackingOrder.eta}
              </span>
            </div>
          </div>

          {/* Stepper Timeline */}
          {selectedTrackingOrder.trackingSteps ? (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-2">
              {selectedTrackingOrder.trackingSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-1 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 relative">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        step.completed
                          ? 'bg-secondary text-primary'
                          : step.isCurrent
                          ? 'bg-primary text-white animate-pulse'
                          : 'bg-surface-container text-outline'
                      }`}
                    >
                      {step.completed ? '✓' : idx + 1}
                    </span>
                    <span className="font-label-md text-xs font-bold text-primary leading-tight">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-outline font-mono pl-8">{step.time}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-on-surface-variant">Pesanan telah selesai diterima dan terverifikasi.</p>
          )}

          {/* Courier Card & WA Contact */}
          <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-secondary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">local_shipping</span>
              </div>
              <div>
                <span className="font-bold text-primary block">
                  Kurir Logistik: {selectedTrackingOrder.courierName} ({selectedTrackingOrder.fleet})
                </span>
                <span className="text-on-surface-variant text-[11px]">
                  Rute Hub Lembang ke Sentra Kumbung Lembang &amp; Bandung Barat
                </span>
              </div>
            </div>

            {selectedTrackingOrder.courierPhone && (
              <a
                href={`https://wa.me/${selectedTrackingOrder.courierPhone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs flex items-center gap-1.5 transition-colors self-end sm:self-auto"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">chat</span>
                <span>Hubungi Driver WA</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* ================= FITUR 5: TABEL RIWAYAT PESANAN LENGKAP ================= */}
      <div className="space-y-3">
        <h4 className="font-label-md text-label-md font-bold text-primary">
          Riwayat Semua Transaksi Pembelian Baglog
        </h4>

        <div className="overflow-x-auto rounded-2xl border border-primary/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
              <tr>
                <th className="py-3 px-4">No. PO &amp; Tanggal</th>
                <th className="py-3 px-4">Produk Baglog</th>
                <th className="py-3 px-4">Jumlah Unit</th>
                <th className="py-3 px-4">Total Biaya</th>
                <th className="py-3 px-4">Status Pembayaran</th>
                <th className="py-3 px-4">Status Distribusi</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 text-on-surface">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-4">
                    <strong className="font-mono text-primary font-bold block">{ord.id}</strong>
                    <span className="text-[11px] text-outline">{ord.date}</span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-primary">{ord.product}</td>
                  <td className="py-3 px-4 font-mono font-bold text-secondary">{ord.quantity} unit</td>
                  <td className="py-3 px-4 font-mono font-bold text-primary">{ord.totalPrice}</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-bold text-[11px] inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">check_circle</span>
                      <span>{ord.paymentLabel}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        ord.status === 'shipping'
                          ? 'bg-primary text-white animate-pulse'
                          : 'bg-secondary-container text-on-secondary-container'
                      }`}
                    >
                      {ord.statusLabel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => setSelectedTrackingOrder(ord)}
                      className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-bold text-[11px] transition-colors cursor-pointer"
                    >
                      Lacak
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
