// A function is reusable code that allows for writing reusable code and defining code that
//  can be used at a later point

function newFunc() {
    console.log("Hello from my JavaScript function.")
}

// The above function consists of the keyword function, a function name of newFunc, parentheses
// that will contain the parameters for the function and then the curly braces where the
// statement is typed out.

newFunc()

// In order for the funciton to execute, the function should be called by typing out the
// function name with the parentheses.
// Depending on whether there is any parameters when calling the funciton, then the arguments
// should be passed into the parentheses for them to return a result based on the statement
// in the function.

function mathFunc(x, y) {
    console.log(x * y)
}

mathFunc(5, 5)

// When using a function with parameters, the parameters are named varialbes that are passed
// into the parentheses of the function when it is being defined and they are assigned to the
// values (arguments) that are passed into the function.

// Function Expression

const greetFunc = function (name) {
    console.log(`Hello ${name}, how are you?`)
}

greetFunc("Sam")

// Function expressions are another way of defining a function and it does not require a 
// function name because the function is saved to a variable which can be used in place of 
// function name when executing the function, which would be its most common usage.
// If a function has a name, it will still work in the same way a function would and
// will use the actual function name when it is being called.
// A function name won't change if it is assigned to another variable.



// The Return Keyword

function retFunc(a, b) {
    return a - b
}

console.log(retFunc(450, 90))

// The return keyword is used to get values out of functions and then storing the values that
// are derived from the function.
// The difference with the use of return compared to console.log() is that
// unlike console.log(), the return keyword actually stores the values that are
// outputted, whereas console.log does not.
// The return keyword also brings the function to an end and any code that is in the statement
// after the return keyword will not work (this can be circumvented by using an if...else
// statement if there are more than one possible values that could be returned)


// Scope

function whatSize(size) {
    const small = 39
    const medium = 40
    const large = 41

    if (size === small) {
        console.log("This shirt is small")
    } else if (size === medium) {
        console.log("This shirt is medium")
    } else if (size === large) {
        console.log("This shirt is large")
    } else {
        console.log("We do not have this size of shirt, sorry")
    }
}

whatSize(41)

// console.log(small)

// The above case is an example of block scope which means that any variables that are defined
// inside the function can only be accessed from within the curly braces of the function and
// the console.log which has been commented out will not be able to have access to the value
// of any one of small, medium nor large.




const color1 = "green"
const color2 = "orange"
const color3 = "red"

function traffic(color) {

    if (color === color1) {
        console.log("Go")
    } else if (color === color2) {
        console.log("Caution")
    } else {
        console.log("Stop")
    }
}

traffic(color1)

console.log(color1)

// The above is a case of global scope where a variable can be accessed from anywhere
// in the document because the funciton has been declared outside of the function, therefore
// it is "globally" scoped.

// There is also lexical scope, where a variable declared in a function that has another 
// function inside of it and in this case, the nested function has access to the variables
// in the parent function, but it does not work the other way around.
// Therefore, scope in JavaScript functions works upwards and not downwards.


// Higher Order Functions

// returning functions (Factory Functions)

function makeBetween(minAge, maxAge) {
    return function (age) {
        return age >= minAge && age <= maxAge;
    }
}

const isChild = makeBetween(0, 17)
const isAdult = makeBetween(18, 64)
const isSenior = makeBetween(64, 125)

// The case above case is how a function can be returned (ie: a factory function), which is
// used to create a function that can return another functionn which can be sotred and
// be used to return values
// In the above case, the makeBetween function takes 2 parameters and in the statement, it 
// returns a function with the parametere "age". In the statemtent, age is evaluated
// to see if it is equal to or greater than minAge and equal to or more than maxAge in order
// to determine if a person fits within a certain age group.
// The isChild, isAdult and isSenior variables are stored and initialized to the makeBetween()
// function and given a minAge and maxAge values. And when these variables are called with
// parentheses, it will return a true or false response based on the function that is being
// returned inside makeBetween().



