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


    cards.forEach(card => {
        const productName = card.querySelector('.prod-name').textContent

        if (productName.includes(searchVaue)) {
            card.style.display = ''
            hasMatch = true
        } else {
            card.style.display = 'none'
        }

    });

    noMatchText.style.display = hasMatch ? 'none' : 'block'
}


// function getRangeValue(event) {

// Prevent min slider from passing max slider

// }




// // Event Listeners

searchInput.addEventListener('input', getSearchValue)

// rangeInput.addEventListener('input', getRangeValue)