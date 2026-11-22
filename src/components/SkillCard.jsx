import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Binary,
  Smartphone,
  Database,
  FileCode,
  Sparkles,
  Layers,
  Box,
  Zap,
  Workflow,
  GitBranch,
  Terminal,
  Layout,
  Cpu,
  Atom
} from 'lucide-react';
import { Github } from './BrandIcons';

const iconMap = {
  Code2,
  Server,
  Binary,
  Smartphone,
  Database,
  FileCode,
  Sparkles,
  Layers,
  Box,
  Zap,
  Workflow,
  GitBranch,
  Github,
  Terminal,
  Layout,
  Cpu,
  Atom
};

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative p-5 rounded-2xl bg-[#09090D] border border-white/[0.08] hover:border-white/25 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      {/* Category Header */}
      <div>
        <div className="flex items-center justify-between mb-2.5 font-mono">
          <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
            {category.name}
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400">
            0{category.skills.length} TECHS
          </span>
        </div>
        <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-sans">
          {category.description}
        </p>

        {/* Skills list / pills */}
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 font-mono text-xs group/pill"
              >
                <IconComponent className="w-3.5 h-3.5 text-zinc-400 group-hover/pill:text-white transition-colors" />
                <span className="text-zinc-300 group-hover/pill:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle indicator bar on bottom */}
      <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-500 font-mono">
        <span>VERIFIED COURSEWORK & SYSTEMS</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
      </div>
    </motion.div>
  );
}
