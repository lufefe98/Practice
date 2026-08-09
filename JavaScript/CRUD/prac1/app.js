// Reference for Todos

let todos = []
// todos will be used to store each todo, including
// its data (ie: the name of the todo and the id) as an object.




// Functions

function createTodo() {
    const addTodo = document.getElementById("add-todo")
    const todo = addTodo.value    

    if (todo === '') {
        console.log(`THERE IS NO VALUE: < ${todo} >`)
        return
        // If the value of the user input is empty, we stop
        // the rest of the function from executing 
    }

    if (todo && todo !== '') {
        todos.push({ id: Date.now(), name: todo })
        // If there is a user input and it is not an empty
        // string, we push the user input data to the todos
        // array as an object with the id and name from the
        // user input is stored

        addTodo.value = ''
        // Once we push the user data to the todos array, we 
        // clear the user input so we can add another todo.

        // console.log(`We have a value!!! See: ${todo}`)
        console.log(todos)
    }

    renderTodo()
    // Once all the above is done, we render the user input 
    // data
}


// Render Todos
function renderTodo() {
    const todoList = document.getElementById('todos')
    todoList.innerHTML = ""
    // We clear the ul from any data because when we edit
    // a todo, we create a new array with the updated data.

    todos.forEach(todo => {
        const li = document.createElement('li')

        li.innerHTML = `
            <span class='text'>${todo.name}</span>
    
            <span class="todo-btns">
                <button id="edit" onclick="editTodo(${todo.id})">Edit</button>
                <button id="delete" onclick="deleteTodo(${todo.id})">Delete</button>
            </span>
        `

        todoList.appendChild(li)
    });
}




// Update Todos
function editTodo(id) {
    const newToDo = prompt('Create new ToDo')

    if (newToDo) {
        todos = todos.map(todo => todo.id === id ? {
            ...todo,
            name: newToDo
        } : todo)
        // If the id that gets passed in matches the id
        // from the selected todo, then the name of that
        // todo is going to be replaced witht he one which
        // was passed into the prompt.

        console.log(todos)
        // Check if the change reflects in the array where we
        // store our todos.

        renderTodo()
        // We execute the renderTodos function because there
        // has been a change in the text of a todo. 
    }
}





// Delete Todos
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    // If the todo which was passed into this function as a
    // argument is not found in any of the todos, we remove
    // that specific todo.
    
    renderTodo()
    // Execute the render function because there has been a
    // change in the list of todos which can be reflected. 
}

