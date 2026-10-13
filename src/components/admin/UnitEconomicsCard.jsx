import React from 'react';
import { UNIT_ECONOMICS } from '../../data/mockData';

export default function UnitEconomicsCard() {
  return (
    <div className="bg-primary-container text-on-primary rounded-3xl p-space-xl shadow-[0_20px_40px_-8px_rgba(27,77,62,0.18)] flex flex-col justify-between relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary/20 pointer-events-none blur-3xl"></div>

      <div>
        <div className="flex items-center justify-between gap-space-xs mb-space-md">
          <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider font-mono">
            Model Finansial Bio-Sirkular
          </span>
          <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
            {UNIT_ECONOMICS.marginStatus}
          </span>
        </div>

        <h2 className="font-headline-md text-headline-md font-semibold tracking-tight text-surface-bright">
          Unit Economics &amp; Margin Target
        </h2>
        <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
          Struktur biaya transparan dari pemanfaatan ampas kopi terbarukan Sirkula Hub Bandung.
        </p>

        {/* Metrics List */}
        <div className="flex flex-col gap-space-sm mt-space-lg">
          {/* Item 1 */}
          <div className="flex items-center justify-between py-2.5 bg-primary/40 px-space-md rounded-xl">
            <div>
              <span className="font-body-sm text-body-sm text-on-primary-container block">
                Biaya Bahan Baku Ampas Kopi
              </span>
              <span className="text-label-sm text-secondary-fixed/90">
                (circular supply advantage)
              </span>
            </div>
            <span className="font-label-md text-label-md font-mono text-secondary-fixed font-bold">
              {UNIT_ECONOMICS.rawMaterialCost}
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between py-2.5 bg-primary/40 px-space-md rounded-xl">
            <span className="font-body-sm text-body-sm text-on-primary-container">
              COGS Produksi
            </span>
            <span className="font-label-md text-label-md font-mono text-surface-bright font-semibold">
              {UNIT_ECONOMICS.cogsFormatted} ({UNIT_ECONOMICS.cogsPercentage})
            </span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between py-2.5 bg-primary/40 px-space-md rounded-xl">
            <span className="font-body-sm text-body-sm text-on-primary-container">
              Harga Jual B2B
            </span>
            <div className="text-right">
              <span className="font-label-md text-label-md font-mono text-surface-bright font-bold">
                {UNIT_ECONOMICS.sellingPriceFormatted}
              </span>
              <span className="block text-label-sm text-secondary-fixed">
                ({UNIT_ECONOMICS.marketSaving})
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-between py-2.5 bg-secondary/30 px-space-md rounded-xl border border-secondary-fixed/20">
            <div>
              <span className="font-body-sm text-body-sm text-surface-bright font-semibold block">
                Margin Kotor
              </span>
              <span className="text-label-sm text-secondary-fixed font-mono">
                ({UNIT_ECONOMICS.marginStatus})
              </span>
            </div>
            <span className="font-title-md text-title-md font-bold text-secondary-fixed font-mono">
              {UNIT_ECONOMICS.grossMarginFormatted}
            </span>
          </div>
        </div>

        {/* Visual progress indicator bar */}
        <div className="mt-space-lg">
          <div className="flex justify-between text-label-sm text-on-primary-container mb-1.5 font-mono">
            <span>60% COGS Operasional</span>
            <span className="text-secondary-fixed font-semibold">40% Sirkula Gross Margin</span>
          </div>
          <div className="w-full h-3 rounded-full bg-primary overflow-hidden flex">
            <div className="h-full bg-surface-container-high/60 w-[60%]"></div>
            <div className="h-full bg-secondary-fixed w-[40%]"></div>
          </div>
        </div>
      </div>

      <div className="mt-space-lg pt-space-md flex items-center gap-space-xs text-on-primary-container font-label-sm text-label-sm">
        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">handshake</span>
        <span>Kemitraan Berkelanjutan: Saling Menguntungkan bagi Kedai &amp; Petani</span>
      </div>
    </div>
  );
}
