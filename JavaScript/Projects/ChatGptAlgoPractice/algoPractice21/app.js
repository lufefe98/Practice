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
            productListData.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            productListData.sort((a, b) => b.price - a.price);
            break;
        case "prod-asc":
            productListData.sort((a, b) => a.product.localeCompare(b.product));
            break;
        case "prod-desc":
            productListData.sort((a, b) => b.product.localeCompare(a.product));
            break;
    }


    ul.innerHTML = ''
    productListData.forEach(element => {
        ul.appendChild(element.listItem)
    });
})
