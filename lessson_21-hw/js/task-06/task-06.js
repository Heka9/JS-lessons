'use strict'

class ElementCreator {
   static createHMTLElement({ tag, attrs, props, events }) {
      const el = document.createElement(tag)
      if (attrs) {
         for (const attrKey in attrs) {
            el.setAttribute(attrKey, attrs[attrKey])
         }
      }
      if (props) {
         for (const propKey in props) {
            el[propKey] = props[propKey]
         }
      }
      if (events) {
         for (const event in events) {
            el.addEventListener(event, events[event])
         }
      }
      return el
   }
}

class Product {
   constructor({ image, title, price, quantity, id }) {
      this.image = image
      this.title = title
      this.price = price
      this.quantity = quantity
      this.id = id
      this.el = this.createProduct()
   }
   disableButton(e) {
      e.target.setAttribute('disable', 'true')
      e.target.style.opacity = '0.4'
   }

   decreaseCouner(e) {
      if (this.counter.innerText == this.quantity && e.target.classList.contains('button-minus')) {
         this.plusButton.removeAttribute('disable')
         this.plusButton.style.opacity = ''
      }

      if (this.counter.innerText > 0) {
         this.counter.innerText--
      }
      if (this.counter.innerText == 0) {
         this.disableButton(e)
      }
      this.calcTotalPrice()

      const decreaseEvent = new CustomEvent('decrease', {
         detail: {
            price: this.price,
            productQunatity: this.counter.innerText,
         },
      })

      this.minusButton.dispatchEvent(decreaseEvent)
   }
   increaseCounter(e) {
      if (this.counter.innerText == 0 && e.target.classList.contains('button-plus')) {
         this.minusButton.removeAttribute('disable')
         this.minusButton.style.opacity = ''
      }
      if (this.counter.innerText < this.quantity) {
         this.counter.innerText++
      }
      if (this.counter.innerText == this.quantity) {
         this.disableButton(e)
      }
      this.calcTotalPrice()

      const increaseEvent = new CustomEvent('increase', {
         detail: {
            price: this.price,
            productQunatity: this.counter.innerText,
         },
      })
      this.plusButton.dispatchEvent(increaseEvent)
   }
   calcTotalPrice() {
      this.totalPriceSpan.innerText = ''
      this.totalPriceSpan.innerText = ` ${parseInt(this.counter.innerText) * this.price} грн.`
   }
   deleteProduct(e) {
      const myEvent = new CustomEvent('deleteProduct', {
         detail: {
            price: this.price,
            productQunatity: this.counter.innerText,
            id: this.id,
         },
      })
      this.deleteButton.dispatchEvent(myEvent)
   }
   createProduct() {
      const productContainer = ElementCreator.createHMTLElement({ tag: 'div', attrs: { class: 'product' } })

      const image = ElementCreator.createHMTLElement({
         tag: 'img',
         attrs: { class: 'image' },
         props: { src: this.image },
      })
      productContainer.append(image)

      const title = ElementCreator.createHMTLElement({
         tag: 'div',
         attrs: { class: 'title' },
         props: { innerText: this.title },
      })
      productContainer.append(title)

      const buttons = ElementCreator.createHMTLElement({ tag: 'div', attrs: { class: 'buttons' } })

      this.minusButton = ElementCreator.createHMTLElement({
         tag: 'button',
         attrs: { class: 'button button-minus' },
         props: { innerText: '-' },
         events: {
            click: this.decreaseCouner.bind(this),
         },
      })
      buttons.append(this.minusButton)

      this.counter = ElementCreator.createHMTLElement({
         tag: 'div',
         attrs: { class: 'counter' },
         props: { innerText: '1' },
      })
      buttons.append(this.counter)

      this.plusButton = ElementCreator.createHMTLElement({
         tag: 'button',
         attrs: { class: 'button button-plus' },
         props: { innerText: '+' },
         events: {
            click: this.increaseCounter.bind(this),
         },
      })
      buttons.append(this.plusButton)
      productContainer.append(buttons)

      const totalPrice = ElementCreator.createHMTLElement({
         tag: 'div',
         attrs: { class: 'total-price' },
         props: { innerText: 'До оплати:' },
      })
      this.totalPriceSpan = ElementCreator.createHMTLElement({
         tag: 'span',
         attrs: { class: 'total-price__value' },
         props: { innerText: ` ${this.counter.innerText * this.price} грн.` },
      })
      totalPrice.append(this.totalPriceSpan)
      productContainer.append(totalPrice)

      this.deleteButton = ElementCreator.createHMTLElement({
         tag: 'button',
         attrs: { class: 'button button-delete' },
         props: { innerText: 'del' },
         events: {
            click: this.deleteProduct.bind(this),
         },
      })
      productContainer.append(this.deleteButton)

      return productContainer
   }
}

class ProductManager {
   constructor(productDataArray) {
      this.productDataArray = productDataArray
      this.products = []
   }
   onDelete(e) {
      this.products = this.products.filter((product) => {
         if (product.id !== e.detail.id) {
            return true
         } else {
            product.el.remove()
            return false
         }
      })
      this.setTotalSum()
      if (!this.products.length) {
         this.totalSumContainer.innerHTML = ''
      }
   }
   onIncrease(e) {
      this.setTotalSum()
   }
   onDecrease(e) {
      this.setTotalSum()
   }
   createProductList() {
      this.productList = ElementCreator.createHMTLElement({ tag: 'div', attrs: { class: 'product-list' } })

      for (const productData of this.productDataArray) {
         const product = new Product(productData)

         product.deleteButton.addEventListener('deleteProduct', this.onDelete.bind(this))
         product.plusButton.addEventListener('increase', this.onIncrease.bind(this))
         product.minusButton.addEventListener('decrease', this.onDecrease.bind(this))
         this.products.push(product)
         this.productList.append(product.el)
      }

      return this.productList
   }
   setTotalSum() {
      this.totalSumSpan.innerText = ''
      const newSum =
         this.products.reduce((prevSum, product) => prevSum + parseInt(product.totalPriceSpan.innerText), 0) + ' грн.'
      this.totalSumSpan.innerText = `${newSum}`
   }
   getTotalSum() {
      return (
         this.products.reduce((prevSum, product) => prevSum + parseInt(product.totalPriceSpan.innerText), 0) + ' грн.'
      )
   }
   createTotalSumInfo() {
      this.totalSumContainer = ElementCreator.createHMTLElement({
         tag: 'div',
         attrs: { class: 'total-sum' },
         props: { innerText: 'Загалом до оплати: ' },
      })
      this.totalSumSpan = ElementCreator.createHMTLElement({
         tag: 'span',
         attrs: { class: 'total-sum__span' },
         props: {
            innerText: this.getTotalSum(),
         },
      })
      this.totalSumContainer.append(this.totalSumSpan)

      return this.totalSumContainer
   }
   render(id) {
      const cartContainer = document.getElementById(id)
      cartContainer.append(this.createProductList())
      cartContainer.append(this.createTotalSumInfo())
   }
}

const productData = [
   {
      image: '../img/task-06/image-01.webp',
      title: 'Телевізор Hisense',
      price: 14576,
      quantity: 5,
      id: 1,
   },
   {
      image: '../img/task-06/image-02.webp',
      title: 'Миша Logitech',
      price: 1189,
      quantity: 10,
      id: 2,
   },
   {
      image: '../img/task-06/image-03.webp',
      title: 'Ігрова поверхня Razer',
      price: 799,
      quantity: 8,
      id: 3,
   },
]

const pm1 = new ProductManager(productData)
pm1.render('container')
console.log(pm1)
