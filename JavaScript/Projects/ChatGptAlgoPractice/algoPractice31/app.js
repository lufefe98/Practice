// Add inputs

const str1 = 'Was it a Cat I Saw?'
const str2 = 'Deified'
const str3 = 'sold'
const str4 = 'Rotator'
const str5 = 'deed'

function isPalindrome(str) {
    
    // Normalize Strings
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    // Create 2 points
    let left = 0
    let right = cleanStr.length -1

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false
        }
        left++
        right--
    }
    return true
}


console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))
console.log(isPalindrome(str5))