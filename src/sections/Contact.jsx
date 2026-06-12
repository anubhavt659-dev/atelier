import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const inputStyle = {
  width: '100%', background: 'transparent', border: 'none', outline: 'none',
  fontFamily: 'Inter,sans-serif', fontSize: '14px', fontWeight: 300,
  color: '#1C1A16', resize: 'none',
}

export default function Contact() {
  const [focused, setFocused] = useState(null)

  const fields = [
    { id: 'name', label: 'Name', type: 'input', placeholder: 'Your full name' },
    { id: 'email', label: 'Email', type: 'input', placeholder: 'your@email.com', inputType: 'email' },
    { id: 'project', label: 'Project Type', type: 'select', options: [
      'Residential Architecture', 'Interior Design', 'Cultural / Commercial', 'Masterplanning', 'Other'
    ]},
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your project…' },
  ]

  return (
    <section id="contact" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: '#F5F1EA', borderTop: '0.5px solid rgba(28,26,22,0.1)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Corner floor plan mark */}
      <svg style={{ position:'absolute', top:'clamp(60px,8vw,100px)', right:'clamp(24px,5vw,80px)',
        opacity:0.08, pointerEvents:'none' }} width="56" height="56" viewBox="0 0 56 56" fill="none">
        <polyline points="0,56 0,0 56,0" stroke="#1C1A16" strokeWidth="0.5"/>
        <polyline points="10,56 10,10 56,10" stroke="#1C1A16" strokeWidth="0.5"/>
      </svg>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(48px,8vw,120px)', alignItems: 'start',
      }}>
        {/* Left */}
        <FadeUp>
          <p style={{ fontSize:'9px', letterSpacing:'0.3em', textTransform:'uppercase',
            color:'#B8963E', marginBottom:'36px', fontFamily:'Inter,sans-serif',
            fontWeight:400, display:'flex', alignItems:'center', gap:'10px' }}>
            <span style={{ color:'rgba(142,131,117,0.5)' }}>06 —</span>
            Contact
          </p>
          <h2 style={{ fontFamily:'"Cormorant Garamond",serif',
            fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.0,
            letterSpacing:'-0.015em', maxWidth:'460px' }}>
            Let's create something{' '}
            <em style={{ fontStyle:'italic', color:'#8E8375' }}>enduring.</em>
          </h2>

          <div style={{
            marginTop: 'clamp(40px,5vw,64px)',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px,3vw,40px)',
          }}>
            {[
              ['Studio', 'Atelier Architecture\nStockholm, Sweden'],
              ['Enquiries', 'studio@atelier.se\n+46 8 000 0000'],
              ['Office Hours', 'Mon – Fri\n09:00 – 17:00 CET'],
            ].map(([label, val]) => (
              <div key={label}>
                <p style={{ fontSize:'9px', letterSpacing:'0.22em', textTransform:'uppercase',
                  color:'#B8963E', marginBottom:'10px', fontWeight:400 }}>{label}</p>
                <p style={{ fontSize:'13px', color:'#1C1A16', fontWeight:300, lineHeight:1.65,
                  whiteSpace:'pre-line' }}>{val}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.2}>
          <div>
            {fields.map((f) => (
              <div key={f.id} style={{
                borderBottom: `0.5px solid ${focused===f.id ? '#1C1A16' : 'rgba(28,26,22,0.12)'}`,
                padding: '18px 0',
                transition: 'border-color 0.3s',
              }}>
                <label style={{ display:'block', fontSize:'9px', letterSpacing:'0.22em',
                  textTransform:'uppercase', color:'#B8963E', marginBottom:'8px', fontWeight:400 }}>
                  {f.label}
                </label>
                {f.type === 'input' && (
                  <input
                    type={f.inputType || 'text'}
                    placeholder={f.placeholder}
                    style={{ ...inputStyle, '::placeholder': { color:'#8E8375' } }}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                  />
                )}
                {f.type === 'textarea' && (
                  <textarea
                    placeholder={f.placeholder}
                    style={{ ...inputStyle, height: '80px' }}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                  />
                )}
                {f.type === 'select' && (
                  <select
                    style={{ ...inputStyle, cursor:'pointer' }}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="" disabled defaultValue>Select a type</option>
                    {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                )}
              </div>
            ))}

            <div style={{ marginTop:'40px', display:'flex',
              alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'20px' }}>
              <motion.button
                style={{
                  display:'inline-flex', alignItems:'center', gap:'16px',
                  padding:'17px 40px', background:'#1C1A16', color:'#F5F1EA',
                  fontFamily:'Inter,sans-serif', fontSize:'10px', letterSpacing:'0.22em',
                  textTransform:'uppercase', border:'none', cursor:'pointer', fontWeight:400,
                }}
                whileHover={{ backgroundColor: '#B8963E', gap: '24px' }}
                transition={{ duration: 0.3 }}
              >
                Send Enquiry <span>→</span>
              </motion.button>
              <p style={{ fontSize:'11px', color:'#8E8375', fontWeight:300,
                maxWidth:'160px', lineHeight:1.65, textAlign:'right' }}>
                We respond within two working days.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
