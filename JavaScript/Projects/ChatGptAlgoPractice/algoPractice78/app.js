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
    let left = 0
    let right = 0
    let count = pat.length

    while (right < str.length) {
        const rightChar = str[right]

        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1);
            if (map.get(rightChar) === 0) count--;
        }



        if (right - left + 1 > pat.length) {
            const leftChar = str[left];
            if (map.has(leftChar)) {
                if (map.get(leftChar) === 0) count++;
                map.set(leftChar, map.get(leftChar) + 1);
            }

            left++
        }
        if (count === 0) result.push(left, right, rightChar, leftChar)
            
        right++
    }

    return result
}

function findAnagram(str, pat) {
    const result = [];
    if (str.length < pat.length) return result;

    let map = new Map();
    for (const char of pat) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Number of distinct characters in pattern that need to be matched
    let requiredMatches = map.size;
    let left = 0, right = 0;

    while (right < str.length) {
        const rightChar = str[right];

        // Process character entering the window
        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1);
            if (map.get(rightChar) === 0) requiredMatches--;
        }

        // If window exceeds pattern length, shrink from left
        if (right - left + 1 > pat.length) {
            const leftChar = str[left];
            if (map.has(leftChar)) {
                if (map.get(leftChar) === 0) requiredMatches++;
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }

        // Check if current window is an anagram
        if (requiredMatches === 0) result.push(left, right, str[left], str[right]);

        right++;
    }

    return result;
}




// Execute

console.log(findAnagram(string, pattern))