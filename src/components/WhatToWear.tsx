"use client";

import { useState } from "react";
import { PHOTO_FILTER } from "@/lib/photoFilter";
import { PosterPhoto } from "./PosterPhoto";

const looks = [
  {
    id: "court",
    tab: "COURT CLASSIC",
    title: "The Court Classic",
    heading: "Pickleball Ready",
    designs: [
      {
        name: "Acid Serve",
        image: "/images/court-night-1.png",
        alt: "Blue top and acid skirt for an indoor night game",
      },
      {
        name: "Blue Rally",
        image: "/images/court-night-2.png",
        alt: "Blue polo and black shorts for an indoor night game",
      },
      {
        name: "Pink Match",
        image: "/images/court-night-3.png",
        alt: "Pink top and blue skort for an indoor night game",
      },
    ],
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
    designs: [
      {
        name: "Electric Set",
        image: "/images/sporty-night-1.png",
        alt: "Blue matching set under indoor court lights",
      },
      {
        name: "Teen Flick",
        image: "/images/sporty-night-2.png",
        alt: "Pink jersey, black skirt and blue jacket",
      },
      {
        name: "After Hours",
        image: "/images/sporty-night-3.png",
        alt: "Acid top and cobalt track pants",
      },
    ],
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
    designs: [
      {
        name: "Club Blue",
        image: "/images/apres-night-1.png",
        alt: "Blue shirt and cream trousers for after the game",
      },
      {
        name: "Hot Pink",
        image: "/images/apres-night-2.png",
        alt: "Pink dress and blue bomber jacket",
      },
      {
        name: "Night Polo",
        image: "/images/apres-night-3.png",
        alt: "Black polo and cobalt shorts",
      },
    ],
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
  const [activeDesign, setActiveDesign] = useState(0);
  const active = looks.find((look) => look.id === activeId) ?? looks[0];
  const design = active.designs[activeDesign] ?? active.designs[0];
  const photoTint = PHOTO_FILTER ? active.tint : "none";

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
              onClick={() => {
                setActiveId(look.id);
                setActiveDesign(0);
              }}
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
                key={`${active.id}-${activeDesign}`}
                src={design.image}
                alt={design.alt}
                tint={photoTint}
                className="pop-in aspect-[3/4] border-[3px] border-ink"
              />
            </div>
            <p className="relative mt-3 text-center font-mono text-xs tracking-[0.16em] text-bone/70">
              INDOOR NIGHT FIT · NO MODELS, JUST CLOTHES
            </p>
          </div>

          <div>
            <p className="font-display text-3xl text-acid sm:text-4xl">
              {active.title}
            </p>
            <p className="kicker mt-2 text-bone/70">
              {active.heading.toUpperCase()} · {design.name.toUpperCase()}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {active.designs.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setActiveDesign(index)}
                  aria-pressed={activeDesign === index}
                  className={`border-[3px] p-1.5 text-left transition-transform ${
                    activeDesign === index
                      ? "border-acid bg-acid text-ink shadow-[4px_4px_0_var(--blue)]"
                      : "border-bone/50 bg-bone/10 text-bone hover:border-bone"
                  }`}
                >
                  <span className="relative block aspect-[3/4] overflow-hidden border-2 border-ink">
                    <PosterPhoto
                      src={option.image}
                      alt=""
                      tint={photoTint}
                      className="size-full"
                    />
                  </span>
                  <span className="mt-1.5 block text-center text-xs font-bold leading-tight">
                    {option.name}
                  </span>
                </button>
              ))}
            </div>
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
