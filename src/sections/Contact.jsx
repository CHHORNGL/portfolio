import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { Linkedin, Facebook, Github } from '../components/BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personal';

export default function Contact() {
  const { contact } = personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const contactCards = [
    {
      id: 'email',
      title: 'EMAIL // DIRECT',
      value: contact.email,
      href: `mailto:${contact.email}`,
      buttonText: 'Draft Email',
      icon: Mail,
      isExternal: false
    },
    {
      id: 'phone',
      title: 'PHONE // VOICE',
      value: contact.phoneFormatted || contact.phone,
      href: `tel:${contact.phone}`,
      buttonText: 'Call Direct',
      icon: Phone,
      isExternal: false
    },
    {
      id: 'github',
      title: 'GITHUB // PROFILE',
      value: '@CHHORNGL',
      href: contact.github,
      buttonText: 'View Repos',
      icon: Github,
      isExternal: true
    },
    {
      id: 'linkedin',
      title: 'LINKEDIN // NETWORK',
      value: personalInfo.name,
      href: contact.linkedin,
      buttonText: 'Connect',
      icon: Linkedin,
      isExternal: true
    },
    {
      id: 'facebook',
      title: 'FACEBOOK // PROFILE',
      value: personalInfo.name,
      href: contact.facebook,
      buttonText: 'Message',
      icon: Facebook,
      isExternal: true
    }
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(formData.subject.trim() || 'Software Inquiry - CHHORNG');
    const body = encodeURIComponent(
      `Hi CHHORNG,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\n${formData.email.trim()}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#FFFFFF', '#D4D4D4', '#737373', '#38BDF8']
        });
      } catch {
        // Confetti fallback
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setIsSuccess(false), 8000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-zinc-400 font-semibold tracking-widest uppercase">
              // 07. COMMUNICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 font-mono tracking-tight">
              Direct Contact Console
            </h2>
            <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2 max-w-xl">
              Open to internships, software development opportunities, and technical projects.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-[#09090D] border border-white/[0.08] hover:border-white/25 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {card.title}
                    </span>
                    <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs font-mono font-bold text-white group-hover:text-zinc-200 transition-colors truncate">
                    {card.value}
                  </p>
                </div>

                <a
                  href={card.href}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noopener noreferrer' : undefined}
                  className="mt-4 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <span>{card.buttonText}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Message Console Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#09090D] border border-white/[0.08] shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto"
        >
          <div className="mb-8 font-mono">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
              // DISPATCH CONSOLE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Draft your inquiry below to trigger a direct email dispatch to {contact.email}.
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.15] text-zinc-200 flex items-center gap-3 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>
                Your email client has been prepared with your message to {contact.email}.
              </span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Name // Sender *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060608] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Email // Reply-To *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060608] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all font-mono"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-[11px] text-zinc-400 uppercase tracking-wider mb-2"
              >
                Subject // Topic
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Software Development Opportunity / Internship"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060608] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all font-mono"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] text-zinc-400 uppercase tracking-wider mb-2"
              >
                Message // Payload *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060608] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all resize-none font-mono"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-xs font-mono font-semibold hover:bg-zinc-200 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'DISPATCHING...' : 'DISPATCH MESSAGE'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
