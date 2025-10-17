// Select Elements

const minPriceInput = document.querySelector('#min-price')
const maxPriceInput = document.querySelector('#max-price')
const productList = document.querySelector('.productList')
const filterBtn = document.querySelector('#filter-btn')
const resetBtn = document.querySelector('#reset-btn')
const cards = Array.from(document.querySelectorAll('.card'))







// Function

function applyMinMax() {

    // Select values
    const minPrice = parseFloat(minPriceInput.value)
    const maxPrice = parseFloat(maxPriceInput.value)


    // Filter 
    cards.forEach(card => {
        let isVisible = true
        const cardPrice = parseFloat(card.getAttribute('data-price'))
        
        if (!minPrice && !maxPrice) {
            isVisible = true;
        } else {
            if ((minPrice && cardPrice < minPrice) || (maxPrice && cardPrice > maxPrice)) {
                isVisible = false;
            }
        }
        
        card.classList.toggle('hidden', !isVisible)
    })
}

function resetFilter() {

    // Clear inputs
    minPriceInput.value = ''
    maxPriceInput.value = ''

    // Restore cards
    cards.forEach(card => { card.classList.remove('hidden')})
}



filterBtn.addEventListener('click', applyMinMax)
resetBtn.addEventListener('click', resetFilter)
