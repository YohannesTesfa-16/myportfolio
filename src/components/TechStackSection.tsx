import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';
import { TechItem } from '../types';

export const TechStackSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TechItem | null>(null);

  return (
    <section id="skills" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono-tech tracking-wider text-[#bef264] mb-3 uppercase">
              03 // TECHNICAL STACK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
              SYSTEMS, FRAMEWORKS &amp; TOOLING
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono-tech max-w-md leading-relaxed md:text-right">
            Strict typing, verifiable protocols, and resilient infrastructure tested in production environments.
          </p>
        </div>

        {/* 4-Column Technical Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex flex-col">
              {/* Column Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6 text-xs font-mono-tech">
                <span className="text-white font-bold tracking-wider">{cat.code}</span>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px]">
                  {cat.tier}
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => setSelectedItem(item)}
                    className="flex items-center justify-between group py-1.5 px-2 -mx-2 rounded hover:bg-[#121418] transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                      {item.name}
                    </span>
                    <span className="text-xs font-mono-tech text-neutral-500 group-hover:text-[#bef264] transition-colors">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive Toast / Card if an item is clicked */}
        {selectedItem && (
          <div className="mt-12 p-4 rounded-xl border border-neutral-800 bg-[#0d0f12] flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#bef264]"></span>
              <div className="text-xs font-mono-tech">
                <span className="text-white font-bold uppercase">{selectedItem.name}</span>
                <span className="text-neutral-500 mx-2">|</span>
                <span className="text-neutral-400">Spec: {selectedItem.detail}</span>
                <span className="text-neutral-500 mx-2">|</span>
                <span className="text-[#bef264]">Level: {selectedItem.level} in production</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              className="text-xs font-mono-tech text-neutral-500 hover:text-white px-2 py-1"
            >
              [CLOSE]
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
