// Select Elements

const card = document.querySelectorAll('.card')
const productName = document.querySelectorAll('.product-name')
const productPrice = document.querySelectorAll('.product-price')
const dropDownMenu = document.querySelector('select')


// Access Price and Product Names

for (let i = 0; i < card.length; i++) {
    const productName= card[i].childNodes[3].childNodes[1].textContent
    const productPrice= card[i].childNodes[3].childNodes[3].textContent

    console.log({productName, productPrice})
}




// Create Array/Map




// Sorting functions



// Event listeners