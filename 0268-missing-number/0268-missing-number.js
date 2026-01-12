/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let f_s=n*(n+1)/2;
    let sum=0;
    for (let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
   
     let missing=f_s-sum;
  return missing;
    
};