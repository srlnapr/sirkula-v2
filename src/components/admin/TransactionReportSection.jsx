import React, { useState } from 'react';
import { ADMIN_TRANSACTIONS_DATA } from '../../data/mockData';

export default function TransactionReportSection() {
  const [period, setPeriod] = useState('current-month');
  const [transactions, setTransactions] = useState(ADMIN_TRANSACTIONS_DATA.recentTransactions);
  const summary = ADMIN_TRANSACTIONS_DATA.monthlySummary;

  const handleExport = (format) => {
    alert(`Mengunduh Laporan Rekap Transaksi Sirkula Hub (${period}) format ${format}...`);
  };

  return (
    <section id="laporan-transaksi" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>📊 KEUANGAN &amp; AKUNTANSI SIRKULA</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Laporan Transaksi &amp; Rekapitulasi Penjualan
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Fitur 9: Rekap pesanan baglog, arus kas pendapatan, analisis marjin laba 40%, dan riwayat pembukuan transaksi.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-xs font-semibold text-primary outline-none"
          >
            <option value="current-month">Bulan Berjalan (Oktober 2024)</option>
            <option value="last-month">Bulan Lalu (September 2024)</option>
            <option value="ytd">Akumulasi YTD 2024</option>
          </select>

          <button
            type="button"
            onClick={() => handleExport('CSV')}
            className="px-3 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
            title="Download CSV"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Ekspor</span>
          </button>
        </div>
      </div>

      {/* Financial Summary Bento */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10">
          <span className="text-[10px] text-outline uppercase tracking-wider font-semibold block">Total Omzet Penjualan</span>
          <div className="font-headline-sm text-headline-sm font-bold text-primary font-mono mt-0.5">
            {summary.totalRevenue}
          </div>
          <span className="text-[11px] text-on-surface-variant">{summary.totalBaglogsSold} baglog terserap</span>
        </div>

        <div className="p-4 rounded-2xl bg-surface-container-low border border-primary/10">
          <span className="text-[10px] text-outline uppercase tracking-wider font-semibold block">HPP Produksi (COGS)</span>
          <div className="font-headline-sm text-headline-sm font-bold text-outline font-mono mt-0.5">
            {summary.cogsTotal}
          </div>
          <span className="text-[11px] text-on-surface-variant">Rp 1.800 per baglog (60%)</span>
        </div>

        <div className="p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/30">
          <span className="text-[10px] text-primary uppercase tracking-wider font-semibold block">Laba Kotor (Gross Margin)</span>
          <div className="font-headline-sm text-headline-sm font-bold text-secondary font-mono mt-0.5">
            {summary.grossProfit}
          </div>
          <span className="text-[11px] font-bold text-primary">{summary.marginPercentage}</span>
        </div>

        <div className="p-4 rounded-2xl bg-primary-fixed/40 border border-primary/20">
          <span className="text-[10px] text-primary uppercase tracking-wider font-semibold block">Laba Bersih Hub Lembang</span>
          <div className="font-headline-sm text-headline-sm font-bold text-primary font-mono mt-0.5">
            {summary.netHubProfit}
          </div>
          <span className="text-[11px] text-on-surface-variant">Setelah biaya kurir {summary.logisticsCost}</span>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-label-md text-label-md font-bold text-primary">
            Riwayat Buku Kas &amp; Transaksi Terbaru
          </h4>
          <span className="text-xs text-on-surface-variant">
            Pembaruan otomatis tiap penutupan shift kurir &amp; kasir
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-primary/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-container-low text-outline uppercase font-semibold text-[11px] border-b border-primary/10">
              <tr>
                <th className="py-3 px-4">Kode Transaksi</th>
                <th className="py-3 px-4">Tanggal</th>
                <th className="py-3 px-4">Pihak Mitra / Vendor</th>
                <th className="py-3 px-4">Kategori Transaksi</th>
                <th className="py-3 px-4 text-right">Nominal Arus Kas</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 text-on-surface">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-primary">{trx.id}</td>
                  <td className="py-3 px-4 text-outline">{trx.date}</td>
                  <td className="py-3 px-4 font-semibold text-on-surface">{trx.party}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      {trx.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold">
                    <span className={trx.amount.startsWith('+') ? 'text-secondary' : 'text-error'}>
                      {trx.amount}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span>{trx.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
