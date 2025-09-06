// Create Array

const numArray = [20, 35, 15, 70, 25]


// Write function

function findSecondMax(arr) {
    let max = -Infinity
    let secondMax = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max   // push old max down
            max = arr[i]      // new max found
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i] // new second max
        }
    }

    return secondMax
}

console.log(findSecondMax(numArray))