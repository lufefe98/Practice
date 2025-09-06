// create array

const numArray = [5, 30, 75, 10, 90, 50]


// create function

function findMin(arr) {
    let minNum = arr[0]
    
    for (let i = 1; i < numArray.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    return minNum
}

console.log(findMin(numArray))