class Item {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
  }
}

const solve = (items, capacity) => {
  const cache = new Map();
  return helper(0, capacity, items, cache);
};

const helper = (i, capacity, items, cache) => {
  if (i === items.length) {
    return 0;
  }
  const key = `${i},${capacity}`;
  if (cache.has(key)) {
    return cache.get(key);
  }
  const { weight, value } = items[i];
  let taken = 0;
  if (capacity >= weight) {
    taken = value + helper(i + 1, capacity - weight, items, cache);
  }
  const notTaken = helper(i + 1, capacity, items, cache);
  cache.set(key, Math.max(taken, notTaken));
  return cache.get(key);
};

const items = [
  new Item(5, 60),
  new Item(3, 50),
  new Item(4, 70),
  new Item(2, 30),
];

const capacity = 5;
console.log(solve(items, capacity));
