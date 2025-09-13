// Array 

const numArray = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 6, 7, 4, 6, 2, 6]

// Function
function countOccurrences(arr) {
    const map = new Map()

    for (let num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    return map
}

const occurrences = countOccurrences(numArray)

// To log as an object:
console.log(Object.fromEntries(occurrences))

let highestValue = -Infinity

// Or loop through the Map directly:
for (let value of occurrences.values()) {
    if (value > highestValue) {
        highestValue = value
    }
}


const mostFrequent = []
for (let [num, count] of occurrences.entries()) {
    if (count === highestValue) {
        mostFrequent.push(num)
    }
}

console.log("Occurrences:", Object.fromEntries(occurrences))
console.log("Most Frequent:", mostFrequent)