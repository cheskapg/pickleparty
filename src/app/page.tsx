import { DrinkEatPlay } from "@/components/DrinkEatPlay";
import { Hero } from "@/components/Hero";
import { InvitationGate } from "@/components/InvitationGate";
import { Marquee } from "@/components/Marquee";
import { Reminders } from "@/components/Reminders";
import { RsvpExperience } from "@/components/RsvpExperience";
import { Safety } from "@/components/Safety";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatToWear } from "@/components/WhatToWear";

export default function Home() {
  return (
    <InvitationGate>
      <div className="flex min-h-full flex-col">
        <SiteHeader />
        <main>
          <Hero />
          <DrinkEatPlay />
          <WhatToWear />
          <Reminders />
          <Safety />
          <RsvpExperience />
        </main>
        <footer className="bg-ink">
          <Marquee
            className="border-y-0 bg-acid text-ink"
            items={["DINK OR DRINK", "CHESTINE’S PICKLE PARTY", "DRINK · EAT · PLAY"]}
          />
          <div className="px-5 py-12 text-center">
            <p className="smash text-4xl text-bone sm:text-5xl">
              <span className="block warp-right">DINK OR DRINK</span>
            </p>
            <p className="mt-3 text-[11px] tracking-[0.28em] text-bone/60">
              CHESTINE’S PICKLE PARTY · EST. 50
            </p>
          </div>
        </footer>
      </div>
    </InvitationGate>
  );
}
