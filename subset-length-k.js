const solve = (arr, k) => {
  const result = [];
  helper(0, [], k, arr, result);
  return result;
};

const helper = (i, subset, k, arr, result) => {
  if (subset.length === k) {
    result.push(subset);
    return;
  }
  for (let j = i; j < arr.length; j++) {
    helper(j + 1, subset.concat(arr[j]), k, arr, result);
  }
};
console.log(solve(["a", "b", "c"], 3));
console.log(solve(["a", "b", "c"], 2));
