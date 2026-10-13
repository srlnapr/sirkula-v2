import React, { useState } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminMetrics from '../components/admin/AdminMetrics';
import UserManagementSection from '../components/admin/UserManagementSection';
import BaglogProductManager from '../components/admin/BaglogProductManager';
import OrderManagementSection from '../components/admin/OrderManagementSection';
import PickupManagementSection from '../components/admin/PickupManagementSection';
import ProductionCropSection from '../components/admin/ProductionCropSection';
import TransactionReportSection from '../components/admin/TransactionReportSection';
import EnvironmentalImpactAdminSection from '../components/admin/EnvironmentalImpactAdminSection';
import EcoBadgeManagerSection from '../components/admin/EcoBadgeManagerSection';
import WebsiteSettingsSection from '../components/admin/WebsiteSettingsSection';
import SubstrateFormulaShowcase from '../components/admin/SubstrateFormulaShowcase';
import OperationalActivityFeed from '../components/admin/OperationalActivityFeed';
import AdminFooter from '../components/admin/AdminFooter';

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState('control-center');
  const [activeModuleFilter, setActiveModuleFilter] = useState('all');

  const modulePills = [
    { id: 'all', label: 'Semua Modul (All-in-One)', icon: 'dashboard' },
    { id: 'overview', label: '1. Overview', icon: 'monitoring' },
    { id: 'users', label: '2 & 3. Pengguna & Verifikasi', icon: 'group' },
    { id: 'products', label: '4. Produk Baglog', icon: 'potted_plant' },
    { id: 'orders', label: '5. Pesanan', icon: 'shopping_bag' },
    { id: 'pickups', label: '6. Penjemputan', icon: 'local_shipping' },
    { id: 'production', label: '7 & 8. Produksi & Budidaya', icon: 'factory' },
    { id: 'transactions', label: '9. Laporan Transaksi', icon: 'payments' },
    { id: 'impact', label: '10. Dampak Lingkungan', icon: 'eco' },
    { id: 'badges', label: '11. Eco-Badge', icon: 'verified' },
    { id: 'settings', label: '12. Pengaturan Web', icon: 'settings' },
  ];

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <AdminHeader
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        activeModuleFilter={activeModuleFilter}
        setActiveModuleFilter={setActiveModuleFilter}
      />

      {/* Main Content with pt-28 so it is NEVER covered by the 80px navbar */}
      <main className="w-full pt-28 bg-background flex-grow pb-16">
        <div className="flex flex-col w-full">
          <div className="w-full px-3.5 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 max-w-[1400px] mx-auto">

            {/* 1. Control Center Hero Banner Header */}
            <section id="control-center" className="scroll-mt-28 flex flex-col gap-4 sm:gap-6 bg-surface-container-lowest p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] border border-primary/5">
              <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[10px] sm:text-label-sm tracking-wider uppercase font-semibold max-w-full">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                  <span className="truncate">HUB STERILISASI &amp; LOGISTIK LEMBANG • HUB-BDG-01</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-secondary-container/70 text-on-secondary-container font-label-sm text-[11px] font-semibold">
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">check_circle</span>
                    <span>Hub Aktif (85%)</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-[11px] shadow-xs font-medium">
                    <span className="material-symbols-outlined text-secondary text-[14px] sm:text-[16px]">local_shipping</span>
                    <span>
                      Kurir: <strong className="text-primary font-semibold">94.2% On-Time</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="max-w-4xl">
                  <h1 className="font-headline-xl text-xl sm:text-2xl lg:text-headline-xl text-primary font-semibold tracking-tight leading-snug">
                    Sirkula Hub: Admin &amp; Operations Control Center
                  </h1>
                  <p className="font-body-md sm:font-body-lg text-xs sm:text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
                    Pusat kendali operasional terpadu 12 modul: dari overview, pengelolaan pengguna &amp; verifikasi mitra, katalog produk, pesanan, penjemputan ampas, pabrikasi substrat, hingga laporan transaksi dan sertifikasi eco-badge.
                  </p>
                </div>
              </div>
            </section>

            {/* Sticky Module Filter Pills Bar (Single source of truth for module navigation) */}
            <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-xl -mx-3.5 sm:-mx-6 lg:-mx-8 px-3.5 sm:px-6 lg:px-8 py-2.5 border-b border-primary/10 shadow-[0_2px_8px_rgba(27,77,62,0.03)]">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 scrollbar-none max-w-[1400px] mx-auto">
                <span className="text-[11px] font-bold text-outline uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                  Pilih Modul:
                </span>
                {modulePills.map((pill) => (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() => setActiveModuleFilter(pill.id)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-label-sm text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      activeModuleFilter === pill.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">{pill.icon}</span>
                    <span>{pill.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ================= MODUL 1: DASHBOARD OVERVIEW ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'overview') && (
              <div id="metrics" className="scroll-mt-28 flex flex-col gap-6">
                <AdminMetrics />
                <div id="aktivitas" className="scroll-mt-28">
                  <OperationalActivityFeed />
                </div>
              </div>
            )}

            {/* ================= MODUL 2 & 3: MANAJEMEN PENGGUNA & VERIFIKASI MITRA ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'users') && (
              <div id="manajemen-pengguna" className="scroll-mt-28">
                <UserManagementSection />
              </div>
            )}

            {/* ================= MODUL 4: MANAJEMEN PRODUK BAGLOG ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'products') && (
              <div id="manajemen-produk" className="scroll-mt-28">
                <BaglogProductManager />
              </div>
            )}

            {/* ================= MODUL 5: MANAJEMEN PESANAN ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'orders') && (
              <div id="manajemen-pesanan" className="scroll-mt-28">
                <OrderManagementSection />
              </div>
            )}

            {/* ================= MODUL 6: MANAJEMEN PENJEMPUTAN ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'pickups') && (
              <div id="manajemen-penjemputan" className="scroll-mt-28">
                <PickupManagementSection />
              </div>
            )}

            {/* ================= MODUL 7 & 8: MANAJEMEN PRODUKSI & MONITORING BUDIDAYA ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'production') && (
              <div id="manajemen-produksi" className="scroll-mt-28 flex flex-col gap-6">
                <ProductionCropSection />
                <div id="formula" className="scroll-mt-28">
                  <SubstrateFormulaShowcase />
                </div>
              </div>
            )}

            {/* ================= MODUL 9: LAPORAN TRANSAKSI ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'transactions') && (
              <div id="laporan-transaksi" className="scroll-mt-28">
                <TransactionReportSection />
              </div>
            )}

            {/* ================= MODUL 10: DASHBOARD DAMPAK LINGKUNGAN ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'impact') && (
              <div id="dampak-lingkungan" className="scroll-mt-28">
                <EnvironmentalImpactAdminSection />
              </div>
            )}

            {/* ================= MODUL 11: MANAJEMEN ECO-BADGE ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'badges') && (
              <div id="eco-badge" className="scroll-mt-28">
                <EcoBadgeManagerSection />
              </div>
            )}

            {/* ================= MODUL 12: PENGATURAN WEBSITE ================= */}
            {(activeModuleFilter === 'all' || activeModuleFilter === 'settings') && (
              <div id="pengaturan-web" className="scroll-mt-28">
                <WebsiteSettingsSection />
              </div>
            )}

          </div>
        </div>
      </main>

      <AdminFooter />
    </div>
  );
}

