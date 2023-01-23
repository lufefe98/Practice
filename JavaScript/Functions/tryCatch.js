// Try..Catch statements

try{
    function strFunc(str) {
        console.log(str.toUpperCase())
    }

    strFunc(25)
} catch {
    console.error("A string was expected")
}

// The above is a basic try..catch statement.
// The try block is where some code is attempted, but a potential error is anticipated, this is where
// the catch block comes in and if the error does occur, then in the catch block, a statement can be
// made on how to handle the anticipated error when it does happen.

// If a try...catch statement is not used and there is some code that would cause an error, it could 
// affect the code that comes after it and prevent it from running, where as that wouldn't be the case
// if a try...catch statement is used.

// This is especially useful when working with API's and AJAX where there is more unpredictability
// involved.


try{
    function numFunc(x, y) {
        return x * y
    }
    const string = "This is a string"

    console.log(numFunc(string.toExponential(2)))
} catch(err) {
    console.error(err)
    console.error("A number was expected")
}

// The above is a way of printing the error that has occured from the try statement by passing an 
// argument in the parentheses next to "catch" before opening the catch block.


// There is also a finally statement which runs regardless of the result of the try..catch statement.
