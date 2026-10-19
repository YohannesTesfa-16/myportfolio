import React from 'react';
import { ArrowUpRight, Code, FileText, ExternalLink, Activity } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenDemo: (projectId: string) => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenDemo,
  onOpenLightbox,
}) => {
  return (
    <section id="work" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-tech tracking-wider text-[#bef264] mb-3 uppercase">
            <span>02 // SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase max-w-4xl leading-tight">
            EVANGADI FORUM / PLATFORM THAT MAKES INTERACTION EASIER
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-28">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Visual Mockup (6 cols) */}
              <div className="lg:col-span-6">
                <div
                  onClick={() => onOpenLightbox(project.image, project.title)}
                  className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-[#0e1013] shadow-2xl transition-all duration-300 hover:border-neutral-700 cursor-zoom-in"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Subtle hover prompt */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#08090a]/80 backdrop-blur-sm border border-neutral-700/60 text-[10px] font-mono-tech text-neutral-400 group-hover:text-white transition-colors">
                    CLICK TO EXPAND
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Technical Deep Dive (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Number & Category */}
                <div className="flex items-center gap-3 text-xs font-mono-tech tracking-widest text-neutral-400 mb-3 uppercase">
                  <span className="text-[#bef264] font-semibold">{project.number}</span>
                  <span className="text-neutral-600">—</span>
                  <span>{project.category}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Engineering Challenge & Outcome Box */}
                <div className="p-5 rounded-lg border border-neutral-800/90 bg-[#0c0d10] mb-6 relative">
                  <div className="text-[10px] font-mono-tech tracking-widest text-[#bef264] uppercase mb-2 font-semibold">
                    ENGINEERING CHALLENGE &amp; OUTCOME
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {project.challengeOutcome}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#121418] border border-neutral-800/80 text-[11px] font-mono-tech text-neutral-400 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-6 text-xs font-mono-tech tracking-wider uppercase">
                  {project.liveUrl && project.liveUrl.startsWith('http') ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-[#bef264] transition-colors group cursor-pointer"
                    >
                      <span className="font-semibold">LIVE DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenDemo(project.id)}
                      className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-[#bef264] transition-colors group cursor-pointer"
                    >
                      <span className="font-semibold">
                        {project.id === 'aether-metrics' ? 'LIVE DASHBOARD' : 'LIVE DEMO'}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  )}

                  {project.id === 'aether-metrics' ? (
                    <button
                      onClick={() => onOpenDemo(project.id)}
                      className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>ARCHITECTURE DOCS</span>
                      <FileText className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={project.githubUrl || 'https://github.com/YohannesTesfa-16'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>GITHUB REPOSITORY</span>
                      <Code className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
