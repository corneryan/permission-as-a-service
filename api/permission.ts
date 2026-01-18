import type { VercelRequest, VercelResponse } from "@vercel/node";
import { weightedPick } from "../src/weightedPick.js";
import { permissions } from "../src/permissions.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const plain =
      typeof req.query.plain === "string" && req.query.plain === "true";

    if (Math.random() < 0.01) {
      const text = "You already know the answer.";
      return plain ? res.send(text) : res.json({ permission: text });
    }

    if (!permissions) {
      throw new Error("permissions not loaded");
    }

    const requested = weightedPick(permissions.requested);
    const unsolicited = weightedPick(permissions.unsolicited);

    if (plain) {
      return res.send(`${requested}\n\n${unsolicited}`);
    }

    res.json({ requested, unsolicited });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error" });
  }
}
