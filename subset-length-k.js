const solve = (arr, k) => {
  const result = [];
  helper(0, [], arr, result, k);
  return result;
};

const helper = (i, subset, arr, result, k) => {
  if (subset.length === k) {
    result.push(subset);
    return;
  }
  if (i === arr.length) {
    return;
  }
  helper(i + 1, subset.concat(arr[i]), arr, result, k);
  helper(i + 1, subset, arr, result, k);
};

console.log(solve(["a", "b", "c"], 2));