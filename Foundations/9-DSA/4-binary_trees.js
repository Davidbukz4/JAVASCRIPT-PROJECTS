class Node {
    constructor (data) {
        this.data = data;
        this.parent = null;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    #height = 0;
    constructor () {
        this.root = null;
    }

    newTreeNode(parentNode, data) {
        let newNode = new Node (data);
        newNode.data = data;
        if (!this.root && parentNode === null) {
            this.root = newNode;
        } else {
            newNode.parent = parentNode;
        }
        return newNode;
    }

    insertLeft (parentNode, data) {
        let newNode = new Node (data);
        newNode.data = data;
        if (parentNode === null) {
            return null;
        }
        if (parentNode.left) {
            newNode.left = parentNode.left;
            parentNode.left.parent = newNode;
        }
        parentNode.left = newNode;
        newNode.parent = parentNode;
        return newNode;
    }

    insertRight (parentNode, data) {
        let newNode = new Node (data);
        newNode.data = data;
        if (parentNode === null) {
            return null;
        }
        if (parentNode.right) {
            newNode.right = parentNode.right;
            parentNode.left.parent = newNode;
        }
        parentNode.right = newNode;
        newNode.parent = parentNode;
        return newNode;
    }

    treeDelete () {
        this.#deleteRecursive(this.root);
        this.root = null;
    }

    #deleteRecursive (node) {
        if (!node) {
            return;
        }
        this.#deleteRecursive(node.left);
        this.#deleteRecursive(node.right);

        node.left = null;
        node.right = null;
        node.data = null;
    }

    isLeaf(node) {
        const nodeIsLeaf = !(node.left && node.right);
        if (nodeIsLeaf) {
            return 1;
        } else {
            return 0;
        }
    }

    isRoot (node) {
        if (!node.parent) {
            return 1;
        } else {
            return 0;
        }
    }

    preorderTraversal (node, printNode) {
        if (!node || !printNode) {
            return;
        }
        this.printNode(node.data);
        this.preorderTraversal(node.left, printNode);
        this.preorderTraversal(node.right, printNode);
    }

    inorderTraversal (node, printNode) {
        if (!node || !printNode) {
            return;
        }
        this.inorderTraversal(node.left, printNode);
        this.printNode(node.data);
        this.inorderTraversal(node.right, printNode);
    }

    postTraversal (node, printNode) {
        if (!node || !printNode) {
            return;
        }
        this.postTraversal(node.left, printNode);
        this.postTraversal(node.right, printNode);
        this.printNode(node.data)
    }

    height (node) {
        if (!node) {
            return -1;
        }
        let leftHeight = this.height(node.left)
        let rightHeight = this.height(node.right)
        return 1 + Math.max(leftHeight, rightHeight);
    }

    depth (node) {
        if (!node) {
            return 0;
        }
        let h = 0
        if (node.parent) {
            h = 1 + this.depth(node.parent)
        } else {
            h += 0
        }
        return h;
    }

    size (node) {
        if (!node) {
            return 0;
        }
        let l = this.size(node.left);
        let r = this.size(node.right)
        return (1 + l + r);
    }

    leaves (node) {
        if (!node) {
            return 0;
        }
        if (!node.left && !node.right) {
            return 1;
        }
        let leftLeaves = this.leaves(node.left);
        let rightLeaves = this.leaves(node.right);
        return leftLeaves + rightLeaves
    }

    printNode (data) {
        console.log(`-> ${data}`)
    }

    print(node, level = 0) {
        if (!node) {
          return;
        }
        this.print(node.right, level + 1);
        console.log(' '.repeat(level * 4) + node.data);
        this.print(node.left, level + 1);
    }
}

let tree = new BinaryTree();
let root = tree.newTreeNode(null, 5);
root.right = tree.insertRight(root, 3);
root.left = tree.insertLeft(root, 7);
root.left.right = tree.insertRight(root.left, 2);
root.left.left = tree.insertLeft(root.left, 4);
root.left.right.right = tree.insertRight(root.left.right, 8);
root.left.left.left = tree.insertLeft(root.left.left, 5);
root.right.left = tree.insertLeft(root.right, 10)
root.right.right = tree.insertRight(root.right, 12)
root.right.left.right = tree.insertRight(root.right.left, 1)
root.right.right.left = tree.insertLeft(root.right.right, 9)
root.right.right.left.right = tree.insertRight(root.right.right.left, 99)
// tree.treeDelete()
tree.print(root);
// console.log(tree.isLeaf(root.right) === 1)
// console.log(tree.isRoot(root.right) === 1)
// tree.postTraversal(root, tree.printNode)
console.log(tree.leaves(root))