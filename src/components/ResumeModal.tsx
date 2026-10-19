import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown or trigger simulated download
    const resumeText = `YOHANNES TESFA EJIGU
Senior Full-Stack Engineer & UI Architect
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

EDUCATION:
B.S. in Computer Science — Focus in Concurrency, Protocols & Computational Graphics

CORE SYSTEMS & COMPETENCIES:
- Frontend: React 19, Next.js, TypeScript, Tailwind CSS, WebGL, Canvas
- Backend: Node.js, Express, Go, Python, gRPC, Protobuf
- Databases: PostgreSQL, Redis, ClickHouse, SQLite
- Infrastructure: Docker, Kubernetes, Kafka, AWS, Linux Kernel/CLI

PROJECTS:
1. EVANGADI FORUM: Collaborative knowledge platform & distributed consensus storage (live: evangadiforum.tsedetech.com).
2. NETFLIX CLONE: Cinematic web interface with interactive media streaming player and responsive carousels.
3. CHATGPT CLONE: Full-stack conversational AI platform with real-time SSE token streaming and syntax highlighting.`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yohannes_Tesfa_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d0f12] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 bg-[#090b0d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#bef264]" />
            <div>
              <div className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest">
                CURRICULUM VITAE
              </div>
              <h2 className="text-lg font-bold text-white font-mono-tech">
                {PERSONAL_INFO.footerName}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#bef264] text-black text-xs font-mono-tech font-bold hover:bg-[#d5fa75] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-mono-tech text-xs text-neutral-300">
          {/* Summary */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-2 text-sm">
              ENGINEERING SUMMARY
            </h3>
            <p className="text-neutral-400 leading-relaxed font-sans text-sm">
              Senior Full-Stack Developer &amp; UI Architect with extensive experience designing high-throughput distributed systems, stream-processing observability pipelines, and art-directed, resilient web applications. Proven track record in provable state consensus, sub-millisecond p99 latencies, and pixel-precise frontends.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#bef264]" />
              <span>EXPERIENCE</span>
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-neutral-800 pl-4 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm">Principal Full-Stack &amp; UI Architect</span>
                  <span className="text-neutral-500">2023 — PRESENT</span>
                </div>
                <div className="text-neutral-400">Distributed Systems &amp; WebGL Architectures</div>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 font-sans text-xs pt-1">
                  <li>Engineered Raft-based consensus key-value store with WAL snapshotting and sub-1.2ms p99 latency.</li>
                  <li>Architected stream-processing pipeline handling 2.8M+ metrics/sec via Kafka and ClickHouse.</li>
                  <li>Delivered flagship interactive frontends with zero CLS and 98+ Lighthouse performance scores.</li>
                </ul>
              </div>

              <div className="border-l-2 border-neutral-800 pl-4 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm">Senior Full-Stack Developer</span>
                  <span className="text-neutral-500">2021 — 2023</span>
                </div>
                <div className="text-neutral-400">High-Impact Cloud &amp; Realtime Applications</div>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 font-sans text-xs pt-1">
                  <li>Designed relational databases (MySQL, PostgreSQL) optimized for high concurrency.</li>
                  <li>Implemented real-time client hydration, optimistic UI mutations, and state management.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-3 text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#bef264]" />
              <span>EDUCATION</span>
            </h3>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="font-bold text-white text-sm">B.S. in Computer Science</div>
              <div className="text-[#bef264] mt-0.5">Focus in Concurrency, Protocols &amp; Computational Graphics</div>
              <div className="text-neutral-400 mt-2 font-sans text-xs">
                Rigorous training in algorithmic complexity, distributed consensus, memory safety, and graphical shader pipelines.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-[#090b0d] flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
          <span>STATUS: OPEN FOR NEW TRANSMISSIONS</span>
          <button
            onClick={onClose}
            className="text-neutral-300 hover:text-white"
          >
            [CLOSE PREVIEW]
          </button>
        </div>
      </div>
    </div>
  );
};
