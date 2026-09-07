import { Marquee } from "./Marquee";
import { Reminders } from "./Reminders";
import { Safety } from "./Safety";

export function CourtBriefing() {
  return (
    <section id="briefing" className="relative overflow-hidden bg-blue-deep">
      <Marquee
        fast
        className="border-t-0 bg-acid text-ink"
        items={["PLAY SMART", "HYDRATE", "STRETCH", "RIDE HOME SAFE"]}
      />

      <div className="relative px-4 py-16 sm:px-5 sm:py-20">
        <div className="absolute inset-0 court-grid opacity-20" />
        <div className="relative mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <Reminders />
          <Safety />
        </div>
      </div>
    </section>
  );
}
