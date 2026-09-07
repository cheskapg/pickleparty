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
            style={{ ["--dot" as string]: "rgba(27,82,255,0.5)" }}
          />
          <div className="absolute inset-0 court-grid opacity-30" />
          <div className="absolute -left-24 top-1/4 h-32 w-[140%] rotate-[-8deg] border-y-[3px] border-ink bg-pink sm:h-40" />
          <div className="absolute -right-24 bottom-[22%] h-16 w-[130%] rotate-[6deg] border-y-[3px] border-ink bg-blue sm:h-24" />

          <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
            <p className="kicker text-ink">YOU’RE ON THE LIST</p>

            <h1 className="smash mt-5 text-[17vw] leading-[0.8] text-ink sm:text-[11vw] lg:text-[8.5rem]">
              <span className="block warp glitch">DINK</span>
              <span className="block text-blue-deep outline-type">OR</span>
              <span className="block warp-right glitch">DRINK</span>
            </h1>

            <div className="mt-8 inline-block -rotate-1 border-[3px] border-ink bg-bone px-5 py-3 shadow-[6px_6px_0_var(--ink)]">
              <p className="font-display text-sm text-ink sm:text-base">
                CHESTINE’S PICKLE PARTY
              </p>
              <p className="mt-1.5 text-sm font-medium leading-snug text-blue-deep">
                A Golden play — come for the dink, stay for the drink.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event("invitation-opened"));
                setPhase("opening");
              }}
              className="group mt-10 flex w-full max-w-sm items-center justify-center gap-3 border-[3px] border-ink bg-ink px-6 py-5 font-display text-lg text-acid shadow-[8px_8px_0_var(--pink)] transition-transform hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0_var(--pink)] sm:gap-4 sm:px-8 sm:text-2xl"
            >
              <span className="ball-bounce text-2xl" aria-hidden>
                🥒
              </span>
              OPEN THE INVITE
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </button>

            <p className="mt-6 flicker font-mono text-sm tracking-[0.22em] text-ink/75">
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
