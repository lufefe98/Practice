// Array

const numArray = [9, 1, 8, 2, 7, 3, 6, 4, 5]


// We implement selection sort by selecting the
// minimum value and then swap it with the first value
// in the list.
// This is followed by swapping it with the second
// element in the list. This continues until you reach 
// the end of the array. (Big-O: quadratic time complexity)

// Function

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        // We iterate throughout the array until the
        // penultimate array element because by the end 
        // of the sequence, the array will be completely
        // sorted, hence the arr.length - 1


        // Store (current) minimum value index
        // We assume that the first element in the
        // array is the smallest element.
        let minNum = i

        for(let j = i + 1; j < arr.length; j++) {
            // The inner for loop looks for the next minimum
            // array element in the array with the j variable.
            // The variable j doesn't start at index 0 because
            // there will be some already sorted elements after
            // the first iteration from the outer loop.
            // This works to isolate the unsorted portion of the
            // array and then sort the array elements.


            // If current array element is less than next
            // array element, change minNum to have the next
            // array element index value.

            // Remember that minNum of 'i' is assumed to be the smallest
            // until the iteration locates a new minimum value with index 
            // of 'j'.

            if(arr[minNum] > arr[j]) {
                // Change index of minimum array element value
                // should condition be met
                minNum = j
            }
        }

        // Once we have found a new minumum value, we have to
        // swap the array elements around.
        // create temporary number storage
        // for current array element which allows us to swap
        // with the minimum index. (arr[i] is the current element
        // in our iteration for the outer loop and we store it
        // so that when we swap the values, we can come back to 
        // this value and use it to take the place of the minNum index)

        // let tempNum = arr[i]

        // Set the current array element to have the
        // value of the minumum array value (this moves
        // the minimum value to the place of the current
        // element, in this case, towards the back of the
        // array)
        // NB: Rememeber that minNum changes, whereas index of 'i'
        // doesn't change.

        // This takes the value of the elemenet where the index of
        // 'i' is found and gives it the value of the newly found
        // minNum, effectively swapping them manually.

        // arr[i] = arr[minNum]

        // The array element with the smaller value is moved 
        // towards the front of the array

        // The code below does the same as the code above, but in
        // reverse, which effetively moves the 

        // arr[minNum] = tempNum


        // the below is a refactored version of the above code and is
        // shortened and more clean and less confusing.
        [arr[i], arr[minNum]] = [arr[minNum], arr[i]]
    }
    return arr
}


console.log(selectionSort(numArray))