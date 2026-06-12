import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const stages = [
  {
    phase: 'Discovery', roman: 'i.',
    name: 'Site & Brief',
    desc: 'Extended site analysis, client interviews, programme development. We arrive at a precise understanding of what must be made.',
  },
  {
    phase: 'Concept', roman: 'ii.',
    name: 'Idea & Proposition',
    desc: 'A singular architectural proposition is developed and tested. Models and sketches precede any computer work.',
  },
  {
    phase: 'Development', roman: 'iii.',
    name: 'Design Resolution',
    desc: 'The concept is resolved into precise technical drawings. Material selections, structural strategies, and interior details are developed.',
  },
  {
    phase: 'Documentation', roman: 'iv.',
    name: 'Construction Drawings',
    desc: 'Comprehensive documentation for planning, regulatory approval, and contractor tendering. Nothing left to interpretation.',
  },
  {
    phase: 'Realisation', roman: 'v.',
    name: 'Build & Delivery',
    desc: 'Site administration throughout construction. We remain present until the building performs exactly as designed.',
  },
]

export default function Process() {
  return (
    <section style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: '#EDE8DF',
      borderTop: '0.5px solid rgba(28,26,22,0.1)',
    }}>
      {/* Header */}
      <FadeUp>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(32px,5vw,80px)', marginBottom: 'clamp(60px,8vw,100px)',
          alignItems: 'end',
        }}>
          <div>
            <p style={{ fontSize:'9px', letterSpacing:'0.3em', textTransform:'uppercase',
              color:'#B8963E', marginBottom:'24px', fontFamily:'Inter,sans-serif',
              fontWeight:400, display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ color:'rgba(142,131,117,0.5)' }}>04 —</span>
              Design Process
            </p>
            <h2 style={{ fontFamily:'"Cormorant Garamond",serif',
              fontSize:'clamp(32px,4.5vw,56px)', fontWeight:300, lineHeight:1.1,
              letterSpacing:'-0.01em' }}>
              How we<br/>work.
            </h2>
          </div>
          <p style={{ fontSize:'14px', lineHeight:1.85, color:'#8E8375',
            fontWeight:300, alignSelf:'end', paddingBottom:'4px' }}>
            Every project moves through five carefully managed phases. The sequence is iterative, with each phase informing the last. What emerges is architecture thoroughly tested before a single stone is laid.
          </p>
        </div>
      </FadeUp>

      {/* Stages */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        borderTop: '0.5px solid rgba(28,26,22,0.1)',
      }}>
        {stages.map((s, i) => (
          <FadeUp key={s.phase} delay={i * 0.1}>
            <motion.div
              style={{
                padding: 'clamp(32px,3vw,48px) 0',
                paddingRight: 'clamp(16px,2vw,40px)',
                borderLeft: i > 0 ? '0.5px solid rgba(28,26,22,0.1)' : 'none',
                paddingLeft: i > 0 ? 'clamp(16px,2vw,40px)' : '0',
                position: 'relative', height: '100%',
              }}
              whileHover={{}}
            >
              {/* Active line on hover */}
              <motion.div style={{
                position: 'absolute', top: 0, left: i > 0 ? '-0.5px' : '0',
                width: '0.5px', height: '0',
                background: '#B8963E',
              }}
                whileHover={{ height: '48px' }}
                transition={{ duration: 0.3 }}
              />

              <div style={{ fontSize:'9px', letterSpacing:'0.22em', textTransform:'uppercase',
                color:'#B8963E', marginBottom:'20px', fontFamily:'Inter,sans-serif',
                fontWeight:400, display:'flex', alignItems:'center', gap:'6px' }}>
                <span style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'11px',
                  color:'#8E8375', fontStyle:'italic' }}>{s.roman}</span>
                {s.phase}
              </div>
              <h3 style={{ fontFamily:'"Cormorant Garamond",serif',
                fontSize:'clamp(18px,2vw,24px)', fontWeight:300, color:'#1C1A16',
                marginBottom:'14px', lineHeight:1.2 }}>
                {s.name}
              </h3>
              <p style={{ fontSize:'12px', lineHeight:1.78, color:'#8E8375', fontWeight:300 }}>
                {s.desc}
              </p>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
