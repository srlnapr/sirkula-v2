import React, { useState } from 'react';
import { UNIT_ECONOMICS, BAGLOG_COMPOSITION } from '../../data/mockData';

export default function BaglogCatalogSection({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState('tiram-putih');

  const products = [
    {
      id: 'tiram-putih',
      name: 'Baglog Jamur Tiram Putih (Pleurotus ostreatus)',
      subtitle: 'Formula Bio-Sirkular 30% Ampas Kopi Murni',
      tag: 'Paling Populer',
      tagColor: 'bg-secondary text-primary font-bold',
      category: 'reguler',
      price: UNIT_ECONOMICS.sellingPrice,
      priceFormatted: UNIT_ECONOMICS.sellingPriceFormatted,
      marketPrice: 'Rp 3.750 / unit',
      saving: UNIT_ECONOMICS.marketSaving,
      stock: '8.400 unit',
      stockStatus: 'Stok Melimpah (Siap Kirim)',
      stockBadge: 'bg-secondary-container text-on-secondary-container',
      weight: '1.2 kg / unit',
      myceliumTime: '21 Hari (5 hari lebih cepat)',
      projectedHarvest: '350 - 400 gr / baglog',
      description:
        'Baglog jamur tiram putih unggulan yang diperkaya 30% ampas espresso pilihan. Menghasilkan tudung putih bersih, batang tebal, dan kelembapan prima.',
      highlights: [
        'Formula nutrisi 30% ampas kopi + 50% serbuk sengon',
        'Sterilisasi autoclave manual 121°C selama 90 menit',
        'Inokulasi bibit F2 murni bersertifikat lab',
        'Garansi ganti baru 100% jika terjadi kontaminasi spora liar',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1WaRm1pxkQ6uugIXOv64V8AP9xyOxNVFms9vu80n2Nc0_H8eVA8PuoZjCs8ys0dmJgBvENTPFQtBR3xDrmpqLPAJUCttrLRONzKCKNSncGWXg50E0tAcyeuQKTHIiAq2GP6pHJxUB-lbPjGNGs8sHY1sR9qYzQ44eVGAENWr1zMkXbTlUQncaWEXB01KQPHeh_XiZG26MutTlmv63umEngz5Ys-cqDMTHPvu_f66CbGCtEkYKNXM6',
    },
    {
      id: 'tiram-abu',
      name: 'Baglog Jamur Tiram Cokelat / Abu (Pleurotus cystidiosus)',
      subtitle: 'Kepadatan Daging Tinggi & Daya Simpan Ekstra',
      tag: 'Grade Premium',
      tagColor: 'bg-primary-fixed text-primary font-bold',
      category: 'reguler',
      price: 3200,
      priceFormatted: 'Rp 3.200 / unit',
      marketPrice: 'Rp 4.000 / unit',
      saving: 'Hemat 20% vs pasar',
      stock: '2.100 unit',
      stockStatus: 'Tersedia di Hub Lembang',
      stockBadge: 'bg-primary-fixed/40 text-primary',
      weight: '1.2 kg / unit',
      myceliumTime: '23 Hari inkubasi',
      projectedHarvest: '380 - 420 gr / baglog',
      description:
        'Varian jamur bertekstur kenyal dengan tudung abu-cokelat tebal. Sangat disukai restoran dan pasar swalayan karena masa simpan pasca-panen lebih lama.',
      highlights: [
        'Formulasi ampas kopi sangrai sedang kaya mineral',
        'Daya tahan simpan segar hingga 5 hari di suhu ruang',
        'Miselium kuat tahan fluktuasi suhu kumbung',
        'Termasuk pendampingan teknisi mikologi Sirkula',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCV06zordpyvi_4cZzVD8QxKieIqnfmOpYn3iwgqtQSgdPn_L7yritYwoKO3zZjx0cfHH9h2RDxQxX79TbGlKz1vOfbWm_y6rkOcRdGVWUnRCTJJ63ilCDRkPNzfQGwCjNREPm_dnH13IJEcBf5avQOZXvH3F3RoF7tYpPHI5rpDiV7m9OGioIA8gVi7lXE_0K65EdxJICKT3vO5KttFh0UNbV6J6ShtELA0QWc7OvH9ISMlOT0p3FT',
    },
    {
      id: 'paket-starter',
      name: 'Paket Kumbung Starter (500 Unit Baglog Siap Buah)',
      subtitle: 'Solusi Lengkap Pembudidaya Jamur Pemula',
      tag: 'Paket Usaha Siap Panen',
      tagColor: 'bg-secondary-container text-on-secondary-container font-bold',
      category: 'paket',
      price: 1500000,
      priceFormatted: 'Rp 1.500.000 / paket',
      marketPrice: 'Rp 1.950.000 paket konvensional',
      saving: 'Hemat Rp 450.000',
      stock: '15 Paket',
      stockStatus: 'Siap Kirim Armada Kurir Hub',
      stockBadge: 'bg-secondary-container text-on-secondary-container',
      weight: '600 kg total',
      myceliumTime: 'Siap Inokulasi & Buka Cincin',
      projectedHarvest: 'Estimasi Panen 180 - 200 kg jamur',
      description:
        'Paket komprehensif berisi 500 baglog tiram putih, bebas ongkos kirim armada kurir ke area Bandung Raya & Lembang, serta kontrak jaminan serap (offtaker buyback) 100%.',
      highlights: [
        '500 unit Baglog Tiram Putih Formula 30% Kopi',
        'Termasuk pengantaran armada kurir ke lokasi kumbung',
        'Buku panduan SOP fisik pemeliharaan & misting',
        'Kontrak buyback hasil panen harga stabil Rp 16.000/kg',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1WaRm1pxkQ6uugIXOv64V8AP9xyOxNVFms9vu80n2Nc0_H8eVA8PuoZjCs8ys0dmJgBvENTPFQtBR3xDrmpqLPAJUCttrLRONzKCKNSncGWXg50E0tAcyeuQKTHIiAq2GP6pHJxUB-lbPjGNGs8sHY1sR9qYzQ44eVGAENWr1zMkXbTlUQncaWEXB01KQPHeh_XiZG26MutTlmv63umEngz5Ys-cqDMTHPvu_f66CbGCtEkYKNXM6',
    },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category === activeTab);

  const selectedProductData =
    products.find((p) => p.id === selectedSpecProduct) || products[0];

  return (
    <section id="katalog" className="w-full bg-surface py-20 scroll-mt-28">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span>🍄 KATALOG PRODUK BAGLOG</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-semibold tracking-tight">
              Pilihan Substrat Jamur Berkualitas dengan Harga Kontrak Terjangkau
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Dapatkan baglog jamur tiram ramah lingkungan berstandar mikologi tinggi. Harga grosir langsung dari Hub Lembang tanpa perantara tengkulak.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-full self-start md:self-end border border-primary/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full font-label-md text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Semua Produk ({products.length})
            </button>
            <button
              onClick={() => setActiveTab('reguler')}
              className={`px-4 py-2 rounded-full font-label-md text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'reguler'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Baglog Satuan
            </button>
            <button
              onClick={() => setActiveTab('paket')}
              className={`px-4 py-2 rounded-full font-label-md text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'paket'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Paket Kumbung
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-surface-container-lowest rounded-3xl p-6 sm:p-7 border border-primary/10 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Image and Badges */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-5 bg-surface-container">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className={`px-3 py-1 rounded-full text-xs shadow-sm ${prod.tagColor}`}>
                      {prod.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm ${prod.stockBadge}`}>
                      {prod.stock} Tersedia
                    </span>
                  </div>
                </div>

                {/* Title & Pricing */}
                <div className="space-y-1.5">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium">
                    {prod.subtitle}
                  </p>
                </div>

                <div className="my-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block font-semibold">
                      Harga Kemitraan Sirkula
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-primary">
                      {prod.priceFormatted}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-outline line-through block">
                      {prod.marketPrice}
                    </span>
                    <span className="text-xs font-bold text-secondary">
                      {prod.saving}
                    </span>
                  </div>
                </div>

                {/* Quick Specs 3 Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-surface-container-low/70">
                    <span className="text-[10px] text-outline block">Bobot</span>
                    <strong className="text-primary font-mono">{prod.weight}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-surface-container-low/70">
                    <span className="text-[10px] text-outline block">Inkubasi</span>
                    <strong className="text-secondary font-mono text-[11px]">21 Hari</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-surface-container-low/70">
                    <span className="text-[10px] text-outline block">Hasil Panen</span>
                    <strong className="text-primary font-mono text-[11px]">~380 gr</strong>
                  </div>
                </div>

                {/* Highlight Checkmarks */}
                <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-on-surface-variant">
                  {prod.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-4 border-t border-primary/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct && onSelectProduct(prod)}
                  className="w-full py-3.5 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  <span>Pesan Baglog Ini</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSpecProduct(prod.id)}
                  className="w-full py-2 rounded-full text-xs text-on-surface-variant hover:text-primary font-medium transition-colors"
                >
                  Lihat Rincian Spesifikasi &amp; SOP
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Product Specification Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-primary/10 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-label-sm text-xs font-bold text-secondary uppercase tracking-wider">
                STANDAR MUTU LABORATORIUM SIRKULA
              </span>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                Tabel Spesifikasi Teknis Substrat Baglog
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Produk terpilih: <strong className="text-primary">{selectedProductData.name}</strong>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-primary text-xs font-bold border border-primary/10">
                Hub Lembang • Ready Stock
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-primary/15 text-outline uppercase font-semibold text-[11px]">
                <tr>
                  <th className="py-3 px-4">Parameter Mutu</th>
                  <th className="py-3 px-4">Nilai Standar Sirkula</th>
                  <th className="py-3 px-4">Metode Pengujian</th>
                  <th className="py-3 px-4">Manfaat bagi Petani</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-on-surface">
                <tr>
                  <td className="py-3 px-4 font-semibold text-primary">Bobot Basah per Baglog</td>
                  <td className="py-3 px-4 font-mono font-bold">1.200 gram (± 25 gr)</td>
                  <td className="py-3 px-4 text-on-surface-variant">Penimbangan manual timbangan digital</td>
                  <td className="py-3 px-4 text-secondary font-medium">Nutrisi cukup untuk 3–4 siklus petik panen</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-primary">Kadar Air Substrat</td>
                  <td className="py-3 px-4 font-mono font-bold">60% – 65%</td>
                  <td className="py-3 px-4 text-on-surface-variant">Uji kepal fisik &amp; moisture analyzer</td>
                  <td className="py-3 px-4 text-secondary font-medium">Kelembapan ideal mencegah baglog kering dini</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-primary">Tingkat Keasaman (pH)</td>
                  <td className="py-3 px-4 font-mono font-bold">pH 6.2 – 6.5 (Netral)</td>
                  <td className="py-3 px-4 text-on-surface-variant">Buffer CaCO₃ kapur pertanian 4%</td>
                  <td className="py-3 px-4 text-secondary font-medium">Mencegah kontaminasi kapang hijau Trichoderma</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-primary">Proses Pasteurisasi</td>
                  <td className="py-3 px-4 font-mono font-bold">121°C • 90 Menit (1.2 bar)</td>
                  <td className="py-3 px-4 text-on-surface-variant">Autoclave manual terinspeksi</td>
                  <td className="py-3 px-4 text-secondary font-medium">Zero-kontaminasi spora liar di ruang kumbung</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-primary">Garansi Mutu</td>
                  <td className="py-3 px-4 font-mono font-bold text-secondary">Garansi Ganti 100%</td>
                  <td className="py-3 px-4 text-on-surface-variant">Klaim via foto WhatsApp dalam 7 hari</td>
                  <td className="py-3 px-4 text-secondary font-medium">Proteksi modal penuh untuk mitra pembudidaya</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
