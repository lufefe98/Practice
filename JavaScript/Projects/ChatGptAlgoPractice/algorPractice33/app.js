// Arrays

const numArray = [1, 2, 3, 4, 2, 5, 1, 6, 7, 3]

const sortedNumArray = numArray.sort((a, b) => a - b)
const noDuplicateArray = []


function removeDuplicate(arr, noDupeArr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            noDupeArr.push(arr[i])
        }
    }
    return noDupeArr
}

console.log(removeDuplicate(sortedNumArray, noDuplicateArray))