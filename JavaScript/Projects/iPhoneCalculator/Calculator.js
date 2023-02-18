// DOM ELEMENTS
const display = document.querySelector('[data-display]')

// operations
const equals = document.querySelector('[data-operation-equals]')
const addition = document.querySelector('[data-operation-addition]')
const subtraction = document.querySelector('[data-operation-subtract]')
const division = document.querySelector('[data-operation-divide]')
const multiplication = document.querySelector('[data-operation-multiply]')

// functions
const plusMin = document.querySelector('[data-func-plus-min]')
const percent = document.querySelector('[data-func-percent]')
const clear = document.querySelector('[data-func-clear]')

// numbers
const period = document.querySelector('[data-number-period]')
const zero = document.querySelector('[data-number-0]')
const one = document.querySelector('[data-number-1]')
const two = document.querySelector('[data-number-2]')
const three = document.querySelector('[data-number-3]')
const four = document.querySelector('[data-number-4]')
const five = document.querySelector('[data-number-5]')
const six = document.querySelector('[data-number-6]')
const seven = document.querySelector('[data-number-7]')
const eight = document.querySelector('[data-number-8]')
const nine = document.querySelector('[data-number-9]')





// STORE NUMBERS

const allNumbers = [
    zero, one, two, three, four,
    five, six, seven, eight, nine
]
// The number buttons are stored in array so they can be looped over since they will be the most
// repetitive buttons in terms of logic relative to all the other buttons.





// VARIABLES

let valueStrInMemory = null
let operatorInMemory = null
// These varialbes are going to be used to store the numerical values and the mathematical
// operators and have been stored using "let" in order to allow for future updating whenever
// a new mathematical operation is to be performed.
// They are initally set to null because there is no numerical value/operator and it would
// otherwise compromise the mathematical operation that is to be performed.





// FUNCTIONS

// Getters
const getDisplayStrValue = function () {
    return display.textContent.split(',').join('')

}
// The function expression getDisplayStrValue() is going to take whatever is in the display
// and return that value so it can be used later on whenever the value that is going to be
// put on the display needs to be manipulated (in string form, which is how the numbers are
// displayed).

// The split() method takes the numerical string on the display div and then removes
// the commas between the numbers and then joins them with the join() method and returns
// the numbers together as a string so we can work with the numerical value
// The two methods of split and join prevents the .toLocaleString from limiting the number
// to only 4 digits because the commas were preventing the numbers from being recognized
// as numbers by parseFloat().





const getDisplayNumValue = function () {
    return parseFloat(getDisplayStrValue())
}
// The above function obtains the numerical value of the string value that is on the display 
// of the calculator by parseFloating the string value that is displayed.
// This will make it easier to do mathematical functions without having to deal with the
// trouble of how JavaScript treats numbers in strings (ie: simply tacking them next to 
// the number that was already there) and this also removes the extra work of having to
// use parseFloat() on every occasion when the numerical value needs to be obtained.





const getResultAsStr = function () {
    const valueNumInMemory = parseFloat(valueStrInMemory)
    const currDisplayNum = getDisplayNumValue()
    let newValueNum
    // The variable of newValueNum is going to be the new value which is obtained each time a
    // mathematical operation is performed.
    // It is declared but not initialized to anything YET.

    if (operatorInMemory === 'addition') {
        newValueNum = valueNumInMemory + currDisplayNum
    } else if (operatorInMemory === 'subtraction') {
        newValueNum = valueNumInMemory - currDisplayNum
    } else if (operatorInMemory === 'multiplication') {
        newValueNum = valueNumInMemory * currDisplayNum
    } else if (operatorInMemory === 'division') {
        newValueNum = valueNumInMemory / currDisplayNum
    }

    return newValueNum.toString()
}
// The numerical value that will be stored in memory is the paresefloated valueStrInMemory (this is done
// because in the handleOperators() function where the logic for all mathematical operator buttons event handlers is
// done, the valueStrInMemory is assigned to the string value that is currently displayed).
// The numerical value of what is currently being displayed is assigned to the getDisplayNumValue() function
// expression.
// In the if...else blocks, for each respective operator, the newValueNum is assigned to the valueNumInMemory 
// variable and the operation with the numerical value of whatever is currently displayed in the calculator.
// The value that is returned is the newValueNume in its string form which allows for it to eventually be displayed.





