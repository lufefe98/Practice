// Array

const array = [9, 4, 6, 3, 2, 5, 1, 6, 12]

const k = 3

// Function

function findMinNum(arr) {

    if (k > arr.length || k <= 0) {
        return 'Wrong Window size'
    }

    let sum = 0
    let left = 0
    let right = k
    
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    
    let minSum = sum

    while(right < arr.length) {
        sum -= arr[left]
        sum += arr[right]

        minSum = Math.min(sum, minSum)

        right++
        left++
    } 

    return minSum
}

console.log(findMinNum(array))