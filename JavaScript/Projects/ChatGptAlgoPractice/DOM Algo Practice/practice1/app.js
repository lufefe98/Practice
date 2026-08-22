// Select Elements

const button = document.querySelector('button')

const ul = document.querySelector('ul')


// Create arrays

const fruitBasket1 = ['Apple', 'Grapefruit', 'Orange', 'Apricot', 'Banana']

const fruitBasket2 = ['Lemon', 'Litchi', 'Nectarine', 'Pineapple', 'Blueberry']

const newBasket = [...fruitBasket1, ...fruitBasket2]


// Create List

for (let i = 0; i < newBasket.length; i++) {
    const li = document.createElement('li')

    li.textContent = newBasket[i]

    ul.appendChild(li)
}

button.addEventListener('click', () => {
    if(newBasket.includes('Dragonfruit')) {
        newBasket.pop()

        ul.lastChild.remove()

        button.textContent = "Add Dragonfruit"
    }

    const li = document.createElement('li')

    newBasket.push('Dragonfruit')

    li.textContent = 'Dragonfruit'

    ul.appendChild(li)
})