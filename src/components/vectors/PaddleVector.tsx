function Paddle({ face, grip }: { face: string; grip: string }) {
  return (
    <g stroke="var(--ink)" strokeWidth={5} strokeLinejoin="round">
      <rect x={-32} y={-96} width={64} height={104} rx={30} fill={face} />
      <rect x={-11} y={2} width={22} height={82} rx={9} fill={grip} />
      <g
        fill="none"
        stroke="var(--bone)"
        strokeWidth={3.5}
        strokeLinecap="round"
        opacity={0.8}
      >
        <path d="M-9 24h18" />
        <path d="M-9 44h18" />
        <path d="M-9 64h18" />
      </g>
      <g fill="var(--ink)" stroke="none" opacity={0.4}>
        <circle cx={-13} cy={-64} r={3} />
        <circle cx={3} cy={-72} r={3} />
        <circle cx={15} cy={-58} r={3} />
        <circle cx={-5} cy={-48} r={3} />
        <circle cx={11} cy={-36} r={3} />
        <circle cx={-17} cy={-30} r={3} />
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
      {/* starburst behind the crest */}
      <g transform="translate(120 104) scale(0.62)">
        <g className="vec-burst">
          <path
            d="M0-96 11-56l28-25-14 36 37-7-30 21 30 21-37-7 14 36-28-25L0 96l-11-56-28 25 14-36-37 7 30-21-30-21 37 7-14-36 28 25Z"
            fill="var(--acid)"
            stroke="var(--ink)"
            strokeWidth={6}
          />
        </g>
      </g>

      {/* crossed paddles: static rotation outside, swing animation inside */}
      <g transform="translate(120 108)">
        <g transform="rotate(-55)">
          <g className="vec-paddle-left">
            <Paddle face="var(--blue)" grip="var(--ink)" />
          </g>
        </g>
        <g transform="rotate(55)">
          <g className="vec-paddle-right">
            <Paddle face="var(--pink)" grip="var(--ink)" />
          </g>
        </g>
      </g>

      {/* ball arcing over the crest */}
      <g transform="translate(120 40)">
        <g className="vec-ball">
          <circle
            r={17}
            fill="var(--bone)"
            stroke="var(--ink)"
            strokeWidth={5}
          />
          <g fill="var(--ink)" opacity={0.6}>
            <circle cx={-6} cy={-5} r={2.6} />
            <circle cx={6} cy={-4} r={2.6} />
            <circle cx={0} cy={4} r={2.6} />
            <circle cx={-8} cy={5} r={2.2} />
            <circle cx={8} cy={6} r={2.2} />
          </g>
        </g>
      </g>
    </svg>
  );
}
