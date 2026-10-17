import React, { useState } from 'react';

export default function FarmerCultivationGuideSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedGuideId, setExpandedGuideId] = useState('guide-1');
  const [searchQuery, setSearchQuery] = useState('');

  const guides = [
    {
      id: 'guide-1',
      category: 'daily',
      categoryLabel: 'SOP Harian Kumbung',
      title: 'Regulasi Suhu, Kelembapan & Misting Air Kumbung',
      difficulty: 'Wajib / Harian',
      icon: 'device_thermostat',
      summary: 'Kunci keberhasilan jamur tiram pada formula ampas kopi adalah kelembapan udara (RH) stabil di 85-90% dan suhu 22-26°C.',
      steps: [
        {
          heading: 'Jadwal Semprot Misting 3 Kali Sehari',
          text: 'Lakukan pengabutan (misting spray) halus pada pukul 07:00 WIB, 12:30 WIB, dan 16:30 WIB. Gunakan air bersih tanpa kaporit (mata air pegunungan Lembang sangat ideal).',
        },
        {
          heading: 'Hindari Semprotan Langsung ke Mulut Baglog',
          text: 'Arahkan nozzle kabut ke udara, dinding paranet, atau lantai kumbung. Jangan semprot air deras langsung ke pinhead kecil karena dapat memicu busuk basah (bacterial rot).',
        },
        {
          heading: 'Manajemen Sirkulasi CO₂',
          text: 'Jamur melepaskan CO₂ saat bernapas. Buka ventilasi paranet atas selama 30 menit di pagi hari agar jamur tidak mengalami kelainan tangkai panjang bertudung kerdil.',
        },
      ],
      tips: 'Jika siang hari suhu kumbung melebihi 28°C, basahi lantai tanah dengan air untuk menurunkan suhu ruangan secara evaporatif.',
    },
    {
      id: 'guide-2',
      category: 'incubation',
      categoryLabel: 'Fase Inkubasi & Buka Cincin',
      title: 'Perawatan Baglog Formula Ampas Kopi (Hari ke-1 s/d 21)',
      difficulty: 'Krusial',
      icon: 'science',
      summary: 'Dengan tambahan 30% ampas kopi tersterilisasi, laju miselium lebih cepat 5 hari dibanding baglog serbuk kayu konvensional.',
      steps: [
        {
          heading: 'Penataan di Rak Kumbung',
          text: 'Susun baglog secara horizontal atau vertikal dengan jarak antarcincin minimal 3 cm untuk memastikan sirkulasi oksigen mikro.',
        },
        {
          heading: 'Kondisi Ruang Inkubasi',
          text: 'Jaga ruangan tetap gelap atau temaram (pencahayaan < 10%). Miselium merambat paling cepat di kegelapan tanpa paparan sinar matahari langsung.',
        },
        {
          heading: 'Waktu Tepat Pembukaan Tutup Cincin',
          text: 'HANYA buka sumbat kapas dan cincin plastik setelah miselium putih tebal telah merambat hingga 100% dasar baglog (rata-rata hari ke-21). Jangan buka terlalu dini agar tidak terkontaminasi spora liar.',
        },
      ],
      tips: 'Setelah cincin dibuka, turunkan suhu ruangan sedikit dan tingkatkan kelembapan untuk memicu keluarnya primordia (calon badan buah jamur).',
    },
    {
      id: 'guide-3',
      category: 'troubleshooting',
      categoryLabel: 'Penanganan Kendala & Hama',
      title: 'Mitigasi Kontaminasi Kapang Hijau (Trichoderma sp.)',
      difficulty: 'Penanganan Darurat',
      icon: 'pest_control',
      summary: 'Kapang hijau adalah kompetitor utama jamur tiram. Deteksi dini dan pemisahan cepat mencegah penularan ke seluruh rak kumbung.',
      steps: [
        {
          heading: 'Identifikasi Gejala Dini',
          text: 'Tampak bercak serbuk hijau atau kehitaman di sekitar leher baglog atau dinding plastik baglog, disertai aroma asam.',
        },
        {
          heading: 'Isolasi Baglog Terinfeksi Seketika',
          text: 'Keluarkan baglog yang bergejala ke ruang karantina berjarak minimal 10 meter dari kumbung utama. Jangan membanting atau memencet baglog agar sporanya tidak berterbangan.',
        },
        {
          heading: 'Sterilisasi Rak & Semprot Alkohol/Kapur',
          text: 'Semprot bilah rak tempat baglog tadi diletakkan dengan alkohol 70% atau taburi sedikit kapur tohor (kalsium hidroksida) untuk mensterilkan spora sisa.',
        },
      ],
      tips: 'Ingat! Baglog Sirkula memiliki Garansi Ganti Baru 100% jika terjadi kontaminasi bawaan pabrik sebelum cincin dibuka. Cukup foto dan klaim di menu Layanan Bantuan.',
    },
    {
      id: 'guide-4',
      category: 'troubleshooting',
      categoryLabel: 'Penanganan Kendala & Hama',
      title: 'Mengatasi Tudung Jamur Kuning Kering atau Batang Lembek',
      difficulty: 'Troubleshooting Fisik',
      icon: 'warning',
      summary: 'Dua masalah paling sering ditemui pembudidaya pemula: jamur mengering karena kelembapan rendah, atau membusuk karena genangan air.',
      steps: [
        {
          heading: 'Gejala Tudung Menguning & Kering Kertas',
          text: 'Penyebab: Kelembapan udara (RH) di bawah 75% atau hembusan angin terlalu kencang. Solusi: Pasang tirai goni basah di sekeliling dinding kumbung dan tingkatkan frekuensi misting.',
        },
        {
          heading: 'Gejala Batang Berlendir & Bau Busuk',
          text: 'Penyebab: Air misting terlalu kasar dan menggenang di celah tudung jamur lebih dari 4 jam. Solusi: Ganti nozzle semprotan ke ukuran kabut mikro (0.15mm) dan pastikan sirkulasi udara aktif.',
        },
      ],
      tips: 'Jamur tiram adalah 90% air, namun membutuhkan partikel kabut halus, bukan guyuran air tetes.',
    },
    {
      id: 'guide-5',
      category: 'harvesting',
      categoryLabel: 'Standar Mutu Panen & Offtaker',
      title: 'SOP Pemetikan Jamur Tiram Grade A untuk Penyerapan Offtaker',
      difficulty: 'Pasca-Panen B2B',
      icon: 'check_circle',
      summary: 'Petik jamur pada waktu dan teknik yang tepat agar memenuhi kriteria sortir penyerapan offtaker Sirkula seharga Rp 16.000 / kg.',
      steps: [
        {
          heading: 'Waktu Petik Terbaik',
          text: 'Lakukan petikan pada pagi hari pukul 05:30 - 07:00 WIB sebelum suhu udara menghangat. Pada jam ini jamur memiliki bobot segar maksimal dan tekstur renyah.',
        },
        {
          heading: 'Teknik Cabut Sampai ke Pangkal',
          text: 'Pegang pangkal rumpun jamur dengan telunjuk dan jempol, putar perlahan lalu tarik. Jangan memotong dengan pisau yang meninggalkan sisa tunggul di dalam leher baglog, karena sisa tunggul akan membusuk dan menghambat flushing berikutnya.',
        },
        {
          heading: 'Kriteria Grade A Sirkula',
          text: 'Diameter tudung 5 - 8 cm, tepian tudung masih agak melengkung ke bawah (belum merekah pecah), warna putih cerah alami tanpa noda kuning, dan kadar air segar.',
        },
      ],
      tips: 'Bersihkan sisa media akar di leher baglog, lalu biarkan baglog istirahat tanpa semprotan selama 2 hari sebelum misting dimulai lagi untuk memicu Flushing ke-2.',
    },
  ];

  const filteredGuides = guides.filter((g) => {
    const matchesCategory = activeCategory === 'all' || g.category === activeCategory;
    const matchesSearch =
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="panduan-budidaya" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>📖 PANDUAN BUDIDAYA RESMI</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Panduan Perawatan &amp; Penanganan Kendala Pertumbuhan
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            SOP budidaya ilmiah substrat ampas kopi, tata kelola iklim kumbung, mitigasi hama, hingga standar pemetikan panen offtaker B2B.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => alert('Buku Pedoman Budidaya Sirkula (PDF 24 Halaman) berhasil diunduh.')}
            className="px-4 py-2.5 rounded-full bg-secondary text-primary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer hover:bg-secondary-fixed shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Unduh PDF Panduan (24 Hal)</span>
          </button>
        </div>
      </div>

      {/* Search & Category Filter Pills */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'Semua Panduan' },
            { id: 'daily', label: 'SOP Harian & Iklim' },
            { id: 'incubation', label: 'Inkubasi & Pembukaan' },
            { id: 'troubleshooting', label: 'Hama & Kontaminasi' },
            { id: 'harvesting', label: 'Standar Mutu Panen' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[220px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari SOP perawatan..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-surface-container-low border border-primary/10 text-xs focus:outline-hidden focus:ring-2 focus:ring-primary/20 text-on-surface"
          />
          <span className="material-symbols-outlined text-[18px] text-outline absolute left-2.5 top-2.5">
            search
          </span>
        </div>
      </div>

      {/* Accordion List of Guides */}
      <div className="flex flex-col gap-3.5">
        {filteredGuides.map((item) => {
          const isExpanded = expandedGuideId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all ${
                isExpanded
                  ? 'bg-surface-container-low border-primary/20 shadow-xs'
                  : 'bg-surface-container-lowest border-primary/10 hover:border-primary/20'
              }`}
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                onClick={() => setExpandedGuideId(isExpanded ? null : item.id)}
                className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.category === 'troubleshooting'
                        ? 'bg-error-container text-on-error-container'
                        : item.category === 'harvesting'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary font-mono text-[10px] font-bold uppercase">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] text-outline">• {item.difficulty}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-primary">{item.title}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-primary hidden sm:inline">
                    {isExpanded ? 'Tutup Detail' : 'Buka SOP Lengkap'}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] text-primary transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 border-t border-primary/10 pt-4 space-y-4">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Step-by-step checklist */}
                  <div className="space-y-3 bg-surface-container-lowest p-4 rounded-xl border border-primary/5">
                    <span className="text-[11px] font-mono text-outline uppercase font-bold block">
                      LANGKAH-LANGKAH SOP:
                    </span>
                    {item.steps.map((st, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary text-white font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-primary">{st.heading}</h4>
                          <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                            {st.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pro-Tips Callout */}
                  <div className="p-3.5 rounded-xl bg-secondary-container/50 border border-secondary/20 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                      lightbulb
                    </span>
                    <p className="text-xs text-on-secondary-container leading-relaxed">
                      <strong className="font-bold">Tips Agronomis Sirkula:</strong> {item.tips}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredGuides.length === 0 && (
          <div className="p-8 text-center bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">menu_book</span>
            <p className="text-sm font-bold text-primary">Tidak ada materi SOP yang cocok</p>
            <p className="text-xs text-on-surface-variant mt-1">Coba gunakan kata kunci pencarian yang berbeda.</p>
          </div>
        )}
      </div>

      {/* Quick Agronomist Contact Card */}
      <div className="mt-2 p-4 sm:p-5 rounded-2xl bg-primary text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-[24px]">support_agent</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Menemukan Masalah Pertumbuhan yang Belum Terjawab?</h4>
            <p className="text-xs text-white/80 mt-0.5">
              Mikolog dan tim agronomis Sirkula siap membantu verifikasi foto baglog Anda via WhatsApp.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6281288007475?text=Halo%20Agronomis%20Sirkula,%20saya%20petani%20Lembang%20butuh%20konsultasi%20pertumbuhan%20baglog"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-secondary text-primary font-bold text-xs shrink-0 hover:bg-white transition-colors flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Konsultasi Mikolog via WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
