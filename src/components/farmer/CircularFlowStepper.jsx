import React from 'react';

export default function CircularFlowStepper() {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-4px_rgba(27,77,62,0.05),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight font-semibold">
            Alur Sirkular Nutrisi Substrat
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Rantai pasok tertutup dari limbah specialty coffee menuju jamur tiram berdaya jual tinggi di Lembang &amp; Bandung.
          </p>
        </div>
        <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm uppercase font-bold">
          100% Regeneratif
        </span>
      </div>

      {/* Stepper Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        {/* Step 1 */}
        <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
              1
            </span>
            <span className="material-symbols-outlined text-secondary text-[20px]">coffee</span>
          </div>
          <span className="font-label-md text-label-md font-semibold text-primary">
            Ampas Kopi Kedai
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Diverted dari 32 kafe mitra urban Bandung Raya
          </span>
        </div>

        {/* Step 2 */}
        <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
              2
            </span>
            <span className="material-symbols-outlined text-secondary text-[20px]">sanitizer</span>
          </div>
          <span className="font-label-md text-label-md font-semibold text-primary">
            Sterilisasi Hub
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Inokulasi bibit F2 bersertifikasi lab mikologi Lembang
          </span>
        </div>

        {/* Step 3 (Active) */}
        <div className="p-3.5 rounded-2xl bg-primary text-on-primary flex flex-col gap-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center justify-center font-bold">
              3
            </span>
            <span className="material-symbols-outlined text-secondary-container text-[20px]">
              potted_plant
            </span>
          </div>
          <span className="font-label-md text-label-md font-semibold">
            Inokulasi Kumbung
          </span>
          <span className="font-body-sm text-body-sm text-on-primary/80">
            Fase aktif Tirta Mandiri: 1.200 baglog
          </span>
        </div>

        {/* Step 4 */}
        <div className="p-3.5 rounded-2xl bg-surface-container-low flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center font-bold">
              4
            </span>
            <span className="material-symbols-outlined text-outline text-[20px]">eco</span>
          </div>
          <span className="font-label-md text-label-md font-semibold text-primary">
            Panen &amp; Kompos
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Spent baglog dikomposkan untuk pupuk agroforestri
          </span>
        </div>
      </div>
    </div>
  );
}
