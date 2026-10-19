import React from 'react';
import { ArrowDownRight, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenLightbox }) => {
  const heroImgSrc = '/src/assets/images/yohannes_portrait_exact_1792414606238.jpg';

  const scrollToProjects = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-neutral-800/60 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#bef264]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tag / Role Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#0d0f12] mb-8 text-[11px] font-mono-tech tracking-wider text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] shadow-[0_0_6px_#bef264]"></span>
              <span>{PERSONAL_INFO.titleKicker}</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.04] text-white mb-6 uppercase">
              DESIGN MINDED.
              <br />
              <span className="font-serif italic font-light text-neutral-300 tracking-normal capitalize">
                Engineering
              </span>
              <br />
              DRIVEN.
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl mb-9">
              I&apos;m <span className="text-white font-medium">{PERSONAL_INFO.name}</span> — Senior Full-Stack Developer &amp; UI Architect specializing in resilient distributed systems, high-throughput cloud infrastructure, and art-directed, pixel-precise digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#bef264] text-[#08090a] font-semibold text-xs tracking-wider font-mono-tech hover:bg-[#d4fa75] active:scale-95 transition-all shadow-lg shadow-[#bef264]/10 cursor-pointer uppercase"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-800 bg-[#0e1013] text-neutral-200 hover:text-white hover:border-neutral-700 active:scale-95 transition-all text-xs tracking-wider font-mono-tech cursor-pointer uppercase"
              >
                <span>CONTACT ME</span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Location & Status Line */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono-tech">
              <MapPin className="w-3.5 h-3.5 text-[#bef264]" />
              <span>Based in {PERSONAL_INFO.location}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400 font-medium">
                {PERSONAL_INFO.availability}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card container */}
              <div
                onClick={() => onOpenLightbox(heroImgSrc, 'Yohannes Tesfa — Senior Full-Stack Developer & UI Architect')}
                className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0e1013] shadow-2xl transition-all duration-300 hover:border-neutral-700 cursor-zoom-in"
              >
                {/* Visual Image */}
                <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={heroImgSrc}
                    alt="Yohannes Tesfa — Senior Full-Stack Developer & UI Architect"
                    className="w-full h-full object-cover object-top contrast-105 group-hover:scale-103 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#08090a]/90 backdrop-blur-md border-t border-neutral-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#bef264] shrink-0 shadow-[0_0_6px_#bef264]"></span>
                    <div className="truncate">
                      <div className="text-xs font-bold text-white tracking-wider font-mono-tech uppercase">
                        {PERSONAL_INFO.name.toUpperCase()}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono-tech truncate">
                        Principal Full-Stack // UI Architect
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech tracking-wider bg-neutral-800 text-[#bef264] border border-neutral-700/60 uppercase shrink-0">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Capability & Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800/80">
          <div>
            <div className="text-[11px] font-mono-tech tracking-widest text-neutral-500 uppercase mb-1.5">
              PRIMARY FOCUS
            </div>
            <div className="text-sm font-semibold text-neutral-200 font-mono-tech">
              Distributed Systems &amp; WebGL Architectures
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono-tech tracking-widest text-neutral-500 uppercase mb-1.5">
              ENGINEERING STANDARD
            </div>
            <div className="text-sm font-semibold text-neutral-200 font-mono-tech">
              Provable State • Zero-Downtime • &lt;2ms Latency
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono-tech tracking-widest text-neutral-500 uppercase mb-1.5">
              AVAILABILITY
            </div>
            <div className="text-sm font-bold text-[#bef264] font-mono-tech tracking-wide">
              {PERSONAL_INFO.transmissionStatus}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
