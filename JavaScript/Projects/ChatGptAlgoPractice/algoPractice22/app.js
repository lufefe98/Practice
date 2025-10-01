// Select Elements

const ul = document.querySelector('ul')
const select = document.querySelector('#sort-menu')


// Event Listener

select.addEventListener('change', () => {
    // Add List items to an array
    const productList = Array.from(ul.querySelectorAll('li'))


    // Add text elements into a map along with li and return them
    const productListData = productList.map(listItem => {
        const product = listItem.querySelector('.product').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        const price = parseFloat(listItem.querySelector('.price').textContent.replace(/[^0-9.]/g, ""))

        return { listItem, product, price }
    })



    // Sort by price and product name

    switch (select.value) {
        case "price-asc":
            productListData.sort((a, b) => {
                if (a.price === b.price) {
                    return a.product.localeCompare(b.product)
                }
                return a.price - b.price
            });
            break;
        case "price-desc":
            productListData.sort((a, b) => {
                if (b.price === a.price) {
                    return a.product.localeCompare(b.product)
                }
                return b.price - a.price
            });
            break;
        case "prod-asc":
            productListData.sort((a, b) => {
                if (a.product === b.product) {
                    return a.price - b.price
                }
                return a.product.localeCompare(b.product)
            });
            break;
        case "prod-desc":
            productListData.sort((a, b) => {
                if (b.product === a.product) {
                    return b.price - a.price
                }
                b.product.localeCompare(a.product)
            });
            break;
    }


    ul.innerHTML = ''
    productListData.forEach(element => {
        ul.appendChild(element.listItem)
    });
})
