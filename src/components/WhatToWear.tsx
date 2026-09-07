"use client";

import { useState } from "react";
import { PosterPhoto } from "./PosterPhoto";

const looks = [
  {
    id: "court",
    tab: "COURT CLASSIC",
    title: "The Court Classic",
    heading: "Pickleball Ready",
    image: "/images/fit-court.png",
    alt: "Flat lay of a court-ready outfit: tank top, pleated skirt, court shoes, visor",
    tint: "acid" as const,
    accent: "bg-acid",
    items: [
      "Athletic top",
      "Tennis/pickleball skirt or shorts",
      "Court shoes",
      "Visor or cap",
    ],
  },
  {
    id: "sporty",
    tab: "SPORTY CHIC",
    title: "Sporty Chic",
    heading: "Sporty Chic",
    image: "/images/fit-sporty.png",
    alt: "Flat lay of a matching athletic set with sneakers and sunglasses",
    tint: "pink" as const,
    accent: "bg-pink",
    items: [
      "Matching athletic set",
      "Clean sneakers",
      "Statement sunglasses",
      "Fun accessories",
    ],
  },
  {
    id: "apres",
    tab: "APRÈS PICKLE",
    title: "Après Pickle",
    heading: "Après Pickle",
    image: "/images/fit-apres.png",
    alt: "Flat lay of a casual after-party outfit: linen shirt, sundress, slides",
    tint: "cyan" as const,
    accent: "bg-cyan",
    items: [
      "Casual party outfit",
      "Polo / linen shirt",
      "Sundress",
      "Comfortable shoes for hanging out",
    ],
  },
];

export function WhatToWear() {
  const [activeId, setActiveId] = useState(looks[1].id);
  const active = looks.find((look) => look.id === activeId) ?? looks[0];

  return (
    <section
      id="wear"
      className="relative overflow-hidden bg-ink px-4 py-16 sm:px-5 sm:py-20"
    >
      <div
        className="absolute inset-0 halftone opacity-25"
        style={{ ["--dot" as string]: "rgba(27,82,255,0.75)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="kicker text-acid">FIT CHECK</p>
        <h2 className="smash mt-3 text-4xl text-bone sm:text-6xl md:text-7xl">
          <span className="block warp">COURT READY,</span>
          <span className="block text-pink">PARTY APPROVED</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {looks.map((look) => (
            <button
              key={look.id}
              type="button"
              onClick={() => setActiveId(look.id)}
              aria-pressed={look.id === activeId}
              className={`border-[3px] border-bone px-3.5 py-2.5 font-display text-xs transition-transform sm:px-4 sm:text-sm ${
                look.id === activeId
                  ? `${look.accent} -translate-y-0.5 text-ink shadow-[5px_5px_0_var(--bone)]`
                  : "bg-transparent text-bone/80 hover:text-bone"
              }`}
            >
              {look.tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 stripes opacity-20" />
            <div className="relative border-[4px] border-bone bg-bone p-2 shadow-[10px_10px_0_var(--blue)] sm:shadow-[14px_14px_0_var(--blue)]">
              <PosterPhoto
                key={active.id}
                src={active.image}
                alt={active.alt}
                tint={active.tint}
                className="pop-in aspect-[3/4] border-[3px] border-ink"
              />
            </div>
            <p className="relative mt-3 text-center font-mono text-xs tracking-[0.16em] text-bone/70">
              OUTFIT INSPO · NO MODELS, JUST FITS
            </p>
          </div>

          <div>
            <p className="font-display text-3xl text-acid sm:text-4xl">
              {active.title}
            </p>
            <p className="kicker mt-2 text-bone/70">
              {active.heading.toUpperCase()}
            </p>
            <ul className="mt-6 space-y-3">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-[3px] border-bone/25 bg-bone/10 px-4 py-3.5 text-base text-bone"
                >
                  <span className={`size-3.5 shrink-0 ${active.accent}`} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 -rotate-1 border-[3px] border-ink bg-acid p-5 shadow-[6px_6px_0_var(--blue)]">
              <p className="font-display text-base text-ink">DRESS CODE</p>
              <p className="body-copy mt-2 text-ink">
                Sporty, comfortable, and pickleball-ready. Bonus points for
                anything acid green, hot pink, or electric blue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
