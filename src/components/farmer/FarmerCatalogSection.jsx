import React, { useState } from 'react';
import { FARMER_CATALOG_PRODUCTS } from '../../data/mockData';

export default function FarmerCatalogSection({ onAddToCart, onOpenCart }) {
  const [products] = useState(FARMER_CATALOG_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(200);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setOrderQuantity(product.minOrder === 1 ? 1 : 200);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!selectedProduct) return;
    onAddToCart({
      product: selectedProduct,
      quantity: orderQuantity,
      totalPrice: selectedProduct.price * orderQuantity,
    });
    setSelectedProduct(null);
  };

  return (
    <section id="katalog-baglog" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🛒 SUPLAI SUBSTRAT RESMI</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Katalog &amp; Pemesanan Baglog Jamur
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Dapatkan baglog formula 30% ampas kopi berkualitas tinggi langsung dari Hub Lembang dengan harga B2B terjangkau.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          className="px-4 py-2.5 rounded-full bg-secondary text-primary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto shadow-xs hover:bg-secondary-fixed"
        >
          <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
          <span>Buka Keranjang Pesanan</span>
        </button>
      </div>

      {/* Offtaker & Buyback Trust Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-secondary-fixed/40 border border-secondary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary text-xs sm:text-sm">Jaminan Offtaker &amp; Buyback Panen Sirkula</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary text-primary font-bold text-[10px]">100% Terserap</span>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-0.5">
              Setiap pembelian baglog Sirkula disertai kepastian beli kembali jamur tiram segar dengan kontrak harga dasar tetap <strong>Rp 18.500 / kg</strong> bagi seluruh kelompok tani mitra.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 self-start sm:self-auto">
          <div className="px-3 py-1.5 rounded-xl bg-surface-container-lowest text-primary font-mono font-bold text-xs border border-secondary/20 shadow-xs">
            Kontrak: Rp 18.500 / kg
          </div>
        </div>
      </div>

      {/* Catalog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div>
              {/* Product Image & Stock Badge */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-surface-container">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-xs text-primary font-bold text-[10px] shadow-xs">
                    {prod.id}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono font-bold text-[10px] shadow-xs">
                    Stok: {prod.stock.toLocaleString('id-ID')} unit
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary leading-snug">
                  {prod.name}
                </h3>
                <p className="text-xs text-on-surface-variant line-clamp-2">
                  {prod.description}
                </p>
              </div>

              {/* Price Banner */}
              <div className="my-3.5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-outline uppercase font-semibold block">Harga Mitra B2B</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-primary font-mono">
                    {prod.priceFormatted}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-secondary">
                  Hemat 20% vs pasar
                </span>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-on-surface-variant py-1">
                <div className="p-2 rounded-lg bg-surface-container-lowest">
                  <span className="text-outline block text-[10px]">Bobot Substrat:</span>
                  <strong className="text-primary font-mono">{prod.weight}</strong>
                </div>
                <div className="p-2 rounded-lg bg-surface-container-lowest">
                  <span className="text-outline block text-[10px]">Masa Inkubasi:</span>
                  <strong className="text-secondary font-mono text-[10px]">{prod.myceliumSpeed}</strong>
                </div>
              </div>
            </div>

            {/* Order Action Button */}
            <div className="pt-4 mt-3 border-t border-primary/10">
              <button
                type="button"
                onClick={() => handleOrderClick(prod)}
                className="w-full py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-label-md text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                <span>Pesan Baglog Ini</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL PEMESANAN CEPAT ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase">Formulir Pemesanan Baglog</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmOrder} className="space-y-3.5 text-xs">
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                <span className="text-outline font-semibold">Harga Satuan B2B:</span>
                <span className="font-mono font-bold text-primary text-sm">
                  Rp {selectedProduct.price.toLocaleString('id-ID')} / unit
                </span>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">
                  Jumlah Pemesanan (Minimal {selectedProduct.minOrder} unit)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={selectedProduct.minOrder}
                    step={selectedProduct.minOrder === 1 ? 1 : 50}
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Math.max(selectedProduct.minOrder, Number(e.target.value)))}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none font-mono font-bold text-sm text-primary"
                  />
                  <span className="text-xs font-semibold text-outline">
                    {selectedProduct.minOrder === 1 ? 'Paket' : 'Baglog'}
                  </span>
                </div>
              </div>

              {/* Quick Quantity Presets */}
              {selectedProduct.minOrder > 1 && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] text-outline">Pilihan Cepat:</span>
                  {[100, 200, 500, 1000].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setOrderQuantity(qty)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border ${
                        orderQuantity === qty
                          ? 'bg-primary text-white border-primary'
                          : 'bg-surface-container-low text-primary border-outline-variant/30'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              )}

              {/* Price Calculation Box */}
              <div className="p-3.5 rounded-2xl bg-secondary-fixed/30 border border-secondary/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-primary uppercase font-bold block">Total Perkiraan Tagihan:</span>
                  <span className="text-xs text-on-surface-variant">Belum termasuk subsidi pengiriman</span>
                </div>
                <span className="font-headline-sm text-headline-sm font-bold text-primary font-mono">
                  Rp {(selectedProduct.price * orderQuantity).toLocaleString('id-ID')}
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>Masukkan ke Keranjang</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
