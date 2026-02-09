// Array

const array = [1, 4, 7, 3, 2, 5, 9, 6, 12]

const k = 3




// Function


function firstTarget(arr) {
    if (k <= 0 || k > arr.length) return 'Incorrect window size'

    let sum = 0
    let left = 0
    let right = k
    const target = 15
    
    for (let i = 0; i < k; i++) {
        sum += arr[i]
        
        while (sum < target) {
           sum -= arr[left]
           sum += arr[right]

           left++
           right++

        }
        
    }
    if (sum >= target) {
        return sum
    }
}



// Execute

console.log(firstTarget(array))