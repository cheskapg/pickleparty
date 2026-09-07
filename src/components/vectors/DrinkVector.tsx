export function DrinkVector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        <clipPath id="drink-glass-clip">
          <path d="M67 68h106l-12 130a13 13 0 0 1-13 12H92a13 13 0 0 1-13-12Z" />
        </clipPath>
      </defs>

      <g stroke="var(--ink)" strokeWidth={5} strokeLinejoin="round">
        {/* striped straw, clearly behind the glass */}
        <path
          d="M174 28 143 100"
          fill="none"
          stroke="var(--pink)"
          strokeWidth={13}
          strokeLinecap="round"
        />
        <path
          d="M174 28 143 100"
          fill="none"
          stroke="var(--bone)"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray="11 12"
        />

        <g className="vec-tilt">
          {/* transparent glass body */}
          <path
            d="M67 68h106l-12 130a13 13 0 0 1-13 12H92a13 13 0 0 1-13-12Z"
            fill="var(--blue-soft)"
            fillOpacity={0.45}
          />

          {/* animated liquid stays clipped inside the glass */}
          <g clipPath="url(#drink-glass-clip)">
            <path
              className="vec-liquid"
              d="M69 111c16-9 29 7 48 0 18-7 34-8 53 1l-9 96H79Z"
              fill="var(--blue)"
              stroke="none"
            />
            <path
              d="M75 124c25 9 55-10 88 1"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth={6}
              strokeLinecap="round"
            />
            <g fill="var(--acid)" strokeWidth={3}>
              <circle className="vec-bubble" cx={96} cy={188} r={6} />
              <circle className="vec-bubble vec-delay-1" cx={121} cy={198} r={5} />
              <circle className="vec-bubble vec-delay-2" cx={147} cy={187} r={7} />
              <circle className="vec-bubble vec-delay-3" cx={132} cy={202} r={4} />
            </g>
          </g>

          {/* rim and glass shine */}
          <path d="M65 68h110" fill="none" strokeLinecap="round" />
          <path
            d="M91 86 96 174"
            fill="none"
            stroke="var(--bone)"
            strokeWidth={6}
            strokeLinecap="round"
            opacity={0.8}
          />

          {/* lemon wheel */}
          <circle cx={166} cy={76} r={24} fill="var(--acid)" />
          <path d="m166 76 17-16M166 76l20 10M166 76l-5 23" fill="none" strokeWidth={3} />

          {/* pickle garnish */}
          <path
            d="M78 42c16 2 22 21 13 39-6 12-17 14-25 7-8-8-5-20 2-31 4-7 5-14 10-15Z"
            fill="var(--acid-deep)"
          />
          <path d="m73 57 10 17M84 54l-12 20" fill="none" strokeWidth={3} />
        </g>

        <g fill="var(--acid)" strokeWidth={3}>
          <path
            className="vec-sparkle"
            d="M40 56l5 12 12 5-12 5-5 12-5-12-12-5 12-5Z"
          />
          <path
            className="vec-sparkle vec-delay-2"
            d="M204 140l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z"
          />
        </g>
      </g>
    </svg>
  );
}
