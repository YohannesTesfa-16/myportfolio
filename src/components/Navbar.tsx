import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090a]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-4">
        {/* Left: Identity */}
        <a
          href="#"
          className="flex items-center gap-2 group text-white hover:text-white transition-colors"
        >
          <span className="font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-[#bef264] transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-neutral-500 text-xs select-none">/</span>
          <span className="text-[11px] sm:text-xs font-mono-tech tracking-widest text-neutral-400">
            {PERSONAL_INFO.role}
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-mono-tech tracking-wider text-neutral-300">
          <a
            href="#about"
            className="hover:text-[#bef264] transition-colors uppercase py-1"
          >
            ABOUT
          </a>
          <a
            href="#work"
            className="hover:text-[#bef264] transition-colors uppercase py-1"
          >
            WORK
          </a>
          <a
            href="#skills"
            className="hover:text-[#bef264] transition-colors uppercase py-1"
          >
            SKILLS
          </a>
          <a
            href="#contact"
            className="hover:text-[#bef264] transition-colors uppercase py-1"
          >
            CONTACT
          </a>
        </nav>

        {/* Right: Availability Status Button */}
        <button
          onClick={onOpenContact}
          className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-[#0d0f12]/80 hover:border-[#bef264]/40 hover:bg-[#12161a] transition-all text-[11px] font-mono-tech text-neutral-300 tracking-wider shadow-sm cursor-pointer"
          title="Click to initiate contact"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bef264]"></span>
          </span>
          <span className="group-hover:text-white transition-colors">AVAILABLE FOR ROLES</span>
        </button>
      </div>
    </header>
  );
};
