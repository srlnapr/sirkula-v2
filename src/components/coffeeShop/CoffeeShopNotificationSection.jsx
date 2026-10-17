import React, { useState } from 'react';
import { COFFEE_SHOP_NOTIFICATIONS } from '../../data/mockData';

export default function CoffeeShopNotificationSection() {
  const [notifications, setNotifications] = useState(COFFEE_SHOP_NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState('all');

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const filteredNotifs = notifications.filter((n) => {
    if (activeFilter === 'unread') return !n.read;
    if (activeFilter === 'schedule') return n.type === 'schedule';
    if (activeFilter === 'verification') return n.type === 'verification';
    return true;
  });

  return (
    <section id="notifikasi" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🔔 PUSAT NOTIFIKASI OPERASIONAL</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Notifikasi Jadwal, Status &amp; Pengingat Penjemputan
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Dapatkan informasi konfirmasi penugasan kurir, hasil verifikasi timbangan digital di Hub, dan pengingat waktu penukaran wadah.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={markAllAsRead}
            className="px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs transition-colors cursor-pointer"
          >
            Tandai Semua Terbaca
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {[
          { id: 'all', label: 'Semua Notifikasi' },
          { id: 'unread', label: 'Belum Dibaca' },
          { id: 'schedule', label: 'Pengingat Jadwal' },
          { id: 'verification', label: 'Verifikasi Timbangan' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === f.id
                ? 'bg-primary text-white shadow-xs'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="flex flex-col gap-3">
        {filteredNotifs.map((n) => (
          <div
            key={n.id}
            className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 ${
              n.read
                ? 'bg-surface-container-low border-primary/5 opacity-85'
                : 'bg-surface-container-lowest border-primary/20 shadow-xs ring-1 ring-primary/10'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                n.type === 'schedule'
                  ? 'bg-amber-100 text-amber-900'
                  : n.type === 'badge'
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-xs sm:text-sm font-bold text-primary flex items-center gap-2">
                  <span>{n.title}</span>
                  {!n.read && (
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  )}
                </h4>
                <span className="text-[11px] font-mono text-outline shrink-0">{n.time}</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {n.message}
              </p>
            </div>
          </div>
        ))}

        {filteredNotifs.length === 0 && (
          <div className="p-8 text-center bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">notifications_off</span>
            <p className="text-sm font-bold text-primary">Tidak ada notifikasi di kategori ini</p>
            <p className="text-xs text-on-surface-variant mt-1">Semua operasional penjemputan berjalan lancar.</p>
          </div>
        )}
      </div>
    </section>
  );
}
