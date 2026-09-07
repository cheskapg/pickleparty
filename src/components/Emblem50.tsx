export function Emblem50({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-14 rotate-[-8deg] items-center justify-center rounded-full border-[3px] border-ink bg-acid shadow-[4px_4px_0_var(--ink)] ${className}`}
      aria-hidden
    >
      <span className="font-display text-lg leading-none text-ink">50</span>
    </div>
  );
}
