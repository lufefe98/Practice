// Array

const numbers = [2, 1, 4, 5, 3, 4, 2]


// Function 

function firstDuplicate(nums) {
    const seenNums = new Set()

    for (let num of nums) {
        if (seenNums.has(num)) return num

        seenNums.add(num)
    }
    return null
}


console.log(firstDuplicate(numbers))