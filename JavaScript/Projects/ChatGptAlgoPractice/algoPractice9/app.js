// Strings

const text1 = 'anagram'
const text2 = 'radar'
const text3 = 'model'
const text4 = 'refer'

const text5 = 'gold'
const text6 = 'told'
const text7 = 'racecar'
const text8 = 'civic'


// Function

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('')

    if (reversed === str) {
        return true
    }

    return false
}

console.log(isPalindrome(text1))
console.log(isPalindrome(text2))
console.log(isPalindrome(text3))
console.log(isPalindrome(text4))

console.log(isPalindrome(text5))
console.log(isPalindrome(text6))
console.log(isPalindrome(text7))
console.log(isPalindrome(text8))