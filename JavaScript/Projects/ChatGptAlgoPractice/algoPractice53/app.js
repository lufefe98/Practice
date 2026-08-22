// String

const string = 'his newest painting is extremely ugly'


function getMostVowels(str, k) {
    let maxVowels = 0
    let windowCount = 0
    let vowels = 'aeiou'

    for (let i = 0; i < k; i++) {
        if(vowels.includes(str[i])) {
            windowCount++
        }
    }

    maxVowels = windowCount

    // Move the window

    for (let right = k; right < str.length; right++) {
        if(vowels.includes(str[right - k])) {
            windowCount--
            // Remove the first element from the window count
            // when we move the window to the right
        }

        if(vowels.includes(str[right])) {
            windowCount++
            // Add the latest element to the window count
            // when we move the window to the right if it is a 
            // vowel
        }

        maxVowels = Math.max(maxVowels, windowCount)
    }

    return maxVowels
}

console.log(getMostVowels(string, 5))