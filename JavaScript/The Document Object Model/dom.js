// Selecting Elements

// let idSelect = document.getElementById('idName')

// getElementById() selects an element with a matching name and returns
// an element object that represents the DOM object that matches the
// string passed into the parentheses.
// NB: this method is case sensitive and if the string passed into the
// parentheses does not match the name of the id being searched for, then
// JavaScript will return null.



// let classSelect = document.getElementByClassName('className')

// getElementByClassName selects a group of elements based on a matching
// class name and returns a HTML collection (which looks like an array
// and can be manipulated using array logic, but not array methods
// because it is NOT AN ACTUAL ARRAY).
// Similar to getElementById(), the elements that are returned are not
// the actual element, but rather the Document Object's representation
// of the element's that have been searched for by the method.



// let tagSelect = document.getElementByTagName('tagName')

// getElementByTagName, similar to getElementByClassName returns an
// HTML collection of matching element objects that represent the actual
// elements of the matching the tag name.



// let querySelect = document.querySelector('elementName')

// querySelector() is used to select the first matching element and return
// an element object that represents the matching element thta has been
// searched for.
// NB: Unlike the previous 3 methods for selecting HTML elements in
// JavaScript, querySelector() is not limited to any particular element
// and can select an element by id, tag or class name.



// let querySelectAll = document.querySelectorAll('elementName')

// querySelectorAll() is similar to querySelector() and it differs in
// that it can select multiple elements and returns a node list of
// elements that represent the matching HTML elements
// Elements are selected the same way as in CSS
// (ie: class = . and id = # before the name of the class or id, respectively)

// NB: A node list is similar to an HTML collection and it also is an
// array-like object, but is NOT AN ARRAY, even though it can be
// manipulated with some array logic, just not array methods.
// The difference between an HTML collection and a node list is that
// an HTML collection is live and any newly added elements will be
// added to the collection, whereas a node list is static and will
// not update the list if there are any new additions to the list.




// ACCESSING RELATIVE ELEMENTS

// The parentElement property is used to access the parent element of an
// element. If the element that does not have a parent element, then
// JavaScript will return null.
    // It is possible to chain on multiple parentElement properties until
    // the root element is reached.


// The children property is used to return an HTML collection of the child
// element nodes under a parent element. 
    // To get all the child nodes, including the non-element child nodes
    // like text and comment nodes, the node.childNodes property.
    // If the element does not have any children, then JavaScript will
    // return null.

    // The number of child elements can be attained by using the 
    // childElementCount property.

// The nextSibling and previousSibling properties are used to access
// either the next or the previous node sibling of an element
    // NB: Because these properties deal with the nodes of an element
    // they do account for the text that will normally be white space
    // if only an element is being searched for, as will be the case with
    // the nextElementSibling property.

// All the above properties are read-only.


// MANIPULATING ELEMENTS

// Texts

// inner texts

const h4 = document.querySelector("h4")
h4.innerText = "Shopping List"

const lis = document.querySelector("li")
lis.innerText = "Basil"

// The innerText property is used to manipulate the text inside of an
// element

const par1 = document.querySelector("p")
par1.textContent = "If basil is not found, then you should get parsely instead"

// The textContent does what innerText does, but differs in that it does
// take into account any other elements that may be descendents of the
// element it is called on and when a string is assigned to an element
// then any other elements that were present before will be replaced.
// With innerText, the elements are not affected by the string that is
// assigned

// innerHTML
const par2 = document.getElementById("emptyPar")

par2.innerHTML = `If <b>basil</b> is not found in the store, then
an alternative to it can be <b>oregano</b>`


// innerHTML is different to the previous two ways of manipulating text
// with JavaScript in that it can incorporate markup into the text
// as in the above example with the bold tag.


// Attributes

let aTag = document.getElementById("link")

aTag.setAttribute("href", "https://www.woolworths.co.za/cat/Food/Food-Cupboard/Herbs-Spices/_/N-1gg9uss")

// The setAttribute() method changes/adds an attribute and its value
// to an element.


// STYLES

