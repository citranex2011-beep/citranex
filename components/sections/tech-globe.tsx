/**
 * Globo digital / wireframe abstrato — representa conexão, tecnologia e
 * rede. Construído em SVG com meridianos, nós e linhas conectadas.
 */
export function TechGlobe() {
  const nodes = [
    { x: 90, y: 70 },
    { x: 150, y: 55 },
    { x: 205, y: 95 },
    { x: 70, y: 140 },
    { x: 135, y: 150 },
    { x: 200, y: 175 },
    { x: 110, y: 205 },
    { x: 175, y: 120 },
  ]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[80px]" />

      <svg viewBox="0 0 280 280" className="relative h-full w-full">
        <defs>
          <radialGradient id="globe-fill" cx="42%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#1a2350" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0d0d14" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        <g className="animate-spin-slow" style={{ transformOrigin: "140px 140px" }}>
          {/* Esfera */}
          <circle cx="140" cy="140" r="104" fill="url(#globe-fill)" stroke="#3A7DFF" strokeOpacity="0.35" />
          {/* Meridianos */}
          <ellipse cx="140" cy="140" rx="52" ry="104" fill="none" stroke="#7A3CFF" strokeOpacity="0.3" />
          <ellipse cx="140" cy="140" rx="86" ry="104" fill="none" stroke="#3A7DFF" strokeOpacity="0.22" />
          {/* Paralelos */}
          <ellipse cx="140" cy="140" rx="104" ry="40" fill="none" stroke="#00E1FF" strokeOpacity="0.22" />
          <ellipse cx="140" cy="140" rx="104" ry="76" fill="none" stroke="#3A7DFF" strokeOpacity="0.18" />
        </g>

        {/* Rede de nós conectados */}
        <g>
          {nodes.map((a, i) =>
            nodes.slice(i + 1).map((b, j) => {
              const d = Math.hypot(a.x - b.x, a.y - b.y)
              if (d > 95) return null
              return (
                <line
                  key={`${i}-${j}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="#7A3CFF"
                  strokeOpacity="0.28"
                  strokeWidth="0.8"
                />
              )
            }),
          )}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={i % 3 === 0 ? 3 : 2} fill={i % 2 ? "#00E1FF" : "#7A3CFF"}>
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur={`${3 + (i % 4)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  )
}
