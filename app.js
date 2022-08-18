document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector("form")
    let clear = document.querySelector("#clear")
    let input = document.querySelector('input')
    let current = document.querySelector('#todo-list')
    let finished = document.querySelector("#todo-list-finished")
    console.log(submit, clear, input, current, finished)

    form.addEventListener('submit', function(e) {
        e.preventDefault()
        let list = document.createElement('li')
        list.innerText = input.value
        let button = document.createElement('button')
        button.innerText = "Finished Todo"
        button.addEventListener('click', function(e){
            current.removeChild(list)
            finished.append(list)
            list.style.textDecoration = 'line-through'
            list.removeChild(button)
        })
        list.append(button)
        input.value = ''
        current.append(list)
    })
    clear.addEventListener('click', function(e) {
        while (current.firstChild) {
            current.removeChild(current.firstChild)
        }
        while (finished.firstChild) {
            finished.removeChild(finished.firstChild)
        }
        input.value =''
    })


})