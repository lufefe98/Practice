// Select Items

const listItems = document.querySelectorAll('li')

listItems.forEach((listItem, index) => {
    if (index % 2 != 0) {
        listItem.classList.add('red')
    } else if (index % 2 == 0) {
        listItem.classList.add('blue')
    } 
});