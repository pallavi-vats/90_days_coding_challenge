var isBalanced = function(root) {
    let ans = true;

    let calheig = (curr) => {
        if (!curr) return 0;

        let lh = calheig(curr.left);
        let rh = calheig(curr.right);

        if (Math.abs(lh - rh) > 1) {
            ans = false;
        }

        return 1 + Math.max(lh, rh);
    }

    calheig(root);
    return ans;
};
