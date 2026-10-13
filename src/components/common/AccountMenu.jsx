import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AccountMenu({
  currentRole = 'farmer',
  partnerName = 'Mitra Sirkula',
  partnerId = 'SRK-001',
  roleLabel = 'Petani Jamur',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    // Navigate to landing page with logout parameter
    navigate('/?logout=true');
  };

  const accounts = [
    {
      role: 'coffee-shop',
      title: 'Kedai Kopi',
      subtitle: 'Sana Coffee Roasters',
      id: 'SRK-JKT-8821',
      icon: 'local_cafe',
      path: '/dashboard/coffee-shop',
      badgeColor: 'bg-secondary-fixed/50 text-secondary',
    },
    {
      role: 'farmer',
      title: 'Petani Jamur',
      subtitle: 'Poktan Tirta Mandiri',
      id: 'SRK-FARM-042',
      icon: 'yard',
      path: '/dashboard/farmer',
      badgeColor: 'bg-primary-fixed/50 text-primary',
    },
    {
      role: 'admin',
      title: 'Sirkula Hub Admin',
      subtitle: 'Regional Bandung Raya Hub',
      id: 'HUB-BDG-01',
      icon: 'hub',
      path: '/admin',
      badgeColor: 'bg-secondary-container text-on-secondary-container',
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger Button: Profile & Account Switcher */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/40 text-on-surface transition-all cursor-pointer shadow-xs group"
        type="button"
        aria-label="Menu Akun & Ganti Profil"
        aria-expanded={isOpen}
      >
        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-[16px]">person</span>
        </div>
        <div className="text-left hidden sm:block">
          <p className="font-label-sm text-[12px] font-bold text-primary leading-none truncate max-w-[130px]">
            {partnerName}
          </p>
          <p className="text-[10px] text-on-surface-variant leading-tight mt-0.5 font-medium">
            {roleLabel}
          </p>
        </div>
        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {/* Account Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-surface-container-lowest rounded-3xl p-3 shadow-2xl border border-primary/10 z-50 animate-fade-in">
          {/* Active Account Header */}
          <div className="p-3 bg-surface-container-low rounded-2xl border border-outline-variant/20 mb-2">
            <div className="flex items-center justify-between pb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                Akun Aktif
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-secondary font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Mitra Terverifikasi
              </span>
            </div>
            <p className="font-label-md text-label-md font-bold text-primary truncate">
              {partnerName}
            </p>
            <p className="text-body-sm text-[11px] text-on-surface-variant font-mono">
              ID: {partnerId}
            </p>
          </div>

          {/* Section Title */}
          <div className="px-2 py-1 text-[11px] font-bold text-outline uppercase tracking-wider">
            Ganti Akun / Peran
          </div>

          {/* Account Options */}
          <div className="flex flex-col gap-1">
            {accounts.map((acc) => {
              const isCurrent = acc.role === currentRole;
              return (
                <Link
                  key={acc.role}
                  to={acc.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-2.5 rounded-2xl transition-all ${
                    isCurrent
                      ? 'bg-primary-container text-on-primary shadow-xs font-semibold'
                      : 'hover:bg-surface-container text-on-surface'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isCurrent
                          ? 'bg-primary text-secondary-fixed'
                          : acc.badgeColor
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {acc.icon}
                      </span>
                    </div>
                    <div className="min-w-0 text-left">
                      <p
                        className={`text-xs font-bold leading-tight truncate ${
                          isCurrent ? 'text-on-primary' : 'text-primary'
                        }`}
                      >
                        {acc.title}
                      </p>
                      <p
                        className={`text-[11px] truncate leading-tight ${
                          isCurrent ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                        }`}
                      >
                        {acc.subtitle}
                      </p>
                    </div>
                  </div>
                  {isCurrent && (
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed shrink-0 ml-1">
                      check_circle
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-2 border-t border-primary/10"></div>

          {/* Logout Action */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-error hover:bg-error-container/30 transition-colors font-label-md text-label-md font-semibold cursor-pointer text-left"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-error">logout</span>
            <div className="flex flex-col">
              <span>Keluar (Logout)</span>
              <span className="text-[10px] text-on-surface-variant font-normal">
                Kembali ke Beranda Utama
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
