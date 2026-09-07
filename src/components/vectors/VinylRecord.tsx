export function VinylRecord({
  spinning = false,
  className = "",
}: {
  spinning?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g className={spinning ? "music-spin" : ""}>
        {/* vinyl disc */}
        <circle
          cx={50}
          cy={50}
          r={47}
          fill="var(--ink)"
          stroke="var(--bone)"
          strokeWidth={3}
        />
        {/* grooves */}
        <g fill="none" stroke="var(--bone)" strokeWidth={1.4} opacity={0.28}>
          <circle cx={50} cy={50} r={41} />
          <circle cx={50} cy={50} r={35} />
          <circle cx={50} cy={50} r={29} />
          <circle cx={50} cy={50} r={23} />
        </g>
        {/* center label */}
        <circle
          cx={50}
          cy={50}
          r={17}
          fill="var(--acid)"
          stroke="var(--ink)"
          strokeWidth={2.5}
        />
        {/* label mark makes the rotation readable */}
        <path
          d="M50 35v9"
          stroke="var(--pink)"
          strokeWidth={4}
          strokeLinecap="round"
        />
        {/* spindle hole */}
        <circle cx={50} cy={50} r={3.5} fill="var(--ink)" />
      </g>

      {/* light sheen stays put while the disc turns */}
      <path
        d="M20 33A38 38 0 0 1 70 19"
        fill="none"
        stroke="var(--bone)"
        strokeWidth={4}
        strokeLinecap="round"
        opacity={0.35}
      />
    </svg>
  );
}
