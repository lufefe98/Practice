// Array

const numArray = [2, 1, 5, 2, 4, 1, 3, 2, 8]

// Get the smallest window that adds up to 8 or larger
// by getting the window to keep expanding as long as the
// array elements are not yet equal to or greater than the
// target value. The window has two pointers (left and right)
// that target the index of the array/string. The right pointer
// is the one that moves until the condition is met.
// If we dont get a number that meets the target, then
// we return 0, otherwise, we return the minimum length

function dynamicWindow(arr, target) {
    let windowSum = 0
    let minLength = Infinity
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right]

        // if (windowSum >= target) {
        //  windowSum -= arr[left]
        //  minLength = Math.min(minLength, right - left + 1)
        //  left++
        // }

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


console.log(dynamicWindow(numArray, 8))