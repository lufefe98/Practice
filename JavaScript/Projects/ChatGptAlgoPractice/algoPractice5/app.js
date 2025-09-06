// create array

const numArray = [20, 35, 15, 70, 25]

// write function

function findMax(arr) {
    let maxNum = arr[0] 

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maxNum)
        maxNum = arr[i]
    }

    return maxNum
}


console.log(findMax(numArray))