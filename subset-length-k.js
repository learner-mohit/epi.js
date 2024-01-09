const solve = (A, k) => {
  const result = [];
  helper(0, [], k, A, result);
  return result;
};
const helper = (i, subset, k, A, result) => {
  if (subset.length === k) {
    result.push(subset);
    return;
  }
  if (i === A.length) {
    return;
  }
  helper(i + 1, subset.concat(A[i]), k, A, result);
  helper(i + 1, subset, k, A, result);
};
console.log(solve(["a", "b", "c"], 3));
console.log(solve(["a", "b", "c"], 2));
