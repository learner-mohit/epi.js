const solve = (nums) => {
  const cache = new Map();
  return helper(0, -Infinity, nums, cache);
};
const helper = (i, prev, nums, cache) => {
  if (i === nums.length) {
    return 0;
  }
  const key = `${i},${prev}`;
  if (cache.has(key)) {
    return cache.get(key);
  }
  let taken = 0;
  if (nums[i] > prev) {
    taken = helper(i + 1, nums[i], nums, cache) + 1;
  }
  const notTaken = helper(i + 1, prev, nums, cache);
  cache.set(key, Math.max(taken, notTaken));
  return cache.get(key);
};
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(solve(nums));
