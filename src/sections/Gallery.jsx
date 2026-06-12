import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const galleryItems = [
  { src: '/project_2.png', alt: 'Travertine Villa — living room', large: true },
  { src: '/project_1.png', alt: 'Birch Forest House — dining area' },
  { src: '/project_3.png', alt: 'Woodland Pavilion — exterior' },
]

export default function Gallery() {
  return (
    <section style={{
      background: '#1C1A16',
      paddingTop: 'clamp(80px,8vw,120px)',
      borderTop: '0.5px solid rgba(245,241,234,0.06)',
    }}>
      <FadeUp>
        <div style={{
          padding: '0 clamp(24px,5vw,80px)',
          paddingBottom: 'clamp(40px,5vw,72px)',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
        }}>
          <div>
            <p style={{ fontSize:'9px', letterSpacing:'0.3em', textTransform:'uppercase',
              color:'rgba(184,150,62,0.8)', marginBottom:'20px', fontFamily:'Inter,sans-serif',
              fontWeight:400, display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ color:'rgba(237,232,223,0.15)' }}>05 —</span>
              Studio Archive
            </p>
            <h2 style={{ fontFamily:'"Cormorant Garamond",serif',
              fontSize:'clamp(32px,4.5vw,52px)', fontWeight:300,
              color:'#EDE8DF', lineHeight:1.05, letterSpacing:'-0.01em' }}>
              Selected<br/>
              <em style={{ fontStyle:'italic', color:'rgba(237,232,223,0.32)' }}>Imagery</em>
            </h2>
          </div>
        </div>
      </FadeUp>

      {/* Asymmetric spread: large left, two stacked right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '5fr 3fr',
        gap: '2px',
        padding: '0 2px',
      }}>
        {/* Large left image */}
        <FadeUp>
          <div style={{ overflow: 'hidden', aspectRatio: '16/10', position: 'relative' }}>
            <motion.img
              src="/project_2.png"
              alt="Travertine Villa"
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
                filter:'brightness(0.88)' }}
              whileHover={{ scale: 1.04, filter: 'brightness(1)' }}
              transition={{ duration: 0.85, ease: [0.25,0.46,0.45,0.94] }}
            />
          </div>
        </FadeUp>

        {/* Right column: two stacked */}
        <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:'2px' }}>
          <FadeUp delay={0.1}>
            <div style={{ overflow:'hidden', height:'100%', position:'relative' }}>
              <motion.img
                src="/project_1.png"
                alt="Birch Forest House — dining"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
                  filter:'brightness(0.82)', objectPosition:'center center' }}
                whileHover={{ scale: 1.05, filter: 'brightness(0.98)' }}
                transition={{ duration: 0.85, ease: [0.25,0.46,0.45,0.94] }}
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ overflow:'hidden', height:'100%', position:'relative' }}>
              <motion.img
                src="/project_3.png"
                alt="Woodland Pavilion — exterior"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
                  filter:'brightness(0.82)', objectPosition:'center top' }}
                whileHover={{ scale: 1.05, filter: 'brightness(0.98)' }}
                transition={{ duration: 0.85, ease: [0.25,0.46,0.45,0.94] }}
              />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Caption */}
      <FadeUp>
        <div style={{
          padding: 'clamp(24px,3vw,40px) clamp(24px,5vw,80px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '0.5px solid rgba(245,241,234,0.06)',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{ fontSize:'11px', color:'rgba(237,232,223,0.22)', fontWeight:300,
            letterSpacing:'0.08em', maxWidth:'500px' }}>
            Photography documents the material life of each project — the quality of shadow, the texture of surface, the relationship of interior to landscape.
          </p>
          <span style={{ fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase',
            color:'rgba(237,232,223,0.18)', fontWeight:300 }}>
            2022–2025
          </span>
        </div>
      </FadeUp>
    </section>
  )
}
