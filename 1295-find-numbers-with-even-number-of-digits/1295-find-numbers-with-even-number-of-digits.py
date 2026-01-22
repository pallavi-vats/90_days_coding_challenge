class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
     
        c=0
        for num in nums:
            td=len(str(num))
            if td%2==0:
                c+=1
            
        return c        
