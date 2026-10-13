import React from 'react';
import { Link } from 'react-router-dom';
import SirkulaLogo from '../common/SirkulaLogo';

export default function LandingFooter() {
  return (
    <footer className="w-full bg-primary text-on-primary">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-space-md">
            <div className="flex items-center gap-3">
              <SirkulaLogo size={34} className="shadow-xs" />
              <span className="font-headline-sm text-headline-sm tracking-wide text-primary-fixed uppercase font-bold">
                Sirkula
              </span>
            </div>
            <p className="font-body-md text-body-md text-primary-fixed-dim max-w-sm">
              Platform orkestrasi sirkular B2B yang menghubungkan ampas kopi specialty dengan pembudidaya jamur tiram dan agroforestri regeneratif di Bandung Raya, Lembang, dan seluruh Jawa Barat.
            </p>
            <div className="flex flex-wrap gap-2 pt-space-xs">
              <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
                #ZeroWasteCoffee
              </span>
              <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
                #SDG12
              </span>
              <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
                #CircularEconomyID
              </span>
            </div>
          </div>

          {/* Nav: Platform & Solusi */}
          <div className="space-y-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed font-bold">
              Fitur Platform
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#tentang">Tentang Sirkula</a>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#alur">Cara Kerja Ekosistem</a>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#katalog" className="text-secondary font-semibold">Katalog Baglog (Rp 3.000)</a>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#keunggulan">Keunggulan Sirkula</a>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#dampak-sdg">Statistik Dampak &amp; Emisi</a>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#panduan">Panduan Pengguna</a>
              </li>
            </ul>
          </div>

          {/* Nav: Portals */}
          <div className="space-y-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed font-bold">
              Portal Pengguna
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <Link to="/dashboard/coffee-shop">Dashboard Kedai Kopi</Link>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <Link to="/dashboard/farmer">Dashboard Petani Jamur</Link>
              </li>
              <li className="text-primary-fixed-dim hover:text-on-primary transition-colors">
                <Link to="/admin">Sirkula Hub Lembang - Bandung</Link>
              </li>
              <li className="pt-2 text-primary-fixed-dim hover:text-on-primary transition-colors">
                <a href="#bantuan" className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[16px]">contact_support</span>
                  <span>Bantuan &amp; FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kemitraan & Kontak */}
          <div className="space-y-space-sm">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed font-bold">
              Hub &amp; Kontak
            </h3>
            <p className="font-body-sm text-xs text-primary-fixed-dim leading-relaxed">
              <strong>Sirkula Hub Lembang (HUB-BDG-01)</strong><br />
              Kawasan Agroteknologi Lembang, Bandung Barat, Jawa Barat
            </p>
            <p className="font-body-sm text-xs text-primary-fixed-dim leading-relaxed">
              Email: kemitraan@sirkula.id<br />
              Hotline WA: +62 812-8800-7475
            </p>
            <div className="pt-1">
              <a
                className="inline-block font-label-sm text-xs px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-colors font-bold shadow-sm"
                href="#bantuan"
              >
                Kirim Pengaduan / Bantuan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-space-md mt-space-md border-t border-primary-fixed-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-body-sm text-primary-fixed-dim">
            © 2025 PT Sirkula Ekosistem Nusantara. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-space-md">
            <a className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-on-primary transition-colors" href="#">
              Kebijakan Privasi
            </a>
            <a className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-on-primary transition-colors" href="#">
              Syarat &amp; Ketentuan Kemitraan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
