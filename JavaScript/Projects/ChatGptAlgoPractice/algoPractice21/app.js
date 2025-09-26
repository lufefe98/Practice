// Select Elements

const ul = document.querySelector('ul')
const select = document.querySelector('#sort-menu')



// Event Listener

select.addEventListener('change', () => {
    // Add List items to an array
    const productList = Array.from(ul.querySelectorAll('li'))


    // Add text elements into a map along with li and return them
    const ProductListData = productList.map(listItem => {
        const product = listItem.querySelector('.product').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        const price = parseFloat(listItem.querySelector('.price').textContent.replace(/[^0-9.]/g, ""))

        return { listItem, product, price }
    })



    // Sort by price and product name

    switch (select.value) {
        case "price-asc":
            ProductListData.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            ProductListData.sort((a, b) => b.price - a.price);
            break;
        case "prod-asc":
            ProductListData.sort((a, b) => a.product.localeCompare(b.product));
            break;
        case "prod-desc":
            ProductListData.sort((a, b) => b.product.localeCompare(a.product));
            break;
    }


    ul.innerHTML = ''
    ProductListData.forEach(element => {
        ul.appendChild(element.listItem)
    });
})
