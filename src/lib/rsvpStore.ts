import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "rsvps.json");

export type RsvpEntry = {
  name: string;
  contact: string;
  attending: "yes" | "no";
  gamePlan: string;
  skillLevel: string;
  bringingGuest: boolean;
  guestName: string;
  notes: string;
  createdAt: string;
};

/**
 * Sends an RSVP to the Google Sheet web app when GOOGLE_SHEET_WEBHOOK_URL is
 * set, and always keeps a local copy in data/rsvps.json when the filesystem
 * allows it (works locally; silently skipped on read-only hosts).
 */
export async function saveRsvp(entry: RsvpEntry): Promise<boolean> {
  const [sheetSaved, fileSaved] = await Promise.all([
    saveToSheet(entry),
    saveToFile(entry),
  ]);
  return sheetSaved || fileSaved;
}

async function saveToSheet(entry: RsvpEntry): Promise<boolean> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return false;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...entry,
        token: process.env.GOOGLE_SHEET_TOKEN ?? "",
      }),
    });
    // Apps Script always answers 200, so the body carries the real result.
    const result = (await response.json()) as { ok?: boolean; error?: string };
    if (!response.ok || !result.ok) {
      console.error("RSVP sheet write failed:", result.error ?? response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("RSVP sheet write failed:", error);
    return false;
  }
}

async function saveToFile(entry: RsvpEntry): Promise<boolean> {
  try {
    await mkdir(dataDir, { recursive: true });
    let existing: unknown[] = [];
    try {
      const raw = await readFile(dataFile, "utf8");
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      existing = [];
    }
    existing.push(entry);
    await writeFile(dataFile, JSON.stringify(existing, null, 2));
    return true;
  } catch {
    // Read-only filesystem (Vercel and friends) — the sheet is the record.
    return false;
  }
}
