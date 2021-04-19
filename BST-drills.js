const BinarySearchTree = require('./BST')

const BST = new BinarySearchTree()

function drawBST() { 
  let data = [3,1,4,6,9,2,5,7]
  // let data = [5,1,4,6,9,2,7]
  data.forEach(x => BST.insert(x, x))
  return BST
}
//console.log(drawBST())


function heightOfBST(bst) {
    let leftHeight = 0;
    let rightHeight = 0;
    if (!bst) {
      return 0;
    } else {
      leftHeight = heightOfBST(bst.left);
      rightHeight = heightOfBST(bst.right);
      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    }
}
// console.log(heightOfBST(drawBST()))


function bst_height1(tree) {
    return (
      Math.max(
        tree.left && bst_height1(tree.left),
        tree.right && bst_height1(tree.right)
      ) + 1
    );
}
// console.log(bst_height1(drawBST()))


function bst_height2(tree) {
    if (tree.left && tree.right)
      return Math.max(bst_height2(tree.left), bst_height2(tree.right)) + 1;
    if (tree.left) return bst_height2(tree.left) + 1;
    if (tree.right) return bst_height2(tree.right) + 1;
    return 1;
}
// console.log(bst_height2(drawBST()))


function isItBSTree(tree) {
    if (!tree) return false
  
    if (tree.right) {
      if (tree.right.key > tree.key) {
        isItBSTree(tree.right)
      } else {
        return false;
      }
    }
  
    if (tree.left) {
      if (tree.left.key < tree.key) {
        isItBSTree(tree.left)
      } else {
        return false
      }
    }
    return true
}
// console.log(isItBSTree(drawBST()))


function findThirdNode(tree) {
    //console.log(tree)
    let height = getHeight
    console.log(height)
    // if (height < 2) {
    //   return null
    // } else if (height < 3) {
    //   if (tree.left && tree.right) {
    //     return tree.left.value;
    //   } else return null;
    // } else if (height > 3) {
    //   return findThirdNode(tree.right);
    // } else return tree.key;
}
// console.log(findThirdNode(BST))
//console.log(BST.right)