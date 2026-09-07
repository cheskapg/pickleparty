"use client";

import { useState } from "react";

const reminders = [
  { id: "shoes", label: "Bring comfortable court shoes", emoji: "👟" },
  { id: "water", label: "Bring water", emoji: "💧" },
  { id: "ready", label: "Arrive ready to play", emoji: "🏓" },
  { id: "spf", label: "Sunscreen recommended", emoji: "☀️" },
  { id: "stretch", label: "Stretch before hitting the court", emoji: "🤸" },
  {
    id: "attitude",
    label: "Don’t forget your best pickleball attitude",
    emoji: "😎",
  },
];

export function Reminders() {
  const [packed, setPacked] = useState<string[]>([]);

  function toggle(id: string) {
    setPacked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  const allPacked = packed.length === reminders.length;

  return (
    <section className="relative overflow-hidden bg-pink px-4 py-16 sm:px-5 sm:py-20">
      <div className="absolute inset-0 court-grid opacity-25" />

      <div className="relative mx-auto max-w-3xl">
        <p className="kicker text-ink">CHECKLIST</p>
        <h2 className="smash mt-3 text-5xl text-bone sm:text-6xl md:text-7xl">
          <span className="block warp">BEFORE YOU DINK</span>
        </h2>
        <p className="mt-4 font-mono text-sm font-bold tracking-[0.14em] text-ink">
          TAP TO PACK — {packed.length}/{reminders.length} DONE
        </p>

        <ul className="mt-8 space-y-3">
          {reminders.map((item) => {
            const done = packed.includes(item.id);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-pressed={done}
                  className={`flex w-full items-center gap-3.5 border-[3px] border-ink px-4 py-4 text-left transition-transform sm:gap-4 ${
                    done
                      ? "bg-acid shadow-[3px_3px_0_var(--ink)]"
                      : "bg-bone shadow-[6px_6px_0_var(--ink)] hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center border-[3px] border-ink font-display text-sm ${
                      done
                        ? "bg-blue text-acid"
                        : "bg-transparent text-transparent"
                    }`}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span
                    className={`text-base sm:text-lg ${
                      done ? "text-ink/60 line-through" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="ml-auto text-xl" aria-hidden>
                    {item.emoji}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {allPacked ? (
          <p className="pop-in mt-8 border-[3px] border-ink bg-blue px-5 py-4 text-center font-display text-base text-acid">
            CERTIFIED COURT READY 🥒
          </p>
        ) : null}
      </div>
    </section>
  );
}
