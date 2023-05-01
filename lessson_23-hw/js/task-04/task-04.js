'use strict'

function getRandomNumber(minNumber, maxNumber) {
   return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
}

const userMinNumber = parseInt(prompt('Введіть мінімальне число'))
const userMaxNumber = parseInt(prompt('Введіть максимальне число'))

function createTask() {
   const num1 = getRandomNumber(userMinNumber, userMaxNumber)
   const num2 = getRandomNumber(userMinNumber, userMaxNumber)

   const startTime = new Date()
   const userAnswer = parseInt(prompt(`${num1} + ${num2} = ?`))
   const endTime = new Date()
   const correctAnswer = num1 + num2
   const diff = endTime.getSeconds() - startTime.getSeconds()

   alert(
      `Ви відповіли ${correctAnswer === userAnswer ? 'вірно' : 'не вірно'} , вирішення задачі зайняло ${diff} секунд`
   )
}

createTask()
