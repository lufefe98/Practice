// Select Elements

const cards = Array.from(document.querySelectorAll('.card'))
const container = document.getElementById('cards-container')
const noMatchText = document.getElementById('no-match-text')

const searchInput = document.getElementById('text')
const minRange = document.getElementById('fromSlider')
const maxRange = document.getElementById('toSlider')




// Functions

function filterProducts(event) {
    const searchVaue = event.target.value.toLowerCase().trim()
    let hasMatch = false
    // hasMatch is be used to check if there is a match from the
    // search and used to display conditional content depending
    // on what the search yields.
    // Initially, it is set to 'false' so all the products are going
    // to be displayed without conditional text for a failed search
    // being displayed as well.


    cards.forEach(card => {
        // Product Details
        const productName = card.querySelector('.prod-name').textContent
        const productPrice = parseFloat(card.querySelector('.price').textContent)


        // Price Filters
        const minPrice = minRange.value
        const maxPrice = maxRange.value




        // Filter Products by Name and Price

        if (productName.includes(searchVaue) && productPrice >= minPrice && productPrice <= maxPrice) {
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