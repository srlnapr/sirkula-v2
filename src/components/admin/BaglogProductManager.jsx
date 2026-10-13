import React, { useState } from 'react';
import { ADMIN_BAGLOG_CATALOG } from '../../data/mockData';

export default function BaglogProductManager() {
  const [products, setProducts] = useState(ADMIN_BAGLOG_CATALOG);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 3000,
    cogs: 1800,
    stock: 1000,
    minOrder: 100,
    specification: '',
    status: 'ready',
  });

  const handleStockAdjust = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updatedStock = Math.max(0, p.stock + delta);
          return { ...p, stock: updatedStock };
        }
        return p;
      })
    );
  };

  const handleStatusToggle = (id) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const nextStatus = p.status === 'ready' ? 'preorder' : p.status === 'preorder' ? 'out_of_stock' : 'ready';
          const nextLabel = nextStatus === 'ready' ? 'Siap Kirim' : nextStatus === 'preorder' ? 'Pre-Order' : 'Stok Habis';
          const nextBadge =
            nextStatus === 'ready'
              ? 'bg-secondary-container text-on-secondary-container'
              : nextStatus === 'preorder'
              ? 'bg-amber-100 text-amber-900'
              : 'bg-surface-container text-outline';
          return { ...p, status: nextStatus, statusLabel: nextLabel, badgeColor: nextBadge };
        }
        return p;
      })
    );
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: `PRD-${String(products.length + 1).padStart(2, '0')}`,
      name: newProduct.name,
      price: Number(newProduct.price),
      priceFormatted: `Rp ${Number(newProduct.price).toLocaleString('id-ID')}`,
      cogs: Number(newProduct.cogs),
      marginPercentage: '40%',
      stock: Number(newProduct.stock),
      minOrder: Number(newProduct.minOrder),
      specification: newProduct.specification,
      status: newProduct.status,
      statusLabel: newProduct.status === 'ready' ? 'Siap Kirim' : 'Pre-Order',
      badgeColor: newProduct.status === 'ready' ? 'bg-secondary-container text-on-secondary-container' : 'bg-amber-100 text-amber-900',
    };
    setProducts([...products, created]);
    setIsAddModalOpen(false);
    setNewProduct({ name: '', price: 3000, cogs: 1800, stock: 1000, minOrder: 100, specification: '', status: 'ready' });
  };

  return (
    <section id="manajemen-produk" className="scroll-mt-28 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-xs flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-1">
            <span>🍄 MODUL KATALOG &amp; INVENTORI PRODUK</span>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Manajemen Produk Baglog
          </h2>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Fitur 4: Kelola varian baglog substrat jamur, harga jual B2B, stok siap buah di Hub Lembang, dan spesifikasi formula.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">add_box</span>
          <span>Tambah Varian Produk</span>
        </button>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="p-5 rounded-2xl bg-surface-container-low border border-primary/10 flex flex-col justify-between hover:shadow-xs transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-primary/10">
                <div>
                  <span className="text-[10px] font-mono text-outline">{prod.id}</span>
                  <h4 className="font-headline-sm text-sm sm:text-base font-bold text-primary">
                    {prod.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => handleStatusToggle(prod.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-colors ${prod.badgeColor}`}
                  title="Klik untuk ubah status ketersediaan"
                >
                  {prod.statusLabel}
                </button>
              </div>

              {/* Price & Economics Row */}
              <div className="grid grid-cols-3 gap-2 py-3 border-b border-primary/5 text-center">
                <div className="p-2 bg-surface-container-lowest rounded-xl">
                  <span className="text-[10px] text-outline block">Harga Jual B2B</span>
                  <span className="font-mono font-bold text-primary text-xs sm:text-sm">
                    Rp {prod.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="p-2 bg-surface-container-lowest rounded-xl">
                  <span className="text-[10px] text-outline block">HPP (COGS)</span>
                  <span className="font-mono font-bold text-outline text-xs sm:text-sm">
                    Rp {prod.cogs.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="p-2 bg-secondary-fixed/30 rounded-xl">
                  <span className="text-[10px] text-primary block">Laba Kotor</span>
                  <span className="font-mono font-bold text-secondary text-xs sm:text-sm">
                    {prod.marginPercentage}
                  </span>
                </div>
              </div>

              {/* Specification & Stock */}
              <div className="py-2.5 space-y-1.5 text-xs text-on-surface-variant">
                <div className="flex items-center justify-between">
                  <span className="text-outline">Stok Gudang Lembang:</span>
                  <div className="flex items-center gap-1.5 font-mono font-bold text-primary">
                    <span>{prod.stock.toLocaleString('id-ID')} unit</span>
                    <button
                      type="button"
                      onClick={() => handleStockAdjust(prod.id, -100)}
                      className="w-5 h-5 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-xs"
                      title="Kurangi 100 unit"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStockAdjust(prod.id, +100)}
                      className="w-5 h-5 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-xs text-primary"
                      title="Tambah 100 unit"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-[11px] text-on-surface leading-snug pt-1">
                  <strong className="text-outline block">Spesifikasi Formula:</strong>
                  {prod.specification}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-primary/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-outline">
                Min. Order: <strong>{prod.minOrder} unit</strong>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingProduct(prod)}
                  className="px-3 py-1.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-primary font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">edit</span>
                  <span>Edit Data</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL EDIT PRODUK ================= */}
      {editingProduct && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Edit Produk: {editingProduct.id}
              </h3>
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">Nama Produk</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Harga Jual (Rp)</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Stok Gudang (Unit)</label>
                  <input
                    type="number"
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Spesifikasi &amp; SOP</label>
                <textarea
                  rows={2}
                  value={editingProduct.specification}
                  onChange={(e) => setEditingProduct({ ...editingProduct, specification: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL TAMBAH PRODUK BARU ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-primary/10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Tambah Varian Baglog Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-on-surface mb-1">Nama Varian Produk</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Baglog Jamur Kuping Formula 30% Kopi"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Harga B2B (Rp)</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-on-surface mb-1">Estimasi Stok (Unit)</label>
                  <input
                    type="number"
                    required
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-on-surface mb-1">Spesifikasi Teknis</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Bobot basah, rasio ampas kopi, suhu autoclave..."
                  value={newProduct.specification}
                  onChange={(e) => setNewProduct({ ...newProduct, specification: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 outline-none text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-semibold text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs"
                >
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
