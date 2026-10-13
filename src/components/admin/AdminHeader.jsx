import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountMenu from '../common/AccountMenu';
import SirkulaLogo from '../common/SirkulaLogo';

export default function AdminHeader({
  activeNav,
  setActiveNav,
  activeModuleFilter = 'all',
  setActiveModuleFilter,
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  // 12 Modules Mapping (used in mobile drawer)
  const allModules = [
    { id: 'all', label: 'Semua Modul', icon: 'apps', target: null },
    { id: 'overview', label: 'Dashboard Overview', icon: 'monitoring', target: '#metrics' },
    { id: 'users', label: 'Pengguna & Verifikasi', icon: 'group', target: '#manajemen-pengguna' },
    { id: 'products', label: 'Produk Baglog', icon: 'potted_plant', target: '#manajemen-produk' },
    { id: 'orders', label: 'Pesanan', icon: 'shopping_bag', target: '#manajemen-pesanan' },
    { id: 'pickups', label: 'Penjemputan', icon: 'local_shipping', target: '#manajemen-penjemputan' },
    { id: 'production', label: 'Produksi & Budidaya', icon: 'factory', target: '#manajemen-produksi' },
    { id: 'transactions', label: 'Laporan Transaksi', icon: 'payments', target: '#laporan-transaksi' },
    { id: 'impact', label: 'Dampak Lingkungan', icon: 'eco', target: '#dampak-lingkungan' },
    { id: 'badges', label: 'Eco-Badge', icon: 'verified', target: '#eco-badge' },
    { id: 'settings', label: 'Pengaturan Web', icon: 'settings', target: '#pengaturan-web' },
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleSelectModule = (moduleId, targetSelector) => {
    if (setActiveModuleFilter) setActiveModuleFilter(moduleId);
    if (setActiveNav) setActiveNav(moduleId);
    setNavOpen(false);

    setTimeout(() => {
      if (moduleId === 'all' || moduleId === 'overview') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(targetSelector || `#${moduleId}`);
        if (el) {
          const navOffset = 90;
          const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const handleLogout = () => {
    setNavOpen(false);
    navigate('/?logout=true');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(27,77,62,0.04)] border-b border-outline-variant/30 h-20">
        <div className="h-full w-full px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3 max-w-[1440px] mx-auto">
          
          {/* ================= LEFT: BRAND & FACILITY BADGE ================= */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2 group shrink-0" title="Kembali ke Landing Page Sirkula">
              <SirkulaLogo size={36} className="group-hover:scale-105 transition-transform shadow-xs" />
              <span className="font-headline-md text-[18px] sm:text-headline-md tracking-tight text-primary font-semibold hidden md:inline">
                Sirkula
              </span>
            </Link>

            {/* Facility Badge */}
            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold uppercase tracking-wider shrink-0">
              <span>🏭 Hub BDG-01</span>
            </div>
          </div>

          {/* ================= RIGHT: NOTIFICATIONS & ACCOUNT ================= */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Notification Bell */}
            <button
              aria-label="Notifications"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors relative border border-outline-variant/30 cursor-pointer shrink-0"
              type="button"
              onClick={() => showToast('Notifikasi Hub: Seluruh armada van bergerak sesuai rute klaster.')}
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface"></span>
            </button>

            {/* Account Switcher & Profile */}
            <AccountMenu
              currentRole="admin"
              partnerName="Admin Operasional Hub"
              partnerId="HUB-BDG-01"
              roleLabel="Regional Bandung Raya"
            />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0"
              type="button"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-[18px]">{navOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {navOpen && (
          <div className="md:hidden bg-surface-container-lowest border-b border-primary/10 px-4 py-4 flex flex-col gap-3 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
            {/* Module List */}
            <div>
              <span className="text-[10px] font-mono font-bold text-outline uppercase block mb-1.5">
                PILIH MODUL:
              </span>
              <div className="flex flex-col gap-1.5">
                {allModules.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectModule(item.id, item.target)}
                    className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                      activeModuleFilter === item.id
                        ? 'bg-primary text-white font-bold shadow-xs'
                        : 'bg-surface-container-low/70 text-on-surface hover:bg-surface-container'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[17px] shrink-0">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Switch Role Links */}
            <div className="pt-2 flex flex-col gap-1.5 border-t border-primary/10">
              <span className="text-[10px] font-bold text-outline uppercase font-mono">GANTI AKUN MITRA</span>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/dashboard/coffee-shop"
                  onClick={() => setNavOpen(false)}
                  className="p-2 rounded-xl bg-surface-container text-primary font-semibold text-xs flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">local_cafe</span>
                  <span>Kedai Kopi</span>
                </Link>
                <Link
                  to="/dashboard/farmer"
                  onClick={() => setNavOpen(false)}
                  className="p-2 rounded-xl bg-surface-container text-primary font-semibold text-xs flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">yard</span>
                  <span>Petani Jamur</span>
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className="mt-1 text-error font-semibold text-xs py-2 px-1 flex items-center gap-1.5 w-full text-left"
              >
                <span className="material-symbols-outlined text-[16px]">logout</span>
                Keluar (Logout) ke Beranda
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-[180] px-4 sm:px-5 py-3 rounded-2xl bg-primary text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-fadeIn border border-white/20 max-w-[90vw]">
          <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary shrink-0">check_circle</span>
          <span className="truncate">{toastMessage}</span>
        </div>
      )}
    </>
  );
}
