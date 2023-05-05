'use strict'

// Задача 11. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

const documentBody = document.body
const container = document.getElementById('container')

const colorInput = document.createElement('input')
colorInput.setAttribute('type', 'color')

const checkboxLabel = document.createElement('label')
checkboxLabel.innerText = 'Зберегти колір для всіх сеансів?'

const checkboxInput = document.createElement('input')
checkboxInput.setAttribute('type', 'checkbox')
checkboxLabel.append(checkboxInput)

colorInput.addEventListener('input', function () {
   const userColor = colorInput.value
   documentBody.style.backgroundColor = `${userColor}`
})

colorInput.addEventListener('change', function () {
   checkboxInput.checked = false
   localStorage.removeItem('userColor')
   localStorage.removeItem('userChoose')
   sessionStorage.setItem('userCounter', +sessionStorage.getItem('userCounter') + 1)
})

checkboxInput.addEventListener('click', function () {
   const saveColor = checkboxInput.checked
   if (saveColor) {
      localStorage.setItem('userColor', colorInput.value)
      localStorage.setItem('userChoose', saveColor)
   } else {
      localStorage.removeItem('userColor')
      localStorage.removeItem('userChoose')
   }
})

const title = document.createElement('h2')
title.innerText = 'Оберіть колір фону'

container.append(title)
container.append(colorInput)
container.append(checkboxLabel)

window.onload = () => {
   if (localStorage.getItem('userChoose')) {
      checkboxInput.checked = true
      documentBody.style.backgroundColor = localStorage.getItem('userColor')
   }
}

//========================================================================================================================================================

// Задача 12. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

const container1 = document.getElementById('container1')

const todoLabel = document.createElement('label')
todoLabel.innerText = 'Описати справу'

const todoInput = document.createElement('input')
todoLabel.append(todoInput)

const todoButton = document.createElement('button')
todoButton.innerText = 'Додати'
todoLabel.append(todoButton)
let flag = true

todoButton.addEventListener('click', function (e) {
   const todoInputValue = todoInput.value
   localStorage.setItem(todoInputValue, todoInputValue)
   todoInput.value = ''
   if (Object.values(localStorage).length > 0 && flag) {
      showTask()
      flag = false
   }
})
container1.append(todoLabel)

function showTask() {
   const timer = setTimeout(() => {
      const todos = Object.values(localStorage)
      const randomIndex = Math.floor(Math.random() * todos.length)
      const userAnswer = confirm(`Ви встигли ${todos[randomIndex]}?`)
      if (userAnswer) {
         localStorage.removeItem(todos[randomIndex])
      }
      if (Object.values(localStorage).length === 0) {
         clearTimeout(timer)
         flag = true
      }
      if (!flag) {
         showTask()
      }
   }, 5000)
}

localStorage.clear()
