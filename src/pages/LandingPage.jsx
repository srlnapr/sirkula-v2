import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ClosedLoopFlow from '../components/landing/ClosedLoopFlow';
import BaglogCatalogSection from '../components/landing/BaglogCatalogSection';
import ValueProposition from '../components/landing/ValueProposition';
import BenchmarkTable from '../components/landing/BenchmarkTable';
import ImpactSdgSection from '../components/landing/ImpactSdgSection';
import UserGuideSection from '../components/landing/UserGuideSection';
import FaqHelpSection from '../components/landing/FaqHelpSection';
import CtaSection from '../components/landing/CtaSection';
import LandingFooter from '../components/landing/LandingFooter';
import AuthModal from '../components/landing/AuthModal';

export default function LandingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: 'login', // 'login' | 'register'
    role: 'coffee-shop', // 'coffee-shop' | 'farmer' | 'admin'
  });

  useEffect(() => {
    if (searchParams.get('logout') === 'true') {
      setShowLogoutToast(true);
      // Auto-hide toast after 5 seconds
      const timer = setTimeout(() => {
        setShowLogoutToast(false);
        // Clear query param without full reload
        searchParams.delete('logout');
        setSearchParams(searchParams, { replace: true });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, setSearchParams]);

  const dismissToast = () => {
    setShowLogoutToast(false);
    searchParams.delete('logout');
    setSearchParams(searchParams, { replace: true });
  };

  const handleOpenAuth = (mode = 'login', role = 'coffee-shop') => {
    setAuthModal({
      isOpen: true,
      mode,
      role,
    });
  };

  const handleCloseAuth = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectCatalogProduct = (product) => {
    // When ordering from catalog, open registration as farmer
    handleOpenAuth('register', 'farmer');
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between relative">
      {/* 8. Login & Registrasi Navigation Header */}
      <LandingNavbar onOpenAuth={handleOpenAuth} />

      {/* Floating Logout Toast Notification */}
      {showLogoutToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md bg-surface-container-lowest/95 backdrop-blur-xl border border-secondary/30 shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-3 animate-fade-in"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">logout</span>
            </div>
            <div className="min-w-0">
              <p className="font-label-md text-label-md font-bold text-primary leading-tight">
                Berhasil Keluar (Logout)
              </p>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-tight mt-0.5">
                Sesi portal telah ditutup. Anda kembali ke halaman beranda publik.
              </p>
            </div>
          </div>
          <button
            onClick={dismissToast}
            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface text-sm shrink-0"
            aria-label="Tutup notifikasi"
          >
            ✕
          </button>
        </aside>
      )}

      {/* Main Content Assembly (9 Fitur Lengkap) */}
      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Fitur 1: Landing Page (Hero, Manfaat Utama, dan Pengenalan) */}
          <HeroSection />

          {/* Fitur 2: Tentang Sirkula (Circular Economy & Pemanfaatan Limbah Ampas Kopi) */}
          <AboutSection />

          {/* Fitur 3: Cara Kerja (Alur Mitra Kopi → Pengolahan → Petani Jamur) */}
          <ClosedLoopFlow />

          {/* Fitur 4: Katalog Baglog (Produk, Harga Rp 3.000, Spesifikasi, & Ketersediaan) */}
          <BaglogCatalogSection onSelectProduct={handleSelectCatalogProduct} />

          {/* Fitur 6: Keunggulan Sirkula (Manfaat Petani & Mitra Kopi + Benchmark Table) */}
          <ValueProposition />
          <BenchmarkTable />

          {/* Fitur 5: Dampak Lingkungan (Statistik Ampas Kopi Terkelola & Reduksi Emisi CO₂e) */}
          <ImpactSdgSection />

          {/* Fitur 7: Panduan Pengguna (Petunjuk Mendaftar, Memesan, & Menjadwalkan Penjemputan) */}
          <UserGuideSection
            onOpenAuth={(role, mode) => handleOpenAuth(mode, role)}
          />

          {/* Fitur 9: Kontak & Bantuan (Kontak Hotline, FAQ Interaktif, & Form Pengaduan Tiket) */}
          <FaqHelpSection />

          {/* Call to Action Final */}
          <CtaSection />
        </div>
      </main>

      {/* Footer Lengkap */}
      <LandingFooter />

      {/* Fitur 8: Modal Autentikasi Login & Registrasi Multi-Role (Kafe, Petani, Admin Hub) */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        initialRole={authModal.role}
        onClose={handleCloseAuth}
      />
    </div>
  );
}

