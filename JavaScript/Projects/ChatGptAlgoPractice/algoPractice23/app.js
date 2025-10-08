// Select Elements

const categoryFilter = document.querySelector('#category-filter')
const searchFilter = document.querySelector('#search-filter')
const priceFilter = document.querySelector('#price-filter')
const cards = Array.from(document.querySelectorAll('.card'))

// Event Listener

categoryFilter.addEventListener('change', () => {

    // Filter by category

    cards.forEach(card => {
        if (categoryFilter.value !== card.getAttribute('data-category')) {
            card.classList.add('hidden')
            console.log('it works')
        } else if (categoryFilter.value === card.getAttribute('data-category')) {
            card.classList.remove('hidden')
        }
    })


    // Handle the 'ALL' case
})



priceFilter.addEventListener('change', () => {

    // Filter by price

    cards.forEach(card => {
        const price = parseFloat(card.querySelector('.product-price').textContent.replace(/[^0-9.]/g, ""))
        const filteredPrice = parseFloat(priceFilter.value)
        if (filteredPrice < price) {
            card.classList.add('hidden')
            console.log('it works too')
        } else {
            card.classList.remove('hidden')
        }

        // Edge Case

        if (!priceFilter.value) {
            card.classList.remove('hidden');
            return;
        }
    })
})


searchFilter.addEventListener('input', () => {

    // Filter by product name
  const filteredProductName = searchFilter.value.toLowerCase()

  const cardData = cards.map(card => ({
    card,
    productName: card.querySelector('.product-name').textContent.toLowerCase()
  }))

  cardData.forEach(item => {
    if (!item.productName.includes(filteredProductName)) {
      item.card.classList.add('hidden')
    } else {
      item.card.classList.remove('hidden')
    }
  })
})

