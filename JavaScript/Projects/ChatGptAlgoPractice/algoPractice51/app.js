// String

const string = 'he is dressed rather hideously today'


// Get longest window of vowels from the above string
// by checking if the item in the string is a vowel
// If there is a vowel which we find in the string, we
// then update the count of the window for every single
// new vowel that is found by moving the right pointer
// towards the end of the string.

function longestVowelCount(str, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowels = 0
    let windowCount = 0

    // We need to increment the window count if we encounter
    // a vowel in the string. This requires us to iterate through
    // the string and see if it matches the vowels which are in the 
    // array of vowels.

    for (let i = 0; i < k; i++) {
        if (vowels.includes(str[i])) {
            windowCount++
        }
    }

    // We need to move the window up to the end of the target 
    // length of the substring (ie: k).

    for (let right = k; right < str.length; right++) {
        if (vowels.includes(str[right - k])) {
            windowCount--
        }

        if (vowels.includes(str[right])) {
            windowCount++
        }
        maxVowels = Math.max(maxVowels, str[right - k])
    }

    return maxVowels
}

console.log(longestVowelCount(string, 5))