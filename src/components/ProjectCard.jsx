import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Smartphone,
  ShoppingBag,
  Coffee,
  ShieldCheck,
  Sprout,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectCard({ project, index, onSelect }) {
  const isShoes = project.id === 'shoes-shopping-app';
  const isCoffee = project.id === 'coffee-shop-system';
  const isMIS = project.id === 'management-info-system';
  const isAgri = project.id === 'agricultural-expert-system';

  const [shoeColor, setShoeColor] = useState('mono');
  const [shoeSize, setShoeSize] = useState('42');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-[#09090D] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top 1px Accent Highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-hidden="true"
      />

      {/* Visual Simulation Canvas */}
      <div className="relative min-h-[290px] sm:min-h-[310px] w-full bg-[#060608] overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 grid-pattern opacity-25" />

        {/* Dynamic Graphic Container */}
        <div className="relative z-10 w-full max-w-md transform group-hover:scale-[1.01] transition-transform duration-500 ease-out">
          {/* ========================================================= */}
          {/* 01: Flutter Shoes Shopping App Mockup                     */}
          {/* ========================================================= */}
          {isShoes && (
            <div className="mx-auto w-[270px] sm:w-[285px] rounded-2xl bg-[#0E0E12] border border-white/[0.12] p-3.5 shadow-2xl backdrop-blur-md">
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono pb-2 border-b border-white/[0.06]">
                <span className="font-semibold text-zinc-300">9:41</span>
                <div className="w-14 h-2.5 bg-white/[0.08] rounded-full mx-auto" />
                <span className="flex items-center gap-1 text-white font-semibold">
                  <Smartphone className="w-3 h-3" /> Flutter
                </span>
              </div>

              {/* App Content */}
              <div className="pt-2.5">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-400 font-medium">
                      MOBILE E-COMMERCE
                    </span>
                    <h4 className="text-xs font-bold text-white font-mono">AeroGlide Flutter</h4>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                    <ShoppingBag className="w-3 h-3" />
                  </div>
                </div>

                {/* Sneaker Graphic Card */}
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-white/[0.05] via-transparent to-black p-3 flex flex-col justify-between border border-white/[0.1] overflow-hidden">
                  <div className="flex justify-between items-start z-10">
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.08] text-white font-semibold border border-white/[0.1]">
                      DART 3 // 60 FPS
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 line-through">
                      $185.00
                    </span>
                  </div>

                  {/* Stylized Minimal Vector Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 group-hover:scale-105 transition-transform duration-300">
                    <svg
                      viewBox="0 0 200 90"
                      className="w-40 h-18 filter drop-shadow-[0_6px_12px_rgba(255,255,255,0.15)]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 65 C 30 65, 45 68, 65 67 C 90 65, 120 62, 145 64 C 170 66, 185 64, 190 60 C 193 57, 190 48, 175 42 C 160 37, 150 25, 135 20 C 120 15, 105 28, 90 35 C 75 42, 55 46, 35 48 C 22 50, 15 55, 15 65 Z"
                        fill={shoeColor === 'mono' ? 'url(#monoGrad)' : shoeColor === 'light' ? '#EDEDED' : '#525252'}
                      />
                      <path
                        d="M30 67 C 60 67, 130 66, 185 62"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="85" cy="40" r="2.5" fill="#FFFFFF" opacity="0.8" />
                      <circle cx="100" cy="35" r="2.5" fill="#FFFFFF" opacity="0.8" />
                      <circle cx="115" cy="30" r="2.5" fill="#FFFFFF" opacity="0.8" />
                      <defs>
                        <linearGradient id="monoGrad" x1="0" y1="0" x2="200" y2="90">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="100%" stopColor="#737373" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex items-end justify-between z-10">
                    <span className="text-sm font-extrabold text-white font-mono">$145.00</span>
                    <span className="text-[9px] px-2.5 py-1 rounded-full bg-white text-black font-bold font-mono shadow-sm">
                      Add to Bag
                    </span>
                  </div>
                </div>

                {/* Color Selector & Sizes */}
                <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => setShoeColor('mono')}
                      className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                        shoeColor === 'mono' ? 'ring-2 ring-zinc-400 scale-110' : 'opacity-60'
                      }`}
                      aria-label="Monochrome variant"
                    />
                    <button
                      type="button"
                      onClick={() => setShoeColor('light')}
                      className={`w-3.5 h-3.5 rounded-full bg-zinc-400 transition-transform ${
                        shoeColor === 'light' ? 'ring-2 ring-white scale-110' : 'opacity-60'
                      }`}
                      aria-label="Silver variant"
                    />
                    <button
                      type="button"
                      onClick={() => setShoeColor('dark')}
                      className={`w-3.5 h-3.5 rounded-full bg-zinc-700 transition-transform ${
                        shoeColor === 'dark' ? 'ring-2 ring-white scale-110' : 'opacity-60'
                      }`}
                      aria-label="Obsidian variant"
                    />
                  </div>

                  <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                    {['41', '42', '43'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setShoeSize(size)}
                        className={`text-[9px] px-2 py-0.5 rounded transition-all font-mono ${
                          shoeSize === size
                            ? 'bg-white text-black font-bold'
                            : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                        }`}
                      >
                        EU {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 02: Management Information System (MIS) Mockup            */}
          {/* ========================================================= */}
          {isMIS && (
            <div className="mx-auto w-[290px] sm:w-[325px] rounded-xl bg-[#0E0E12] border border-white/[0.12] p-3.5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span className="text-white">MIS Cluster // RBAC</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-emerald-400 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.08]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Docker: 99.98%</span>
                </div>
              </div>

              {/* User Info Bar */}
              <div className="mt-2.5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 font-mono">
                  <div className="w-5 h-5 rounded bg-white/[0.1] text-white flex items-center justify-center font-bold text-[9px]">
                    CH
                  </div>
                  <div>
                    <span className="text-white font-semibold">CHHORNG // Admin</span>
                    <span className="text-[8.5px] text-zinc-500 block">
                      Oracle 19c Normalized Schema
                    </span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.08] text-white font-mono text-[8.5px]">
                  JWT VERIFIED
                </span>
              </div>

              {/* Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-1.5 mt-2 text-[9px] font-mono">
                <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-zinc-500 block text-[8px]">FastAPI Latency</span>
                  <span className="text-white font-bold text-[10px]">12ms</span>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-zinc-500 block text-[8px]">Oracle Cluster</span>
                  <span className="text-white font-bold text-[10px]">Synced</span>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-zinc-500 block text-[8px]">RBAC Rules</span>
                  <span className="text-white font-bold text-[10px]">24 Active</span>
                </div>
              </div>

              {/* Audit Stream */}
              <div className="mt-2 p-2 rounded-lg bg-black/60 border border-white/[0.04] text-[9px] font-mono space-y-1">
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="text-zinc-200 font-bold">GET</span>
                  <span className="truncate max-w-[140px]">/api/v1/inventory/query</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="text-zinc-200 font-bold">POST</span>
                  <span className="truncate max-w-[140px]">/api/v1/auth/jwt-token</span>
                  <span className="text-emerald-400">201 OK</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 03: Integrated Agricultural Expert System Mockup          */}
          {/* ========================================================= */}
          {isAgri && (
            <div className="mx-auto w-[290px] sm:w-[325px] rounded-xl bg-[#0E0E12] border border-white/[0.12] p-3.5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                  <Sprout className="w-3.5 h-3.5 text-white" />
                  <span className="text-white">AgriDecision AI // Rule Engine</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white">
                  Forward Chaining
                </span>
              </div>

              <div className="mt-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-300">Target: Jasmine Rice (Oryza)</span>
                  <span className="text-white font-extrabold text-[10px]">
                    94.6% Confidence
                  </span>
                </div>

                <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-white h-1.5 rounded-full" style={{ width: '94.6%' }} />
                </div>

                <div className="p-1.5 rounded bg-black/50 border border-white/[0.04] text-[9px] text-zinc-300 space-y-0.5 font-mono">
                  <div className="text-white font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    Rule #14 Inference Triggered:
                  </div>
                  <p className="text-zinc-400 text-[8.5px] leading-tight">
                    Soil moisture deficiency paired with fungal spot indicators.
                  </p>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono pt-0.5">
                  <span className="text-zinc-500">Advisory:</span>
                  <span className="text-zinc-200">Regulate Irrigation + Foliar Spray</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 04: Laravel Coffee Shop POS System Mockup                 */}
          {/* ========================================================= */}
          {isCoffee && (
            <div className="mx-auto w-[290px] sm:w-[325px] rounded-xl bg-[#0E0E12] border border-white/[0.12] p-3.5 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                  <Coffee className="w-3.5 h-3.5 text-white" />
                  <span className="text-white">Cafe POS Admin // Shift #01</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-white text-[9px] font-mono">
                  Live Counter
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2.5 font-mono">
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.06] text-[10px]">
                    <div className="text-white font-semibold">Iced Caramel Latte</div>
                    <div className="text-zinc-500 text-[8.5px]">$3.50 · In Stock: 42</div>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.06] text-[10px]">
                    <div className="text-white font-semibold">Nitro Cold Brew</div>
                    <div className="text-zinc-500 text-[8.5px]">$4.00 · In Stock: 28</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between text-[10px]">
                  <div>
                    <span className="text-[8.5px] text-zinc-500">Current Order:</span>
                    <div className="text-white font-extrabold text-sm mt-0.5">$7.50</div>
                    <span className="text-[8px] text-zinc-400 block">
                      Auto Inventory Sync
                    </span>
                  </div>
                  <span className="text-[9px] text-center py-1 rounded bg-white text-black font-bold mt-1.5 shadow-sm">
                    Pay & Print POS
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Index + Category Tag */}
          <div className="flex items-center justify-between mb-2 font-mono">
            <span className="text-xs text-zinc-400 font-bold tracking-widest">
              SYSTEM {project.number}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 font-mono group-hover:text-zinc-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-zinc-500 mb-3">{project.subtitle}</p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-300 group-hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Features Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 font-mono">
            {project.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-1.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons / Actions */}
        <div
          className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 font-mono"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-wrap items-center gap-2">
            {project.buttons.github ? (
              <a
                href={project.buttons.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/30 hover:bg-white/[0.08] text-xs text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-zinc-400" />
                <span>GitHub Source</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-zinc-600 select-none">
                <Github className="w-3.5 h-3.5 text-zinc-700" />
                Repository in Review
              </span>
            )}

            {project.buttons.viewProject && (
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
              >
                <span>Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="View project details"
          >
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
