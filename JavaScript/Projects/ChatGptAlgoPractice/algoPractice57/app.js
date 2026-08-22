// Array

const numArray = [3, 6, 7, 1, 5, 8, 2]


// Split Original Array
function mergeSort(arr) {
    // handle base case
    if (arr.length <= 1) return arr

    // If we only have one array element or less
    // we should simply return the array because
    // there is nothing left to be sorted.



    // Create middle index pointer
    let mid = Math.floor(arr.length / 2)

    // We should create a value which will be used
    // to point to the middle index of the array that
    // we are sorting and will allow us to split the 
    // array in half.



    // Create left and right arrays
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    // We create the left and right array which come from
    // splitting the original array. We add the mid variable
    // in the slice method which will allow us to split the
    // original array in half and give us our left and right
    // array which we will use to sort.

    return merge(left, right)
}


// Merge and Sort split array elements
function merge(left, right) {
    // Add pointers for the elements from the left and right
    // array that will be used when we iterate each array and
    // initialize an empty array to push the sorted array elements.
    let i = 0
    let j = 0
    let result = []

    // Sort array elements
    while (i < left.length && j < right.length) {
        // this loop will run as long as we have not reached
        // the end of the left and right array
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
            // if the current array element from the left array
            // is less than the current right array element, then 
            // we should add the current left array element to the
            // empty array and then move onto the next array element
        } else {
            result.push(right[j])
            j++
            // If the condition in the if statement is not met, then
            // we should push the current array element from the right
            // array and then move onto the next array element.
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}


console.log(mergeSort(numArray))