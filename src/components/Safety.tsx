const rules = [
  { tag: "WARM UP", copy: "Loosen up before the first serve." },
  { tag: "HYDRATE", copy: "Water between games, always." },
  { tag: "TAKE BREAKS", copy: "The court will still be there." },
  { tag: "KNOW YOUR LIMITS", copy: "No hero dives, please." },
];

export function Safety() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden border-[4px] border-ink bg-cyan p-5 shadow-[8px_8px_0_var(--ink)] sm:p-7">
      <div
        className="absolute inset-0 halftone opacity-30"
        style={{ ["--dot" as string]: "rgba(27,82,255,0.45)" }}
      />

      <div className="relative flex h-full flex-col">
        <p className="kicker text-blue-deep">SAFETY</p>
        <h2 className="smash mt-3 text-4xl text-ink sm:text-5xl">
          <span className="block warp">PLAY SMART</span>
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {rules.map((rule) => (
            <div
              key={rule.tag}
              className="border-[3px] border-ink bg-bone p-4 shadow-[5px_5px_0_var(--blue-deep)]"
            >
              <p className="font-display text-base text-blue-deep">
                {rule.tag}
              </p>
              <p className="mt-1.5 text-base leading-relaxed text-ink/85">
                {rule.copy}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-auto pt-6">
          <span className="block -rotate-1 border-[3px] border-ink bg-ink px-4 py-4 text-center font-display text-sm text-acid shadow-[5px_5px_0_var(--pink)]">
            IF YOU’RE DRINKING, PLEASE GET A SAFE RIDE HOME.
          </span>
        </p>
      </div>
    </div>
  );
}
