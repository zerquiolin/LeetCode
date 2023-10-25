class Solution:
    def reverse(self, x: int) -> int:
        # Define the threshold
        threshold = 2147483647

        # Convert the integer to a string
        current = int(str(x if x >= 0 else -x)[::-1])

        # Check Threshold
        if int(current) > threshold:
            return 0

        # Return the reversed integer
        return current if x >= 0 else -current

# How it works:
# - Convert the integer to a string
# - Reverse the string
# - Check if the reversed string is greater than the threshold (2^31 - 1) 32-bit signed integer
# - Return the reversed integer if it is less than the threshold