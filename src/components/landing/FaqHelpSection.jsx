import React, { useState } from 'react';

export default function FaqHelpSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    phone: '',
    category: 'Keluhan Pengiriman & Kurir',
    message: '',
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const faqs = [
    {
      q: 'Apakah ada biaya bagi kedai kopi untuk bergabung dengan program penjemputan ampas Sirkula?',
      a: 'Sama sekali tidak ada biaya (Zero-Cost Waste Pickup). Pendaftaran kemitraan 100% gratis, wadah kedap penampung ampas kopi food-grade dipinjamkan secara cuma-cuma, dan kurir Sirkula menjemput rutin secara terjadwal tanpa membebani biaya operasional kedai Anda.',
    },
    {
      q: 'Berapa minimal jumlah pemesanan baglog untuk mitra pembudidaya jamur?',
      a: 'Minimal pemesanan sangat fleksibel, yaitu mulai dari 100 unit untuk pembelian ritel baglog satuan (Rp 3.000 / unit). Untuk efisiensi logistik maksimal, kami menyarankan Paket Kumbung Starter (500 unit) seharga Rp 1.500.000 yang sudah termasuk gratis pengiriman armada kurir ke lokasi kumbung Anda di Bandung Raya & Lembang.',
    },
    {
      q: 'Bagaimana mekanisme jaminan serap hasil panen (Offtaker Buyback Guarantee 100%)?',
      a: 'Mitra petani jamur yang menggunakan baglog resmi Sirkula mendapatkan kontrak pembelian hasil panen dengan harga dasar yang stabil (saat ini Rp 16.000 / kg jamur tiram putih grade A). Tim Sirkula menyerap panen Anda dan menyalurkannya langsung ke jaringan restoran, pasar grosir segar, dan mitra Horeka sehingga petani tidak perlu khawatir fluktuasi pasar.',
    },
    {
      q: 'Bagaimana jika ada baglog yang rusak atau terkontaminasi kapang saat pengiriman tiba?',
      a: 'Setiap baglog Sirkula dijamin steril lewat pengukusan autoclave manual 121°C selama 90 menit. Namun jika Anda menemukan baglog yang terkontaminasi atau rusak saat tiba di kumbung, cukup kirimkan foto melalui nomor WhatsApp layanan kami dalam waktu 7 hari, dan kami akan mengganti unit baglog baru 100% tanpa biaya tambahan.',
    },
    {
      q: 'Di mana saja wilayah jangkauan penjemputan ampas dan pengantaran baglog Sirkula saat ini?',
      a: 'Pusat operasional kami berada di Sirkula Hub Lembang (Kode Fasilitas: HUB-BDG-01). Jangkauan penjemputan mencakup seluruh kawasan Bandung Raya (Dago, Braga, Riau, Citarum, Buah Batu, dsk.), sedangkan distribusi pengantaran baglog melayani sentra jamur di Lembang, Parongpong, Maribaya, Ciwidey, dan wilayah Jawa Barat sekitarnya.',
    },
  ];

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const randomTicket = `SRK-TKT-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(randomTicket);
    setTicketSubmitted(true);
  };

  return (
    <section id="bantuan" className="w-full bg-surface py-20 scroll-mt-28">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
            <span>💬 PUSAT BANTUAN &amp; FAQ</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary font-semibold tracking-tight">
            Pertanyaan yang Sering Diajukan &amp; Layanan Pengaduan
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Temukan jawaban cepat seputar kemitraan sirkular atau hubungi tim customer service kami untuk bantuan operasional harian.
          </p>
        </div>

        {/* 2 Column Layout: FAQ Accordion (Left 7 Cols) + Pengaduan & Helpdesk (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[24px]">quiz</span>
              <span>Pertanyaan Populer (FAQ)</span>
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all border ${
                    isOpen
                      ? 'bg-surface-container-lowest border-primary/20 shadow-sm'
                      : 'bg-surface-container-low hover:bg-surface-container border-outline-variant/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="font-label-md text-label-md font-bold text-primary leading-snug">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant shrink-0 mt-0.5">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-primary/10 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Formulir Pengaduan & Kontak Langsung (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-low p-6 sm:p-7 rounded-3xl border border-primary/10 shadow-sm flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">contact_support</span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Layanan Pengaduan &amp; Helpdesk
                </h3>
              </div>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Ada kendala pengantaran, kerusakan baglog, atau pertanyaan teknis? Sampaikan laporan Anda di sini:
              </p>
            </div>

            {!ticketSubmitted ? (
              <form onSubmit={handleTicketSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-on-surface mb-1 uppercase tracking-wider text-[11px]">
                    Nama Lengkap / Nama Mitra
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso (Kopi Djawa)"
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 focus:border-primary outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-on-surface mb-1 uppercase tracking-wider text-[11px]">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812-8800-7475"
                    value={ticketForm.phone}
                    onChange={(e) => setTicketForm({ ...ticketForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 focus:border-primary outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-on-surface mb-1 uppercase tracking-wider text-[11px]">
                    Kategori Pengaduan
                  </label>
                  <select
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 focus:border-primary outline-none text-sm"
                  >
                    <option>Keluhan Pengiriman &amp; Kurir</option>
                    <option>Klaim Penggantian Baglog Rusak</option>
                    <option>Permintaan Wadah Ampas Tambahan</option>
                    <option>Konsultasi Agronomi &amp; Kumbung</option>
                    <option>Lainnya / Pertanyaan Kemitraan</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-on-surface mb-1 uppercase tracking-wider text-[11px]">
                    Detail Pesan / Pengaduan
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tuliskan kendala yang Anda alami secara detail..."
                    value={ticketForm.message}
                    onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 focus:border-primary outline-none text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-sm font-semibold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Kirim Laporan Pengaduan</span>
                </button>
              </form>
            ) : (
              <div className="py-4 text-center space-y-3 bg-surface-container-lowest p-5 rounded-2xl border border-secondary/20 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-secondary flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[28px]">check_circle</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Pengaduan Diterima!
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Laporan Anda tercatat dengan nomor tiket:
                </p>
                <div className="px-4 py-2 bg-secondary-fixed/40 rounded-xl text-primary font-mono font-bold text-sm inline-block">
                  #{ticketId}
                </div>
                <p className="text-[11px] text-on-surface-variant">
                  Petugas helpdesk Hub Sirkula akan segera menghubungi WhatsApp <strong>{ticketForm.phone}</strong> dalam waktu maks 2 jam kerja.
                </p>
                <button
                  type="button"
                  onClick={() => setTicketSubmitted(false)}
                  className="text-xs text-secondary font-bold hover:underline block mx-auto pt-1"
                >
                  Kirim Pengaduan Lain
                </button>
              </div>
            )}

            {/* Direct Contact Links */}
            <div className="pt-4 border-t border-primary/10 flex flex-col gap-2.5 text-xs text-on-surface-variant">
              <span className="font-bold text-primary uppercase tracking-wider text-[11px]">
                Kontak Hotline Cepat:
              </span>
              <a
                href="https://wa.me/6281288007475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-primary font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
                <span>WhatsApp Hotline: +62 812-8800-7475</span>
              </a>
              <a
                href="mailto:kemitraan@sirkula.id"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-primary font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                <span>Email Resmi: kemitraan@sirkula.id</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
