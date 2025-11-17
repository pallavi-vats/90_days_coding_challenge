/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let partialsum=0;
    let totalsum=n*(n+1)/2;
    for (let i=0;i<n;i++){
        partialsum+=nums[i];
    }
 return totalsum-partialsum;
};