// // Array
// const numArray = [8, 3, 5, 4, 7, 6, 1, 2]
const numArray = [8, 3, 5, 4, 7, 6, 1]

function mergeSort(arr) {
    if (arr.length <= 1) return arr;  // Base case

    let mid = Math.floor(arr.length / 2);

    // Split into left and right halves
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // Merge the two halves
    return merge(left, right);
}


function merge(left, right) {
    result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log(mergeSort(numArray))