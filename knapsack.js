class Item {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
  }
}

function optimumSubjectToCapacity(items, capacity) {
  const cache = Array.from({ length: items.length }, () =>
    Array.from({ length: capacity + 1 }, () => -1)
  );
  return helper(0, capacity, items, cache);
}

function helper(idx, capacity, items, cache) {
  if (idx === items.length) {
    return 0;
  }
  if (cache[idx][capacity] === -1) {
    const weight = items[idx].weight;
    const value = items[idx].value;
    const valueIncluded =
      capacity - weight >= 0
        ? value + helper(idx + 1, capacity - weight, items, cache)
        : 0;
    const valueExcluded = helper(idx + 1, capacity, items, cache);
    cache[idx][capacity] = Math.max(valueIncluded, valueExcluded);
  }
  return cache[idx][capacity];
}

// Test the function
const items = [
  new Item(5, 60),
  new Item(3, 50),
  new Item(4, 70),
  new Item(2, 30),
];
const capacity = 5;
console.log(optimumSubjectToCapacity(items, capacity)); // Outputs the maximum value that can be obtained
