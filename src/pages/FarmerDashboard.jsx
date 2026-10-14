import React, { useState } from 'react';
import FarmerHeader from '../components/farmer/FarmerHeader';
import FarmerMetrics from '../components/farmer/FarmerMetrics';
import FarmerCatalogSection from '../components/farmer/FarmerCatalogSection';
import FarmerCartCheckoutModal from '../components/farmer/FarmerCartCheckoutModal';
import FarmerOrdersHistorySection from '../components/farmer/FarmerOrdersHistorySection';
import FarmerYieldTrackerSection from '../components/farmer/FarmerYieldTrackerSection';
import FarmerCultivationGuideSection from '../components/farmer/FarmerCultivationGuideSection';
import FarmerHelpdeskSection from '../components/farmer/FarmerHelpdeskSection';
import FarmerProfileSection from '../components/farmer/FarmerProfileSection';
import FarmerFooter from '../components/farmer/FarmerFooter';
import {
  FARMER_DATA,
  FARMER_ORDERS_DATA,
  FARMER_CATALOG_PRODUCTS,
  ADMIN_ORDERS_LIST,
} from '../data/mockData';
import {
  useDemoStorage,
  getStoredDemoItem,
  setStoredDemoItem,
  DEMO_STORAGE_KEYS,
} from '../utils/demoStorage';

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useDemoStorage(
    DEMO_STORAGE_KEYS.FARMER_ORDERS,
    FARMER_ORDERS_DATA
  );
  const [cartItems, setCartItems] = useDemoStorage(DEMO_STORAGE_KEYS.FARMER_CART, [
    {
      product: FARMER_CATALOG_PRODUCTS[0],
      quantity: 200,
      totalPrice: 600000,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4500);
  };

  const handleAddToCart = (newItem) => {
    // Check if item exists in cart
    const existingIndex = cartItems.findIndex((ci) => ci.product.id === newItem.product.id);
    if (existingIndex >= 0) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += newItem.quantity;
      updated[existingIndex].totalPrice += newItem.totalPrice;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, newItem]);
    }
    showToast(`Berhasil menambahkan ${newItem.quantity} unit ${newItem.product.name} ke keranjang!`);
  };

  const handleRemoveCartItem = (index) => {
    setCartItems(cartItems.filter((_, idx) => idx !== index));
  };

  const handleCheckoutSuccess = (newOrder) => {
    setOrders([newOrder, ...orders]);
    setCartItems([]);
    showToast(`Pesanan ${newOrder.id} berhasil dibuat dan diteruskan ke Hub Lembang!`);

    // Auto-sync into Admin orders in demo cache
    try {
      const currentAdminOrders = getStoredDemoItem(DEMO_STORAGE_KEYS.ADMIN_ORDERS, ADMIN_ORDERS_LIST);
      const newAdminOrder = {
        id: newOrder.id,
        farmerName: FARMER_DATA.farmerName || 'Kelompok Tani Lembang Asri',
        product: newOrder.items.map((i) => `${i.product.name} (${i.quantity} unit)`).join(', '),
        quantity: `${newOrder.totalUnits} unit`,
        totalAmount: newOrder.totalPriceFormatted,
        orderDate: 'Hari Ini, Baru Saja',
        paymentStatus: 'paid',
        paymentLabel: 'Lunas (Transfer Demo)',
        processingStatus: 'processing',
        processingLabel: 'Sedang Disiapkan di Rak Hub',
        fleetAssigned: 'Kurir Van Hub (Driver: Rahmat)',
      };
      setStoredDemoItem(DEMO_STORAGE_KEYS.ADMIN_ORDERS, [newAdminOrder, ...currentAdminOrders]);
    } catch {
      // ignore
    }
  };



  return (
    <div className="bg-surface-container-low font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* 1. Top Fixed Navbar */}
      <FarmerHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItemCount={cartItems.reduce((acc, ci) => acc + ci.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[170] px-5 py-3 rounded-2xl bg-primary text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-fadeIn border border-white/20">
          <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Main Content Container */}
      <main className="w-full pt-28 bg-surface-container-low min-h-screen flex-grow pb-16">
        <div className="flex flex-col w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 w-full">

            {/* Top Welcome Hero Bar */}
            <section
              id="dashboard"
              className="scroll-mt-28 flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-2 pt-1 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.04)] border border-primary/5"
            >
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    {FARMER_DATA.kumbungLocation} • ID Mitra: {FARMER_DATA.partnerId}
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-semibold">
                  Dashboard Budidaya Petani — {FARMER_DATA.farmerName}
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Beli baglog ampas kopi, pantau pertumbuhan miselium dengan <strong>Farmer Yield Tracker</strong>, dan nikmati kepastian penyerapan panen offtaker B2B Sirkula.
                </p>
              </div>

              {/* Right side status indicators */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="px-4 py-2 rounded-full bg-secondary text-primary font-bold text-xs flex items-center gap-1.5 hover:bg-secondary-fixed transition-colors shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  <span>Keranjang ({cartItems.reduce((acc, c) => acc + c.quantity, 0)} baglog)</span>
                </button>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-on-surface shadow-xs font-medium">
                  <span className="material-symbols-outlined text-[18px] text-secondary">device_thermostat</span>
                  <span className="text-xs font-semibold">
                    Kumbung: <strong className="text-primary">{FARMER_DATA.optimalTemp}</strong>
                  </span>
                </div>
              </div>
            </section>

            {/* ================= MODUL 1: DASHBOARD OVERVIEW ================= */}
            <div id="overview" className="scroll-mt-28">
              <FarmerMetrics
                onScrollToSection={(secId) => {
                  const el = document.getElementById(secId);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>

            {/* ================= MODUL 2 & 3: KATALOG BAGLOG & PEMESANAN ================= */}
            <div id="katalog-baglog" className="scroll-mt-28">
              <FarmerCatalogSection
                onAddToCart={handleAddToCart}
                onOpenCart={() => setIsCartOpen(true)}
              />
            </div>

            {/* ================= MODUL 5 & 6: RIWAYAT PESANAN & TRACKING PENGIRIMAN ================= */}
            <div id="riwayat-pesanan" className="scroll-mt-28">
              <FarmerOrdersHistorySection orders={orders} />
            </div>

            {/* ================= MODUL 7, 8, 9: FARMER YIELD TRACKER (FITUR UNGGULAN) ================= */}
            <div id="yield-tracker" className="scroll-mt-28">
              <FarmerYieldTrackerSection />
            </div>

            {/* ================= MODUL 10: PANDUAN BUDIDAYA ================= */}
            <div id="panduan-budidaya" className="scroll-mt-28">
              <FarmerCultivationGuideSection />
            </div>

            {/* ================= MODUL 11: LAYANAN BANTUAN & PENGADUAN ================= */}
            <div id="layanan-bantuan" className="scroll-mt-28">
              <FarmerHelpdeskSection />
            </div>

            {/* ================= MODUL 12: PROFIL PETANI & INFORMASI USAHA ================= */}
            <div id="profil-petani" className="scroll-mt-28">
              <FarmerProfileSection />
            </div>

          </div>
        </div>
      </main>

      {/* Cart & Checkout Modal (Fitur 4: Keranjang & Checkout) */}
      <FarmerCartCheckoutModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onCheckoutSuccess={handleCheckoutSuccess}
        onRemoveItem={handleRemoveCartItem}
      />

      <FarmerFooter />
    </div>
  );
}
