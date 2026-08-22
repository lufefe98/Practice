// Select Elements

const todoInput = document.getElementById('add-todo')
const todoBtn = document.getElementById('todo-btn')
const todoList = document.getElementById('todos')

// Store Todos

let todos = []



// Functions

function createTodo() {
    let todo = todoInput.value
    // Store value from the input to a variable. 

    if (todo && todo !== '') {
        todos.push({ name: todo, id: Date.now() })
        // If there is a value from the input and it is not an
        // empty array, then we push that value in the form of
        // an object and also give it a unique id value to be
        // to identify it.
    }

    todoInput.value = ''
    // Clear the input so we can add the next value without having
    // to clear it ourselves.

    console.log(todos)


    renderTodo()
    // Execute the renderTodo function to add these values to the
    // todo which it creates.
}



function renderTodo() {
    todoList.innerHTML = ''
    // Clear out the ul which stores our todos because we will
    // be entering values from a new array.

    todos.forEach(todo => {
        const li = document.createElement('li')

        li.innerHTML = `
            <span class="todo-text">${todo.name}</span>
                
            <span>
                <button class="edit-todo">Edit</button>
                <button class="delete-todo">Delete</button>
            </span>
        `

        li.dataset.id = todo.id
        // Set the id to the one which is given to each new
        // todo when it gets created and stored in the todos
        // array.

        todoList.appendChild(li)

    });
}





// Event Listeners

// create todo
todoBtn.addEventListener('click', createTodo)





// edit todo
todoList.addEventListener('click', (event) => {
    // Handle Edge Case

    if (!event.target.classList.contains('edit-todo')) {
        return
    }

    // If the selected element is not the 'edit-todo' button
    // then the rest of the function should not be executed.
    // This prevents any other element from triggering this
    // editing function.

    // Store Todo Id
    let todoId = Number(event.target.closest('li').dataset.id)

    // Get the id of the todo by selecting the targeted button's
    // parent element and getting its id.


    // Create New Todo Text
    let editedTodo = prompt('Edit your todo here')

    // Create the new text for the todo with the use of a prompt.


    // Edit Todo
    if (event.target.classList.contains('edit-todo')) {

        // If the selected element matches the class
        // for the editing button, then we carry out the 
        // following operation.

        todos = todos.map(todo => todo.id === todoId ? {
            ...todo,
            name: editedTodo
        } : todo)

        // If the condition is met, then we will edit the
        // todo by creating a new array where we set the 
        // name of the todo to the text which was entered in
        // the prompt.

        renderTodo()
        // Execute the renderTodo() function to make the changes
        // reflect on the UI.
    }
})


// delete todo
todoList.addEventListener('click', (event) => {
    // Handle Edge Case
    if (!event.target.classList.contains('delete-todo')) {
        return
    }

    // If the clicked button is not the delete button, with the
    // class of 'delete-todo', then the rest of the function
    // will not be executed.

    // Save Todo id
    let todoId = Number(event.target.closest('li').dataset.id)

    // Delete todo
    if (event.target.classList.contains('delete-todo')) {
        todos = todos.filter(todo => todo.id !== todoId)
        // If the condition is met, the filter method will loop
        // thorugh the todos array and delete the element with
        // the id that matches the on in the todo element.

        renderTodo()
    }

})