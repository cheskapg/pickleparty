export type GamePlan = "dink" | "drink" | "both";

export type SkillLevel =
  | "never"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "paddle";

export type RsvpPayload = {
  name: string;
  contact: string;
  attending: "yes" | "no";
  gamePlan: GamePlan;
  skillLevel: SkillLevel | "";
  bringingGuest: boolean;
  guestName: string;
  notes: string;
};
