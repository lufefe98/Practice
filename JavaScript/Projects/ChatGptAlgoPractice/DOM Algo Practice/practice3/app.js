// Select elements

const container = document.getElementById('cards-container')
const cards = Array.from(document.querySelectorAll('.card'))

const priceBtn = document.getElementById('price-sort')
const nameBtn = document.getElementById('name-sort')

console.log(cards)

// Functions

function sortByPrice() {
    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent)
        const priceB = parseFloat(b.querySelector('.price').textContent)

        return priceB - priceA
    })


    cards.forEach(card => {
        container.appendChild(card)
    });
}




function sortByName() {
    cards.sort((a, b) => {
        const nameA = a.querySelector('.prod-name').textContent
        const nameB = b.querySelector('.prod-name').textContent

        return nameB.localeCompare(nameA)
    })


    cards.forEach(card => {
        container.appendChild(card)
    });
}




// Event Listeners

priceBtn.addEventListener('click', sortByPrice)

nameBtn.addEventListener('click', sortByName)