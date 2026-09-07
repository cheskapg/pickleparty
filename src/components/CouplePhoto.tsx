import { PHOTO_FILTER } from "@/lib/photoFilter";
import { PosterPhoto, type Tint } from "./PosterPhoto";

/**
 * Photo slot for the celebrants. Overwrite the file in `public/images/`
 * (keep the same name) and the photo shows up here automatically.
 */
export function CouplePhoto({
  src,
  label,
  hint,
  tint = "pink",
  className = "",
  priority = false,
}: {
  src?: string;
  label: string;
  hint?: string;
  tint?: Tint;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <PosterPhoto
        src={src}
        alt={label}
        tint={PHOTO_FILTER ? tint : "none"}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 border-[3px] border-dashed border-ink bg-blue-soft/40 p-6 text-center ${className}`}
    >
      <div className="absolute inset-0 halftone opacity-30" />
      <div className="relative flex size-14 items-center justify-center border-[3px] border-ink bg-acid text-2xl shadow-[4px_4px_0_var(--ink)]">
        📸
      </div>
      <p className="relative font-display text-sm text-ink sm:text-base">
        {label}
      </p>
      {hint ? (
        <p className="relative max-w-[16rem] text-sm leading-snug text-ink/70">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
