import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu } from 'lucide-react';

export default function AbstractHeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-purple-500/10 rounded-3xl blur-2xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Main Terminal / IDE Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl bg-[#0F0F13]/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden"
      >
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block"></span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.05] text-[11px] font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>developer.config.ts</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="hidden sm:inline">Active</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300">
          <div className="flex gap-4">
            {/* Line Numbers */}
            <div className="select-none text-zinc-600 text-right pr-2 border-r border-white/[0.06] flex flex-col gap-1 font-mono text-xs">
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
                <span className="text-zinc-500">// Norton University · Cambodia</span>
              </div>
              <div>
                <span className="text-purple-400 font-semibold">interface</span>{' '}
                <span className="text-sky-300 font-semibold">SoftwareDeveloper</span>{' '}
                <span className="text-zinc-400">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">name:</span>{' '}
                <span className="text-emerald-300">"Chea Cheavchhorng"</span>;
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">role:</span>{' '}
                <span className="text-emerald-300">"3rd Year IT Student"</span>;
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">university:</span>{' '}
                <span className="text-emerald-300">"Norton University"</span>;
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">stack:</span>{' '}
                <span className="text-zinc-400">[</span>
                <span className="text-sky-300">"Flutter"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-sky-300">"Laravel"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-sky-300">"FastAPI"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-sky-300">"React"</span>
                <span className="text-zinc-400">];</span>
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">databases:</span>{' '}
                <span className="text-zinc-400">[</span>
                <span className="text-amber-300">"MySQL"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">"Oracle"</span>
                <span className="text-zinc-400">, </span>
                <span className="text-amber-300">"PostgreSQL"</span>
                <span className="text-zinc-400">];</span>
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">location:</span>{' '}
                <span className="text-emerald-300">"Phnom Penh, Cambodia"</span>;
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">status:</span>{' '}
                <span className="text-sky-400">"Open to Internships"</span>;
              </div>
              <div>
                <span className="text-zinc-400">{'}'}</span>
              </div>
              <div className="pt-1">
                <span className="text-purple-400">export default</span>{' '}
                <span className="text-sky-300">developer</span>;
              </div>
            </div>
          </div>
        </div>

        {/* Mini Status Footer */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span className="font-mono text-[11px]">Git branch: main</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">UTF-8 · TypeScript</span>
        </div>
      </motion.div>

      {/* Floating Badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-xl bg-[#141419]/90 border border-white/[0.12] backdrop-blur-md shadow-xl flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Full-Stack & Mobile</p>
          <p className="text-[11px] text-zinc-400">Flutter · Laravel · React</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -top-5 -right-3 sm:-right-5 p-3 rounded-xl bg-[#141419]/90 border border-white/[0.12] backdrop-blur-md shadow-xl hidden sm:flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">3rd Year IT</p>
          <p className="text-[11px] text-zinc-400">Norton University</p>
        </div>
      </motion.div>
    </div>
  );
}
