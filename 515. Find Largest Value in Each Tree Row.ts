class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function largestValues(root: TreeNode | null): number[] {
  const results: Record<number, number> = {};

  const traverse = (node: TreeNode | null, level: number) => {
    // If there is no node, return
    if (!node) return;

    // If the level is not in the results, add it
    if (results[level] === undefined) results[level] = node.val;
    // Otherwise, check if the current node is greater than the current level
    else results[level] = Math.max(results[level], node.val);

    // Traverse through the left and right nodes
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  // Return only the values
  return Object.values(results);
}