// passing functions as arguments
function callFunc(randNumsFunc) {
    randNumsFunc()
    randNumsFunc()
}

function randNumsFunc() {
    const randNums = Math.floor(Math.random() * 15) + 1
    console.log(randNums)
}

callFunc(randNumsFunc)

// When passing in a function as an argument, it is important to avoid passing in the function
// with the parentheses (which would execute the function), but rather to pass it in as a
// value, which will produce the values of that function, when it is passed in as an argument.

function callName(greeting) {
    greeting()
}

function greeting() {
    const fullName = "Archibald Witwticky"
    console.log(`Greetings ${fullName}`)
}

greeting(greeting)


// Keyword "This"

const pet = {
    name: "Cody",
    color: "Brown",
    breed: "Golden Retriever",
    woof() {
        console.log(`${this.name} the ${this.color} ${this.breed} said WOOF`)
    }
}

console.log(pet.woof())

// The keyword "this" is a binding used in a function to refer to an object and therefore any
// of the keys in the object can be chained onto the keyword "this" to access the values
// related to that key.

// The above example is the most common use of the the keyword "this".
// The keyword "this" can only work from isnide the object that the function is declared inside
// of in this case. (unless in strict mode, then it is undefined)

function myFunc(prefix) {
    return console.log(prefix + this.brand)
}

const car1 = {
    brand: "Audi"
}
const car2 = {
    brand: "Volkswagen"
}

myFunc.call(car1, "This is an ")

// The above is the indirect invocation of the keyword "this", and when "this" is used to refer
// to the global window object and therefore whatever falls under it instead of being limited
// to the instance in which it is being invoked.

// In the above case, they keyword "this" is invoked inside a stand-alone function and therfore
// is part of the global window object and can be used to refer to properties that exist under
// it.
// However, unlike when the method invocation where the keyword this has direct access to the
// properties inside the object that it is also falls under, "this" needs the call() method
// whenever it needs to be set to a particular object, which in this case, is the car1 object.

// There is also the apply() method, which is similar to the call() method, with the one
// difference between the 2 being that it accepts an array as its second argument.


// Constructor and Classes

function NewFragrance() {
    this.house = "Giorgio Armani"
    this.line = "Acqua Di Gio"
    this.flanker = "Profumo"
}

const fragrance1 = new NewFragrance()
const fragrance2 = new NewFragrance()

// console.log(fragrance1.house)
// console.log(fragrance2.line)

// Constructor functions are used to create new objects.
// The constructor function newFragrance() is used to initialize a new instance of an 
// object and the keyword "this" is used in the body of the function to refer to the object
// when it is eventually created.
// In the body of the functionn, the keyword "this" has what will be the keys in the object
// chained onto it and this is assigned to what will be the values of the respective keys
// in the object.

// After the newFragrance() function, fragrance1 and fragrance2 are initiallized to the
// newFragrance() constructor function, which creates a new object from a constructor
// function with the use of the "new" keyword.
// Nb: The above example involves creating multiple objects.
// Also, newFragrance() can be invoked as a function if the key


function Planets(planetName, planeRadius, planetType) {

    // assigning  parameter values to the calling object
     this.name = planetName,
     this.radius = planeRadius,
     this.type = planetType,
 
     this.myPlanet = function () {
         return (this.name + ' is a ' + this.type + ' planet with a radius of ' + this.radius + ' kilometers');
     }
 }
 
 
 const planet1 = new Planets('Earth', 6371, 'Rock');
//  const planet2 = new Planets('Jupiter', 69911, 'Gas');

console.log(planet1.myPlanet())

// Passing parameters in the parentheses of the constructor function that makes it possible to
// use them as values that can be assigned to the various keys in the object that is being
// created.

// The difference between constructor functions and an object literal is that object literal
// is a single object, but a constructor function can be used to create multiple object, as
// seen in the case of the NewFragrance() function.

// classes

class NewUser {
    constructor(userName) {
        this.userName = userName;
    }
    hello() {
        console.log(this.userName)
    }
}

let user = new NewUser("Rocky")
user.hello();

