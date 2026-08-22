// Array

const array = [5, 9, 15, 35, 10, 25, 7]

// Function
function quickSort(arr) {
    // Base case
    if (arr.length <= 1) return arr

    // Add pivot
    let pivot = arr[arr.length - 1]
    
    // Left and right arrays
    let left = []
    let right = []

    // For loop to iterate main array
    for(let i = 0; i < arr.length -1; i++) {

        // if statement to add to left and right arrays
        if (arr[i] > pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    // Return the sorted array
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(array))