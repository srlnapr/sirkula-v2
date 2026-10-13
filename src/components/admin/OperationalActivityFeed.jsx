import React, { useState } from 'react';

export default function OperationalActivityFeed() {
  const [filter, setFilter] = useState('all');

  const activities = [
    {
      id: 'ACT-01',
      time: '10:45 WIB',
      category: 'logistics',
      categoryLabel: 'Logistik Masuk',
      title: 'Penimbangan Ampas Masuk Terverifikasi',
      detail: 'Kopi Toko Djawa (Braga) • 21.0 kg ampas espresso basah (Kadar air 62%, QC Lolos). Kurir: Ilham (Van #02).',
      icon: 'scale',
      badgeColor: 'bg-secondary-fixed/50 text-secondary',
    },
    {
      id: 'ACT-02',
      time: '10:15 WIB',
      category: 'production',
      categoryLabel: 'Produksi Substrat',
      title: 'Autoclave Siklus #04 Selesai Pasteurisasi',
      detail: 'Chamber 121°C 1.2 bar tuntas 90 menit. 800 unit baglog siap dipindahkan ke ruang pendinginan inokulasi steril.',
      icon: 'heat_pump',
      badgeColor: 'bg-primary-fixed/50 text-primary',
    },
    {
      id: 'ACT-03',
      time: '09:30 WIB',
      category: 'distribution',
      categoryLabel: 'Penyaluran Petani',
      title: 'Pengiriman DIST-01 Diterima Kelompok Tani',
      detail: 'Poktan Lembang Asri (Lembang) menerima 2.500 baglog varian tiram putih. BAST digital terbit & terverifikasi.',
      icon: 'task_alt',
      badgeColor: 'bg-secondary-container text-on-secondary-container',
    },
    {
      id: 'ACT-04',
      time: '08:45 WIB',
      category: 'logistics',
      categoryLabel: 'Armada Siaga',
      title: 'Keberangkatan Armada Kurir Van #04',
      detail: 'Rute Klaster Dago & Riau Bandung dimulai dengan 4 titik kedai kopi. Driver Rahmat aktif on-time SLA 48 jam.',
      icon: 'local_shipping',
      badgeColor: 'bg-secondary-fixed/50 text-secondary',
    },
    {
      id: 'ACT-05',
      time: '08:00 WIB',
      category: 'qc',
      categoryLabel: 'Laboratorium QC',
      title: 'Inspeksi Kualitas HEPA Cleanroom Lembang',
      detail: 'Filtrasi partikel 99.98%, ruang inokulasi steril bebas spora Trichoderma liar. Sertifikasi higienitas harian aktif.',
      icon: 'verified',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
  ];

  const filteredActivities =
    filter === 'all'
      ? activities
      : activities.filter((act) => act.category === filter);

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-primary/5 flex flex-col gap-6">
      {/* Header with Title and Live Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
              Log Riwayat &amp; Audit Operasional Hub
            </h3>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              Live Feed BDG-01
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Pencatatan real-time rantai pasok sirkular dari penjemputan ampas hingga serah terima baglog.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-container rounded-full text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-primary text-on-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('logistics')}
            className={`px-3 py-1 rounded-full font-semibold transition-all ${
              filter === 'logistics'
                ? 'bg-primary text-on-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Logistik Kurir
          </button>
          <button
            onClick={() => setFilter('production')}
            className={`px-3 py-1 rounded-full font-semibold transition-all ${
              filter === 'production'
                ? 'bg-primary text-on-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Sterilisasi
          </button>
        </div>
      </div>

      {/* Timeline Items */}
      <div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-primary/10">
        {filteredActivities.map((act) => (
          <div key={act.id} className="relative group">
            {/* Dot Indicator */}
            <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors border border-outline-variant/20 flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full font-label-sm text-[10px] font-bold uppercase tracking-wider ${act.badgeColor}`}>
                    {act.categoryLabel}
                  </span>
                  <strong className="font-label-md text-label-md text-primary font-semibold">
                    {act.title}
                  </strong>
                </div>
                <span className="font-mono text-xs text-on-surface-variant font-medium bg-surface-container-lowest px-2 py-0.5 rounded-md border border-outline-variant/30">
                  {act.time}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {act.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-2 border-t border-primary/5 text-xs text-on-surface-variant">
        <span>Menampilkan 5 aktivitas operasional terkini hari ini</span>
        <button
          onClick={() => alert('Log operasional lengkap (142 event) telah diexport ke CSV.')}
          className="text-primary hover:text-secondary font-bold inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Unduh Log Lengkap (CSV)</span>
          <span className="material-symbols-outlined text-[14px]">download</span>
        </button>
      </div>
    </div>
  );
}
