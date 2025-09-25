// Select Elements

const select = document.querySelector('#sort-menu')
const ul = document.querySelector('ul')






select.addEventListener('change', () => {
    const listItems = Array.from(ul.querySelectorAll('li'))


        if (select.value === 'asc') {
            listItems.sort((a,b) => a.textContent.localeCompare(b.textContent))
        } else if (select.value === 'desc') {
            listItems.sort((a,b) => b.textContent.localeCompare(a.textContent))
        }


    ul.innerHTML = ''

    listItems.forEach(item => ul.appendChild(item))
})

