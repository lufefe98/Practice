// Array

const numArray = [5, 3, 8, 4, 2]


function selectionSort(arr) {

    // For Loop
    for (let i = 0; i < arr.length -1; i++) {
        // Start from the first element in the array and loop
        // for as long as the i (the value of the index) is less than the
        // lenght of the array - 1, and continue to increment the value of the index
        // (ie: the variable 'i')


        // Set minumum value
        let minNum = i

        // Nested loop
        for (let j = i + 1; j < arr.length; j++) {
            // Start from the element after the current element and loop (set j to i + 1)
            // for as long as j is less than the length of the array and continue
            // to incremenet the value of the index (ie: the variable 'j')



            // If statement
            if (arr[j] < arr[minNum]) {
                // If arr[j] (which is the array element after the current element) is smaller 
                // than the current element, then we do the following:

                minNum = j
                // Change the index for the minimum value to the element after the current element
            }

        }

        // Save current array element to the currNum variable
        let currNum = arr[i]

        arr[i] = arr[minNum]
        // We then set the current array element to take the value of the smaller number (if
        // the condition in the if statement is met, it will change the current array element
        // to take the value of the next element in the array)

        arr[minNum] = currNum
        // After setting the current element to the next element (which is the numerically smaller
        // number, assuming the if statement condition is met) and then we move it towards the front
        // of the array 
    }

    return arr
}

console.log(selectionSort(numArray))