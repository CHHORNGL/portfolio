import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Smartphone, Server, Cpu, Coffee } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

const filterCategories = [
  { id: 'all', label: 'All Systems', tag: 'ALL', icon: Layers },
  { id: 'mobile', label: 'Mobile (Flutter)', tag: 'MOBILE', icon: Smartphone },
  { id: 'backend', label: 'Enterprise & Backend', tag: 'ENTERPRISE', icon: Server },
  { id: 'ai', label: 'AI & Systems', tag: 'AI', icon: Cpu },
  { id: 'web', label: 'Web & POS', tag: 'WEB', icon: Coffee }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.categoryTag === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs text-zinc-400 font-semibold tracking-widest uppercase">
              // 03. ENGINEERING SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-1 font-mono">
              Featured Systems & Applications
            </h2>
            <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2">
              Cross-platform mobile apps in Flutter, asynchronous backend APIs with Oracle, and rule-based diagnostic AI.
            </p>
          </motion.div>

          {/* Quick Counter */}
          <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] self-start md:self-auto font-mono text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>INDEX: {filteredProjects.length} / {projects.length} SYSTEMS</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar select-none">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            const count =
              cat.id === 'all'
                ? projects.length
                : projects.filter((p) => p.categoryTag === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#09090D] text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-zinc-500'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-black/10 text-black font-bold' : 'bg-white/[0.06] text-zinc-500'
                  }`}
                >
                  0{count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 2 columns on desktop */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
