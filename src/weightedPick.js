export function weightedPick(items) {
  const total = items.reduce((sum, i) => sum + i.weight, 0);
  let rand = Math.random() * total;

  for (const item of items) {
    if (rand < item.weight) return item.value;
    rand -= item.weight;
  }

  return items[items.length - 1].value;
}
