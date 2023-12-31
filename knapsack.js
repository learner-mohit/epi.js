class Item {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
  }
}

const solve = (items, capacity) => {
  const cache = Array.from({ length: items.length }, () =>
    Array.from({ length: capacity + 1 }, () => -1)
  );
  return helper(0, capacity, items, cache);
};

const helper = (i, capacity, items, cache) => {
  if (i === items.length) {
    return 0;
  }
  if (cache[i][capacity] === -1) {
    const { weight, value } = items[i];
    const valueExcluded = helper(i + 1, capacity, items, cache);
    const valueIncluded =
      capacity - weight >= 0
        ? value + helper(i + 1, capacity - weight, items, cache)
        : 0;
    cache[i][capacity] = Math.max(valueExcluded, valueIncluded);
  }
  return cache[i][capacity];
};

const items = [
  new Item(5, 60),
  new Item(3, 50),
  new Item(4, 70),
  new Item(2, 30),
];

const capacity = 5;
console.log(solve(items, capacity));
