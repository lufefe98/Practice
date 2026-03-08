// Strings

const pattern = 'slap'
const string = 'slapdfalpskalaa'


// Functions

function findMatchText(str, pat) {


    // Edge case
    const result = []
    // If the pattern is longer than the string we want to
    // search through, then we just return the result (ie: empty array)
    if (str.length < pat.length) return result

    // Counts
    // Add objects to create frequency maps
    const patternCount = {}
    const windowCount = {}



    // Pattern Frequency Map
    for (let char of pat) {
        // if the character doesn't exist, the starts with a
        // value of 0 and then add 1
        patternCount[char] = (patternCount[char] || 0) + 1
    }



    // Left pointer
    let left = 0



    // Iterate String + Move Window
    for (let right = 0; right < str.length; right++) {
        // Initialize character for string
        const char = str[right]

        // Frequency map for string
        windowCount[char] = (windowCount[char] || 0) + 1

        // Move Window
        if (right - left + 1 === pat.length) {
            // Check if window size is the same length as
            // pattern length


            // If the frequency maps of the pattern and the string
            // match, then we push the index of the left and right
            // pointer to the result array
            if (JSON.stringify(windowCount) === JSON.stringify(patternCount)) {
                result.push(left)
            }

            // Initialize character on left side of window and then
            // decrement the value of the left character from the
            // frequency map when we move the window.
            const leftChar = str[left]
            windowCount[leftChar]--


            // If the left character has a value of 0 after decrementing
            // it, we then remove the character from the frequency map
            if (windowCount[leftChar] === 0) {
                delete windowCount[leftChar]
            }
            // Move the left pointer to the right by incrementing it by
            // 1.
            left++
        }

    }


    return result
}




console.log(findMatchText(string, pattern))