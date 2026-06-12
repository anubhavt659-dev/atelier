import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const principles = [
  {
    code: 'F — 01',
    name: 'Form',
    desc: 'Form must arise from programme, not precede it. The shape of a building is the diagram of its use, made beautiful.',
    glyph: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="2" y="2" width="40" height="40" stroke="#1C1A16" strokeWidth="0.75"/>
        <line x1="2" y1="22" x2="42" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="22" y1="2" x2="22" y2="42" stroke="#1C1A16" strokeWidth="0.4"/>
      </svg>
    ),
  },
  {
    code: 'S — 02',
    name: 'Space',
    desc: 'Space is not the void between walls. It is a material in its own right — as carefully considered as concrete or timber.',
    glyph: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="#1C1A16" strokeWidth="0.75"/>
        <circle cx="22" cy="22" r="7" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="2" y1="22" x2="15" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="29" y1="22" x2="42" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
      </svg>
    ),
  },
  {
    code: 'L — 03',
    name: 'Light',
    desc: 'Natural light is the most transformative architectural element. We design buildings around its daily and seasonal movement.',
    glyph: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <line x1="22" y1="2" x2="22" y2="42" stroke="#1C1A16" strokeWidth="0.75"/>
        <line x1="2" y1="22" x2="22" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="6" y1="8" x2="22" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="6" y1="36" x2="22" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="14" y1="4" x2="22" y2="22" stroke="#1C1A16" strokeWidth="0.4"/>
      </svg>
    ),
  },
  {
    code: 'M — 04',
    name: 'Materiality',
    desc: 'We work exclusively with materials that age with dignity — stone, timber, concrete, bronze. No material is merely decorative.',
    glyph: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="2" y="2" width="18" height="18" stroke="#1C1A16" strokeWidth="0.75"/>
        <rect x="24" y="2" width="18" height="18" stroke="#1C1A16" strokeWidth="0.4"/>
        <rect x="2" y="24" width="18" height="18" stroke="#1C1A16" strokeWidth="0.4"/>
        <rect x="24" y="24" width="18" height="18" stroke="#1C1A16" strokeWidth="0.4"/>
      </svg>
    ),
  },
  {
    code: 'C — 05',
    name: 'Craftsmanship',
    desc: 'Architecture is measured in details. We maintain close relationships with craftspeople whose skill is the final realisation of our drawings.',
    glyph: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <polyline points="2,42 22,2 42,42" stroke="#1C1A16" strokeWidth="0.75" fill="none"/>
        <line x1="8" y1="30" x2="36" y2="30" stroke="#1C1A16" strokeWidth="0.4"/>
        <line x1="13" y1="20" x2="31" y2="20" stroke="#1C1A16" strokeWidth="0.4"/>
      </svg>
    ),
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: '#F5F1EA',
      borderTop: '0.5px solid rgba(28,26,22,0.1)',
    }}>
      {/* Header */}
      <FadeUp>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(32px,5vw,80px)', marginBottom: 'clamp(60px,8vw,100px)',
          alignItems: 'end',
        }}>
          <div>
            <p style={{ fontSize:'9px', letterSpacing:'0.3em', textTransform:'uppercase',
              color:'#B8963E', marginBottom:'24px', fontFamily:'Inter,sans-serif',
              fontWeight:400, display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ color:'rgba(142,131,117,0.5)' }}>03 —</span>
              Design Philosophy
            </p>
            <h2 style={{ fontFamily:'"Cormorant Garamond",serif',
              fontSize:'clamp(32px,4.5vw,56px)', fontWeight:300, lineHeight:1.1,
              letterSpacing:'-0.01em' }}>
              The principles<br/>that guide<br/>
              <em style={{ fontStyle:'italic', color:'#8E8375' }}>our work.</em>
            </h2>
          </div>
          <p style={{ fontSize:'14px', lineHeight:1.85, color:'#8E8375',
            fontWeight:300, alignSelf:'end', paddingBottom:'4px' }}>
            Architecture is a discipline of constraint and resolution. Our five guiding principles operate as structural forces that shape every decision, from the placement of a window to the selection of a door handle.
          </p>
        </div>
      </FadeUp>

      {/* Principles grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        borderTop: '0.5px solid rgba(28,26,22,0.1)',
        borderLeft: '0.5px solid rgba(28,26,22,0.1)',
      }}>
        {principles.map((p, i) => (
          <FadeUp key={p.code} delay={i * 0.08}>
            <motion.div
              style={{
                padding: 'clamp(32px,3vw,48px) clamp(24px,2.5vw,36px)',
                borderRight: '0.5px solid rgba(28,26,22,0.1)',
                borderBottom: '0.5px solid rgba(28,26,22,0.1)',
                position: 'relative', overflow: 'hidden', height: '100%',
                cursor: 'default',
              }}
              whileHover={{ backgroundColor: '#EDE8DF' }}
              transition={{ duration: 0.35 }}
            >
              <span style={{ fontSize:'9px', letterSpacing:'0.22em', color:'#B8963E',
                marginBottom:'40px', display:'block', fontWeight:400 }}>
                {p.code}
              </span>
              <h3 style={{ fontFamily:'"Cormorant Garamond",serif',
                fontSize:'clamp(20px,2vw,26px)', fontWeight:300, color:'#1C1A16',
                lineHeight:1.1, marginBottom:'16px' }}>
                {p.name}
              </h3>
              <p style={{ fontSize:'12px', lineHeight:1.78, color:'#8E8375', fontWeight:300 }}>
                {p.desc}
              </p>
              {/* Glyph */}
              <div style={{ position:'absolute', bottom:'20px', right:'20px', opacity:0.08 }}>
                {p.glyph}
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
