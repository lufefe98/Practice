// Select Elements

const cards = Array.from(document.querySelectorAll('.card'))
const container = document.getElementById('cards-container')
const noMatchText = document.getElementById('no-match-text')

const input = document.querySelector('input')




// Functions

function getProdName(event) {
    const searchValue = event.target.value.toLowerCase().trim()


    cards.forEach(card => {
        const productName = card.querySelector('.prod-name').textContent

        // edge case

        if (productName.includes(searchValue)) {
            // Show card (matching)
            card.style.display = "";
            // When the text from the search matches the text in the
            // card for the product, the card that matches that text 
            // should be displayed.


            noMatchText.style.display = 'none'
            // noMatchText display set to 'none' so it doesn't
            // show when text in search bar is reset.
        } else {
            // Hide card (not matching)
            card.style.display = "none";
            // Hide the cards if there are no matches.
            

            noMatchText.style.display = ''
            // set noMatchText display to show when there
            // is no matching card from the search.
        }


    })


}



// Event Listener

input.addEventListener('input', getProdName)