import React, { useState } from 'react';
import { PICKUP_ROUTES } from '../../data/mockData';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

export default function PickupManagementSection() {
  const [routes, setRoutes] = useDemoStorage(
    DEMO_STORAGE_KEYS.ADMIN_PICKUP_ROUTES,
    PICKUP_ROUTES
  );
  const [filterStatus, setFilterStatus] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPickup, setNewPickup] = useState({
    coffeeShop: '',
    area: '',
    driver: 'Ilham (Kurir #02)',
    weight: '20 kg',
    slotTime: '09:00 WIB',
  });

  const handleStatusChange = (id, newStatus) => {
    setRoutes((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const type =
            newStatus === 'Selesai'
              ? 'completed'
              : newStatus === 'Dalam Rute'
              ? 'in_progress'
              : newStatus === 'Terjadwal'
              ? 'scheduled'
              : 'upcoming';
          return { ...r, status: newStatus, statusType: type };
        }
        return r;
      })
    );
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: `PK-0${routes.length + 1}`,
      coffeeShop: newPickup.coffeeShop,
      area: newPickup.area,
      driver: newPickup.driver,
      weight: newPickup.weight,
      status: 'Terjadwal',
      statusType: 'scheduled',
      note: `Slot Penjemputan: ${newPickup.slotTime}`,
    };
    setRoutes([created, ...routes]);
    setIsAddModalOpen(false);
    setNewPickup({ coffeeShop: '', area: '', driver: 'Ilham (Kurir #02)', weight: '20 kg', slotTime: '09:00 WIB' });
  };

  const filteredRoutes = routes.filter((r) => {
    if (filterStatus === 'all') return true;
    return r.statusType === filterStatus;
  });

  return (
    <section id="manajemen-penjemputan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🚚 LOGISTIK &amp; JADWAL PENJEMPUTAN</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Manajemen Penjemputan Ampas Kopi
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Atur jadwal kurir 48 jam, lokasi kedai kopi mitra, penugasan armada non-EV (pickup &amp; van), dan konfirmasi timbang.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">add_location_alt</span>
          <span>Jadwalkan Penjemputan Baru</span>
        </button>
      </div>

      {/* Quick Status Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterStatus === 'all' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Semua Rute ({routes.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('in_progress')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterStatus === 'in_progress' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Dalam Rute
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('scheduled')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterStatus === 'scheduled' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Terjadwal
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('completed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterStatus === 'completed' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Selesai Hari Ini
          </button>
        </div>

        <div className="text-xs text-on-surface-variant font-medium">
          Armada Aktif: <strong className="text-primary font-bold">4 Kurir Lapangan</strong> (SLA 48 Jam)
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRoutes.map((route) => (
          <div
            key={route.id}
            className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between hover:shadow-xs transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center font-mono font-bold text-xs">
                    {route.id}
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-sm sm:text-base font-bold text-primary">
                      {route.coffeeShop}
                    </h4>
                    <span className="text-[11px] text-outline">{route.area}</span>
                  </div>
                </div>

                <select
                  value={route.status}
                  onChange={(e) => handleStatusChange(route.id, e.target.value)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border-none outline-none cursor-pointer ${
                    route.statusType === 'completed'
                      ? 'bg-secondary-container text-on-secondary-container'
                      : route.statusType === 'in_progress'
                      ? 'bg-primary text-white'
                      : 'bg-secondary-fixed/50 text-primary'
                  }`}
                >
                  <option value="Selesai">Selesai</option>
                  <option value="Dalam Rute">Dalam Rute</option>
                  <option value="Terjadwal">Terjadwal</option>
                  <option value="Besok Pagi">Besok Pagi</option>
                </select>
              </div>

              <div className="py-3 space-y-2 text-xs text-on-surface-variant">
                <div className="flex items-center justify-between">
                  <span className="text-outline">Petugas Kurir:</span>
                  <div className="flex items-center gap-1 font-semibold text-primary">
                    <span className="material-symbols-outlined text-[15px] text-secondary">person</span>
                    <span>{route.driver}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-outline">Estimasi Bobot Timbang:</span>
                  <span className="font-mono font-bold text-primary">{route.weight}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-[11px]">
                  <span className="text-outline block font-semibold">Instruksi Rute:</span>
                  <span className="text-on-surface">{route.note}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-primary/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-secondary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                <span>Wadah Kedap Food-Grade</span>
              </span>
              <button
                type="button"
                onClick={() => alert(`Reschedule Slot Rute ${route.coffeeShop}`)}
                className="text-[11px] text-primary hover:underline font-bold"
              >
                Ubah Jadwal Slot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL TAMBAH JADWAL PENJEMPUTAN ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Jadwalkan Rute Penjemputan Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">Nama Kedai Kopi Mitra</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Wheels Coffee Roasters Heritage"
                  value={newPickup.coffeeShop}
                  onChange={(e) => setNewPickup({ ...newPickup, coffeeShop: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Area / Klaster Bandung</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Jl. Progo & Riau / Dago Pakar"
                  value={newPickup.area}
                  onChange={(e) => setNewPickup({ ...newPickup, area: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Petugas Kurir</label>
                  <select
                    value={newPickup.driver}
                    onChange={(e) => setNewPickup({ ...newPickup, driver: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
                  >
                    <option value="Ilham (Kurir #02)">Ilham (Pickup Box #01)</option>
                    <option value="Rahmat (Kurir #04)">Rahmat (Kurir Van Hub)</option>
                    <option value="Budi (Kurir #01)">Budi (Blind Van Hub)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Estimasi Ampas (kg)</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 25 kg"
                    value={newPickup.weight}
                    onChange={(e) => setNewPickup({ ...newPickup, weight: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Slot Waktu Penjemputan</label>
                <input
                  type="text"
                  placeholder="Contoh: Slot Pagi 09:30 WIB"
                  value={newPickup.slotTime}
                  onChange={(e) => setNewPickup({ ...newPickup, slotTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs"
                >
                  Jadwalkan Kurir
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
