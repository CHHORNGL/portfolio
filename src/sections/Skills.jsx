import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Background Grid */}
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
              // 02. CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 font-mono tracking-tight">
              Technical Stack & Ecosystem
            </h2>
            <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2 max-w-xl">
              Languages, frameworks, databases, and developer tools applied in university projects and real software systems.
            </p>
          </motion.div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
