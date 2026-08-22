// Create inputs

const numArray = [1, 2, 4, 6, 8, 9, 14, 15];
const target = 13

function twoPointCheck(arr, target) {
    let left = 0
    let right = arr.length - 1;

    while(left < right) {
        if (arr[left] + arr[right] === target) {
            return [arr[left], arr[right]]            
        } else if (arr[left] + arr[right] < target) {
            left++
        } else {
            right--
        }
    }
    return null
}

console.log(twoPointCheck(numArray, target))
