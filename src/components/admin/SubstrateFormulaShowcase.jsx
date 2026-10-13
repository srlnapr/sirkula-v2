import React, { useState } from 'react';
import { BAGLOG_COMPOSITION } from '../../data/mockData';

export default function SubstrateFormulaShowcase() {
  const [selectedIngredient, setSelectedIngredient] = useState(BAGLOG_COMPOSITION.ingredients[0]);
  const [calculatorUnits, setCalculatorUnits] = useState(500);

  // Calculate needed materials based on baglog units
  const totalKg = (calculatorUnits * 1.2);
  const coffeeKg = ((totalKg * 0.30)).toFixed(1);
  const sawdustKg = ((totalKg * 0.50)).toFixed(1);
  const branKg = ((totalKg * 0.15)).toFixed(1);
  const calciumKg = ((totalKg * 0.04)).toFixed(1);
  const gypsumKg = ((totalKg * 0.01)).toFixed(1);

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-primary/5 flex flex-col gap-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              FORMULA SUBSTRAT BIO-SIRKULAR
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
            Komposisi &amp; Rasio Bahan Baglog Sirkula
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
            Substrat media tanam jamur tiram ramah lingkungan berbobot 1.2 kg per unit. Ditakar dan diaduk secara manual oleh tim teknisi mikologi Hub Lembang untuk menggantikan 30% serbuk gergaji kayu dengan ampas kopi bernutrisi tinggi.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
          <span className="material-symbols-outlined text-[18px]">engineering</span>
          <span>Dikelola &amp; Ditakar Manual oleh Tim Teknisi</span>
        </div>
      </div>

      {/* Visual Composition Ratio Bar */}
      <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-bold text-primary">
          <span>Rasio Bahan Baku 100% Baglog (1.2 kg):</span>
          <span className="text-on-surface-variant font-normal">Kadar Air Target: 60% - 65%</span>
        </div>

        {/* Segmented Bar */}
        <div className="h-6 w-full rounded-xl overflow-hidden flex shadow-inner bg-surface-container">
          <div
            style={{ width: '30%' }}
            className="bg-amber-900 text-amber-100 flex items-center justify-center text-[11px] font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
            title="30% Ampas Kopi (360 gram)"
            onClick={() => setSelectedIngredient(BAGLOG_COMPOSITION.ingredients[0])}
          >
            30% Kopi
          </div>
          <div
            style={{ width: '50%' }}
            className="bg-[#7A5B3E] text-stone-100 flex items-center justify-center text-[11px] font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
            title="50% Serbuk Kayu Sengon (600 gram)"
            onClick={() => setSelectedIngredient(BAGLOG_COMPOSITION.ingredients[1])}
          >
            50% Serbuk Kayu
          </div>
          <div
            style={{ width: '15%' }}
            className="bg-[#C49A45] text-amber-950 flex items-center justify-center text-[11px] font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
            title="15% Dedak Padi (180 gram)"
            onClick={() => setSelectedIngredient(BAGLOG_COMPOSITION.ingredients[2])}
          >
            15% Dedak
          </div>
          <div
            style={{ width: '4%' }}
            className="bg-[#546E7A] text-slate-100 flex items-center justify-center text-[9px] font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
            title="4% Kapur CaCO3 (48 gram)"
            onClick={() => setSelectedIngredient(BAGLOG_COMPOSITION.ingredients[3])}
          >
            4%
          </div>
          <div
            style={{ width: '1%' }}
            className="bg-[#3E2723] text-stone-200 flex items-center justify-center text-[8px] font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer"
            title="1% Gipsum CaSO4 (12 gram)"
            onClick={() => setSelectedIngredient(BAGLOG_COMPOSITION.ingredients[4])}
          >
            1
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-[11px]">
          {BAGLOG_COMPOSITION.ingredients.map((ing) => (
            <button
              key={ing.id}
              onClick={() => setSelectedIngredient(ing)}
              className={`inline-flex items-center gap-1.5 transition-all text-left ${
                selectedIngredient.id === ing.id
                  ? 'font-bold text-primary scale-105'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${ing.barColor} shrink-0`}></span>
              <span>{ing.name.split(' (')[0]} ({ing.percentageStr})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Ingredient Highlight Card */}
      <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className={`w-12 h-12 rounded-2xl ${selectedIngredient.barColor} text-white flex items-center justify-center shrink-0 shadow-sm`}>
            <span className="material-symbols-outlined text-[24px]">
              {selectedIngredient.icon}
            </span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-title-md text-title-md font-bold text-primary">
                {selectedIngredient.name}
              </h4>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${selectedIngredient.badgeBg}`}>
                Porsi: {selectedIngredient.percentageStr} (~{((1.2 * selectedIngredient.percentage) / 100 * 1000).toFixed(0)} gr / unit)
              </span>
            </div>
            <p className="text-xs font-semibold text-secondary mt-0.5">
              {selectedIngredient.role}
            </p>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              {selectedIngredient.description}
            </p>
          </div>
        </div>
      </div>

      {/* 5 Ingredients Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {BAGLOG_COMPOSITION.ingredients.map((item) => {
          const isSelected = selectedIngredient.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedIngredient(item)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-surface-container-lowest border-primary ring-2 ring-primary/20 shadow-sm'
                  : 'bg-surface-container-low hover:bg-surface-container border-outline-variant/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-2">
                  <span className={`w-8 h-8 rounded-xl ${item.barColor} text-white flex items-center justify-center text-sm shadow-2xs`}>
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">
                    {item.percentageStr}
                  </span>
                </div>
                <h5 className="font-label-md text-[13px] font-bold text-primary leading-tight">
                  {item.name.split(' (')[0]}
                </h5>
                <p className="text-[11px] text-secondary font-medium mt-1 leading-snug">
                  {item.role.split(' (')[0]}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant">
                <span>Per baglog:</span>
                <strong className="text-primary font-mono">
                  {((1.2 * item.percentage) / 100 * 1000).toFixed(0)} gram
                </strong>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual SOP & Quality Control Parameters Checked by Workers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch pt-1">
        {/* Left: 4 Parameter Fisik Kontrol Manual (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-primary/10">
              <span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                Parameter Mutu Fisik Baglog (QC Manual Lapangan)
              </span>
              <span className="text-[11px] text-outline font-medium">Standar Lab Lembang</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase font-medium">Bobot Basah</span>
                <strong className="text-sm font-bold text-primary font-mono mt-0.5">1.2 kg / unit</strong>
                <span className="text-[10px] text-secondary font-medium">Timbang manual</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase font-medium">Kadar Air</span>
                <strong className="text-sm font-bold text-primary font-mono mt-0.5">60% - 65%</strong>
                <span className="text-[10px] text-secondary font-medium">Uji kepal tangan</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase font-medium">Keasaman (pH)</span>
                <strong className="text-sm font-bold text-primary font-mono mt-0.5">6.2 - 6.5</strong>
                <span className="text-[10px] text-secondary font-medium">Netral aman</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase font-medium">Sterilisasi</span>
                <strong className="text-sm font-bold text-primary font-mono mt-0.5">121°C • 90 mnt</strong>
                <span className="text-[10px] text-secondary font-medium">Operator autoclave</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between text-xs text-on-surface-variant">
            <span>Hasil panen rata-rata petani mitra: <strong>380 gram / baglog</strong> (3 flush panen).</span>
            <span className="text-secondary font-semibold">Miselium matang 21 hari</span>
          </div>
        </div>

        {/* Right: Kalkulator Takaran Bahan Manual Sederhana (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-primary text-on-primary flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-2">
              <span className="font-label-md text-label-md font-bold text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">calculate</span>
                Kalkulator Takaran Produksi Manual
              </span>
              <span className="text-[11px] text-primary-fixed-dim font-medium">Batch Produksi</span>
            </div>
            <p className="text-xs text-primary-fixed-dim leading-snug">
              Hitung kebutuhan timbangan bahan baku manual untuk pesanan kumbung petani:
            </p>

            <div className="flex items-center gap-2 my-3">
              <label className="text-xs font-semibold text-white whitespace-nowrap">Target Baglog:</label>
              <input
                type="number"
                min="50"
                max="5000"
                step="50"
                value={calculatorUnits}
                onChange={(e) => setCalculatorUnits(Number(e.target.value) || 0)}
                className="w-24 px-2.5 py-1 rounded-xl bg-primary-container text-white font-mono font-bold text-sm border border-white/20 outline-none"
              />
              <span className="text-xs text-primary-fixed-dim font-mono">unit ({totalKg} kg total)</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-xl bg-white/10 flex flex-col">
                <span className="text-primary-fixed-dim">Ampas Kopi (30%):</span>
                <strong className="text-sm font-bold text-secondary-fixed font-mono">{coffeeKg} kg</strong>
              </div>
              <div className="p-2 rounded-xl bg-white/10 flex flex-col">
                <span className="text-primary-fixed-dim">Serbuk Kayu (50%):</span>
                <strong className="text-sm font-bold text-white font-mono">{sawdustKg} kg</strong>
              </div>
              <div className="p-2 rounded-xl bg-white/10 flex flex-col">
                <span className="text-primary-fixed-dim">Dedak Padi (15%):</span>
                <strong className="text-white font-mono font-semibold">{branKg} kg</strong>
              </div>
              <div className="p-2 rounded-xl bg-white/10 flex flex-col">
                <span className="text-primary-fixed-dim">Kapur &amp; Gipsum (5%):</span>
                <strong className="text-white font-mono font-semibold">{(Number(calciumKg) + Number(gypsumKg)).toFixed(1)} kg</strong>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-primary-fixed-dim">SOP Racikan Tim Lapangan Lembang</span>
            <button
              onClick={() => alert(`Resep takaran manual untuk ${calculatorUnits} baglog telah disalin ke checklist kerja staf mixer!`)}
              className="px-3 py-1 rounded-full bg-secondary text-primary font-bold hover:bg-secondary-fixed transition-colors text-[11px]"
              type="button"
            >
              Terapkan ke SPK Staf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
