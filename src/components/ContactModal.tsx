import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, User, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0d0f12] border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#bef264]"></span>
            <h3 className="text-base sm:text-lg font-bold font-mono-tech text-white uppercase tracking-tight">
              INITIATE TRANSMISSION
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#bef264] mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-white font-mono-tech">TRANSMISSION DISPATCHED</h4>
            <p className="text-xs text-neutral-400 font-mono-tech max-w-xs mx-auto">
              Your inquiry has been sent to {PERSONAL_INFO.email}. Yohannes will review and respond promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono-tech text-neutral-400 uppercase mb-1.5">
                YOUR NAME / ORGANIZATION
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova / DeepMind"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-xs font-mono-tech text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#bef264]"
                />
                <User className="w-4 h-4 text-neutral-600 absolute right-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono-tech text-neutral-400 uppercase mb-1.5">
                RETURN EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-xs font-mono-tech text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#bef264]"
                />
                <Mail className="w-4 h-4 text-neutral-600 absolute right-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono-tech text-neutral-400 uppercase mb-1.5">
                TRANSMISSION MESSAGE / SCOPE
              </label>
              <div className="relative">
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe the engineering role, distributed system architecture, or project scope..."
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-xs font-mono-tech text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#bef264] resize-none"
                />
                <MessageSquare className="w-4 h-4 text-neutral-600 absolute right-3 top-3" />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[10px] font-mono-tech text-neutral-500">
                DIRECT TO {PERSONAL_INFO.email}
              </span>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#bef264] text-black text-xs font-mono-tech font-bold hover:bg-[#d5fa75] transition-colors cursor-pointer"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
