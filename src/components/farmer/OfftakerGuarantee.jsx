import React, { useState } from 'react';

export default function OfftakerGuarantee() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderFeedback, setOrderFeedback] = useState(null);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderModalOpen(false);
    setOrderFeedback('Pesanan baglog baru berhasil dicatat & masuk jadwal distribusi Hub Lembang - Bandung!');
    setTimeout(() => setOrderFeedback(false), 4000);
  };

  return (
    <div className="flex flex-col gap-6">
      {orderFeedback && (
        <div className="p-3 bg-secondary-fixed/50 border border-secondary rounded-2xl text-secondary text-sm font-semibold flex items-center justify-between animate-fade-in">
          <span>{orderFeedback}</span>
          <button onClick={() => setOrderFeedback(null)}>✕</button>
        </div>
      )}

      {/* Sirkula Quality Badge & Offtaker Guarantee Card */}
      <div className="bg-primary text-on-primary rounded-3xl p-6 sm:p-7 shadow-[0_20px_40px_-8px_rgba(27,77,62,0.15)] flex flex-col gap-5 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary/20 blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-wider uppercase font-bold">
            OFFTAKER GUARANTEE
          </span>
          <span className="material-symbols-outlined text-secondary-container text-[24px]">
            verified_user
          </span>
        </div>

        <div>
          <h3 className="font-headline-md text-headline-md text-on-primary tracking-tight font-semibold">
            Sirkula Quality &amp; Buyback Guarantee
          </h3>
          <p className="font-body-sm text-body-sm text-on-primary/80 mt-1.5 leading-relaxed">
            Jaminan serap 100% panen jamur tiram organik berstandar Sirkula dengan harga kontrak stabil untuk mitra petani Lembang &amp; Bandung Raya.
          </p>
        </div>

        {/* Two Mini Metrics Inside */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-primary-container/80 p-3.5 rounded-2xl flex flex-col">
            <span className="font-label-sm text-label-sm uppercase text-on-primary-container tracking-wider font-semibold">
              Harga Dasar
            </span>
            <span className="font-title-md text-title-md font-bold text-on-primary mt-0.5 font-mono">
              Rp 18.500 <span className="font-normal text-[12px] opacity-75">/kg</span>
            </span>
          </div>
          <div className="bg-primary-container/80 p-3.5 rounded-2xl flex flex-col">
            <span className="font-label-sm text-label-sm uppercase text-on-primary-container tracking-wider font-semibold">
              Serapan Panen
            </span>
            <span className="font-title-md text-title-md font-bold text-secondary-container mt-0.5">
              100% Terjamin
            </span>
          </div>
        </div>

        {/* QR Code Info */}
        <div className="flex items-center gap-3 pt-2 text-on-primary/75 font-body-sm text-body-sm bg-primary-container/50 p-3 rounded-2xl border border-white/5">
          <span className="material-symbols-outlined text-[26px] text-secondary-container flex-shrink-0">
            qr_code_2
          </span>
          <span>
            Scan QR Barcode Batch untuk sertifikat keamanan pangan &amp; asal usul ampas kopi.
          </span>
        </div>
      </div>

      {/* Action Buttons Below Card */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setOrderModalOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md font-semibold transition-all duration-200 shadow-sm"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          <span>Pesan Tambahan Baglog (Rp 3.000/unit)</span>
        </button>
        <button
          onClick={() => alert('Mengunduh Kontrak Kemitraan Petani & SOP Mikologi Sirkula (PDF)...')}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md text-label-md font-semibold transition-colors shadow-sm border border-outline-variant/30"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">description</span>
          <span>Unduh Kontrak Kemitraan &amp; SOP (PDF)</span>
        </button>
      </div>

      {/* Order Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-md w-full shadow-2xl border border-primary/10">
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
              Form Pemesanan Baglog Jamur
            </h4>
            <p className="text-body-sm text-on-surface-variant mb-4">
              Harga kemitraan B2B: <strong>Rp 3.000 / unit</strong> (COGS efisien, terpasteurisasi autoclave).
            </p>
            <form onSubmit={handleOrderSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Jumlah Pesanan Baglog (Unit)
                </label>
                <input
                  type="number"
                  min="100"
                  step="50"
                  defaultValue="500"
                  className="w-full px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-low text-sm font-mono font-bold"
                />
              </div>
              <div className="p-3 bg-secondary-fixed/30 rounded-2xl text-xs space-y-1">
                <div className="flex justify-between font-semibold text-primary">
                  <span>Estimasi Biaya:</span>
                  <span>Rp 1.500.000 (500 unit @ Rp 3.000)</span>
                </div>
                <div className="text-secondary font-medium">
                  ✓ Termasuk pengiriman armada kurir Sirkula ke lokasi kumbung Anda
                </div>
              </div>
              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setOrderModalOpen(false)}
                  className="flex-1 py-2.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-secondary transition-colors"
                >
                  Kirim Pesanan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