h4.style.fontSize = "1.5rem"

// To style elements via JavaScript, the "style" property is used and
// along with it the desired style is chained onto it and then is
// assigned to a string that will be the computed style.


aTag.style.cssText = `
    color: red;
    text-decoration: none;
`
// Another way of adding css styles to an element in JavaScript is with
// the use of the cssText property, although this may be overwriting and
// would rather be done in CSS instead because it for the most part
// achieves the same goal with nearly the same amount of markup.
// However, if there is some other JavaScript code that is going to
// work in conjuction with that, then it would be helpful in that it
// can achieve multiple styles at once, whilst avoiding having to
// rerender the same element more than once.



console.log(window.getComputedStyle(h4).fontSize)

// If you want to access the style that has been computed onto an element
// via JavaScript, the getComputedStyle() method can be used to determine
// what style was computed onto an element using JavaScript.
// The method HAS TO be chained onto the window object and then inside
// the method, the element is the first parameter and the second is any
// pseudo elements.
// To find the value of the style that has been implemented, the name of
// the css property in question is chained onto the method.

// If the css property is not chained onto the method, then what happens
// is that the CSSStyleDeclarartion property will show up and it has all
// the possible style taht can be used and also show the value of the
// computed style when the property in question is found.



// ClassList

let list = document.querySelectorAll("li")

for (const items of list) {
    items.classList.add("blue-text")
}

// The classList property is used for giving elements access to a class
// and uses the add() method to add a class to an element.
// It also allows for the removal of a class with the remove() method and
// also the ability to toggle with the toggle() property.
// there is also the replace() method which replaces a class on an
// element.
// setAttribute() can also be used with classList.


// CREATING NEW ELEMENTS

const newImg = document.body.appendChild(document.createElement('img'))

newImg.setAttribute("src", "https://www.vieravet.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=XLNixtug")


// The appendChild() method returns a new node to the end of the list of
// child nodes of a specified parent node, but it requires the use of
// the createElement() method in order for the element itself to be
// created, with a string containing the name of the element that is
// intended to be created.
// In the parentheses of appendChild(), the child node is passed in.

// If the new element requires the use of an attribute, as in the above
// with the src attribute for an image, that can be set after the fact
// by chaining it onto the identifier of the new element.
// If the element requires text, then the inner HTML/Text or textContent
// properties can be used.

// NB: A node can't be in 2 places at once, therefore if there is a node
// which is being refered to in appendChild(), then it will move it from
// its inital position to the new position which the method sets it to.
// Instead of using appendChild(), the cloneChild() method can be used
// to clone a child node instead, because it will not keep the copy in
// sync with the first child node.


const newH2 = document.body.appendChild(document.createElement('h2'))

newH2.append("Above, is an image of a golden retriever")

// The append() method is used to do the same thing as appendChild(), but
// the differences with append() is that it does not add the node to the
// end of the element, it can add more than one node/element at
// once and it can also append string nodes as seen above, whereas
// appendChild() can only append node objects.
// Also, the append() method does not have a return value

const par3 = document.createElement('p')

const bold = document.createElement('b')

const body = document.querySelector('body')

bold.append("12:00")

body.append(par3)

par3.append("Make sure to feed the dog at ", bold)

// The above is an example of the append() method taking multiple nodes
// in the parentheses.


// Other methods that can be used to create new elements include the:
// prepend() method, which can be seen as the opposite of appendChild()
// in that it adds newly created elements to the beginning of the target
// element.
    // The prepend() method shares similarities with append() in that it 
    // can also add multiple nodes and can add string values and does not
    // have a return value.

// The insertAdjacentElement() element allows for the insertion of
// elements between elements. It takes 2 parameters, namely the position
// of the element and then the element itself (passed in as a string).
// There are a few positions that an element can take, namely:
    // beforebegin: Comes before target element
    // afterbegin: After target element, but before target element child
    // beforeend: After target element child but before target element.
    // afterend: Comes after the target element

    

// It is possible to remove an element with the use of remove() and
// removeChild() and they are the opposite of append() and appendChild()
// respectively.