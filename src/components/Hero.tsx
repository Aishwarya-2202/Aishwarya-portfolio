import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/resume';

const ROLES = ['Data Science Engineer', 'Front-end Developer', 'ML Researcher', 'Insight Storyteller'];

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing,    setTyping]    = useState(true);

  useEffect(() => {
    const target = ROLES[roleIdx];
    if (typing && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
      return () => clearTimeout(t);
    }
    if (!typing && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 38);
      return () => clearTimeout(t);
    }
    if (typing && displayed.length === target.length) {
      const t = setTimeout(() => setTyping(false), 2200);
      return () => clearTimeout(t);
    }
    if (!typing && displayed.length === 0) {
      setRoleIdx(r => (r + 1) % ROLES.length);
      setTyping(true);
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="section-container" style={{ textAlign: 'center', zIndex: 1 }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.1rem', borderRadius: 9999, border: '1px solid var(--border)', background: 'var(--bg-card)', backdropFilter: 'blur(12px)', color: 'var(--accent-dark)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '0.02em' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#14b8a6', boxShadow: '0 0 8px rgba(20,184,166,0.6)', animation: 'pulse 2s infinite' }} />
          Open to Opportunities · Bengaluru, India
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 9vw, 6.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
          Aishwarya <span className="gradient-text">S</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.95rem, 2.4vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '2rem' }}>
          {displayed}<span className="cursor-blink" style={{ marginLeft: 1, color: 'var(--accent-light)' }}>|</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.6 }}
          style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '40rem', margin: '0 auto 2.75rem', lineHeight: 1.78 }}>
          Turning raw data into clear decisions and building full-stack products that are{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>data‑instrumented from day one.</em>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center', marginBottom: '2.75rem' }}>
          <a id="cta-projects" href="#projects" className="btn-ghost">View Projects</a>
          <a id="cta-contact"  href="#contact"  className="btn-ghost">Get in Touch</a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
          {[
            { href: personal.github,            icon: GithubIcon,   label: 'GitHub'   },
            { href: personal.linkedin,          icon: LinkedinIcon, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail,         label: 'Email'    },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', zIndex: 1 }}>
        <span style={{ fontSize: '0.64rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>scroll</span>
        <ChevronDown size={18} className="scroll-bounce" />
      </motion.div>
    </section>
  );
}
