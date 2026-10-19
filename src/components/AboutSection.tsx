import React from 'react';

interface AboutSectionProps {
  onOpenDemo: (projectId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="about" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading and Scholarship (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Section Kicker */}
              <div className="flex items-center gap-2 text-xs font-mono-tech tracking-wider text-[#bef264] mb-3 uppercase">
                <span>01 // ABOUT</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 uppercase">
                FULL STACK DEVELOPER
              </h2>

              <p className="text-xs font-mono-tech text-neutral-500 mb-8 tracking-wider">
                END-TO-END ARCHITECTURE &amp; CORE PHILOSOPHY
              </p>
            </div>

            {/* Bottom Scholarship Info */}
            <div className="pt-10 mt-10 lg:mt-0 border-t border-neutral-800/60">
              <div className="text-[11px] font-mono-tech tracking-widest text-neutral-500 uppercase mb-2">
                SCHOLARSHIP // METHOD
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-mono-tech leading-relaxed">
                B.S. in Computer Science — Focus in Concurrency, Protocols &amp; Computational Graphics.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Working Principle (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-6">
                I&apos;m a passionate Full-Stack Developer who builds modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, React, Node.js, and backend technologies to turn ideas into functional digital experiences. I&apos;m continuously learning, solving problems, and creating innovative projects that combine clean design with reliable functionality.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-8">
                My work balances end-to-end resilience with refined interaction design. Rather than siloing back-end performance from user empathy, I build systems where millisecond latency improvements and pixel precision reinforce one another.
              </p>

              {/* Core Working Principle Box */}
              <div className="p-6 rounded-xl border border-neutral-800 bg-[#0c0d10] relative overflow-hidden mb-8">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#bef264]/40 via-[#bef264] to-transparent opacity-40" />
                <div className="text-[11px] font-mono-tech tracking-widest text-[#bef264] uppercase mb-2.5 font-semibold">
                  CORE WORKING PRINCIPLE
                </div>
                <blockquote className="text-sm sm:text-base text-neutral-200 font-normal italic leading-relaxed">
                  &ldquo;Clarity of execution beats unnecessary complexity. Build systems with observable boundaries, predictable state, and typography that respects the reader.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Runtime & Capabilities Tags */}
            <div className="pt-6 border-t border-neutral-800/60">
              <div className="text-[11px] font-mono-tech tracking-widest text-neutral-500 uppercase mb-3">
                PRIMARY CAPABILITIES &amp; RUNTIME:
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'JavaScript', 'HTML & CSS', 'MySQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-[#121418] border border-neutral-800 text-xs font-mono-tech text-neutral-300 hover:border-neutral-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
