function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

// How it works:
// - All numbers must be greater than 0
// - If we transform the numbers of the form 2^n to binary, we get [10, 100, 1000, 10000, ...]
// - If we subtract 1 from each of these numbers, we get [01, 011, 0111, 01111, ...]
// - Meaning that if we do a bitwise AND operation on the original number and the number minus 1, we get 0
// - For example, 8 is 1000 and 7 is 0111, so 1000 & 0111 = 0
