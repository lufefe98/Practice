// Throw Statements
function getArrLength (arr) {
    if (arr.length > 5) {
        throw new Error("Too many items")
    }
}

try {
    getArrLength([1, 2, 3, 4, 5, 6])
} catch (err) {
    console.log(err)
}

// Throw statements allow for the creation of user-defined exceptions (ie: an exception that is defined
// by the developer which would not necessarily be an error coming from JavaScript).

// Side note: Any statements that come after "throw" will not be executed and the function will stop and
// then control of the execution will pass on to the catch block and if there is no catch block, then the
// execution will terminate.
