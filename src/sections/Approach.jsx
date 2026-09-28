import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

export default function Approach() {
  const { approaches } = personalInfo;

  return (
    <section id="approach" className="py-24 relative overflow-hidden">
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
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              How I Build
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              A disciplined, engineering-first approach to solving problems and crafting reliable software.
            </p>
          </motion.div>
        </div>

        {/* 4 Elegant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#121216]/60 border border-white/[0.08] hover:border-white/[0.18] transition-all hover:bg-white/[0.03] flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-sky-400/80 group-hover:text-sky-300 transition-colors block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Phase {item.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-sky-400 transition-colors"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
