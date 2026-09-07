"use client";

import { useState } from "react";

const reminders = [
  { id: "shoes", label: "Bring comfortable court shoes", emoji: "👟" },
  { id: "water", label: "Bring water", emoji: "💧" },
  { id: "ready", label: "Arrive ready to play", emoji: "🏓" },
  { id: 'spf', label: 'Bring a light layer for after play', 
    emoji: '👕' },
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
    <div className="flex h-full flex-col border-[4px] border-ink bg-pink p-5 shadow-[8px_8px_0_var(--ink)] sm:p-7">
      <p className="kicker text-ink">CHECKLIST</p>
      <h2 className="smash mt-3 text-4xl text-bone sm:text-5xl">
        <span className="block warp">BEFORE YOU DINK</span>
      </h2>
      <p className="mt-4 font-mono text-sm font-bold tracking-[0.14em] text-ink">
        TAP TO PACK — {packed.length}/{reminders.length} DONE
      </p>

      <ul className="mt-6 space-y-2.5">
        {reminders.map((item) => {
          const done = packed.includes(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-pressed={done}
                className={`flex w-full items-center gap-3 border-[3px] border-ink px-3.5 py-3 text-left transition-transform ${
                  done
                    ? "bg-acid shadow-[3px_3px_0_var(--ink)]"
                    : "bg-bone shadow-[5px_5px_0_var(--ink)] hover:-translate-y-0.5"
                }`}
              >
                <span
                  className={`flex size-6 shrink-0 items-center justify-center border-[3px] border-ink font-display text-xs ${
                    done
                      ? "bg-blue text-acid"
                      : "bg-transparent text-transparent"
                  }`}
                  aria-hidden
                >
                  ✓
                </span>
                <span
                  className={`text-base ${
                    done ? "text-ink/60 line-through" : "text-ink"
                  }`}
                >
                  {item.label}
                </span>
                <span className="ml-auto text-lg" aria-hidden>
                  {item.emoji}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {allPacked ? (
        <p className="pop-in mt-auto pt-6">
          <span className="block border-[3px] border-ink bg-blue px-4 py-3.5 text-center font-display text-sm text-acid">
            CERTIFIED COURT READY 🥒
          </span>
        </p>
      ) : null}
    </div>
  );
}
