// Array

const numbers = [1, 3, 4, 5]


// Function

function numFreq(nums) {
    // create new map
    const freqMap = new Map()

    // enter each new number from the array
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    // check which number appears twice
    for (let num of nums) {
        if (freqMap.get(num) > 1) return true
    }

    return false
}

console.log(numFreq(numbers))


// numFreq has linear function time complexity, because
// the number of operations will only increases based on the
// number of inputs (ie: array elements)
