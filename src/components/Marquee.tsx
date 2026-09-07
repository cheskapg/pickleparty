export function Marquee({
  items,
  className = "",
  fast = false,
}: {
  items: string[];
  className?: string;
  fast?: boolean;
}) {
  const row = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y-[3px] border-ink py-2.5 ${className}`}
      aria-hidden
    >
      <div className={`marquee-track ${fast ? "marquee-fast" : ""}`}>
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-4 px-4 font-display text-base sm:text-lg"
          >
            {item}
            <span className="text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
