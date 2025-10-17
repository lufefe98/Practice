// Create array

const numArray = [5, 30, 75, 10, 90, 50]


function findSecondMax(arr) {
    if (arr.length < 2) return null
    // Return null if we don't have a 2nd array element

    let maxNum = -Infinity
    let secondMaxNum = -Infinity

    for (let i = 0; i < arr.length; i ++) {
        const x = arr[i]

        if (x > maxNum) { // if current array element is greater than maxNum:
            secondMaxNum = maxNum
            // set the second maximum to the maximum number, so when loop
            // starts, all the array elements are greater than maxNum and secondMaxNum.
            maxNum = x
            // maxNum is updated to become the current array element
            // if we find an array element that is greater than the value
            // of maxNum (in the first iteration, it will be the first array
            // element, since all the numbers from numArray are greater than
            // -Infinity, but in the second array if the number is greater than
            // the value of maxNum from the previous iteration, then maxNum gets
            // updated)
        } else if (x < maxNum && x > secondMaxNum) { // if the current array element is less than the maxNum but greater than secondMaxNum: 
            secondMaxNum = x
            // We set the current array element which we are looping through to 
            // secondMaxNum value to the current array element
            // should the condition of this else-if block be met while
            // looping through the array.

            // How it updates secondMaxNum:
            // In the first iteration, secondMaxNum does not get updated since
            // there is no other value from numArray to take its place.
            // In the second iteration of the loop, we do get a 2nd
            // value from the array. If the current array element is greater than 
            // the value for maxNum it will be set to maxNum and then the previous value
            // will be assigned to secondMaxNum, but if the current array element is
            // less than the previous value of maxNum, but is greater than
            // the value for secondMaxNum, secondMaxNum gets updated to be the 
            // value of the current array element and maxNum stays the same.
        }
    }

    return secondMaxNum === -Infinity ? null : secondMaxNum
    // We then return null if the value for the second largest
    // value is the same as -Infinity after running the if statements, otherwise, we return SecondMax 
}

console.log(findSecondMax(numArray))