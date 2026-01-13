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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let ans=false;
    function trav(curr,currentsum){
        let newsum=currentsum+curr.val;
        if(!curr.left && !curr.right){
            if (newsum===targetSum){
                ans=ans || true;
            }
        }
        curr.left && trav(curr.left,newsum);
        curr.right && trav(curr.right,newsum);
    }
    trav(root,0);
    return ans;
};