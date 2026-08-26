export function TopoBackground() {
  return (
    <svg className="topo" viewBox="0 0 1180 520" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="topoFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6ff3f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d6ff3f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M -50 ${80 + i * 60} C 200 ${20 + i * 60}, 350 ${140 + i * 60}, 600 ${70 + i * 60} S 1000 ${20 + i * 60}, 1230 ${90 + i * 60}`}
          fill="none"
          stroke="url(#topoFade)"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  )
}
