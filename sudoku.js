const solve = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === ".") {
        return tryAllValues(row, col, grid);
      }
    }
  }
  return true;
};

const tryAllValues = (row, col, grid) => {
  for (let num = 1; num <= 9; num++) {
    if (checkValid(row, col, num.toString(), grid)) {
      grid[row][col] = num.toString();
      if (solve(grid)) {
        return true;
      }
      grid[row][col] = ".";
    }
  }
  return false;
};

const checkValid = (r, c, val, grid) => {
  for (let i = 0; i < 9; i++) {
    if (
      grid[r][i] === val ||
      grid[i][c] === val ||
      grid[3 * Math.floor(r / 3) + Math.floor(i / 3)][
        3 * Math.floor(c / 3) + Math.floor(i % 3)
      ] === val
    ) {
      return false;
    }
  }
  return true;
};

const grid = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

if (solve(grid)) {
  console.log(grid);
} else {
  console.log("No solution found");
}

// TC: O(9^(n*n))
// C: O(n*n)
