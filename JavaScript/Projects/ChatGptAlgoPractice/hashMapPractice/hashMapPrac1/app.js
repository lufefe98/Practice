// String
const string = 'Antarctica'
const lowCaseString = string.toLowerCase()



// Function

function mostFreqChar(str) {

    // Create a Map to store string characters
    const freqMap = new Map()
    
    // Iterate through the string with for of loop
    for (char of str) {

        // Check for existence of characters from 
        // the string in the map
        if(freqMap.has(char)) {

            // Increment the frequency count of the character
            // if it exists in the string and make an entry into
            // the Map
            freqMap.set(char, freqMap.get(char) + 1)
        } else {

            // If the character does not exist, make an entry in the
            // Map and set it to 1
            freqMap.set(char, 1)
        }
    }

    return freqMap
}

console.log(mostFreqChar(lowCaseString))