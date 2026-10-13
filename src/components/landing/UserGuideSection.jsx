import React, { useState } from 'react';

export default function UserGuideSection({ onOpenAuth }) {
  const [activeRole, setActiveRole] = useState('coffee-shop');

  const coffeeShopSteps = [
    {
      step: '01',
      title: 'Pendaftaran Akun & Validasi Lokasi Kedai',
      desc: 'Daftarkan kedai kopi Anda melalui formulir kemitraan online. Masukkan alamat, estimasi ampas harian, dan nomor WhatsApp kontak PIC.',
      tip: 'Gratis biaya pendaftaran & tidak ada kontrak biaya limbah.',
      icon: 'app_registration',
    },
    {
      step: '02',
      title: 'Penerimaan Wadah Kedap Food-Grade',
      desc: 'Kurir Sirkula mengantarkan bak penampung khusus kedap udara dengan seal anti-bau dan anti-bakteri langsung ke bar kedai Anda.',
      tip: 'Wadah higienis berkapasitas 10–15 kg ampas espresso basah.',
      icon: 'inventory_2',
    },
    {
      step: '03',
      title: 'Penjemputan Rutin Terjadwal oleh Kurir',
      desc: 'Petugas kurir menjemput bak ampas setiap 48 jam sesuai jadwal klaster, menimbang di tempat, dan menukarnya dengan wadah bersih baru.',
      tip: 'SLA penjemputan terjaga & kurir tiba tepat waktu.',
      icon: 'local_shipping',
    },
    {
      step: '04',
      title: 'Penerbitan Sertifikat ESG & Laporan Dampak',
      desc: 'Akses dashboard kedai untuk melihat total kg ampas yang dialihkan dari TPA, estimasi penurunan jejak karbon, serta unduh sertifikat hijau resmi.',
      tip: 'Dapat dipajang di bar kafe untuk branding keberlanjutan kedai.',
      icon: 'workspace_premium',
    },
  ];

  const farmerSteps = [
    {
      step: '01',
      title: 'Registrasi Mitra & Konsultasi Kapasitas Kumbung',
      desc: 'Daftarkan kelompok tani atau kumbung mandiri Anda. Tentukan kapasitas rak baglog dan jadwal target siklus panen mingguan.',
      tip: 'Konsultasi gratis bersama teknisi mikologi pendamping Sirkula.',
      icon: 'assignment_ind',
    },
    {
      step: '02',
      title: 'Pemesanan Baglog Substrat (Rp 3.000 / unit)',
      desc: 'Pesan jumlah baglog yang Anda butuhkan (mulai dari 100 unit atau paket kumbung 500 unit). Dapatkan kepastian harga kontrak murah tanpa fluktuasi.',
      tip: 'Hemat 20% biaya operasional dibanding harga pasar Rp 3.750.',
      icon: 'shopping_bag',
    },
    {
      step: '03',
      title: 'Pengantaran Kurir Sirkula Langsung ke Kumbung',
      desc: 'Armada logistik van/pickup Sirkula mengantarkan baglog steril siap inokulasi langsung ke pintu kumbung Anda dalam kondisi aman.',
      tip: 'Garansi penggantian 100% jika ditemukan kerusakan di jalan.',
      icon: 'local_shipping',
    },
    {
      step: '04',
      title: 'Panen Jamur & Jaminan Serap (Buyback 100%)',
      desc: 'Petik jamur tiram putih berkualitas grade A dalam 21–25 hari. Tim offtaker Sirkula siap menyerap seluruh hasil panen dengan harga kontrak stabil.',
      tip: 'Petani fokus budidaya tanpa pusing memikirkan pasar penjualan.',
      icon: 'payments',
    },
  ];

  const currentSteps = activeRole === 'coffee-shop' ? coffeeShopSteps : farmerSteps;

  return (
    <section id="panduan" className="w-full bg-surface-container-low py-20 scroll-mt-28 border-t border-primary/5">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span>📖 PANDUAN PENGGUNA PLATFORM</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary font-semibold tracking-tight">
            Langkah Mudah Bergabung &amp; Memanfaatkan Ekosistem Sirkula
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Panduan operasional lengkap dari registrasi awal, penjemputan ampas, pemesanan baglog, hingga jaminan serap panen.
          </p>

          {/* Role Switcher Pills */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-surface-container rounded-full mt-4 border border-primary/10 shadow-xs">
            <button
              onClick={() => setActiveRole('coffee-shop')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md text-sm font-bold transition-all cursor-pointer ${
                activeRole === 'coffee-shop'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">local_cafe</span>
              <span>Panduan Mitra Kedai Kopi (Supplier)</span>
            </button>
            <button
              onClick={() => setActiveRole('farmer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md text-sm font-bold transition-all cursor-pointer ${
                activeRole === 'farmer'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">yard</span>
              <span>Panduan Petani Jamur (Buyer)</span>
            </button>
          </div>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((s, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 sm:p-7 rounded-3xl border border-primary/10 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between pb-4">
                  <span className="font-headline-md text-headline-md font-bold text-primary/30 font-mono">
                    {s.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/40 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">{s.icon}</span>
                  </div>
                </div>

                <h3 className="font-title-md text-title-md font-bold text-primary leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-on-surface-variant mt-2.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Tip Badge */}
              <div className="mt-5 pt-3.5 border-t border-outline-variant/20 flex items-start gap-2 text-[11px] text-secondary font-medium">
                <span className="material-symbols-outlined text-[15px] shrink-0 mt-0.5">tips_and_updates</span>
                <span>{s.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar inside Guide */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-primary/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-secondary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                {activeRole === 'coffee-shop'
                  ? 'Siap Menjadi Mitra Kedai Berkelanjutan?'
                  : 'Siap Tingkatkan Hasil Panen Jamur Anda?'}
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Pendaftaran hanya membutuhkan waktu 2 menit. Tim operasional Hub Lembang akan langsung memproses akun Anda.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth(activeRole, 'register')}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-all shadow-sm cursor-pointer"
            >
              Daftar Sekarang
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth(activeRole, 'login')}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-medium transition-colors cursor-pointer"
            >
              Masuk Akun
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
