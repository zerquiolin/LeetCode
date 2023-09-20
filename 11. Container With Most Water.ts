function maxArea(height: number[]): number {
  // Pointers
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  // Maximum height
  let maximumAmount = 0;

  // Traverse through the list
  while (leftPointer < rightPointer) {
    // Check the current amount of water
    maximumAmount = Math.max(
      maximumAmount,
      (rightPointer - leftPointer) *
        Math.min(height[leftPointer], height[rightPointer])
    );

    if (height[rightPointer] > height[leftPointer]) leftPointer++;
    else rightPointer--;
  }

  // amount of the container
  return maximumAmount;
}
