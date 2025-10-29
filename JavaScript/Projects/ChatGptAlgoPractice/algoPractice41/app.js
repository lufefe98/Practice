// Array

const numArray = [9, 1, 8, 2, 7, 3, 6, 4, 5]



// Function

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minNum = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minNum] > arr[j]) {
                minNum = j
            }
        }

        if (minNum !== i) {
            let tempNum = arr[i]

            arr[i] = arr[minNum]

            arr[minNum] = tempNum
        }
    }
    return arr
}


console.log(selectionSort(numArray))