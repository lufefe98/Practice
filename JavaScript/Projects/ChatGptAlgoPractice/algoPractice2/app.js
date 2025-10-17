// Create Array

const numArray = [20, 35, 15, 70, 25]

// write function

// function findMax(arr) {

//     for (let i = 0; i < numArray.length; i++) {
//         let largeNum = Math.max(...arr)        
//         console.log(largeNum);
//     }
    
//     return largeNum
// }


function findMax(arr) {
    let largeNum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largeNum) {
            largeNum = arr[i]
        }
    }

    return largeNum
}


console.log(findMax(numArray))