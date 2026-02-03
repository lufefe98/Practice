// Array

const array = [2, 4, 3, 1, 5, 8, 6, 9, 7]
const k = 3

// Function

// find subarray with largest value within subset and return the number

function slidingWindow(arr, k) {

    // Handle edge case
    if (k > arr.length || k <= 0) {
        return 'Window is larger than array or non-existent'
    }

    let sum = 0
    let maxSum = sum
    let left = 0
    let right = k

    // Add array elements within the window
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }

    // Move window to the right & remove old elements outside window
    while (right < arr.length) {
        sum -= arr[left]       
        sum += arr[right]
        
        maxSum = Math.max(sum, maxSum)

        left++
        right++
    }

    return maxSum
}

console.log(slidingWindow(array, k))