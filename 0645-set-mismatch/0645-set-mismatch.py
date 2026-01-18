class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        s = set()
        duplicate = 0
        for i in nums:
            if i in s:
                duplicate = i
            s.add(i)
        missing = 0
        for i in range(1,len(nums)+1):
            if i not in nums:
                missing = i
        return [duplicate,missing]