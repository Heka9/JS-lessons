'use strict'

// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* generateEvenNumber(quantityEvenNumber, minValue, maxValue, repeatValue = true) {
   const startValue = minValue % 2 !== 0 ? ++minValue : minValue
   const endValue = maxValue % 2 !== 0 ? --maxValue : maxValue
   const possibleValues = []
   let curValue = startValue

   for (let i = 0; i <= (endValue - startValue) / 2; i++) {
      possibleValues.push(curValue)
      curValue += 2
   }

   if (repeatValue) {
      for (let i = 0; i < quantityEvenNumber; i++) {
         const randomIndex = Math.floor(Math.random() * possibleValues.length)
         yield possibleValues[randomIndex]
      }
   } else {
      for (let i = 0; i < quantityEvenNumber; i++) {
         const randomIndex = Math.floor(Math.random() * possibleValues.length)
         yield +possibleValues.splice(randomIndex, 1)
      }
   }
}

for (const item of generateEvenNumber(5, 1, 10)) {
   console.log(item)
}
