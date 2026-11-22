import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechMarquee from './components/TechMarquee';
import EngineeringMetricsBento from './components/EngineeringMetricsBento';
import About from './sections/About';
import Skills from './sections/Skills';
import GitHubContributionHeatmap from './components/GitHubContributionHeatmap';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Approach from './sections/Approach';
import CurrentlyExploring from './sections/CurrentlyExploring';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white/20 selection:text-white">
      {/* Fixed Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Full-screen Hero Section with Profile Portrait */}
        <Hero />

        {/* Technology Marquee Banner */}
        <TechMarquee />

        {/* Engineering & Academic Metrics Bento Grid */}
        <EngineeringMetricsBento />

        {/* About Section with Developer Portrait */}
        <About />

        {/* Technical Skills Grid */}
        <Skills />

        {/* Real GitHub Contribution Heatmap */}
        <GitHubContributionHeatmap />

        {/* Selected Projects Showcase with Interactive Previews */}
        <Projects />

        {/* Education Timeline */}
        <Education />

        {/* Development Approach */}
        <Approach />

        {/* Currently Exploring */}
        <CurrentlyExploring />

        {/* Contact CTA & Interactive Form */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
