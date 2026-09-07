"use client";

import { useState } from "react";
import { CouplePhoto } from "./CouplePhoto";

/**
 * Each slide points at a real file in `public/images/`. To use your own photo,
 * either overwrite the file keeping its name, or rename your photo to match.
 */
const slides = [
  {
    src: "/images/celebrant-01.jpeg",
    label: "CELEBRANTS — HERO SHOT",
    note: "celebrant-01.png",
  },
  {
    src: "/images/celebrant-02.png",
    label: "ON-COURT MOMENT",
    note: "celebrant-02.png",
  },
  {
    src: "/images/celebrant-03.png",
    label: "THROWBACK FRAME",
    note: "celebrant-03.png",
  },
  {
    src: "/images/celebrant-04.png",
    label: "PARTY PORTRAIT",
    note: "celebrant-04.png",
  },
  {
    src: "/images/celebrant-05.png",
    label: "CANDID ENERGY",
    note: "celebrant-05.png",
  },
];

export function CelebrantGallery() {
  const [active, setActive] = useState(0);

  function move(direction: -1 | 1) {
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );
  }

  return (
    <section className="relative overflow-hidden bg-cyan px-4 py-16 sm:px-5 sm:py-20">
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

        <div className="mt-10 grid items-center gap-5 sm:grid-cols-[auto_1fr_auto]">
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
              key={slides[active].src}
              src={slides[active].src}
              label={slides[active].label}
              className="pop-in aspect-[4/3] border-[3px] border-ink"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-sm text-ink">
                {slides[active].label}
              </p>
              <p className="font-mono text-xs text-ink/65">
                {slides[active].note} · {active + 1}/{slides.length}
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

        <div className="mt-7 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
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
      </div>
    </section>
  );
}
