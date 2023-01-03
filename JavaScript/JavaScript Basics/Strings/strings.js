// A string is the name for the text data type in JavaScript and are 

let str = "This is a JavaScript string"
// The characters in strings are stored using an index (ie: each character has
// a numerical value starting from 0, which can be used to access the individual
// character)


// Length of a string
let strLength = str.length
// To find the length of a string, we can use the .length property which
// returns a numerical value


// Accessing string characters
let firstAlphabet = str[0]
// The above code is how a character in a string is accessed and in the above
// case, will result in the the variable firstAlphabet being "T", which is
// taken from the first character in the variable str (the letter "T" has
// an index of 0, as it is the first character of the string)

let lastAlphabet = str.charAt(str.length-1)
// Another way of accessing the characters without the use of a string is 
// with the charAt() method, which is takes the index of a character in a
// string in the parentheses and will return the character which matches
// that index, but if the index does not exist, then it will return an empty
// string.
// The above code makes use of the .length property which returns a numerical
// value equivalent to the number of characters, and in order to access
// the last character in a string, str.length has to be subtracted by 1 because
// strings start counting from 0.

// NB: Strings cannot be changed, they can only be overwritten, therefore, if
// a method such as .toUpperCase or .toLowerCase is used on a string
// the result will be JavaScript saving it as a new string with 
// upper or lower cased characters.


str.includes("s")
// To find out if a specific character can be found within a string
// the method includes() can be used, where the character in question is
// passed into the parentheses.
// The result will be a boolean (ie: true or false)
// NB: The method includes() takes a second argument of a number which is
// used to determine an index from which to start from.

str.indexOf("a", 10)
// Another way of searching for characters in strings is indexOf which is similar
// to includes in that it also searches for a character in a string
// from a specified index, but it instead returns the numerical value of the 
// character's index rather than a boolean true or false result.



// Concatinating
let string1 = "Hello"
let string2 = " JavaScript"

let newString = string1 + string2

let txt = "Hello" + " " + "World"
// It is possible to combine strings, which is called "concatinating", which
// is done by using the + operator to combine the strings, but it is important
// to note that spaces will have to be manually added to the new string that
// gets created


// String template literal
let name = "Cody"

let greet = `Hello ${name} how are you?`


// We can use a type of a string called a string template literal, which allows
// us to take values and incorporate them into a string



// Escaping quoutes in strings
let myString = "He said \"I like chicken\" to the cafeteria lady"

// Because a normal string is created using quote marks, when a string needs to
// make use of quotes or an apostrophe to indicate a statement someone is making
// or show ownership/plural etc, this can be escaped with the use of backslashes.

// something similar can be done to move the text of a string onto a new line
// by adding an n (for new line) after the backslash and t (for tab) to create a 
// tab 