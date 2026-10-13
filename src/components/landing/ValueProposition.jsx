import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartnershipModal from './PartnershipModal';

export default function ValueProposition() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('coffee-shop');

  const openModal = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };
  return (
    <section className="w-full max-w-[1360px] mx-auto px-margin-mobile md:px-margin py-20 scroll-mt-28" id="solusi">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
        <span className="font-label-sm text-label-sm px-4 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed uppercase tracking-wider font-bold">
          NILAI TAMBAH SIRKULAR
        </span>
        <h2 className="font-headline-xl text-headline-xl text-primary font-semibold">
          Solusi Simbiotik untuk Dua Sisi Industri
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Sirkula menjembatani kesenjangan ekonomi limbah: mengeliminasi biaya pembuangan kafe sembari memangkas ongkos produksi budidaya jamur pedesaan di Lembang &amp; Bandung Raya.
        </p>
      </div>

      {/* Dual Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
        {/* Card A: Untuk Coffee Shop */}
        <div id="mitra-kopi" className="scroll-mt-28 bg-surface-container-lowest rounded-3xl p-8 lg:p-10 border border-primary/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-6">
              <span className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-bold uppercase tracking-wider">
                Untuk Coffee Shop &amp; Roastery
              </span>
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">storefront</span>
              </div>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">
              Zero-Cost Waste Management &amp; Valuasi ESG Kafe
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 mb-8">
              Ubah residu espresso yang biasanya memenuhi tempat sampah umum menjadi instrumen kredensial keberlanjutan yang memikat pelanggan conscious-consumer.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed/60 flex items-center justify-center text-on-secondary-fixed shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-on-surface block">
                    Zero-Cost Waste Management
                  </strong>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Pemberian wadah penampung kedap udara antimikroba gratis serta penjemputan berkala tanpa pungutan retribusi sampah.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed/60 flex items-center justify-center text-on-secondary-fixed shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-on-surface block">
                    Penjemputan Kurir Terjadwal (SLA 48 Jam)
                  </strong>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Penjemputan rutin teratur oleh tim kurir lapangan Sirkula berdasarkan kapasitas harian kedai, lengkap dengan wadah higienis.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed/60 flex items-center justify-center text-on-secondary-fixed shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-on-surface block">
                    Real-Time ESG Dashboard
                  </strong>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Pantau total ampas kopi teralihkan dari TPA dan unduh sertifikat resmi reduksi emisi karbon untuk laporan pertanggungjawaban usaha.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed/60 flex items-center justify-center text-on-secondary-fixed shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-on-surface block">
                    Sirkula Eco-Badge &amp; QR Table Standee
                  </strong>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Dapatkan tanda pengenal kafe ramah lingkungan dan kartu meja interaktif agar pelanggan dapat melihat dampak dari kopi yang mereka seruput.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-8 mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard/coffee-shop"
              className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md px-5 py-2.5 rounded-full shadow-sm transition-all font-semibold"
            >
              <span>Buka Portal Kafe</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <button
              type="button"
              onClick={() => openModal('coffee-shop')}
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold hover:text-secondary px-3 py-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              <span>Daftarkan Kafe Baru</span>
            </button>
          </div>
        </div>

        {/* Card B: Untuk Pembudidaya Jamur */}
        <div id="petani-jamur" className="scroll-mt-28 bg-primary-container text-on-primary rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-6">
              <span className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-primary text-secondary-fixed font-bold uppercase tracking-wider">
                Untuk Pembudidaya Jamur
              </span>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">yard</span>
              </div>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-primary font-semibold">
              Substrat Baglog Berkualitas dengan Efisiensi Biaya Signifikan
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed-dim mt-2 mb-8">
              Atasi kelangkaan serbuk gergaji kayu dengan substrat alternatif kaya nitrogen yang meningkatkan laju pertumbuhan dan kualitas panen jamur tiram putih.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-primary-fixed block">
                    Baglog Tinggi Kandungan Nitrogen
                  </strong>
                  <span className="font-body-sm text-body-sm text-primary-fixed-dim">
                    Formulasi ampas kopi terfermentasi mempercepat masa kolonisasi miselium hingga 25% lebih pesat daripada serbuk kayu biasa.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-primary-fixed block">
                    Harga Rp 3.000 / unit (20% Lebih Hemat)
                  </strong>
                  <span className="font-body-sm text-body-sm text-primary-fixed-dim">
                    Kepastian pasokan bahan baku kontinu memotong fluktuasi harga tengkulak serbuk kayu saat musim penghujan.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-primary-fixed block">
                    Farmer Yield Tracker &amp; Agronomis Pendamping
                  </strong>
                  <span className="font-body-sm text-body-sm text-primary-fixed-dim">
                    Panduan SOP suhu kumbung, pengaturan ventilasi kelembapan, dan estimasi waktu petik panen bersama tim spesialis mikologi kami.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <strong className="font-label-md text-label-md text-primary-fixed block">
                    Garansi Sterilisasi Tanpa Kontaminasi
                  </strong>
                  <span className="font-body-sm text-body-sm text-primary-fixed-dim">
                    Setiap baglog melewati sterilisasi autoclave 121°C 90 menit untuk memastikan higienitas spora bebas kapang Trichoderma.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-8 mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard/farmer"
              className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim font-label-md text-label-md px-5 py-2.5 rounded-full shadow-sm transition-all font-bold"
            >
              <span>Buka Portal Petani</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <button
              type="button"
              onClick={() => openModal('farmer')}
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary-fixed font-bold hover:text-white px-3 py-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>Daftar Kemitraan Kumbung</span>
            </button>
          </div>
        </div>
      </div>

      <PartnershipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialRole={selectedRole}
      />
    </section>
  );
}
