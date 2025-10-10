// Select Elements

const categoryFilter = document.querySelector('#category-filter')
const searchFilter = document.querySelector('#search-filter')
const priceFilter = document.querySelector('#price-filter')
const cards = Array.from(document.querySelectorAll('.card'))


// Handler function

function applyFilter() {
    const filteredCategory = categoryFilter.value;
    const filteredPrice = parseFloat(priceFilter.value);
    const filteredProductName = searchFilter.value.toLowerCase();

    if (!filteredCategory && isNaN(filteredPrice) && !filteredProductName) {
    cards.forEach(card => card.classList.remove('hidden'));
    return;
}

    cards.forEach(card => {
        // 

        const cardCategory = card.getAttribute('data-category')
        const cardPrice = parseFloat(card.querySelector('.product-price').textContent.replace(/[^0-9.]/g, ""))
        const cardName = card.querySelector('.product-name').textContent.toLowerCase()


        let isVisible = true


        // Filtered category

        if (filteredCategory && filteredCategory !== cardCategory) {
            isVisible = false
        }

        // Filtered price

        if (filteredPrice && cardPrice > filteredPrice) {
            isVisible = false
        }

        // Filtered Name

        if (filteredProductName && !cardName.includes(filteredProductName)) {
            isVisible = false
        }

        card.classList.toggle('hidden', !isVisible)
    });
}



// Event Listeners

categoryFilter.addEventListener('change', applyFilter)



priceFilter.addEventListener('change', applyFilter)



searchFilter.addEventListener('input', applyFilter)

