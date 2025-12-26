// Arrays

const array1 = [4, 6, 2, 3, 5]
const array2 = [1, 3, 2, 7, 9]


// Function

function findMatch(arr1, arr2) {
    // create set and add array numbers
    const arrayNums = new Set(arr1)

    // check if arrays have matching numbers
    for (let num of arr2) {
        if (arrayNums.has(num)) return true
    }
    return false

}

console.log(findMatch(array1, array2))