import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#08090a] text-neutral-400 text-xs font-mono-tech">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Author & Copyright */}
        <div>
          <div className="text-white font-bold mb-1 tracking-tight">
            {PERSONAL_INFO.footerName}
          </div>
          <div className="text-neutral-500 text-[11px] uppercase tracking-wider">
            {PERSONAL_INFO.copyright}
          </div>
        </div>

        {/* Center: Discipline Mark */}
        <div className="flex flex-col items-start md:items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]/70"></span>
          <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
            DESIGNED WITH DISCIPLINE
          </span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
