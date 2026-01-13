/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let deapthmax=0;
    function trav(curr,depth){
        deapthmax=Math.max(deapthmax,depth)
        curr.left && trav(curr.left,depth+1);
        curr.right && trav(curr.right,depth+1);

    }
    trav(root,1);
    return deapthmax
    
};