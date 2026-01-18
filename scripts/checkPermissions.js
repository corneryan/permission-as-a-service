import { permissions } from "../src/permissions.js";

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function findDuplicates(list, label) {
  const seen = new Map();

  for (const { value } of list) {
    const key = normalize(value);
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(value);
  }

  const duplicates = [...seen.values()].filter((v) => v.length > 1);

  if (duplicates.length) {
    console.log(`\n⚠️ Duplicates in ${label}:`);
    duplicates.forEach((d) => console.log(" -", d));
  } else {
    console.log(`✅ No duplicates in ${label}`);
  }
}

function weightStats(list, label) {
  const stats = {};

  for (const { weight } of list) {
    stats[weight] = (stats[weight] || 0) + 1;
  }

  console.log(`\n📊 Weight distribution (${label}):`);
  Object.keys(stats)
    .sort((a, b) => Number(b) - Number(a))
    .forEach((w) => {
      console.log(`  weight ${w}: ${stats[w]}`);
    });
}

findDuplicates(permissions.requested, "requested");
findDuplicates(permissions.unsolicited, "unsolicited");

weightStats(permissions.requested, "requested");
weightStats(permissions.unsolicited, "unsolicited");
