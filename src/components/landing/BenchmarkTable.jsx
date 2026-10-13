import React from 'react';

export default function BenchmarkTable() {
  const rows = [
    {
      indicator: 'Layanan Penjemputan Kurir Terjadwal',
      icon: 'local_shipping',
      conventional: 'Penjemputan sporadis, risiko ampas busuk berbau di tempat sampah kafe.',
      sirkula: 'SLA 48 Jam terjadwal via kurir logistik khusus & wadah kedap higienis.',
    },
    {
      indicator: 'Stabilitas & Kepastian Harga',
      icon: 'payments',
      conventional: 'Harga serbuk kayu fluktuatif mengikuti musim tebang dan kelangkaan kayu lokal.',
      sirkula: 'Kontrak harga stabil berjangka (Rp 3.000/unit) dan hemat 20% biaya operasional.',
    },
    {
      indicator: 'Nutrisi Substrat & Masa Tumbuh',
      icon: 'psychology_alt',
      conventional: 'Lignin tinggi lambat terurai, membutuhkan tambahan bekatul dan kalsium mahal.',
      sirkula: 'Kaya senyawa nitrogen organik, miselium jamur merambat 25% lebih cepat.',
    },
    {
      indicator: 'Validasi & Pelaporan ESG',
      icon: 'monitoring',
      conventional: 'Nol dokumentasi lingkungan hidup; limbah ampas terbuang anaerobik di TPA.',
      sirkula: 'Dashboard audit real-time dengan sertifikat reduksi emisi metana CO2e.',
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-20 scroll-mt-28" id="keunggulan">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <span className="font-label-sm text-label-sm px-4 py-1 rounded-full bg-surface-container-high text-primary uppercase tracking-wider font-bold">
            EFISIENSI &amp; TRANSPARANSI
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-semibold">
            Mengapa Beralih ke Ekosistem Sirkula?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Bandingkan rantai pasok linier lama dengan sistem ekonomi sirkular modern yang transparan dan berbasis data.
          </p>
        </div>

        {/* Comparison Card Wrapper */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm border border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 md:p-5 font-label-md text-label-md text-on-surface uppercase rounded-l-2xl w-1/3">
                    Indikator Operasional
                  </th>
                  <th className="p-4 md:p-5 font-label-md text-label-md text-outline uppercase w-1/3">
                    Metode Konvensional (Serbuk Kayu &amp; Tengkulak)
                  </th>
                  <th className="p-4 md:p-5 font-label-md text-label-md text-primary uppercase bg-secondary-fixed/30 rounded-r-2xl w-1/3 font-bold">
                    Platform Sirkula
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="p-4 md:p-5 font-title-md text-title-md text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          {row.icon}
                        </span>
                        <span>{row.indicator}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 font-body-md text-body-md text-on-surface-variant">
                      {row.conventional}
                    </td>
                    <td className="p-4 md:p-5 font-body-md text-body-md text-primary bg-secondary-fixed/10 font-semibold">
                      <span className="inline-flex items-center gap-1.5 text-secondary">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>{row.sirkula}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
