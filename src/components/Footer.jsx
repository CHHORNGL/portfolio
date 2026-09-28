import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { Linkedin, Facebook } from './BrandIcons';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      tooltip: 'LinkedIn',
      href: personalInfo.contact.linkedin,
      icon: Linkedin,
      isExternal: true
    },
    {
      name: 'Facebook',
      tooltip: 'Facebook',
      href: personalInfo.contact.facebook,
      icon: Facebook,
      isExternal: true
    },
    {
      name: 'Email',
      tooltip: 'Email Chea',
      href: `mailto:${personalInfo.contact.email}`,
      icon: Mail,
      isExternal: false
    },
    {
      name: 'Phone',
      tooltip: 'Call Chea',
      href: `tel:${personalInfo.contact.phone}`,
      icon: Phone,
      isExternal: false
    }
  ];

  return (
    <footer className="pt-16 pb-12 border-t border-white/[0.08] bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-xl font-bold tracking-tight text-white">CC</span>
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            </div>
            <p className="text-sm font-semibold text-white">
              {personalInfo.name}
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              {personalInfo.role} · {personalInfo.university}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={item.tooltip}
                  title={item.tooltip}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-sky-400/40 hover:text-sky-300 flex items-center justify-center text-zinc-400 transition-all duration-200 group relative"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              );
            })}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
