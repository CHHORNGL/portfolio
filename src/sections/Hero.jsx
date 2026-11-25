import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, GraduationCap, Terminal } from 'lucide-react';
import { Github } from '../components/BrandIcons';
import AbstractHeroVisual from '../components/AbstractHeroVisual';
import { personalInfo } from '../data/personal';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-black"
    >
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 -z-20" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Monospace Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-zinc-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 font-normal">NORTON UNIVERSITY</span>
            </div>

            {/* Author Portrait + Name Header Row */}
            <div className="flex items-center gap-5 sm:gap-6 mb-6">
              {/* Professional Portrait in Minimal Technical Frame */}
              <div className="relative group shrink-0">
                <div
                  className="absolute -inset-1 rounded-2xl bg-white/[0.08] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-white/[0.14] bg-[#0E0E0E] shadow-2xl group-hover:border-white/40 transition-colors duration-300">
                  <img
                    src={profileImg}
                    alt="CHHORNG (Chea Cheavchhorng) - Software Developer"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Identity & Pronunciation */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono leading-none">
                  {personalInfo.displayName}
                </h1>
                <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
                  {personalInfo.fullName} · {personalInfo.academicYear} IT Undergrad
                </p>
                <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-zinc-500">
                  <Terminal className="w-3 h-3 text-sky-400" />
                  <span>Full-Stack · Flutter Mobile · AI Systems</span>
                </div>
              </div>
            </div>

            {/* Large Secondary Heading */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-200 leading-snug mb-5">
              {personalInfo.heroSecondaryHeading}
            </h2>

            {/* Technical Description */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* Minimal Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-mono font-semibold hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
              >
                <span>View Selected Systems</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/[0.1] text-xs sm:text-sm font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/[0.2] text-xs sm:text-sm font-mono transition-colors cursor-pointer"
              >
                <span>Contact Console</span>
              </button>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-zinc-400 pt-6 border-t border-white/[0.08] w-full">
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Phnom Penh, Cambodia
              </span>
              <span>//</span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                Norton University
              </span>
              <span>//</span>
              <span className="text-zinc-400">Indochina Time (UTC+7)</span>
            </div>
          </motion.div>

          {/* Right Column: Technical CLI & Visual */}
          <div className="lg:col-span-5 w-full">
            <AbstractHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
