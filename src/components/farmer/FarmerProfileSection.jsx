import React, { useState } from 'react';
import { FARMER_PROFILE_DATA } from '../../data/mockData';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

export default function FarmerProfileSection() {
  const [profile, setProfile] = useDemoStorage(
    DEMO_STORAGE_KEYS.FARMER_PROFILE,
    FARMER_PROFILE_DATA
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
    <section id="profil-petani" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>👤 PROFIL PETANI &amp; KUMBUNG</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Profil Petani &amp; Informasi Usaha Budidaya
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Kelola data penanggung jawab, titik alamat kumbung pengiriman baglog, kapasitas rak, dan rekening bank penampung offtaker.
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
              <span>Ubah Informasi Profil</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-full bg-surface-container-low text-outline font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Batal</span>
            </button>
          )}
        </div>
      </div>

      {saveAlert && (
        <div className="p-4 rounded-2xl bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
          <span>Perubahan profil usaha tani dan rekening offtaker berhasil disimpan!</span>
        </div>
      )}

      {/* Main Form / Display */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Section 1: Data Diri & Kontak Penanggung Jawab */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
            <h3 className="font-bold text-sm text-primary">Data Diri &amp; Keanggotaan Kelompok Tani</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Nama PIC Petani</span>
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
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Nama Usaha / Poktan</span>
              {isEditing ? (
                <input
                  type="text"
                  required
                  value={profile.farmName}
                  onChange={(e) => setProfile({ ...profile, farmName: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.farmName}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">ID Kemitraan Sirkula</span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xs text-primary">{profile.partnerId}</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                  Terverifikasi
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Nomor WhatsApp</span>
              {isEditing ? (
                <input
                  type="text"
                  required
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.phone}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10 sm:col-span-2">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Alamat Email</span>
              {isEditing ? (
                <input
                  type="email"
                  required
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.email}</span>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Alamat Kumbung & Rute Pengiriman */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">home_pin</span>
            <h3 className="font-bold text-sm text-primary">Alamat Kumbung Pengiriman &amp; Penjemputan Panen</h3>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10">
            <span className="text-[11px] font-mono text-outline uppercase block mb-1">
              Alamat Lengkap Kumbung (Akses Armada Pickup)
            </span>
            {isEditing ? (
              <textarea
                rows={2}
                required
                value={profile.kumbungAddress}
                onChange={(e) => setProfile({ ...profile, kumbungAddress: e.target.value })}
                className="w-full p-2.5 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-medium resize-none"
              />
            ) : (
              <p className="font-medium text-xs text-on-surface leading-relaxed">
                {profile.kumbungAddress}
              </p>
            )}

            <div className="mt-3 pt-3 border-t border-primary/10 flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">local_shipping</span>
                <span>Rute Klaster: <strong>Bandung Barat #02 (Lembang - Parongpong)</strong></span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                <span>Jadwal Pengiriman Reguler: <strong>Selasa &amp; Jumat Pagi</strong></span>
              </span>
            </div>
          </div>
        </div>

        {/* Section 3: Informasi Usaha Budidaya & Fasilitas */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">agriculture</span>
            <h3 className="font-bold text-sm text-primary">Kapasitas &amp; Fasilitas Budidaya</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Kapasitas Rak Kumbung</span>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.rackCapacity}
                  onChange={(e) => setProfile({ ...profile, rackCapacity: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.rackCapacity}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Konstruksi Kumbung</span>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.kumbungType}
                  onChange={(e) => setProfile({ ...profile, kumbungType: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.kumbungType}</span>
              )}
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-primary/10">
              <span className="text-[11px] font-mono text-outline uppercase block mb-1">Sumber Air Misting</span>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.waterSource}
                  onChange={(e) => setProfile({ ...profile, waterSource: e.target.value })}
                  className="w-full p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                />
              ) : (
                <span className="font-bold text-xs text-primary">{profile.waterSource}</span>
              )}
            </div>
          </div>
        </div>

        {/* Section 4: Rekening Pencairan Penjualan Offtaker */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
            <h3 className="font-bold text-sm text-primary">Rekening Pencairan Hasil Panen (Offtaker Sirkula)</h3>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                BCA
              </div>
              <div>
                <span className="text-[11px] font-mono text-outline uppercase block">Rekening Aktif Terdaftar</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.bankAccount}
                    onChange={(e) => setProfile({ ...profile, bankAccount: e.target.value })}
                    className="mt-1 p-2 rounded-lg bg-surface-container-lowest border border-primary/20 text-xs text-on-surface font-semibold"
                  />
                ) : (
                  <span className="font-mono font-bold text-xs sm:text-sm text-primary">
                    {profile.bankAccount}
                  </span>
                )}
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold self-start sm:self-auto flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Pencairan H+1 Pasca Timbang</span>
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
