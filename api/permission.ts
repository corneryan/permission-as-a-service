import type { VercelRequest, VercelResponse } from "@vercel/node";
import { permissions } from "../src/permissions.js";
import { weightedPick } from "../src/weightedPick.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const plain = req.query.plain === "true";
  const ip = req.headers["x-forwarded-for"] || "unknown";
  console.log(`Permission requested from IP: ${ip}`);

  if (Math.random() < 0.01) {
    const text = "You already know the answer.";
    return plain ? res.send(text) : res.json({ permission: text });
  }

  const requested = weightedPick(permissions.requested);
  const unsolicited = weightedPick(permissions.unsolicited);

  if (plain) {
    return res.send(`${requested}\n\n${unsolicited}`);
  }

  res.json({ requested, unsolicited });
}
