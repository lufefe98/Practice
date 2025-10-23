// Array

const numArray = [5, 3, 8, 4, 2, 9, 6];

// Function

function bubbleSort(arr) {
    // Loop
    for (let i = 0; i < arr.length; i++) {
        // Sort array elements in nested loop
        for (let j = 0; j < arr.length; j++) {

            // Condition for sorting array elements
            if (arr[j] > arr[j + 1]) {
                // IF THE CURRENT NUMBER IS LAARGER THAN THE NEXT NUMBER IN THE ARRAY

                // Create variable for current array element in iteration
                let currNum = arr[j]

                // Set the current number to the next element in the array
                arr[j] = arr[j + 1]

                // Set the next element in the iteration to the current number
                arr[j + 1] = currNum

                // in this sequence of code, if the next element is smaller than the current
                // element in the iteration, we should create a variable to store the
                // current element and then add 1 to the index of the current element in the
                // iteration, which will move it forward and then we set the next element in
                // the iteration to have the index of the current element in the iteration
                // which moves it ahead of the current array element in the iteration
                // in the array.
            }
        }
    }
    return arr
}


// Execute function

console.log(bubbleSort(numArray))