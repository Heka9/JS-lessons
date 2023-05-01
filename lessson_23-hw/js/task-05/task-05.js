'use strict'

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

const srtArray = ['sdfar', 'sd4235far', 'sdfazdsdar', 'sd gffar', 'sd 234 t65g far', '415324', '65 78974 - 8']

let result1 = srtArray.filter((str) => /\d/.test(str))
// console.log(result1)

//Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

let result2 = srtArray.filter((str) => !/\d/.test(str))
// console.log(result2)

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

let result3 = srtArray.filter((str) => /[eyuioa]/.test(str))
// console.log(result3)

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

let result4 = srtArray.filter((str) => /^[^eyuioa]*$/.test(str))
// console.log(result4)

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

let result5 = srtArray.filter((str) => /(1|3)/.test(str))
// console.log(result5)

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

const string = 'yGn, c78N, tye, aWr9 a=--12 a74r7'

let result6 = string.match(/[0-9]/g)
// let result6 = string.match(/\d+/g)
// console.log(result6)

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
let result7 = string.match(/[^\w\s]/g)
// console.log(result7)

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
let result8 = string.match(/\b\w+\b\W\s\b/g)
// console.log(result8)

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

const string2 = 'flflfd Dd - ddf, 22.112.0093 jjfd 11.33.2019g 2Ggsr'
let result9 = string2.match(/\d{2}\.\d{2}\.\d{4}/g)
// console.log(result9)

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

let result10 = string2.match(/\b\d{2}\b/g)
// console.log(result10.length)

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.

const string3 = 'g4142-3433-2323-3434 fgg - ld, 4142-33-232-34 f4wrf 1111-2233-2123-3774 fdg46 5555-3233-5123-3434'
let result11 = string3.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
// console.log(result11)

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

const string4 = 'www.some-adress.gov.ua'
let result12 = /gov/.test(string4)
// console.log(result12)

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення

const string5 = 'hello2022 table 2020 sun house 2021 2323 result 201 12 blablabla 2025 2030'

let result13 = string5.match(/[2-9][0-9][0-9][0-9]/g).filter((num) => num > 2021)
// console.log(result13)

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)

const string6 = '+38-949-994-48-43'

let result14 = /^\+38./.test(string6)
// console.log(result14)

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.

const userName = 'Bill Gates'

const result15 = userName.replace(' ', '-')
// console.log(result15);

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»

const time = new Date(2023, 4, 1)

const result16 = time.toLocaleDateString('en-GB')
// console.log(result16)

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним

const userDay = prompt(`Введите день`)

let result17
if (/([0-6]|sun|mon|tue|wed|thu|fri|sat)/.test(userDay)) {
   result17 = /(0|6|sun|sat)/.test(userDay) ? 'Выходной день' : 'Будний день'
} else throw new Error('Incorrect value')

// console.log(result17)
