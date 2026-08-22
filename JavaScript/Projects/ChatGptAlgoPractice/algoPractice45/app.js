// Array

const numArray = [2, 1, 5, 1, 3, 2, 15, 1, 3];

function getMaxWindowValue(arr) {

    let k = 3

    if (k <= 0 || k > arr.length) {
        return 'Sub array is too large or small'
    }

    let left = 0
    let right = k
    let windowSum = 0

    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }

    let maxSum = windowSum

    while (right < arr.length) {
        windowSum -= arr[left]
        windowSum += arr[right]

        maxSum = Math.max(maxSum, windowSum)

        left++
        right++
    }

    return maxSum
}

console.log(getMaxWindowValue(numArray))