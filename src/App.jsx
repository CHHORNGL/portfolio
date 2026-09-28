import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Approach from './sections/Approach';
import CurrentlyExploring from './sections/CurrentlyExploring';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-sky-500/20 selection:text-sky-300">
      {/* Fixed Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Full-screen Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technical Skills Grid */}
        <Skills />

        {/* Selected Projects Showcase */}
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
