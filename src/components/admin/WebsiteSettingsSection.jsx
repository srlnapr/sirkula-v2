import React, { useState } from 'react';
import { ADMIN_WEBSITE_CONFIG } from '../../data/mockData';

export default function WebsiteSettingsSection() {
  const [config, setConfig] = useState(ADMIN_WEBSITE_CONFIG);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <section id="pengaturan-website" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>⚙️ PENGATURAN KONTEN &amp; PORTAL</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Pengaturan Website &amp; Informasi Publik
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Kelola teks pengumuman darurat, banner siaran hub, status slot pendaftaran mitra, dan FAQ landing page.
          </p>
        </div>

        {saveSuccess && (
          <div className="px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs flex items-center gap-1.5 animate-fade-in">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>Pengaturan Berhasil Disimpan!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Setting 1: Banner Pengumuman Siaran Hub */}
        <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">campaign</span>
              <h4 className="font-label-md text-label-md font-bold text-primary">
                Banner Siaran Berita / Pengumuman Hub (Top Broadcast Banner)
              </h4>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={config.broadcastBanner.enabled}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    broadcastBanner: { ...config.broadcastBanner, enabled: e.target.checked },
                  })
                }
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-surface-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
              <span className="ml-2 text-xs font-semibold text-on-surface">
                {config.broadcastBanner.enabled ? 'Aktif' : 'Nonaktif'}
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block font-semibold text-outline mb-1">Label Badge</label>
              <input
                type="text"
                value={config.broadcastBanner.badgeText}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    broadcastBanner: { ...config.broadcastBanner, badgeText: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/40 outline-none text-xs font-bold text-primary"
              />
            </div>
            <div className="sm:col-span-3">
              <label className="block font-semibold text-outline mb-1">Teks Pesan Pengumuman</label>
              <input
                type="text"
                value={config.broadcastBanner.message}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    broadcastBanner: { ...config.broadcastBanner, message: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/40 outline-none text-xs"
              />
            </div>
          </div>
        </div>

        {/* Setting 2: Slot Kemitraan & Promosi Katalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">how_to_reg</span>
                <span>Slot Pendaftaran Mitra Kafe</span>
              </h4>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-primary text-[10px] font-bold">
                Status Terbuka
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Tampilkan pemberitahuan kuota ketersediaan rute kurir pada landing page.
            </p>
            <input
              type="text"
              value={config.partnerRegistrationSlot.statusText}
              onChange={(e) =>
                setConfig({
                  ...config,
                  partnerRegistrationSlot: { ...config.partnerRegistrationSlot, statusText: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/40 outline-none text-xs"
            />
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">sell</span>
                <span>Promosi Paket Kumbung Starter</span>
              </h4>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                Aktif
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Tag promosi pada katalog baglog (Rp 1.500.000 / paket 500 unit).
            </p>
            <input
              type="text"
              value={config.promoCampaign.discountTag}
              onChange={(e) =>
                setConfig({
                  ...config,
                  promoCampaign: { ...config.promoCampaign, discountTag: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/40 outline-none text-xs font-semibold text-secondary"
            />
          </div>
        </div>

        {/* Submit Bar */}
        <div className="pt-2 flex items-center justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">save</span>
            <span>Simpan Seluruh Pengaturan Website</span>
          </button>
        </div>
      </form>
    </section>
  );
}
