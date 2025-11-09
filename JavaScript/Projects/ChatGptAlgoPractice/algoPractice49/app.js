// string

let string = 'he is insideously hiding behind the drawer'


// Function

function getLongestVowel(str, k) {
    let maxVowels = 0
    let windowCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']


    for (let i = 0; i < k; i++) {
        if (vowels.includes(str[i])) {
            windowCount++
        }
    }

    maxVowels = windowCount


    for (let right = k; right < str.length; right++) {
        if (vowels.includes(str[right - k])) {
            windowCount--
        }

        if (vowels.includes(str[right])) {
            windowCount++
        }

        maxVowels = Math.max(maxVowels, windowCount)
    }

    return maxVowels
}


console.log(getLongestVowel(string, 5))