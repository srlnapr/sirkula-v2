import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountMenu from '../common/AccountMenu';
import SirkulaLogo from '../common/SirkulaLogo';
import { COFFEE_SHOP_DATA } from '../../data/mockData';

export default function CoffeeShopHeader({ activeTab, setActiveTab }) {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { id: 'dashboard', label: 'Overview', target: '#dashboard' },
    { id: 'penjemputan', label: 'Penjemputan & Tracking', target: '#penjemputan' },
    { id: 'badge', label: 'Eco-Badge', target: '#badge' },
    { id: 'dampak', label: 'Impact & ESG', target: '#dampak-lingkungan' },
    { id: 'notifikasi', label: 'Notifikasi', target: '#notifikasi' },
    { id: 'profil', label: 'Profil Kedai', target: '#profil-mitra' },
    { id: 'bantuan', label: 'Bantuan', target: '#pusat-bantuan' },
  ];

  const handleNavClick = (link) => {
    setActiveTab(link.id);
    setNavOpen(false);
    
    if (link.target === '#dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(link.target);
      if (el) {
        const navOffset = 90;
        const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ targetPos, behavior: 'smooth' });
      }
    }
  };

  const handleLogout = () => {
    setNavOpen(false);
    navigate('/?logout=true');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)] h-20">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
        {/* Left: Brand Logo & Static Portal Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Link to="/" className="flex items-center gap-2 group shrink-0" title="Kembali ke Beranda Sirkula">
            <SirkulaLogo size={36} className="group-hover:scale-105 transition-transform shadow-xs" />
            <span className="font-headline-md text-[18px] sm:text-headline-md tracking-tight text-primary leading-none font-semibold">
              SIRKULA
            </span>
          </Link>

          {/* Clean Static Portal Badge */}
          <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold uppercase tracking-wider shrink-0">
            <span>☕ Kedai Kopi</span>
          </div>
        </div>

        {/* Right Header Controls: Notification + Unified Account Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shadow-xs cursor-pointer"
            type="button"
            aria-label="Notifikasi"
            onClick={() => {
              setActiveTab('notifikasi');
              const el = document.getElementById('notifikasi');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface"></span>
          </button>

          {/* Single Unified Account Switcher & Profile */}
          <AccountMenu
            currentRole="coffee-shop"
            partnerName={COFFEE_SHOP_DATA.partnerName}
            partnerId={COFFEE_SHOP_DATA.partnerId}
            roleLabel="Mitra Kafe Penyetor"
          />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="sm:hidden w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary"
            aria-label="Menu"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">{navOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {navOpen && (
        <div className="sm:hidden bg-surface-container-lowest border-b border-primary/10 px-6 py-4 flex flex-col gap-2 shadow-xl animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="flex flex-wrap gap-2 pb-3 border-b border-primary/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  activeTab === link.id ? 'bg-primary text-white' : 'bg-surface-container text-on-surface'
                }`}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <span className="text-xs font-bold text-outline uppercase">Ganti Akun</span>
            <Link to="/dashboard/farmer" className="text-primary font-semibold text-sm py-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">potted_plant</span>
              🍄 Akun Petani Jamur
            </Link>
            <Link to="/admin" className="text-primary font-semibold text-sm py-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">hub</span>
              🏭 Akun Admin Hub BDG
            </Link>
            <div className="pt-2 border-t border-primary/10">
              <button
                onClick={handleLogout}
                className="text-error font-semibold text-sm py-1 flex items-center gap-1.5 w-full text-left"
              >
                <span className="material-symbols-outlined text-[16px]">logout</span>
                Keluar (Logout) ke Beranda
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
