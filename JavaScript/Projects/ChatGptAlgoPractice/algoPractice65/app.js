// Array

const numbers = [2, 5, 1, 2, 3, 5, 1]


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
        if (freqMap.get(num) === 2) return num
    }

    return null
}

console.log(numFreq(numbers))


// Time complexity of the numFreq function is linear, because
// the number of operations will only increases based on the 
// number of inputs (ie: array elements)