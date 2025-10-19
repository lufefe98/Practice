// Create string inputs

const str1 = 'Panama'
const str2 = 'racecar'
const str3 = 'nurses run'
const str4 = 'Madam'

// Function 

function isPalindrome(str) {
    
    // Normalize strings
    const cleanStr = str.toLowerCase().replace(/\s/g, '')
    
    // Create left and right
    let left = 0
    let right = cleanStr.length -1


    // While loop

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
