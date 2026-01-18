import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import permissions from "./permissions.json" with { type: "json" };
import weightedPick from "./weightedPick.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/permission", (req, res) => {
  const plain = req.query.plain === "true";
  // ultra-rare override (1%)
  if (Math.random() < 0.01) {
    const text = "You already know the answer.";
    return plain ? res.send(text) : res.json({ permission: text });
  }

  const requested = weightedPick(permissions.requested);
  const unsolicited = weightedPick(permissions.unsolicited);

  if (plain) {
    return res.send(`${requested}\n\n${unsolicited}`);
  }

  res.json({
    requested,
    unsolicited,
  });
});

app.get("/", (_req, res) => {
  res.send("Permission-as-a-Service is running.");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
