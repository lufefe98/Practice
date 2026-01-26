// Select Elements

const cards = Array.from(document.querySelectorAll('.card'))
const container = document.getElementById('cards-container')
const noMatchText = document.getElementById('no-match-text')

const searchInput = document.getElementById('text')
const minRange = document.getElementById('fromSlider')
const maxRange = document.getElementById('toSlider')

// const sortMenu = document.querySelector('#sort-menu')






// Functions 

function filterProducts() {
    // Input Values
    const searchValue = searchInput.value.toLowerCase().trim()
    const minPrice = Number(minRange.value)
    const maxPrice = Number(maxRange.value)


    // Matching Checks

    let hasMatch = false

    cards.forEach(card => {
        // Card Values
        const productName = card.querySelector('.prod-name').textContent
        const productPrice = Number(card.querySelector('.price').textContent)

        // Filter Booleans
        const priceMatch = productPrice >= minPrice && productPrice <= maxPrice
        const searchMatch = searchValue === '' || productName.includes(searchValue)
        

        // Filter Products
        if (searchMatch && priceMatch) {
            card.style.display = ''
            hasMatch = true
        } else {
            card.style.display = 'none'
        }
    });

    noMatchText.style.display = hasMatch ? 'none' : 'block'
}


// function sortProducts() {

// }



// Event Listeners

searchInput.addEventListener('input', filterProducts)

minRange.addEventListener('input', filterProducts)
maxRange.addEventListener('input', filterProducts)



