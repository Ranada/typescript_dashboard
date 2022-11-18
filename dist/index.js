"use strict";
class BinarySearchTree {
    constructor(root) {
        this.root = root;
    }
}
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let rootNode = new TreeNode(50);
let tree = new BinarySearchTree(rootNode);
console.log("Binary Search Tree");
console.log(rootNode);
//# sourceMappingURL=index.js.map