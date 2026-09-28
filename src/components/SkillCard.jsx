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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative p-6 rounded-2xl bg-[#121216]/60 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between"
    >
      {/* Category Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
            {category.name}
          </h3>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400">
            {category.skills.length} techs
          </span>
        </div>
        <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
          {category.description}
        </p>

        {/* Skills list / pills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-sky-400/40 hover:text-sky-300 transition-all duration-200 group/pill"
              >
                <IconComponent className="w-3.5 h-3.5 text-zinc-400 group-hover/pill:text-sky-400 transition-colors" />
                <span className="text-xs font-medium text-zinc-200 group-hover/pill:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle indicator bar on bottom */}
      <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        <span>Verified Coursework & Projects</span>
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-sky-400 transition-colors"></span>
      </div>
    </motion.div>
  );
}
