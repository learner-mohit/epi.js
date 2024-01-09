const NUM_PEGS = 3;

const solve = (numRings) => {
  const result = [];
  helper(numRings, 0, 1, 2, result);
  return result;
};

const helper = (n, A, B, C, result) => {
  if (n === 0) {
    return;
  }
  helper(n - 1, A, C, B, result);
  result.push([A, B]);
  helper(n - 1, C, B, A, result);
};

console.log(solve(3));

// TC: O(2^n)
// SC: O(2^n)
