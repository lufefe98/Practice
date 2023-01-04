// Arrays are a data structure in JavaScript that is used to store a collection
// of data 
// (It is possible to store different types of data, for example strings and
// numbers can be stored in the same array)

let arr1 = ["String 1", 1, "String 2", 2, "JavaScript", 45]

// NB: Arrays are different from other data types such as numbers and strings
// in the sense that they are stored in JavaScript memory because with strings
// and numbers, if two of them have the same value (eg: both strings are "Golf"
// or both are 10) then what happens is that if they are evaluated for true 
// equality (===), it will evalaute to true, however, with arrays, what happens
// if two arrays, even if they have the same elements, it will still evaluate to
// false.
// This is because arrays are stored using an reference, rather than the actual value
// and this reference is used to point to the specific array to which it has been
// assigned to.
// Arrays (and object literals) are stored using a reference because they store 
// different types of data, they are liable to change and get internally updated,
// sometimes the items that are stored inside an array/object can be removed, 
// added/changed etc. hence it is better that they get stored using a reference.

// Accessing Data from arrays
const arrStr1 = arr1[0]

// Arrays, similar to strings, also use indexes, but this index will refer to each
// individual element in the array and is accessed using square brackets with the
// index of the element in question.



// ARRAY METHODS

// Updating Array Elements

// push
const arrPush = ["John", "Paul", "Peter", "Phillip", "James"]

arrPush.push("Matthew")

// Push updates arrays by adding new elements to the end of an array.
// It is possible to multiple new elements using push as well, by adding
// the other elements in the parentheses, separated by a comma.


// pop
const arrPop = ["Arsenal", "Man City", "Chelsea", "Man United", "Brighton"]

arrPop.pop()

// The pop() method updates an array by removing the last element from an array.



// shift
const arrShift = ["Gold", "Platinum", "Magnesium", "Palladium", "Silver"]

arrShift.shift()

// The shift() method removes elements from the start of the array.


// unshift
const arrUnshift = ["red", "yellow", "green", "blue", "purple", "pink"]

arrShift.unshift("black")

// The unshift() method adds elements to the start of the array.


// NB: These 4 methods (push, pop, shift and unshift) are mutating methods 
// and will create a new array and therefore changes the reference of the array.


// slice

const arrSlice = ["Future", "Drake", "Travis Scott", "Pooh Shiesty", "21 Savage"]

arrSlice.slice(0, 3)

// The slice() method is a workaround/improvement to the problem of shift and pop
// creating a new array when they are used to remove elements in an array by making
// a copy of the array and its refernce and depending on the arguments that are used
// and then removing the elements.
// The first argument that is in the parentheses is the start point for the
// method to remove and the second argument is the end point.
// If the start point is a negative number, then it will start from the end
// of the array.
// If there is only one argument passed in, it will remove all the items in the
// array from that point until the first/last element depending on if the argument
// is negative or positive and if no arguments are passed in, then a copy of the
// array will be the result.

// NB: The slice() method can also be used on strings


// splice
const arrSplice = ["thyme", "rosemary", "parsely", "coriander"]

// arrSplice.splice(1, 2, "basil", "mint", "cilantro")

// The splice method is similar to unshift and push in that it also
// is a mutating method that creates a brand new array.
// The first argument in the parentheses of the 
// method is for the start point, the 2nd argument is for the number of elements
// that are to be deleted, any arguments that are added from there are what will
// replace the removed elements.

// If only a start point is specified then splice() will delete from there until
// the start/end
// If new items are going to be added, then the delete count will have to be there
// but if the intention is to only add new items, then the delete count should be
// inserted in the parentheses as 0.


// Concatination of Arrays

const concatArr1 = [1, 2, 3, 4, 5]

const concatArr2 = [6, 7, 8, 9, 10]

const concatArr = concatArr1.concat(concatArr2)

// concat() concatinates arrays (ie: merges arrays into a single new array)
// It is possible to concat more than one array by passing in the next array
// in the parantheses as would be done with any other argument which gets passed
// into the parantheses of a method.

// NB:The existing arrays are not altered in any way, and therefore keept their
// original references.


// Searching Inside Arrays
arrStr1.indexOf("JavaScript")

// This searches for a specific element within the array and returns its index
// within the array (which is a numerical value).
// indexOf accepts a 2nd argument which specifies the start point for the search
// for the index of an element. (This can be helpful if there is more than one of
// the same element within the array)