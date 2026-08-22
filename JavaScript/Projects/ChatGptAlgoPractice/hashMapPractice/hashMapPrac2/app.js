// String
const string = 'Antarctica'
const lowCaseString = string.toLowerCase()




// Function

function mostFreqChar(str) {
    // Initialize max count and max character values
    let maxChar = ''
    let maxCount = 0

    // Create new Map
    const freqMap = new Map()

    for (let char of str) {
        // Enter character to the map and update its value by 1, but
        // if it doesn't exist in the map yet, give it a value of
        // 0 and then update its value by 1
        freqMap.set(char, (freqMap.get(char) || 0) + 1)

        if (freqMap.get(char) > maxCount) {
            // If the character has a value greater than the maxCount
            // value, then  set the maxCount to the value of the character
            // and then set the maxChar to the actual character from the 
            // string
            maxCount = freqMap.get(char)
            maxChar = char
        }
    }

    // Return the maxCount number and the maxChar character
    return {maxChar, maxCount}
}

console.log(mostFreqChar(lowCaseString))