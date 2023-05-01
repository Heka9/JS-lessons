'use strict'

function calcEndHoliday(currentDate, holidayLength) {
   let endDate = currentDate

   endDate.setDate(endDate.getDate() + holidayLength)

   return endDate.toDateString()
}

const date = new Date()

const container = document.getElementById('container')
container.innerText = calcEndHoliday(date, 60)
