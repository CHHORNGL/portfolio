import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { Linkedin, Facebook } from '../components/BrandIcons';
import confetti from 'canvas-confetti';
import Button from '../components/Button';
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
      title: 'Email',
      value: contact.email,
      displayValue: contact.email,
      href: `mailto:${contact.email}`,
      buttonText: 'Email Me',
      icon: Mail,
      iconColor: 'text-sky-400',
      iconBg: 'bg-sky-500/10 border-sky-500/20',
      tooltip: 'Email Chea',
      isExternal: false
    },
    {
      id: 'phone',
      title: 'Phone',
      value: contact.phone,
      displayValue: contact.phoneFormatted || contact.phone,
      href: `tel:${contact.phone}`,
      buttonText: 'Call Me',
      icon: Phone,
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      tooltip: 'Call Chea',
      isExternal: false
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: personalInfo.name,
      displayValue: personalInfo.name,
      href: contact.linkedin,
      buttonText: 'Connect on LinkedIn',
      icon: Linkedin,
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      tooltip: 'LinkedIn',
      isExternal: true
    },
    {
      id: 'facebook',
      title: 'Facebook',
      value: personalInfo.name,
      displayValue: personalInfo.name,
      href: contact.facebook,
      buttonText: 'Facebook',
      icon: Facebook,
      iconColor: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20',
      tooltip: 'Facebook',
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

    const subject = encodeURIComponent(formData.subject.trim() || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi Chea,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\n${formData.email.trim()}`
    );

    // Directly open user's email application with the drafted message
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#38BDF8', '#818CF8', '#34D399', '#FFFFFF']
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
    }, 400);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 mb-4 leading-tight">
              {contact.heading}
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              {contact.description}
            </p>
          </motion.div>
        </div>

        {/* 4 Professional Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#121216]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all hover:bg-white/[0.03] flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center ${card.iconBg} ${card.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      Direct Channel
                    </span>
                  </div>

                  {/* Title & Value */}
                  <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    {card.title}
                  </h3>
                  <p
                    className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors break-words mb-6"
                    title={card.tooltip}
                  >
                    {card.displayValue}
                  </p>
                </div>

                {/* Action Button */}
                <Button
                  href={card.href}
                  variant={index === 0 ? 'primary' : 'secondary'}
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full justify-center"
                  aria-label={card.tooltip}
                  title={card.tooltip}
                >
                  {card.buttonText}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Direct Message Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#121216]/80 border border-white/[0.1] shadow-2xl backdrop-blur-xl p-6 sm:p-10 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-sm text-zinc-400">
              Draft your message below to send directly via email, or use any of the contact channels above.
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>
                Your email app has been opened with your message ready to send to {contact.email}.
              </span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Internship Opportunity"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.06] transition-all resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              icon={Send}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
