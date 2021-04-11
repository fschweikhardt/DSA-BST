const BinarySearchTree = require('./BST')

function drawBST() {
    const BST = new BinarySearchTree()
    let data = [3,1,4,6,9,2,5,7]
    data.forEach(x => BST.insert(x))

    return BST
}

console.log(drawBST())