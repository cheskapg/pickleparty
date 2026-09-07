export function DrinkVector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g stroke="var(--ink)" strokeWidth={5} strokeLinejoin="round">
        {/* coupe glass in the back */}
        <g className="vec-tilt">
          <path
            d="M28 86h64l-24 34v42"
            fill="var(--pink)"
            strokeLinecap="round"
          />
          <path d="M44 172h32" fill="none" strokeLinecap="round" />
          <circle cx={44} cy={78} r={9} fill="var(--acid)" />
        </g>

        {/* highball glass */}
        <g className="vec-tilt vec-delay-2">
          <path
            d="M104 62h68l-8 138a10 10 0 0 1-10 9h-32a10 10 0 0 1-10-9Z"
            fill="var(--blue-soft)"
            fillOpacity={0.55}
          />
          {/* liquid */}
          <path
            className="vec-liquid"
            d="M110 104c10-6 18 4 28 0s18-8 28-2l-5 98a10 10 0 0 1-10 9h-27a10 10 0 0 1-10-9Z"
            fill="var(--blue)"
          />
          {/* bubbles */}
          <g fill="var(--acid)" strokeWidth={3}>
            <circle className="vec-bubble" cx={124} cy={190} r={6} />
            <circle
              className="vec-bubble vec-delay-1"
              cx={142}
              cy={196}
              r={4.5}
            />
            <circle
              className="vec-bubble vec-delay-2"
              cx={156}
              cy={188}
              r={5.5}
            />
            <circle
              className="vec-bubble vec-delay-3"
              cx={134}
              cy={200}
              r={4}
            />
          </g>
          {/* straw */}
          <path
            d="M186 34 158 96"
            fill="none"
            stroke="var(--pink)"
            strokeWidth={11}
            strokeLinecap="round"
          />
          <path
            d="M186 34 158 96"
            fill="none"
            stroke="var(--ink)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray="10 12"
          />
          {/* pickle spear garnish */}
          <path
            d="M118 30c10 4 12 22 6 42-4 12-12 16-18 12s-6-16 0-32c5-14 6-24 12-22Z"
            fill="var(--acid)"
          />
          {/* lime wedge on the rim */}
          <path
            d="M172 62a26 26 0 0 0 26-26 26 26 0 0 0-26 26Z"
            fill="var(--acid-deep)"
          />
        </g>

        {/* sparkles */}
        <g fill="var(--acid)" strokeWidth={3}>
          <path
            className="vec-sparkle"
            d="M40 40l5 12 12 5-12 5-5 12-5-12-12-5 12-5Z"
          />
          <path
            className="vec-sparkle vec-delay-2"
            d="M208 150l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z"
          />
        </g>
      </g>
    </svg>
  );
}
