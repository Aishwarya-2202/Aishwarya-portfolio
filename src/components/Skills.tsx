import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { skills, certifications } from '../data/resume';

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } } };
const stag = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap section-container">

        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="section-heading">
            <h2>Skills &amp; <span className="gradient-text">Expertise</span></h2>
            <div className="section-line" />
          </div>
          <p className="section-sub">Technical toolkit across data science, ML, and full-stack engineering.</p>
        </motion.div>

        {/* Skill cards */}
        <motion.div variants={stag} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
          className="grid-3" style={{ marginBottom: '4.5rem' }}>
          {Object.entries(skills).map(([cat, items]) => (
            <motion.div key={cat} variants={fade} whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card" style={{ padding: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: '1rem' }}>{cat}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {items.map(skill => <span key={skill} className="pill">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.h3 variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          <BadgeCheck size={20} style={{ color: 'var(--accent)' }} /> Certifications
        </motion.h3>

        <motion.div variants={stag} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-3">
          {certifications.map((cert, i) => (
            <motion.div key={i} variants={fade}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--bg-card)', backdropFilter: 'blur(8px)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(20,184,166,0.5)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}>
              <BadgeCheck size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.83rem', color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '0.2rem' }}>{cert.name}</p>
                <p style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>{cert.issuer}{cert.year ? ` · ${cert.year}` : ''}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
