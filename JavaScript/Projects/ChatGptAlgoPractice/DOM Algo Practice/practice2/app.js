
// DOM Elements

const cardContainer = document.getElementById('cards-container')
const cards = Array.from(document.querySelectorAll('.card'))

const priceBtn = document.getElementById('price-sort')
const nameBtn = document.getElementById('name-sort')





// Functions

function sortByPrice() {

    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent)
        const priceB = parseFloat(b.querySelector('.price').textContent)

        return priceA - priceB
    })

    cards.forEach(card => {
        cardContainer.appendChild(card)
    });
}


function sortByName() {

    cards.sort((a, b) => {
        const nameA = a.querySelector('.prod-name').textContent
        const nameB = b.querySelector('.prod-name').textContent

        return nameA.localeCompare(nameB)
    })

    cards.forEach(card => {
        cardContainer.appendChild(card)
    });
}





// Event Listners

priceBtn.addEventListener('click', sortByPrice)

nameBtn.addEventListener('click', sortByName)