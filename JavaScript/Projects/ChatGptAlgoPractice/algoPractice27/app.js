// Create Inputs

const numArray = [1, 2, 4, 6, 8, 9, 14, 15]
let target = 13



function twoPointCheck(arr) {
    let left = 0
    let right = numArray.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === target) {
            return true
        } else if (arr[left] + arr[right] < target) {
            left++
        } else {
            right--
        }
    }
    return false
}


console.log(twoPointCheck(numArray))
