/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cur_c=0;
    let max_c=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            cur_c++;

        }
        else{
            max_c=Math.max(cur_c,max_c);
            cur_c=0;
        }
    }
    return Math.max(cur_c,max_c);
};