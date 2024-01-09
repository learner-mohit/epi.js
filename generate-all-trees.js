class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
const solve = (numNodes) => {
  const result = [];
  if (numNodes === 0) {
    result.push(null);
  }
  for (
    let numLeftTreeNodes = 0;
    numLeftTreeNodes < numNodes;
    numLeftTreeNodes++
  ) {
    const leftSubtrees = solve(numLeftTreeNodes);
    const rightSubtrees = solve(numNodes - 1 - numLeftTreeNodes);
    for (let left of leftSubtrees) {
      for (let right of rightSubtrees) {
        const root = new TreeNode(0, left, right);
        result.push(root);
      }
    }
  }
  return result;
};

// TC: O(Catalan(n))
// SC: O(Catalan(n))
