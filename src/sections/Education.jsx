import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden bg-black border-t border-white/[0.06]">
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
              // 04. ACADEMIC CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 font-mono tracking-tight">
              Education & Coursework
            </h2>
            <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2">
              Formal university computer science and software development curriculum.
            </p>
          </motion.div>
        </div>

        {/* Minimal Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] ml-2 sm:ml-4 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-black" />

            {/* Timeline Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#09090D] border border-white/[0.08] hover:border-white/[0.18] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-white">
                  {education.period}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{education.location}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">
                {education.institution}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-6 font-mono">
                {education.degree}
              </p>

              {/* Relevant Coursework Areas */}
              <div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                  <span>// CORE CURRICULUM & ENGINEERING MODULES</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {education.relevantAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-300 hover:text-white hover:border-white/20 transition-all"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
