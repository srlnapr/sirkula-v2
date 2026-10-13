import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartnershipModal from './PartnershipModal';

export default function CtaSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('coffee-shop');

  const openRegister = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  return (
    <>
      <section className="w-full max-w-[1360px] mx-auto px-margin-mobile md:px-margin py-20" id="mitra">
        <div className="relative bg-primary-container text-on-primary rounded-3xl p-8 md:p-14 overflow-hidden shadow-xl">
          {/* Ambient organic shapes */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-primary/40 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary text-secondary-fixed text-xs font-bold uppercase tracking-wider">
                Gabung Gerakan #ZeroWasteCoffee
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-primary font-semibold max-w-2xl leading-tight">
                Siap Mengubah Limbah Kopi Menjadi Nilai Nyata?
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl">
                Baik Anda pemilik kedai kopi specialty yang ingin sertifikasi ramah lingkungan atau pembudidaya jamur yang memerlukan pasokan baglog berbiaya efisien di Lembang &amp; Bandung Raya, kami siap bermitra.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
              {/* Option 1: Kafe Mitra */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">local_cafe</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-white font-bold">Kedai Kopi (Supplier)</h4>
                    <p className="text-xs text-primary-fixed-dim">Zero-cost waste management &amp; ESG</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => openRegister('coffee-shop')}
                    className="px-3.5 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim text-xs font-bold transition-all shadow-sm"
                  >
                    Daftar
                  </button>
                  <Link
                    to="/dashboard/coffee-shop"
                    className="px-3.5 py-2 rounded-full bg-primary hover:bg-primary-container text-white text-xs font-bold transition-all border border-primary-fixed/20 flex items-center gap-1"
                  >
                    <span>Dashboard</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Option 2: Petani Jamur */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-white font-bold">Petani Jamur (Buyer)</h4>
                    <p className="text-xs text-primary-fixed-dim">Baglog Rp 3.000 &amp; Buyback 100%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => openRegister('farmer')}
                    className="px-3.5 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim text-xs font-bold transition-all shadow-sm"
                  >
                    Daftar
                  </button>
                  <Link
                    to="/dashboard/farmer"
                    className="px-3.5 py-2 rounded-full bg-primary hover:bg-primary-container text-white text-xs font-bold transition-all border border-primary-fixed/20 flex items-center gap-1"
                  >
                    <span>Dashboard</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <PartnershipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialRole={selectedRole}
      />
    </>
  );
}
