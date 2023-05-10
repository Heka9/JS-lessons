'use strict'

class Product {
   constructor(title, price, quantity) {
      this.title = title
      this.price = price
      this.quantity = quantity
   }
   [Symbol.toPrimitive](hint) {
      if (hint == 'string') return `${this.title}`
      else if (hint == 'number') return this.price * this.quantity
      else return `${this.title} - ${this.price}`
   }
}
const productArray = [
   new Product('apple', 30, 120),
   new Product('banan', 40, 40),
   new Product('candy', 60, 15),
   new Product('cake', 90, 8),
]

class Shop {
   constructor(productList) {
      this.productList = productList
   }
   [Symbol.iterator]() {
      this.currentProduct = 0
      return this
   }

   next() {
      if (this.currentProduct < this.productList.length) {
         return {
            done: false,
            value: `${this.productList[this.currentProduct]} - ${+this.productList[this.currentProduct++]}`,
         }
      } else {
         return { done: true }
      }
   }
}

const shop = new Shop(productArray)
console.log(shop)
for (const product of shop) {
   console.log(product)
   console.log(shop.currentProduct)
}
