// Object literals are another form of data storage in JavaScript which can store
// different data types with a property and value pairing


// Accessing data from an object literal

const france = {
    str1: "Blue",
    str2: "White",
    str3: "Red"
}

france.str1
france["str2"]

// There are 2 ways of accessing date from an array, the first being the use of
// dot notation and the other beig the use of square brackets (NB: The quote marks
// in the square brackets are compulsory)

france.hasOwnProperty("str1")

// hasOwnProperty() is another way of searching for data inside an array.
// hasOwnProperty() returns a boolean (true or false) result depending on
// whether the property that is being searched for is in the object or not.


const nestObj = {
    prop1: "Yellow",
    prop2: "Green",
    prop3: {
        herb1: "basil",
        herb2: "parsely",
        herb3: "thyme"
    }
}

nestObj["prop3"]["herb1"]

// Accessing data from nested arrays simply requires the chaining on of
// the dot/square bracket notation until the desired proprty is accessed.


// Updating data in object literals
france.str1 = "Dark Blue"


// Delete property from an object

delete nestObj["prop3"]["herb1"]

// To delete a property in an object, the keyword delete is invoked before the 
// code for accessing the property within the object.