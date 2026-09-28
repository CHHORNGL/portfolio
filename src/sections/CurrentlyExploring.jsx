import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, Cpu, GitBranch, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';

const iconMap = {
  Layers,
  Smartphone,
  Cpu,
  GitBranch
};

export default function CurrentlyExploring() {
  const { currentlyExploring } = personalInfo;

  return (
    <section className="py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              Growth & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Currently Exploring
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Technologies, paradigms, and engineering disciplines I'm actively deepening my understanding in.
            </p>
          </motion.div>
        </div>

        {/* 4 Exploration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyExploring.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#121216]/70 border border-white/[0.08] hover:border-sky-500/30 transition-all hover:bg-white/[0.03] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Continuous Learning</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
