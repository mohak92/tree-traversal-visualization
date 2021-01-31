
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
    };

    this.levelOrderTraverse = function(search = -1) {
        // Perform levelorder traversel to return the traversed list or support insertAt api. 
        // If search=-1 then returns traversed list else return the node that was to be searched.
        const queue = [];
        var current = this.root;
        queue.push(current);
        
        if(this.traverseList.length > 0) {
            this.traverseList = [];
        }

        while(queue.length > 0) {
            current = queue.shift();
            if(current != null) {
                if(search === -1) {
                    this.traverseList.push(current.node);
                }
                if(current.node === search && search !== -1) {
                    return current;
                }
                if(current.left != null) {
                    queue.push(current.left);
                }
                if(current.right != null) {
                    queue.push(current.right);
                }
            }
        }

    };

    // Perform preorder traversal of the tree
    this.preOrder = function(node = this.root) {
        if(node === this.root && this.traverseList.length > 0) {
            this.traverseList = [];
        }
        if(node != null) {
            this.traverseList.push(node.node);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    };

    // Perform inorder traversal of the tree
    this.inOrder = function(node = this.root) {
        if(node === this.root && this.traverseList.left > 0) {
            this.traverseList = [];
        }
        if(node != null) {
            this.inOrder(node.left);
            this.traverseList.push(node.node);
            this.inOrder(node.right);
        }
    };

    // Get the list of traversed nodes after calling any traversal api
    this.getTraversed = function() {
        return this.traverseList;
    };
}

export default BinaryTree;