import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import SirkulaLogo from '../common/SirkulaLogo';

export default function LandingNavbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState({
    isOpen: false,
    mode: 'login', // 'login' | 'register'
    role: 'coffee-shop',
  });

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (targetId === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(targetId);
    if (el) {
      const navOffset = 88;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  const openAuth = (mode = 'login', role = 'coffee-shop') => {
    setMobileMenuOpen(false);
    if (onOpenAuth) {
      onOpenAuth(mode, role);
    } else {
      setAuthModalState({ isOpen: true, mode, role });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(27,77,62,0.05)] border-b border-primary/5">
      <div className="h-20 max-w-[1360px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" onClick={(e) => handleScroll(e, '#top')} className="flex items-center gap-2.5 group">
          <SirkulaLogo size={36} className="group-hover:scale-105 transition-transform shadow-xs" />
          <span className="font-headline-sm text-headline-sm tracking-wide text-primary uppercase font-bold">
            Sirkula
          </span>
        </Link>

        {/* Desktop Nav Links (The 9 Core Feature Navigation) */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-[13px] font-semibold text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#tentang"
            onClick={(e) => handleScroll(e, '#tentang')}
          >
            Tentang
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#alur"
            onClick={(e) => handleScroll(e, '#alur')}
          >
            Cara Kerja
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#katalog"
            onClick={(e) => handleScroll(e, '#katalog')}
          >
            Katalog Baglog
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#keunggulan"
            onClick={(e) => handleScroll(e, '#keunggulan')}
          >
            Keunggulan
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#dampak-sdg"
            onClick={(e) => handleScroll(e, '#dampak-sdg')}
          >
            Dampak
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#panduan"
            onClick={(e) => handleScroll(e, '#panduan')}
          >
            Panduan
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#bantuan"
            onClick={(e) => handleScroll(e, '#bantuan')}
          >
            Bantuan &amp; FAQ
          </a>
        </nav>

        {/* Right Action Buttons (Login & Registrasi Fitur 8) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Tombol Masuk / Login */}
          <button
            onClick={() => openAuth('login')}
            className="inline-flex items-center font-label-md text-xs sm:text-sm font-semibold text-primary hover:text-secondary hover:bg-surface-container px-3.5 sm:px-4 py-2 rounded-full transition-colors cursor-pointer"
            type="button"
          >
            <span>Masuk</span>
          </button>

          {/* Tombol Daftar / Registrasi */}
          <button
            onClick={() => openAuth('register')}
            className="inline-flex items-center bg-primary hover:bg-secondary text-white font-label-md text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            type="button"
          >
            <span>Daftar Mitra</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary ml-1 cursor-pointer"
            aria-label="Menu"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-primary/10 px-6 py-4 flex flex-col gap-2.5 shadow-xl animate-fade-in text-sm font-semibold">
          <a
            onClick={(e) => handleScroll(e, '#tentang')}
            href="#tentang"
            className="text-on-surface hover:text-primary py-1.5"
          >
            1. Tentang Sirkula
          </a>
          <a
            onClick={(e) => handleScroll(e, '#alur')}
            href="#alur"
            className="text-on-surface hover:text-primary py-1.5"
          >
            2. Cara Kerja Sirkular
          </a>
          <a
            onClick={(e) => handleScroll(e, '#katalog')}
            href="#katalog"
            className="text-on-surface hover:text-primary py-1.5"
          >
            3. Katalog Produk Baglog
          </a>
          <a
            onClick={(e) => handleScroll(e, '#keunggulan')}
            href="#keunggulan"
            className="text-on-surface hover:text-primary py-1.5"
          >
            4. Keunggulan Platform
          </a>
          <a
            onClick={(e) => handleScroll(e, '#dampak-sdg')}
            href="#dampak-sdg"
            className="text-on-surface hover:text-primary py-1.5"
          >
            5. Dampak Lingkungan &amp; SDG
          </a>
          <a
            onClick={(e) => handleScroll(e, '#panduan')}
            href="#panduan"
            className="text-on-surface hover:text-primary py-1.5"
          >
            6. Panduan Pengguna (Kafe &amp; Petani)
          </a>
          <a
            onClick={(e) => handleScroll(e, '#bantuan')}
            href="#bantuan"
            className="text-on-surface hover:text-primary py-1.5"
          >
            7. Kontak, FAQ &amp; Pengaduan
          </a>

          <div className="pt-3 border-t border-primary/10 flex flex-col gap-2">
            <span className="text-xs font-bold text-outline uppercase tracking-wider">
              Akses Cepat Pengguna:
            </span>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => openAuth('login')}
                className="py-2.5 rounded-full bg-surface-container text-primary font-bold text-xs"
              >
                Masuk Akun (Login)
              </button>
              <button
                type="button"
                onClick={() => openAuth('register')}
                className="py-2.5 rounded-full bg-primary text-white font-bold text-xs"
              >
                Daftar Mitra Baru
              </button>
            </div>
            <div className="pt-2 flex flex-col gap-1 text-xs text-on-surface-variant font-medium">
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-primary">
                → Akses Sirkula Hub Admin
              </Link>
              <Link to="/dashboard/coffee-shop" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-primary">
                → Akses Dashboard Kafe Mitra
              </Link>
              <Link to="/dashboard/farmer" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-primary">
                → Akses Dashboard Petani Jamur
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Multi-role Auth Modal (Login & Registration) - rendered if no parent handler */}
      {!onOpenAuth && (
        <AuthModal
          isOpen={authModalState.isOpen}
          initialMode={authModalState.mode}
          initialRole={authModalState.role}
          onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
        />
      )}
    </header>
  );
}
