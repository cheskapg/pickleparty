export function FoodVector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g stroke="var(--ink)" strokeWidth={5} strokeLinejoin="round">
        {/* steam */}
        <g fill="none" strokeWidth={5} strokeLinecap="round">
          <path
            className="vec-steam"
            d="M78 56c-8-8 8-14 0-24"
            stroke="var(--bone)"
          />
          <path
            className="vec-steam vec-delay-2"
            d="M126 50c-8-8 8-14 0-24"
            stroke="var(--bone)"
          />
          <path
            className="vec-steam vec-delay-3"
            d="M172 58c-8-8 8-14 0-24"
            stroke="var(--bone)"
          />
        </g>

        {/* spit rod */}
        <path
          d="M14 118h212"
          fill="none"
          stroke="var(--ink)"
          strokeWidth={8}
          strokeLinecap="round"
        />

        {/* lechon on the spit */}
        <g className="vec-spit">
          {/* legs tucked up */}
          <g fill="var(--pink-deep)">
            <path d="M74 96l-8-26 18-4 4 26Z" />
            <path d="M132 92l-6-28 18-2 2 28Z" />
          </g>
          {/* body */}
          <ellipse cx={110} cy={118} rx={58} ry={34} fill="var(--pink)" />
          {/* crispy skin highlight */}
          <path
            d="M66 106c14-10 34-14 52-12s32 8 40 16"
            fill="none"
            stroke="var(--ink)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray="8 10"
          />
          {/* curly tail */}
          <path
            d="M52 116c-12-2-14-14-4-16s10 10 0 12"
            fill="none"
            strokeLinecap="round"
          />
          {/* head */}
          <ellipse cx={178} cy={112} rx={24} ry={22} fill="var(--pink)" />
          <path d="M170 92l-6-16 20 6Z" fill="var(--pink-deep)" />
          <ellipse cx={198} cy={118} rx={12} ry={10} fill="var(--pink-deep)" />
          <circle cx={196} cy={116} r={2.5} fill="var(--ink)" stroke="none" />
          <circle cx={202} cy={121} r={2.5} fill="var(--ink)" stroke="none" />
          <path
            d="M176 104h.1"
            strokeWidth={7}
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* bbq skewers */}
        <g>
          <path
            d="M186 214 214 158"
            fill="none"
            strokeWidth={7}
            strokeLinecap="round"
          />
          <path
            d="M150 216 172 156"
            fill="none"
            strokeWidth={7}
            strokeLinecap="round"
          />
          <g fill="var(--acid-deep)">
            <rect x={186} y={158} width={26} height={22} rx={7} />
            <rect x={176} y={182} width={26} height={22} rx={7} />
            <rect x={148} y={162} width={26} height={22} rx={7} />
            <rect x={140} y={188} width={26} height={22} rx={7} />
          </g>
        </g>

        {/* flames */}
        <g fill="var(--acid)">
          <path
            className="vec-flame"
            d="M62 232c-14-10-10-24-2-30-2 12 8 10 8 22 0 5-3 8-6 8Z"
          />
          <path
            className="vec-flame vec-delay-1"
            d="M98 234c-16-12-12-28-2-36-3 14 10 12 10 26 0 6-4 10-8 10Z"
          />
          <path
            className="vec-flame vec-delay-2"
            d="M134 232c-14-10-10-24-2-30-2 12 8 10 8 22 0 5-3 8-6 8Z"
          />
        </g>
      </g>
    </svg>
  );
}
