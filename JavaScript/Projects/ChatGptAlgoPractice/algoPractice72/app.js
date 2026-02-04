// Array

const array = [15, 23, 65, 32, 5, 22, 77, 19, 8]


// Window

const k = 3


// Functions

function maxNumWindow(arr, win) {
    // Handle edge case
    if (k > arr.length, k <= 0) {
        return 'Incorrect window size'
    }


    let sum = 0
    let maxSum = sum
    let left = 0
    let right = win



    for (let i = 0; i < k; i++) {
        sum +=arr[i]
    }


    while (right < arr.length) {
        sum -= arr[left]
        sum += arr[right]

        maxSum = Math.max(sum, maxSum)

        left++
        right++
    }

    return maxSum
}


// Execute

console.log(maxNumWindow(array, k))