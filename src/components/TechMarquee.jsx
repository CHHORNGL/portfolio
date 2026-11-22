import React from 'react';
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Layers,
  Box,
  Cpu,
  FileCode,
  Zap,
  Flame,
  Binary
} from 'lucide-react';

const techItems = [
  { name: 'Flutter', category: 'Mobile', icon: Smartphone },
  { name: 'Dart', category: 'Language', icon: Zap },
  { name: 'FastAPI', category: 'Backend', icon: Zap },
  { name: 'Python', category: 'AI & Backend', icon: Binary },
  { name: 'Oracle 19c', category: 'Enterprise DB', icon: Database },
  { name: 'Docker', category: 'DevOps', icon: Box },
  { name: 'React 19', category: 'Frontend', icon: Layers },
  { name: 'Laravel 11', category: 'Backend', icon: Flame },
  { name: 'PHP', category: 'Web & API', icon: Server },
  { name: 'MySQL', category: 'Database', icon: Database },
  { name: 'Tailwind CSS', category: 'Styling', icon: FileCode },
  { name: 'JavaScript', category: 'Language', icon: Code2 },
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'Rule Engines', category: 'AI Systems', icon: Cpu }
];

export default function TechMarquee() {
  const marqueeList = [...techItems, ...techItems];

  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-white/[0.08] bg-[#050505] select-none">
      {/* Edge Gradient Masks */}
      <div
        className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex animate-marquee gap-3 sm:gap-4 items-center">
        {marqueeList.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0C0C0E] border border-white/[0.08] hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200 shrink-0 cursor-default group"
            >
              <div className="w-4 h-4 rounded flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest pl-1.5 border-l border-white/[0.06]">
                {tech.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
