import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/resume';

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const stag = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap section-container">

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <div className="section-line" />
          </div>

          <p className="section-sub">
            End-to-end work spanning data engineering, ML research, and full-stack products.
          </p>
        </motion.div>

        <motion.div
          variants={stag}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid-3"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={fade}
              whileHover={{
                y: -6,
                transition: { duration: 0.22 },
              }}
              className="card project-card"
            >

              <div className="project-card-topline" />

              <div className="project-card-header">

                {/* Icon Badge */}
                <div className="project-card-badge">
                  {proj.title[0]}
                </div>

                {/* Year */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.4rem',
                  }}
                >
                  {proj.year}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    marginBottom: '0.25rem',
                  }}
                >
                  {proj.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.875rem',
                    fontStyle: 'italic',
                  }}
                >
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.83rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.72,
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="project-card-tags">
                  {proj.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="project-card-meta">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <GithubIcon size={14} />
                    Repository
                  </a>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn project-card-icon-btn"
                    aria-label="Open project"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}