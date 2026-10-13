import React, { useState } from 'react';

export default function HubAlertBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-surface-container rounded-3xl p-space-lg lg:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-sm">
        <div className="flex items-start gap-space-md max-w-4xl">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[24px]">notifications_active</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                Peringatan Ambang Batas Stok &amp; Kapasitas Hub
              </h3>
              <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed/60 text-on-secondary-container font-label-sm text-label-sm">
                Inspeksi Tim Lolos
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kapasitas ruang sterilisasi autoclave Hub Lembang - Bandung mencapai <strong>82%</strong>. Pasokan ampas kopi masuk mencukupi target produksi <strong>10.000 baglog</strong> minggu ini. Tidak ada anomali kontaminasi laboratorium terdeteksi.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={() => setModalOpen(true)}
            className="px-space-md py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-sm"
            type="button"
          >
            Buka Pengaturan Kapasitas Hub
          </button>
          <a
            href="https://wa.me/6281288007475"
            target="_blank"
            rel="noopener noreferrer"
            className="px-space-md py-2.5 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors text-center"
          >
            Hubungi Tim Mikologi Lab
          </a>
        </div>
      </section>

      {/* Simple Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-md w-full shadow-2xl border border-primary/10">
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              Pengaturan Kapasitas Hub Lembang - Bandung
            </h4>
            <p className="text-body-sm text-on-surface-variant mb-4">
              Kapasitas terpasang: 10.000 baglog / batch mingguan. Saat ini beroperasi pada 8.200 baglog (82%).
            </p>
            <div className="p-3 bg-surface-container-low rounded-2xl mb-4 text-xs space-y-1">
              <div>• Autoclave Chamber: 2 Unit Beroperasi</div>
              <div>• Chamber Pressure: 1.2 bar (Aman)</div>
              <div>• Pendinginan Sterilisasi: Ruang Cleanroom Lembang</div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-secondary transition-colors"
            >
              Simpan &amp; Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}
