const FLAG_COLORS = ["#C1272D", "#F2A93B", "#2E7D32", "#E8571B", "#F5EAD6"];

function TopGarland() {
  const flags = Array.from({ length: 22 });
  return (
    <div className="top-garland" aria-hidden="true">
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="top-garland-svg"
      >
        <path
          d="M0,6 Q300,60 600,10 Q900,-30 1200,6"
          className="garland-string"
          fill="none"
        />
        {flags.map((_, i) => {
          const x = (1200 / (flags.length - 1)) * i;
          // approximate the curve's y so flags hang from the rope
          const t = i / (flags.length - 1);
          const y = 6 + Math.sin(t * Math.PI) * -20 + Math.sin(t * Math.PI * 2) * 8;
          const color = FLAG_COLORS[i % FLAG_COLORS.length];
          return (
            <g
              key={i}
              transform={`translate(${x}, ${y})`}
              className="pennant"
              style={{ ["--delay" as string]: `${(i % 6) * 0.35}s` }}
            >
              <polygon points="-11,0 11,0 0,26" fill={color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Stars() {
  // Posições pseudo-aleatórias fixas (determinísticas) para não gerar hydration mismatch
  const stars = [
    [4, 8], [12, 22], [22, 5], [30, 16], [38, 28], [46, 9], [54, 20],
    [62, 6], [70, 24], [78, 12], [86, 30], [92, 7], [8, 34], [18, 40],
    [64, 38], [96, 18], [50, 3], [2, 20], [44, 42], [80, 41],
  ];
  return (
    <div className="stars" aria-hidden="true">
      {stars.map(([x, y], i) => (
        <span
          key={i}
          className="star"
          style={{ left: `${x}%`, top: `${y}%`, ["--delay" as string]: `${(i % 5) * 0.6}s` }}
        />
      ))}
    </div>
  );
}

function Bonfire() {
  return (
    <svg
      viewBox="0 0 200 160"
      className="bonfire"
      aria-hidden="true"
    >
      <g className="flame">
        <path
          d="M100,10 C130,45 150,65 130,95 C122,107 130,118 118,128 C128,110 105,105 108,88 C92,105 96,120 84,128 C64,118 74,102 66,90 C50,65 78,45 100,10 Z"
          fill="url(#flameGradient)"
        />
        <defs>
          <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7A93B" />
            <stop offset="55%" stopColor="#E8571B" />
            <stop offset="100%" stopColor="#C1272D" />
          </linearGradient>
        </defs>
      </g>
      <g className="logs">
        <rect x="35" y="128" width="130" height="12" rx="6" fill="#4A2A1D" transform="rotate(-6 100 134)" />
        <rect x="35" y="128" width="130" height="12" rx="6" fill="#3A2015" transform="rotate(8 100 134)" />
      </g>
    </svg>
  );
}

function Mandacaru({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 220"
      className={`mandacaru${flip ? " mandacaru-flip" : ""}`}
      aria-hidden="true"
    >
      <g fill="#1F5C3F">
        <rect x="42" y="40" width="16" height="180" rx="8" />
        <rect x="10" y="70" width="14" height="90" rx="7" transform="rotate(-14 17 115)" />
        <rect x="76" y="55" width="14" height="100" rx="7" transform="rotate(14 83 105)" />
        <circle cx="50" cy="34" r="16" />
      </g>
    </svg>
  );
}

export default function FestaScene() {
  return (
    <>
      <div className="sky" aria-hidden="true" />
      <Stars />
      <TopGarland />
      <div className="ground-scene" aria-hidden="true">
        <Mandacaru />
        <Bonfire />
        <Mandacaru flip />
      </div>
      <div className="paper-grain" aria-hidden="true" />
    </>
  );
}
