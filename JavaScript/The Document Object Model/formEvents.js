// Form

const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    console.log("Form submitted")
    e.preventDefault()
})






//  When the data from a form is submitted it goes to wherever the action
// attribute sends it to (in this case, it is /learnjs).
// After a browser sends the data which was submitted, the entire page moves
// to the location in the action attribute.

// In the case where it is not intended to move to a new page, but rather stay in
// the current page to prevent losing the data on the current page, then the
//  preventDefault() method can help

// This could be helpful when there is an input and the data that is put in does
// not meet a criteria for either the user or the browser or if the submit is 
// then it could stop stop the browser from moving to a new page.


// The preventDefault() method can be used for other events, but is most commonly
// used for form events.