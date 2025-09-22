// Create String


const country = 'Equidistant'


// Create Function

function charCount(str) {
    const stringCharFreq = new Map()

    for (const char of str) {
        if(stringCharFreq.has(char)) {
            stringCharFreq.set(char, stringCharFreq.get(char) + 1)
        } else {
            stringCharFreq.set(char, 1)
        }
    }

    return stringCharFreq
}

console.log(charCount(country))