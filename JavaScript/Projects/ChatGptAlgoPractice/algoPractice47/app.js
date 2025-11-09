const numArray = [2, 1, 5, 2, 3, 2]
target = 7

function smallestSubarrayWithGivenSum(arr, target) {
  let minLength = Infinity;   // best answer so far (we want the smallest)
  let windowSum = 0;          // sum of the current window [left..right]
  let left = 0;               // left boundary of the window

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];               // 1) expand window to the right

    // 2) while current window meets the condition, try to shrink from left
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1); // record smallest window
      windowSum -= arr[left];   // remove leftmost element from sum
      left++;                   // shrink window from the left
    }
  }

  return minLength === Infinity ? 0 : minLength; // if never found, return 0
}


console.log(smallestSubarrayWithGivenSum(numArray, target))