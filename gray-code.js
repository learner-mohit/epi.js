const solve = (n) => {
  if (n === 0) {
    return [""];
  }
  if (n === 1) {
    return ["0", "1"];
  }
  const prev = solve(n - 1);
  const result = [];
  for (let i = 0; i < prev.length; i++) {
    result.push("0" + prev[i]);
  }
  for (let i = prev.length - 1; i >= 0; i--) {
    result.push("1" + prev[i]);
  }
  return result;
};

const grayCodes = solve(3);
console.log(grayCodes.map((code) => parseInt(code, 2)));

// TC: O(n*2^n)
// SC: O(n*2^n)
