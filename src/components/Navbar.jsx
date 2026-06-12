import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = ['Studio', 'Projects', 'Philosophy', 'Process', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? '16px 60px' : '28px 60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background 0.5s, padding 0.4s, border-color 0.4s',
          background: scrolled ? 'var(--ivory)' : 'transparent',
          borderBottom: scrolled ? '0.5px solid var(--line)' : '0.5px solid transparent',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}
        >
          <img
            src="/logo.png"
            alt="Atelier"
            style={{
              height: scrolled ? 28 : 32,
              transition: 'height 0.4s, filter 0.4s',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </button>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none' }} className="hidden-mobile">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                  fontWeight: 400,
                  color: scrolled ? 'var(--grey)' : 'rgba(245,241,234,0.65)',
                  transition: 'color 0.3s',
                  padding: 0,
                }}
                onMouseEnter={e => e.target.style.color = scrolled ? 'var(--charcoal)' : 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = scrolled ? 'var(--grey)' : 'rgba(245,241,234,0.65)'}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: 5, padding: 4,
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 0.5,
              background: scrolled ? 'var(--charcoal)' : 'var(--ivory)',
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                : i === 1 ? 'opacity: 0'
                : 'rotate(-45deg) translate(4px, -4px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99,
            background: 'var(--charcoal)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 40,
          }}
        >
          {links.map((l, i) => (
            <motion.button
              key={l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 42, fontWeight: 300,
                color: 'var(--stone)', letterSpacing: '-0.01em',
              }}
            >
              {l}
            </motion.button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
