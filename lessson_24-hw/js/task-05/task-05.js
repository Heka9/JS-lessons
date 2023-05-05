'use strict'

// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і
// максимальне.

const pupilAges = [12, 11, 9, 9, 8, 6, 12, 15, 14, 14, 11, 10, 9, 9, 8, 16, 14, 13, 15, 9, 9, 6]

const map5 = new Map()

for (const el of pupilAges) {
   const elCount = map5.get(el) || 0
   map5.set(el, elCount + 1)
}

function getMaxAge(object) {
   let maxAge = 0
   for (const entry of object) {
      if (maxAge < entry[0]) maxAge = entry[0]
   }
   return maxAge
}
// console.log(`Max age = ${getMaxAge(map5)}`)
// console.log(map5)

//========================================================================================================================================================

// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.

const booksArray = [
   {
      title: 'book1',
      year: 2000,
      author: 'author1',
   },
   {
      title: 'book2',
      year: 2005,
      author: 'author1',
   },
   {
      title: 'book3',
      year: 2007,
      author: 'author2',
   },
   {
      title: 'book4',
      year: 2022,
      author: 'author1',
   },
   {
      title: 'book5',
      year: 2021,
      author: 'author1',
   },
   {
      title: 'book6',
      year: 2010,
      author: 'author2',
   },
   {
      title: 'book7',
      year: 2012,
      author: 'author3',
   },
]

const map6 = new Map()

for (const book of booksArray) {
   const bookCount = map6.get(book.author) || 0
   map6.set(book.author, bookCount + 1)
}
function showAuthorBooksQuantity(mapObject) {
   mapObject.forEach((value, key) => {
      console.log(`${key} has ${value} books`)
   })
}
// showAuthorBooksQuantity(map6)
// console.log(map6)

//========================================================================================================================================================

// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

const visitedUsers = [
   {
      name: 'Alex',
      login: 111,
   },
   {
      name: 'John',
      login: 222,
   },
   {
      name: 'Alex',
      login: 111,
   },
   {
      name: 'Alex',
      login: 111,
   },
   {
      name: 'John',
      login: 222,
   },
   {
      name: 'Alex',
      login: 111,
   },
   {
      name: 'John',
      login: 222,
   },
   {
      name: 'John',
      login: 222,
   },
   {
      name: 'Olga',
      login: 333,
   },
   {
      name: 'John',
      login: 222,
   },
   {
      name: 'John',
      login: 222,
   },
   {
      name: 'Olga',
      login: 333,
   },
   {
      name: 'Olga',
      login: 333,
   },
]

function showVisitClientInfo(array) {
   const map7 = new Map()

   for (const user of visitedUsers) {
      const userCount = map7.get(user.login) || 0
      map7.set(user.login, userCount + 1)
   }
   map7.forEach((value, key) => {
      console.log(`Client with login ${key} visited site ${value} times`)
   })
}
// showVisitClientInfo(visitedUsers)

//========================================================================================================================================================

// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const studentsArray = [
   {
      name: 'Ivanov',
      class: 3,
      department: 'Faculty of Law',
   },
   {
      name: 'Petrov',
      class: 1,
      department: 'Faculty of Law',
   },
   {
      name: 'Sidorenko',
      class: 4,
      department: 'Faculty of Biology',
   },
   {
      name: 'Kozak',
      class: 2,
      department: 'Faculty of Biology',
   },
   {
      name: 'Smith',
      class: 5,
      department: 'Faculty of Law',
   },
   {
      name: 'Pascucci',
      class: 1,
      department: 'Faculty of Mathematics',
   },
   {
      name: 'Pifagorov',
      class: 2,
      department: 'Faculty of Mathematics',
   },
]

function showFacultyNumber(array) {
   let set = new Set()
   array.forEach((el) => {
      set.add(el.department)
   })
   return set.size
}
function showEachClassStudents(array) {
   let map = new Map()

   for (const student of array) {
      const eachClassStudentsCount = map.get(student.class) || 0
      map.set(student.class, eachClassStudentsCount + 1)
   }
   map.forEach((value, key) => {
      console.log(`${value} students - ${key} class`)
   })
}
// console.log(showFacultyNumber(studentsArray))
// showEachClassStudents(studentsArray)

//========================================================================================================================================================

// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

function temperaturesCounter(array) {
   const map = new Map()
   for (const element of array) {
      const temperatureCount = map.get(element) || 0
      map.set(element, temperatureCount + 1)
   }

   map.forEach((value, key) => {
      console.log(`Temperature ${key} repeats ${value} times`)
   })
}
function showDifferentTemperatureNumber(array) {
   let set = new Set()
   array.forEach((el) => {
      set.add(Math.ceil(el))
   })
   return set.size
}

// temperaturesCounter(temperatures)
//
//========================================================================================================================================================

// Задача 10. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const mathListStudents = ['Ivanov', 'Petrenko', 'Sidorenko', 'Gavrilenko', 'Fedorenko']
const historyListStudents = ['Simonenko', 'Petrenko', 'Sidorenko', 'Gavrilenko', 'Maryshenko', 'Bogdanov']

function studentsNumberVisitedHistoryAndMath(historyList, mathList) {
   let studentsCount = 0
   for (const student of historyList) {
      mathList.some((el) => el === student) ? studentsCount++ : studentsCount
   }
   return studentsCount
}

function evenOneSubjectStudentNumber(subject_1_List, subject_2_List) {
   const evenOneSubjectStudent = new Set()

   for (const array of arguments) {
      for (const name of array) {
         evenOneSubjectStudent.add(name)
      }
   }
   return evenOneSubjectStudent.size
}

// console.log(studentsNumberVisitedHistoryAndMath(historyListStudents, mathListStudents))
// console.log(evenOneSubjectStudentNumber(mathListStudents, historyListStudents))
