// Strings

const text5 = 'Gold'
const text6 = 'Summer is Here'
const text7 = 'A man a plan a Canal Panama'
const text8 = 'Civic'


// Function

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('').toLowerCase().replace(/\s/g, '')
    return reversed === str.toLowerCase().replace(/\s/g, '')
}

console.log(isPalindrome(text5))
console.log(isPalindrome(text6))
console.log(isPalindrome(text7))
console.log(isPalindrome(text8))
