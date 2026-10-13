import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = 'login', // 'login' | 'register'
  initialRole = 'coffee-shop', // 'coffee-shop' | 'farmer' | 'admin'
}) {
  const [mode, setMode] = useState(initialMode);
  const [role, setRole] = useState(initialRole);
  const [loginForm, setLoginForm] = useState({
    identifier: '',
    password: '',
  });
  const [regForm, setRegForm] = useState({
    businessName: '',
    picName: '',
    whatsapp: '',
    location: 'Bandung Kota (Dago, Braga, Riau)',
    volume: '',
  });
  const [regSuccess, setRegSuccess] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Auto-fill sample ID when changing role in login mode
  const getDemoCredentials = (targetRole) => {
    if (targetRole === 'coffee-shop') {
      return { id: 'SRK-BDG-8821', pass: '••••••••', path: '/dashboard/coffee-shop' };
    }
    if (targetRole === 'farmer') {
      return { id: 'SRK-FARM-042', pass: '••••••••', path: '/dashboard/farmer' };
    }
    return { id: 'HUB-BDG-01', pass: '••••••••', path: '/admin' };
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onClose();
    const creds = getDemoCredentials(role);
    navigate(creds.path);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegSuccess(true);
  };

  const handleQuickDemo = (demoRole) => {
    onClose();
    const creds = getDemoCredentials(demoRole);
    navigate(creds.path);
  };

  return (
    <div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-primary/10 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          ✕
        </button>

        {/* Mode Switcher Tabs (Masuk vs Daftar) */}
        <div className="grid grid-cols-2 p-1.5 bg-surface-container-low rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setRegSuccess(false);
            }}
            className={`py-2.5 rounded-xl font-label-md text-sm font-bold transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Masuk Akun (Login)
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setRegSuccess(false);
            }}
            className={`py-2.5 rounded-xl font-label-md text-sm font-bold transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Daftar Mitra (Registrasi)
          </button>
        </div>

        {/* ================= MODE: LOGIN ================= */}
        {mode === 'login' && (
          <div className="space-y-5">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                AUTENTIKASI PENGGUNA
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
                Pilih Peran &amp; Masuk Portal
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Akses dashboard operasional berdasarkan peran akun Anda di ekosistem Sirkula.
              </p>
            </div>

            {/* Role Selector 3 Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRole('coffee-shop')}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  role === 'coffee-shop'
                    ? 'bg-primary text-white border-primary shadow-xs'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/30'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">local_cafe</span>
                <span className="font-label-md text-[11px] font-bold">Kedai Kopi</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('farmer')}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  role === 'farmer'
                    ? 'bg-primary text-white border-primary shadow-xs'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/30'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">yard</span>
                <span className="font-label-md text-[11px] font-bold">Petani Jamur</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  role === 'admin'
                    ? 'bg-primary text-white border-primary shadow-xs'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/30'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
                <span className="font-label-md text-[11px] font-bold">Admin Hub</span>
              </button>
            </div>

            {/* Quick Demo Credentials Autofill Banner */}
            <div className="p-3 bg-secondary-fixed/30 border border-secondary/20 rounded-2xl flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-primary block">Akun Uji Coba (Demo):</span>
                <span className="text-on-surface-variant font-mono">
                  ID: {getDemoCredentials(role).id}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleQuickDemo(role)}
                className="px-3 py-1.5 rounded-full bg-secondary text-primary font-bold text-xs hover:bg-secondary-fixed transition-colors"
              >
                Masuk Instan
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1 uppercase tracking-wider">
                  ID Mitra / Email Terdaftar
                </label>
                <input
                  type="text"
                  required
                  placeholder={`Contoh: ${getDemoCredentials(role).id}`}
                  defaultValue={getDemoCredentials(role).id}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1 uppercase tracking-wider">
                  Kata Sandi / PIN
                </label>
                <input
                  type="password"
                  required
                  defaultValue="123456"
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Masuk ke Dashboard {role === 'coffee-shop' ? 'Kedai Kopi' : role === 'farmer' ? 'Petani Jamur' : 'Admin Hub'}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>
          </div>
        )}

        {/* ================= MODE: REGISTER ================= */}
        {mode === 'register' && !regSuccess && (
          <div className="space-y-5">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                REGISTRASI MITRA BARU
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
                Gabung Ekosistem Sirkula
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Pilih kategori kemitraan untuk mulai integrasi ampas kopi atau pemesanan baglog jamur.
              </p>
            </div>

            {/* Role Switcher 2 Buttons for Registration */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('coffee-shop')}
                className={`py-2.5 px-3 rounded-2xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  role === 'coffee-shop'
                    ? 'bg-primary text-white border-primary shadow-xs font-bold'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/30 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">local_cafe</span>
                <span className="text-xs">Kedai Kopi (Supplier)</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('farmer')}
                className={`py-2.5 px-3 rounded-2xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  role === 'farmer'
                    ? 'bg-primary text-white border-primary shadow-xs font-bold'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/30 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">yard</span>
                <span className="text-xs">Petani Jamur (Buyer)</span>
              </button>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  {role === 'coffee-shop' ? 'Nama Kedai Kopi / Roastery' : 'Nama Kelompok Tani / Kumbung'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'coffee-shop' ? 'Contoh: Kopi Toko Djawa (Braga)' : 'Contoh: Kumbung Poktan Lembang Asri'}
                  value={regForm.businessName}
                  onChange={(e) => setRegForm({ ...regForm, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    Nama Penanggung Jawab (PIC)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={regForm.picName}
                    onChange={(e) => setRegForm({ ...regForm, picName: e.target.value })}
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
                    value={regForm.whatsapp}
                    onChange={(e) => setRegForm({ ...regForm, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Wilayah Operasional
                </label>
                <select
                  value={regForm.location}
                  onChange={(e) => setRegForm({ ...regForm, location: e.target.value })}
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
                  {role === 'coffee-shop' ? 'Estimasi Ampas Kopi Harian (kg)' : 'Kebutuhan Baglog (unit / bulan)'}
                </label>
                <input
                  type="text"
                  placeholder={role === 'coffee-shop' ? 'Contoh: 10 - 20 kg/hari' : 'Contoh: 500 - 2.000 unit/bulan'}
                  value={regForm.volume}
                  onChange={(e) => setRegForm({ ...regForm, volume: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm focus:outline-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-all shadow-md cursor-pointer"
              >
                Kirim Pendaftaran Kemitraan
              </button>
            </form>
          </div>
        )}

        {/* ================= REGISTRATION SUCCESS STATE ================= */}
        {mode === 'register' && regSuccess && (
          <div className="py-6 flex flex-col items-center text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              Pendaftaran Berhasil!
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Terima kasih <strong className="text-on-surface">{regForm.businessName || 'Mitra'}</strong>. Tim Operasional Hub Sirkula Lembang - Bandung akan segera menghubungi nomor WhatsApp Anda untuk pengantaran wadah atau jadwal pengiriman baglog.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigate(role === 'coffee-shop' ? '/dashboard/coffee-shop' : '/dashboard/farmer');
                }}
                className="flex-1 py-3 px-4 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Buka Dashboard {role === 'coffee-shop' ? 'Kafe' : 'Petani'}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer"
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
