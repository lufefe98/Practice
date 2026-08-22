// Array

const numArray = [2, 1, 4, 5, 2, 6, 4, 1, 3, 2]
const target = 10


function dynamicWindow(arr, target) {
    let minLength = Infinity
    let windowSum = 0
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right]

        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            windowSum -= arr[left]
            left++
        }
    }
    
    if (minLength === Infinity) {
        return 0
    } else {
        return minLength
    }

}




console.log(dynamicWindow(numArray, target))