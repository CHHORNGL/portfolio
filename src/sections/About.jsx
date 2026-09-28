import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';

const iconMap = {
  GraduationCap,
  Code2,
  Sparkles,
  MapPin
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              {personalInfo.aboutHeading}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-300 font-normal">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* 4 Information Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.infoCards.map((card, index) => {
              const Icon = iconMap[card.icon] || Sparkles;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-[#121216]/70 border border-white/[0.08] hover:border-white/[0.16] transition-all hover:bg-white/[0.03] group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-sky-400 transition-colors mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    {card.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {card.value}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    {card.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
