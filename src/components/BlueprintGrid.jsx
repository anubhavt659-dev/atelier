export default function BlueprintGrid({ color = '#F5F1EA', opacity = 0.07 }) {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', opacity,
      }}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 12-column vertical lines */}
      {[...Array(11)].map((_, i) => (
        <line
          key={`v${i}`}
          x1={`${(i + 1) * (100 / 12)}%`} y1="0"
          x2={`${(i + 1) * (100 / 12)}%`} y2="100%"
          stroke={color} strokeWidth="0.5"
        />
      ))}
      {/* Horizontal rows */}
      {[...Array(7)].map((_, i) => (
        <line
          key={`h${i}`}
          x1="0" y1={`${(i + 1) * (100 / 8)}%`}
          x2="100%" y2={`${(i + 1) * (100 / 8)}%`}
          stroke={color} strokeWidth="0.5"
        />
      ))}
      {/* Corner blueprint markers */}
      <g>
        {/* TL */}
        <rect x="36" y="36" width="5" height="5" fill="none" stroke={color} strokeWidth="0.5" />
        <line x1="41" y1="38.5" x2="60" y2="38.5" stroke={color} strokeWidth="0.5" />
        <line x1="38.5" y1="41" x2="38.5" y2="60" stroke={color} strokeWidth="0.5" />
        {/* Coordinates */}
        <text x="44" y="33" fill={color} fontSize="7" fontFamily="Inter" letterSpacing="2">N 48.51°</text>
      </g>
      <g>
        {/* TR */}
        <text fill={color} fontSize="7" fontFamily="Inter" letterSpacing="2" textAnchor="end">
          <textPath xlinkHref="#tr-pos">E 9.13°</textPath>
        </text>
      </g>
    </svg>
  )
}
