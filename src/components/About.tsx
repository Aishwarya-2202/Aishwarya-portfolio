import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { personal, education } from '../data/resume';

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } } };
const stag = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap section-container">

        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-heading">
          <h2>About <span className="gradient-text">Me</span></h2>
          <div className="section-line" />
        </motion.div>
        <p className="section-sub">Final-year CSE (Data Science) student — bridging data, ML, and front-end developer .</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="about-grid">

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.p variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontSize: '1.05rem', lineHeight: 1.82, color: 'var(--text-secondary)' }}>
              {personal.summary}
            </motion.p>
            <motion.p variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ lineHeight: 1.82, color: 'var(--text-secondary)' }}>
              My work spans{' '}
              <strong style={{ color: 'var(--text-primary)' }}>data engineering</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>machine learning</strong>, and{' '}
              <strong style={{ color: 'var(--text-primary)' }}>front-end development</strong>.
              I've built a blockchain-based academic verification dApp accepted for SCOPUS publication,
              and a live job-tracking product deployed on Vercel with embedded analytics.
            </motion.p>

            {/* Contact chips */}
            <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {[
                { icon: MapPin, text: personal.location },
                { icon: Mail,   text: personal.email,  href: `mailto:${personal.email}` },
                { icon: Phone,  text: personal.phone,  href: `tel:${personal.phone}`    },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href ?? '#'}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.9rem', borderRadius: 9999, border: '1px solid var(--border)', background: 'var(--bg-card)', backdropFilter: 'blur(8px)', color: 'var(--text-muted)', fontSize: '0.8rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                  <Icon size={12} style={{ color: 'var(--accent)', flexShrink: 0 }} />{text}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <motion.h3 variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              <GraduationCap size={20} style={{ color: 'var(--accent)' }} /> Education
            </motion.h3>
            <motion.div variants={stag} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {education.map((edu, i) => (
                <motion.div key={i} variants={fade} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{edu.degree}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{edu.institution}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span className="pill">{edu.grade}</span>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '0.3rem' }}>{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}
