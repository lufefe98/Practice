// Array

const numArray = [2, 1, 5, 1, 3, 2, 15, 1, 3];
k = 3; // window size


// Function

function slidingWindow(arr, k) {

    // Do not let thhe function run if the window is larger
    // than the lenght of the array or it is equal to zero 
    // or a negative value (which means we would not have a window)

    if (k > arr.length || k <= 0) {
        return 'This does not work'
    }


    // Create a value to store the sum of all the values in the window
    // (this value will change as you iterate through each value in the
    // window)

    let windowSum = 0



    // Create a value that will store the end result of each windowSum
    // Then two pointer values that will be used to marke the first and
    // last value of the window. Where left is 0, so it starts at the
    // beginning of the array and then the value for right is k, so it
    // holds the index value of the end of the window in the array.

    let maxSum = windowSum
    let left = 0
    let right = k



    // Create a for loop which will be used to add all the values in the
    // window to the windowSum variable by adding the value of each array
    // element within the window.


    for (let i = 0; i < k; i++) {
        windowSum += arr[i]

        // We set the 'i' variable to 0, so we can start at the start of the
        // array, which allows us to get all the values.
        // We then check if i, which denotes the current index of the array, is
        // less than k, which is the end value of the window.
    }


    // The while loop is used to move the 'window' to the right for as long as the
    // right index value of the window is not greater than the length of the array.

    while (right < arr.length) {
        // For every iteration, we remove the first value in the window from the sum
        // in the window by subtracting arr[left] from windowSum and then add the value
        // for the last value in the window by adding arr[right] to windowSum.
        // This allows the result of the sum to change everytime we move the window to
        // the right.
        windowSum -= arr[left]
        windowSum += arr[right]

        // We get the maximum value, by comparing the highest value that we get from
        // iterating through the array and then  

        maxSum = Math.max(maxSum, windowSum)

        // We move the index of the window to the right with each iteration for as long
        // as the condition for this loop still holds true
        left++
        right++
    }


    return maxSum
}


console.log(slidingWindow(numArray, k))