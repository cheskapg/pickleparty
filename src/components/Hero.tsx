import { CouplePhoto } from "./CouplePhoto";
import { Emblem50 } from "./Emblem50";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blue-deep">
      <div className="absolute inset-0 court-grid opacity-35" />
      <div
        className="absolute inset-0 halftone opacity-40"
        style={{ ["--dot" as string]: "rgba(204,255,0,0.5)" }}
      />
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-pink/70 mix-blend-hard-light sm:size-[26rem]" />
      <div className="absolute -left-20 bottom-10 size-56 rounded-full bg-cyan/40 mix-blend-hard-light sm:size-80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <div className="inline-block -rotate-2 border-[3px] border-ink bg-acid px-3 py-1.5 font-display text-xs text-ink shadow-[4px_4px_0_var(--ink)]">
            OPEN PLAY · INVITATION 001
          </div>

          <h1 className="smash mt-6 text-[13.5vw] text-bone md:text-[6.5rem]">
            <span className="block warp glitch">CHESTINE’S</span>
            <span className="block text-acid">PICKLE</span>
            <span className="block warp-right outline-type-light">PARTY</span>
          </h1>

          <div className="mt-7 inline-block rotate-1 bg-acid px-4 py-2 font-display text-lg text-ink shadow-[6px_6px_0_var(--ink)] sm:text-2xl">
            DINK · DRINK · REPEAT
          </div>

          <p className="body-copy mt-6 max-w-md text-bone">
            A loud little celebration on the court. Paddles up, drinks cold,
            playlist unhinged.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#dink-or-drink"
              className="border-[3px] border-ink bg-pink px-6 py-4 text-center font-display text-sm text-bone shadow-[6px_6px_0_var(--ink)] transition-transform hover:-translate-y-1 sm:py-3.5"
            >
              PICK YOUR SIDE
            </a>
            <a
              href="#play"
              className="border-[3px] border-ink bg-bone px-6 py-4 text-center font-display text-sm text-ink shadow-[6px_6px_0_var(--acid)] transition-transform hover:-translate-y-1 sm:py-3.5"
            >
              SEE THE LINEUP
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]">
          <div className="absolute -inset-3 rotate-3 stripes opacity-25" />
          <div className="relative rotate-[-2deg] border-[4px] border-ink bg-bone p-3 shadow-[10px_10px_0_var(--acid)] sm:shadow-[14px_14px_0_var(--acid)]">
            <CouplePhoto
              label="COUPLE PHOTO"
              hint="Add your photo to public/images and pass it as src."
              className="aspect-[3/4] border-[3px] border-ink"
            />
            <div className="mt-3 flex items-center justify-between gap-2">
              <p className="font-display text-xs text-ink sm:text-sm">
                THE HOSTS
              </p>
              <p className="font-mono text-xs tracking-[0.16em] text-ink/70">
                MVP · UNDEFEATED
              </p>
            </div>
          </div>

          <Emblem50 className="absolute -left-3 -top-4 wobble size-14 bg-cyan sm:-left-4 sm:-top-5 sm:size-16" />
          <div className="absolute -bottom-4 -right-3 rotate-6 border-[3px] border-ink bg-acid px-3 py-1.5 font-display text-xs text-ink shadow-[4px_4px_0_var(--ink)]">
            SERVE’S UP
          </div>
        </div>
      </div>

      <Marquee
        className="bg-acid text-ink"
        items={[
          "DINK OR DRINK",
          "OPEN PLAY",
          "COLD DRINKS",
          "GOOD VIBES",
          "PADDLES UP",
        ]}
      />
    </section>
  );
}
