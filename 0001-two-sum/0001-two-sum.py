class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        d={}
        for i in range(len(nums)):
            curr=target-nums[i]
            if curr in d:
                return[d[curr],i]
            d[nums[i]]=i 
        return 0   