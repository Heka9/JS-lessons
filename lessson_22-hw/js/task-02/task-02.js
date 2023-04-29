'use strict'

class ItemInfo {
   constructor(x, y, imgUrl, updateInterval, tag) {
      this.x = x
      this.y = y
      this.imgUrl = imgUrl
      this.updateInterval = updateInterval
      this.el = this.createHTMLELement(tag)
   }
   createHTMLELement(tag) {
      const el = document.createElement(tag)
      el.style.position = 'relative'
      const img = document.createElement('img')
      img.src = this.imgUrl
      img.style.position = 'absolute'
      img.style.left = `${this.x}px`
      img.style.top = `${this.y}px`
      return el
   }
}

class House extends ItemInfo {
   constructor(x, y, imgUrl, updateInterval, tag) {
      super(x, y, imgUrl, updateInterval, tag)
   }
   update(step) {
      this.step = 1
      setInterval(() => {
         const update = Math.round(Math.random())
         if (update) {
            this.el.style.transform = `scale(${(this.step += step)})`
         } else this.el.style.transform = `scale(${(this.step -= step)})`
      }, this.updateInterval * 1000)
   }
}

class Dog extends ItemInfo {
   constructor(x, y, imgUrl, updateInterval, tag) {
      super(x, y, imgUrl, updateInterval, tag)
   }
   updateX(step) {
      setInterval(() => {
         const update = Math.round(Math.random())
         if (update) {
            this.x = this.x + step
         } else this.x = this.x - step
         console.log(this.x)
      }, this.updateInterval * 1000)
   }
}

class Bird extends ItemInfo {
   constructor(x, y, imgUrl, updateInterval, tag) {
      super(x, y, imgUrl, updateInterval, tag)
   }

   newPosiion(step) {
      setInterval(() => {
         const updateX = Math.round(Math.random())
         updateX ? (this.x += step) : (this.x -= step)

         const updateY = Math.round(Math.random())
         updateY ? (this.y += step) : (this.y -= step)
      }, this.updateInterval * 1000)
   }
}

// const a1 = new ItemInfo(20, 40, '', 1000, 'div')
// console.log(a1)

// const a2 = new House(320, 240, 'HouseImage', 2, 'a')
// a2.update(0.1)
// console.log(a2)

// const a3 = new Dog(320, 240, 'DogImage', 2, 'a')
// a3.updateX(10)
// console.log(a3)

// const a4 = new Bird(320, 240, 'BirdIMage', 2, 'a')
// a4.newPosiion(10)
// console.log(a4)
