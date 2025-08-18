// Create Array

const numbers = [1, 2, 2, 3, 4, 4, 5]

const noDuplicateArray = []

// For Loop

for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i]


    if (!noDuplicateArray.includes(currentNum)) {
        noDuplicateArray.push(currentNum)
    }
}

console.log(noDuplicateArray)
console.log('JavaScript Algorithim practice done')