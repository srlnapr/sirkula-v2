import React from 'react';

export default function CoffeeShopFooter() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[14px]">eco</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Sirkula Bio-Circular Platform. Inisiatif Daur Ulang Ampas Kopi.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="https://wa.me/6281288007475"
          >
            Pusat Bantuan WhatsApp: +62 812-8800-7475
          </a>
          <span className="text-outline-variant">•</span>
          <a
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            href="mailto:mitra@sirkula.id"
          >
            mitra@sirkula.id
          </a>
        </div>
      </div>
    </footer>
  );
}
