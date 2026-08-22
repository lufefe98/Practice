// Arrays

const numArray = [1, 2, 3, 4, 2, 5, 1, 6, 7, 3]
const noDuplicateArray = []



// Function

function removeDuplicates(arr, noDupeArr) {
    for (let i = 0; i < arr.length; i++) {
        if (!noDupeArr.includes(arr[i])) {
            noDupeArr.push(arr[i])
        }        
    }

    return noDupeArr
}

console.log(removeDuplicates(numArray, noDuplicateArray))