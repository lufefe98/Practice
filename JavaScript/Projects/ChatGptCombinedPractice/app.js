// Create Elements

const ul = document.querySelector('ul')

const button = document.querySelector('#reverse-btn')

const body = document.querySelector('body')

// For loop

// colors text 

const colorsArray = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue'
]

for (let i = 0; i < 5; i++) {
  // Create List Items
  const listItems = document.createElement('li')
  ul.appendChild(listItems)

  // Add Text to List Items

  listItems.textContent = colorsArray[i]

  // Change Body color

  const lis = document.querySelectorAll('li')

  lis.forEach(li => {
    li.addEventListener('click', () => {
      body.style.backgroundColor = li.textContent
    })
  });

}


// Reverse List Items

button.addEventListener('click', () => {
  const lis = document.querySelectorAll('li')
  const listArray = [...lis]
  const reverseList = listArray.reverse()
  for (let i = 0; i < 5; i++) {
    ul.appendChild(reverseList[i])
  }

  console.log('JavaScript practice done')
})


