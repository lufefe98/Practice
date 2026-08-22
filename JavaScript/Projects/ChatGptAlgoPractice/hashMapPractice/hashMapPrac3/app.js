// String
const string = 'Antarctica'
const lowCaseString = string.toLowerCase()




// Function

function firstUniqueChar(str) {
    const freqMap = new Map()

    for (let char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1)
    }

    for (let char of str) {
        if (freqMap.get(char) === 1) {
            return char
        }
    }

    return null
}

console.log(firstUniqueChar(lowCaseString))
