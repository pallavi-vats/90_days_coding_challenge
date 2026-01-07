class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        x = len(s)
        for i in range(len(s)//2):
            s[i],s[x-i-1]=s[x-i-1],s[i]