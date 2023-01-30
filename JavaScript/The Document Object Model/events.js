// Properties

const btn1 = document.querySelector("button")

btn1.onclick = function click() {
    const par1 = document.createElement('p')

const bold = document.createElement('b')

const heading = document.querySelector('h1')

bold.append("12:00")

heading.insertAdjacentElement("afterend", par1)

par1.append("Make sure to feed the dog at ", bold)
}

// The onclick property is used to listen for a click event on the target element
// It can be used inline in HTML, but is bad practice namely because it is bad
// semantics, it is only possible to bind on 1 of the "on" type of events and
// it requires that the function with inline event handlers be globally, of which
// not all functions will be global/globally accessible.

// There are other event handler properties, such as onmouseenter etc.
// Others can be found by looking through the target element's console.dir()
// and looking for properties starting with "on"


// The addEventListener() Method

const heading2 = document.body.appendChild(document.createElement('h2'))

heading2.append("Hover Mouse Over This Text To See Blue")

heading2.addEventListener("mouseenter", function() {
    heading2.style.color = "blue"
})
heading2.addEventListener("mouseleave", function() {
    heading2.style.color = "black"
})

// The addEventListener() method is a cleaner way of listening for events and it
// takes 2 parameters, namely the event and then the function that will be
// performed when the event occurs. There are multiple events that exist such
// as click, dbclick (double click), mouseenter etc.



// Events and Keyword "this"
const btn2 = document.querySelectorAll(".click")

const color1 = "lime"


    for (const btns of btn2) {
        btns.addEventListener("click", makeLime)
    }


    function makeLime() {
        this.style.backgroundColor = color1
    }


// In the event that there is some code which may be repetitive in terms of
// execution, the keyword "this" can be used to refering to an element which is
// being iterated over instead of the code which is being executed being
// duplicated in each element which will be making use of the same executable
// function.

// In the above example, the keyword "this" is in the executable function of
// makeLime() and will refer to the buttons which are being looped in the
// for...of loop.
// This can be repeated for other elements which will be using makeLime().



// Keyboard Events and the Event Object

window.addEventListener("keydown", function(evt) {
    if (evt.code === "ArrowUp") {
        console.log(evt.code)
        console.log("You pressed UP")
    }
})

// The event object contains all the possible events that are available and the
// information about an event. It is automatically passed into the function in
// an event listener and as a naming convention, is usually stored as e/evt/event

// This is useful when listening for keyboard events because unlike mouse events
// it is explicit as to what happened, but with keyboard events, it requires the
// knowledge of which key was pressd and this can be revealed with the event
// object.
// Keyboard events can be listened for on the window object.

// There are 2 properties that represent the keys that are clickd on the keyboard
// and they are "key" which is the actual key that was pressed (its the end result)
// and code which is the location of the key on the keyboard.


// Event Delegation

const btn3 = document.body.appendChild(document.createElement('button'))

btn3.innerText = "Create a Comment"

const newUl = document.body.appendChild(document.createElement('ul'))


btn3.addEventListener("click", function () {
    const comment = newUl.appendChild(document.createElement('li'))
    const username = document.createElement("b")
    username.innerText = "Username123"
    comment.append(username, " - Random comment from a user")
})


newUl.addEventListener("click", function(e) {
    e.target.nodeName === "LI" && e.target.remove()
})

// When attempting to impact elements that are nested inside another element, 
// and would not normally be accessible by listening for events on them, the
// event object can be used to target an element using the event object
// along with the nodeName property.
// The event will be listened for on the parent element and then the target
// element will be reached using the event object, the target and nodeName
// properties which will be equated to the node name of the element that is
// intended to be targeted.
// In the above case, the && operator will ensure that the statement on the right
// hand side only works of the boolean on the left is true



// Event Bubbling

const par = document.querySelector(".p")

const parBtn = document.querySelector(".btn-p")

par.addEventListener("click", function() {
    console.log("You clicked the paragraph")
})
parBtn.addEventListener("click", function(e) {
    console.log("You clicked the button in the paragraph")
    e.stopPropagation()
})





// Event bubbling occurs when a nested element with an event listener inside of
// a parent element with its very own event listener can trigger the event 
// listener on both the child and the parent element.

// In the event that this behaviour is not desired, the stopPropogation() method
// can help deal with this and it is chained onto the event object.