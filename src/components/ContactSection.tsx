import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Download, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
  onOpenContactModal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* Section Kicker */}
          <div className="text-xs font-mono-tech tracking-wider text-[#bef264] mb-3 uppercase">
            04 // INITIATE TRANSMISSION
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05] mb-8">
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            MEANINGFUL.
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-12">
            Currently open for full-time engineering roles, distributed systems challenges, and ambitious collaborations.
          </p>

          {/* Interactive Direct Email Channel Card */}
          <div
            onClick={onOpenContactModal}
            className="group p-5 sm:p-6 rounded-xl border border-neutral-800 bg-[#0d0f12] hover:border-neutral-700 transition-all duration-300 mb-10 cursor-pointer"
          >
            <div className="text-[10px] font-mono-tech tracking-widest text-neutral-500 uppercase mb-3">
              DIRECT EMAIL CHANNEL
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-base sm:text-xl font-bold font-mono-tech text-white group-hover:text-[#bef264] transition-colors break-all">
                {PERSONAL_INFO.email}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-mono-tech text-neutral-300 hover:text-white transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#bef264]" />
                      <span className="text-[#bef264]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Engineering%20Inquiry`;
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#bef264] text-black text-xs font-mono-tech font-bold hover:bg-[#d5fa75] transition-all cursor-pointer"
                  title="Open mail client"
                >
                  <Send className="w-3 h-3" />
                  <span>MAIL</span>
                </button>
              </div>
            </div>
          </div>

          {/* Links Footer Row */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-mono-tech tracking-wider uppercase text-neutral-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#bef264] transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-neutral-700">·</span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#bef264] transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-neutral-700">·</span>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 hover:text-[#bef264] transition-colors cursor-pointer"
            >
              <span>RESUME.PDF</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
