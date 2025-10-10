// Select elements

const genreFilter = document.querySelector('#genre-filter')
const ratingFilter = document.querySelector('#rating-filter')
const searchTitleFilter = document.querySelector('#search-filter')
const cards = Array.from(document.querySelectorAll('.card'))


function applyFilter() {
    const filteredGenre = genreFilter.value
    const filteredRating = parseFloat(ratingFilter.value)
    const filteredTitleSearch = searchTitleFilter.value.toLowerCase()

    if (!filteredGenre && isNaN(filteredRating) && !filteredTitleSearch) {
        cards.forEach(card => card.classList.remove('hidden'));
        return;
    }

    
    cards.forEach(card => {
        // select card data
        
        const cardGenre = card.getAttribute('data-genre')
        const cardRating = parseFloat(card.querySelector('.movie-rating').textContent.replace(/[^0-9.]/g, ""))
        const cardTitle = card.querySelector('.movie-title').textContent.toLowerCase()

        let isVisible = true

        // Filtered Movie Genre

        if (filteredGenre && filteredGenre !== cardGenre) {
            isVisible = false
        }

        // Filtered Movie Rating

        if (filteredRating && filteredRating < cardRating) {
            isVisible = false
        }

        // Filterd Movie Title

        if (filteredTitleSearch && filteredTitleSearch !== cardTitle) {
            isVisible = false
        }


        card.classList.toggle('hidden', !isVisible)
    });
}


// Event Listeners

genreFilter.addEventListener('change', applyFilter)

ratingFilter.addEventListener('change', applyFilter)

searchTitleFilter.addEventListener('input', applyFilter)