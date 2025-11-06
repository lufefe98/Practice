// Array

const numArray = [2, 1, 5, 1, 3, 2, 15, 1, 3];
const windowSize = 3

function fixedSubArraySlidingWindow(arr, k) {
    if(k > arr.length || k <= 0) {
        return 'Window is larger than array size or too small'
    }


    let windowSum = 0
    let maxSum = -Infinity
    

    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }

    maxSum = windowSum

    for (let i = k; i < arr.length; i++) {
        windowSum -= arr[i - k]

        windowSum += arr[i]


        maxSum = Math.max(windowSum, maxSum)

    }

    return maxSum

}



console.log(fixedSubArraySlidingWindow(numArray, windowSize))