import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Check, Copy, Layers, Smartphone } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function AbstractHeroVisual() {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(
      `// ${personalInfo.displayName} (${personalInfo.fullName})\n// ${personalInfo.academicYear} IT Undergrad @ ${personalInfo.university}\n// GitHub: ${personalInfo.contact.github}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Subtle ambient blur */}
      <div
        className="absolute -inset-2 bg-white/[0.03] rounded-3xl blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl bg-[#09090D] border border-white/[0.12] shadow-2xl backdrop-blur-2xl overflow-hidden"
      >
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          {/* Minimal window control dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block"></span>
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-white/[0.06]">
            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.1]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3 h-3 text-sky-400" />
              <span>developer.ts</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('stack')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'stack'
                  ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.1]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3 text-zinc-400" />
              <span>stack.json</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('telemetry')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.1]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3 h-3 text-emerald-400" />
              <span>status.sh</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Code Content Canvas */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300 min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
                className="flex gap-4"
              >
                {/* Line Numbers */}
                <div className="select-none text-zinc-600 text-right pr-3 border-r border-white/[0.08] flex flex-col gap-1 font-mono text-xs">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                  <span>06</span>
                  <span>07</span>
                  <span>08</span>
                  <span>09</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                </div>

                {/* Code Body */}
                <div className="flex-1 flex flex-col gap-1">
                  <div>
                    <span className="text-zinc-500">// {personalInfo.displayName} · {personalInfo.university} · {personalInfo.academicYear}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 font-bold">export const</span>{' '}
                    <span className="text-white font-semibold">developer</span>{' '}
                    <span className="text-zinc-500">= {'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">handle:</span>{' '}
                    <span className="text-sky-300">"{personalInfo.displayName}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">fullName:</span>{' '}
                    <span className="text-zinc-200">"{personalInfo.fullName}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">academicLevel:</span>{' '}
                    <span className="text-zinc-200">"{personalInfo.education.period}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">institution:</span>{' '}
                    <span className="text-zinc-200">"Norton University, Cambodia"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">coreSpecialties:</span>{' '}
                    <span className="text-zinc-500">[</span>
                    <span className="text-zinc-300">"Full-Stack"</span>
                    <span className="text-zinc-500">, </span>
                    <span className="text-zinc-300">"Flutter Mobile"</span>
                    <span className="text-zinc-500">, </span>
                    <span className="text-zinc-300">"AI Systems"</span>
                    <span className="text-zinc-500">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">databases:</span>{' '}
                    <span className="text-zinc-500">[</span>
                    <span className="text-zinc-300">"Oracle 19c"</span>
                    <span className="text-zinc-500">, </span>
                    <span className="text-zinc-300">"MySQL"</span>
                    <span className="text-zinc-500">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">location:</span>{' '}
                    <span className="text-zinc-200">"Phnom Penh, Cambodia (UTC+7)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">availability:</span>{' '}
                    <span className="text-emerald-400 font-semibold">"Open to Internships & Projects"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">github:</span>{' '}
                    <span className="text-sky-400">"github.com/CHHORNGL"</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">{'}'};</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stack' && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
                className="flex gap-4"
              >
                <div className="select-none text-zinc-600 text-right pr-3 border-r border-white/[0.08] flex flex-col gap-1 font-mono text-xs">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                  <span>05</span>
                  <span>06</span>
                  <span>07</span>
                  <span>08</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div><span className="text-zinc-500">{'{'}</span></div>
                  <div className="pl-4"><span className="text-zinc-400">"mobile"</span>: <span className="text-zinc-200">["Flutter", "Dart", "Modular State"]</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">"backend"</span>: <span className="text-zinc-200">["FastAPI", "Laravel 11", "REST APIs", "JWT"]</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">"databases"</span>: <span className="text-zinc-200">["Oracle 19c", "MySQL", "Docker"]</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">"frontend"</span>: <span className="text-zinc-200">["React 19", "Tailwind CSS", "Vite"]</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">"ai_systems"</span>: <span className="text-zinc-200">["Forward Chaining", "Expert Rule Engine"]</span>,</div>
                  <div className="pl-4"><span className="text-zinc-400">"tooling"</span>: <span className="text-zinc-200">["Git", "GitHub", "VS Code", "Figma"]</span></div>
                  <div><span className="text-zinc-500">{'}'}</span></div>
                </div>
              </motion.div>
            )}

            {activeTab === 'telemetry' && (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
                className="space-y-2.5 text-xs font-mono"
              >
                <div className="text-zinc-500">$ systemctl --user status chhorng-services</div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      FastAPI & Oracle 19c Service
                    </span>
                    <span className="text-zinc-500 font-mono">PORT 8000 // ACTIVE</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 pl-3">
                    RBAC Auth: Enabled · Transactional Integrity Verified
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      Flutter E-Commerce Mobile Engine
                    </span>
                    <span className="text-zinc-500 font-mono">RENDER: 60 FPS</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 pl-3">
                    Target: Android & iOS Cross-Platform Build
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      AgriSystem Diagnostic Inference
                    </span>
                    <span className="text-zinc-500 font-mono">RULE-ENGINE // OK</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 pl-3">
                    Knowledge Base: Forward-Chaining Crop Reasoning
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status Bar Footer */}
        <div className="px-4 py-2 bg-black/60 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] text-zinc-300">branch: master</span>
          </div>
          <span className="text-[11px] text-zinc-500">
            CHHORNG // NORTON.EDU.KH
          </span>
        </div>
      </motion.div>

      {/* Minimal Floating Badges */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -bottom-4 -left-2 sm:-left-4 p-2.5 rounded-xl bg-[#0F0F14] border border-white/[0.12] backdrop-blur-md shadow-2xl flex items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white">
          <Smartphone className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-mono font-bold text-white">Flutter & Full-Stack</p>
          <p className="text-[10px] font-mono text-zinc-500">Mobile · FastAPI · React</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -top-4 -right-2 sm:-right-4 p-2.5 rounded-xl bg-[#0F0F14] border border-white/[0.12] backdrop-blur-md shadow-2xl hidden sm:flex items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-mono font-bold text-white">{personalInfo.academicYear} IT Undergrad</p>
          <p className="text-[10px] font-mono text-zinc-500">{personalInfo.university}</p>
        </div>
      </motion.div>
    </div>
  );
}
