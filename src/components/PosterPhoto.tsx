import Image from "next/image";

type Tint = "acid" | "pink" | "cyan";

export function PosterPhoto({
  src,
  alt,
  tint = "acid",
  priority = false,
  className = "",
  objectPosition,
}: {
  src: string;
  alt: string;
  tint?: Tint;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <div className={`poster-photo relative isolate overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className={`absolute inset-0 z-10 tint-${tint}`} />
      <div
        className="absolute inset-0 z-20 halftone opacity-40 mix-blend-multiply"
        style={{ ["--dot" as string]: "rgba(13,15,10,0.5)" }}
      />
    </div>
  );
}
