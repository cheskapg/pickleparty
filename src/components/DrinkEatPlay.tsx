import { DrinkVector } from "./vectors/DrinkVector";
import { FoodVector } from "./vectors/FoodVector";
import { PaddleVector } from "./vectors/PaddleVector";

const cards = [
  {
    title: "DRINK",
    art: DrinkVector,
    copy: "Good drinks, good people, questionable decisions.",
    tags: ["Cocktails", "Ice cold", "Refills"],
    panel: "bg-blue",
    dot: "rgba(204,255,0,0.55)",
    body: "bg-acid",
    text: "text-ink",
    rotate: "sm:-rotate-1",
  },
  {
    title: "EAT",
    art: FoodVector,
    copy: "Come hungry. Lechon, BBQ, and everything off the grill.",
    tags: ["Lechon", "BBQ sticks", "Rice, obviously"],
    panel: "bg-pink",
    dot: "rgba(13,15,10,0.4)",
    body: "bg-bone",
    text: "text-ink",
    rotate: "sm:rotate-1",
  },
  {
    title: "PLAY",
    art: PaddleVector,
    copy: "Open play, friendly competition, and plenty of dinking.",
    tags: ["Open play", "Doubles", "Bragging rights"],
    panel: "bg-violet",
    dot: "rgba(23,233,255,0.5)",
    body: "bg-cyan",
    text: "text-ink",
    rotate: "sm:-rotate-2",
  },
];

export function DrinkEatPlay() {
  return (
    <section
      id="play"
      className="relative overflow-hidden bg-bone px-4 py-16 sm:px-5 sm:py-20"
    >
      <div className="absolute inset-0 court-grid opacity-20" />

      <div className="relative mx-auto max-w-6xl">
        <p className="kicker text-blue-deep">THE LINEUP</p>
        <h2 className="smash mt-3 text-5xl text-ink sm:text-7xl md:text-8xl">
          <span className="warp block">DRINK EAT PLAY</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card) => {
            const Art = card.art;
            return (
              <article
                key={card.title}
                className={`${card.rotate} border-[4px] border-ink shadow-[8px_8px_0_var(--ink)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-2 sm:shadow-[10px_10px_0_var(--ink)]`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden border-b-[4px] border-ink ${card.panel}`}
                >
                  <div
                    className="absolute inset-0 halftone opacity-45"
                    style={{ ["--dot" as string]: card.dot }}
                  />
                  <Art className="relative size-full p-5" />
                </div>

                <div className={`p-5 ${card.body} ${card.text}`}>
                  <p className="font-display text-3xl leading-none sm:text-4xl">
                    {card.title}
                  </p>
                  <p className="body-copy mt-3">{card.copy}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border-2 border-ink bg-white/70 px-2.5 py-1 text-sm font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