// A class is another (and more recent) way to create objects of the same kind in JavaScript
// (ES6) and offers an improvement on the constructor function above. It is a "special" type
// of function. It operates on Strict mode even without the "Use Strict" directive.

// Classes comprise of the class keyword, an identifier and curly braces, which will be the
// body of the class and inside of the body are the methods which will be used to create the
// executable code. Classes can also contain fields which are variables inside the class body.

// The class' first method is the constructor() method and it is a special
// method for classes and is used to create and initialize the object instance of the class
// newUser. There can only be one constructor() method per class.
// (Side Note If a constructor is not added to the class, then an empty constructor() method is
// added by default by JavaScript).
// All methods after the constructor() method are added stored on the prototype property

// Classes are sometimes considered as "syntactic sugar" because they make code easier to
// read and almost the same outcome could be achieved by declaring the class keyword and
// instead just making a constructor function and chaining the methods on the prototype
// followed by the identifier of the function
// The differences will be that the function not be seen as a class contructor by
//  JavaScript, class methods are not enumerable (class sets the enumarable flag to false) and
// the code will not be inm strict mode.

class Location {
    constructor(coord1, coord2) {
        this.coord1 = coord1;
        this.coord2 = coord2;
    }

    static displayedName = "Location"
    static distance(dist1, dist2) {
        const distCoord1 = dist1.coord1 - dist2.coord1
        const distCoord2 = dist1.coord2 - dist2.coord2

        return Math.hypot(distCoord1, distCoord2)
    }
}

// In the above example, the keyword static is used to define methods and fields that are not
// meant to change (ie: the distances for a set of coordinates).

// Inheritance

class Car {
    constructor(vehicle) {
        this.vehicle = vehicle
    }

    options() {
        console.log(`${this.vehicle} comes with various options`)
    }
}

class MyCar extends Car {
    constructor(vehicle) {
        super(vehicle)
    }

    options() {
        console.log(`My ${this.vehicle} comes with the optional panoramic sunroof`)
    }
}

const carOptions = new MyCar("Audi S3")

carOptions.options()

// In order to make a class that is a child of another class, the keyword "extends" is used
// in the declaration of the child class.

// The keyword "super" in the context of classes is used to access properties on the prototype
// of the class it is being used in. Without it, the constructor would not be able to access
// the keyword "this".

class Clothes {
    constructor(accessories) {
        this.accessories = accessories
    }

    fashionAdvice() {
        console.log(`${this.accessories} can be worn`)
    }
}

class MyAccessory extends Clothes {
    fashionAdvice() {
        super.fashionAdvice()
        console.log(`A ${this.accessories} can help complete an outfit`)   
    }
}

const fashionItem = new MyAccessory("Bracelet")

fashionItem.fashionAdvice();

// The above is a way of using super to call any corresponding methods from a class as well
// as in the derived class



// ARROW FUNCTIONS

const arrowFunc1 = () => {
    return console.log("Hello, this is an arrow function")
}

arrowFunc1()


// The above is an arrow function and it is a shorter way of writing functions (with some
// intentional limitations to what it can do).
// Arrow functions are always anonymous and cannot be called in their own and therefore have
// to be saved to a variable as a function expression.
// In the case of an arrow function not having any parameters, then it will still need to use
// the parentheses and if there is only one parameter, then the parentheses can be ommited.

// The keywords "this", "super" and "arguments" cannot be used on arrow functions.
// Arrow functions can't be used as constructor/generator functions and calling them with the
// "new" keyword will return an error from JavaScript.

const arrowFunc2 = (a,b) => a + b;

console.log(arrowFunc2(5, 10))

// The above is the concise body syntax for an arrow function and it does not need to make use
// of the "return" keyword because it has an implicit return, unlike the block body syntax
// with the curly braces in the case of arrowFunc1() which does require the "return" keyword.


// Iterating over Parameters

function iterate() {
    for (const args of arguments) {
        console.log(args)
    }
}

iterate("A", "B", "C")