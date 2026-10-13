import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import CoffeeShopDashboard from './pages/CoffeeShopDashboard';
import FarmerDashboard from './pages/FarmerDashboard';
import QuickNavPill from './components/common/QuickNavPill';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/coffee-shop" element={<CoffeeShopDashboard />} />
        <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
      </Routes>
      {/* Floating module switcher for easy presentation and testing */}
      <QuickNavPill />
    </>
  );
}
