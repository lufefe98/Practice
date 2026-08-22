// Array

const array = [9, 4, 6, 3, 2, 5, 1, 6, 12]

let k = 3



// Function

function findFirstMinSum(arr) {
    let sum = 0
    let left = 0
    let right = k
    
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    
    let minSum = sum

    while (right < arr.length) {
        sum -= arr[left]
        sum += arr[right]

        minSum = Math.min(sum, minSum)

        left++
        right++
    }

    return minSum
}


// Execute

console.log(findFirstMinSum(array))