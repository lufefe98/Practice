// Select Elements

const cards = Array.from(document.querySelectorAll('.card'))
const container = document.getElementById('cards-container')
const noMatchText = document.getElementById('no-match-text')

const searchInput = document.getElementById('text')
const minRange = document.getElementById('fromSlider')
const maxRange = document.getElementById('toSlider')




// Functions

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase().trim()
    // Used the 


    // Price Filters
    const minPrice = Number(minRange.value)
    const maxPrice = Number(maxRange.value)

    // Match Boolean
    let hasMatch = false

    cards.forEach(card => {
        // Product Details
        const productName = card.querySelector('.prod-name').textContent.toLowerCase()
        const productPrice = Number(card.querySelector('.price').textContent)

        // Product Filter Conditions
        const searchMatch =
            searchValue === '' || productName.includes(searchValue)

        const priceMatch =
            productPrice >= minPrice && productPrice <= maxPrice

        // Filter Products
        if (searchMatch && priceMatch) {
            // If the price and name of the cards match the user's
            // search and falls in the price range which they 
            // set, then display the card which matches the search
            // and price range and set hasMatch to true, which keeps
            // the error text hidden
            card.style.display = ''
            hasMatch = true
        } else {
            card.style.display = 'none'
            // If the search fails and the product is not in the price
            // range set by the user, then hide the card
        }
    })


    // Edge case
    noMatchText.style.display = hasMatch ? 'none' : 'block'

    // The conditional text for unsuccessful searches is displayed
    // when there is no match, but this is done outside of the
    // forEach loop in order to prevent it from executing the else
    // block if it happens that there is a particular card which 
    // does not match the searched word.
}





// Event Listeners

searchInput.addEventListener('input', filterProducts)

minRange.addEventListener('input', filterProducts)
maxRange.addEventListener('input', filterProducts)