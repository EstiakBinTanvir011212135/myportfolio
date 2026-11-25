import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Copy, Check, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-28 bg-[#07070a] text-white relative border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span>// 05. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-zinc-400 text-base font-sans">
            Open for entry-level technology, software engineering, system analysis, and project coordination roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold font-heading text-white">
                Contact Details
              </h3>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-zinc-400">Email Address</p>
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">
                        {PERSONAL_DATA.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    data-cursor="COPY"
                    className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-cyan-400 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-zinc-400">Phone Number</p>
                    <a href={`tel:${PERSONAL_DATA.phone}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      {PERSONAL_DATA.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-zinc-400">Location</p>
                    <p className="text-xs font-medium text-zinc-300 leading-snug">
                      {PERSONAL_DATA.location}
                    </p>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 text-white flex items-center justify-center shrink-0 border border-zinc-700">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-zinc-400">GitHub Profile</p>
                    <a href={PERSONAL_DATA.github} target="_blank" rel="noopener noreferrer" data-cursor="GITHUB" className="text-sm font-semibold text-cyan-400 hover:underline">
                      github.com/{PERSONAL_DATA.githubUsername}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3.5 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Send Direct Message
                </h3>
                <p className="text-xs text-zinc-400">Inquire about employment, project roles, or technical discussions</p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <Check className="w-7 h-7 font-bold" />
                </div>
                <h4 className="text-xl font-bold font-heading text-emerald-200">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-300 max-w-sm mx-auto font-sans">
                  Thank you for reaching out. Estiak will review your message and reply promptly to {formData.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">Subject / Topic</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Entry-level Role / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="SEND"
                  className="w-full py-4 px-6 text-sm font-space font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 hover:opacity-95 rounded-xl shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
