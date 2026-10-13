import React from 'react';

export default function FarmerFooter() {
  return (
    <footer className="w-full bg-surface-container-high mt-16 shadow-[0_-1px_6px_rgba(27,77,62,0.03)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">psychiatry</span>
            <span className="font-headline-sm text-headline-sm text-primary font-semibold">
              Sirkula Bio-Circular Platform
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
            Mengintegrasikan limbah ampas kopi perkotaan menjadi media tanam jamur bernilai tinggi di Lembang &amp; Bandung.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-on-surface-variant">
          <a
            className="inline-flex items-center gap-2 font-label-md text-label-md hover:text-primary transition-colors font-medium"
            href="https://wa.me/6281288007475"
          >
            <span className="material-symbols-outlined text-secondary text-[18px]">support_agent</span>
            Agronomist Hotline (WhatsApp)
          </a>
          <a
            className="inline-flex items-center gap-2 font-label-md text-label-md hover:text-primary transition-colors font-medium"
            href="mailto:support@sirkula.id"
          >
            <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
            support@sirkula.id
          </a>
        </div>
      </div>
      <div className="bg-surface-variant/50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2025 Sirkula Indonesia. Hak cipta dilindungi.</p>
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
            Sistem Sirkular Substrat Jamur Berkelanjutan
          </p>
        </div>
      </div>
    </footer>
  );
}
