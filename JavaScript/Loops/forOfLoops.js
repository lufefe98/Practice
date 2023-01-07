// For of loops are an easier way of loping through iterable objects (eg: arrays, map, arguments
// and object literals - It specifically loops over values when dealing with object literals)
// with the use of "Destructing", which involves taking the values out from iterable objects
// and turning them intodistinct values.

const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

for (const i of workDays) {
    console.log(i)
}

// The variable (in this case, "i"), is used to represent the individual elements in the
// array, instead of using the "i" to access the elements with the index in the array before
// looping through the array.
// There are cases when it is better to use for loops where "i" is used to access elements in the 
// array, for example with a for for loop, it can be used to iterate from the end of an array to
// the start of an array and can also be used to skip steps using the update expression.