import React from 'react';

export default function AdminFooter() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl py-space-xl">
      <div className="w-full px-gutter lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <span className="font-headline-sm text-headline-sm text-primary font-semibold">
            Sirkula Bio-Circular Platform
          </span>
          <span className="text-outline">|</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Closed-Loop Spent Coffee Grounds Substrate Architecture
          </span>
        </div>
        <div className="flex items-center gap-space-lg">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 PT Sirkula Ekosistem Indonesia • Hub Bandung - Lembang
          </span>
          <div className="flex items-center gap-space-md">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
              SOP Operasional
            </a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
              Hub Status
            </a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
              SOP Kontrol Mutu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
