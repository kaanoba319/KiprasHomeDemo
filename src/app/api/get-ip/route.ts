import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  let ipAddress = req.headers["x-real-ip"] as string;

  const forwardedFor = req.headers["x-forwarded-for"] as string;
  if (!ipAddress && forwardedFor) {
    ipAddress = forwardedFor?.split(",").at(0) ?? "Unknown";
  }

  res.status(200).json(ipAddress);
}
