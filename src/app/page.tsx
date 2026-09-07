import {
  CelebrantGallery,
  type GallerySlide,
} from "@/components/CelebrantGallery";
import { CourtBriefing } from "@/components/CourtBriefing";
import { DrinkEatPlay } from "@/components/DrinkEatPlay";
import { Hero } from "@/components/Hero";
import { InvitationGate } from "@/components/InvitationGate";
import { Marquee } from "@/components/Marquee";
import { MusicDock } from "@/components/MusicDock";
import { RsvpExperience } from "@/components/RsvpExperience";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatToWear } from "@/components/WhatToWear";
import { findPhoto } from "@/lib/photos";

// Drop files in public/images using these base names, any image extension.
const galleryFrames = [
  { base: "celebrant-01", label: "CELEBRANTS — HERO SHOT" },
  { base: "celebrant-02", label: "ON-COURT MOMENT" },
  { base: "celebrant-03", label: "THROWBACK FRAME" },
  { base: "celebrant-04", label: "PARTY PORTRAIT" },
  { base: "celebrant-05", label: "CANDID ENERGY" },
];

export default function Home() {
  const slides: GallerySlide[] = galleryFrames.map((frame) => ({
    src: findPhoto(frame.base),
    label: frame.label,
    note: `${frame.base}.*`,
  }));

  return (
    <>
      <InvitationGate>
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main>
            <Hero couplePhoto={findPhoto("couple")} />
            <CelebrantGallery slides={slides} />
            <DrinkEatPlay />
            <WhatToWear />
            <CourtBriefing />
            <RsvpExperience />
          </main>
          <footer className="bg-blue-deep">
            <Marquee
              className="border-y-0 bg-acid text-ink"
              items={[
                "DINK OR DRINK",
                "CHESTINE’S PICKLE PARTY",
                "DRINK · EAT · PLAY",
              ]}
            />
            <div className="px-4 py-12 text-center sm:px-5">
              <p className="smash text-4xl text-bone sm:text-5xl">
                <span className="block warp-right">DINK OR DRINK</span>
              </p>
              <p className="mt-3 font-mono text-sm tracking-[0.2em] text-bone/70">
                CHESTINE’S PICKLE PARTY · EST. 50
              </p>
            </div>
          </footer>
        </div>
      </InvitationGate>
      <MusicDock />
    </>
  );
}
