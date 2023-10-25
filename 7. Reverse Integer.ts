function reverse(x: number): number {
  // Define the threshold
  const threshold = 2 ** 31 - 1; // 32-bit signed integer

  // Reverse the number
  const reversed = parseInt(
    (x > 0 ? x : -x).toString().split("").reverse().join("")
  );

  // Check Threshold
  if (reversed > threshold) return 0;

  // Return the reversed number
  return x > 0 ? reversed : -reversed;
}
