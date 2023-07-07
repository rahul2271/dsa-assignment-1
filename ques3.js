function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found, return the index
      } else if (nums[mid] < target) {
        left = mid + 1; // Target is on the right side
      } else {
        right = mid - 1; // Target is on the left side
      }
    }
  
    return left; // Target not found, return the index where it would be inserted
  }
  
  // Example usage
  let nums = [1, 3, 5, 6];
  let target = 4;
  let index = searchInsert(nums, target);
  console.log(index); // Output: 2
  