const solve = (n) => {
  if (n === 0) {
    return [""];
  }
  if (n === 1) {
    return ["0", "1"];
  }
  const prev = solve(n - 1);
  const result = [];
  // Add '0' to the start of previous gray codes and add them to result
  for (let i = 0; i < prev.length; i++) {
    result.push("0" + prev[i]);
  }
  // Add '1' to the start of previous gray codes in reverse order and add them to result
  for (let i = prev.length - 1; i >= 0; i--) {
    result.push("1" + prev[i]);
  }
  return result;
};

const grayCodes = solve(3);
console.log(grayCodes.map((code) => parseInt(code, 2)));
