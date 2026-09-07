"use client";

import { FormEvent, useMemo, useState } from "react";
import type { GamePlan, SkillLevel } from "@/lib/types";

const skillOptions: { value: SkillLevel; label: string }[] = [
  { value: "never", label: "Never played" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "paddle", label: "I just like holding the paddle" },
];

export function RsvpExperience() {
  const [choice, setChoice] = useState<GamePlan | null>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [gamePlan, setGamePlan] = useState<GamePlan>("both");
  const [skillLevel, setSkillLevel] = useState<SkillLevel | "">("");
  const [bringingGuest, setBringingGuest] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const choiceCopy = useMemo(() => {
    if (choice === "dink") return "You’re here to play. Court time locked.";
    if (choice === "drink") return "You’re here to party. Seat saved.";
    if (choice === "both") return "Obviously, the correct answer.";
    return "";
  }, [choice]);

  function selectPlan(plan: GamePlan) {
    setChoice(plan);
    setGamePlan(plan);
    requestAnimationFrame(() => {
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          attending,
          gamePlan,
          skillLevel,
          bringingGuest,
          guestName,
          notes,
        }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Could not save your RSVP.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <section
        id="dink-or-drink"
        className="relative overflow-hidden bg-blue px-4 py-16 sm:px-5 sm:py-20"
      >
        <div
          className="absolute inset-0 halftone opacity-35"
          style={{ ["--dot" as string]: "rgba(204,255,0,0.55)" }}
        />

        <div className="relative mx-auto max-w-5xl">
          <p className="kicker text-acid">THE BIG QUESTION</p>
          <h2 className="smash mt-3 text-4xl text-bone sm:text-6xl md:text-7xl">
            <span className="block warp glitch">SO... ARE YOU</span>
            <span className="block text-acid">HERE TO DINK</span>
            <span className="block warp-right outline-type-light">
              OR DRINK?
            </span>
          </h2>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <button
              type="button"
              onClick={() => selectPlan("dink")}
              aria-pressed={choice === "dink"}
              className={`border-[4px] border-ink p-6 text-left transition-transform sm:p-7 ${
                choice === "dink"
                  ? "-translate-y-1 bg-acid shadow-[10px_10px_0_var(--ink)]"
                  : "bg-bone shadow-[6px_6px_0_var(--ink)] hover:-translate-y-1"
              }`}
            >
              <p className="font-display text-4xl text-ink sm:text-5xl">
                🥒 DINK
              </p>
              <p className="mt-3 font-display text-base text-blue-deep sm:text-lg">
                I’M HERE TO PLAY
              </p>
              <p className="body-copy mt-3 text-ink/85">
                Open play • Friendly matches • Pickleball • Competition
              </p>
            </button>

            <button
              type="button"
              onClick={() => selectPlan("drink")}
              aria-pressed={choice === "drink"}
              className={`border-[4px] border-ink p-6 text-left transition-transform sm:p-7 ${
                choice === "drink"
                  ? "-translate-y-1 bg-pink shadow-[10px_10px_0_var(--ink)]"
                  : "bg-bone shadow-[6px_6px_0_var(--ink)] hover:-translate-y-1"
              }`}
            >
              <p
                className={`font-display text-4xl sm:text-5xl ${
                  choice === "drink" ? "text-bone" : "text-ink"
                }`}
              >
                🍸 DRINK
              </p>
              <p
                className={`mt-3 font-display text-base sm:text-lg ${
                  choice === "drink" ? "text-ink" : "text-pink-deep"
                }`}
              >
                I’M HERE TO PARTY
              </p>
              <p
                className={`body-copy mt-3 ${
                  choice === "drink" ? "text-bone" : "text-ink/85"
                }`}
              >
                Drinks • Food • Socializing • Good vibes
              </p>
            </button>
          </div>

          <button
            type="button"
            onClick={() => selectPlan("both")}
            aria-pressed={choice === "both"}
            className={`mt-5 w-full border-[4px] border-ink p-6 transition-transform sm:mt-6 ${
              choice === "both"
                ? "-translate-y-1 bg-cyan shadow-[10px_10px_0_var(--ink)]"
                : "bg-ink shadow-[6px_6px_0_var(--acid)] hover:-translate-y-1"
            }`}
          >
            <p
              className={`font-display text-2xl sm:text-3xl ${
                choice === "both" ? "text-ink" : "text-acid"
              }`}
            >
              🥒 DINK + 🍸 DRINK
            </p>
            <p
              className={`body-copy mt-2 ${
                choice === "both" ? "text-ink/85" : "text-bone/85"
              }`}
            >
              Obviously, the correct answer.
            </p>
          </button>
        </div>
      </section>

      <section
        id="rsvp"
        className="relative overflow-hidden bg-bone px-4 py-16 sm:px-5 sm:py-20"
      >
        <div className="absolute inset-0 court-grid opacity-20" />

        <div className="relative mx-auto max-w-2xl">
          <p className="kicker text-blue-deep">RSVP</p>
          <h2 className="smash mt-3 text-5xl text-ink sm:text-6xl md:text-7xl">
            <span className="block warp">SAVE YOUR SPOT</span>
          </h2>
          <p className="body-copy mt-4 text-ink/80">
            {choice
              ? choiceCopy
              : "Pick Dink, Drink, or both above — then lock it in."}
          </p>

          {status === "done" ? (
            <div className="pop-in mt-10 border-[4px] border-ink bg-acid p-6 text-center shadow-[10px_10px_0_var(--blue)] sm:p-8 sm:shadow-[12px_12px_0_var(--blue)]">
              <p className="font-display text-3xl text-ink sm:text-4xl">
                YOU’RE IN! 🥒🍸
              </p>
              <p className="body-copy mt-4 text-ink/85">
                Your spot is saved.
                <br />
                Now start working on your dink.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 border-[4px] border-ink bg-bone p-5 shadow-[8px_8px_0_var(--ink)] sm:p-8 sm:shadow-[12px_12px_0_var(--ink)]"
            >
              <div className="space-y-7">
                <label className="block">
                  <span className="kicker text-ink">NAME</span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full border-[3px] border-ink bg-white px-3 py-3 outline-none focus:bg-acid/30"
                  />
                </label>

                <label className="block">
                  <span className="kicker text-ink">EMAIL / PHONE</span>
                  <input
                    required
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    className="mt-2 w-full border-[3px] border-ink bg-white px-3 py-3 outline-none focus:bg-acid/30"
                  />
                </label>

                <fieldset>
                  <legend className="kicker text-ink">
                    ARE YOU JOINING US?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <Choice
                      checked={attending === "yes"}
                      onChange={() => setAttending("yes")}
                      label="Yes, I'm in!"
                    />
                    <Choice
                      checked={attending === "no"}
                      onChange={() => setAttending("no")}
                      label="Sadly, I'll miss it"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="kicker text-ink">
                    WHAT’S YOUR GAME PLAN?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <Choice
                      checked={gamePlan === "dink"}
                      onChange={() => setGamePlan("dink")}
                      label="🥒 Dink"
                    />
                    <Choice
                      checked={gamePlan === "drink"}
                      onChange={() => setGamePlan("drink")}
                      label="🍸 Drink"
                    />
                    <Choice
                      checked={gamePlan === "both"}
                      onChange={() => setGamePlan("both")}
                      label="🥒🍸 Dink + Drink"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="kicker text-ink">
                    IF YOU’RE PLAYING, WHAT’S YOUR LEVEL?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {skillOptions.map((option) => (
                      <Choice
                        key={option.value}
                        checked={skillLevel === option.value}
                        onChange={() => setSkillLevel(option.value)}
                        label={option.label}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="kicker text-ink">BRINGING A GUEST?</legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <Choice
                      checked={!bringingGuest}
                      onChange={() => {
                        setBringingGuest(false);
                        setGuestName("");
                      }}
                      label="No"
                    />
                    <Choice
                      checked={bringingGuest}
                      onChange={() => setBringingGuest(true)}
                      label="Yes"
                    />
                  </div>
                  {bringingGuest ? (
                    <input
                      required
                      placeholder="Guest Name"
                      value={guestName}
                      onChange={(event) => setGuestName(event.target.value)}
                      className="mt-4 w-full border-[3px] border-ink bg-white px-3 py-3 outline-none focus:bg-acid/30"
                    />
                  ) : null}
                </fieldset>

                <label className="block">
                  <span className="kicker text-ink">
                    ANYTHING WE SHOULD KNOW?
                  </span>
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={3}
                    className="mt-2 w-full resize-none border-[3px] border-ink bg-white px-3 py-3 outline-none focus:bg-acid/30"
                  />
                </label>

                {error ? (
                  <p className="border-[3px] border-ink bg-pink px-3 py-2.5 text-sm text-bone">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "saving"}
                  className="w-full border-[3px] border-ink bg-blue py-4 font-display text-lg text-acid shadow-[6px_6px_0_var(--ink)] transition-transform hover:-translate-y-1 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "saving" ? "SAVING…" : "COUNT ME IN"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Choice({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      className={`cursor-pointer border-[3px] border-ink px-3.5 py-2.5 text-base transition-transform ${
        checked
          ? "-translate-y-0.5 bg-acid font-bold text-ink shadow-[3px_3px_0_var(--ink)]"
          : "bg-white text-ink/75 hover:bg-acid/20"
      }`}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}
