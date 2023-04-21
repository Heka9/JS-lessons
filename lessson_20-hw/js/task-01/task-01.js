'use strict'
class Product {
   constructor(minProductQuntity, maxProductQuantity, productPrice, imageUrl) {
      this.minProductQuntity = minProductQuntity
      this.maxProductQuantity = maxProductQuantity
      this.productPrice = productPrice
      this.imageUrl = imageUrl
      this.currentProductValue = 0
   }
   set CurrentProductValue(newValue) {
      this.currentValue.innerText = newValue
   }
   resString(value) {
      return ` ${value * this.productPrice} грн.`
   }
   set TotalProductSum(newSum) {
      // this.totalProductSum.innerHTML = ` ${newSum * this.productPrice} грн.`
      this.totalProductSum.innerHTML = this.resString(newSum)
   }
   checkButtonStatus() {
      if (this.currentProductValue <= 0) {
         this.minusButton.setAttribute('disabled', 'true')
      } else if (this.currentProductValue >= 10) {
         this.plusButton.setAttribute('disabled', 'true')
      } else {
         this.minusButton.removeAttribute('disabled')
         this.plusButton.removeAttribute('disabled')
      }
   }
   increaseCurrentProductValue() {
      this.CurrentProductValue = ++this.currentProductValue
   }
   decreaseCurrentProductValue() {
      this.CurrentProductValue = --this.currentProductValue
   }
   render(containerId) {
      const container = document.getElementById(containerId)

      const productInfo = document.createElement('div')
      productInfo.className = 'product__info'
      container.append(productInfo)

      const productImage = document.createElement('img')
      productImage.src = this.imageUrl
      productImage.className = 'product__image'
      productInfo.append(productImage)

      const productText = document.createElement('p')
      productText.className = 'product__text'
      productText.innerText = 'Телевізор Hisense 32А4BG'
      productInfo.append(productText)

      const productCounter = document.createElement('div')
      productCounter.className = 'product__counter'
      container.append(productCounter)

      this.minusButton = document.createElement('button')
      this.minusButton.className = 'product__button'
      this.minusButton.innerText = '-'
      productCounter.append(this.minusButton)
      this.minusButton.onclick = () => {
         this.decreaseCurrentProductValue()
         this.TotalProductSum = this.currentProductValue
         this.checkButtonStatus()
      }

      this.currentValue = document.createElement('div')
      this.currentValue.className = 'product__value'
      this.CurrentProductValue = this.currentProductValue
      this.checkButtonStatus()
      productCounter.append(this.currentValue)

      this.plusButton = document.createElement('button')
      this.plusButton.className = 'product__button'
      this.plusButton.innerText = '+'
      productCounter.append(this.plusButton)
      this.plusButton.onclick = () => {
         this.increaseCurrentProductValue()
         this.TotalProductSum = this.currentProductValue
         this.checkButtonStatus()
      }

      const productSum = document.createElement('div')
      productSum.className = 'product__sum'
      productSum.innerText = 'До оплати:'

      this.totalProductSum = document.createElement('span')
      this.totalProductSum.className = 'product__total-sum'
      this.TotalProductSum = this.currentProductValue
      productSum.append(this.totalProductSum)

      container.append(productSum)
   }
}

window.onload = () => {
   const product = new Product(1, 10, 5500, '../img/task-01/image-01.webp')
   product.render('container')
   console.log(product)
}
