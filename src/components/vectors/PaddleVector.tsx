function Paddle({
  face,
  grip,
}: {
  face: string;
  grip: string;
}) {
  return (
    <g stroke="var(--ink)" strokeWidth={5} strokeLinejoin="round">
      <rect x={-34} y={-98} width={68} height={108} rx={30} fill={face} />
      <rect x={-12} y={4} width={24} height={78} rx={9} fill={grip} />
      <g
        fill="none"
        stroke="var(--ink)"
        strokeWidth={3.5}
        strokeLinecap="round"
      >
        <path d="M-10 22h20" />
        <path d="M-10 40h20" />
        <path d="M-10 58h20" />
      </g>
      <g fill="var(--ink)" stroke="none" opacity={0.5}>
        <circle cx={-14} cy={-66} r={3} />
        <circle cx={2} cy={-74} r={3} />
        <circle cx={16} cy={-62} r={3} />
        <circle cx={-6} cy={-50} r={3} />
        <circle cx={12} cy={-40} r={3} />
        <circle cx={-18} cy={-32} r={3} />
      </g>
    </g>
  );
}

export function PaddleVector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden
      focusable="false"
    >
      {/* impact burst behind the crossed paddles */}
      <g className="vec-burst">
        <path
          d="M120 18l14 40 34-26-18 40 44-4-38 22 38 22-44-4 18 40-34-26-14 40-14-40-34 26 18-40-44 4 38-22-38-22 44 4-18-40 34 26Z"
          fill="var(--acid)"
          stroke="var(--ink)"
          strokeWidth={4}
        />
      </g>

      {/* crossed paddles */}
      <g transform="translate(120 124)">
        <g className="vec-paddle-left" transform="rotate(-38)">
          <Paddle face="var(--blue)" grip="var(--ink)" />
        </g>
        <g className="vec-paddle-right" transform="rotate(38)">
          <Paddle face="var(--bone)" grip="var(--ink)" />
        </g>
      </g>

      {/* ball arcing across the crest */}
      <g className="vec-ball" transform="translate(120 58)">
        <circle
          r={17}
          fill="var(--acid)"
          stroke="var(--ink)"
          strokeWidth={5}
        />
        <g fill="var(--ink)" opacity={0.65}>
          <circle cx={-6} cy={-5} r={2.6} />
          <circle cx={6} cy={-4} r={2.6} />
          <circle cx={0} cy={4} r={2.6} />
          <circle cx={-8} cy={5} r={2.2} />
          <circle cx={8} cy={6} r={2.2} />
        </g>
      </g>
    </svg>
  );
}
