import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PartnershipModal({ isOpen, onClose, initialRole = 'coffee-shop' }) {
  const [role, setRole] = useState(initialRole);
  const [formData, setFormData] = useState({
    businessName: '',
    picName: '',
    whatsapp: '',
    location: 'Bandung Kota (Dago, Braga, Riau)',
    volume: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleGoToDashboard = () => {
    onClose();
    if (role === 'coffee-shop') {
      navigate('/dashboard/coffee-shop');
    } else {
      navigate('/dashboard/farmer');
    }
  };

  return (
    <div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-primary/10 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
          aria-label="Tutup"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                KEMITRAAN EKOSISTEM SIRKULA
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
                Gabung Jaringan Sirkular B2B
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pilih jenis kemitraan Anda dan mulai integrasi limbah kopi atau pasokan baglog jamur.
              </p>
            </div>

            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-surface-container-low rounded-2xl mb-6">
              <button
                type="button"
                onClick={() => setRole('coffee-shop')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-label-md text-label-md transition-all ${
                  role === 'coffee-shop'
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">local_cafe</span>
                <span>Kedai Kopi</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('farmer')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-label-md text-label-md transition-all ${
                  role === 'farmer'
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                <span>Petani Jamur</span>
              </button>
            </div>

            {/* Quick Demo Jump Link */}
            <div className="mb-4 p-3 bg-secondary-fixed/30 border border-secondary/20 rounded-2xl flex items-center justify-between text-xs">
              <span className="text-primary font-medium">
                Ingin langsung melihat demo dashboard?
              </span>
              <button
                type="button"
                onClick={handleGoToDashboard}
                className="font-bold text-secondary hover:underline flex items-center gap-0.5"
              >
                <span>Buka Demo {role === 'coffee-shop' ? 'Kafe' : 'Petani'}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  {role === 'coffee-shop' ? 'Nama Kedai / Roastery' : 'Nama Kelompok Tani / Kumbung'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'coffee-shop' ? 'Contoh: Kopi Toko Djawa (Braga)' : 'Contoh: Kumbung Poktan Lembang Asri'}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    Nama Penanggung Jawab
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    No. WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Wilayah Operasional
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                >
                  <option>Bandung Kota (Dago, Braga, Riau)</option>
                  <option>Lembang &amp; Parongpong (Sentra Jamur)</option>
                  <option>Bandung Barat &amp; Maribaya</option>
                  <option>Bandung Selatan (Ciwidey &amp; Pengalengan)</option>
                  <option>Kota / Kabupaten Lain di Jawa Barat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  {role === 'coffee-shop' ? 'Estimasi Ampas Kopi Harian (kg)' : 'Kapasitas Baglog Dibutuhkan (unit/bulan)'}
                </label>
                <input
                  type="text"
                  placeholder={role === 'coffee-shop' ? 'Contoh: 5 - 15 kg/hari' : 'Contoh: 1.000 - 3.000 unit/bulan'}
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-all shadow-md"
                >
                  Kirim Pendaftaran Mitra
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              Pendaftaran Berhasil!
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Terima kasih <strong className="text-on-surface">{formData.businessName || 'Mitra'}</strong>. Tim Operasional Hub Sirkula Lembang - Bandung akan segera menghubungi nomor WhatsApp Anda untuk penjadwalan wadah &amp; logistik.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                onClick={handleGoToDashboard}
                className="flex-1 py-3 px-4 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Buka Dashboard {role === 'coffee-shop' ? 'Kafe' : 'Petani'}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
