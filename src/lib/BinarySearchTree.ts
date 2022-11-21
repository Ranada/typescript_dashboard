export class BinarySearchTree {
    root: TreeNode;

    constructor(root: TreeNode) {
        this.root = root;
    }
}

export class TreeNode {
    val: number;
    left: null;
    right: null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}