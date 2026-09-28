import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Layers,
  Smartphone,
  Cpu,
  Database
} from 'lucide-react';
import { Github } from './BrandIcons';
import Button from './Button';

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
          className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#101014] border border-white/[0.12] shadow-2xl p-6 sm:p-8 text-white custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-semibold text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                {project.number} · {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              {project.subtitle}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Interactive Mockup / Screenshots Section */}
          <div className="mb-8 p-4 sm:p-6 rounded-xl bg-black/50 border border-white/[0.08] overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                System Architecture & Interface Preview
              </span>
              <span>Simulation Mode</span>
            </div>

            {/* Content preview simulation */}
            {project.id === 'shoes-shopping-app' && (
              <div className="bg-[#15151c] rounded-lg p-5 border border-white/[0.06] flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-full sm:w-48 h-40 bg-gradient-to-tr from-sky-900/30 to-blue-900/20 rounded-xl border border-sky-500/20 flex flex-col items-center justify-center text-center p-3">
                  <Smartphone className="w-8 h-8 text-sky-400 mb-2" />
                  <p className="text-xs font-medium text-white">Flutter Mobile UI</p>
                  <p className="text-[10px] text-zinc-400 mt-1">Cross-Platform iOS & Android</p>
                </div>
                <div className="flex-1 space-y-2 text-xs text-zinc-300">
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Catalog Filtration & State</span>
                    <span className="text-emerald-400 font-mono">Clean Widget Tree</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Local Favorites & Cart Sync</span>
                    <span className="text-sky-400 font-mono">Reactive Store</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>User Authentication Flow</span>
                    <span className="text-purple-400 font-mono">Encrypted Tokens</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'coffee-shop-system' && (
              <div className="bg-[#15151c] rounded-lg p-5 border border-white/[0.06] flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-full sm:w-48 h-40 bg-gradient-to-tr from-amber-900/30 to-orange-900/20 rounded-xl border border-amber-500/20 flex flex-col items-center justify-center text-center p-3">
                  <Layers className="w-8 h-8 text-amber-400 mb-2" />
                  <p className="text-xs font-medium text-white">Cafe POS & Inventory</p>
                  <p className="text-[10px] text-zinc-400 mt-1">Laravel + Tailwind CSS</p>
                </div>
                <div className="flex-1 space-y-2 text-xs text-zinc-300">
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Cashier Ordering & Bill Print</span>
                    <span className="text-amber-400 font-mono">Real-time Calculation</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Automatic Stock Deduction</span>
                    <span className="text-emerald-400 font-mono">MySQL Transactions</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Admin Revenue Dashboard</span>
                    <span className="text-sky-400 font-mono">Daily Analytics</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'management-info-system' && (
              <div className="bg-[#15151c] rounded-lg p-5 border border-white/[0.06] flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-full sm:w-48 h-40 bg-gradient-to-tr from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/20 flex flex-col items-center justify-center text-center p-3">
                  <Database className="w-8 h-8 text-indigo-400 mb-2" />
                  <p className="text-xs font-medium text-white">Enterprise MIS API</p>
                  <p className="text-[10px] text-zinc-400 mt-1">FastAPI + Oracle + Docker</p>
                </div>
                <div className="flex-1 space-y-2 text-xs text-zinc-300">
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Role-Based Access Control</span>
                    <span className="text-indigo-400 font-mono">Admin / Manager RBAC</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Enterprise Relational Engine</span>
                    <span className="text-purple-400 font-mono">Oracle Schema</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Asynchronous Endpoints</span>
                    <span className="text-emerald-400 font-mono">FastAPI Async Core</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'agricultural-expert-system' && (
              <div className="bg-[#15151c] rounded-lg p-5 border border-white/[0.06] flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-full sm:w-48 h-40 bg-gradient-to-tr from-emerald-900/30 to-teal-900/20 rounded-xl border border-emerald-500/20 flex flex-col items-center justify-center text-center p-3">
                  <Cpu className="w-8 h-8 text-emerald-400 mb-2" />
                  <p className="text-xs font-medium text-white">Expert Inference Engine</p>
                  <p className="text-[10px] text-zinc-400 mt-1">Python AI & Decision Support</p>
                </div>
                <div className="flex-1 space-y-2 text-xs text-zinc-300">
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Inference Logic Model</span>
                    <span className="text-emerald-400 font-mono">Forward Chaining</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Crop Advisory Knowledge Base</span>
                    <span className="text-teal-400 font-mono">Rice & Regional Crops</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.05] flex justify-between">
                    <span>Decision Rationale & Remedies</span>
                    <span className="text-sky-400 font-mono">Step-by-Step Guidance</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2 font-mono">
                The Problem
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 font-mono">
                The Solution
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-2">Project Overview</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="text-xs text-zinc-500 font-mono">
              Designed & Engineered by Chea Cheavchhorng
            </div>
            <div className="flex items-center gap-3">
              {project.buttons.github ? (
                <Button
                  href={project.buttons.github}
                  variant="secondary"
                  size="sm"
                  icon={Github}
                  iconPosition="left"
                >
                  GitHub Repository
                </Button>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 select-none">
                  <Github className="w-3.5 h-3.5 text-zinc-500" />
                  Repository coming soon
                </span>
              )}
              <Button onClick={onClose} variant="primary" size="sm">
                Close View
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
