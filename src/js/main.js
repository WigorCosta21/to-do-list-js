const btn = document.querySelector('.btn-task')
const list = document.querySelector('#list')
const input = document.querySelector('.input-task')
const form = document.querySelector('.form-task')

let tasks = JSON.parse(localStorage.getItem('@listTasks')) || []
let errorDisplayed = false

const clearInput = (inputValue) => inputValue.trim() === ''

const addTask = () => {

  const inputValue = input.value

  if (clearInput(inputValue)) {
    msgErro('span', 'Campo não pode ser vazio, digite uma tarefa!')
    return
  } else {
    msgErro('error-message')

    let newTask = inputValue

    tasks.push(newTask)
    input.value = ''

    renderTask()
    saveData()
  }
}

const deleteTask = (index) => {
  tasks.splice(index, 1)
  renderTask()
  saveData()
}

const renderTask = () => {

  list.innerHTML = ''

  tasks.map((task) => {

    let index = tasks.indexOf(task)

    const li = document.createElement('li')
    const textTask = document.createTextNode(task)

    const checkedTask = document.createElement('i')
    checkedTask.classList.add('fa-solid', 'fa-check')

    checkedTask.addEventListener('click', () => {
      li.classList.toggle('checked')
    })

    const removeTask = document.createElement('i')
    removeTask.classList.add('fa-solid', 'fa-trash')

    removeTask.addEventListener('click', () => deleteTask(index))

    li.append(textTask, checkedTask, removeTask)
    list.appendChild(li)
  })
}

renderTask()

const msgErro = (element, text) => {

  const removeError = document.querySelector('.error')
  if (removeError) removeError.remove()

  const errorMessage = document.createElement(element)
  errorMessage.textContent = text
  errorMessage.classList.add('error')

  form.appendChild(errorMessage)

}

const saveData = () => localStorage.setItem('@listTasks', JSON.stringify(tasks))

btn.addEventListener('click', (e) => {
  e.preventDefault()
  addTask()
})

