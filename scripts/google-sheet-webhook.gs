/**
 * Google Apps Script that appends each RSVP to a Google Sheet.
 *
 * SETUP (about 3 minutes)
 * 1. Create a new Google Sheet — name it whatever you like, e.g. "Pickle Party RSVPs".
 * 2. In that sheet: Extensions > Apps Script. Delete the sample code and paste this file.
 * 3. Change SECRET_TOKEN below to any random string you make up.
 * 4. Deploy > New deployment > type "Web app".
 *      - Description: RSVP intake
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, allow the permissions it asks for, then copy the Web app URL.
 * 5. In the project root, create a file named `.env.local` containing:
 *      GOOGLE_SHEET_WEBHOOK_URL=<the Web app URL you copied>
 *      GOOGLE_SHEET_TOKEN=<the same string you set as SECRET_TOKEN>
 * 6. Restart `npm run dev`. Submit a test RSVP — a new row appears in the sheet.
 *
 * If you edit this script later, deploy again with Deploy > Manage deployments >
 * edit > Version: New version, otherwise the old code keeps running.
 */

const SHEET_NAME = "RSVPs";
const SECRET_TOKEN = "pikol";

const HEADERS = [
  "Submitted at",
  "Name",
  "Email / phone",
  "Attending",
  "Game plan",
  "Skill level",
  "Bringing guest",
  "Guest name",
  "Notes",
];

function doPost(request) {
  try {
    const body = JSON.parse(request.postData.contents);

    if (SECRET_TOKEN && body.token !== SECRET_TOKEN) {
      return reply({ ok: false, error: "Invalid token" });
    }

    const sheet = getSheet();
    sheet.appendRow([
      body.createdAt || new Date().toISOString(),
      body.name || "",
      body.contact || "",
      body.attending === "yes" ? "Yes" : "No",
      body.gamePlan || "",
      body.skillLevel || "",
      body.bringingGuest ? "Yes" : "No",
      body.guestName || "",
      body.notes || "",
    ]);

    return reply({ ok: true });
  } catch (error) {
    return reply({ ok: false, error: String(error) });
  }
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function reply(payload) {
  return ContentService.createTextOutput(
    JSON.stringify(payload),
  ).setMimeType(ContentService.MimeType.JSON);
}
