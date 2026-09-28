import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-black/30">
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
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Education
            </h2>
          </motion.div>
        </div>

        {/* Minimal Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] ml-2 sm:ml-4 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#0A0A0A] shadow-[0_0_12px_#38bdf8]" />

            {/* Timeline Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121216]/70 border border-white/[0.08] hover:border-white/[0.16] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300">
                    {education.period}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{education.location}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {education.institution}
              </h3>
              <p className="text-base text-zinc-300 font-medium mb-6">
                {education.degree}
              </p>

              {/* Relevant Areas */}
              <div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  Relevant Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.relevantAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-zinc-300 hover:text-white hover:border-sky-400/30 transition-all"
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
