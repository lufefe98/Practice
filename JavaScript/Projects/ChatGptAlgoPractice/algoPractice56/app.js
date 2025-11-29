// // Array

const numArray2 = [4, 3]
const numArray1 = [2, 1]

function merge(a, b) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }

    return result.concat(a.slice(i)).concat(b.slice(j));
}

console.log(merge([5, 9, 15], [1, 6, 8]))
// console.log(merge(numArray1, numArray2))