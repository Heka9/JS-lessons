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
//    property: {
//       name: 'John',
//       saySomething: () => {
//          console.log(this)
//          console.log(`Something from ${this.name}`)
//       },
//       saySome: function () {
//          console.log(this)
//          console.log(`Some from ${this.name}`)
//       },
//    },
// }

// user.sayHi()
// user.sayBye()
// user.property.saySomething()
// user.property.saySome()
// console.log(window.name)

// class User {
//    #name
//    constructor(initName) {
//       this.Name = initName
//       this.createName(initName)
//    }
//    get Name() {
//       return this.#name
//    }
//    showName() {
//       return this.#name
//    }

//    set Name(newName) {
//       if (typeof newName === 'string' && newName.length > 0) {
//          this.#name = newName
//       } else throw new Error('Invalid value')
//    }
//    createName(newName) {
//       if (typeof newName === 'string' && newName.length > 0) {
//          this.#name = newName
//       } else throw new Error('Invalid value')
//    }
// }

// const test = new User('John')
// console.log(test)

// test.Name = 'Ivan'
// console.log(test)

// test.createName('Fedor')
// console.log(test)

//========================================================================================================================================================

// class Person {
//    static maxYearsLimit = 45
//    constructor(age) {
//       this.age = age
//    }
// }

// const obj = new Person(30)

// console.log(obj)
// console.log(Person.maxYearsLimit)

//========================================================================================================================================================

// const obj1 = {
//    a: 11,
//    showProp: function () {
//       console.log(this.a)
//    },
// }
// const obj2 = {
//    a: 2,
//    b: 22,
//    c: 33,
// }

// obj2.__proto__ = obj1

// console.log(obj2.a)
// obj2.showProp()
//========================================================================================================================================================

// const objParent = {
//    a: 22,
//    showProp: function () {
//       console.log(a)
//    },
// }

// const obj = Object.create(objParent, {
//    b: {
//       value: 42,
//    },
//    getSum: {
//       value: function () {
//          console.log(this.a + this.b)
//       },
//    },
// })
// obj.getSum()
