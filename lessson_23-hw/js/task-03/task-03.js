'use strict'

const array = []

function getRandomNUmber(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1))
}

// const startTime = new Date()

for (let i = 0; i < 10000; i++) {
   array.push(getRandomNUmber(1, 800))
   // array.unshift(getRandomNUmber(1, 800))
}
const copyArray = [...array]

// const endTime = new Date()
// const diff = endTime.getMilliseconds() - startTime.getMilliseconds()
// console.log(diff);

//сортировка пузирьком
function bubbleSort(array) {
   let count = 0
   const startTime = new Date()

   for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
         if (array[k] < array[i]) {
            let temp = array[k]
            array[k] = array[i]
            array[i] = temp
         }
         count++
      }
   }
   const endTime = new Date()

   console.log('bubbleSort')
   console.log(`Time = ${endTime - startTime}ms`)
   console.log(`Iterations = ${count}`)

   return array
}

//сортировка вставками
function insertionSort(array) {
   let currentValue, i
   let count = 0
   const startTime = new Date()

   for (let k = 1; k < array.length; k++) {
      currentValue = array[k]
      i = k - 1
      while (i >= 0 && array[i] > currentValue) {
         array[i + 1] = array[i]
         i = i - 1
         count++
      }

      array[i + 1] = currentValue
   }
   const endTime = new Date()

   console.log('insertionSort')
   console.log(`Time = ${endTime - startTime}ms`)
   console.log(`Iterations = ${count}`)

   return array
}

bubbleSort(array)
insertionSort(copyArray)
