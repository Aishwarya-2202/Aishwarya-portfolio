import { motion } from 'framer-motion';
import { Briefcase, BookOpen } from 'lucide-react';
import { experience, publications } from '../data/resume';

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } } };
const stag = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap section-container">

        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-heading">
          <h2>Experience &amp; <span className="gradient-text">Research</span></h2>
          <div className="section-line" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="exp-grid">

          {/* Timeline */}
          <div>
            <motion.p variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              <Briefcase size={12} style={{ color: 'var(--accent)' }} /> Roles
            </motion.p>

            <motion.div variants={stag} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ position: 'relative', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {experience.map((exp, i) => (
                <motion.div key={i} variants={fade} style={{ position: 'relative' }}>
                  {/* Dot */}
                  <div style={{ position: 'absolute', left: '-2rem', top: 8, width: 12, height: 12, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 12px var(--accent-glow)', border: '2px solid var(--bg-base)' }} />
                  {/* Line */}
                  {i < experience.length - 1 && (
                    <div style={{ position: 'absolute', left: '-1.65rem', top: 22, bottom: '-1.75rem', width: 1, background: 'linear-gradient(to bottom, rgba(20,184,166,0.5), transparent)' }} />
                  )}
                  <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
                      <div>
                        <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{exp.role}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{exp.company}</p>
                      </div>
                      <span style={{ padding: '0.2rem 0.75rem', borderRadius: 9999, fontSize: '0.7rem', fontWeight: 600, flexShrink: 0, background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(20,184,166,0.25)' }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 9 }} />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Publications */}
          <div>
            <motion.p variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              <BookOpen size={12} style={{ color: 'var(--accent)' }} /> Research Publications
            </motion.p>
            <motion.div variants={stag} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {publications.map((pub, i) => (
                <motion.div key={i} variants={fade} className="card" style={{ padding: '1.5rem' }}>
                  <span className="pill" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{pub.status}</span>
                  <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '0.5rem' }}>{pub.title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{pub.venue}</p>
                </motion.div>
              ))}
              {/* Quote */}
              <motion.div variants={fade}
                style={{ padding: '1.5rem', borderRadius: '1.25rem', border: '1px solid rgba(20,184,166,0.25)', background: 'var(--accent-dim)', borderLeft: '3px solid var(--accent)', backdropFilter: 'blur(8px)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.78, fontStyle: 'italic', marginBottom: '0.75rem' }}>
                  "Bridging research and engineering — every project I build is grounded in documented methodology and real-world validation."
                </p>
                <p style={{ color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 700 }}>— Aishwarya S</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 1024px) { .exp-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}
