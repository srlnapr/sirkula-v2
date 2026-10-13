import React, { useState } from 'react';
import { FARMER_PROFILE_DATA } from '../../data/mockData';

export default function FarmerCartCheckoutModal({ isOpen, onClose, cartItems, onCheckoutSuccess, onRemoveItem }) {
  const [deliveryAddress, setDeliveryAddress] = useState(FARMER_PROFILE_DATA.kumbungAddress);
  const [scheduledDate, setScheduledDate] = useState('Besok Pagi (25 Okt 2024, 09:00 - 12:00 WIB)');
  const [paymentMethod, setPaymentMethod] = useState('bca_va');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder = {
        id: `PO-BGL-${Math.floor(8822 + Math.random() * 50)}`,
        date: 'Hari Ini, 24 Okt 2024',
        product: cartItems.map((c) => `${c.product.name} (${c.quantity} unit)`).join(', '),
        quantity: cartItems.reduce((acc, c) => acc + c.quantity, 0),
        totalPrice: `Rp ${totalAmount.toLocaleString('id-ID')}`,
        paymentStatus: 'paid',
        paymentLabel: 'Lunas (Dikonfirmasi)',
        status: 'shipping',
        statusLabel: 'Menunggu Pengantaran Hub Lembang',
        courierName: 'Pak Budi',
        fleet: 'Pickup Box #02',
        courierPhone: '0812-7766-5544',
        eta: 'Besok Pagi, 10:00 WIB',
        trackingSteps: [
          { title: 'Pesanan Dikonfirmasi Petani', time: 'Baru Saja', completed: true },
          { title: 'Penyiapan & QC Fisik Baglog di Hub', time: 'Sedang Berjalan', completed: true, isCurrent: true },
          { title: 'Diangkut Armada Pickup Box Kurir', time: 'Menunggu', completed: false },
          { title: 'Tiba di Kumbung Petani Lembang', time: 'Besok Pagi', completed: false },
        ],
      };
      setIsSubmitting(false);
      onCheckoutSuccess(newOrder);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-primary/10 space-y-4 max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-primary/10">
          <div>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
              CHECKOUT PEMBELIAN SUBSTRAT
            </span>
            <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
              Keranjang &amp; Konfirmasi Pesanan
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-8 text-center space-y-2">
            <span className="material-symbols-outlined text-[36px] text-outline">shopping_cart</span>
            <p className="text-xs text-on-surface-variant font-medium">
              Keranjang belanja Anda masih kosong. Silakan pilih varian baglog di katalog.
            </p>
          </div>
        ) : (
          <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
            {/* List of Cart Items */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-outline uppercase tracking-wider block">
                Item Baglog Terpilih ({cartItems.length})
              </span>
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-surface-container-low border border-primary/10 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <strong className="text-primary font-bold text-xs block truncate">
                      {item.product.name}
                    </strong>
                    <span className="text-[11px] text-on-surface-variant">
                      {item.quantity} unit x Rp {item.product.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono font-bold text-primary text-xs sm:text-sm">
                      Rp {item.totalPrice.toLocaleString('id-ID')}
                    </span>
                    {onRemoveItem && (
                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        className="w-6 h-6 rounded-full hover:bg-error/10 text-outline hover:text-error flex items-center justify-center"
                        title="Hapus item"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block font-semibold text-on-surface mb-1">
                Alamat Kumbung Pengiriman (Sentra Bandung &amp; Lembang)
              </label>
              <textarea
                rows={2}
                required
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs resize-none"
              />
            </div>

            {/* Schedule Slot */}
            <div>
              <label className="block font-semibold text-on-surface mb-1">
                Jadwal Pengantaran Armada Kurir Hub
              </label>
              <select
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-semibold"
              >
                <option>Besok Pagi (25 Okt 2024, 09:00 - 12:00 WIB)</option>
                <option>Besok Siang (25 Okt 2024, 13:00 - 16:00 WIB)</option>
                <option>Lusa Pagi (26 Okt 2024, 09:00 - 12:00 WIB)</option>
              </select>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block font-semibold text-on-surface mb-1">Metode Pembayaran</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bca_va')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-[11px] ${
                    paymentMethod === 'bca_va'
                      ? 'bg-primary text-white border-primary shadow-xs'
                      : 'bg-surface-container-low border-outline-variant/30 text-on-surface'
                  }`}
                >
                  BCA VA
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mandiri_va')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-[11px] ${
                    paymentMethod === 'mandiri_va'
                      ? 'bg-primary text-white border-primary shadow-xs'
                      : 'bg-surface-container-low border-outline-variant/30 text-on-surface'
                  }`}
                >
                  Mandiri VA
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qris')}
                  className={`p-2.5 rounded-xl border text-center font-bold text-[11px] ${
                    paymentMethod === 'qris'
                      ? 'bg-primary text-white border-primary shadow-xs'
                      : 'bg-surface-container-low border-outline-variant/30 text-on-surface'
                  }`}
                >
                  QRIS Instan
                </button>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-secondary-fixed/30 border border-secondary/20 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>Subtotal Substrat:</span>
                <span className="font-mono">Rp {totalAmount.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>Ongkos Kirim Armada Kurir:</span>
                <span className="font-semibold text-secondary">Gratis (Subsidi Hub Lembang)</span>
              </div>
              <div className="pt-2 border-t border-primary/10 flex items-center justify-between">
                <strong className="text-primary text-sm font-bold">Total Pembayaran:</strong>
                <strong className="text-primary text-base font-bold font-mono">
                  Rp {totalAmount.toLocaleString('id-ID')}
                </strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>{isSubmitting ? 'Memproses...' : 'Konfirmasi & Buat Pesanan'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