// Setters

const setDisplayStrAsValue = function (displayStrValue) {
    if (displayStrValue[displayStrValue.length - 1] === '.') {
        display.textContent += '.'
        return;
    }

    if (displayStrValue.length > 6) {
        display.style.fontSize = '4rem'
    } 
    if (displayStrValue.length >= 7) {
        display.style.fontSize = '3.5rem'
    } 
    if (displayStrValue.length >= 8) {
        display.style.fontSize = '3rem'
    }
    if (displayStrValue.length <= 6) {
        display.style.fontSize = '4.5rem'
    }
    // The above will adjust the font size of the numbers that are entered
    // on the display of the calculator by reducing the font size by 0.5rem
    // from the 6th digit onwards, but otherwise if the number of digits on the
    // display is equal to or less than 6 digits, then the font size will be the
    // same as what was computed on the CSS file.

    const [wholeNumStr, decimalNumStr] = displayStrValue.split('.')

    if (decimalNumStr) {
        display.textContent = parseFloat(wholeNumStr).toLocaleString() + '.' + decimalNumStr
    } else {
        display.textContent = parseFloat(wholeNumStr).toLocaleString()
    }
    // toLocaleString() will add a comma whenever a number gets into the thousands (ie: a number 
    // will not have more than three digits per comma).

    if (displayStrValue.length >= 10) {
        display.textContent = parseFloat(displayStrValue.substring(0, 9)).toLocaleString()
    }
}

// The above function is what will be used to set the values in the display of the calculator.

// In the first if block, if the last character of the value string that is going into the display
// is a period, then the text content of the display should add a period to reflect that.

// The number that will be shown in the display will have a whole number and the numbers after the 
// the decimal point (which is the period), however if it is just saved as a single value, the
// toLocaleString() will prevent it from having more than 3 numbers after the decimal, thereforer
// the whole number and the decimal numbers are destructured and assigned to the value that will be
// set as the display value. 
// The number before and after the decimal are split if there is a decimal point.
// In the if block, so long as there is a number after the decimal point, then the value in the
// display of the calculator is goint to be set to the whole number string, the decimal point and
// then the number after the decimal point.
// This will prevent the toLocaleString from limiting the numbers after the decimal to 3 characters
// Otherwise, as specified in the else block, the value in the display should simply be the whole
// number as normal.





// For handlers

function handleClick(strNum) {
    const currDisplayStr = getDisplayStrValue()
    if (currDisplayStr === '0') {
        setDisplayStrAsValue(strNum)
        display.textContent = strNum
    } else {
        setDisplayStrAsValue(currDisplayStr + strNum)
    }
}

// The above function of handleClick() is what will be used to determine what happens when
// a number button is clicked. It will be passed into the event handlers below.
// It takes a parameter of strNum, which is a string version of a number, which makes it easier
// to update the display instead of using actual numbers.

// Inside the function, the current display is assigned to the function of getDisplayStrValue(), which
// converts numerical values to strings.

// In the if conditional, if the currDisplayStr is equal to zero (which is the defalut value for
// the display), then in the body of the conditional, the setDisplayStrAsValue() function should take
// the argument of strNum (ie: whatever is passed into the display by clicking on the buttons) and the 
// textContent of the display should be the strNum, which is the argument of the setDisplayStrAsValue()
// function, this allows the display to replace the default of "0" when a new number is entered, which 
// is the same functionality as in the iPhone.

// In the Else block, the setDisplayStrAsValue() is going to be the currDisplayStr and whatever new
// number is added afterward (ie: strNum), which allows for chaining numbers along instead of them being separate
// text, since they are being entered as strings.





