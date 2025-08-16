// Select elements

const buttonContainer = document.getElementById('button-container')
const buttons = document.querySelectorAll('button')


// Function

const buttonsArray = [...buttons]

const reverseButtons = buttonsArray.reverse()

reverseButtons.forEach(reverseButton => {
    buttonContainer.appendChild(reverseButton)
});