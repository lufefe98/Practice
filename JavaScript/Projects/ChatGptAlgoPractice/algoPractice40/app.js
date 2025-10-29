// Array

const numArray = [9, 1, 8, 2, 7, 3, 6, 4, 5]



// Function

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        // Store (current) minimum value index
        let minNum = i

        for(let j = i + 1; j < arr.length; j++) {
            // If current array element is less than next
            // array element, change minNum to have the next
            // array element index value
            if(arr[minNum] > arr[j]) {
                // Change index of minimum array element value
                // should condition be met
                minNum = j
            }
        }

        // create temporary number storage
        // for current array element
        let tempNum = arr[i]

        // Set the current array element to have the
        // value of the minumum array value (this moves
        // the minimum value to the place of the current
        // element, in this case, towards the back of the
        // array)
        arr[i] = arr[minNum]

        // The array element with the smaller value is moved 
        // towards the front of the array
        arr[minNum] = tempNum
    }
    return arr
}


console.log(selectionSort(numArray))