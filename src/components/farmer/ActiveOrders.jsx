import React from 'react';

export default function ActiveOrders() {
  return (
    <div className="flex flex-col gap-6">
      {/* Order Summary Card: Pesanan Baglog Aktif */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="font-title-md text-title-md text-primary font-semibold">
            Pesanan Baglog Aktif
          </h4>
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
        </div>
        <div className="flex flex-col gap-3 bg-surface-container-low p-4 rounded-2xl">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block font-semibold">
                ID Pesanan
              </span>
              <span className="font-label-md text-label-md font-bold text-primary font-mono">
                PO #BGL-2024-88
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold font-mono">
              500 Unit
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Pengiriman dari Hub Lembang - Bandung Siap Inokulasi
          </p>
          <div className="pt-2 flex flex-col gap-1.5">
            <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm font-semibold text-secondary">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              Armada Pengantar Menuju Kumbung (ETA 14:00 WIB)
            </span>
            <span className="font-body-sm text-body-sm text-outline pl-5">
              Driver: Pak Budi (Pickup Box #02)
            </span>
          </div>
        </div>
      </div>

      {/* Agronomist Tips Card */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-3">
        <div className="flex items-center gap-2.5 text-primary">
          <div className="w-8 h-8 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[18px]">lightbulb</span>
          </div>
          <h4 className="font-title-md text-title-md font-semibold">
            Tips Agronomi Kelembaban Kumbung
          </h4>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Jaga ventilasi spora dan semprot misting 3x sehari saat pinhead muncul untuk mencegah pengeringan tudung jamur serta memaksimalkan berat basah saat panen di iklim sejuk Lembang &amp; Bandung.
        </p>
      </div>
    </div>
  );
}
