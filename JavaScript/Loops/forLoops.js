// Loops are used for the repeating of a specific action as long as a specific condition is
// not met

// For Loops
for (let i = 0; i <= 15; i++) {
    console.log(i)
}

// How a for loop works is that it will accept an initial expression (in the example above is a
// varaible), followed by a condition related to that initial expression and thereafter, an
// update (increment/decrement) expression that until the condition evaluates to being true.
// (Side note: If the condition is not included, then it is assumed to be true)

// Then inside the curly braces is a statement that will be executed.

const arr = ["Sam", "Mikaela", "Ronald", "Judy", "Miles", "Jazz", "Seymour", "Robert", "William"] 

// for (let names = arr.length -1; names >= 0; names--) {
//     console.log(arr[names])
// }
for (let names = 0; names < arr.length; names++) {
    console.log(arr[names])
}

// For loops can be used to iterate over arrays by accessing the index of the array by 
// initializing the expression to a numerical value that you want to start off from as an index
// in the array, then in the condition, that will depend on how much of the array is intended to
// be iterated, then the update expression will depend on whether you intend to iterate going 
// from the end to start or vice versa and then in the console.log(), it will take the array
// name and then using square bracket notation, it will take the variable name from the initial
// expression and use it (since it is a numerical value) and use it to access the various elements
// from the array and iterate the array.


