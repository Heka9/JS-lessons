'use strict'

let arr = [8, 7, 6, 5, 4, 3, 2, 1]
let counter = 0

//====================================Сортровка пузырьком====================================================================================================================

// let changes

// do {
//    changes = false
//    for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//          let temp = arr[i - 1]
//          arr[i - 1] = arr[i]
//          arr[i] = temp
//          changes = true
//          counter++
//       }
//    }
// } while (changes)

// console.log(arr)
// console.log(counter)
// 28
//=================================Сортировка перемешиванием=======================================================================================================================

// let leftIndex = 0
// let rigthIndex = arr.length - 1

// while (leftIndex < rigthIndex) {
//    for (let i = leftIndex; i < rigthIndex; i++) {
//       if (arr[i] > arr[i + 1]) {
//          let temp = arr[i]
//          arr[i] = arr[i + 1]
//          arr[i + 1] = temp
//       }
//       counter++
//    }
//    rigthIndex--
//    for (let i = rigthIndex; i > leftIndex; i--) {
//       if (arr[i] < arr[i + 1]) {
//          let temp = arr[i]
//          arr[i] = arr[i - 1]
//          arr[i - 1] = temp
//       }
//    }
//    leftIndex++
// }
// console.log(arr)
// console.log(counter)
//16

//=================================Сортировка втсавками=======================================================================================================================

// let cur, i

// for (let k = 1; k < arr.length; k++) {
//    cur = arr[k] // число 0
//    i = k - 1 // индекс 0
//    while (i >= 0 && arr[i] > cur) {
//       arr[i + 1] = arr[i]
//       i = i - 1
//       counter++
//    }
//    arr[i + 1] = cur
// }

// console.log(arr)
// console.log(counter)
//28

//========================================================================================================================================================