const handleOperators = function (operantion) {
    const currDisplayStr = getDisplayStrValue()
    if (!valueStrInMemory) {
        valueStrInMemory = currDisplayStr
        operatorInMemory = operantion
        setDisplayStrAsValue('0')
        return
    }

    valueStrInMemory = getDisplayStrValue()
    operatorInMemory = operantion
    setDisplayStrAsValue('0')
}
// The above function handles the functionality of the mathematical operators whenever they are clicked.
// It starts off by assigning the value that will be currently displayed on the calculator to the
// getDisplayStrValue() function.
// in the if conditional, if the value that is stored in memory is not present, then it should be assigned
// to the what is currently displayed and the operator in memory should be assigned to the operation that is
// passed in and the display value should be set as "0" to start off.





// For Display






// EVENT LISTENERS

// For Numbers and Decimal
for (let i = 0; i < allNumbers.length; i++) {
    const nthNum = allNumbers[i]

    nthNum.addEventListener('click', function () {
        handleClick(i.toString())
        clear.textContent = 'C'
    })  
}
// The for...loop is used to select all the number buttons and loop through all of
// them so as to prevent having to duplicate event handlers for when the buttons are
// clicked.

// The nthNum variable is how the numbers are going to be extracted from the array that
// they have been stored inside by using the variable "i" which will get updated each time
// a button is clicked and therfore extracts the index of the button that is clicked 
// (ie: "i" will be used to get the current iteration index).

// The event handler will run the handleClick() function with the stringified version of the "i"
// variable as an argument.

// The text content of the 'clear' function's button is set to 'C' to match what happens on the
// iPhone when a user adds a new input.





period.addEventListener('click', function () {
    const currDisplayStr = getDisplayStrValue()
    if (!currDisplayStr.includes('.')) {
        setDisplayStrAsValue(currDisplayStr + '.')
    }
    clear.textContent = 'C'
})
// For the decomial, whenever it is clicked, if the display string does NOT include a period "."
// then the display string should add a period to whatever is on the current display
// This was done so that the period does not replace the defalut display of "0"

// The text content of the 'clear' function's button is set to 'C' to match what happens on the
// iPhone when a user adds a new input (ie: a number or a decimal point).





// For Operators
addition.addEventListener('click', function () {
    handleOperators('addition')
})
subtraction.addEventListener('click', function () {
    handleOperators('subtraction')
})
multiplication.addEventListener('click', function () {
    handleOperators('multiplication')
})
division.addEventListener('click', function () {
    handleOperators('division')
})
// All the above operators, when clicked should perform the handleOperators() function expression in respect
// to the relevant operator that it is being clicked.





equals.addEventListener('click', function () {
    if (valueStrInMemory) {
        setDisplayStrAsValue(getResultAsStr())
        valueStrInMemory = null
        operatorInMemory = null
    }
    clear.textContent = 'AC'
})
// The equals sign is a special case from the other operators and therefore has its own special logic, separate
// from the other mathematical operations.
// In order for the equals sign to work as expected, if there is a value stored in memory, it should set the value
// that is to be displayed to whatever result the getResultAsStr() function expression produces.
// Once the entire mathematical operation has been performed, then the value and the operator that is stored in
// memory is reset to null.

// The text content of the 'clear' function's button is set back to 'AC' to match what happens on the
// iPhone when a mathematical operation has been completed.







// For Functions
clear.addEventListener('click', function () {
    setDisplayStrAsValue('0')
    valueStrInMemory = null
    operatorInMemory = null
    clear.textContent = 'AC'
})
// The clearing function of the calculator, if clicked, should reset the display to 0
// and set the operator and the string that is stored in memory to null.

// The text content of the 'clear' function's button is set back to 'AC' to match what happens on the
// iPhone when the 'clear' button has been clicked.






plusMin.addEventListener('click', function () {
    const currDisplayNum = getDisplayNumValue()
    const currDisplayStr = getDisplayStrValue()

    if (currDisplayStr === '-0') {
        setDisplayStrAsValue('0')
        return
    }

    if (currDisplayNum >= 0) {
        setDisplayStrAsValue('-' + currDisplayStr)
    } else {
        setDisplayStrAsValue(currDisplayStr.substring(1))
    }
})
// The plus-minus function should, if clicked, change a negative number to a positive
// number and vice versa in the case of a positive number.
// This is done by saving the functions that obtain numerical and string value of the
// number in the display to a varaible of currDisplayNum and currDisplayStr, respectively
// and then if the string is "-0", then the display should remove the hyphen which
// represents the subtraction symbol. This allows for the use of the plus-minus function
// to work with the defalut value.

