'use strict'

class PhoneNumber {
   constructor(number) {
      this.number = number
      this.phoneOperator = this.foundOperator(number)
   }
   foundOperator(number) {
      const reg = /^.*(0[0-9]{2}).+$/
      return number.replace(reg, '$1')
   }
   [Symbol.toPrimitive](hint) {
      let result
      if (hint == 'string') {
         switch (this.phoneOperator) {
            case '050':
            case '095':
            case '099':
            case '066':
               result = 'МТС'
               break
            case '067':
            case '068':
            case '096':
            case '097':
            case '098':
               result = 'Kyivstar'
               break
            default:
               result = 'Life'
         }
      } else if (hint == 'number') {
         result = +this.number
      } else result = null
      return result
   }
}

const obj = new PhoneNumber('+38-(098)-53-42-135')
console.log(obj)
