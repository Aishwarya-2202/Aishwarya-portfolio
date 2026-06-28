import { useDarkMode } from './hooks/useDarkMode';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Skills     from './components/Skills';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <div style={{ minHeight: '100vh', color: 'var(--text-primary)', position: 'relative' }}>

      {/* ── Fixed portrait background ──────────────────────────
          Real <img> avoids the backdrop-filter / CSS fixed-bg conflict.
          Switches instantly between light and dark portrait.
      ──────────────────────────────────────────────────────── */}
      <img
        key={dark ? 'dark' : 'light'}          /* remount on toggle for instant swap */
        src={dark ? '/pixel-dark.png' : '/pixel-light.png'}
        alt=""
        aria-hidden="true"
        style={{
  position: 'fixed',
  right: '-100px',
  top: '50%',
  transform: 'translateY(-50%)',

  width: '42vw',
  maxWidth: '600px',

  objectFit: 'contain',

  opacity: 0.18,

  filter: `
  grayscale(100%)
  contrast(110%)
  brightness(95%)
  drop-shadow(0 0 120px rgba(255,255,255,0.08))
`,

  maskImage:
    'linear-gradient(to left, black 80%, transparent 100%)',

  WebkitMaskImage:
    'linear-gradient(to left, black 80%, transparent 100%)',

  zIndex: 0,
  pointerEvents: 'none',
  userSelect: 'none',
}}
      />

      {/* ── All page content sits above the portrait ────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar dark={dark} toggle={toggle} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
