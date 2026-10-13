import React, { useState } from 'react';

export default function FarmerHelpdeskSection() {
  const [tickets, setTickets] = useState([
    {
      id: 'TK-FARM-902',
      category: 'Klaim Garansi Baglog 100%',
      subject: 'Klaim 6 Baglog Terpapar Kapang Trichoderma (Batch #809)',
      date: '23 Okt 2024',
      status: 'approved',
      statusLabel: 'Disetujui Penggantian',
      priority: 'Tinggi',
      description: 'Ditemukan bercak kapang hijau di leher 6 baglog saat sterilisasi hari ke-3. Foto bukti sudah terlampir.',
      adminResponse: 'Klaim telah divalidasi oleh Tim Agronomis. 6 baglog pengganti baru disertakan pada pengantaran PO-BGL-8821 oleh Pak Budi gratis.',
    },
    {
      id: 'TK-FARM-884',
      category: 'Penyerapan Panen Offtaker',
      subject: 'Jadwal Penimbangan & Angkut Hasil Panen Flushing 1',
      date: '17 Okt 2024',
      status: 'resolved',
      statusLabel: 'Selesai Ditangani',
      priority: 'Normal',
      description: 'Panen Kumbung B Parongpong diperkirakan siap petik 18 Okt pagi, estimasi bobot 90 kg.',
      adminResponse: 'Penjemputan berhasil diselesaikan oleh armada Hub Lembang. Total 92.5 kg jamur tiram Grade A diserap dengan nilai Rp 1.480.000.',
    },
  ]);

  const [formData, setFormData] = useState({
    category: 'Klaim Garansi Baglog 100%',
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
        id: `TK-FARM-${Math.floor(910 + Math.random() * 50)}`,
        category: formData.category,
        subject: formData.subject,
        date: 'Hari Ini',
        status: 'pending',
        statusLabel: 'Sedang Ditinjau Admin',
        priority: formData.priority,
        description: formData.description,
        adminResponse: 'Laporan telah diterima oleh Admin Hub Lembang. Estimasi respon dalam 1-2 jam kerja.',
      };

      setTickets([newTicket, ...tickets]);
      setIsSubmitting(false);
      setSuccessMessage('Laporan berhasil dikirim ke Admin Hub Sirkula! Tiket Anda sedang diproses.');
      setFormData({
        category: 'Klaim Garansi Baglog 100%',
        subject: '',
        description: '',
        priority: 'Normal',
      });

      setTimeout(() => setSuccessMessage(''), 6000);
    }, 600);
  };

  return (
    <section id="layanan-bantuan" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🛎️ FITUR 11: LAYANAN BANTUAN &amp; KELUHAN</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Layanan Bantuan, Pengaduan Masalah &amp; Klaim Garansi
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Sampaikan kendala pengiriman, konsultasi agronomi darurat, atau klaim garansi ganti baru 100% jika baglog rusak/terkontaminasi.
          </p>
        </div>

        <a
          href="https://wa.me/6281288007475"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-full bg-secondary text-primary font-bold text-xs flex items-center gap-1.5 transition-colors hover:bg-secondary-fixed shadow-xs self-start lg:self-auto"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>Hotline WhatsApp Admin</span>
        </a>
      </div>

      {successMessage && (
        <div className="p-4 rounded-2xl bg-secondary-container text-on-secondary-container text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
          <span>{successMessage}</span>
        </div>
      )}

      {/* Two Column Layout: Form Submission & Existing Tickets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Pengajuan Tiket (5 cols) */}
        <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-2xl border border-primary/10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">contact_support</span>
            <h3 className="font-bold text-sm sm:text-base text-primary">Kirim Pertanyaan / Laporan Baru</h3>
          </div>
          <p className="text-xs text-on-surface-variant">
            Pilih kategori laporan untuk penanganan cepat oleh tim Hub Lembang.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
            <div>
              <label className="block font-semibold text-primary mb-1">Kategori Masalah</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface font-medium focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              >
                <option value="Klaim Garansi Baglog 100%">🛡️ Klaim Garansi Baglog 100% (Kontaminasi/Pecah)</option>
                <option value="Kendala Distribusi & Kurir">🚚 Kendala Pengiriman &amp; Jadwal Kurir</option>
                <option value="Konsultasi Hama & Mikologi">🔬 Konsultasi Hama, Jamur Liar &amp; Suhu</option>
                <option value="Penyerapan Panen Offtaker">🍄 Penjadwalan Penyerapan Panen Jamur</option>
                <option value="Kendala Rekening & Pembayaran">💳 Pembayaran &amp; Rekening Penampung</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-primary mb-1">Prioritas</label>
              <div className="grid grid-cols-2 gap-2">
                {['Normal', 'Tinggi (Darurat Kumbung)'].map((p) => (
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
              <label className="block font-semibold text-primary mb-1">Judul / Subjek Laporan</label>
              <input
                type="text"
                required
                placeholder="Contoh: 8 Baglog Kontaminasi Trichoderma di Batch 809"
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
                placeholder="Jelaskan kondisi kumbung, nomor batch, atau keluhan yang dialami..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-surface-container-lowest border border-primary/10 text-on-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>

            {/* Simulated Photo Attachment */}
            <div className="p-3 rounded-xl border border-dashed border-primary/20 bg-surface-container-lowest text-center">
              <span className="material-symbols-outlined text-[20px] text-outline block mb-1">add_photo_alternate</span>
              <p className="text-[11px] text-outline font-medium">Unggah Foto Baglog / Kondisi Kumbung (Opsional)</p>
              <span className="text-[10px] text-on-surface-variant">Mendukung format JPG, PNG (Maks 5 MB)</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full py-2.5 rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary/90 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>{isSubmitting ? 'Mengirim...' : 'Kirim Laporan ke Admin'}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Riwayat Tiket Pengaduan (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">assignment</span>
              <span>Status &amp; Riwayat Tiket Pengaduan</span>
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

                {/* Admin Response Box */}
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

          {/* SLA & Guarantee Info Card */}
          <div className="p-4 rounded-2xl bg-surface-container border border-primary/10 flex items-start gap-3">
            <span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">verified_user</span>
            <div>
              <h5 className="font-bold text-xs text-primary">Jaminan Layanan &amp; SLA Sirkula untuk Petani</h5>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                Setiap tiket pengaduan ditanggapi maksimal dalam waktu 2 jam kerja. Baglog dengan kontaminasi sebelum masa inkubasi selesai diganti 100% tanpa biaya tambahan pada jadwal armada berikutnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
