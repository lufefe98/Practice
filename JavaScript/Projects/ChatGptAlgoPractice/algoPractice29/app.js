// Create Inputs

const numArray = [2, 4, 8, 12, 16, 18, 28, 30]
let target = 26

// Function

function twoPointCheck(arr, target) {
    let left = 0
    let right = arr.length -1 


    while (left < right) {
        const sum = arr[left] + arr[right]
        if (sum === target) {
            return [arr[left], arr[right]]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return null
}

console.log(twoPointCheck(numArray, target))