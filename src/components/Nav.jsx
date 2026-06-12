import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const navLinks = ['Studio', 'Projects', 'Philosophy', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: scrolled ? '16px 60px' : '28px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: scrolled ? 'rgba(245,241,234,0.97)' : 'transparent',
          borderBottom: scrolled ? '0.5px solid rgba(28,26,22,0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'padding 0.4s ease, background-color 0.5s ease, border-color 0.5s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '17px',
            fontWeight: 400,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: scrolled ? 'var(--charcoal)' : 'var(--ivory)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.4s',
          }}
        >
          Atelier
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }}
            className="hidden-mobile">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: scrolled ? 'var(--grey)' : 'rgba(245,241,234,0.65)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 400,
                  transition: 'color 0.3s',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--brass)'}
                onMouseLeave={e => e.target.style.color = scrolled ? 'var(--grey)' : 'rgba(245,241,234,0.65)'}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '0.5px',
              background: scrolled ? 'var(--charcoal)' : 'var(--ivory)',
              transition: 'transform 0.3s, opacity 0.3s',
              transformOrigin: 'center',
              transform: menuOpen
                ? i === 0 ? 'translateY(5.5px) rotate(45deg)'
                : i === 1 ? 'scaleX(0)'
                : 'translateY(-5.5px) rotate(-45deg)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none' }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          backgroundColor: 'var(--charcoal)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '40px',
        }}
      >
        {navLinks.map((link, i) => (
          <motion.button
            key={link}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => scrollTo(link.toLowerCase())}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '42px', fontWeight: 300,
              color: 'var(--stone)', background: 'none',
              border: 'none', cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}
          >
            {link}
          </motion.button>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
