class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        k=0
        n=len(nums)
        for i in range(n):
            if nums[i]>nums[k]:
                k+=1
                nums[k]=nums[i]
        return k+1         

        