const solve = (n) => {
  const result = [];
  helper(0, 0, [], n, result);
  return result;
};

const helper = (open, closed, brackets, n, result) => {
  if (open + closed === 2 * n) {
    result.push(brackets.join(""));
    return;
  }
  if (open < n) {
    helper(open + 1, closed, brackets.concat("("), n, result);
  }
  if (closed < open) {
    helper(open, closed + 1, brackets.concat(")"), n, result);
  }
};

console.log(solve(3));

// TC: O(Catalan(n))
// SC: O(Catalan(n))
