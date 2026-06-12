import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import FadeUp from '../components/FadeUp'

const stats = [
  { num: 24, label: 'Years Practice' },
  { num: 68, label: 'Projects Realised' },
  { num: 12, label: 'Design Awards' },
  { num: 8,  label: 'Studio Members' },
]

export default function Studio() {
  const { ref: statsRef, inView: statsVisible } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="studio" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: '#F5F1EA',
      borderTop: '0.5px solid rgba(28,26,22,0.1)',
      position: 'relative',
    }}>
      {/* Architectural line decoration */}
      <svg style={{ position:'absolute', right:'clamp(24px,5vw,80px)', top:'clamp(80px,10vw,140px)',
        opacity:0.1, pointerEvents:'none', display:'block' }}
        width="160" height="320" viewBox="0 0 160 320" fill="none">
        <rect x="0.5" y="0.5" width="159" height="319" stroke="#1C1A16" strokeWidth="0.5"/>
        <line x1="0" y1="80" x2="160" y2="80" stroke="#1C1A16" strokeWidth="0.5"/>
        <line x1="0" y1="160" x2="160" y2="160" stroke="#1C1A16" strokeWidth="0.5"/>
        <line x1="0" y1="240" x2="160" y2="240" stroke="#1C1A16" strokeWidth="0.5"/>
        <line x1="80" y1="0" x2="80" y2="320" stroke="#1C1A16" strokeWidth="0.5"/>
        <circle cx="80" cy="160" r="40" stroke="#1C1A16" strokeWidth="0.5" fill="none"/>
        <circle cx="80" cy="160" r="3" fill="#B8963E" opacity="0.7"/>
        <line x1="50" y1="160" x2="26" y2="160" stroke="#B8963E" strokeWidth="0.5" opacity="0.7"/>
        <text x="4" y="164" fill="#8E8375" fontSize="7" fontFamily="Inter" letterSpacing="1">0.00</text>
      </svg>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'clamp(40px,6vw,80px)' }}>
        {/* Left */}
        <FadeUp>
          <p style={{ fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase',
            color:'#B8963E', fontFamily:'Inter,sans-serif', fontWeight:400, marginBottom:'40px',
            display:'flex', alignItems:'center', gap:'10px' }}>
            <span style={{ color:'rgba(142,131,117,0.5)', fontSize:'9px' }}>01 —</span>
            Studio
          </p>
          <h2 style={{ fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(26px,3.5vw,44px)', fontWeight:300, lineHeight:1.2,
            letterSpacing:'-0.01em', color:'#1C1A16', maxWidth:'440px' }}>
            We create architecture rooted in{' '}
            <em style={{ fontStyle:'italic', color:'#8E8375' }}>permanence,</em>{' '}
            craftsmanship, and human experience.
          </h2>
        </FadeUp>

        {/* Right */}
        <FadeUp delay={0.2}>
          <div style={{ height:'1px' }} />
          <div style={{ width:'32px', height:'0.5px', background:'#B8963E', marginBottom:'32px', marginTop:'56px' }} />
          <div style={{ fontSize:'14px', lineHeight:1.85, color:'#8E8375', fontWeight:300, maxWidth:'480px' }}>
            <p>Atelier is a contemporary architecture and interior design studio operating at the intersection of rigorous spatial thinking and material sensitivity. We work with clients who understand that great architecture is not produced quickly.</p>
            <p style={{ marginTop:'20px' }}>Our process is iterative and deeply collaborative. Every project begins with a comprehensive study of site, programme, and the lives that will unfold within. The result is architecture that feels inevitable.</p>
          </div>

          {/* Stats */}
          <div ref={statsRef} style={{
            marginTop:'56px', display:'grid', gridTemplateColumns:'1fr 1fr',
            borderTop:'0.5px solid rgba(28,26,22,0.1)',
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding:'28px 0',
                borderBottom:'0.5px solid rgba(28,26,22,0.1)',
                borderRight: i%2===0 ? '0.5px solid rgba(28,26,22,0.1)' : 'none',
                paddingRight: i%2===0 ? '28px' : '0',
                paddingLeft: i%2===1 ? '28px' : '0',
              }}>
                <div style={{ fontFamily:'"Cormorant Garamond",serif',
                  fontSize:'40px', fontWeight:300, color:'#1C1A16', lineHeight:1 }}>
                  {statsVisible ? <CountUp end={s.num} duration={2.5} delay={i*0.15} /> : '0'}
                </div>
                <div style={{ fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase',
                  color:'#8E8375', marginTop:'8px', fontWeight:400 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
