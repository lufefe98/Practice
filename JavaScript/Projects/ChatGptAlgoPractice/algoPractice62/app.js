// Object

const object = [
    {
        name: 'Sam',
        grade: 55
    },
    {
        name: 'Kendall',
        grade: 76
    },
    {
        name: 'James',
        grade: 59
    },
    {
        name: 'Chris',
        grade: 80
    },
    {
        name: 'Jack',
        grade: 95
    },
    {
        name: 'Alison',
        grade: 65
    },
    {
        name: 'Mason',
        grade: 77
    },
]

function mergeSort(obj, key) {
    if (obj.length <= 1) return obj

    let mid = Math.floor(obj.length / 2)
    let left = mergeSort(obj.slice(0, mid), key)
    let right = mergeSort(obj.slice(mid), key)



    return merge(left, right, key)
}

function merge(left, right, key) {
    let i = 0
    let j = 0
    let result = []

    while (i < left.length && j < right.length) {
        if(left[i][key] < right[j][key]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++            
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))    
}

console.log(mergeSort(object, 'grade'))