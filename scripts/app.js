document.addEventListener('DOMContentLoaded', () => {
  // creating and removing elements
  const todoList = document.querySelector('#todo-list')
  const todoListForm = document.querySelector('#todo-form')
  const todoListInput = document.querySelector('#todo-input')
  const todoClearButton = document.querySelector('#todo-clear-button')
  // lab part 2
  const todoListFinished = document.querySelector('#todo-list-finished')

  todoListForm.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(todoListInput.value)
    // create new element e
    const newTodo = document.createElement('li')
    newTodo.innerText = todoListInput.value
    todoListInput.value = ''
    // lab
    const deleteTodo = document.createElement('button')
    deleteTodo.innerText = 'Finished Todo'
    deleteTodo.addEventListener('click', function() {
      // todoList.removeChild(newTodo)
      // lab part 2
      newTodo.removeChild(deleteTodo)
      todoListFinished.appendChild(newTodo)
      newTodo.style.textDecoration = 'line-through'
    })
    newTodo.appendChild(deleteTodo)
    // add it to the list
    todoList.appendChild(newTodo)
  })

  todoClearButton.addEventListener('click', function() {
    while (todoListFinished.firstChild) {  
      todoListFinished.removeChild(todoListFinished.firstChild)
    }
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild)
    }
  })
})