import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FolderGit2, Layers, Database, ArrowUpRight, MapPin, Terminal } from 'lucide-react';

const metrics = [
  {
    index: '01',
    tag: 'ACADEMIC STANDING',
    title: 'Bachelor of IT',
    highlight: 'Year 3 Student',
    description: 'Undergraduate student at Norton University focusing on practical software engineering, database design, and systems architecture.',
    icon: GraduationCap,
    meta: 'Norton University · Phnom Penh',
    metaIcon: MapPin
  },
  {
    index: '02',
    tag: 'SYSTEMS SHOWCASE',
    title: 'Core Architecture',
    highlight: '04 Engineered Systems',
    description: 'Engineered cross-platform Flutter mobile e-commerce, FastAPI & Oracle MIS, rule-based AgriSystem AI, and Laravel coffee shop POS.',
    icon: FolderGit2,
    meta: 'Mobile · Backend · AI · Web',
    metaIcon: Terminal
  },
  {
    index: '03',
    tag: 'DEVELOPMENT STACK',
    title: 'Core Technologies',
    highlight: 'Flutter · FastAPI · React',
    description: 'Multi-tier stack encompassing reactive mobile development with Dart, asynchronous Python REST APIs, and full-stack web applications with React.',
    icon: Layers,
    meta: 'Dart · Python · PHP · JavaScript',
    metaIcon: Terminal
  },
  {
    index: '04',
    tag: 'ENTERPRISE DATA',
    title: 'Database Architecture',
    highlight: 'Oracle 19c & MySQL',
    description: 'Designing normalized relational schemas, role-based access control (RBAC), and containerizing microservice workflows using Docker.',
    icon: Database,
    meta: 'Relational Schemas · Docker',
    metaIcon: Terminal
  }
];

export default function EngineeringMetricsBento() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-zinc-400 mb-3">
            <span>// TELEMETRY</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">TECHNICAL SNAPSHOT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-mono">
            Engineering & Academic Foundation
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
            Verified focus areas, university standing, and real systems delivered.
          </p>
        </div>

        {/* 4-Card Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            const MetaIcon = item.metaIcon;

            return (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative rounded-2xl bg-[#09090D] border border-white/[0.08] hover:border-white/25 p-5 transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Top Bar: Index + Tag + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      {item.index} // {item.tag}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Highlight & Title */}
                  <div className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-zinc-200 transition-colors">
                    {item.highlight}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5 mb-3">
                    {item.title}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Meta */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <span className="flex items-center gap-1.5 truncate">
                    <MetaIcon className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span className="truncate">{item.meta}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-white shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
