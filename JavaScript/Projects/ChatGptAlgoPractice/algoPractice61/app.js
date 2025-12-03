// Array

const stringArr = ['snap', 'aced', 'gold', 'central', 'cover']
let compCount = 0


function mergeSortStr(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSortStr(arr.slice(0, mid))
    let right = mergeSortStr(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {

    let i = 0
    let j = 0
    let result = []

    while (i < left.length && j < right.length) {
        if (left[i].localeCompare(right[j]) < 0) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++ 
        }
        compCount++
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log(mergeSortStr(stringArr))
console.log(compCount)