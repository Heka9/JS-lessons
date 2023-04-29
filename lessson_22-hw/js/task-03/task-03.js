'use strict'

class IsNotNumberError extends Error {
   constructor(title) {
      super()
      this.title = title
      this.message = `${this.title} is not number`
      this.name = 'IsNotNumberError'
   }
}
class IsInRangeError extends Error {
   constructor(title) {
      super()
      this.title = title
      this.message = `${this.title} is not in range`
      this.name = 'IsInRangeError'
   }
}
class IsHolidaysError extends Error {
   constructor(title) {
      super()
      this.title = title
      this.message = 'Holidays month'
      this.name = 'IsHolidaysError'
   }
}

const userMonth = parseInt(prompt('Enter month', 0))
const userGrade = parseInt(prompt('Enter grade', 0))
let flag = true

try {
   if (isNaN(userMonth)) throw new IsNotNumberError('Month')
   else if (userMonth < 1 || userMonth > 12) throw new IsInRangeError('Month')
   else if (userMonth >= 6 && userMonth <= 8) throw new IsHolidaysError('Month')

   if (isNaN(userGrade)) throw new IsNotNumberError('Grade')
   else if (userGrade < 1 || userGrade > 100) throw new IsInRangeError('Grade')
} catch (error) {
   flag = false
   if (error instanceof IsNotNumberError) {
      alert(error.message + ', enter only number')
   } else if (error instanceof IsInRangeError) {
      alert(error.message + ', enter correct number')
   } else if (error instanceof IsHolidaysError) {
      alert(error.message)
   }
} finally {
   if (flag) {
      if (userMonth !== 5 && userMonth !== 12 && userGrade < 75) {
         alert('You can correct grade')
      }
   }
}
