// String

const string = 'his newest painting is extremely ugly'


function getMostVowels(str, k) {
    let maxVowels = 0
    let windowCount = 0
    let vowels = 'aeiou'
    const strVowels = []

    // Increment the windowCount
    for (let i = 0; i < k; i++) {
        if (vowels.includes(str[i])) {
            windowCount++
        }
    }

    maxVowels = windowCount

    // Move the window

    for (let right = k; right < str.length; right++) {

        if (vowels.includes(str[right - k])) {
            windowCount--
        }

        if (vowels.includes(str[right])) {
            windowCount++
        }

        maxVowels = Math.max(maxVowels, windowCount)

        for (let j = right - k + 1; j < right; j++) {
            if (maxVowels === 3) {
                console.log(str[j])
            }
        }
    }

    return maxVowels
}

console.log(getMostVowels(string, 5))