import React from 'react';
import { Mail, Phone, ArrowUp, ArrowUpRight } from 'lucide-react';
import { Linkedin, Facebook, Github } from './BrandIcons';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      handle: '@CHHORNGL',
      href: personalInfo.contact.github,
      icon: Github,
      isExternal: true
    },
    {
      name: 'LinkedIn',
      handle: 'Chea Cheavchhorng',
      href: personalInfo.contact.linkedin,
      icon: Linkedin,
      isExternal: true
    },
    {
      name: 'Facebook',
      handle: 'CHEAV.CHHORNG',
      href: personalInfo.contact.facebook,
      icon: Facebook,
      isExternal: true
    },
    {
      name: 'Email',
      handle: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      icon: Mail,
      isExternal: false
    },
    {
      name: 'Phone',
      handle: personalInfo.contact.phoneFormatted,
      href: `tel:${personalInfo.contact.phone}`,
      icon: Phone,
      isExternal: false
    }
  ];

  return (
    <footer className="pt-16 pb-12 border-t border-white/[0.08] bg-black font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded bg-white text-black font-mono font-bold text-xs flex items-center justify-center">
                  C
                </div>
                <span className="text-base font-bold tracking-wider text-white">
                  {personalInfo.displayName}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-sans mt-2 max-w-sm">
                Software Developer and {personalInfo.academicYear} Information Technology undergraduate at {personalInfo.university} in {personalInfo.locationDetails}.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>STATUS: AVAILABLE FOR 2026 ROLES & INTERNSHIPS</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-4">
              // SITE INDEX
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-4">
              // DIRECT CHANNELS
            </span>
            <ul className="space-y-2.5 text-xs">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between text-zinc-400 hover:text-white group transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        <span>{item.name}</span>
                      </span>
                      <span className="text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors flex items-center gap-1">
                        <span className="truncate max-w-[140px]">{item.handle}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div>
            <span>© 2026 {personalInfo.displayName} ({personalInfo.fullName}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>PHNOM PENH, CAMBODIA // UTC+7</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
