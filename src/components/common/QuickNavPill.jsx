import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { resetAllDemoData } from '../../utils/demoStorage';

export default function QuickNavPill() {
  const [isOpen, setIsOpen] = useState(false);
  const [resetToast, setResetToast] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: '/dashboard/coffee-shop', label: 'Kedai Kopi', icon: 'local_cafe', desc: 'Supplier Ampas & ESG' },
    { to: '/dashboard/farmer', label: 'Petani Jamur', icon: 'yard', desc: 'Buyer Baglog & Panen' },
    { to: '/admin', label: 'Hub Admin', icon: 'hub', desc: 'Logistik & Finansial' },
  ];

  const currentLink = links.find((l) => l.to === location.pathname);
  const isLandingPage = location.pathname === '/';

  const handleGoHomeLogout = () => {
    setIsOpen(false);
    navigate('/?logout=true');
  };

  const handleResetDemo = () => {
    resetAllDemoData();
    setResetToast('Data simulasi demo berhasil dikembalikan ke awal!');
    setTimeout(() => setResetToast(''), 3500);
  };

  return (
    <aside 
      aria-label="Navigasi Pengujian Modul" 
      className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-2 font-sans"
    >
      {resetToast && (
        <div className="bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 animate-fadeIn">
          <span className="material-symbols-outlined text-[18px] text-secondary-fixed">check_circle</span>
          <span>{resetToast}</span>
        </div>
      )}
      {isOpen && (
        <nav 
          aria-label="Daftar Modul Sirkula" 
          className="bg-surface-container-lowest/95 backdrop-blur-xl border border-primary/15 rounded-3xl p-3 shadow-2xl flex flex-col gap-1.5 w-72 animate-fade-in"
        >
          <div className="px-3 py-1.5 flex items-center justify-between border-b border-primary/10">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
              Beralih Modul Sirkula
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant hover:text-on-surface text-sm"
              aria-label="Tutup panel navigasi"
            >
              ✕
            </button>
          </div>
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
                    : 'text-on-surface hover:bg-surface-container text-body-sm'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-primary text-secondary-fixed' : 'bg-surface-container text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm leading-tight truncate font-semibold">{link.label}</span>
                  <span className={`text-[11px] truncate ${isActive ? 'text-primary-fixed-dim' : 'text-outline'}`}>
                    {link.desc}
                  </span>
                </div>
              </NavLink>
            );
          })}
          
          {/* Demo MVP Cache Control */}
          <div className="pt-2 border-t border-primary/10 mt-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-2 text-[11px] text-on-surface-variant">
              <span className="flex items-center gap-1 font-semibold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Cache Demo: Aktif
              </span>
              <span className="text-[10px] text-outline">LocalStorage</span>
            </div>
            <button
              type="button"
              onClick={handleResetDemo}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary hover:text-emerald-900 transition-colors text-xs font-bold border border-primary/10 cursor-pointer"
              title="Kembalikan semua data simulasi ke awal"
            >
              <span className="material-symbols-outlined text-[15px]">restart_alt</span>
              <span>Reset Data Demo ke Default</span>
            </button>
          </div>

          {/* Logout / Beranda Link inside panel if in dashboard */}
          {!isLandingPage && (
            <div className="pt-1 border-t border-primary/10 mt-1">
              <button
                onClick={handleGoHomeLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-error hover:bg-error-container/30 transition-colors text-xs font-semibold text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">logout</span>
                <span>Logout ke Landing Page</span>
              </button>
            </div>
          )}
        </nav>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl border border-primary-fixed/20 transition-all hover:-translate-y-0.5 group"
        title="Beralih Modul Sirkula"
      >
        <span className="material-symbols-outlined text-[18px] text-secondary-fixed animate-pulse">
          swap_horiz
        </span>
        <span className="font-label-sm text-label-sm text-white tracking-wide">
          Portal: <strong className="text-secondary-fixed font-bold">{isLandingPage ? 'Landing Page' : currentLink?.label || 'Dashboard'}</strong>
        </span>
        <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim group-hover:rotate-180 transition-transform">
          {isOpen ? 'expand_more' : 'expand_less'}
        </span>
      </button>
    </aside>
  );
}
