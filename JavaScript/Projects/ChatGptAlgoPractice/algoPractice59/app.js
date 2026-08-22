// Array

const string = 'bdamzs'


function mergeSortStr(str) {
    if (str.length <= 1) return str

    let mid = Math.floor(str.length / 2)

    let left = mergeSortStr(str.slice(0, mid))
    let right = mergeSortStr(str.slice(mid))

    return merge(left, right)
}


function merge(left, right) {
    let result = ''
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result += left[i]
            i++
        } else {
            result += right[j]
            j++
        }
    }
    

    return result + left.slice(i) + right.slice(j)
}

console.log(mergeSortStr(string))