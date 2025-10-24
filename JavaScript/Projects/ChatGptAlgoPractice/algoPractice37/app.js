// Array

const numArray = [3, 5, 9, 8, 6, 1, 2]



// Function

function reverseBubbleSort(arr) {
    // For Loop

    for (let i = 0; i < arr.length; i++) {

        // Nested For Loop

        for (let j = 0; j < arr.length - i - 1; j++) {
            
            // If statement

            if (arr[j] < arr[j + 1]) {
                let currNum = arr[j]

                arr[j] = arr[j + 1]

                arr[j + 1] = currNum
            }
        }
        
    }

    return arr
}


console.log(reverseBubbleSort(numArray))