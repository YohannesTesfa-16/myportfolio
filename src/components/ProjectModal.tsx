import React, { useState, useEffect } from 'react';
import { X, Play, RefreshCw, Terminal, CheckCircle2, ShieldCheck, Database, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectId, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'logs'>('preview');
  const [telemetryCount, setTelemetryCount] = useState(2847920);
  const [latency, setLatency] = useState(1.18);
  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      author: 'David M.',
      question: 'How do we guarantee linearizability during network partitions in Raft?',
      answers: 4,
      time: '12m ago',
      tag: 'Distributed Systems'
    },
    {
      id: 2,
      author: 'Sarah K.',
      question: 'Optimal MySQL composite indexing strategy for nested forum comment trees?',
      answers: 7,
      time: '45m ago',
      tag: 'Database Architecture'
    },
    {
      id: 3,
      author: 'Marcus L.',
      question: 'React 19 Server Components vs Client Hydration for real-time discussion feeds',
      answers: 12,
      time: '2h ago',
      tag: 'Frontend Engineering'
    }
  ]);
  const [newQuestion, setNewQuestion] = useState('');

  const project = PROJECTS.find((p) => p.id === projectId);

  // Live telemetry pulse
  useEffect(() => {
    if (projectId === 'aether-metrics') {
      const interval = setInterval(() => {
        setTelemetryCount((prev) => prev + Math.floor(Math.random() * 240) - 100);
        setLatency((prev) => +(1.1 + Math.random() * 0.15).toFixed(2));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [projectId]);

  if (!project) return null;

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    setForumPosts([
      {
        id: Date.now(),
        author: 'You (Visitor)',
        question: newQuestion.trim(),
        answers: 0,
        time: 'Just now',
        tag: 'Community Query'
      },
      ...forumPosts
    ]);
    setNewQuestion('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0f12] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-800/80 flex items-center justify-between gap-4 bg-[#090b0d]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#bef264]"></span>
            <div>
              <div className="text-[11px] font-mono-tech text-neutral-500 uppercase tracking-widest">
                SYSTEM INSPECTION // {project.number}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight font-mono-tech">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab navigation */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono-tech">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-[#bef264] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                LIVE PREVIEW
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'architecture'
                    ? 'bg-[#bef264] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                ARCHITECTURE
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'logs'
                    ? 'bg-[#bef264] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                SYSTEM METRICS
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: LIVE INTERACTIVE PREVIEW */}
          {activeTab === 'preview' && (
            <div>
              {project.id === 'evangadi-forum' && (
                <div className="space-y-6">
                  {/* Top Bar simulation */}
                  <div className="p-4 rounded-xl border border-neutral-800 bg-[#08090a]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-mono-tech text-white font-bold flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#bef264]" />
                        <span>EVANGADI FORUM // LIVE PROTOCOL ENGINE</span>
                      </div>
                      <span className="text-[11px] font-mono-tech text-[#bef264] px-2 py-0.5 rounded bg-[#bef264]/10 border border-[#bef264]/20">
                        CLUSTER: 5 NODES (ONLINE)
                      </span>
                    </div>

                    {/* Ask a question test form */}
                    <form onSubmit={handleAddQuestion} className="flex gap-2 mb-6">
                      <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Ask a technical question to simulate write consensus..."
                        className="flex-1 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-xs font-mono-tech text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#bef264]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-lg bg-[#bef264] text-black text-xs font-mono-tech font-bold hover:bg-[#d5fa75] transition-colors cursor-pointer"
                      >
                        POST QUERY
                      </button>
                    </form>

                    {/* Live Discussion List */}
                    <div className="space-y-3">
                      {forumPosts.map((post) => (
                        <div
                          key={post.id}
                          className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start justify-between gap-4"
                        >
                          <div>
                            <div className="flex items-center gap-2 text-[11px] font-mono-tech text-neutral-400 mb-1">
                              <span className="text-[#bef264] font-semibold">{post.author}</span>
                              <span>·</span>
                              <span>{post.time}</span>
                              <span>·</span>
                              <span className="text-neutral-500">{post.tag}</span>
                            </div>
                            <h4 className="text-sm font-medium text-neutral-200">
                              {post.question}
                            </h4>
                          </div>
                          <span className="text-xs font-mono-tech text-neutral-400 px-2.5 py-1 rounded bg-neutral-800 shrink-0">
                            {post.answers} replies
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'chatgpt-clone' && (
                <div className="p-5 rounded-xl border border-neutral-800 bg-[#08090a] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono-tech">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#bef264] animate-pulse"></span>
                      <span className="text-white font-bold">STREAMING TOKEN ENGINE // SERVER-SENT EVENTS</span>
                    </div>
                    <span className="text-neutral-400">TTFT: &lt; 28ms</span>
                  </div>

                  {/* Chat Conversation Display */}
                  <div className="space-y-3 font-mono-tech text-xs">
                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-500 uppercase mb-1">USER PROMPT:</div>
                      <div className="text-neutral-200">Can you show an optimized Server-Sent Events handler in Express &amp; React?</div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-black border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#bef264]">
                        <span>ASSISTANT (STREAMING 60 FPS):</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#bef264]/10 border border-[#bef264]/20">TOKEN RATE: 92/sec</span>
                      </div>
                      <div className="text-neutral-300 leading-relaxed font-mono">
                        <pre className="text-[11px] text-neutral-300 overflow-x-auto p-2 bg-neutral-950 rounded border border-neutral-850">
{`app.get('/api/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  const stream = llm.generateStream({ prompt });
  for await (const chunk of stream) {
    res.write(\`data: \${JSON.stringify({ text: chunk })}\\n\\n\`);
  }
});`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'netflix-clone' && (
                <div className="p-5 rounded-xl border border-neutral-800 bg-[#08090a] space-y-6">
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 flex items-center justify-center border border-neutral-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="relative z-10 text-center p-6 max-w-md">
                      <span className="text-xs font-mono-tech text-[#bef264] uppercase tracking-wider block mb-2">
                        CINEMATIC EXPERIENCE ENGINE
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        NETFLIX CLONE INTERFACE
                      </h3>
                      <p className="text-xs text-neutral-400 mb-6">
                        Interactive movie cards, dynamic category carousels, responsive video playback modal, and TMDB REST API backend.
                      </p>
                      <button
                        onClick={() => alert('Launching full cinematic trailer streaming module...')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-black text-xs font-mono-tech font-bold hover:bg-[#d5fa75] transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-black" />
                        <span>TEST INTERACTIVE CAROUSEL</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE SPEC */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-neutral-800 bg-[#090b0d]">
                <h4 className="text-sm font-bold font-mono-tech text-white mb-3 uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#bef264]" />
                  <span>SYSTEM ARCHITECTURE HIGHLIGHTS</span>
                </h4>
                <ul className="space-y-3">
                  {project.highlights?.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono-tech">
                      <CheckCircle2 className="w-4 h-4 text-[#bef264] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-neutral-800 bg-[#090b0d]">
                <h4 className="text-sm font-bold font-mono-tech text-white mb-3 uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#bef264]" />
                  <span>KEY SYSTEM BENCHMARKS</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 rounded bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">{m.label}</div>
                      <div className="text-base font-bold font-mono-tech text-white">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SYSTEM METRICS & LOGS */}
          {activeTab === 'logs' && (
            <div className="p-4 rounded-xl bg-black border border-neutral-800 font-mono-tech text-xs text-neutral-300 space-y-2">
              <div className="text-neutral-500 mb-2">// REAL-TIME RUNTIME LOGS</div>
              <div className="text-[#bef264]">[INFO 05:41:02] Cluster election stabilized. Leader: node-us-east-1</div>
              <div className="text-neutral-300">[DEBUG 05:41:03] Replicated write WAL entry #849202 across 5/5 peers in 0.82ms</div>
              <div className="text-neutral-300">[INFO 05:41:04] ClickHouse columnar buffer flushed 40,000 telemetry events to disk</div>
              <div className="text-neutral-300">[INFO 05:41:05] React SPA hydration verified. Zero layout shifts (CLS: 0.00)</div>
              <div className="text-[#bef264]">[OK 05:41:06] p99 threshold: 1.18ms &lt; target 2.00ms. Invariant verified.</div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-800 bg-[#090b0d] flex items-center justify-between text-xs font-mono-tech">
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Tags:</span>
            {project.tags.map((t) => (
              <span key={t} className="text-neutral-300">#{t}</span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
