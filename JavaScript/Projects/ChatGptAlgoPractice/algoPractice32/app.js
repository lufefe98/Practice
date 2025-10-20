// Array

const numArray = [1, 1, 2, 2, 2, 3, 1, 1]
const noDuplicateArray = []

function removeDuplicate(arr, noDupeArr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i -1]) {
            noDupeArr.push(arr[i])
        }

    }

    return noDupeArr
}

console.log(removeDuplicate(numArray, noDuplicateArray))