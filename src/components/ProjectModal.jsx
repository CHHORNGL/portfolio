import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Layers,
  Smartphone,
  Cpu,
  Database,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0A0A0E] border border-white/[0.12] shadow-2xl p-6 sm:p-8 text-white custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-semibold text-zinc-300 px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.1]">
                SYSTEM {project.number} // {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-mono">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-400">
              {project.subtitle}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Technical Architecture Breakdown */}
          <div className="mb-8 p-5 sm:p-6 rounded-xl bg-black border border-white/[0.08]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Architecture & Implementation Architecture
              </span>
              <span>VERIFIED STACK</span>
            </div>

            {/* Custom Preview Matrix */}
            {project.id === 'shoes-shopping-app' && (
              <div className="bg-[#0E0E12] rounded-lg p-4 border border-white/[0.06] flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-44 h-32 bg-white/[0.03] rounded-lg border border-white/[0.08] flex flex-col items-center justify-center text-center p-3">
                  <Smartphone className="w-7 h-7 text-white mb-2" />
                  <p className="text-xs font-mono font-medium text-white">Flutter Mobile</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">iOS & Android Build</p>
                </div>
                <div className="flex-1 space-y-2 text-xs font-mono text-zinc-300 w-full">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Component Tree</span>
                    <span className="text-white">Clean Widget State</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Cart Calculation</span>
                    <span className="text-white">Reactive Store</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Rendering Frame Rate</span>
                    <span className="text-emerald-400">60 FPS Native</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'management-info-system' && (
              <div className="bg-[#0E0E12] rounded-lg p-4 border border-white/[0.06] flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-44 h-32 bg-white/[0.03] rounded-lg border border-white/[0.08] flex flex-col items-center justify-center text-center p-3">
                  <Database className="w-7 h-7 text-white mb-2" />
                  <p className="text-xs font-mono font-medium text-white">FastAPI & Oracle 19c</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">Docker Containerized</p>
                </div>
                <div className="flex-1 space-y-2 text-xs font-mono text-zinc-300 w-full">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Authentication</span>
                    <span className="text-white">JWT + Multi-Role RBAC</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Database Engine</span>
                    <span className="text-white">Oracle 19c Normalized</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Average API Response</span>
                    <span className="text-emerald-400">12ms Latency</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'agricultural-expert-system' && (
              <div className="bg-[#0E0E12] rounded-lg p-4 border border-white/[0.06] flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-44 h-32 bg-white/[0.03] rounded-lg border border-white/[0.08] flex flex-col items-center justify-center text-center p-3">
                  <Cpu className="w-7 h-7 text-white mb-2" />
                  <p className="text-xs font-mono font-medium text-white">AI Expert Engine</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">Forward-Chaining</p>
                </div>
                <div className="flex-1 space-y-2 text-xs font-mono text-zinc-300 w-full">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Inference Logic</span>
                    <span className="text-white">Forward Chaining</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Target Specimen</span>
                    <span className="text-white">Jasmine Rice (Oryza)</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Diagnostic Confidence</span>
                    <span className="text-emerald-400">94.6% Confidence</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'coffee-shop-system' && (
              <div className="bg-[#0E0E12] rounded-lg p-4 border border-white/[0.06] flex flex-col sm:flex-row gap-4 items-center">
                <div className="w-full sm:w-44 h-32 bg-white/[0.03] rounded-lg border border-white/[0.08] flex flex-col items-center justify-center text-center p-3">
                  <Layers className="w-7 h-7 text-white mb-2" />
                  <p className="text-xs font-mono font-medium text-white">Laravel 11 POS</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">MySQL Relational</p>
                </div>
                <div className="flex-1 space-y-2 text-xs font-mono text-zinc-300 w-full">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Dual Role</span>
                    <span className="text-white">Cashier POS + Admin</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Inventory Sync</span>
                    <span className="text-white">Automated Deduction</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex justify-between">
                    <span>Database</span>
                    <span className="text-emerald-400">MySQL Transactional</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2 font-mono">
                // 01. THE PROBLEM
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-2 font-mono">
                // 02. THE SOLUTION
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2 font-bold">
              // 03. SYSTEM OVERVIEW
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 font-bold">
              // 04. CORE CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08] font-mono">
            <div className="text-[11px] text-zinc-500">
              ENGINEERED BY CHHORNG · NORTON UNIVERSITY
            </div>
            <div className="flex items-center gap-2">
              {project.buttons.github ? (
                <a
                  href={project.buttons.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-xs text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-zinc-600 select-none">
                  <Github className="w-3.5 h-3.5 text-zinc-700" />
                  Repository In Review
                </span>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
