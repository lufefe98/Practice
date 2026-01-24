// Select Elements

const cards = Array.from(document.querySelectorAll('.card'))
const container = document.getElementById('cards-container')
const noMatchText = document.getElementById('no-match-text')

const searchInput = document.getElementById('text')
const rangeInput = document.getElementById('range-slider')



// Functions

function getSearchValue(event) {
    const searchVaue = event.target.value.toLowerCase().trim()
    let hasMatch = false
    // hasMatch is be used to check if there is a match from the
    // search and used to display conditional content depending
    // on what the search yields.
    // Initially, it is set to 'false' so all the products are going
    // to be displayed without conditional text for a failed search
    // being displayed as well.


    cards.forEach(card => {
        const productName = card.querySelector('.prod-name').textContent

        if (productName.includes(searchVaue)) {
            card.style.display = ''
            hasMatch = true
            // If the search does bring up a successful search, then
            // hasMatch is set to true.
            // We also display all the cards which have product names
            // that match what is in the search.
        } else {
            card.style.display = 'none'
        }

    });

    noMatchText.style.display = hasMatch ? 'none' : 'block'
    // The conditional text for unsuccessful searches is displayed
    // when there is no match, but this is done outside of the
    // forEach loop in order to prevent it from executing the else
    // block if it happens that there is a particular card which 
    // does not match the searched word.
}


// function getRangeValue(event) {

// Prevent min slider from passing max slider

// }




// // Event Listeners

searchInput.addEventListener('input', getSearchValue)

// rangeInput.addEventListener('input', getRangeValue)