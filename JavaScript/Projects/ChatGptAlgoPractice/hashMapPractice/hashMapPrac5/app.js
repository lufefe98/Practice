// Arrays

const s = "cbaebabacd"
const p = "abc"

// Function

function findAnagram(s, p) {
    // Create array to store resulting indecies and the map
    const result = []
    const freq = new Map()

    // For of loop to loop through string
    for (let char of p) {
        // add the character and the value
        freq.set(char, (freq.get(char) || 0) + 1)
    }

    // initialize left index and value for matches between
    // the s & p strings
    let left = 0
    let matches = 0

    // Sliding window
    for (let right = 0; right < s.length; right++) {
        // initialize char to right character in the s string
        const char = s[right]

        // check if the freq map has char
        if (freq.has(char)) {
            // if condition is true, add the char to the map and then
            // check if the char index value is the same as 0, and if true
            // then increment matches.
            freq.set(char, (freq.get(char) - 1))
            if (freq.get(char) === 0) matches++
        }

        // if the window is less than the length of the p string
        // then we initialize the left character
        if (right - left + 1 > p.length) {
            const leftChar = s[left]

            // check if freq map has the left character 
            if (freq.has(leftChar)) {
                // if condition is true, then decrement from matches
                if (freq.get(leftChar) === 0) matches--
                // enter the value for the left char in the map
                freq.set(leftChar, (freq.get(leftChar) + 1))

            }
            // increment left
            left++
        }
        
        // if the matches value is the same length as the size of
        // the map (ie: number of values in freq map)
        if (matches === freq.size) {
            // push the starting index for anagram match
            result.push([left])
        }
    }

    // return the result
    return result
}


console.log(findAnagram(s, p))