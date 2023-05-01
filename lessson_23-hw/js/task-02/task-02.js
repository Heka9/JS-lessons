'use strict'

function checkProduct(year, month, day, duration) {
   const productionDate = new Date(year, month, day)
   const currentDate = new Date()
   const endDate = new Date()
   endDate.setDate(productcheckProductionDate.getDate() + duration)

   return currentDate.getDate() <= endDate.getDate() ? 'Продукт придатний' : 'Продукт не придатний'
}

const container = document.getElementById('container')

const year = parseInt(prompt(`Введіть рік випуску`))
const month = parseInt(prompt(`Введіть місяць випуску`))
const day = parseInt(prompt(`Введіть день випуску`))
const duration = parseInt(prompt(`Введіть кількість днів зберігання`))

container.innerText = checkProduct(year, month, day, duration)
