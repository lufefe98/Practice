// Strings

const text1 = 'anagram'
const text2 = 'radar'
const text3 = 'model'
const text4 = 'refer'


// Function

function isPalindrome(str) {
    let reversed = ''

    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i]
    }

    if (reversed === str) {
        return true
    } else if (reversed !== str) {
        return false
    }
}


console.log(isPalindrome(text1))
console.log(isPalindrome(text2))
console.log(isPalindrome(text3))
console.log(isPalindrome(text4))