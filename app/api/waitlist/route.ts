import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body?.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "waitlist-emails.txt");

    let existing = "";
    if (fs.existsSync(filePath)) {
      existing = fs.readFileSync(filePath, "utf8");
    }

    const emails = new Set(
      existing
        .split("\n")
        .map((line) => line.trim().toLowerCase())
        .filter(Boolean)
    );

    if (!emails.has(email)) {
      fs.appendFileSync(filePath, `${email}\n`, "utf8");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}
