// NB: JavaScript only has one type of number, unlike other languages which have
// integers, whole numbers and decimal numbers.


// The Math object

// This is a static object which contains methods that can be used on numerical 
// values.

let randNum =  Math.random()
// The above returns a random numbers with the use of the .random() property


let randWholeNum = Math.floor(randNum * 30)
// The above returns a random number between 0 up to 30 (or whatever the number that
// is being used to multiply randNum/Math.random()).
// Essentially, Math.floor() is used to make sure that a number is rounded down to 
// the nearest integer that is less than or equal to a given number.
// This is particularly helpful with Math.random() because it is very likely to
// return decimal numbers, Math.floor() makes it into an interger which is most
// likely to be useful for more day to day uses.


let squaredNum = Math.pow(4, 2)
// Math.pow() returns a number that is raised to the power of an exponent
// Where: the first number is the base number and the 2nd number in the parentheses
// is the exponent.


let strNum = "25"
let parseNum = parseInt(strNum)
// Numbers that are stored inside a string are not the same as a standard number
// in JavaScript. Therefore, we can not use them with other numbers and get back
// a numerical value. In order to overcome this, JavaScript has the parseInt() function
// which is useful for taking a number inside a string and converting it to a
// standard JavaScript number, which therefore allows for the number to be used wit
// other numbers in JavaScript.