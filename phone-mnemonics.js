const solve = (phoneNumber) => {
  const result = [];
  const map = new Map([
    ["0", ""],
    ["1", ""],
    ["2", "ABC"],
    ["3", "DEF"],
    ["4", "GHI"],
    ["5", "JKL"],
    ["6", "MNO"],
    ["7", "PQRS"],
    ["8", "TUV"],
    ["9", "WXYZ"],
  ]);
  helper(0, "", phoneNumber, map, result);
  return result;
};

const helper = (i, prefix, phoneNumber, map, result) => {
  if (i === phoneNumber.length) {
    result.push(prefix);
    return;
  }
  for (let ch of map.get(phoneNumber[i])) {
    helper(i + 1, prefix + ch, phoneNumber, map, result);
  }
};

console.log(solve("23"));
