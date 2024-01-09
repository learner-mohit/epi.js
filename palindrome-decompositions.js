const solve = (s) => {
  const result = [];
  helper(0, [], s, result);
  return result;
};
const helper = (i, decomposition, s, result) => {
  if (i === s.length) {
    result.push(decomposition);
    return;
  }
  for (let j = i + 1; j <= s.length; j++) {
    const prefix = s.substring(i, j);
    if (isPalindrome(prefix)) {
      helper(j, decomposition.concat(prefix), s, result);
    }
  }
};

const isPalindrome = (s) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};

console.log(solve("1881"));
console.log(solve("0204451881"));
