// String

const string = 'abskddsnameodndb'


// Function

function longestNoDupe(str) {
    // create set
    const seenChar = new Set()

    // create left pointers
    let left = 0

    // create max counter
    let maxCount = 0

    // Check if the current letter is not the same as the
    // previous letter, then add it to the set using the 
    // sliding window

    for (let right = 0; right < str.length; right++) {
        const char = str[right]

        while (seenChar.has(char)) {
            seenChar.delete(str[left])
            left++
        }
        seenChar.add(char)
        maxCount = Math.max(maxCount, right - left + 1)
    } 

    return maxCount    
}



console.log(longestNoDupe(string))