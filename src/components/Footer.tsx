import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-elevated)', backdropFilter: 'blur(16px)', padding: '2.5rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
            <span className="gradient-text">AS</span><span style={{ color: 'var(--accent)' }}>.</span>
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>© {year} · Crafted with care in Bengaluru</p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          {[
            { href: personal.github,            icon: GithubIcon,   label: 'GitHub'   },
            { href: personal.linkedin,          icon: LinkedinIcon, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail,         label: 'Email'    },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
              <Icon size={16} />
            </a>
          ))}
        </div>

        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          {['About', 'Projects', 'Skills', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: '0.78rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
