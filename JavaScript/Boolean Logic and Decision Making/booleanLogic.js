// Comparison OPERATORS

// Equality Operator
let four = 4
let iv = four

four == iv

// The equality operator tests for the equality of two values and checks if they
// are the same. (the result will either be true or false)

let six = 6
let vi = "6"

six == vi

// A peculiarity with the equality operator is that when it is dealing two values
// that are not exactly the same in type, but are the same in value, it will
// force the two values into the same data type and then evaluate them for equlity.


// Inequality Operator
let twelve = 12
let xii = "12"

twelve != xii

// The inequality operator checks if two values are NOT the same.
// It is similar to the equality operator in that it also returns true/false
// depending on the two values. It also does not check for the equality of
// the type of data that is being evaluated.


// Strict Equality
let num = 25
let strNum = "25"

num === strNum

// The above case will evaluate to false because unlike the equility operator, the
// strict equlity also checks for type of data and not just equality of value 
// alone.


// Strict Inequality
let fourty = 40
let xxxx = "40"

// The strict inequality operator improves on the inequality operator by checking
// for data type instead of checking just for inequality of value and returning
// true or false.


// < (less than)
// > (greater than)
// >= (greater than or equal to)
// <= (less than or equal to)

// The above 4 operators are used to test numerical values and see if they are
// greater/less than or equal to and then returns a true or false value once
// the values have been evaluated.


// CONDITIONAL STATEMENTS

// IF Statements'
let a = "A"
let b = "B"


if (a == b) {
    console.log("a is equal to b")
}

// The above will evaluate to false because the two values being evaluated 
// are not equal.
// If statements use a conditional and if the condition is evaluated as being
// "truthy" the statement in the curly braces will run, however if the condition
// evaluates to being "falsy", then the statement, as in the case above, will not run.

// Falsy values include:

// False
// 0
// An empty string - ""
// null
// undefined
// NaN

// All other values are truthy.


// Other operators for connditional statements

if (a != b && fourty != xxxx) {
    console.log("These values are not the same")
}

// The Logic AND operator combines 2 conditions and checks if both evaluate to
// being true or false and runs a statement depending on if it is true or false.
// Therefore if both do not evaluate to true, then the statement won't run.

if (four !== iv || six !== vi) {
    console.log("Strings are not the same as numbers")
}

// The Logic OR operator check if either one of the conditions evaluate to being
// true, and if it is true, then the statement in the curly braces will run.

// Logic NOT
!(23 > -5 && 25 < 12) 

// The logic NOT operator (!) goes in front of an expression and it evaluates
// if it is true or not.
// It simply evaluates if a statement is true or false.


// If Else statements and Else Statements

if (5 > 6) {
    console.log("5 is not greater than 6")
} else if (4 > 10) {
    console.log("4 is not greater than 10")
} else {
    console.log("None of these statements are true")
}

// If Else statements are a way of handling slightly more complex conditional
// expressions and if one statement does not evaluate to true and then it will
// move onto the next condition and if that statement does not evaluate to true
// it will continue until the final statement and if it does not evaluate to true
// then it will not run, the same way it would not in the case of an if statement.

// The else statement is what can be used if all the if else statements have been
// exhausted and none of the conditions evaluate to true, then a final statement
// in curly braces can be written.

// NB: It is important to work from top to bottom when using if...else statements
// that are chained together.


// The Ternary Operator
let bigNum = 5000
let smallNum = 2500

2500 == 5000 ? "2500 is greater than 5000" : "2500 is less than 5000";

// The ternary operator is an alternative to the if...else statement 

(1 > 3) ? "One is greater than 3" 
    : (1 === 3) ? "1 is equal to 3" 
    : "1 is less than 3";

// Chained operators do what chained if...else statements do
// Unlike the normal ternary operator, chained ternary operators use parentheses
// for the conditional.


// Switch Statements 
const numFive = 5
switch(numFive)  {
    case 1:
    case 2:
    case 3: 
    console.log("Number is less than 5")
    break;
    case 5:
    console.log("Number is 5")
    break;
    default: console.log("This number is not 5")
}



// Switch Statements are another alternative to if...else statements and they allow
// for the evaluation of multiple values.
// The case values are tested using strict equality.
// What it does is evaluate an expression (in this case, a variable of numFive)
// and it tests if a case (whatever comes next to the keyword: case) matches
// the expression.
// The break keyword ends the execution of a statement, but if the case does not
// match, the it will move on to the next case.
// The default keyword is similar to an else statement which comes at the end of
// the sequence when all conditional statements fail to be met.



// These 3 conditional statements all do similar things but some have advantages
// over others.

// The switch statement can evaluate more than one value at once vs if..else statements
// and the ternary statements.
// Ternary statements can offer a more consice way of writing decision making code.
// especially compared to if...else statements

// Switch statements are used for vharacter expressions an intergers, whereas
// if...else statements can be used for that along with boolean types and floating
// point types.
// Switch statements only test for equality, but if...else statements can test
// for logical expressions as well (eg: greater or lesser than)
// if...else can be slower than switch statements if multiple values are being
// evaluated.