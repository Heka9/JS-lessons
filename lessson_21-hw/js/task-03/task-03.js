'use strict'

class ElementCreator {
   static createHTMLElement({ tag, props, attrs, styles, events }) {
      const el = document.createElement(tag)
      if (props) {
         for (const propKey in props) {
            el[propKey] = props[propKey]
         }
      }
      if (attrs) {
         for (const attrKey in attrs) {
            el.setAttribute(attrKey, attrs[attrKey])
         }
      }
      if (styles) {
         for (const cssProp in styles) {
            el.style[cssProp] = styles[cssProp]
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
class Lists {
   constructor(listNumber, minListLength, maxListLength, minInnerTextValue, maxInnerTextValue) {
      this.listNumber = listNumber
      this.minListLength = minListLength
      this.maxListLength = maxListLength
      this.minInnerTextValue = minInnerTextValue
      this.maxInnerTextValue = maxInnerTextValue
   }
   getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
   }
   createList() {
      const list = ElementCreator.createHTMLElement({
         tag: 'ul',
         attrs: {
            class: 'list',
         },
         // events: {
         //    buttonevent: this.onButtonEvent.bind(this),
         // },
      })

      const listLength = this.getRandomNumber(this.minListLength, this.maxListLength)
      for (let k = 0; k < listLength; k++) {
         list.append(
            ElementCreator.createHTMLElement({
               tag: 'li',
               props: {
                  innerText: `${this.getRandomNumber(this.minInnerTextValue, this.maxInnerTextValue)}`,
               },
               styles: {
                  textAlign: 'center',
                  marginBottom: '5px',
               },
            })
         )
      }

      return list
   }
   onButtonEvent(event) {
      for (let i = 0; i < event.target.children.length; i++) {
         if (event.target.children[i].children.length % 2 === 0) {
            event.target.children[i].style.color = 'green'
         } else event.target.children[i].style.color = 'red'
      }
   }
   onButtonClick() {
      const uls = document.querySelectorAll('ul.list')

      for (let i = 0; i < uls.length; i++) {
         if (uls[i].children.length % 2 === 0) {
            uls[i].style.color = 'green'
         } else uls[i].style.color = 'red'
      }

      // с созданием пользовательского события
      // const myEvent = new Event('buttonevent', {
      //    bubbles: true,
      //    cancelable: true,
      // })
      // this.listContainer.dispatchEvent(myEvent)
   }
   render(id) {
      const container = document.getElementById(id)

      this.listContainer = ElementCreator.createHTMLElement({
         tag: 'div',
         styles: { display: 'flex', alignItems: 'flex-start', gap: '30px', marginBottom: '20px' },
         events: {
            buttonevent: this.onButtonEvent.bind(this),
         },
      })
      container.append(this.listContainer)

      for (let i = 0; i < this.listNumber; i++) {
         this.listContainer.append(this.createList())
      }

      this.button = ElementCreator.createHTMLElement({
         tag: 'button',
         props: { innerText: 'Зафарбувати парні елементи' },
         styles: {
            border: '1px solid #000',
            borderRadius: '5px',
            padding: '10px 20px',
            backgroundColor: 'grey',
            color: '#fff',
         },
         events: {
            click: this.onButtonClick.bind(this),
         },
      })
      container.append(this.button)
   }
}

const test = new Lists(5, 1, 10, 1, 100)
test.render('container')

console.log(test)
