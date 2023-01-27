// Map

const arr1 = ["Crow", "Car", "Face", "Book"]

const plural = arr1.map(item => item + "s")
console.log(plural)

// Map is an iterative methodused to create a new array from an existing array by taking
// the elements from the existing array and running each one through a callback function
// and populating the new array with the subsequent results.

// NB: Map is a copying method that won't alter the keyword "this".
// The callback function mutates the existing array. The length of the existing array is
// saved before the callback function is invoked and any elements added to the original
// array after the callback function has been called on each element in the array does
// NOT result in the invokation of the callback function, however if there is a change in
// an element in the existing array, then that will result in the invokation of the callback
// function.

// Filter

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const gt5 = arr2.filter(num => num > 0)
console.log(gt5)


// Filter is a method that is used to create a shallow copy of an array after filtering out
// elements that do not match a condition from the boolean in the callback function and if
// no elements can pass the condition, then the array will come back empty.

// It is important to note that since filter() creates a shallow copy of the original array
// all of the elements in the new array will be the same as in the original array.



// Reduce

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const bigNum = arr3.reduce((bigNum, num) => bigNum + num, 10)

console.log(bigNum)


// Reduce() is used to combine all the elements in an array and retun a single final value.

// The callback in reduce() takes 2 parameters, namely an accumulator and a current value
// and there is an initial value initial value.
// 

// There is an optional initial value which is part of the callback function.
// If it is not used, then the first call from the callback function will be the first
// value from the array (which takes the place of the first accumulator) added with
// the next value (current value) before moving on to the next accumulator and current
// value.
//  If an initial value is specified, then it will act as the first accumulator before 
// using the first element in the actual array.
