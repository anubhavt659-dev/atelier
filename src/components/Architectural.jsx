export function BlueprintGrid({ color = '#F5F1EA', opacity = 0.08 }) {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 12 vertical columns */}
      {[120,240,360,480,600,720,840,960,1080,1200,1320].map(x => (
        <line key={x} x1={x} y1={0} x2={x} y2={900} stroke={color} strokeWidth="0.5"/>
      ))}
      {/* horizontal rows */}
      {[150,300,450,600,750].map(y => (
        <line key={y} x1={0} y1={y} x2={1440} y2={y} stroke={color} strokeWidth="0.5"/>
      ))}
      {/* Corner markers */}
      <g stroke={color} strokeWidth="0.5" fill="none">
        <rect x="58" y="58" width="4" height="4"/>
        <line x1="62" y1="60" x2="88" y2="60"/>
        <line x1="60" y1="62" x2="60" y2="88"/>
        <rect x="1378" y="58" width="4" height="4"/>
        <line x1="1378" y1="60" x2="1352" y2="60"/>
        <line x1="1380" y1="62" x2="1380" y2="88"/>
      </g>
      {/* Coordinates */}
      <text x="70" y="48" fill={color} fontSize="8" fontFamily="Inter" letterSpacing="2">N 48.51</text>
      <text x="1300" y="48" fill={color} fontSize="8" fontFamily="Inter" letterSpacing="2">E 9.13</text>
      {/* Dimension tick */}
      <line x1="120" y1="880" x2="1320" y2="880" stroke={color} strokeWidth="0.5"/>
      <line x1="120" y1="875" x2="120" y2="885" stroke={color} strokeWidth="0.5"/>
      <line x1="1320" y1="875" x2="1320" y2="885" stroke={color} strokeWidth="0.5"/>
      <text x="715" y="894" fill={color} fontSize="7" fontFamily="Inter" letterSpacing="2" textAnchor="middle">1200 mm</text>
    </svg>
  );
}

export function ArchDivider({ dark = false }) {
  const c = dark ? 'var(--line-light)' : 'var(--line)';
  return (
    <svg width="100%" height="1" style={{ display: 'block' }}>
      <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke={c} strokeWidth="0.5"/>
    </svg>
  );
}

export function CornerMark({ color = 'var(--line)', size = 40, style = {} }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={style}>
      <polyline points={`0,${size} 0,0 ${size},0`} stroke={color} strokeWidth="0.5"/>
    </svg>
  );
}

export function PrincipleGlyph({ type, size = 40 }) {
  const s = `rgba(28,26,22,0.18)`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {type === 'rect' && (
        <>
          <rect x="4" y="4" width="40" height="40" stroke={s} strokeWidth="1"/>
          <line x1="4" y1="24" x2="44" y2="24" stroke={s} strokeWidth="0.5"/>
          <line x1="24" y1="4" x2="24" y2="44" stroke={s} strokeWidth="0.5"/>
        </>
      )}
      {type === 'circle' && (
        <>
          <circle cx="24" cy="24" r="20" stroke={s} strokeWidth="1"/>
          <circle cx="24" cy="24" r="8" stroke={s} strokeWidth="0.5"/>
          <line x1="4" y1="24" x2="16" y2="24" stroke={s} strokeWidth="0.5"/>
          <line x1="32" y1="24" x2="44" y2="24" stroke={s} strokeWidth="0.5"/>
        </>
      )}
      {type === 'lines' && (
        <>
          <line x1="24" y1="4" x2="24" y2="44" stroke={s} strokeWidth="1"/>
          <line x1="4" y1="24" x2="24" y2="24" stroke={s} strokeWidth="0.5"/>
          <line x1="8" y1="10" x2="24" y2="24" stroke={s} strokeWidth="0.5"/>
          <line x1="8" y1="38" x2="24" y2="24" stroke={s} strokeWidth="0.5"/>
          <line x1="44" y1="18" x2="24" y2="24" stroke={s} strokeWidth="0.5"/>
          <line x1="44" y1="30" x2="24" y2="24" stroke={s} strokeWidth="0.5"/>
        </>
      )}
      {type === 'grid' && (
        <>
          <rect x="4" y="4" width="18" height="18" stroke={s} strokeWidth="1"/>
          <rect x="26" y="4" width="18" height="18" stroke={s} strokeWidth="0.5"/>
          <rect x="4" y="26" width="18" height="18" stroke={s} strokeWidth="0.5"/>
          <rect x="26" y="26" width="18" height="18" stroke={s} strokeWidth="0.5"/>
        </>
      )}
      {type === 'triangle' && (
        <>
          <polyline points="4,44 24,4 44,44" stroke={s} strokeWidth="1" fill="none"/>
          <line x1="10" y1="32" x2="38" y2="32" stroke={s} strokeWidth="0.5"/>
          <line x1="14" y1="22" x2="34" y2="22" stroke={s} strokeWidth="0.5"/>
          <line x1="18" y1="12" x2="30" y2="12" stroke={s} strokeWidth="0.5"/>
        </>
      )}
    </svg>
  );
}
