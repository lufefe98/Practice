// Array

const numArray = [3, 5, 9, 8, 6, 1, 2]


// Function 

function bubbleSort(arr) {
    // Outer For Loop
    for (let i = 0; i < arr.length; i++) {



        // Inner for loop
        for (let j = 0; j < arr.length; j++) {
            // We start from the first array element and then
            // compare the next array element until we reach the 
            // final array element
            
            // if statement
            if (arr[j] > arr[j + 1]) {
                // The if statement compares the current element
                // to the next element.
                
                // Create current number variable
                let currNum = arr[j]

                // Move larger number one index up
                arr[j] = arr[j + 1]

                // Move smaller number one index down
                arr[j + 1] = currNum

            }

        }

    }

    return arr
}


console.log(bubbleSort(numArray))