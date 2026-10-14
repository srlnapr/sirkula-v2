import React, { useState } from 'react';
import CoffeeShopHeader from '../components/coffeeShop/CoffeeShopHeader';
import CoffeeShopMetrics from '../components/coffeeShop/CoffeeShopMetrics';
import CoffeeShopPickupManager from '../components/coffeeShop/CoffeeShopPickupManager';
import EcoBadgeCertificate from '../components/coffeeShop/EcoBadgeCertificate';
import CoffeeShopImpactDashboard from '../components/coffeeShop/CoffeeShopImpactDashboard';
import CoffeeShopNotificationSection from '../components/coffeeShop/CoffeeShopNotificationSection';
import CoffeeShopProfileSection from '../components/coffeeShop/CoffeeShopProfileSection';
import CoffeeShopHelpdeskSection from '../components/coffeeShop/CoffeeShopHelpdeskSection';
import CoffeeShopFooter from '../components/coffeeShop/CoffeeShopFooter';
import { COFFEE_SHOP_DATA } from '../data/mockData';

export default function CoffeeShopDashboard() {
  const [activeTab, setActiveTab] = useState('all');



  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* 1. Fixed Top Header */}
      <CoffeeShopHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Main Content Container with pt-28 so it NEVER gets covered by the 80px navbar */}
      <main className="w-full pt-28 bg-surface flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="flex flex-col w-full space-y-8">
          
          {/* Welcome Hero Banner */}
          <section
            id="dashboard"
            className="scroll-mt-28 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] border border-primary/5"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container bg-primary-fixed/60 px-3 py-1 rounded-full font-semibold">
                  {COFFEE_SHOP_DATA.branch}
                </span>
                <span className="text-outline-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  ID Mitra: {COFFEE_SHOP_DATA.partnerId}
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-semibold">
                Halo, {COFFEE_SHOP_DATA.partnerName}!
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Atur penjemputan ampas kopi berkala dan pantau kontribusi dampak lingkungan (ESG) kedai Anda secara terverifikasi.
              </p>
            </div>

            {/* Status Chips & Indicators */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-container-low shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Status: Mitra Aktif &amp; Terjadwal
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-amber-50 text-amber-900 shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-amber-700">inventory_2</span>
                <span className="font-label-md text-label-md font-semibold">
                  Kapasitas Bak: {COFFEE_SHOP_DATA.binCapacityPercentage}% (Siap Jemput)
                </span>
              </div>
            </div>
          </section>

          {/* ================= MODUL 1: DASHBOARD OVERVIEW ================= */}
          <div id="overview" className="scroll-mt-28">
            <CoffeeShopMetrics />
          </div>

          {/* ================= MODUL 2, 3, 4, 5: LOGISTIK PENJEMPUTAN ================= */}
          <div id="penjemputan" className="scroll-mt-28">
            <CoffeeShopPickupManager />
          </div>

          {/* ================= MODUL 6: SIRKULA ECO-BADGE ================= */}
          <div id="badge" className="scroll-mt-28">
            <EcoBadgeCertificate />
          </div>

          {/* ================= MODUL 7 & 8: IMPACT DASHBOARD & LAPORAN ESG ================= */}
          <div id="dampak-lingkungan" className="scroll-mt-28">
            <CoffeeShopImpactDashboard />
          </div>

          {/* ================= MODUL 9: NOTIFIKASI ================= */}
          <div id="notifikasi" className="scroll-mt-28">
            <CoffeeShopNotificationSection />
          </div>

          {/* ================= MODUL 10: PROFIL MITRA KEDAI ================= */}
          <div id="profil-mitra" className="scroll-mt-28">
            <CoffeeShopProfileSection />
          </div>

          {/* ================= MODUL 11: PUSAT BANTUAN ================= */}
          <div id="pusat-bantuan" className="scroll-mt-28">
            <CoffeeShopHelpdeskSection />
          </div>

        </div>
      </main>

      <CoffeeShopFooter />
    </div>
  );
}
