// Strings

const pattern = 'slap'
const string = 'slapdfalpskalaa'



// Function

function findAnagram(str, pat) {
    // Handle Edge Case
    const result = []

    if (str.length < pat.length) return result

    let map = new Map()

    for (const char of pat) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // String frequency + Move Window
    let left = 0, right = 0, count = 0

    while (right < str.length) {
        const rightChar = str[right]

        if (map.has(rightChar)) {
            if (map.get(rightChar) > 0) count++

            map.set(rightChar, map.get(rightChar) - 1)
        }
        right++


        if (count === pat.length) result.push(left)

        if (right - left + 1 > pat.length) {
            const leftChar = str[left]
            if (map.has(leftChar)) {
                if (map.get(leftChar) >= 0) count--
                
                map.set(leftChar, map.get(rightChar) + 1)
            }

            left++
        }
    }

    return result
}



// Execute

console.log(findAnagram(string, pattern))