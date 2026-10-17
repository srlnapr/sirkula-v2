import React, { useState } from 'react';
import { ADMIN_USERS_LIST, ADMIN_PARTNER_VERIFICATIONS } from '../../data/mockData';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

export default function UserManagementSection() {
  const [activeTab, setActiveTab] = useState('users'); // 'users' | 'verifications'
  const [users, setUsers] = useDemoStorage(
    DEMO_STORAGE_KEYS.ADMIN_USERS,
    ADMIN_USERS_LIST
  );
  const [verifications, setVerifications] = useDemoStorage(
    DEMO_STORAGE_KEYS.ADMIN_VERIFICATIONS,
    ADMIN_PARTNER_VERIFICATIONS
  );
  const [roleFilter, setRoleFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal State for Adding User
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    pic: '',
    email: '',
    phone: '',
    role: 'coffee-shop',
    location: '',
  });

  // Action: Toggle Active / Inactive
  const handleToggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          const newStatus = u.status === 'active' ? 'inactive' : 'active';
          return { ...u, status: newStatus };
        }
        return u;
      })
    );
  };

  // Action: Add New User Submit
  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: `USR-${String(users.length + 1).padStart(3, '0')}`,
      name: newUser.name,
      pic: newUser.pic,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      roleName:
        newUser.role === 'coffee-shop'
          ? 'Mitra Kedai Kopi'
          : newUser.role === 'farmer'
          ? 'Petani Jamur'
          : newUser.role === 'courier'
          ? 'Kurir Lapangan'
          : 'Admin Hub',
      location: newUser.location || 'Bandung Raya',
      status: 'active',
      joinedDate: 'Hari ini',
      totalContribution: '0',
    };
    setUsers([created, ...users]);
    setIsAddModalOpen(false);
    setNewUser({ name: '', pic: '', email: '', phone: '', role: 'coffee-shop', location: '' });
  };

  // Action: Approve Partner Verification
  const handleApproveVerification = (item) => {
    setVerifications((prev) =>
      prev.map((v) => (v.id === item.id ? { ...v, status: 'approved' } : v))
    );
    // Automatically add to users list
    const newPartnerUser = {
      id: `USR-${String(users.length + 1).padStart(3, '0')}`,
      name: item.businessName,
      pic: item.picName,
      email: `${item.businessName.toLowerCase().replace(/\s+/g, '')}@partner.id`,
      phone: item.whatsapp,
      role: item.category,
      roleName: item.categoryLabel,
      location: item.location,
      status: 'active',
      joinedDate: 'Hari ini',
      totalContribution: 'Baru Terverifikasi',
    };
    setUsers([newPartnerUser, ...users]);
  };

  // Action: Reject Verification
  const handleRejectVerification = (id) => {
    setVerifications((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: 'rejected' } : v))
    );
  };

  const filteredUsers = users.filter((u) => {
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.pic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const pendingVerificationCount = verifications.filter((v) => v.status === 'pending').length;

  return (
    <section id="manajemen-pengguna" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header & Internal Tab Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>👥 MODUL KONTROL PENGGUNA &amp; MITRA</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Manajemen Pengguna &amp; Verifikasi Mitra
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Kelola akun kedai kopi, petani jamur, kurir lapangan, dan validasi permohonan kemitraan baru.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-2xl border border-outline-variant/30">
          <button
            type="button"
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'users'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">manage_accounts</span>
            <span>Daftar Pengguna ({users.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('verifications')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'verifications'
                ? 'bg-primary text-white shadow-xs'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
            <span>Verifikasi Calon Mitra</span>
            {pendingVerificationCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-primary text-[10px] font-bold">
                {pendingVerificationCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ================= TAB 1: MANAJEMEN PENGGUNA (FITUR 2) ================= */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          {/* Action & Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Search Input */}
            <div className="flex items-center gap-2 flex-1 min-w-[240px] max-w-md bg-surface-container-low px-3.5 py-2 rounded-xl border border-outline-variant/30 text-xs">
              <span className="material-symbols-outlined text-outline text-[18px]">search</span>
              <input
                type="text"
                placeholder="Cari nama bisnis, PIC, atau wilayah..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-xs text-on-surface"
              />
            </div>

            {/* Role Filters & Add Button */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-xs font-semibold text-primary outline-none"
              >
                <option value="all">Semua Peran (All Roles)</option>
                <option value="coffee-shop">Kedai Kopi (Supplier)</option>
                <option value="farmer">Petani Jamur (Buyer)</option>
                <option value="courier">Kurir Logistik</option>
              </select>

              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">person_add</span>
                <span>Tambah Pengguna</span>
              </button>
            </div>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto rounded-2xl border border-primary/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
                <tr>
                  <th className="py-3 px-4">ID &amp; Nama Akun</th>
                  <th className="py-3 px-4">Kontak &amp; PIC</th>
                  <th className="py-3 px-4">Peran (Role)</th>
                  <th className="py-3 px-4">Lokasi Wilayah</th>
                  <th className="py-3 px-4">Status Akun</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-on-surface">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-mono text-[10px] text-outline block">{user.id}</span>
                      <strong className="text-primary font-bold text-sm block">{user.name}</strong>
                      <span className="text-[11px] text-on-surface-variant">Kontribusi: {user.totalContribution}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold">{user.pic}</div>
                      <div className="text-[11px] text-outline">{user.phone}</div>
                      <div className="text-[11px] text-on-surface-variant font-mono">{user.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          user.role === 'coffee-shop'
                            ? 'bg-amber-100 text-amber-950'
                            : user.role === 'farmer'
                            ? 'bg-secondary-container text-on-secondary-container'
                            : 'bg-primary-fixed/40 text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {user.role === 'coffee-shop'
                            ? 'local_cafe'
                            : user.role === 'farmer'
                            ? 'yard'
                            : 'local_shipping'}
                        </span>
                        <span>{user.roleName}</span>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">{user.location}</td>
                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(user.id)}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer transition-all ${
                          user.status === 'active'
                            ? 'bg-secondary-fixed/50 text-secondary hover:bg-secondary-fixed'
                            : 'bg-surface-container text-outline hover:bg-surface-container-high'
                        }`}
                        title="Klik untuk ubah status aktif/nonaktif"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'active' ? 'bg-secondary' : 'bg-outline'}`}></span>
                        <span>{user.status === 'active' ? 'Aktif' : 'Nonaktif'}</span>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => alert(`Edit Akun ${user.name} (${user.id})`)}
                          className="w-7 h-7 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary flex items-center justify-center cursor-pointer"
                          title="Edit akun"
                        >
                          <span className="material-symbols-outlined text-[15px]">edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(user.id)}
                          className="w-7 h-7 rounded-lg bg-surface-container-low hover:bg-error/10 text-on-surface-variant hover:text-error flex items-center justify-center cursor-pointer"
                          title={user.status === 'active' ? 'Nonaktifkan Akun' : 'Aktifkan Akun'}
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            {user.status === 'active' ? 'block' : 'check_circle'}
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 2: VERIFIKASI MITRA (FITUR 3) ================= */}
      {activeTab === 'verifications' && (
        <div className="space-y-4">
          <div className="p-4 bg-secondary-fixed/30 rounded-2xl border border-secondary/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[22px]">verified_user</span>
              <div>
                <h4 className="font-label-md text-label-md font-bold text-primary">
                  Antrean Validasi Registrasi Kemitraan Baru
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Periksa keabsahan lokasi kedai / kumbung petani sebelum akun diaktifkan ke jaringan kurir.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary text-primary font-bold text-xs">
              {pendingVerificationCount} Menunggu Konfirmasi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verifications.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container-low p-5 rounded-2xl border border-primary/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 pb-3 border-b border-primary/10">
                    <div>
                      <span className="text-[10px] font-mono text-outline">{item.id} • {item.submissionDate}</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold text-primary mt-0.5">
                        {item.businessName}
                      </h4>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        item.status === 'approved'
                          ? 'bg-secondary-fixed text-primary'
                          : item.status === 'rejected'
                          ? 'bg-error/15 text-error'
                          : 'bg-amber-100 text-amber-900 animate-pulse'
                      }`}
                    >
                      {item.status === 'approved'
                        ? 'Telah Disetujui'
                        : item.status === 'rejected'
                        ? 'Ditolak'
                        : 'Menunggu Verifikasi'}
                    </span>
                  </div>

                  <div className="py-3 space-y-1.5 text-xs text-on-surface-variant">
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Kategori:</span>
                      <strong className="text-primary">{item.categoryLabel}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Penanggung Jawab:</span>
                      <span>{item.picName} ({item.whatsapp})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Lokasi Alamat:</span>
                      <span className="font-semibold text-primary">{item.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Volume / Kapasitas:</span>
                      <span className="font-mono font-bold text-secondary">{item.estimatedVolume}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface-container-lowest mt-2 border border-outline-variant/30 text-[11px]">
                      <span className="text-outline block font-semibold">Catatan Pendaftaran:</span>
                      <span className="text-on-surface">{item.notes}</span>
                    </div>
                  </div>
                </div>

                {/* Verification Actions */}
                <div className="pt-3 border-t border-primary/10 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/${item.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-primary font-bold text-[11px] flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">chat</span>
                    <span>Hubungi WA</span>
                  </a>

                  {item.status === 'pending' ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleRejectVerification(item.id)}
                        className="px-3 py-1.5 rounded-xl bg-error/10 hover:bg-error/20 text-error font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        Tolak
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApproveVerification(item)}
                        className="px-4 py-1.5 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-[11px] transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[15px]">check</span>
                        <span>Setujui &amp; Aktivasi</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-[11px] font-semibold text-outline">
                      Selesai Diproses
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH PENGGUNA BARU ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Tambah Akun Pengguna Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddUserSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">Nama Usaha / Petani / Kurir</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Kopi Roastery Dago"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Nama Penanggung Jawab (PIC)</label>
                <input
                  type="text"
                  required
                  placeholder="Nama PIC"
                  value={newUser.pic}
                  onChange={(e) => setNewUser({ ...newUser, pic: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">No. WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Role Akun</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
                  >
                    <option value="coffee-shop">Kedai Kopi</option>
                    <option value="farmer">Petani Jamur</option>
                    <option value="courier">Kurir Logistik</option>
                    <option value="admin">Admin Hub</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Wilayah Operasional</label>
                <input
                  type="text"
                  placeholder="Contoh: Lembang / Braga / Riau"
                  value={newUser.location}
                  onChange={(e) => setNewUser({ ...newUser, location: e.target.value })}
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
                  Simpan &amp; Aktifkan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
