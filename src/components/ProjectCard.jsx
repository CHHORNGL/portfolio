import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Smartphone,
  ShoppingBag,
  Coffee,
  ShieldCheck,
  Sprout
} from 'lucide-react';
import { Github } from './BrandIcons';
import Button from './Button';

export default function ProjectCard({ project, index, onSelect }) {
  const isShoes = project.id === 'shoes-shopping-app';
  const isCoffee = project.id === 'coffee-shop-system';
  const isMIS = project.id === 'management-info-system';
  const isAgri = project.id === 'agricultural-expert-system';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-[#111116]/80 border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Subtle top gradient accent glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Visual Screenshot / Simulation Canvas */}
      <div className="relative h-64 sm:h-72 w-full bg-[#0A0A0E] overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-6">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Dynamic Mockup Graphic Container */}
        <div className="relative z-10 w-full max-w-sm transform group-hover:scale-105 transition-transform duration-500 ease-out">
          {/* 01: Flutter Shoes Shopping App Mockup */}
          {isShoes && (
            <div className="mx-auto w-56 rounded-2xl bg-[#181820] border border-white/[0.12] p-3 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pb-2 border-b border-white/[0.06]">
                <span>9:41</span>
                <span className="flex items-center gap-1 text-sky-400">
                  <Smartphone className="w-3 h-3" /> Flutter
                </span>
                <span>100%</span>
              </div>
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-white">Featured Footwear</span>
                  <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="h-20 rounded-xl bg-gradient-to-br from-sky-500/20 via-blue-600/10 to-transparent p-2.5 flex flex-col justify-between border border-sky-500/20">
                  <span className="text-[9px] font-mono text-sky-300">AeroGlide Pro</span>
                  <div className="flex items-end justify-between">
                    <span className="text-xs font-bold text-white">$145.00</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-400 text-black font-semibold">
                      Add to Cart
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5 mt-2 justify-center">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300">EU 41</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">EU 42</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300">EU 43</span>
                </div>
              </div>
            </div>
          )}

          {/* 02: Laravel Coffee Shop POS System Mockup */}
          {isCoffee && (
            <div className="mx-auto w-72 rounded-xl bg-[#181820] border border-white/[0.12] p-3 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-white">Cafe POS Admin</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[9px] font-mono">
                  Live Shift
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px]">
                    <div className="text-white font-medium">Ice Latte</div>
                    <div className="text-zinc-400 text-[9px]">$3.20 · Stock: 42</div>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px]">
                    <div className="text-white font-medium">Americano</div>
                    <div className="text-zinc-400 text-[9px]">$2.50 · Stock: 88</div>
                  </div>
                </div>
                <div className="p-2 rounded bg-amber-950/20 border border-amber-500/20 flex flex-col justify-between text-[10px]">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400">Current Order</span>
                    <div className="text-white font-bold text-xs mt-1">$8.90</div>
                  </div>
                  <span className="text-[9px] text-center py-1 rounded bg-amber-500 text-black font-semibold mt-2">
                    Checkout POS
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 03: FastAPI & Oracle MIS Mockup */}
          {isMIS && (
            <div className="mx-auto w-72 rounded-xl bg-[#181820] border border-white/[0.12] p-3 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-indigo-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="font-semibold text-white">MIS Portal · RBAC</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400">Docker: OK</span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="p-2 rounded bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-between text-[10px]">
                  <div>
                    <span className="text-[9px] text-indigo-300 font-mono">User: Admin_01</span>
                    <p className="text-white font-medium">Oracle Database Cluster</p>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[9px]">
                    Authorized
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[9px] text-center font-mono">
                  <div className="p-1 rounded bg-white/[0.04]">
                    <span className="text-zinc-400 block text-[8px]">Inventory</span>
                    <span className="text-white font-semibold">1,420</span>
                  </div>
                  <div className="p-1 rounded bg-white/[0.04]">
                    <span className="text-zinc-400 block text-[8px]">Orders</span>
                    <span className="text-white font-semibold">98.4%</span>
                  </div>
                  <div className="p-1 rounded bg-white/[0.04]">
                    <span className="text-zinc-400 block text-[8px]">Latency</span>
                    <span className="text-emerald-400 font-semibold">14ms</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 04: Agricultural Expert System Mockup */}
          {isAgri && (
            <div className="mx-auto w-72 rounded-xl bg-[#181820] border border-white/[0.12] p-3 shadow-2xl">
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Sprout className="w-3.5 h-3.5" />
                  <span className="font-semibold text-white">Agri-Expert Engine</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-300">Rule-Based AI</span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/20 text-[10px]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] text-zinc-400">Target Crop: Rice (Oryza)</span>
                    <span className="text-emerald-400 font-bold text-[9px]">Confidence: 94%</span>
                  </div>
                  <p className="text-xs font-semibold text-white">Diagnostic Recommendation</p>
                  <p className="text-[9px] text-zinc-300 mt-0.5">
                    Forward-chaining inference triggered advisory for moisture management.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Number and Category */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider">
              {project.number}
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 my-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-zinc-300 group-hover:border-sky-500/30 group-hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Features Highlights Checklist */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {project.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-1.5 text-xs text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons / Actions */}
        <div
          className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-wrap items-center gap-2">
            {project.buttons.github ? (
              <Button
                href={project.buttons.github}
                variant="secondary"
                size="sm"
                icon={Github}
                iconPosition="left"
              >
                GitHub →
              </Button>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 select-none">
                <Github className="w-3.5 h-3.5 text-zinc-500" />
                Repository coming soon
              </span>
            )}

            {project.buttons.viewProject && (
              <Button
                onClick={() => onSelect(project)}
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
              >
                View Project →
              </Button>
            )}
          </div>

          {/* Expand details trigger arrow */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="View project details"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
