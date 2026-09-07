"use client";

import { ReactNode, useEffect, useState } from "react";

export function InvitationGate({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"closed" | "opening" | "open">("closed");

  useEffect(() => {
    if (phase === "open") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "opening") return;
    const timer = window.setTimeout(() => {
      setPhase("open");
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 720);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <>
      {phase !== "open" ? (
        <div
          className={`fixed inset-0 z-[100] overflow-hidden bg-acid ${
            phase === "opening" ? "gate-out" : ""
          }`}
        >
          <div
            className="absolute inset-0 halftone opacity-50"
            style={{ ["--dot" as string]: "rgba(108,43,255,0.5)" }}
          />
          <div className="absolute inset-0 court-grid opacity-30" />
          <div className="absolute -left-24 top-1/4 h-40 w-[140%] rotate-[-8deg] bg-pink/90 mix-blend-multiply" />

          <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
            <p className="font-display text-xs tracking-[0.4em] text-ink sm:text-sm">
              YOU’RE ON THE LIST
            </p>

            <h1 className="smash mt-5 text-[17vw] leading-[0.78] text-ink sm:text-[11vw] lg:text-[8.5rem]">
              <span className="block warp glitch">DINK</span>
              <span className="block text-pink-deep outline-type">OR</span>
              <span className="block warp-right glitch">DRINK</span>
            </h1>

            <div className="mt-8 inline-block -rotate-1 border-[3px] border-ink bg-bone px-5 py-3 shadow-[6px_6px_0_var(--ink)]">
              <p className="font-display text-sm text-ink sm:text-base">
                CHESTINE’S PICKLE PARTY
              </p>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-ink/70">
                DRINK · EAT · PLAY
              </p>
            </div>

            <button
              type="button"
              onClick={() => setPhase("opening")}
              className="group mt-10 flex items-center gap-4 border-[3px] border-ink bg-ink px-8 py-5 font-display text-lg text-acid shadow-[8px_8px_0_var(--pink)] transition-transform hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0_var(--pink)] sm:text-2xl"
            >
              <span className="ball-bounce text-2xl" aria-hidden>
                🥒
              </span>
              OPEN THE INVITE
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </button>

            <p className="mt-6 flicker text-[11px] tracking-[0.3em] text-ink/70">
              TAP TO REVEAL
            </p>
          </div>
        </div>
      ) : null}

      <div
        className={phase === "open" ? "pop-in" : "pointer-events-none"}
        aria-hidden={phase !== "open"}
      >
        {children}
      </div>
    </>
  );
}
