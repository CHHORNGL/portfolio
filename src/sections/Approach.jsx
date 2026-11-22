import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

export default function Approach() {
  const { approaches } = personalInfo;

  return (
    <section id="approach" className="py-24 sm:py-32 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-zinc-400 font-semibold tracking-widest uppercase">
              // 05. METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 font-mono tracking-tight">
              Engineering Workflow
            </h2>
            <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2 max-w-xl">
              A disciplined, engineering-first approach to solving requirements and crafting reliable systems.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {approaches.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="p-5 rounded-2xl bg-[#09090D] border border-white/[0.08] hover:border-white/25 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <span className="font-mono text-xl font-bold text-zinc-500 group-hover:text-white transition-colors block mb-3">
                  {item.step} //
                </span>
                <h3 className="text-base font-bold text-white mb-2 font-mono group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>PHASE {item.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
