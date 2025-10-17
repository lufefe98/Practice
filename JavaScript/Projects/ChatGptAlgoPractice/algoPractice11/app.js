// Strings

const text5 = 'Gold'
const text6 = 'Summer is Here!!!'
const text7 = 'A man a plan a Canal: Panama'
const text8 = 'Civic'


// Function

function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    console.log(cleaned)
    let reversed = cleaned.split('').reverse().join('')
    return reversed === cleaned
}

console.log(isPalindrome(text5))
console.log(isPalindrome(text6))
console.log(isPalindrome(text7))
console.log(isPalindrome(text8))
