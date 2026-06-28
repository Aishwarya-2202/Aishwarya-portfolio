import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/resume';

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } } };

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

     try {
    const response = await fetch("https://formspree.io/f/mnjkvzer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      setSent(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 5000);
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};
  

  const socials = [
    { icon: Mail,         label: 'Email',    value: personal.email,   href: `mailto:${personal.email}` },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'aishwarya-s19',  href: personal.linkedin          },
    { icon: GithubIcon,   label: 'GitHub',   value: 'Aishwarya-2202', href: personal.github            },
  ];

  return (
    <section id="contact">
      <div className="section-wrap section-container">

        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="section-heading">
            <h2>Get in <span className="gradient-text">Touch</span></h2>
            <div className="section-line" />
          </div>
          <p className="section-sub" style={{ maxWidth: '38rem' }}>
            Actively looking for internships and full-time roles. Whether you have an opportunity or just want to say hello — my inbox is always open.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="contact-grid">

          {/* Socials */}
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {socials.map(item => (
              <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem' }}>
                <div style={{ width: 42, height: 42, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-dim)', color: 'var(--accent)', flexShrink: 0 }}>
                  <item.icon size={19} />
                </div>
                <div>
                  <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{item.label}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={onSubmit} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-cols">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-name" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Name</label>
                <input id="contact-name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your Name" className="input" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-email" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email</label>
                <input id="contact-email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@email.com" className="input" />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="contact-message" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Message</label>
              <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={onChange}
                placeholder="Tell me about the opportunity or just say hello..." className="input" style={{ resize: 'none' }} />
            </div>

            <motion.button id="contact-submit" type="submit" disabled={loading || sent}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="btn-contact"
              style={{ padding: '0.875rem', borderRadius: '0.875rem', border: 'none', cursor: loading || sent ? 'not-allowed' : 'pointer', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 4px 20px var(--accent-glow)', opacity: loading || sent ? 0.8 : 1, fontFamily: 'var(--font-sans)' }}>
              {loading
                ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                : sent ? <><CheckCircle size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px)  { .form-cols    { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
