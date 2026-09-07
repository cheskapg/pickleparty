import { NextResponse } from "next/server";
import { saveRsvp } from "@/lib/rsvpStore";
import type { GamePlan, RsvpPayload, SkillLevel } from "@/lib/types";

const gamePlans: GamePlan[] = ["dink", "drink", "both"];
const skillLevels: Array<SkillLevel | ""> = [
  "",
  "never",
  "beginner",
  "intermediate",
  "advanced",
  "paddle",
];

export async function POST(request: Request) {
  let body: Partial<RsvpPayload>;
  try {
    body = (await request.json()) as Partial<RsvpPayload>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const contact = body.contact?.trim() ?? "";
  const attending = body.attending;
  const gamePlan = body.gamePlan;
  const skillLevel = body.skillLevel ?? "";
  const bringingGuest = Boolean(body.bringingGuest);
  const guestName = body.guestName?.trim() ?? "";
  const notes = body.notes?.trim() ?? "";

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Name and email/phone are required." },
      { status: 400 },
    );
  }
  if (attending !== "yes" && attending !== "no") {
    return NextResponse.json({ error: "Please tell us if you’re joining." }, { status: 400 });
  }
  if (!gamePlan || !gamePlans.includes(gamePlan)) {
    return NextResponse.json({ error: "Choose a game plan." }, { status: 400 });
  }
  if (!skillLevels.includes(skillLevel)) {
    return NextResponse.json({ error: "Choose a skill level." }, { status: 400 });
  }
  if (bringingGuest && !guestName) {
    return NextResponse.json({ error: "Add your guest’s name." }, { status: 400 });
  }

  const entry = {
    name,
    contact,
    attending,
    gamePlan,
    skillLevel,
    bringingGuest,
    guestName: bringingGuest ? guestName : "",
    notes,
    createdAt: new Date().toISOString(),
  };

  const saved = await saveRsvp(entry);
  if (!saved) {
    return NextResponse.json(
      { error: "We couldn’t save your RSVP. Please try again or text us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
