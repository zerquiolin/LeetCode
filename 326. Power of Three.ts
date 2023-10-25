function isPowerOfThree(n: number): boolean {
  return n > 0 && 1162261467 % n === 0;
}

// Constraints:
// -2^31 <= n <= 2^31 - 1
// Meaning that the largest power of 3 that can fit in a 32-bit integer is 3^19 = 1162261467

// How it works:
// - 1162261467 is the largest power of 3 that can fit in a 32-bit integer
// - 2^31 - 1 is the largest 32-bit integer (2147483647)
// - Meaning that 3^19 is the largest power of 3 that can fit in a 32-bit integer
// - n must be greater than 0 because 0 is not a power of 3
// - If n is a power of 3, then 1162261467 % n === 0
// - Meaning that if the largest power of 3 is divisible by n with no remainder, then n is a power of 3
