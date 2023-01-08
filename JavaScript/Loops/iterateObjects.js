// There are numerous ways of iterating through object literals.

const gameConsole = {
    Console: "PlayStation 5",
    Manufacturer: "Sony",
    Price: "R13 000",
    Store: "Makro",
}

for (const [key, val] of Object.entries(gameConsole)) {
    // console.log(key, val)
    console.log(`The ${key} is ${val}`)
}

// The for of loops is one of the ways of looping through an object literal and it does so by
// returning an array from the values that have been accessed from the object.

// In the above case, the Object.entries() method returns an array of arrays from the object
// literal.
// If there was a single identifier that was used in the variable, it would
// return each key-value pairing in an array, but since there are two identifiers in square
// brackets used in the expression, it accesses both the key and the value individually and
// therefore returns them both as a string.


// The Object method is very crucial to the iterating of objects.

// There are 2 other other static methods that go with the boject method, that include the
// value() method and the keys() method which, as they say in the name access the value of the
// array and the key of the object respectively.


// For...in Loops
const fragrance = {
    Brand: "Dior",
    Line: "Homme",
    Concentration: "Eau De Toilette",
    Size: "100ml",
    Price: "R2260",
}

for (const i in fragrance) {
    console.log(i)
}

// What the for in loop does is similar to the for...of loop, but it does not use the Object
// method and it also differs in that it only returns the key from the object and in order
// to access the value from the object, it would require accessing it with square bracket 
// notation
// eg: console.log(fragrance[i])

// The for...in loop is not as common to use as it is an older way of looping through objects
// with as compare to using the static object methods above which convert properties into arrays
// and allow for the use of array methods. The static object methods also allow us to access
// either one of the key or the value pairs instead of having to go through the extra step of
// having to access the values of an object with the variable of the loop on the identifier of 
// the object.