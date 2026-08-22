
// DOM Elements

const cardContainer = document.getElementById('cards-container')
const cards = Array.from(document.querySelectorAll('.card'))
// Saved the cards in the form of an array because the node list
// does not have access to the sort() and forEach() methods which
// will be used to sort the cards in ascending numerical and
// alphabetical order and then to append the sorted cards. 

const priceBtn = document.getElementById('price-sort')
const nameBtn = document.getElementById('name-sort')





// Functions

function sortByPrice() {

    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent)
        const priceB = parseFloat(b.querySelector('.price').textContent)
        // the prices are extracted from the cards and parseFloat is used
        // to make sure the numbers are sorted in ascending numerical order
        // before they are used to compare each other and sort the cards
        // in numerical order.

        return priceA - priceB
    })

    cards.forEach(card => {
        cardContainer.appendChild(card)
    });
    // Append the cards in the container in the sorted order

    // Personal note:
    // We don't get any duplicates of the cards because each card
    // has its own individual reference, so they cannot be added to the
    // container again.
}


function sortByName() {

    cards.sort((a, b) => {
        const nameA = a.querySelector('.prod-name').textContent
        const nameB = b.querySelector('.prod-name').textContent
        // Get the names from the cards in order to compare the
        // text.

        return nameA.localeCompare(nameB)
        // Use localeCompare to compare the text between the cards.
    })

    cards.forEach(card => {
        cardContainer.appendChild(card)
    });
}





// Event Listners

priceBtn.addEventListener('click', sortByPrice)

nameBtn.addEventListener('click', sortByName)