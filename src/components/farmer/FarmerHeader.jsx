import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountMenu from '../common/AccountMenu';
import SirkulaLogo from '../common/SirkulaLogo';
import { FARMER_DATA } from '../../data/mockData';

export default function FarmerHeader({ activeTab, setActiveTab, cartItemCount = 0, onOpenCart }) {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { id: 'dashboard', label: 'Overview', target: '#dashboard' },
    { id: 'katalog', label: 'Katalog', target: '#katalog-baglog' },
    { id: 'pesanan', label: 'Pesanan', target: '#riwayat-pesanan' },
    { id: 'yield-tracker', label: 'Yield Tracker', target: '#yield-tracker' },
    { id: 'panduan', label: 'Panduan', target: '#panduan-budidaya' },
    { id: 'bantuan', label: 'Bantuan', target: '#layanan-bantuan' },
    { id: 'profil', label: 'Profil', target: '#profil-petani' },
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
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }
  };

  const handleLogout = () => {
    setNavOpen(false);
    navigate('/?logout=true');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(27,77,62,0.05)] border-b border-outline-variant/30 h-20">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Portal Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Link to="/" className="flex items-center gap-2 group shrink-0" title="Kembali ke Beranda Sirkula">
            <SirkulaLogo size={36} className="group-hover:scale-105 transition-transform shadow-xs" />
            <span className="font-headline-md text-[18px] sm:text-headline-md text-primary tracking-tight font-semibold">
              Sirkula
            </span>
          </Link>

          {/* Clean Portal Badge */}
          <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold uppercase tracking-wider shrink-0">
            <span>🍄 Petani</span>
          </div>
        </div>

        {/* Right: Cart Button + Notification + Unified Account Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Cart Floating / Header Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Keranjang Belanja"
            className="relative px-3 py-1.5 rounded-full bg-secondary-fixed/50 hover:bg-secondary-fixed text-primary font-bold text-xs flex items-center gap-1.5 transition-colors border border-secondary/30 cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
            <span className="hidden sm:inline">Keranjang</span>
            {cartItemCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-secondary text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Notification Button */}
          <button
            aria-label="Notifikasi"
            className="relative w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors border border-outline-variant/30 cursor-pointer"
            type="button"
            onClick={() => alert('Pengecekan fisik kumbung harian berjalan normal (24°C / 88%).')}
          >
            <span className="material-symbols-outlined text-[18px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface"></span>
          </button>

          {/* Single Unified Account Switcher & Profile */}
          <AccountMenu
            currentRole="farmer"
            partnerName={FARMER_DATA.farmerName}
            partnerId={FARMER_DATA.partnerId}
            roleLabel="Mitra Kumbung Jamur"
          />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="sm:hidden w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-surface-container-high transition-colors"
            aria-label="Menu"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">{navOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
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
            <Link to="/dashboard/coffee-shop" className="text-primary font-semibold text-sm py-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">local_cafe</span>
              ☕ Akun Kedai Kopi
            </Link>
            <Link to="/admin" className="text-primary font-semibold text-sm py-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">hub</span>
              🏭 Akun Admin Hub BDG
            </Link>
            <div className="pt-2 border-t border-primary/10">
              <button
                onClick={handleLogout}
                className="text-error font-semibold text-sm py-1 flex items-center gap-1.5 w-full text-left cursor-pointer"
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
