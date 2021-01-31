
// The tree data structure file for the app to store nodes and performing traversal

function Node(node) {
    // Constructor function to create a node
    this.node = node;
    this.left = null;
    this.right = null;
}

function BinaryTree(val) {
    // Constructor function to create a Binary tree
    this.root = null;
    this.traverseList = [];
    
    if(typeof val !== "undefined") {
        this.root = new Node(val);
    } else {
        throw "root is empty";
    }

    this.insert = function(val, dir) {
        //Insert node at root to left or right provided as dir
        const newNode = new Node(val);
        this.root[dir] = newNode;
    };

    this.insertAt = function(node,val, dir) {
        // Insert node at specified node to left or right provided as dir
        const nodePos = this.levelOrderTraverse(node); // Makes use of levelordertraverse api to find the node and insert new node
        const newNode = new Node(val);
        nodePos[dir] = newNode;    
    }
}

export default BinaryTree;