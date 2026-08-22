// Array

const array = [5, 3, 4, 7, 9, 2]

function quickSort(arr) {
    // Base case
    if (arr.length <= 1) return arr

    // Create a pivot point 
    let pivot = arr[arr.length - 1]

    // Create left and right array to store smaller and larger
    // values than the pivot
    let left = []
    let right = []

    // Loop through the array
    // (minus the last element because it is the pivot point)
    for (let i = 0; i < arr.length - 1; i++) {
        // If the current array element is smaller than the pivot:
        if (arr[i] < pivot) {
            // add it to the left array
            left.push(arr[i])
        } else {
            // Otherwise, the array element should be added to the 
            // right array.
            right.push(arr[i])
        }
    }

    // Return an array with the left array, the pivot and the right
    // array (in that specific order)
    return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(array))