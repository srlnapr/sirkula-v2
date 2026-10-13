import React from 'react';
import { BAGLOG_COMPOSITION } from '../../data/mockData';

export default function FarmerBaglogSpecs() {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-primary/5 flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">science</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              SPESIFIKASI SUBSTRAT BAGLOG
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
            Komposisi Bahan Baglog Sirkula (1.2 kg)
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Ditakar dan disterilisasi manual oleh teknisi mikologi untuk jaminan panen melimpah.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs font-semibold">
          <span>✓ Bobot Bersih 1.2 kg</span>
          <span>•</span>
          <span>Kadar Air 62%</span>
        </div>
      </div>

      {/* Visual Composition Ratio Bar */}
      <div className="flex flex-col gap-2 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
        <div className="flex items-center justify-between text-xs font-semibold text-primary">
          <span>Rasio Bahan Substrat (100% Organik):</span>
          <span className="text-secondary font-bold font-mono">Miselium Matang 21 Hari</span>
        </div>

        {/* Progress Bar */}
        <div className="h-5 w-full rounded-xl overflow-hidden flex bg-surface-container">
          <div style={{ width: '30%' }} className="bg-amber-900 text-amber-100 flex items-center justify-center text-[10px] font-bold">
            30% Kopi
          </div>
          <div style={{ width: '50%' }} className="bg-[#7A5B3E] text-stone-100 flex items-center justify-center text-[10px] font-bold">
            50% Serbuk Kayu
          </div>
          <div style={{ width: '15%' }} className="bg-[#C49A45] text-amber-950 flex items-center justify-center text-[10px] font-bold">
            15% Dedak
          </div>
          <div style={{ width: '5%' }} className="bg-[#546E7A] text-slate-100 flex items-center justify-center text-[9px] font-bold">
            5%
          </div>
        </div>

        {/* Ingredient Breakdown Mini Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 text-[11px]">
          {BAGLOG_COMPOSITION.ingredients.map((ing) => (
            <div key={ing.id} className="p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
              <div className="flex items-center gap-1.5 font-bold text-primary">
                <span className={`w-2.5 h-2.5 rounded-full ${ing.barColor}`}></span>
                <span>{ing.percentageStr}</span>
              </div>
              <span className="text-[10px] text-on-surface-variant leading-tight mt-0.5 truncate font-medium">
                {ing.name.split(' (')[0]}
              </span>
              <span className="text-[9px] text-secondary font-mono mt-0.5">
                ~{((1.2 * ing.percentage) / 100 * 1000).toFixed(0)} gr
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Summary for Mushroom Farmers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-primary font-bold">
            <span className="material-symbols-outlined text-secondary text-[16px]">speed</span>
            <span>Miselium 5 Hari Lebih Cepat</span>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">
            Kafein dan nitrogen alami ampas kopi memacu percabangan hifa jamur lebih rapat dibanding media serbuk murni.
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-primary font-bold">
            <span className="material-symbols-outlined text-secondary text-[16px]">shield_check</span>
            <span>Sterilisasi 121°C Terkontrol</span>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">
            Pengukusan autoclave manual 90 menit menjamin bibit F2 inokulasi bebas spora kapang kontaminan hijau.
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-primary font-bold">
            <span className="material-symbols-outlined text-secondary text-[16px]">psychology_alt</span>
            <span>pH Seimbang 6.2 - 6.5</span>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">
            Pemberian kapur pertanian (CaCO₃ 4%) menetralkan asam kopi, mengoptimalkan penyerapan nutrisi hingga panen flush ke-3.
          </p>
        </div>
      </div>
    </div>
  );
}
