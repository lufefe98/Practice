// Strings

const greet = 'hello'
const language = 'JavaScript'

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString(greet))
console.log(reverseString(language))