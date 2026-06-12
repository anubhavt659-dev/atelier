export default function Footer() {
  return (
    <footer style={{
      background: '#1C1A16',
      padding: 'clamp(32px,4vw,56px) clamp(24px,5vw,80px)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
      borderTop: '0.5px solid rgba(245,241,234,0.06)',
    }}>
      <span style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'16px',
        fontWeight:400, letterSpacing:'0.3em', textTransform:'uppercase', color:'#EDE8DF' }}>
        Atelier
      </span>

      <span style={{ fontSize:'10px', letterSpacing:'0.1em', color:'rgba(237,232,223,0.25)',
        fontWeight:300 }}>
        © 2025 Atelier Architecture Studio
      </span>

      <ul style={{ display:'flex', gap:'28px', listStyle:'none' }}>
        {['Instagram', 'LinkedIn', 'Press'].map(link => (
          <li key={link}>
            <a href="#" style={{
              fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase',
              color:'rgba(237,232,223,0.3)', textDecoration:'none', fontWeight:300,
              fontFamily:'Inter,sans-serif', transition:'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color='#B8963E'}
            onMouseLeave={e => e.target.style.color='rgba(237,232,223,0.3)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
