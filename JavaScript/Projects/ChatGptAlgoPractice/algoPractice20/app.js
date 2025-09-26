// Select Elements

const select = document.querySelector('#sort-menu')
const ul = document.querySelector('ul')


    // const listItems = Array.from(ul.querySelectorAll('li'))

    // console.log(parseFloat(listItems[0].textContent)+parseFloat('1'))

    



select.addEventListener('change', () => {
    const listItems = Array.from(ul.querySelectorAll('li'))


        if (select.value === 'asc') {
            listItems.sort((a,b) => parseFloat(a.textContent) - parseFloat(b.textContent))
        } else if (select.value === 'desc') {
            listItems.sort((a,b) => parseFloat(b.textContent) - parseFloat(a.textContent))
        }


    ul.innerHTML = ''

    listItems.forEach(item => ul.appendChild(item))
})

