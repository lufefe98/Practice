// Select elements

const genreFilter = document.querySelector('#genre-filter')
const ratingFilter = document.querySelector('#rating-filter')
const searchTitleFilter = document.querySelector('#search-filter')
const noResult = document.querySelector('#no-results')
const cards = Array.from(document.querySelectorAll('.card'))


function applyFilter() {
    const filteredGenre = genreFilter.value
    const filteredRating = parseFloat(ratingFilter.value)
    const filteredTitleSearch = searchTitleFilter.value.toLowerCase()

    // No filter edge case

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

        if (!isNaN(filteredRating) && cardRating > filteredRating) {
            isVisible = false
        }

        // Filterd Movie Title

        if (filteredTitleSearch && !cardTitle.includes(filteredTitleSearch)) {
            isVisible = false
        }


        // No results edge case

        const hiddenCards = cards.filter(card => card.classList.contains('hidden'));
        if (hiddenCards.length === cards.length) {
            noResult.classList.remove('hidden');
        } else {
            noResult.classList.add('hidden');
        }



        card.classList.toggle('hidden', !isVisible)
    });
}


// Event Listeners

genreFilter.addEventListener('change', applyFilter)

ratingFilter.addEventListener('change', applyFilter)

searchTitleFilter.addEventListener('input', applyFilter)