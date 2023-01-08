// While loops are a basic way of looping

// let num = 10
// let i = 0

// while (i < num) {
//     i++
//     console.log(i)
// }

// While loops use a condition based on a variable and then use as long as the condition 
// is still true, the loop will continue to run
// While loops are best used for situations where the number of iterations are not known
// for example, a game of chess/checkers or user inputs.


// do...while Loops

let hundred = 1000

do {
    hundred *= 2
    console.log(hundred)
} while(hundred < 100)

// The do...while loop executes a statement until it evaluates to being false.
// How it works is that it will run the statement and then the condition is evaluated
// afterward and if the statement is still true, then the statement is repeated until it
// eventually evaluates to false.
// This means that even if the condition would initially evaluate to false, the statement
// has to get executed at least once.