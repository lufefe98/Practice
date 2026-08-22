// Array

const numArray = [8, 4, 1, 9, 3, 5, 2, 6, 7]

// Function 
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Start at index 1 so we treat the first element in the array
        // as sorted.
        // The for loop is used to iterate through the unsorted part of the array.

        let currNum = arr[i]
        // We store current number in the array in each iteration (ie: when we
        // find the element that needs to be inserted, (ie: the 
        // unsorted element, we store it in a variable called 'i')

        // *i IS UNSORTED*

        let j = i - 1
        // Create variable to track iteration from
        // opposite side of the array 
        // (This will help us compare the number that
        // has to be inserted with the other array elements)
        // j in this case, refers to the index of the already sorted element

        // j IS SORTED

        // Thee while loop is used to compare the sorted and unsorted elements.
        while (j >= 0 && arr[j] > currNum) {
            // while the iteration from the opposite side
            // of the array is greater than or equal to 0 (keeps iteration
            // going until the first element in the array, and also checks
            // if the sorted element is greater than the unsorted array element)
            
            arr[j + 1] = arr[j]
            // We swap the place of the unsorted element (ie: arr[j + 1], which is
            // one index after the sorted element) with the sorted sorted element.
            // This moves the already sorted element towards the back of the array, if
            // it is greater than the array element that has yet to be sorted.

            j--
            // We continue to move the iteration towards the front of the array
            // for as long as the condition of our loop is true (ie: the sorted element
            // is still greater than our unsorted element)


            // For each iteration, the while loop will continue until the condition fails
            // which is when the sorted element is smaller than the unsorted array.
            // Or when the unsorted element's index is now at the start of the array.
            
        }

        arr[j + 1] = currNum
        // We then set the unsorted number to be next to the sorted number.

        console.log(arr)
        
    }


    return arr
}


console.log(insertionSort(numArray))