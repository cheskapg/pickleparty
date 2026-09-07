import { Marquee } from "./Marquee";

const rules = [
  { tag: "WARM UP", copy: "Loosen up before the first serve." },
  { tag: "HYDRATE", copy: "Water between games, always." },
  { tag: "TAKE BREAKS", copy: "The court will still be there." },
  { tag: "KNOW YOUR LIMITS", copy: "No hero dives, please." },
];

export function Safety() {
  return (
    <section className="relative overflow-hidden bg-cyan">
      <Marquee
        fast
        className="border-t-0 bg-blue-deep text-acid"
        items={["PLAY SMART", "HYDRATE", "STRETCH", "RIDE HOME SAFE"]}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20">
        <div
          className="absolute inset-0 halftone opacity-30"
          style={{ ["--dot" as string]: "rgba(27,82,255,0.45)" }}
        />
        <div className="relative">
          <h2 className="smash text-5xl text-ink sm:text-6xl md:text-7xl">
            <span className="block warp">PLAY SMART</span>
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {rules.map((rule) => (
              <div
                key={rule.tag}
                className="border-[3px] border-ink bg-bone p-5 shadow-[6px_6px_0_var(--blue-deep)]"
              >
                <p className="font-display text-lg text-blue-deep">
                  {rule.tag}
                </p>
                <p className="body-copy mt-2 text-ink/85">{rule.copy}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 -rotate-1 border-[3px] border-ink bg-ink px-5 py-5 text-center font-display text-sm text-acid shadow-[6px_6px_0_var(--pink)] sm:text-base">
            IF YOU’RE DRINKING, PLEASE GET A SAFE RIDE HOME.
          </p>
        </div>
      </div>
    </section>
  );
}
