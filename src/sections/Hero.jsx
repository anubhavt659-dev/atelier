import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Column definitions — each gets its own image and crop
const columns = [
  {
    id: 'studio',
    label: 'Studio',
    image: '/project_1.png',
    position: 'center center',
  },
  {
    id: 'projects',
    label: 'Projects',
    image: '/project_2.png',
    position: 'center center',
  },
  {
    id: 'philosophy',
    label: 'Philosophy',
    image: '/project_3.png',
    position: 'center top',
  },
  {
    id: 'contact',
    label: 'Contact',
    image: '/project_1.png',
    position: 'right center',
  },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY   = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        left: 0,
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* ── Base hero image (forest pavilion exterior) ── */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          y: imgY,
          scaleY: 1.06,
          scaleX: 1,
          transformOrigin: 'center center',
          zIndex: 0,
        }}
      />

      {/* ── Gradient overlay ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(28,26,22,0.44) 0%, rgba(28,26,22,0.05) 32%, rgba(28,26,22,0.05) 62%, rgba(28,26,22,0.52) 100%)',
      }} />

      {/* ── Blueprint grid ── */}
      <svg
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', opacity: 0.07, zIndex: 2,
        }}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(11)].map((_, i) => (
          <line key={"v"+i}
            x1={`${(i+1)*(100/12)}%`} y1="0"
            x2={`${(i+1)*(100/12)}%`} y2="100%"
            stroke="#F5F1EA" strokeWidth="0.5"
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <line key={"h"+i}
            x1="0" y1={`${(i+1)*(100/6)}%`}
            x2="100%" y2={`${(i+1)*(100/6)}%`}
            stroke="#F5F1EA" strokeWidth="0.5"
          />
        ))}
        <rect x="44" y="44" width="5" height="5" fill="none" stroke="#F5F1EA" strokeWidth="0.5"/>
        <line x1="49" y1="46.5" x2="68" y2="46.5" stroke="#F5F1EA" strokeWidth="0.5"/>
        <line x1="46.5" y1="49" x2="46.5" y2="68" stroke="#F5F1EA" strokeWidth="0.5"/>
        <text x="52" y="40" fill="#F5F1EA" fontSize="7.5" fontFamily="Inter" letterSpacing="2">N 48.51°</text>
      </svg>

      {/* ── Four hover column zones ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 3, display: 'flex',
      }}>
        {columns.map((col, i) => (
          <div
            key={col.id}
            style={{ flex: '1 1 25%', position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => setHovered(col.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollTo(col.id)}
          >
            {/* Per-column overlay — fades in on hover */}
            <AnimatePresence>
              {hovered === col.id && (
                <motion.div
                  key={col.id + '-overlay'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                >
                  {/* Zooming image */}
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1.02 }}
                    exit={{ scale: 1.1 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      backgroundImage: `url(${col.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: col.position,
                      filter: 'brightness(0.72) saturate(0.9)',
                    }}
                  />
                  {/* Very subtle dark vignette so text pops */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(28,26,22,0.18)',
                  }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Thin hairline column divider */}
            {i < columns.length - 1 && (
              <div style={{
                position: 'absolute', top: 0, right: 0, bottom: 0,
                width: '0.5px',
                background: 'rgba(245,241,234,0.12)',
                pointerEvents: 'none', zIndex: 2,
              }} />
            )}
          </div>
        ))}
      </div>

      {/* ── Logo — top left, transparent PNG ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          position: 'absolute', top: '36px', left: '44px',
          zIndex: 10, pointerEvents: 'none',
        }}
      >
        <img
          src="/logo.png"
          alt="Atelier"
          style={{
            height: '60px',
            width: 'auto',
            display: 'block',
            /* transparent PNG — just brighten it to read on dark photo */
            filter: 'invert(1)',
            opacity: 0.92,
          }}
        />
      </motion.div>

      {/* ── Centred navigation row ── */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 9,
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
          opacity: fadeOut,
        }}
      >
        <div style={{ width: '100%', display: 'flex', pointerEvents: 'all' }}>
          {columns.map((col, i) => (
            <motion.button
              key={col.id}
              style={{
                flex: '1 1 25%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '0',
                outline: 'none',
                minWidth: 0,
              }}
              onClick={() => scrollTo(col.id)}
              onMouseEnter={() => setHovered(col.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Index */}
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.22em',
                color: 'rgba(212,171,90,0.65)',
                fontWeight: 300,
                userSelect: 'none',
              }}>
                0{i + 1}
              </span>

              {/* Label */}
              <motion.span
                animate={{ y: hovered === col.id ? -3 : 0 }}
                transition={{ duration: 0.28 }}
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(16px, 2vw, 26px)',
                  fontWeight: 300,
                  letterSpacing: '0.07em',
                  color: hovered === col.id ? '#F5F1EA' : 'rgba(245,241,234,0.65)',
                  transition: 'color 0.3s ease',
                  lineHeight: 1,
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {col.label}
              </motion.span>

              {/* Brass underline */}
              <motion.div
                style={{ height: '0.5px', background: '#B8963E', width: '28px', originX: 0.5 }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: hovered === col.id ? 1 : 0,
                  opacity: hovered === col.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ── Bottom tagline + scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        style={{
          position: 'absolute', bottom: '44px', left: '44px', right: '44px',
          zIndex: 8, pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          opacity: fadeOut,
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px', letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.32)',
          fontWeight: 300,
        }}>
          Architecture & Interior Design
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
          <div style={{
            width: '0.5px', height: '44px',
            background: 'rgba(245,241,234,0.15)',
            position: 'relative', overflow: 'hidden',
          }}>
            <motion.div
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: '#B8963E' }}
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <span style={{
            fontSize: '7px', letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(245,241,234,0.28)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
          }}>
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  )
}
