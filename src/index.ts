class BinarySearchTree {
    root: TreeNode;

    constructor(root: TreeNode) {
        this.root = root;
    }
}

class TreeNode {
    val: number;
    left: null;
    right: null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let rootNode = new TreeNode(50);
let tree = new BinarySearchTree(rootNode);

console.log("Binary Search Tree");
console.log(rootNode);
