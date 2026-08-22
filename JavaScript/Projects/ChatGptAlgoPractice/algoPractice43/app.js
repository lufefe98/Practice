// Array

const numArray = [8, 4, 1, 5, 2, 7]

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let unsortedNum = arr[i]
        // Unsorted number
        
        let j = i - 1
        // index of sorted number

        while (j >= 0 && arr[j] > unsortedNum) {
            arr[j + 1] = arr[j]


            console.log(arr[j + 1] = arr[j])

            j--
            // move iteration towards the start of the array
            
        }

        arr[j + 1] = unsortedNum
        console.log(arr[j + 1] = unsortedNum)
    }

    return arr
}

console.log(insertionSort(numArray))