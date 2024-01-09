class HeightAndDiameter {
  constructor(height, diameter) {
    this.height = height;
    this.diameter = diameter;
  }
}

const solve = (root) => {
  return helper(root).diameter;
};

const helper = (node) => {
  if (!node) {
    return new HeightAndDiameter(0, 0);
  }
  const left = helper(node.left);
  const right = helper(node.right);
  const height = 1 + Math.max(left.height, right.height);
  const diameter = Math.max(
    left.height + right.height,
    left.diameter,
    right.diameter
  );
  return new HeightAndDiameter(height, diameter);
};

// TC: O(n)
// SC: O(log(n))
