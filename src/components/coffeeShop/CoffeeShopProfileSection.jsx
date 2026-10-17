import React, { useState } from 'react';
import { COFFEE_SHOP_PROFILE } from '../../data/mockData';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

export default function CoffeeShopProfileSection() {
  const [profile, setProfile] = useDemoStorage(
    DEMO_STORAGE_KEYS.COFFEE_PROFILE,
    COFFEE_SHOP_PROFILE
  );
  const [isEditing, setIsEditing] = useState(false);
  const [saveAlert, setSaveAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...profile });
    setIsEditing(false);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 4000);
  };

  return (
    <section id="profil-mitra" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>☕ PROFIL MITRA KEDAI KOPI</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Profil Kedai &amp; Informasi Operasional Ampas
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Kelola data penanggung jawab kedai, titik koordinat penjemputan armada van, dan kapasitas bak penampung ampas.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-primary/10"
            >
              <span className="material-symbols-outlined text-[16px]">edit</span>
              <span>Ubah Informasi Kedai</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-full bg-surface-container-low text-outline font-bold text-xs transition-colors cursor-pointer"
            >
              Batal
            </button>
          )}
        </div>
      </div>

      {saveAlert && (
        <div className="p-4 rounded-2xl bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
          <span>Data profil kedai dan operasional penjemputan berhasil diperbarui!</span>
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Section 1: Informasi Kedai & PIC */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">store</span>
            <h3 className="font-bold text-sm text-primary">Identitas Kedai &amp; Penanggung Jawab (PIC)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Nama Brand / Kedai</span>
              {isEditing ? (
                <input
                  type="text"
                  required
                  value={profile.partnerName}
                  onChange={(e) => setProfile({ ...profile, partnerName: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.partnerName}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Cabang / Outlet</span>
              {isEditing ? (
                <input
                  type="text"
                  required
                  value={profile.branch}
                  onChange={(e) => setProfile({ ...profile, branch: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.branch}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">ID Kemitraan Sirkula</span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xs text-primary">{profile.partnerId}</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                  Mitra Aktif
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Nama PIC Operasional</span>
              {isEditing ? (
                <input
                  type="text"
                  required
                  value={profile.picName}
                  onChange={(e) => setProfile({ ...profile, picName: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.picName}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Nomor WhatsApp PIC</span>
              {isEditing ? (
                <input
                  type="text"
                  required
                  value={profile.picPhone}
                  onChange={(e) => setProfile({ ...profile, picPhone: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.picPhone}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Email Resmi</span>
              {isEditing ? (
                <input
                  type="email"
                  required
                  value={profile.picEmail}
                  onChange={(e) => setProfile({ ...profile, picEmail: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.picEmail}</span>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Alamat Penjemputan & Jadwal Reguler */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
            <h3 className="font-bold text-sm text-primary">Titik Lokasi Outlet &amp; Akses Armada</h3>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10 space-y-3">
            <div>
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">
                Alamat Lengkap Outlet (Akses Van Sirkula)
              </span>
              {isEditing ? (
                <textarea
                  rows={2}
                  required
                  value={profile.outletAddress}
                  onChange={(e) => setProfile({ ...profile, outletAddress: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-medium resize-none"
                />
              ) : (
                <p className="font-medium text-xs text-on-surface leading-relaxed">
                  {profile.outletAddress}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-primary/10 flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
              <span>Rute Klaster: <strong>{profile.assignedHub}</strong></span>
              <span>Jadwal Reguler: <strong>{profile.regularSchedule}</strong></span>
              <span>Jam Operasional: <strong>{profile.operationalHours}</strong></span>
            </div>
          </div>
        </div>

        {/* Section 3: Informasi Fasilitas & Karakteristik Ampas */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
            <h3 className="font-bold text-sm text-primary">Fasilitas Wadah Sirkula &amp; Karakteristik Ampas</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Jumlah Bak Terpasang</span>
              {isEditing ? (
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={profile.binCapacityUnits}
                  onChange={(e) => setProfile({ ...profile, binCapacityUnits: Number(e.target.value) })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.binCapacityUnits} Bak Food-Grade (60L Total)</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Rata-rata Produksi Harian</span>
              <span className="font-bold text-xs text-primary">{profile.dailyWasteEstimate}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Jenis Limbah Ampas</span>
              <span className="font-bold text-xs text-primary line-clamp-1">{profile.coffeeWasteType}</span>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 rounded-full bg-surface-container text-on-surface-variant font-bold text-xs hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              Batalkan
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-xs hover:bg-primary/90 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">save</span>
              <span>Simpan Perubahan Data</span>
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
