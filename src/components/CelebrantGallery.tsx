"use client";

import { useEffect, useState } from "react";
import { CouplePhoto } from "./CouplePhoto";

/** Seconds each photo stays up before sliding to the next one. */
const SLIDE_SECONDS = 4;

export type GallerySlide = {
  src?: string;
  label: string;
  note: string;
};

export function CelebrantGallery({ slides }: { slides: GallerySlide[] }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const running = auto && !hovered && !reduceMotion && slides.length > 1;

  // Keyed on `active`, so manual navigation restarts the countdown.
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_SECONDS * 1000);
    return () => window.clearTimeout(timer);
  }, [active, running, slides.length]);

  function move(direction: -1 | 1) {
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );
  }

  const slide = slides[active];

  return (
    <section
      className="relative overflow-hidden bg-cyan px-4 py-16 sm:px-5 sm:py-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div className="absolute inset-0 court-grid opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker text-blue-deep">CAMERA ROLL</p>
            <h2 className="smash mt-3 text-5xl text-ink sm:text-7xl">
              <span className="block warp">THE CELEBRANTS</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-base font-medium leading-relaxed text-ink/75 sm:block">
            Replace these frames with favorite photos from every era.
          </p>
        </div>

        <div className="mt-10 grid items-center justify-center gap-5 sm:grid-cols-[auto_minmax(0,620px)_auto]">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous photo"
            className="order-2 border-[3px] border-ink bg-bone px-5 py-3 font-display text-xl shadow-[4px_4px_0_var(--blue)] transition-transform hover:-translate-y-0.5 sm:order-1 sm:px-4"
          >
            ←
          </button>

          <div className="order-1 border-[4px] border-ink bg-bone p-3 shadow-[10px_10px_0_var(--pink)] sm:order-2 sm:p-4">
            <CouplePhoto
              key={slide.src ?? slide.label}
              src={slide.src}
              label={slide.label}
              hint={slide.src ? undefined : `Add ${slide.note}`}
              className="pop-in aspect-[4/3] border-[3px] border-ink"
            />

            {/* countdown to the next slide */}
            <div className="mt-3 h-1.5 border-2 border-ink bg-bone">
              <span
                key={`${active}-${running}`}
                className={`block h-full bg-pink ${running ? "slide-timer" : ""}`}
                style={
                  running
                    ? { animationDuration: `${SLIDE_SECONDS}s` }
                    : { width: "100%", opacity: 0.25 }
                }
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-sm text-ink">{slide.label}</p>
              <p className="font-mono text-xs text-ink/65">
                {slide.note} · {active + 1}/{slides.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next photo"
            className="order-3 border-[3px] border-ink bg-acid px-5 py-3 font-display text-xl shadow-[4px_4px_0_var(--blue)] transition-transform hover:-translate-y-0.5 sm:px-4"
          >
            →
          </button>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <div className="flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.note}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-pressed={active === index}
                className={`h-3 border-2 border-ink transition-[width,background-color] ${
                  active === index ? "w-10 bg-pink" : "w-3 bg-bone"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setAuto((current) => !current)}
            aria-pressed={auto}
            className="border-2 border-ink bg-bone px-3 py-1.5 font-mono text-xs font-bold text-ink"
          >
            {auto ? `❚❚ AUTO ${SLIDE_SECONDS}s` : "▶ AUTO OFF"}
          </button>
        </div>
      </div>
    </section>
  );
}
