function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // If there is no array
  if (!nums1.length && !nums2.length) return 0;

  // Merge the two arrays and sort them
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  // Middle of the two arrays
  const middle = Math.floor((sorted.length - 1) / 2); // -1 because the index starts at 0

  // If the length is odd
  if (sorted.length % 2 !== 0) return sorted[middle];
  // If the length is even
  return (sorted[middle] + sorted[middle + 1]) / 2;
}
