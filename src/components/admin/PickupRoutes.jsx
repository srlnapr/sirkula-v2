import React, { useState } from 'react';
import { PICKUP_ROUTES } from '../../data/mockData';

export default function PickupRoutes() {
  const [optimizing, setOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const handleOptimize = () => {
    setOptimizing(true);
    setTimeout(() => {
      setOptimizing(false);
      setOptimized(true);
    }, 1200);
  };

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-space-lg">
      <div className="flex items-start justify-between gap-space-sm">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary font-semibold">
            Rute Penjemputan Ampas Kedai Kopi
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Jadwal penjemputan armada kurir harian Bandung Raya
          </p>
        </div>
        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span>SOP Terjadwal</span>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        {PICKUP_ROUTES.map((route) => (
          <div
            key={route.id}
            className="p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="font-title-md text-body-md font-semibold text-primary">
                {route.coffeeShop}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                  route.statusType === 'completed'
                    ? 'bg-secondary-container text-on-secondary-container'
                    : route.statusType === 'in_progress'
                    ? 'bg-secondary-fixed/70 text-on-secondary-container'
                    : 'bg-surface-variant text-on-surface-variant'
                }`}
              >
                {route.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
              <span>
                {route.area} • Driver: <strong>{route.driver}</strong>
              </span>
              <span className="font-mono font-medium text-primary">{route.weight}</span>
            </div>
            <div
              className={`flex items-center gap-1 font-label-sm text-label-sm ${
                route.statusType === 'in_progress'
                  ? 'text-secondary'
                  : 'text-on-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {route.statusType === 'completed'
                  ? 'check_circle'
                  : route.statusType === 'in_progress'
                  ? 'sync'
                  : route.statusType === 'scheduled'
                  ? 'schedule'
                  : 'event'}
              </span>
              <span>{route.note}</span>
            </div>
          </div>
        ))}
      </div>

      {optimized && (
        <div className="p-2.5 bg-secondary-fixed/30 rounded-xl text-center text-xs text-secondary font-semibold">
          ✓ Penjadwalan kurir lapangan berhasil mengoptimalkan rute penjemputan hari ini!
        </div>
      )}

      <button
        onClick={handleOptimize}
        disabled={optimizing}
        className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all flex items-center justify-center gap-space-xs shadow-sm disabled:opacity-50"
        type="button"
      >
        <span className={`material-symbols-outlined text-[18px] ${optimizing ? 'animate-spin' : ''}`}>
          alt_route
        </span>
        <span>{optimizing ? 'Menyusun Rute...' : 'Susun Rute Kurir Lapangan'}</span>
      </button>
    </div>
  );
}
