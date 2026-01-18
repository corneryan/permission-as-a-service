type WeightedItem = {
  text: string;
  weight: number;
};

export default function weightedPick(items: WeightedItem[]): string {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of items) {
    if (random < item.weight) {
      return item.text;
    }
    random -= item.weight;
  }

  return items.at(-1)!.text;
}
