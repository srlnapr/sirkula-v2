import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartnershipModal from './PartnershipModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section id="hero" className="scroll-mt-28 relative w-full max-w-[1360px] mx-auto px-margin-mobile md:px-margin pt-8 sm:pt-12 pb-16">

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Editorial Column */}
        <div className="lg:col-span-6 flex flex-col items-start gap-space-md z-10">
          {/* Top Pill Badge */}

          {/* Headline with Serif & Contrast */}
          <h1 className="font-headline-xl text-headline-xl text-on-surface leading-[1.15] tracking-tight">
            Ampas Kopi Dibuang Jadi Masalah, <br className="hidden sm:inline" />
            <span className="font-display-lg text-display-lg italic font-normal text-primary-container block sm:inline">
              Baglog Jamur Mahal
            </span>{' '}
            Bikin Resah?
          </h1>

          {/* Subheadline */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-normal leading-relaxed">
            Sirkula menghubungkan rantai pasok sirkular antara coffee shop perkotaan dan pembudidaya jamur tiram. Ubah limbah ampas kopi organik harian menjadi substrat bernutrisi tinggi dengan sistem logistik cerdas terintegrasi.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-space-md pt-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 font-semibold cursor-pointer"
            >
              <span>Gabung Kemitraan Sirkular</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <a
              className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary hover:bg-surface-container font-label-md text-label-md px-6 py-3.5 rounded-full border border-primary/15 shadow-sm transition-all duration-200"
              href="#solusi"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_circle
              </span>
              <span>Pelajari Alur Ekosistem</span>
            </a>
          </div>

          {/* Micro-trust proof & Metric Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-primary/10 w-full">
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary text-xs font-bold ring-2 ring-surface">SK</div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-on-secondary text-xs font-bold ring-2 ring-surface">JT</div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold ring-2 ring-surface">CF</div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-variant text-primary text-xs font-bold ring-2 ring-surface">+85</div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="font-label-sm text-label-sm font-bold text-on-surface">4.9 / 5.0</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Dari 85+ Kafe Specialty Bandung &amp; Komunitas Petani Terdaftar di Lembang
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Photography Showcase with Floating Badges */}
        <div className="lg:col-span-6 relative">
          {/* Main Organic Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/10 shadow-2xl bg-surface-container-low aspect-[4/3] sm:aspect-[16/11]">
            <img
              alt="Modern sustainable agriculture farmer inspects healthy oyster mushrooms in clean green facility"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV06zordpyvi_4cZzVD8QxKieIqnfmOpYn3iwgqtQSgdPn_L7yritYwoKO3zZjx0cfHH9h2RDxQxX79TbGlKz1vOfbWm_y6rkOcRdGVWUnRCTJJ63ilCDRkPNzfQGwCjNREPm_dnH13IJEcBf5avQOZXvH3F3RoF7tYpPHI5rpDiV7m9OGioIA8gVi7lXE_0K65EdxJICKT3vO5KttFh0UNbV6J6ShtELA0QWc7OvH9ISMlOT0p3FT"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>

            {/* Bottom Caption Inside Photo */}
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-on-primary z-10">
              <div className="flex items-center gap-2 bg-primary/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                <span className="font-label-sm text-label-sm text-white">Budidaya Jamur Substrat Sirkular</span>
              </div>
              <span className="font-label-sm text-label-sm text-white/90 hidden sm:inline">Mitra Petani Sirkula Lembang</span>
            </div>
          </div>


        </div>
      </div>

      <PartnershipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
