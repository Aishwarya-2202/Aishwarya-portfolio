import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
];

interface NavbarProps { dark: boolean; toggle: () => void; }

export default function Navbar({ dark, toggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href) as HTMLElement | null);
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)', backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent', borderBottom: scrolled ? `1px solid var(--nav-border)` : '1px solid transparent', transition: 'all 0.3s ease' }}>

      <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
          <span className="gradient-text">AS</span><span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop */}
        <ul className="desk-nav" style={{ display: 'flex', gap: '2.25rem', listStyle: 'none', alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.02em', color: active === link.href ? 'var(--accent)' : 'var(--text-secondary)', position: 'relative', paddingBottom: 2, transition: 'color 0.2s' }}>
                {link.label}
                {active === link.href && (
                  <motion.span layoutId="nav-ul" style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 2, background: 'var(--accent)', borderRadius: 9999 }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button id="dark-mode-toggle" onClick={toggle} aria-label="Toggle dark mode" className="icon-btn" style={{ cursor: 'pointer' }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={dark ? 'sun' : 'moon'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button id="mobile-menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Menu" className="mob-btn icon-btn" style={{ cursor: 'pointer' }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', borderTop: `1px solid var(--nav-border)` }}>
            <ul style={{ listStyle: 'none', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} style={{ fontSize: '0.9rem', fontWeight: 500, color: active === link.href ? 'var(--accent)' : 'var(--text-secondary)' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desk-nav { display: none !important; }
        .mob-btn  { display: flex !important; }
        @media (min-width: 768px) { .desk-nav { display: flex !important; } .mob-btn { display: none !important; } }
      `}</style>
    </motion.header>
  );
}
