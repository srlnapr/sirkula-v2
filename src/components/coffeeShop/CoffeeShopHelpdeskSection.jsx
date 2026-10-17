import React, { useState } from 'react';
import { useDemoStorage, DEMO_STORAGE_KEYS } from '../../utils/demoStorage';

const INITIAL_COFFEE_TICKETS = [
  {
    id: 'TK-CS-402',
    category: 'Permohonan Wadah Bak Tambahan',
    subject: 'Penambahan 1 Unit Bak 20L Antisipasi Lonjakan Ampas Weekend',
    date: '23 Okt 2024',
    status: 'approved',
    statusLabel: 'Disetujui Admin Hub',
    priority: 'Normal',
    description: 'Volume ampas Jumat-Minggu meningkat hingga 30 kg, butuh 1 bak cadangan agar tidak meluap.',
    adminResponse: 'Permintaan disetujui. Driver Rahmat akan membawakan 1 bak tambahan berpenutup kedap aroma pada jadwal besok pagi.',
  },
  {
    id: 'TK-CS-388',
    category: 'Masalah Operasional / Kurir',
    subject: 'Penyesuaian Jam Tiba Kurir Menjadi Di Atas Pukul 09:00',
    date: '16 Okt 2024',
    status: 'resolved',
    statusLabel: 'Selesai Ditangani',
    priority: 'Tinggi',
    description: 'Barista buka outlet pukul 07:30, mohon kurir tiba setelah shift pagi siap pada pukul 09:00 WIB.',
    adminResponse: 'Rute Klaster Bandung #01 telah disesuaikan. Titik Sana Coffee Roasters kini dijadwalkan pada urutan pukul 09:00 - 09:30 WIB.',
  },
];

export default function CoffeeShopHelpdeskSection() {
  const [tickets, setTickets] = useDemoStorage(
    DEMO_STORAGE_KEYS.COFFEE_TICKETS,
    INITIAL_COFFEE_TICKETS
  );

  const [formData, setFormData] = useState({
    category: 'Permohonan Wadah Bak Tambahan',
    subject: '',
    description: '',
    priority: 'Normal',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.description) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newTicket = {
        id: `TK-CS-${Math.floor(410 + Math.random() * 50)}`,
        category: formData.category,
        subject: formData.subject,
        date: 'Hari Ini',
        status: 'pending',
        statusLabel: 'Sedang Ditinjau Admin',
        priority: formData.priority,
        description: formData.description,
        adminResponse: 'Tiket berhasil diterima Account Manager Sirkula. Estimasi respon dalam 1-2 jam kerja.',
      };

      setTickets([newTicket, ...tickets]);
      setIsSubmitting(false);
      setSuccessMessage('Laporan berhasil dikirim ke Admin Hub Sirkula! Tim kami segera menindaklanjuti.');
      setFormData({
        category: 'Permohonan Wadah Bak Tambahan',
        subject: '',
        description: '',
        priority: 'Normal',
      });

      setTimeout(() => setSuccessMessage(''), 5000);
    }, 600);
  };

  return (
    <section id="pusat-bantuan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🛎️ PUSAT BANTUAN &amp; PENGADUAN</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Pusat Bantuan &amp; Pengaduan Operasional Penjemputan
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Ajukan permohonan wadah tambahan, laporan keterlambatan kurir, sanggahan timbangan, atau konsultasi ESG kepada Admin Hub Sirkula.
          </p>
        </div>

        <a
          href="https://wa.me/6281288007475?text=Halo%20Admin%20Sirkula,%20saya%20dari%20Sana%20Coffee%20Roasters%20butuh%20bantuan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-full bg-secondary text-primary font-bold text-xs flex items-center gap-1.5 transition-colors hover:bg-secondary-fixed shadow-xs self-start lg:self-auto"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>Hotline WhatsApp Account Manager</span>
        </a>
      </div>

      {successMessage && (
        <div className="p-4 rounded-2xl bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
          <span>{successMessage}</span>
        </div>
      )}

      {/* Two Column Layout: Form Tiket & Riwayat Pengaduan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Pengajuan (5 cols) */}
        <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-2xl border border-primary/10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">contact_support</span>
            <h3 className="font-bold text-sm sm:text-base text-primary">Kirim Pertanyaan / Laporan Baru</h3>
          </div>
          <p className="text-xs text-on-surface-variant">
            Pilih kategori laporan untuk penanganan cepat oleh Account Manager dan Tim Logistik.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
            <div>
              <label className="block font-semibold text-primary mb-1">Kategori Laporan</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface font-medium focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              >
                <option value="Permohonan Wadah Bak Tambahan">🪣 Permohonan Bak Wadah Tambahan (Kedap Udara)</option>
                <option value="Kendala Keterlambatan Kurir">⏱️ Kendala Keterlambatan / Waktu Kedatangan Kurir</option>
                <option value="Klarifikasi Hasil Timbangan">⚖️ Klarifikasi / Sanggahan Hasil Timbangan Digital</option>
                <option value="Permintaan Standee & Sertifikat">📜 Permintaan Cetak Sertifikat &amp; Standee Akrilik</option>
                <option value="Pertanyaan & Bantuan Lainnya">❓ Pertanyaan Operasional / Integrasi ESG</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-primary mb-1">Prioritas</label>
              <div className="grid grid-cols-2 gap-2">
                {['Normal', 'Tinggi (Ampas Penuh)'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setFormData({ ...formData, priority: p })}
                    className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                      formData.priority === p
                        ? 'bg-primary text-white border-primary shadow-xs'
                        : 'bg-surface-container-lowest border-primary/10 text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-primary mb-1">Judul / Subjek Kendala</label>
              <input
                type="text"
                required
                placeholder="Contoh: Wadah ampas 3 bak sudah penuh sebelum jadwal Jumat"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block font-semibold text-primary mb-1">Deskripsi Lengkap Kendala</label>
              <textarea
                rows={3}
                required
                placeholder="Jelaskan detail situasi atau permohonan kedai Anda..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full py-2.5 rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary/90 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>{isSubmitting ? 'Mengirim...' : 'Kirim Tiket Bantuan'}</span>
            </button>
          </form>
        </div>

        {/* Riwayat Tiket Pengaduan (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">assignment</span>
              <span>Status &amp; Riwayat Laporan Penjemputan</span>
            </h3>
            <span className="font-mono text-xs text-outline">{tickets.length} Tiket</span>
          </div>

          <div className="flex flex-col gap-3">
            {tickets.map((t) => (
              <div
                key={t.id}
                className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-primary/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-primary">{t.id}</span>
                    <span className="text-xs text-outline">• {t.date}</span>
                    <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary text-[10px] font-bold">
                      {t.category}
                    </span>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      t.status === 'approved'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : t.status === 'resolved'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {t.statusLabel}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-primary">{t.subject}</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {t.description}
                  </p>
                </div>

                {/* Respon Admin Hub */}
                {t.adminResponse && (
                  <div className="p-3 rounded-xl bg-surface-container-lowest border border-primary/10 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      A
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-primary block">Tanggapan Admin Hub:</span>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        {t.adminResponse}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
