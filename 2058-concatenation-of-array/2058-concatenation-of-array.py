class Solution(object):
    def getConcatenation(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        c=[]
      
        for i in range(2):
            c.extend(nums)
        return c
        