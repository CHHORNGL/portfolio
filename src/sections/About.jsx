import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import profileImg from '../assets/profile.png';

const iconMap = {
  GraduationCap,
  Code2,
  Sparkles,
  MapPin
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Grid Pattern Background */}
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
              // 01. PROFILE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 font-mono tracking-tight">
              About CHHORNG
            </h2>
            <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2">
              Software engineering mindset, technical background, and academic focus.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Minimal Technical Frame */}
            <div className="relative rounded-2xl bg-[#09090D] border border-white/[0.12] p-3 shadow-2xl overflow-hidden group">
              {/* Portrait Container with 4:5 Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0A0A0A]">
                <img
                  src={profileImg}
                  alt="CHHORNG (Chea Cheavchhorng) - Software Developer at Norton University"
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"
                  aria-hidden="true"
                />

                {/* Bottom Technical Metadata Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] text-[10px] font-mono text-white mb-2.5 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>NORTON UNIVERSITY · YEAR 3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono tracking-tight">
                    {personalInfo.displayName}
                  </h3>
                  <p className="text-xs text-zinc-300 font-mono mt-0.5">
                    Chea Cheavchhorng · Bachelor of IT
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono mt-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    Phnom Penh, Cambodia (UTC+7)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs & 4 Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-zinc-300 font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 4 Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {personalInfo.infoCards.map((card, index) => {
                const Icon = iconMap[card.icon] || Sparkles;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-[#09090D] border border-white/[0.08] hover:border-white/[0.18] transition-all group shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {card.title}
                      </span>
                      <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                        <Icon className="w-3 h-3" />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-zinc-200 transition-colors">
                      {card.value}
                    </p>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">
                      {card.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