// Thereafter, if the numerical value that is displayed on the calculator is equal to or
// greater than 0 (ie: positive value), then in the string value that is on display, the
// string value should be set to a hyphen plus the number that is currently on display.
// Otherwise, as specified in the else block, if the numerical value that is on display
// is not greater than or equal to 0, then the display value should be set to the current
// display value, but it should only consider the values after the hyphen (which would be
// indexed to 0) with the use of the substring() method.





percent.addEventListener('click', function () {
    const currDisplayNum = getDisplayNumValue()
    const newDisplayNum = currDisplayNum / 100

    setDisplayStrAsValue(newDisplayNum.toString())

    valueStrInMemory = null
    operatorInMemory = null
})
// The percentage function of the calculator, if clicked, should take the number that is
// currently displayed on the calculator and divide it by 100 to get the percentage value
// of the number.
// But for this to work, the numerical value will be from the getDisplayNumValue() function 
// which is assigned to currDisplayNum
// The value that will be displayed on the calculator takes currDisplayNum (the numerical value)
// and then divides it by 100 to get the percentage value and is then assigned to the variable
// of newDisplayNum.
// In order to display the value, the result of newDisplayNum is turned into a string using
// the .toString method.

// The operator and the string that is stored in memory is set to null.





// KEYBOARD EVENTS

// For Numbers
window.addEventListener("keydown", function (evt) {
    if (evt.code === "NumpadDecimal" || evt.code === "Period") {
        currDisplayStr = getDisplayStrValue()
        if (!currDisplayStr.includes('.')) {
            setDisplayStrAsValue(currDisplayStr + '.')
        }
    } else if (evt.code === "Numpad0" || evt.code === "Digit0") {
        handleClick(zero.textContent)
    } else if (evt.code === "Numpad1" || evt.code === "Digit1") {
        handleClick(one.textContent)
    } else if (evt.code === "Numpad2" || evt.code === "Digit2") {
        handleClick(two.textContent)
    } else if (evt.code === "Numpad3" || evt.code === "Digit3") {
        handleClick(three.textContent)
    } else if (evt.code === "Numpad4" || evt.code === "Digit4") {
        handleClick(four.textContent)
    } else if (evt.code === "Numpad5" || evt.code === "Digit5") {
        handleClick(five.textContent)
    } else if (evt.code === "Numpad6" || evt.code === "Digit6") {
        handleClick(six.textContent)
    } else if (evt.code === "Numpad7" || evt.code === "Digit7") {
        handleClick(seven.textContent)
    } else if (evt.code === "Numpad8" || evt.code === "Digit8") {
        handleClick(eight.textContent)
    } else if (evt.code === "Numpad9" || evt.code === "Digit9") {
        handleClick(nine.textContent)
    }
    clear.textContent = 'C'
})
// The above event listeners use the evt object from the window object in order
// to listen for any events that occur on the keyboard, and in this case, the
// events that are being listened for are for numbers.

// Thereafter, the if...else statements check for which buttons are being
// pressed and if the condition is true, then the handlClick() function expression
// will add the corresponding number for the button to the text content of
// the display.

// In the case of the decimal, the code for the button click was duplicated
// in its if statement.





// For Operators
window.addEventListener("keydown", function (evt) {
    if (evt.code === "NumpadAdd") {
        handleOperators('addition')
    } else if (evt.code === "NumpadSubtract" || evt.code === "Minus") {
        handleOperators('subtraction')
    } else if (evt.code === "NumpadDivide" || evt.code === "Slash") {
        handleOperators('division')
    } else if (evt.code === "NumpadMultiply") {
        handleOperators('multiplication')
    } if (evt.code === "NumpadEnter" || evt.code === "Enter" || evt.code === "Equal") {
        if (valueStrInMemory) {
            setDisplayStrAsValue(getResultAsStr())
            valueStrInMemory = null
            operatorInMemory = null
        }
        clear.textContent = 'AC'
    }
})

// The event listeners for the operators on the keyboard take the handleOperators
// function expression and use it in the same way as their corresponding button click
// event listeners.