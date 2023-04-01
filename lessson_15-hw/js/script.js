'use strict'

// let arr = [8, 7, 6, 5, 4, 3, 2, 1]
// let counter = 0

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

// function counter(value) {
//    function increment() {
//       return ++value
//    }
//    return increment
// }

// let cntr = counter(3)
// let a = cntr

// console.log(cntr())
// console.log(a())
// console.log(cntr())

// cntr = counter(9)
// console.log(cntr())

//========================================================================================================================================================

// let name = 'Petro'

// const user = {
//    name: 'Ivan',
//    surname: 'Petrov',
//    age: 25,
//    sayHi: () => {
//       console.log(this)
//       console.log(`Hello from ${this.name}`)
//    },
//    sayBye: function () {
//       console.log(this)
//       console.log(`Bye from ${this.name}`)
//    },
//    toString: function () {
//       console.log(this)
//       return `${this.name} - ${this.age}`
//    },
//    property: {
//       name: 'John',
//       saySomething: function () {
//          let func = () => {
//             console.log(this)
//             console.log(`Something from ${this.name}`)
//          }
//          return func
//       },
//       saySome: function () {
//          console.log(this)
//          console.log(`Some from ${this.name}`)
//       },
//    },
// }
// function someFn() {
//    console.log(this)
// }
// console.log(user.toString())
// user.sayHi()
// user.sayBye()
// let a = user.property.saySomething()
// a()
// user.property.saySome()
// console.log(window.name)
// console.log(someFn())

//========================================================================================================================================================

// const product = {
//    title: 'table',
//    price: 2000,
//    marks: [[1, 23, 4], 11, 10],
//    toString: function () {
//       return `${this.title} - ${this.price}`
//    },
//    valueOf: function () {
//       return this.marks.length
//    },
//    asd: function () {
//       console.log(this)
//    },
// }

// document.write(product)
// console.log(product)

// console.log(product.asd())

//========================================================================================================================================================

// function getSum() {
//    console.log(arguments)
//    return [].reduce.call(arguments, (prevSum, elem) => prevSum + elem)
// }

// let s = getSum(123, 124, 5, 3, 31, 1, 234, 5)
// console.log(s)
