import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import Button from '../components/Button';
import AbstractHeroVisual from '../components/AbstractHeroVisual';
import { personalInfo } from '../data/personal';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Subtle Background Lighting & Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 -z-20" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-medium text-sky-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>{personalInfo.taglineBadge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
              {personalInfo.heroHeading}
            </h1>

            {/* Large Secondary Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-300 leading-snug mb-6">
              {personalInfo.heroSecondaryHeading}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => scrollTo('projects')}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                onClick={() => scrollTo('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Under-buttons Subtext */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-medium">
              <span className="inline-flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Based in Cambodia
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 text-zinc-400">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                Norton University
              </span>
              <span>·</span>
              <span className="text-zinc-400">IT Student</span>
            </div>
          </motion.div>

          {/* Right Column: Abstract Developer Visual */}
          <div className="lg:col-span-5 w-full">
            <AbstractHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
