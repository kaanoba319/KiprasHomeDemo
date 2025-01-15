import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  let ipAddress = req.headers.get("x-real-ip") || "Unknown";

  const forwardedFor = req.headers.get("x-forwarded-for");
  if (!ipAddress && forwardedFor) {
    ipAddress = forwardedFor.split(",")[0] || "Unknown";
  }

  return NextResponse.json({ ipAddress });
}
