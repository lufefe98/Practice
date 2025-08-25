// Select Elements

const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.querySelector('input')



// Create Empty array

const taskArray = []


button.addEventListener('click', () => {
  if (input.value.trim() === "") return; // prevent blank tasks

  taskArray.push(input.value)

  const newTaskArray = [...taskArray] // spread operator copy

  ul.innerHTML = "" // clear old list

  newTaskArray.forEach(task => {
    const li = document.createElement('li')
    li.textContent = task
    ul.appendChild(li)
  })

  input.value = "" // clear input

  console.log('More JavaScript done. Keeping that 25 again')
})
